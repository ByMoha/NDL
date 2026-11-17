"""Nusuk blue hue/chroma correction with source lightness and neutrals protected.

Use only for a requested numerical blue-tone correction.
Do not repeatedly process an already locked reference or accepted artwork.
"""
from pathlib import Path
import argparse
import hashlib
import io
import json
import numpy as np
from PIL import Image, ImageCms

M = np.array([[.4124564, .3575761, .1804375],
              [.2126729, .7151522, .0721750],
              [.0193339, .1191920, .9503041]])
WHITE = np.array([.95047, 1., 1.08883])
SRGB = ImageCms.ImageCmsProfile(ImageCms.createProfile('sRGB'))

def load_rgb(path):
    im = Image.open(path)
    icc = im.info.get('icc_profile')
    if icc:
        profile = ImageCms.ImageCmsProfile(io.BytesIO(icc))
        name = ImageCms.getProfileDescription(profile).strip()
        im = ImageCms.profileToProfile(im.convert('RGB'), profile, SRGB,
                                      renderingIntent=1, outputMode='RGB')
    else:
        name = 'untagged; interpreted as sRGB'
        im = im.convert('RGB')
    return np.asarray(im), name

def rgb_to_lab(rgb):
    a = rgb.astype(np.float64) / 255
    linear = np.where(a <= .04045, a / 12.92, ((a + .055) / 1.055) ** 2.4)
    xyz = linear @ M.T / WHITE
    d = 6 / 29
    f = np.where(xyz > d ** 3, np.cbrt(xyz), xyz / (3*d*d) + 4/29)
    return np.stack([116*f[..., 1]-16, 500*(f[..., 0]-f[..., 1]),
                     200*(f[..., 1]-f[..., 2])], -1)

def lab_to_linear(lab):
    fy = (lab[..., 0] + 16) / 116
    f = np.stack([fy+lab[..., 1]/500, fy, fy-lab[..., 2]/200], -1)
    d = 6 / 29
    xyz = np.where(f > d, f**3, 3*d*d*(f-4/29)) * WHITE
    return xyz @ np.linalg.inv(M).T

def blue_mask(rgb):
    a = rgb.astype(float) / 255
    mx, mn = a.max(-1), a.min(-1)
    c = mx-mn
    r,g,b = a[...,0],a[...,1],a[...,2]
    h = np.zeros_like(mx)
    rm = (c>0) & (r==mx)
    gm = (c>0) & ~rm & (g==mx)
    bm = (c>0) & ~rm & ~gm
    h[rm] = ((g[rm]-b[rm])/c[rm]) % 6
    h[gm] = (b[gm]-r[gm])/c[gm]+2
    h[bm] = (r[bm]-g[bm])/c[bm]+4
    h *= 60
    return (h>=190) & (h<=270) & (c>=2/255-1e-12)


