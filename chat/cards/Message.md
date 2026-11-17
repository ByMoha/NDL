# Message  ·  *Proposed*

Adds Nusuk/User × BG/Transparent, question echo, footer actions and the Nusuk Bot avatar.

**Status:** Proposed as a variant / prop of DL **ChatMessage**.  
**Figma source:** 💬 Chat UI › _Chat Container Master — Status=Chat, Type=Nusuk/BG `80451:18764` · Status=Chat, Type=Nusuk/Transprent `80578:5431` · Status=Chat, Type=User/BG `80451:18765` · Status=Chat, Type=User/Transprent `80578:5289`.  
**Code today:** `NusukChat.Message` in nk-chat.js (built with: tokens: surface-01-white, radius-md, radius-xs (tail), glass-full, space-md/nr/lr/sm · DL Avatar (XS, Ink)).

## Props

| Prop | Notes |
|---|---|
| `from` | "nusuk"\|"user" |
| `bg` | boolean |
| `question` | optional string |
| `actions` | optional boolean |
| `time` | optional string |
| `footer` | optional false |

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
