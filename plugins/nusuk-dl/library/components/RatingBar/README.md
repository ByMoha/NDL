# RatingBar

A star rating in half steps, alone or with its value and count; or a 1–5 star input.

**Figma source:** [⭐️ Rating & CSAT › Rating Bar](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76392-4805) (Rating Unrated, 0.5 … 5) on [`_Star`](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76392-4828) (Full, Half, Half/RTL, Empty), and [Ratings](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76479-1128) (Status Box, Mini, Standard · Reviews). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**17 November 2026: rebuilt to Figma.** Solid stars in `icons-longing` on `surface-03-pearl` (code had outlines 14 apart in Illumination and Mist), half stars, the three Ratings and the input of the Customer Feedback Bottom Sheet.

## Figma

- Stars touch (gap 0): 16 in Ratings Standard and Mini, 20 in Box, 24 in the feedback sheet. A half star is gold on the reading-start side (`_Star` Half/RTL in Arabic).
- Standard: the value `notes-1-regular`, the bar 4 after. Mini: the value `notes-2-regular`, one star, «(335)» `notes-2-light`. Box: a 20 star and the value `body-1-regular`, the count line `notes-2-light` under it.
- Figma's Box reads «%s تقييم» beside a separate number; code writes one string with the Arabic plural forms: «234 تقييمًا», «3 تقييمات», «100 تقييم» (F78).

## Props

| Prop | Type | Notes |
|---|---|---|
| `value` | `number` | 0–5; stars round to the nearest half, the number shows one decimal |
| `label` | `string` | Accessible name; default «4.5 من 5», with the count when shown |
| `variant` | `'bar' \| 'standard' \| 'mini' \| 'box'` | Default `bar` (stars only) |
| `size` | `number` | Star size in px |
| `count` | `number` | Number of ratings (Reviews) |
| `showCount` | `boolean` | Default true when `count` is given |
| `onChange` | `(value: number) => void` | Makes it an input: five radios «1 من 5» … «5 من 5» |

## Use

- Show the average with the count (review summary standard).
- As an input, each star is a 48 target (stars 24 apart): Figma's 24 targets touch (F81).

## Don't

- Never rate worship or the ibadah itself.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
