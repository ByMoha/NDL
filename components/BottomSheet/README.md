# BottomSheet

The sheet container with grabber for filters, details and short tasks.

**Figma source:** [‼️ Status Handlers › Bottom Sheet BG](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=69025-3308) (Top Action Grabber, Arrow, Static, and the Arrow Direction swap) · 🧭 Navigation › Direction Sheet (Restore, Login, 2 Options, Details, Session timeout, Filter) · ⬆️ Modals & Sheets (Fullscreen sheets, Auxiliary task, Terms). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**17 November 2026:** the grabber sits 5 from the top of its 26 band (it was centred); `topAction` adds Arrow (a 24 `arrow-up-01` in a 39 band) and Static (no band); `overlay="soft"` puts Overlay/Soft behind.

## Props

| Prop | Type | Notes |
|---|---|---|
| `title` | `string` |  |
| `children` | `node` | Sheet body |
| `topAction` | `'grabber' \| 'arrow' \| 'static'` | Default `grabber` |
| `arrow` | `'up' \| 'down'` | Arrow Direction. Default up |
| `arrowLabel` | `string` | Name of the arrow button; default «توسيع» or «تصغير» |
| `onArrow` | `() => void` | |
| `overlay` | `'backdrop' \| 'soft'` | Default the backdrop (50%); soft is 12% |

## Use

- Short tasks only; long tasks get a full-screen sheet with Close.

## Don't

- Do not stack sheets.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
