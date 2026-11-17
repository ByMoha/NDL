# MobileField  ·  *Proposed*

Mobile: country code 115 + number (TextField Mobile).

**Status:** Proposed as a variant / prop of DL **TextField**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Mobile — Variant `80607:17062` · Input/Type=Mobile `80607:17346`.  
**Code today:** `NusukChat.MobileField` in nk-chat.js (built with: country code select 115 + input 357 · DL Flag · arrow-down-01).

## Props

| Prop | Notes |
|---|---|
| `onConfirm` | ("+966 05…") |
| `onBack` |  |

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
