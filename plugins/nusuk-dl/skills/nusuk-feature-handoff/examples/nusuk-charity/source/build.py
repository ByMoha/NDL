# Inlines DL tokens.css, bundle.css, bundle.js and the app into one prototype page.
# local: React from the DL library's vendor copy (offline testing) · publish: React 18.3.1 from cdnjs.
import sys
mode = sys.argv[1]
import os
HERE = os.path.dirname(os.path.abspath(__file__))
# DL files and React come from the plugin itself when this example is used in place; local dl/ and vendor/ folders win if present
ALT = {'dl/': os.path.join(HERE, '../../../../nusuk-design-language/assets/'), 'vendor/': os.path.join(HERE, '../../../../../library/vendor/')}
def r(p):
    for pre, alt in ALT.items():
        if p.startswith(pre) and not os.path.exists(os.path.join(HERE, p)): return open(alt + p[len(pre):], encoding='utf-8').read()
    return open(os.path.join(HERE, p), encoding='utf-8').read()
react = (f"<script>{r('vendor/react.production.min.js')}</script><script>{r('vendor/react-dom.production.min.js')}</script>" if mode == 'local' else
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js"></script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js"></script>')
html = f'''<!DOCTYPE html>
<html lang="ar" dir="rtl" data-theme="gold-light">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Nusuk · Charity (نسك الإنسانية) · prototype</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;600&family=IBM+Plex+Sans+Arabic:wght@300;400&family=IBM+Plex+Mono:wght@500&display=swap">
<style>{r('dl/tokens.css')}</style><style>{r('dl/bundle.css')}</style><style>{r('style-base.css')}</style><style>{r('style.css')}</style>
{react}
<script>{r('dl/bundle.js')}</script>
</head><body><div id="root" class="nk"></div><script>{r('img.js')}</script><script>{r('app.js')}</script></body></html>'''
out = 'proto-local.html' if mode == 'local' else 'prototype.html'
open(os.path.join(os.getcwd(), out), 'w', encoding='utf-8').write(html); print(out, len(html))
