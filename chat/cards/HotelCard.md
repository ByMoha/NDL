# HotelCard  ·  *Proposed*

“Hotel Offer”: no DL equivalent (MediaCard has no specs row or nights).

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › Hotel Offer — In variant `80625:21403`.  
**Code today:** `NusukChat.HotelCard` in nk-chat.js (built with: Media Cards/Image=01 · Like Icon · star · Hajj Service · door-02 · bed-double · man-woman · fire-03 · riyal).

## Props

| Prop | Notes |
|---|---|
| `hotel` |  |
| `selected` |  |
| `urgency` |  |
| `onSelect` |  |

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
