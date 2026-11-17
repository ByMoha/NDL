# Chips  ·  *Proposed*

Answer chips: Chip White LR with arrow-left-02, as a group.

**Status:** Proposed as a variant / prop of DL **Chip**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Default — User=Nusuk `80392:4581`.  
**Code today:** `NusukChat.Chips` in nk-chat.js (built with: DL Chips (State=White, Size=LR, Icon=Right, arrow-left-02) · Content No BG; with buttons: DL Button MD, leading arrow-left-02 (Arabic) / arrow-right-02 (English)).

## Props

| Prop | Notes |
|---|---|
| `items` | string[] |
| `onPick` | (text, i) |
| `question` | optional  |
| `buttons` | optional (render each as DL Button MD, 15 Nov 2026) |
| `kind` | optional (primary \| secondary, with buttons) |

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
