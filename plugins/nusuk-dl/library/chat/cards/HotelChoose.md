# HotelChoose  ·  *Proposed*

Filters + Hotel Offer rail + CTA.

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Hotel Choose — Variant `80625:21403`.  
**Code today:** `NusukChat.HotelChoose` in nk-chat.js (built with: Nusuk/Transparent · Input Select × 3 (Filled) · Hotel Offer cards on scroll-snap rail · DL Chips gold/white/error · footer actions).

## Props

| Prop | Notes |
|---|---|
| `title` |  |
| `filters` | [] |
| `hotels` | [] |
| `urgency` | (bool) |
| `onEditFilter` |  |
| `onConfirm` | (hotel) |

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
