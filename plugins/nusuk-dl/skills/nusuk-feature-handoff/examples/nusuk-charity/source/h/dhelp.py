# Inline-SVG diagram helpers: box(), arr(), svg(). Example figures follow (Support-in-Chat).
# CSS classes expected on the page: .b .b.k .b.ok .b.x .b.q .g .t .s .l .h .a .a.d (see handoff_build.py.txt).
import html
E=html.escape
def box(x,y,w,h,t,sub=None,cls=''):
    s=f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="10" class="b {cls}"/>'
    ty=y+h/2+(4 if not sub else -3)
    s+=f'<text x="{x+w/2}" y="{ty}" text-anchor="middle" class="t">{E(t)}</text>'
    if sub: s+=f'<text x="{x+w/2}" y="{ty+15}" text-anchor="middle" class="s">{E(sub)}</text>'
    return s
def arr(pts,label=None,lx=None,ly=None,dash=False):
    p=' '.join(f'{a},{b}' for a,b in pts)
    s=f'<polyline points="{p}" class="a{" d" if dash else ""}" marker-end="url(#ah)"/>'
    if label:
        if lx is None:
            (x1,y1),(x2,y2)=pts[0],pts[1]; lx=(x1+x2)/2; ly=(y1+y2)/2-6
        s+=f'<text x="{lx}" y="{ly}" text-anchor="middle" class="l">{E(label)}</text>'
    return s
DEFS='<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>'
def svg(w,h,body,label):
    return f'<svg viewBox="0 0 {w} {h}" role="img" aria-label="{E(label)}">{DEFS}{body}</svg>'

# ---- architecture
b=''
b+='<text x="20" y="24" class="h">On the device</text><text x="330" y="24" class="h">Nusuk backend</text><text x="700" y="24" class="h">Systems of record and outside parties</text>'
