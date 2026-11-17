# Nudge

One announcement above the bottom navigation: an illustration, one line and one action.

**Figma source:** 🧭 Navigation › Nudges (Expand On / Off) on `_Nudges Master`. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `title` | `string` | One line |
| `expand` | `boolean` | `false` mirrors Expand=Off (60% scale, N17): do not ship |
| `art` | `node \| false` | The illustration from Visual Assets; a Kaaba icon stands in |
| `actionLabel / onAction` | `string / fn` | The accessible name and the action |

## Use

- A real, dated event: registration opens, a permit is ready.
- One at a time; it follows the interrupt tiers (DESIGN.md › M9S).

## Don't

- No promotions, no countdowns, nothing in a sacred window.
- No second line and no second action.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
