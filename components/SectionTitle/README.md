# SectionTitle

The header every section starts with: a title, an optional tag (#المحتوى) or action label (عرض الكل), and the glass arrow that opens the full list.

**Figma source:** Headers (remote, Navigation): Location 02 Section Title, 03 Collaps. Read 9 November 2026.

## Props

| Prop | Type | Notes |
|---|---|---|
| `action` | `boolean` |  |
| `actionIcon` | `string` |  |
| `actionLabel` | `string` |  |
| `as` | `'h2' \| 'h3'` |  |
| `onAction` | `() => void` |  |
| `tag` | `string` |  |
| `tight` | `boolean` |  |
| `title` | `string` |  |
| `variant` | `'section' \| 'collapse'` |  |

## Anatomy

- 02 Section Title: padding 48 top, 18 sides, 26 bottom (18 when `tight`), gap 18; title `body-1-regular` `text-heading`, one line
- Slot: tag or action label `notes-2-light` + Secondary XS icon-only `arrow-left-02`, gap 8
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
