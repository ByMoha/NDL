# HotelCard

A hotel result: photo, name, distance, rating, room features and price.

**Figma source:** 🏖️ Travel › Hotel. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**17 November 2026:** 373 wide, radius 18, white with Glass/Full. Photo 280 high inside an 8 inset, radius 14, Shadow/SM, a dark fade at the bottom, featured chips top start (Gold «إختيارات نسك» with the Nusuk mark, White «إلغاء حجز مجاني»), favourite top end, pagination dots. Name Body 1, distance Notes 2 Light with the Haramain mark, rating (star, warning) and reviews on the end side; room features in Notes 2 Light with 16 icons and 2-dot separators. A dashed rule, then nights (Notes 1 Light), the bookings note (gold, fire-03), price 28 with riyal, the old price struck in error red and the discount chip. The preview photo is the one in the Figma Hotel component.

## Props

| Prop | Type | Notes |
|---|---|---|
| `image` | `string` | Photo url |
| `photos, photo` | `number` | Dots and current photo |
| `specs` | `{label, state, nusuk}[]` |  |
| `favourite` | `boolean` |  |
| `name, distance, rating, reviews` | `string` |  |
| `features` | `{label, iconName}[]` |  |
| `nights, hot` | `string` | `hot: false` hides the note |
| `price, oldPrice, discount` | `string` |  |

## Use

- Show distance to the Haram first.
- Show the bookings note only with a real count.

## Don't

- Do not invent a discount or a bookings count.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
