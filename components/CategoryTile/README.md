# CategoryTile

A tappable glass tile with an icon or image and a short label: services, categories and quick actions.

**Figma source:** Option Card_Master (Type Image, LR, SM, XS) on Glass BG (Navigation=Off) with Glass/Full. Read 9 November 2026.

**17 November 2026:** the tile surface is solid white with `Glass/Full`, as Cards build it. The old surface made the top half see-through and blurred it, which drew a white halo on the menu (Menu & Search review). Same class (`nk-gsurf`), new recipe; GlassBG `kind="card"` is the same surface.

## Props

| Prop | Type | Notes |
|---|---|---|
| `href` | `string` |  |
| `iconName` | `string` |  |
| `image` | `string` |  |
| `label` | `string` |  |
| `onClick` | `() => void` |  |
| `type` | `'image' \| 'lr' \| 'sm' \| 'xs'` |  |

## Anatomy

- Image: 120 × 140, padding 18/12, gap 12, icon slot 64, label `body-2-regular`
- LR: padding 18, gap 8, icon 24, `body-2-regular`
- SM: padding 18, gap 8, icon 20, `notes-1-regular`; 88 × 100 in Featured Actions, 85 × 100 in Services Box
- XS: radius 14, padding 12/8, icon 16, `notes-2-regular`
- Surface: Glass BG Navigation=Off (radial white rim + vertical white glass) and Glass/Full

## Logic

- Functional realm: shortcuts to a service people already intend to use. Keep labels to two short lines (use `\n`).
- Behaviour: reduces search cost (Attention & Cognitive Load). Order by frequency of use, not by org chart.

## Don't

- Do not mix tile sizes in one row.
- Do not use a tile for an action that changes data (book, pay); tiles navigate.

## Native

A button with an image/icon and label; minimum 48 dp target (SM and larger already are).

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
