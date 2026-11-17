# LogosGroup  ·  *Proposed*

Logos Group + Logo Icons + City Logo badge as code.

**Status:** Proposed as a new DL component.  
**Figma source:** 🃏 Cards › Logos Group · Logo Icons (7 entities) · City Logo (Madinah, Mekkah) — Logos Group `70306:7320` · Logo Icons `70306:7326` · City Logo `70306:7355`.  
**Code today:** `NusukChat.LogosGroup` in nk-chat.js (built with: Gradient circles from the Figma fills · inline SVG marks · 4x PNG for raster brand marks).

## Props

| Prop | Notes |
|---|---|
| `items` | [{ entity, city? }] |
| `size` | (32 \| 28 \| 48) |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.
