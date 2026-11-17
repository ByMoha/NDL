# ReviewCard

One person's review: who, what they said, their rating and when.

**Figma source:** [⭐️ Rating & CSAT › Product Review Card](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76404-3197) (published). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Figma

A white card, radius 18, padding 18, 12 apart, Shadow/XS as drawn. Avatar SM (42) with a 1.5 white ring at the start; the name `notes-1-regular` and the review `body-2-light` (`text-content`), 4 apart; under them Ratings Mini without the count and the date `notes-2-light` in `text-note`.

Figma's sample says «مياه زمزم», «نُسك» and «22 Jun 2025» in Arabic; the preview uses «ماء زمزم», «نسك» and «22 يونيو 2025» (F82).

## Props

| Prop | Type | Notes |
|---|---|---|
| `name` | `string` | |
| `children` | `node` | The review |
| `text` | `string` | Same as `children` |
| `rating` | `number` | 0–5 |
| `date` | `string` | As the reader writes dates: «22 يونيو 2025» |
| `dateTime` | `string` | Machine date for `<time>` |
| `avatar` | `string` | Photo URL |
| `initials` | `string` | Default the name's first letter |

## Use

- Show the person's words as written; never edit a review's meaning.

## Don't

- Do not invent reviews or show one without the person's consent.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
