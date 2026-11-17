# Days  ·  *Proposed*

Question card + DL DayPicker month grid.

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Days — User=Nusuk `80587:9465`.  
**Code today:** `NusukChat.Days` in nk-chat.js (built with: DL Day Picker (state × availability) · Months_Interaction · DL Button).

## Props

| Prop | Notes |
|---|---|
| `monthLabel` |  |
| `year` |  |
| `today` |  |
| `selected` |  |
| `moons` | [] |
| `onConfirm` | (day) |

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
