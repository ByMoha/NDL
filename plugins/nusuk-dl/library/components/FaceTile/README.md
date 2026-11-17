# FaceTile

A coloured tile with a cut-out portrait (reciters, scholars, guides). Group stacks a second tile behind.

**Figma source:** Faces (Group Off, On) in 🃏 Cards › Media Cards (`mg7egvNbr2ciMP04Ig2XDl`). Read 9 November 2026; preview photos 17 November 2026.

**17 November 2026:** the preview uses the cut-out portrait from the Figma Faces component (transparent PNG, Imagery › faces-portrait.png) instead of the placeholder glyph.

## Props

| Prop | Type | Notes |
|---|---|---|
| `backColor` | `QuranColor` |  |
| `backImage` | `string` |  |
| `color` | `QuranColor` |  |
| `group` | `boolean` |  |
| `image` | `string` |  |
| `label` | `string` |  |
| `size` | `number` |  |

## Anatomy

- Front tile 90% of the size, top right, radius 12%; colour from the Quran palette with a white glow; shadow −6, 10, 40, −6 Ink 10%
- Back tile 92%, bottom left, Glass/Full
- Portrait anchored to the bottom, 7% top inset

## Logic

- Emotional / Spiritual realm: a recognisable voice or teacher invites listening.
- Use real, rights-cleared portraits only; never AI-generated faces of real scholars.

## Don't

- Do not put text over the face.
- Do not use more than two colours in one row.

## Native

The code ships no portraits (they are content with usage rights). Pass `image`.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
