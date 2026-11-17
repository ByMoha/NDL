# Slots  ·  *Proposed*

Question card + DL PrayCard + DL TimeSlot groups.

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Slots — User=Nusuk `80593:6839`.  
**Code today:** `NusukChat.Slots` in nk-chat.js (built with: DL Pray Card · DL Time slot card · muslim icon).

## Props

| Prop | Notes |
|---|---|
| `prayer` |  |
| `slot` |  |
| `onConfirm` | (time) |

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
