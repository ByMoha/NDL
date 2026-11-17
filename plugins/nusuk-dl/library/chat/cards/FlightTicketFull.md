# FlightTicketFull  ·  *Proposed*

Version=Full: countries, flags, duration arc, tags, ribbon, airline group, seats, per-traveller price.

**Status:** Proposed as a variant / prop of DL **FlightTicket**.  
**Figma source:** 🏖️ Travel › Flight Ticket › Version=Full (Selected Off, On, Skeleton) — Flight Ticket `70393:18670` · Selected=Off, Version=Full `70393:18671` · Selected=On, Version=Full `70393:18673` · Selected=Skeleton, Version=Full `70393:18675` · _Master_Flight Ticket `70393:18605`.  
**Code today:** `NusukChat.FlightTicketFull` in nk-chat.js (built with: DL FlightTicket is the compact version; this is the Full version, as the chat file uses it).

## Props

| Prop | Notes |
|---|---|
| `flight` |  |
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
