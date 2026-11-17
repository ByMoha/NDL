# FlightTicket

A flight option with route, times, tag and price; full, selected and skeleton.

**Figma source:** 🏖️ Travel › Flight Ticket (Selected × Version), Hotel Ticket, From To, Room Layout, Places & Events. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `selected` | `boolean \| 'skeleton'` |  |
| `airline` | `string` |  |
| `from` | `string` |  |
| `to` | `string` |  |
| `fromTime` | `string` |  |
| `toTime` | `string` |  |
| `meta` | `string` |  |
| `price` | `string` |  |
| `tag` | `string` |  |

## Use

- Routes and times read left to right in every language.

## Don't

- Do not use the tag for paid placement without saying so.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
