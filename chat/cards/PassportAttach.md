# PassportAttach  ·  *Proposed*

Select Card without radio as the answer (no CTA).

**Status:** Proposed as a variant / prop of DL **SelectCard**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Passport Attach — Variant `80607:19234` · إرفاق الصورة `80607:19465` · التقاط صورة `80607:19466`.  
**Code today:** `NusukChat.PassportAttach` in nk-chat.js (built with: DL Select Card × 2 · image-02 · camera-02 · no CTA).

## Props

| Prop | Notes |
|---|---|
| `onPick` | (mode, url) |
| `realPicker` |  |

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
