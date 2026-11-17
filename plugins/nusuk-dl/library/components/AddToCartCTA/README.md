# AddToCartCTA

The cart control on product cards and rows: add, a quantity stepper, remove, or notify me.

**Figma source:** [🃏 Cards › Add to Cart CTA](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl/?node-id=70399-6858) (Status: arrow, cart, Status7, one, many, Remove, Notify me). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**17 November 2026, 21:35, rebuilt:** every status is now an instance of CTA Secondary XS, so the sizes are the CTA's. `arrow` and `cart` are 42 (cart takes `shopping-basket-add-01` 18); `one` and `many` are 138 on Glass BG, `one` with a destructive icon-only `delete-01` 18; `remove` puts `shopping-basket-remove-01` 16 before «إزالة» (70); `notify-me` puts `notification-02` 16 after «نبهني عند التوفر» (138); `buy` (Status7) is unchanged (71).

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'cart' \| 'arrow' \| 'buy' \| 'one' \| 'many' \| 'remove' \| 'notify-me'` | `one` shows remove (`delete-01`) instead of minus. `buy` is Figma's Status7: Secondary XS, icon left `shopping-basket-add-01`, «اشتر» (F99) |
| `count` | `number` | The quantity |
| `onBuy` | `fn` | `buy`; falls back to `onAdd` |
| `onAdd / onIncrease / onDecrease / onRemove / onNotify` | `fn` | Actions |
| `label, removeLabel, increaseLabel, decreaseLabel` | `string` | Accessible names (Arabic by default) |

## Sizes

| Status | Width | Icon |
|---|---|---|
| arrow, cart | 42 | `arrow-left-02`, `shopping-basket-add-01` 18 |
| buy | 71 | `shopping-basket-add-01` 16, leading |
| one | 138 | `delete-01` 18 in a destructive icon-only button; plus 16 |
| many | 138 | minus and plus 16 |
| remove | 70 | `shopping-basket-remove-01` 16, leading |
| notify-me | 138 | `notification-02` 16, trailing |

## Native

iOS: one `NusukAddToCart` view over `NusukButton` (Secondary XS); the stepper is an `HStack(spacing: 8)` 138 × 30 on the glass fill, `.environment(\.layoutDirection, .leftToRight)`, the number `.frame(maxWidth: .infinity)`. Android: a `Row(Modifier.width(138.dp), horizontalArrangement = spacedBy(8.dp))` inside `CompositionLocalProvider(LocalLayoutDirection provides Ltr)`; announce the new quantity (`stateDescription`).

## Use

- Move from `cart` to `one` in place when the person adds an item.
- Announce the new quantity to screen readers.
- Use `notify-me` when the product is out of stock.

## Don't

- Do not mirror the stepper in Arabic: minus, number, plus read left to right.
- Do not pre-fill a quantity above one.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
