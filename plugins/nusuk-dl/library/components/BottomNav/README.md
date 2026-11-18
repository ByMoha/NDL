# BottomNav

The floating bottom navigation: a glass capsule of destinations with one optional round button, new on 10 November 2026.

**17 November 2026 — glass as Figma builds it:** the Primary bar is [Glass BG](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo?node-id=65346-1296) `bar` glass (OS shadows + Glass Effect, no fill); Primary/Small, Marketplace, Filters and Inner Pages bars, the round button and the current tab pill are `field` glass. The current tab pill draws no blur of its own (it sits inside the bar's). `glass={false}` draws Glass Off for Android. See GlassBG.

**14 November 2026:** the Figma set `Buttom Navigation` is gone. Its screens are now `Tab Bar › Active` = Landing, Travel, Content and Market/Cart +, all built on the private `_BottomTab master` (Mode Primary, Primary/Small, InnerPage, Marketplace, Interactions, Actions × Darkmode) and `_Tab` (Style Default, Current, Icon Only, Pill × Darkmode). What changed:

- Bar 402 × 95 (was 106), padding 18 / 18 / 26 / 18, gap 20 (was 12). Behind it a progressive blur, no fill (18 November 2026; was a 24 background blur with a white-to-clear haze, and before that Ink at 40%).
- Current tab: the solid icon in `icons-illumination`, the label in `text-link` at Light, two glows under the icon (white 25, `surface-longing` 13). Until now the label kept its colour.
- Tabs. Landing: اليوم · السفر · الحرمين · السوق · الكل (حسابي left the bar). Travel (was Journey): السفر · الطيران · الفنادق · التجارب. Content: اكتشف · الصوتيات · الفيديو · الإرشاد. Travel and Content now open with their first tab current.
- Primary/Small: icon-only tabs 61 × 40 in a 48 capsule, round button 48 (was 44).
- `screen="journey"` still works and means `travel`.

**Figma source:** 🧭 Navigation › Tab Bar (Active Landing, Travel, Content, Market/Cart +) on `_BottomTab master` and `_Tab`. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**15 November 2026, evening:** new screen `inner-pages` (Figma Tab Bar › Inner Pages on `_BottomTab master` Mode=InnerPage): a 40-high glass pill with four icon actions (44 × 38) at the end and the 40 Nusuk AI circle at the start; pass `actions` (`{icon, label, onClick}`). `_Tab` and `_BottomTab master` now have `Darkmode` (labels Text/Inverse in dark, text style Notes 2, IBM Plex): the dark recipe code used is now Figma's (N22 closed). The bar carries no shadow of its own; only Glass BG's (N7 closed). Figma: unpublished edits in 🧭 Navigation.

**18 November 2026 (Moha): no solid fill behind the bar.** What scrolls under it is blurred progressively, strongest at the screen's bottom edge and fading to nothing toward the content: two stacked backdrop layers, a 4 px blur masked over most of the band and a 16 px blur on the outer half, reaching 24 past the bar. The bar's own glass is unchanged. Native: a progressive (variable) blur material behind the bar, not a tinted fill.

## Props

| Prop | Type | Notes |
|---|---|---|
| `screen` | `'landing' \| 'travel' \| 'content' \| 'marketplace' \| 'search' \| 'inner-pages'` | Picks the Figma Tab Bar variant and its default tabs (`journey` = `travel`) |
| `actions` | `{icon, label, onClick}[]` | `inner-pages`: up to four icon actions |
| `ai` | `boolean` | `inner-pages`: false hides the Nusuk AI circle |
| `size` | `'nr' \| 'sm' \| 'xs'` | NR 62 high with labels; SM and XS 48 high, icons only (Mode Primary/Small) |
| `tabs` | `NavTabItem[]` | Replaces the items: icon, label, special |
| `active / onChange` | `number / fn` | Current tab |
| `standalone` | `boolean` | The round button beside the bar (returns to Today) |
| `nudge` | `string \| node` | One announcement above the bar |
| `total / people / more` | `string / array / string` | Marketplace: the cart summary |
| `placeholder` | `string` | Search: the field |
| `cartLabel` | `string` |  |
| `homeIndicator` | `boolean` |  |
| `label` | `string` |  |
| `onCart` | `() => void` |  |
| `onNudge` | `() => void` |  |
| `onStandalone` | `() => void` |  |
| `standaloneIcon` | `string` |  |
| `standaloneLabel` | `string` |  |
| `glass` | `boolean` | `false` = Glass BG Glass=Off (Android): blur 5 px, `glass-fill-off`, `glass-android` (17 November 2026) |

## Use

- Five destinations at most; labels of one word.
- Keep the system home indicator; the bar sits above the safe area.
- Marketplace: real total and real items only.

## Don't

- Do not give it a background colour: it floats on glass.
- Do not loop the special icon (N16).
- Do not use it together with the older TabBar on one screen (N14).

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
