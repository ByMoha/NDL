# Fld  ·  *Proposed*

Trailing slot (icon button / action button / logo) and floating label.

**Status:** Proposed as a variant / prop of DL **TextField**.  
**Figma source:** ⌨️ Inputs › Input (Type Input, Action · Status Default, Error, Disabled · Filled Off, On) — Input `68394:7766` · Type=Input, Status=Default `68394:7797` · Type=Action, Status=Default `68394:7857`.  
**Code today:** `NusukChat.Fld` in nk-chat.js (built with: DL classes nk-field / nk-field-box + DL Hint).

## Props

| Prop | Notes |
|---|---|
| `label` |  |
| `placeholder` |  |
| `value` |  |
| `onChange` |  |
| `state` |  |
| `hint` |  |
| `lead` |  |
| `trail` |  |
| `floating` |  |
| `type` |  |
| `inputMode` |  |
| `dir` |  |

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
