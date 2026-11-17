# PriceOptions

The price block of a product card: "from", the price and the cart control.

**Figma source:** 🃏 Cards › Price Options (Vertical False / True). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `price` | `string` | Digits 0–9 |
| `fromLabel` | `string \| false` | "ابتداءً من"; pass `false` when the price is fixed |
| `vertical` | `boolean` | Stacked, for grid cards |
| `cart` | `AddToCartStatus \| false` | The control; `false` hides it |
| `cartProps` | `Partial<AddToCartCTAProps>` |  |

## Use

- Show "from" only when the price really varies.
- The price is the full price: taxes and fees included, or said beside it.

## Don't

- No struck-through price without a real earlier price.
- No second control beside the cart control (K9).

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
