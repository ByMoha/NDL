# MemberCard

A person in a booking: the main pilgrim or a companion. Full width with an action, compact for grids, swipeable, or selectable.

**Figma source:** 🃏 Cards › Member Card / Default (Horizontal [Full, Horizontal] × Disabled), / Actionable (Swaped), / Selection (Selected); `_Card Avatar`, `_Badge Type` (Absher, Contact). Read 8 November 2026.

## Props

| Prop | Type | Notes |
|---|---|---|
| `name, details` | `string` | `body-2-regular` + `notes-1-light` |
| `meta` | `string` | Small line with an arrow under the details: 18 high, text 10, icon 12 (Figma Chips MD with Background Off, rendered XS; CH1) |
| `badge` | `'absher' \| 'contact'` | 16px badge on the avatar |
| `layout` | `'full' \| 'compact'` | compact = Figma Horizontal, 140 wide |
| `action` | `string` | Primary XS CTA with arrow |
| `actionable` | `boolean` | More menu instead of the CTA |
| `swiped` | `boolean` | Shows the delete and favourite tiles on the trailing side: left in Arabic, right in English |
| `selectLabel, moreLabel, deleteLabel, starLabel` | `string` | Names for the icon buttons (Arabic by default) |
| `selectable, selected` | `boolean` | Secondary XS tick |
| `disabled` | `boolean` | Pearl, 70% |
| `src, initials, people` | `…` | Avatar 42px with the `_Card Avatar` shadow (−6, 6, blur 30, spread −12, Ink 5%); `people: 2` shows two |
| `horizontal` | `'Horizontal' \| 'Vertical'` | Figma's property name; `'Horizontal'` = `layout: 'compact'` |

## Use

- Card: white, radius 18, padding 18, gap 12, Glass/Full shadow.

## Don't

- Do not show both an action and a selection tick.

## Known issues

- Selection: Figma `Selected=On` shows an empty pill and `Off` shows the tick (K1). Code shows the tick when selected.
- The meta line is 10px (8px until 9 November 2026), below the 12px minimum for body text (K2).

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
