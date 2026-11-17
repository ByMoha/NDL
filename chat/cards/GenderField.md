# GenderField  ·  *Proposed*

Select Card with custom icon (hijab / haji).

**Status:** Proposed as a variant / prop of DL **SelectCard**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Gender — Variant `80607:17682` · أنثى `80607:18050` · ذكر `80607:18051`.  
**Code today:** `NusukChat.GenderField` in nk-chat.js (built with: DL Select Card (Active / Selected) · hijab, haji).

## Props

| Prop | Notes |
|---|---|
| `value` |  |
| `onConfirm` | (value) |

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