def match(source, output, reference, report_path):
    if output.suffix.lower() != '.png':
        raise ValueError('Use a lossless .png output path.')
    assert len({p.resolve() for p in [source, output, reference, report_path]}) == 4
    assert not output.exists(), 'Refusing to overwrite output'
    assert not report_path.exists(), 'Refusing to overwrite report'
    assert source.resolve() != output.resolve()
    with Image.open(source) as original:
        if original.mode != 'RGB':
            raise ValueError('This helper requires RGB artwork; do not silently discard alpha or other channels.')
    output.parent.mkdir(parents=True, exist_ok=True)
    report_path.parent.mkdir(parents=True, exist_ok=True)
    rgb, source_profile = load_rgb(source)
    ref, reference_profile = load_rgb(reference)
    lab, rlab = rgb_to_lab(rgb), rgb_to_lab(ref)
    C = np.hypot(lab[..., 1], lab[..., 2])
    H = np.arctan2(lab[..., 2], lab[..., 1])
    rC = np.hypot(rlab[..., 1], rlab[..., 2])
    rH = np.arctan2(rlab[..., 2], rlab[..., 1])
    rMask = blue_mask(ref) & (rC > .5)
    rows = []
    for center in np.arange(10, 100, 2):
        select = rMask & (np.abs(rlab[..., 0] - center) < 2.5)
        if select.sum() < 30:
            continue
        low, target_c, high = np.percentile(rC[select], [65, 75, 85])
        clean = select & (rC >= low) & (rC <= high)
        target_h = np.arctan2(np.sin(rH[clean]).mean(), np.cos(rH[clean]).mean())
        rows.append([float(center), float(target_c), float(target_h)])
    if len(rows) < 2:
        raise ValueError('The approved reference has insufficient blue range for correction.')
    curve = np.array(rows)
    curve = np.vstack([curve, [100, 0, curve[-1, 2]]])
    mask = blue_mask(rgb) & (C > 3) & (lab[..., 0] < 98)
    old = lab[mask]
    old_c, old_h = C[mask], H[mask]
    target_c = np.interp(old[:, 0], curve[:, 0], curve[:, 1])
    target_h = np.interp(old[:, 0], curve[:, 0], np.unwrap(curve[:, 2]))
    def smoothstep(x):
        x = np.clip(x, 0, 1)
        return x*x*(3-2*x)
    values = rgb[mask].astype(float) / 255
    chroma_rgb = values.max(1) - values.min(1)
    # Continuous colour-only membership avoids contours at blue/gold boundaries.
    membership = smoothstep((chroma_rgb - 2/255) / (14/255))
    strength = smoothstep(old_c / np.maximum(target_c, 1e-6))
    weight = membership * strength
    new_c = old_c + (target_c - old_c) * weight
    rotation = (target_h - old_h + np.pi) % (2*np.pi) - np.pi
    new_h = old_h + rotation * weight
    new = old.copy()
    new[:, 1] = new_c * np.cos(new_h)
    new[:, 2] = new_c * np.sin(new_h)
    assert np.array_equal(new[:, 0], old[:, 0])
    linear = lab_to_linear(new)
    gamut = np.any((linear < 0) | (linear > 1), -1)
    if gamut.any():
        idx = np.flatnonzero(gamut)
        low, high = np.zeros(len(idx)), np.ones(len(idx))
        candidate = new[idx].copy()
        for _ in range(25):
            mid = (low+high)/2
            candidate[:, 1:] = new[idx, 1:] * mid[:, None]
            lin = lab_to_linear(candidate)
            ok = np.all((lin >= 0) & (lin <= 1), -1)
            low = np.where(ok, mid, low)
            high = np.where(ok, high, mid)
        new[idx, 1:] *= low[:, None]
        linear = lab_to_linear(new)
    linear = np.clip(linear, 0, 1)
    encoded = np.where(linear <= .0031308, linear*12.92, 1.055*linear**(1/2.4)-.055)
    pixels = rgb.copy()
    pixels[mask] = np.clip(np.rint(encoded*255), 0, 255).astype(np.uint8)
    changed = np.any(pixels != rgb, -1)
    assert not np.any(changed & ~mask)
    neutral = (C <= 3) | (lab[..., 0] >= 98)
    assert np.array_equal(pixels[neutral], rgb[neutral])
    delta = np.abs(rgb_to_lab(pixels)[..., 0] - lab[..., 0])
    assert delta.max() < .35
    Image.fromarray(pixels).save(output, icc_profile=SRGB.tobytes())
    assert np.array_equal(np.asarray(Image.open(output)), pixels)
    report = {
        'request': 'Match the supplied exact reference blue hue/chroma only; protect source values, white balance and composition.',
        'source': str(source), 'reference': str(reference), 'output': str(output),
        'method': 'Reference-derived clean blue hue/chroma branch at each existing CIELAB L*, with continuous colour-space weighting. No lightness transfer, no spatial operation.',
        'authority': 'Supplied reference: '+str(reference)+'; apply only its recorded selection scope, no official formula inferred.',
        'authorization': 'Use only within the user-authorized blue hue/chroma correction scope.',
        'source_profile': source_profile, 'reference_profile': reference_profile,
        'native_dimensions': [pixels.shape[1], pixels.shape[0]],
        'Lstar_exact_before_quantisation': True,
        'maximum_Lstar_rounding_difference': float(delta.max()),
        'mean_Lstar_rounding_difference': float(delta.mean()),
        'changed_blue_pixels': int(changed.sum()), 'non_blue_pixels_changed': 0,
        'protected_neutral_pixels_changed': 0,
        'source_resampled': False, 'gamut_compressed_pixels': int(gamut.sum()),
        'reference_curve_Lstar_chroma_hue_radians': curve.tolist(),
        'sha256': {str(p): hashlib.sha256(p.read_bytes()).hexdigest() for p in [source, reference, output]},
        'status': 'Value and neutral/non-blue protection verified; actual output visual review required.'
    }
    report_path.write_text(json.dumps(report, indent=2)+'\n')
    print(json.dumps({k: report[k] for k in ['output', 'changed_blue_pixels', 'non_blue_pixels_changed', 'maximum_Lstar_rounding_difference']}))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('source', type=Path)
    parser.add_argument('output', type=Path)
    parser.add_argument('--report', type=Path)
    parser.add_argument("--reference-id", help="Bundled colour reference ID; default is the primary blue anchor.")
    args = parser.parse_args()
    skill_root = Path(__file__).resolve().parents[1]
    manifest = json.loads((skill_root / 'references/manifest.json').read_text())
    authority = manifest['blue_authority']
    selected = {entry['id']: entry for entry in manifest['references']}
    selected.update({entry['id']: entry for entry in manifest.get('palette_references', [])})
    if args.reference_id:
        if args.reference_id not in selected:
            parser.error('Unknown bundled reference ID')
        chosen = selected[args.reference_id]
        authority = dict(reference_id=chosen['id'], path=chosen['path'], sha256=chosen['sha256'])
    reference = (skill_root / 'references' / authority['path']).resolve()
    if not reference.is_relative_to((skill_root / 'references/images').resolve()):
        raise ValueError('Colour reference must belong to the bundled selected set.')
    entry = selected[authority['reference_id']]
    assert entry['path'] == authority['path'] and entry['sha256'] == authority['sha256'], 'Colour anchor is not the recorded selected artwork'
    assert hashlib.sha256(reference.read_bytes()).hexdigest() == authority['sha256'], 'Colour reference hash mismatch'
    report = args.report or args.output.with_suffix('.blue-match.json')
    if any(path.resolve().is_relative_to(skill_root) for path in (args.output, report)):
        raise ValueError('Write new derivatives outside the skill; selected references are immutable.')
    match(args.source, args.output, reference, report)

if __name__ == '__main__':
    main()
