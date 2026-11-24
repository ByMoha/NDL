# Loading  ·  *Proposed*

Typing / loading state.

**Status:** Proposed as a variant / prop of DL **ChatMessage**.  
**Figma source:** 💬 Chat UI › _Chat Container Master › Status=Loading — Type=Nusuk `80451:18763` · Type=User `80501:2248` · AI Chat Messages › User=Nusuk, Style=Loading `80835:33952` · AI Chat Messages › User=User, Style=Loading `80392:4524`.  
**Code today:** `NusukChat.Loading` in nk-chat.js (built with: DL Loading Text (Status 00–03): three icons-black dots 3.66, one grows to 5.85 from the start edge, 150 ms a step, ease-out).

## Props

| Prop | Notes |
|---|---|
| `from` |  |

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
