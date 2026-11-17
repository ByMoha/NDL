# SelCard  ·  *Proposed*

iconNode (any icon) and radio: false.

**Status:** Proposed as a variant / prop of DL **SelectCard**.  
**Figma source:** 📻 Switches, Checkbox, and Radio › Select Card (Active, Selected, Disabled) — Select Card `70416:652` · Status=Active `70416:655` · Status=Selected `70416:657`.  
**Code today:** `NusukChat.SelCard` in nk-chat.js (built with: DL classes nk-selcard + nk-radio).

## Props

| Prop | Notes |
|---|---|
| `icon` |  |
| `title` |  |
| `selected` |  |
| `radio` |  |
| `onClick` |  |

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
