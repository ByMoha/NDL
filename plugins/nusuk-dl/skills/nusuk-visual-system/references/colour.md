# Colour matching

Inspect the actual reference across focal shadows, midtones and pale washes. **SEL-09 Makkah City** is the default. Use **COL-01 Asset 39** for the selected Umrah Journey palette or an explicit Asset 39 match. Preserve the accepted tones of Tawaf and Sae through unrelated edits.

Protect gold, green accents, neutral whites and source lightness. A blue-tone correction changes hue/chroma only; it does not transfer exposure, deepen shadows or alter white balance.

## Optional numerical helper

Requires Python, NumPy and Pillow. For a requested blue-only correction:

```sh
python scripts/match_blue_tone.py source.png new-output.png --report colour-qa.json
```

To use Asset 39:

```sh
python scripts/match_blue_tone.py source.png new-output.png --reference-id COL-01 --report colour-qa.json
```

The helper verifies the bundled reference hash, compares in sRGB/CIELAB and adjusts blue hue/chroma at each existing L*. It protects neutral and non-blue pixels and reports small 8-bit lightness rounding differences. It requires RGB source artwork, refuses existing output/report files and writes derivatives outside the skill. Inspect the result and report before delivery.

Use numerical processing only within the requested colour correction. Do not repeatedly regrade accepted checkpoints or use this procedure for painting, smoothing, masks, compositing, resizing or value changes. Use Imagegen for those visual changes.
