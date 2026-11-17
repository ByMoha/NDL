# ReviewSummary

The overall rating with the faces of a few reviewers.

**Figma source:** [⭐️ Rating & CSAT › Total Review Card](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76427-1177) (published). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Figma

A white card, radius 18, padding 18, Shadow/XS as drawn: Group Users (38 avatars overlapping by 15, the remaining count first) at the start, Ratings Standard (value and bar) at the end.

## Props

| Prop | Type | Notes |
|---|---|---|
| `value` | `number` | 0–5 |
| `count` | `number` | Number of ratings, shown as «(335)» |
| `people` | `AvatarGroup people` | Initials or `{ src }` |
| `max` | `number` | Default 4 |
| `more` | `string` | For example «+2» |

## Use

- Put it above the review list; it opens the list.

## Don't

- Do not show faces of people who did not agree to it.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
