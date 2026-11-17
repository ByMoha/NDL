# TabBar

Everything that sits at the bottom of a phone screen: the home tab bar with Nusuk AI, and the action bars (CTAs, cart, filters, share, habits). All end with the home indicator.

**Figma source:** 🧭 Navigation › Tab Bar (18 variants: Active × RTL), Home Item, Marketplace Cart and `_Shop CTA`, read 8 November 2026.

**17 November 2026:** the glass parts (Inner Pages actions, the Nusuk AI circle) use the GlassBG engine; see BottomNav and GlassBG.

**15 November 2026, evening:** Figma Tab Bar has 16 actives: `Inner Pages` is new (see BottomNav `screen="inner-pages"`) and `Habits` is gone; `habits` still renders for one release (DL-25). No variant has a shadow now, so the bar's 0 −6 30 −12 shadow is removed (N7 closed).

**16 November 2026 (🧭 Navigation, published):** [`_BottomTab master` › Actions](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw) gained a Text slot, the terms line and an optional side button beside the primary CTA.

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'landing' \| 'journey' \| 'content' \| 'market' \| 'actions' \| 'action-input' \| 'loading' \| 'filters' \| 'content-share' \| 'habits' \| 'floating-cart-empty' \| 'floating-cart' \| 'with-price' \| 'cart' \| 'floating-profile' \| 'empty'` | Figma Active. The first four are the home tab bar with that tab current; `market` adds the cart strip |
| `items` | `{ icon, label }[]` | Home tabs. Default: اليوم, رحلتي, المحتوى, المتجر with the Nusuk icons |
| `active` | `number` | Current home tab |
| `title` | `string` | Line above the actions, `notes-1-regular` |
| `text` | `string` | `actions`: the Text slot above the buttons (16 Nov 2026), `notes-1-regular`; replaces `title` |
| `terms` | `boolean \| string` | `actions`: terms line. `true` = «بالمتابعة، فإنك توافق على الشروط والأحكام.» with the terms as a link |
| `termsHref` | `string` | Link of the terms |
| `onTerms` | `() => void` | |
| `side` | `string \| {icon, label, onClick}` | `actions`: Secondary LR icon button (74 × 48) beside the primary. Pass `label` |
| `onPrimary` | `() => void` | |
| `onSecondary` | `() => void` | |
| `primary, secondary` | `string` | CTA labels |
| `total, people, more, action` | `…` | Cart and floating bars |
| `price, fromLabel, quantity, progress` | `…` | with Price, Cart and Habits |
| `ai` | `boolean` |  |
| `aiLabel` | `string` |  |
| `decreaseLabel` | `string` |  |
| `increaseLabel` | `string` |  |
| `label` | `string` |  |
| `placeholder` | `string` |  |
| `progressLabel` | `string` |  |

### Parts

| Part | Figma | Notes |
|---|---|---|
| `HomeItem` | Home Item (Current On / Off) | 56×46, icon 24, `notes-2-regular` |
| `HomeIndicator` | Bars/Home Indicator | 134×5 Ink bar |

## Use

- Home tab bar: 95 high, white, top radius 18. Current tab: solid icon in `surface-longing` with a soft glow, label `text-heading`.
- Action bars fade from transparent to white (80%) so content scrolls under them.
- The Nusuk AI shimmer plays once (3 s) when the bar appears. Replay it only for a new reason, such as a new suggestion; never loop it (M8, WCAG 2.2.2).

## Don't

- Do not put more than four tabs next to Nusuk AI.
- Do not use the home tab bar inside a flow; use an action bar.

## Known issues

- `Screen Controller` and `Keyboard` are not rebuilt (invisible hit areas and the iOS keyboard). `empty` gives the bare home indicator.
- Action & Input uses `TextField type="action"`; Figma shows a GPS icon button inside the field.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
