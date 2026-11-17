# Question  ·  *Proposed*

Chat question card: type row, title, description, back, content slot, one Primary CTA.

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › _Chat Container — _Chat Container `80453:2664`.  
**Code today:** `NusukChat.Question` in nk-chat.js (built with: DL Button (Primary, MD, icon right tick-02) · _Button Trail (back) · DL TextField in slot).

## Props

| Prop | Notes |
|---|---|
| `type` |  |
| `typeIcon` |  |
| `title` |  |
| `desc` | optional  |
| `onBack` | optional  |
| `children` | (Content slot) |
| `cta` |  |
| `ctaState` |  |
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
