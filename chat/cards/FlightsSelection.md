# FlightsSelection  ·  *Proposed*

Filters + Flight Ticket (Full) list + show all.

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Flights Selection — Variant `80652:10299`.  
**Code today:** `NusukChat.FlightsSelection` in nk-chat.js (built with: Flight Ticket (Version=Full) × 3 · Ribbon · CTA Ghost MD (arrow-expand-02) · Primary MD).

## Props

| Prop | Notes |
|---|---|
| `title` |  |
| `filters` | [] |
| `flights` | [] |
| `urgency` |  |
| `onConfirm` | (flight) |

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
