# Mixed  ·  *Proposed*

Question card in the bubble with follow-up DL Buttons outside it (Nusuk), or an answer card with content outside it (user). Figma 25 Nov 2026.

**Status:** Proposed as a variant / prop of DL **ChatMessage**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Mixed — User=Nusuk `80835:33795` · User=User `80835:31779`.  
**Code today:** `NusukChat.Mixed` in nk-chat.js (built with: _Chat Container Master Type=Nusuk/Mixed · User/Mixed · DL CTA Kind=Primary, Size=SM, Icon=No Icon · Actions row: wrap, 8 × 8, from the start edge).

## Props

| Prop | Notes |
|---|---|
| `from` |  |
| `type` |  |
| `typeIcon` | optional  |
| `title` |  |
| `desc` | optional  |
| `items` | string[] (Nusuk follow-ups) |
| `onPick` | (text, i) |
| `kind` | optional  |
| `size` | optional  |
| `below` | optional (user) |
| `question` | optional (user) |

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
