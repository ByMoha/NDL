# AddedNationalities  ·  *Proposed*

Removable chips with flags (Button Secondary XS icon-left today).

**Status:** Proposed as a variant / prop of DL **Chip**.  
**Figma source:** 💬 Chat UI › Name + Nationalities — Label `80470:16139` · Chips `80470:16140`.  
**Code today:** `NusukChat.AddedNationalities` in nk-chat.js (built with: CTA Secondary XS Icon=Left (cancel-circle) · _Button Trail Leading · Flags Small).

## Props

| Prop | Notes |
|---|---|
| `items` | code[] |
| `onRemove` | (code) |

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
