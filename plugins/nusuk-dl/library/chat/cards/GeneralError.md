# GeneralError  ·  *Proposed*

A question that stops the flow: the 72 error mark, the message (Body 1) and one Primary CTA (Figma Style=General Error, 19 Nov 2026).

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=General Error — User=Nusuk `80759:6908`.  
**Code today:** `NusukChat.GeneralError` in nk-chat.js (built with: Question card (Nusuk/BG) · error mark: Alerts/Surface/Error circle 72 with alert-01 38 in Alerts/Icons/Error · Body 1 · DL Button Primary MD (Icon Left)).

## Props

| Prop | Notes |
|---|---|
| `text` | (\n for a line break) |
| `type` | optional  |
| `typeIcon` | optional  |
| `cta` | optional (label) |
| `ctaEl` | optional  |
| `onConfirm` |  |
| `onBack` | optional  |

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
