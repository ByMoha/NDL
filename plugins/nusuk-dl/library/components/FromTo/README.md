# FromTo

Departure and arrival pickers with the trip-type tabs and a swap button.

**Figma source:** 🏖️ Travel › From To / Destination (Status Default / Active) on _Master From To. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**18 November 2026 (review comments of 17 Nov):** every line in a field lines up on that field's own edge: the start side for the departure field, the end side for the arrival field. Latin values («LCY», «23 Jun», «2025») sit under their Arabic label instead of drifting to the far side.

**17 November 2026:** tabs are three 38-high pills (Ink selected, white otherwise, Body 2). The card is white, radius 18, padding 26/20, gap 12, Glass/Full. Each field: a 24 icon (airplane-take-off-02 / airplane-landing-02), label Body 2 Light at 70%, value Headline 2 Light `text-subtle`, city Body 2 Light. The swap button is a black 54 × 48 pill with arrow-data-transfer-horizontal (26), at 40% until both ends are set (`active`).

## Props

| Prop | Type | Notes |
|---|---|---|
| `tabs` | `string[] \| false` |  |
| `tab, onTab` | `number, fn` |  |
| `from, to` | `{label, value, sub, iconName}` |  |
| `active` | `boolean` | Both ends chosen |
| `onSwap` | `fn` |  |
| `swapLabel` | `string` | Name of the swap button, default «تبديل المغادرة والوصول» |

## Use

- Keep the airport code as the value once chosen.

## Don't

- Do not hide the swap button; dim it.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
