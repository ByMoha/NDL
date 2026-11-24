# Text  ·  *Proposed*

Answer text with question echo and “تعديل الإجابة”.

**Status:** Proposed as a variant / prop of DL **ChatMessage**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Text — User=User `80835:30455` · User=Nusuk `80601:9158`.  
**Code today:** `NusukChat.Text` in nk-chat.js (built with: Light/Body/One · _Button Trail + edit-02 · Footer actions copy-01 / thumbs-up / thumbs-down).

## Props

| Prop | Notes |
|---|---|
| `from` |  |
| `text` |  |
| `question` | optional  |
| `editable` | optional  |
| `onEdit` | optional  |

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
