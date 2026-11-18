# SectionHeader

Titles for heroes, sections, legends and grouped lists, with an optional tag, action, picker or people.

**Figma source:** 🔌 Misc › Headers. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**17 November 2026, evening — re-read:** Headers has 14 locations, but 7 sit at 10% opacity in Figma (XL Header, Seperate Icon, Widget Header, Simple Title, XS Legend, Section Title With Devider, Filter / Search); they are retired and not built. The 7 live ones:

| `level` | Figma location | Anatomy |
|---|---|---|
| `hero` | 01 Hero | padding 48 / 18 / 26; title Headline 1 (24), description Notes 1, gap 12 |
| `section` | 02 Section Title | padding 32 / 18 / 18; title Body 1 (18); a Notes 2 tag and a Secondary XS icon-only button (arrow-left-02), 8 apart |
| `section-centered` | 02 Section Title / Centered | padding 26 / 18 / 18; title over the tag + button, centred, gap 12 |
| `collapse` | 03 Collaps | padding 26 / 18 / 18; title Body 2 (16) and an XS chevron |
| `legend` | 04 Legend | padding 26 / 18 / 18; title Notes 1 `text-subtle`, a Pearl rule, an XS arrow |
| `complex` | 05 Complex | padding 32 / 18 / 18; the Nusuk mark (38), overline Notes 1 + title Headline 2 (20), and a «القدوم من» picker (Secondary XS with leading chevron) |
| `family` | 06 Family | padding 26 / 18 / 18; «أنت و» + avatars (38, +2), an XS chevron |

Old values still work: `xl` → `hero`, `simple` → `section`, `divider` → `legend`.

## Props

| Prop | Type | Notes |
|---|---|---|
| `level` | `'hero' \| 'section' \| 'section-centered' \| 'collapse' \| 'legend' \| 'complex' \| 'family'` |  |
| `title` | `string` |  |
| `description` | `string` | `hero` |
| `tag` | `string` | `section`, `section-centered` (e.g. «#المحتوى») |
| `actionIcon, actionLabel, onAction` | `string, string, fn` | The XS button; `onAction: false` hides it |
| `open, toggleLabel` | `boolean, string` | `collapse`, `family` |
| `overline, pick, pickLabel, onPick, iconName, mark` | `…` | `complex` |
| `people, more` | `string[], string` | `family` |
| `as` | `string` | Heading tag; default h1 for hero, h2 otherwise |
| `action, divider` | `string, boolean` | Older names: `action` is `tag`, `divider` is `level: 'legend'` |

## Use

- One hero per screen. Section titles name what the section is for.

## Don't

- Do not skip heading levels.
- Do not use the retired (10%) locations.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
