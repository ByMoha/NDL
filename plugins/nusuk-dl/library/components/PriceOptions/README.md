# PriceOptions

The price block of a product card: "from", the price and the cart control.

**Figma source:** [🃏 Cards › Price Options](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl/?node-id=2402-18252) (Vertical False / True · Show Price, Show Add To Cart, Show CTA, Discount). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**18 November 2026 (review comments of 17 Nov):** in Vertical=True the Add to Cart CTA hugs its content and sits at the start (right in Arabic), under the price, as Figma's Bottom frame does. In the discount row the struck-through earlier price comes first (right in Arabic), then the «خصم 25%» pill. The preview shows only Figma's variants: Horizontal and Vertical, each with and without Discount; the Notify me and Buy cases are gone, since Figma only puts the cart icon here.

**17 November 2026:** four booleans. Discount adds a row under the price: a pill (`خصم 25%`, 10, padding 2 / 8, full radius, `alerts-surface-error` with `alerts-text-error`) and the earlier price struck through (12, `alerts-text-error`), 8 apart; price and discount stack 4 apart. Show CTA adds a Secondary XS icon-only button beside the cart control. Figma binds the pill to Foundation's `Buttons/Surface/Error` and `Buttons/Text/Error`, which have no DL token; their values equal the alert error tokens (F97).

## Props

| Prop | Type | Notes |
|---|---|---|
| `price` | `string` | Digits 0–9 |
| `fromLabel` | `string \| false` | "ابتداءً من"; pass `false` when the price is fixed |
| `vertical` | `boolean` | Stacked, for grid cards |
| `cart` | `AddToCartStatus \| false` | The control; `false` hides it |
| `cartProps` | `Partial<AddToCartCTAProps>` |  |
| `showPrice` | `boolean` | Figma Show Price; false hides the from label and the price |
| `discount` | `string` | Figma Discount: the pill text |
| `oldPrice` | `string` | The earlier price, struck through |
| `cta, ctaIcon, ctaLabel, onCta` | `boolean, string, string, fn` | Figma Show CTA. Off by default in code: Figma gives it no purpose and K9 allows one control (F98) |

## Use

- Show "from" only when the price really varies.
- The price is the full price: taxes and fees included, or said beside it.

## Don't

- No struck-through price without a real earlier price: the old price is what was actually charged, and the offer has a real end.
- No discount on Udhiya, Hady or any act of worship (M4), and never paired with urgency.
- No second control beside the cart control (K9).

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
