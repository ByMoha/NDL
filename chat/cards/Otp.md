# Otp  ·  *Proposed*

TextField OTP + ResendTimer inside the Question card.

**Status:** Proposed as a variant / prop of DL **TextField**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › User=Nusuk, Style=Confirmation (OTP · email) — Variant `80607:11146`.  
**Code today:** `NusukChat.Otp` in nk-chat.js (built with: Question card · _Button Trail “تعديل” · OTP fields 62h radius-s · time-04 timer · DL Button Primary).

## Props

| Prop | Notes |
|---|---|
| `email` |  |
| `length` | (4) |
| `seconds` | (59) |
| `onConfirm` | (code) |
| `onEditEmail` |  |

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
