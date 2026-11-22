# ErrorMsg  ·  *Proposed*

Error message = DL Alert (error) + a row of recovery actions as DL CTA Primary XS (Figma 23 Nov 2026).

**Status:** Proposed as a variant / prop of DL **ChatMessage**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Error — User=Nusuk `80392:4595`.  
**Code today:** `NusukChat.ErrorMsg` in nk-chat.js (built with: Content No BG · DL Alerts Type=Error (alert-02), full width · 18 · DL CTA Kind=Primary, Size=XS, Icon=Right, arrow-right-02 mirrored in RTL · Tags row: wrap, 8 × 8, 12 below).

## Props

| Prop | Notes |
|---|---|
| `text` |  |
| `items` | (recovery actions; default أعد المحاولة) |
| `onPick` |  |
| `kind` | optional  |
| `size` | optional (default xs) |
| `chip` | optional (legacy) |

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
