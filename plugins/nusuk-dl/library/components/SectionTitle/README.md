# SectionTitle

The header every section starts with: a title, an optional tag (#المحتوى) or action label (عرض الكل), and the glass arrow that opens the full list.

**Figma source:** [🔌 Misc › Headers](https://www.figma.com/design/ZpduRx4IDZO8eLHTq9nXbj/?node-id=2402-18252) (Location 02 Section Title, 02 Section Title / Centered, 03 Collaps · Actions slot). Read 9 November 2026; re-read 17 November 2026.

**17 November 2026:** 02 Section Title is now 32 top, 18 sides and bottom (Space/XL, Space/NR; it was 48 / 18 / 26), so every pattern header is 24 shorter. New Location **02 Section Title / Centered** (`variant="centered"`): the title centred over the Actions slot, 12 apart, 26 / 18 / 18. The tag and arrow now sit in Figma's **Actions** slot; pass `actions` to put other content there.

## Props

| Prop | Type | Notes |
|---|---|---|
| `action` | `boolean` |  |
| `actions` | `node` | Figma's Actions slot; replaces the tag and the arrow |
| `actionIcon` | `string` |  |
| `actionLabel` | `string` |  |
| `as` | `'h2' \| 'h3'` |  |
| `onAction` | `() => void` |  |
| `tag` | `string` |  |
| `tight` | `boolean` |  |
| `title` | `string` |  |
| `variant` | `'section' \| 'collapse' \| 'centered'` |  |

## Anatomy

- 02 Section Title: padding 32 top, 18 sides and bottom (17 November 2026; was 48 / 18 / 26), gap 18; title `body-1-regular` `text-heading`, one line
- Slot: tag or action label `notes-2-light` + Secondary XS icon-only `arrow-left-02`, gap 8
- 02 Section Title / Centered: column, centred, gap 12, padding 26 / 18 / 18; title `body-1-regular`, the slot under it
- 03 Collaps (inside a card): padding 32 top, 18 bottom, no sides; title `body-2-regular`

## Logic

- Functional (navigation). The arrow means "see all"; when there is nothing more, pass `action={false}` (Cards List does this by default).
- Tag names the content stream (#المحتوى, #الصوتيات) so people know where "see all" leads.

## Don't

- Do not put two arrows in one section.
- Do not use a section title without content under it.

## Native

iOS: a `Section` header view; Android: a `LazyColumn` sticky-less header item. The arrow is a 26 pt control: give it a 44/48 hit area.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
