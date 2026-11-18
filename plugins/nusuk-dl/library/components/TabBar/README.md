# TabBar

Everything that sits at the bottom of a phone screen: the home tab bar with Nusuk AI, and the action bars (CTAs, cart, filters, share, habits). All end with the home indicator.

**Figma source:** 🧭 Navigation › Tab Bar (18 variants: Active × RTL), Home Item, Marketplace Cart and `_Shop CTA`, read 8 November 2026.

**17 November 2026, later — deprecated home bar removed:** the white home tab bar (Home Item row + «نسك AI» pill, 95 high, top radius 18) and `habits` are deprecated in 🧭 Navigation. Tab Bar's home actives (Landing, Travel, Content, Market/Cart +, Inner Pages) are the glass `_BottomTab master`, so `type` `landing`, `journey`/`travel`, `content`, `market` and `inner-pages` now render **BottomNav** (sliding selected glass, Haramain tab). The action bars stay. The card shows only the current Figma actives.

**17 November 2026:** the glass parts (Inner Pages actions, the Nusuk AI circle) use the GlassBG engine; see BottomNav and GlassBG.

**15 November 2026, evening:** Figma Tab Bar has 16 actives: `Inner Pages` is new (see BottomNav `screen="inner-pages"`) and `Habits` is gone; `habits` still renders for one release (DL-25). No variant has a shadow now, so the bar's 0 −6 30 −12 shadow is removed (N7 closed).

**16 November 2026 (🧭 Navigation, published):** [`_BottomTab master` › Actions](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw) gained a Text slot, the terms line and an optional side button beside the primary CTA.

**18 November 2026 (Moha): no solid fill behind the bar.** What scrolls under it is blurred progressively, strongest at the screen's bottom edge and fading to nothing toward the content: two stacked backdrop layers, a 4 px blur masked over most of the band and a 16 px blur on the outer half, reaching 24 past the bar. The bar's own glass is unchanged. Native: a progressive (variable) blur material behind the bar, not a tinted fill.

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'landing' \| 'travel' \| 'content' \| 'market' \| 'inner-pages' \| 'actions' \| 'action-input' \| 'loading' \| 'filters' \| 'content-share' \| 'floating-cart-empty' \| 'with-price' \| 'cart-with-count' \| 'payment' \| 'floating-profile' \| 'empty'` | Figma Active. The first five render BottomNav (`journey` = `travel`); `habits` is deprecated |
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

- Home tab bar: use BottomNav (glass `_BottomTab master`); the white 95-high bar is deprecated.
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

**17 November 2026, 21:15 ([🧭 Navigation › Tab Bar](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw/?node-id=70301-10665)):** Figma renamed Active=Cart to **Cart with Count** and added **Active=Payment**. Both use `_Shop CTA`: Primary LR, the label first, then `total` and the riyal; Cart with Count keeps the counter (now on Glass BG, 18 from the CTA), Payment's CTA fills the row. `type="cart-with-count"` (`cart` still works) and `type="payment"`; pass `total` and `quantity`. A total shows only the real amount, fees included (M4).
