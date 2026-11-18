# Voice  ·  *Proposed*

Voice message: the 42 Ink play button and the waveform (bars on Surface/Longing, played at 100%, the rest at 30%); the duration is in the play button's label.

**Status:** Proposed as a variant / prop of DL **ChatMessage**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Voice — User=User `80392:4534` · User=Nusuk `80601:9269`.  
**Code today:** `NusukChat.Voice` in nk-chat.js (built with: surface-illumination waveform · surface-10-ink play).

## Props

| Prop | Notes |
|---|---|
| `from` |  |
| `duration` |  |
| `progress` |  |
| `question` | optional  |

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
