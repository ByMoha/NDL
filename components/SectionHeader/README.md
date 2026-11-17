# SectionHeader

Titles for heroes, sections and legends, with optional description and action.

**Figma source:** 🔌 Misc › Headers (13 locations: Hero, XL Header, Section Title, Simple Title, Legend, Collapse, Family, Filter / Search…). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `level` | `'hero' \| 'xl' \| 'section' \| 'simple' \| 'legend'` |  |
| `title` | `string` |  |
| `description` | `string` |  |
| `action` | `string` | "See all" |
| `divider` | `boolean` |  |

## Use

- One hero per screen. Section titles name what the section is for.

## Don't

- Do not skip heading levels.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
