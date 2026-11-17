# ProductTile

A white product-category tile with a 3D product picture and a label, for the store.

**Figma source:** Product Category (Status 3D) in 🏠 Landing Experience V2 › CMS (`9qmiMkJqcEMFY8vbxhcP6r`). Read 9 November 2026.

## Props

| Prop | Type | Notes |
|---|---|---|
| `href` | `string` |  |
| `iconName` | `string` |  |
| `image` | `string` |  |
| `label` | `string` |  |
| `onClick` | `() => void` |  |

## Anatomy

- 124 × 138, white, radius 18, Glass/Full; padding 18/8, gap 10
- Picture 86 × 72 (contain); label `body-2-light` `text-heading`

## Logic

- Desire → intent bridge (Emotional realm: gifts, Zamzam, dates for family). Show the product, not a generic icon.

## Don't

- Do not show prices here; prices belong on the product card.

## Native

Pass the product image from Visual Assets; the code shows a basket icon when none is given.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
