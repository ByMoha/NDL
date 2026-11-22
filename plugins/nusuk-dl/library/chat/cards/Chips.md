# Chips  ·  *Proposed*

Follow-up actions: a wrapping row of DL CTA Primary SM with a trailing arrow (Figma 23 Nov 2026; was Chip White LR).

**Status:** Proposed as a variant / prop of DL **Button**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Default — User=Nusuk `80392:4581`.  
**Code today:** `NusukChat.Chips` in nk-chat.js (built with: Content No BG (transparent, help-circle on, footer timestamp only) · DL CTA Kind=Primary, Size=SM, Icon=Right, arrow-right-02 mirrored in RTL · Tags row: wrap, 8 × 8, from the start edge, 12 below).

## Props

| Prop | Notes |
|---|---|
| `items` | string[] |
| `onPick` | (text, i) |
| `question` | optional  |
| `kind` | optional (primary \| secondary; default primary) |
| `size` | optional (sm; ErrorMsg uses xs) |
| `iconName` | optional (default arrow-right-02) |
| `chip` | optional (true = legacy White LR chip, not in Figma since 23 Nov 2026) |

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
