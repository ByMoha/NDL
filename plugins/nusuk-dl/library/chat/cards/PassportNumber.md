# PassportNumber  ·  *Proposed*

TextField Input with a trailing camera action.

**Status:** Proposed as a variant / prop of DL **TextField**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Passport (renamed from Pasport on 14 November 2026) — Variant `80607:18228` · Input `80607:18418`.  
**Code today:** `NusukChat.PassportNumber` in nk-chat.js (built with: nk-field-box · camera-02 trailing).

## Props

| Prop | Notes |
|---|---|
| `onConfirm` | (number) |
| `onScan` |  |

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
