# Toolbar

The top app bar. It is transparent and floats over the screen; controls sit on glass. Every Figma type is available, in the standard and the Light (on media) version.

**Figma source:** 🧭 Navigation › Toolbar (40 variants: Type [16] × Status × Light), read 8 November 2026. Built from `_Icon Block`, `_Search-bar`, `_DatePicker`, `_Profile`, `_Nusuk AI` and `Glass BG` (Foundation).

**18 November 2026 (Golf Carts review, GC-R8, GC-R10, F119):** content scrolls under the bar behind a progressive blur from the top; the bar is never solid. Every page under a Toolbar carries Figma's Header Effect (402 × 572: a warm glow over a white blurred circle), not coded yet (F117). The `Timer` type is a white LR chip with a 14 ring before the time, as Figma draws it (F119, fixed 17 Nov). Prototypes draw the iOS status bar above it at 02:22 with the battery percentage (DL-44).

**17 November 2026 — glass as Figma builds it:** every control now draws [Glass BG](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo?node-id=65346-1296) with the layers its Figma instance keeps. Icon blocks, the logo, Wallet, the date and booking pills are `control` glass: OS shadows and the Glass Effect carrying a white sheen (50% at the bottom → clear), no Default Fill. The search bar and Top Tabs are `field` glass (OS shadows, the radial fill, the Glass Effect). Secondary Pages / Tabs sits on a flat Ivory track (Glass Off, fill only). The old recipe (white 62% → 34%, a white outline, `saturate(1.4)`) is gone. `glass={false}` (or `data-glass="off"` on an ancestor) draws Glass Off for Android. In dark themes the controls take Dark=On. See GlassBG.

**15 November 2026, evening:** 23 types (46 variants). New `Secondary Pages / Full Search`: back, a 254-wide search field and one action in a single row, 84 high with 32 below. `Secondary Pages / Search` is a title row (title and three actions) over a full-width search row, 142 high with 18 below; code used to draw it as the one-row search, so it now renders `inner` + `with-search`. Landings › `LoggedIn` is the Figma spelling now (`Loggedin` still works); the default greeting uses the Arabic comma (مرحبا، أحمد). Figma: unpublished edits in 🧭 Navigation — publish before developers measure.

**14 November 2026:** 22 types. New `Primary Pages / Title` (188): the icon blocks, then the headline `headline-2-regular` (20) alone, bottom padding 18. `Primary Pages / Tabs` is renamed `Primary Pages / URLs` (244; its Secondary SM buttons are 119 wide, was 127). `Landings / Search` is 204 high (was 212; search row 18 under row 1). Both old and new names work in code.

**12 November 2026:** type 21, `booking` (Figma `Almatar`): back, a booking pill (`route: [from, to]`, `meta: string[]`, a more button) and a currency button. Figma names it after a partner; code names the job (DL-31).

**10 November 2026:** 20 types × `darkmode`. Pass the Figma type name (`'Secondary Pages / Default'`); the short names still work. `status`, `market-landing` and `market-category` are deprecated. The full table is in DESIGN.md › M9 › Toolbar.

**17 November 2026:** the Process progress counts steps, as Figma's `_Progress Bar` now does (Step 01, 02, 03 × Darkmode): one 30 × 12 wave block per step done (`.Building Blocks`, 3 px `surface-longing`, round), from the reading start, then 8 apart a straight 3 px track to the end (`surface-03-pearl`; white on `light`). Pass `step` (and `steps`, default 3); `progress` still works and rounds up to a step.

