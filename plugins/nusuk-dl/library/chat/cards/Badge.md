# Badge  ·  *Proposed*

Status mark at the top of a chat bubble: success rosette, failure triangle, alert hexagon; light and dark. Figma 25 Nov 2026.

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › 💬 Chat UI › Badge — light-success `80840:63917` · light-failure `80840:63920` · light-alert `80840:63923` · dark-success `80840:63926` · dark-failure `80841:63960` · dark-alert `80841:63957`.  
**Code today:** `NusukChat.Badge` in nk-chat.js (built with: Alerts/Surface/Success · Error · Warning (light) and Solid Success · Error · Warning (dark); icons tick-02 24 · unavailable 20 · alert-02 38, Alerts/Icons/* or White. Sits first in the _Chat Container Body (start edge, above the question).).

## Props

| Prop | Notes |
|---|---|
| `status` | success \| failure \| alert |
| `color` | light \| dark |
| `label` | optional (spoken name). On Question: badge: "success" \| { status, color } |

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
