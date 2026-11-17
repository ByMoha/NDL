# SingleChoose  ·  *Proposed*

Option Cards (Icon with Action) as one radio group; the chosen card takes Alerts/Surface/Success and a green action (12 Nov 2026).

**Status:** Proposed as a variant / prop of DL **OptionCard**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Single Choose — Variant `80626:36740`.  
**Code today:** `NusukChat.SingleChoose` in nk-chat.js (built with: Question card · DL Option Cards (Icon with Action) · Alerts/Surface/Success · Buttons Green · DL Button Primary MD).

## Props

| Prop | Notes |
|---|---|
| `type` |  |
| `typeIcon` |  |
| `title` |  |
| `options` | [{icon, title}] |
| `selected` |  |
| `onConfirm` | (option, i) |

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
