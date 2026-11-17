# ProgressRing

A small ring showing progress through a form or steps, with an optional title.

**Figma source:** 🧭 Navigation › Progress and `_Form Progress Indicator` (P20–P100).

## Props

| Prop | Type | Notes |
|---|---|---|
| `value` | `number` | 0–1 |
| `text` | `string` | Inside the ring, e.g. 1/4 |
| `title, subtitle` | `string` | `body-2-regular` and `notes-2-light` |
| `label` | `string` | Accessible name |

## Use

- Track `surface-03-pearl`, progress `surface-illumination`.

## Don't

- Do not use for loading; use the loading state of Button.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
