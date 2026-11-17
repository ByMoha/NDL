# PaymentDetails

A price breakdown with discounts and total.

**Figma source:** 💸 Payment › Payment Box, Payment Details (Price, Refund), Tickets Payment Details. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `title` | `string` |  |
| `lines` | `{label,amount,discount}[]` |  |
| `total` | `string` |  |
| `totalLabel` | `string` |  |

## Use

- Show every fee before payment; no surprises at the end.

## Don't

- No hidden fees, no pre-selected add-ons.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
