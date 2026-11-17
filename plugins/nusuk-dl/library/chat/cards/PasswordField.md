# PasswordField  ·  *Proposed*

Password field (62), then its Strength Meter: the criteria as DL Checkbox SM, 8 apart, and the view toggle (F24).

**Status:** Proposed as a variant / prop of DL **TextField**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Password — Variant `80607:16432` · Input/Type=Password `80607:16851`.  
**Code today:** `NusukChat.PasswordField` in nk-chat.js (built with: nk-field-box (62h) · view (Figma icon) · 5 criteria as DL Checkbox SM below the field · DL Button Primary MD).

## Props

| Prop | Notes |
|---|---|
| `onConfirm` | (password) |
| `onBack` |  |

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
