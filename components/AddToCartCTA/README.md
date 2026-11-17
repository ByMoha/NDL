# AddToCartCTA

The cart control on product cards and rows: add, a quantity stepper, remove, or notify me.

**Figma source:** 🃏 Cards › Add to Cart CTA (Status: cart, one, many, Remove, Notify me, arrow, Status7). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'cart' \| 'arrow' \| 'buy' \| 'one' \| 'many' \| 'remove' \| 'notify-me'` | `one` shows remove instead of minus. `buy` is Figma's Status7 (17 November 2026): Secondary XS, icon left `shopping-basket-add-01`, «اشتر» (F99) |
| `count` | `number` | The quantity |
| `onBuy` | `fn` | `buy`; falls back to `onAdd` |
| `onAdd / onIncrease / onDecrease / onRemove / onNotify` | `fn` | Actions |
| `label, removeLabel, increaseLabel, decreaseLabel` | `string` | Accessible names (Arabic by default) |

## Use

- Move from `cart` to `one` in place when the person adds an item.
- Announce the new quantity to screen readers.
- Use `notify-me` when the product is out of stock.

## Don't

- Do not mirror the stepper in Arabic: minus, number, plus read left to right.
- Do not pre-fill a quantity above one.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
