# IbanField  ·  *Proposed*

TextField Action (verify) + Filled-Disabled bank row with logo.

**Status:** Proposed as a variant / prop of DL **TextField**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=IBAN — Variant `80607:18703` · Name `80607:19076` · IBAN (Action) `80607:19077` · Bank (Disabled) `80607:19078`.  
**Code today:** `NusukChat.IbanField` in nk-chat.js (built with: Input Filled · Input Action + Secondary SM “تحقّق” · Input Filled Disabled + rajhi).

## Props

| Prop | Notes |
|---|---|
| `name` |  |
| `iban` |  |
| `verified` |  |
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
