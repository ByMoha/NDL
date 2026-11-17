# FlightTicket

A flight option as a two-part ticket: route and times, a notched dashed tear line, then airline and price.

**Figma source:** 🏖️ Travel › _Master_Flight Ticket and Flight Ticket (Selected Off / On / Skeleton × Version Full / Mini), Ribbon/On. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**17 November 2026, rebuilt from the Travel file:** 386 wide. Top: padding 26/20/4, radius 18 18 0 0, white rising from `rgba(255,255,255,.3)`, Glass/Top. Departure country (Notes 1), time (20 Light) and code (Notes 1 Light) on the start side, arrival on the end side; between them a 94 column with the duration, a dashed arc with the airplane-02 pill (Ivory, 3 white ring) and «رحلة مباشرة»; under it Default XS chips. Then a 28 tear line: transparent semicircle notches at both edges and a 6/6 dashed Pearl rule. Bottom: airline logos (28 circles overlapping 7.6), airline and «تدار بواسطة» on the start side; seats (warning), riyal 20 + price (20) and «لكل مسافر» on the end side; Glass/Bottom. Selected: Shade 4 gradient, Longing line that follows the notches. Skeleton: Ivory bars in the same layout. Mini: the top part alone, bottom corners 22. Ribbon: «الارخص» on the start corner, 7 above the card.

## Props

| Prop | Type | Notes |
|---|---|---|
| `selected` | `boolean \| 'skeleton'` |  |
| `mini` | `boolean` | Version Mini |
| `from, to` | `{country, time, code}` | Strings still work as codes |
| `duration, stops` | `string` |  |
| `tags` | `string[]` | Default XS chips |
| `ribbon` | `string` | Ribbon/On |
| `airline, operatedBy` | `string` |  |
| `logos` | `{tone, src}[]` | tone: saudia, flynas, egyptair |
| `logosImage` | `string` | One image for the logo group (the preview uses the Figma group) |
| `seats, price, per` | `string` |  |

## Use

- Routes read from the start side; times and codes stay left-to-right.
- Show the ribbon only when it is true for the current results.

## Don't

- Do not use the ribbon for paid placement.
- Do not invent seat counts.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