**16 November 2026:** the Process progress follows the new [🧭 Navigation › `_Progress Bar`](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw): 90 × 20, a straight 3 px track (`surface-03-pearl`, white on `light`) and a wavy 3 px active part in `surface-longing` from the reading start (was 70 × 8, 1.6 px, grey wave with a gold gradient). `progress` is 0–1.

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'landing' \| 'primary' \| 'inner' \| 'back' \| 'close' \| 'search' \| 'top-tabs' \| 'companion' \| 'nusuk-ai' \| 'process' \| 'profile' \| 'date-picker' \| 'timer' \| 'market-landing' \| 'market-category' \| 'market-product'` | Figma Type. Figma names (`InnerPages`, `Back With Title`, `MarketPlace Landing`…) also work |
| `status` | `'scrolled' \| 'with-search' \| 'with-tabs' \| 'leading-trailing' \| 'logged-in' \| 'no-account' \| 'with-categories'` | Figma Status. Adds the second row (headline, search, tabs, categories) where Figma has one |
| `light` | `boolean` | Figma `Light=On`: dark glass and white content, for photos, video and Ink. `dark` is an alias |
| `title` | `string` | `headline-2-regular`, `Text/Content`, one line with ellipsis |
| `actions` | `string[]` | Icons in the trailing glass group (1–4). Each button is 44×38 with a 24 icon (`Buttons/MD` wide, `Buttons/SM` high) |
| `leadIcon / trailIcon` | `string` | Swap the single glass buttons (back, close, menu…) |
| `backLabel, leadLabel, trailLabel, actionLabels, cartLabel` | `string, string[]` | Names for the icon buttons. Back, close, menu, support and cart are named already (Arabic; English with `lang="en"`); action icons read "إجراء 1", so pass `actionLabels` |
| `tabs, activeTab` | `string[], number` | Glass tabs (`with-tabs`, `top-tabs`) |
| `statusBar` | `boolean` | Draws the 62px iOS status bar, for mockups and decks only |
| `step, steps` | `number` | Process: steps done, of `steps` (default 3) |
| `wallet, avatar, chip, timer, date, progress, people, nusukId, cartCount` | `…` | Content for the type that uses it |
| `accountLabel` | `string` |  |
| `categories` | `string[]` |  |
| `currencyLabel` | `string` |  |
| `dark` | `boolean` |  |
| `darkmode` | `boolean` |  |
| `dot` | `boolean` |  |
| `flush` | `boolean` |  |
| `greeting` | `string` |  |
| `initials` | `string` |  |
| `location` | `string` |  |
| `meta` | `string[]` |  |
| `more` | `string` |  |
| `moreLabel` | `string` |  |
| `notificationsLabel` | `string` |  |
| `onAccount` | `() => void` |  |
| `onMore` | `() => void` |  |
| `placeholder` | `string` |  |
| `route` | `[string, string]` | `booking` (Figma: Almatar): route [from, to], trip facts, the more button and the currency button |
| `shareLabel` | `string` |  |
| `time` | `string` |  |
| `glass` | `boolean` | `false` = Glass BG Glass=Off on every control (Android). Same as `data-glass="off"` on an ancestor (17 November 2026) |

### Parts you can use on their own

| Part | Figma | Notes |
|---|---|---|
| `IconBlock` | `_Icon Block` | Glass pill, 44 high (`Buttons/MD`), 1–4 icon buttons; `dot`, `badge` |
| `SearchBar` | `_Search-bar` | Glass, 44 high (`Buttons/MD`), 18 icon, `body-2-light` |
| `Glass` | Foundation › Glass BG | `dark` for Dark=On |
| `StatusBar` | `_Status Bar` | Black / White, mockups only |

## Use

- Back on inner pages; Close on tasks that open over the flow (`close`, `date-picker`).
- Use `light` only over media or Ink; the standard bar sits on the screen background.
- Keep the bottom padding Figma gives each type (32 with one row, 18 with two).

## Don't

- Do not add a background colour to the bar; the glass is the surface.
- Do not put more than four icons in a glass group.
- Do not leave an action icon without a name.

## Known issues

- Figma `Light=On` and `Light=Off` of Landings › Loggedin hold different content (avatar and CTA only in Light=On). Code follows Light=Off; pass `avatar` to add the avatar (N2).
- Bottom padding differs between the Light versions of Close With Title, Companion MGM and Nusuk AI (N3). Code uses the Light=Off values.
- The GLASS effect (refraction, light 0.8 at 150°) has no CSS equal. Code uses the same fills plus a 2px backdrop blur and an inner rim.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
