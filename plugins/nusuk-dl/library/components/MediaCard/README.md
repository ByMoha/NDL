# MediaCard

A 250 × 330 content or commerce card: a full-bleed photo with a type pill on top and a white glass details panel below, in 18 types from article to hotel.

**Figma source:** [🃏 Cards (moved from 🏠 Landing Experience V2; variants and properties unchanged) › 🏠 CMS › Media Cards](https://www.figma.com/design/9qmiMkJqcEMFY8vbxhcP6r/%F0%9F%8F%A0-Landing-Experience-V2?node-id=18147-16068) — the `Media Cards` set (18 types), built on `_Highlight Master Component` (Solid BG On / Off), `_Media-Card`, `_Highlight-Icons` (20 type glyphs) and `_Highlight-Author`. **14 November 2026, night:** `_Highlight Master Component` is gone; the card is `_Media-Card` (Group × Solid BK) with `_Highlight-Icons` (21: Out of stock added); `Marketplace / Grid` is now `Marketplace`, and `Museum` is new (Ticket glyph, two Default MD chips, rating, price from, Secondary XS icon button). Museum is not coded yet: use `kind: 'ticket'` with `tags`, `rating` and the price meanwhile (known issue F42). This replaces the earlier 🃏 Cards › Media Cards card. Read on 4 November 2026.

**15 November 2026, evening:** 23 types. Marketplace is four types now — `Marketplace / List` (268), `Marketplace Grid` (189) and both `/ Out of stock`: pass `layout` and `outOfStock`; out of stock replaces the type pill with «نفد من المخزون» (package-out-of-stock) and the action with Notify me («نبهني» in the list, a full-width «نبهني عند التوفر» in the grid). `ADS` is coded as `type: 'ad'`: a photo and a mandatory ad label («إعلان», with `sponsor`). Figma labels the ADS card «اختيارات نسك», which is the editorial-picks label: an ad must say it is an ad (M4, known issue F46). Museum is still not coded (F42).

## Anatomy

- **Card** 250 × 330, `radius-md` 18, `shadow-xs`. Text and layout run right to left.
- **Photo** fills the whole card behind everything (object-fit cover).
- **Head** (`space-nr` 18 padding, `space-sm` 12 gap): the tags row (type pill at the start, *اختيارات نسك* chip at the end) and the stage, which centres the play button.
- **Details panel**: `surface-01-white`, padding 18 / 18 / 26, gap 8, bottom corners `radius-md`. Holds title, From–To, spec chips, rating summary, meta line, author, price and the arrow, Athkar note — each only when its prop is set.
- **More** is its own layout: a `surface-screen-bk` → `surface-01-white` gradient with the title and arrow at the bottom.

## Effects (all implemented)

| Layer | Figma | Here |
|---|---|---|
| Card | `Shadow/XS`: drop 0 1 2 −1, #1A1C1F 4% | `box-shadow: var(--shadow-xs)` |
| Details panel (Solid BG = On) | `Glass/Full`: drop 0 1 2 −1 4% · inner 0 5 10 #1A1C1F 3% hard light · inner 0 1 0 white 50% · Glass (frost 2, refraction .4, depth 40, light 150° .8, dispersion .4) | `box-shadow: var(--glass-full)` + `backdrop-filter: blur(var(--blur-sm))`. Refraction, light and dispersion have no CSS equivalent; on an opaque panel they are not visible in Figma either. |
| Fade surface (Solid BG = Off) | Linear overlay white 0% at 11.7% → 100% at 73% · white ellipse 519 × 429 with layer blur 74 | `.mc-overlay` gradient and `.mc-glow` (`filter: blur(74px)`), both on `surface-01-white` so they follow dark themes |
| Author avatar | drop −2 2 4 −2, #1A1C1F 5% | `box-shadow: var(--shadow-avatar)` |
| Spec chips, arrow button | Linear Burn blend | Not reproduced: CSS has no linear burn and it breaks dark themes (library issue L3) |

## Types

| Type | Props |
|---|---|
| Article | `kind:'article'`, `meta` (reading time) |
| Short, Video | `play`, `meta`, `cta:false` |
| Sound | `kind:'sound'`, `author:{name, avatar}` |
| Image | `kind:'image'`, `meta` |
| Attraction, Activity | `kind`, `selected` (اختيارات نسك), `price`; Activity adds `rating`, `tags` |
| Restaurants | `kind:'restaurant'`, `rating`, `tags` |
| Package | `kind:'package'`, `rating`, `tags`, `price`, `cta:false` |
| Flight, Train, Hotel | `kind`, `price`; Hotel adds `rating`, `tags` |
| Streem (live) | `live`, `play`, `meta`, `metaIcon:'hajjService'`, `cta:false` |
| Marketplace add to cart | `kind:'marketplace'`, `price` |
| Ticket | `kind:'ticket'`, `kindLabel`, `rating`, `tags`, `meta`, `price` |
| Athkar | `kind:'athkar'`, `meta`; the master's Athkar note is `note` |
| Author | photo only, `meta`, `cta:false` |
| More | `type:'more'`, `title` |

**10 November 2026:** Marketplace cards: `layout="list"` (268 wide) or `"grid"` (189), and `cart="cart" | "notify-me"` to show the Add to Cart control instead of the arrow.

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'card' \| 'more' \| 'ad'` | `more` renders the "browse more" tile; `ad` the ADS card with its ad label (`adLabel`, `sponsor`, `href`) |
| `adLabel, sponsor, href` | `string` | `type: 'ad'` |
| `notifyLabel, onNotify` | `string, fn` | Out of stock |
| `outOfStock` | `boolean` | Marketplace out of stock: «نفد من المخزون» pill and Notify me (`notifyLabel`, `onNotify`) |
| `surface` | `'glass' \| 'fade'` | Solid BG = On (default, every type in the set) or Off |
| `image`, `imageAlt` | `string` | The photo; alt text when it carries meaning (a person, a place) |
| `kind`, `kindLabel` | `string` | Type pill: article, sound, image, video, story, attraction, activity, restaurant, package, flight, train, hotel, marketplace, ticket, athkar, profile, hajj, umrah, rawdah. The label defaults to the Arabic name |
| `live`, `liveLabel` | `boolean`, `string` | Live pill (مباشر) instead of the type pill |
| `selected`, `selectedLabel` | `boolean`, `string` | The gold *اختيارات نسك* chip (Show Nusuk Selections) |
| `play` | `boolean` | Centred play button (Video Play) |
| `title` | `string` | Body 1, two lines at most |
| `fromTo` | `[string, string]` | Show From To |
| `tags`, `rating` | `string[]`, `number` | Tags cloud: spec chips and the star chip |
| `reviews` | `{count, score}` | Show Rating |
| `meta`, `metaIcon` | `string` | The single meta line (hashtag, reading time, place) and an optional glyph (`hajjService`, `news`) |
| `author` | `{name, avatar}` | Show Author |
| `price`, `priceLabel` | `string` | Show Price + Price Unit, with the Saudi riyal sign |
| `discount` | `{label, was}` | Discount tag and struck old price |
| `cta`, `ctaLabel` | `boolean`, `string` | The arrow button; on by default, give it a label for screen readers |
| `note` | `string` | Athkar note with the gold clock |
| `cart` | `boolean \| AddToCartStatus` | Replaces the arrow with the Add to Cart control |
| `cartProps` | `Partial<AddToCartCTAProps>` |  |
| `height` | `number \| string` |  |
| `layout` | `'list' \| 'grid'` | Marketplace cards: 'list' is 268 wide, 'grid' 189 |
| `playLabel` | `string` |  |
| `width` | `number \| string` |  |

## Use

- Use it in sliders and grids on landing pages; keep a row to one surface (glass or fade).
- One action per card: the arrow opens the item. The play button plays it in place.
- Show *اختيارات نسك* only for items Nusuk actually curates.
- Prices use Western digits and the riyal sign; the old price is struck through.

## Don't

- Don't put text on the photo besides the two pills.
- Don't invent scarcity or countdowns on the card; the discount tag states a real reduction only.
- Don't restyle the panel, radius or shadows. Need a new type? Request it.

## You provide

The photo (from Visual Assets or the CMS), the copy, and the container. Colour, type, radius, spacing and effects come from the tokens.

## Known gaps in the source

- Chip and *اختيارات نسك* text is 10 px (Chips XS, 18 high, since 9 November 2026), still below the 12 px minimum (K2). Figma sets these chips to SM and MD but they render XS (CH1).
- Prices are set in *Saans-TRIAL* and chip text in *Ping AR + LT*; this card uses IBM Plex Sans Arabic for prices.
- On every type except Attraction and Activity, the *اختيارات نسك* chip is hidden by 0% opacity instead of its property.
- The fade overlay and glow are hard-coded white in Figma; here they follow the theme.
- Add to cart and the Logos group exist on the master but are hidden in every type; they stay in Figma.
