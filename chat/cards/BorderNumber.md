# BorderNumber  ·  *Proposed*

Select Card without radio + dependent input.

**Status:** Proposed as a variant / prop of DL **SelectCard**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Border Number — Variant `80607:18463` · رقم التأشيرة `80607:18655` · رقم الحدود `80607:18656` · Input `80607:18657`.  
**Code today:** `NusukChat.BorderNumber` in nk-chat.js (built with: DL Select Card (no radio) · audit-01 · airplane-landing-02 · input label “رقم %s”).

## Props

| Prop | Notes |
|---|---|
| `kind` | "border"\|"visa" |
| `onConfirm` |  |

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
