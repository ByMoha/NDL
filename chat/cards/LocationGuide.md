# LocationGuide  ·  *Proposed*

Photo + steps + open-maps select cards.

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Location Guide — Variant `80622:21047`.  
**Code today:** `NusukChat.LocationGuide` in nk-chat.js (built with: Nusuk/BG container · image radius-md · Notes 1 steps · DL Select Card × 2 (maps, google maps)).

## Props

| Prop | Notes |
|---|---|
| `title` |  |
| `image` |  |
| `steps` |  |
| `query` |  |
| `onNusukMaps` |  |
| `onGoogleMaps` |  |

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
