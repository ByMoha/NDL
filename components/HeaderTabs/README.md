# HeaderTabs

Segmented tabs for switching views inside one screen, with optional counts.

**Figma source:** 🎹 Tabs › Header Tabs (Size × Background), Number Notification. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**15 November 2026, evening (read from 🎹 Tabs, published):** the chosen tab is a white pill with `text-heading` and a soft shadow (Figma `_Tab_Master/On`), on the track (Background On) or on nothing (Background Off). Code drew it Ink with white text; that is fixed. `background={false}` is now the bare track (it used to switch to the glass toolbar tabs; pass `light` for those). Tabs: 30 high in SM, 20 padding, 8 apart, icons 20.

**17 November 2026:** `light` (the glass version in toolbars) uses GlassBG `field` glass with Dark=On; the plain track stays Ivory.

## Props

| Prop | Type | Notes |
|---|---|---|
| `tabs` | `(string \| {label,count})[]` |  |
| `active` | `number` |  |
| `size` | `'sm' \| 'lr'` |  |
| `background` | `boolean` | false = the glass version used in toolbars: Glass BG, active tab white with a soft shadow (Navigation, 8 November 2026) |
| `onChange` | `(index) => void` | Called when the person picks a tab. The tabs keep their own state, so `active` is the starting tab (9 November 2026) |
| `light` | `boolean` |  |

## Use

- Two to four short labels.

## Don't

- Do not use for navigation between sections of the app.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
