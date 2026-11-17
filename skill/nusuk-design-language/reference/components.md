# Nusuk DL · component cards

Every coded component card in one file; search `# <Name>` (for example `# StatusSheet`). Each card is its own folder, with a preview page, in the GitHub repo (components/<Name>/) and the packages.

Contents: AddToCartCTA · Alert · AppNotification · Avatar · AvatarGroup · BentoGrid · BottomNav · BottomSheet · Button · CardsList · CardsSlider · Categories · CategoryChips · CategoryTile · ChatMessage · Checkbox · Chip · CollapsedSection · CountBadge · CustomerFeedback · DayPicker · DayTab · DetailsListItem · DirectionSheet · DropdownItem · EmptyState · FaceTile · FeaturedHeader · FeedbackEmojis · FileUploader · FlightTicket · GlassBG · Guide · HeaderTabs · Hint · HintWidget · Icon · InfoTile · Leaderboard · ListSideBySide · MapPin · MediaCard · MemberCard · NoticeBar · NpsScale · Nudge · OptionCard · Page · Pagination · PaymentDetails · PlaylistCard · PlaylistRow · PrayCard · PrayerLiveActivity · PriceOptions · ProductTile · ProgressRing · QRCodeStatus · Radio · RatingBar · ReasonSelection · RequestCard · ReviewCard · ReviewSummary · SectionError · SectionHeader · SectionTitle · SelectCard · ServicesBox · SoundPlayer · StartJourney · StatusChip · StatusSheet · StepCard · Steps · Switch · TabBar · TextField · TimeSlot · Toolbar · UpcomingRequests · VerticalStepper


---

# AddToCartCTA

The cart control on product cards and rows: add, a quantity stepper, remove, or notify me.

**Figma source:** 🃏 Cards › Add to Cart CTA (Status: cart, one, many, Remove, Notify me, arrow). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'cart' \| 'arrow' \| 'one' \| 'many' \| 'remove' \| 'notify-me'` | `one` shows remove instead of minus |
| `count` | `number` | The quantity |
| `onAdd / onIncrease / onDecrease / onRemove / onNotify` | `fn` | Actions |
| `label, removeLabel, increaseLabel, decreaseLabel` | `string` | Accessible names (Arabic by default) |

## Use

- Move from `cart` to `one` in place when the person adds an item.
- Announce the new quantity to screen readers.
- Use `notify-me` when the product is out of stock.

## Don't

- Do not mirror the stepper in Arabic: minus, number, plus read left to right.
- Do not pre-fill a quantity above one.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Alert

An inline message in a coloured box: information, success, warning, error, or a neutral notice.

**Figma source:** [‼️ Status Handlers › Alerts](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o/?node-id=68392-32017) (Type Info, Success, Warning, Error, Primary) on `_Alert` (booleans Icon, Heading, Close, Below Buttons). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**17 November 2026:** `stacked` mirrors [`_Alert`](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68759-3359) Type=System Update, re-read today: the 24 glyph above the heading, the message and the buttons under it (an update notice inside a page).

**14 November 2026, night: rebuilt to Figma.** Primary is the neutral Default palette (it was gold in code); the message is `notes-1-light` in `text-heading` (it was `notes-1-regular` in `text-subtle`); the icons are Figma's Hugeicons; Below Buttons are a Primary SM and a Ghost SM (code had one Secondary XS); Close and an icon-less alert are new.

## Figma

- Box: padding 18, gap 12, radius 18, 1 px border; top-aligned. Icon 20 at the start, body, Close (16 `cancel-01`, `alerts-icons-default`) at the end.
- Body: content, then Below Buttons 18 under it. Content: heading `body-2-regular` in the alert's text colour, message `notes-1-light` in `text-heading`, 8 apart. Below Buttons: Primary SM at the start, Ghost SM, 12 apart.

| Type | Surface | Border and icon | Heading | Icon |
|---|---|---|---|---|
| info | `alerts-surface-info` | `alerts-icons-info` | `alerts-text-info` | alert-circle |
| success | `alerts-surface-success` | `alerts-icons-success` | `alerts-text-success` | checkmark-circle-02 |
| warning | `alerts-surface-warning` | `alerts-icons-warning` | `alerts-text-warning` | spam |
| error | `alerts-surface-error` | `alerts-icons-error` | `alerts-text-error` | alert-02 |
| primary | `alerts-surface-default` | `alerts-icons-default` (icon `icons-black`) | `alerts-text-default` | alert-circle |

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'info' \| 'success' \| 'warning' \| 'error' \| 'primary'` | Default info |
| `title` | `string` | The heading; leave it out to hide it |
| `children` | `node` | The message |
| `icon` | `boolean` | Default true; the tracker's alert has none |
| `primary`, `onPrimary` | `string`, `() => void` | Primary SM button |
| `secondary`, `onSecondary` | `string`, `() => void` | Ghost SM button |
| `action`, `onAction` | `string`, `() => void` | Same as `secondary` / `onSecondary`, kept for earlier code |
| `onClose` | `() => void` | Shows the Close icon |
| `stacked` | `boolean` | `_Alert` Type=System Update: the glyph grows to 24 and sits above the heading |

## Use

- Say what happened and what to do, in the message; one or two lines.
- `role="alert"` for error and warning, `status` for the rest.

## Don't

- Do not use an alert for a passing confirmation; use a toast or the status sheet.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# AppNotification

An in-app notification row with time, title, body and type icon.

**Figma source:** 🛎️ Notifications › App Notification, Notification Slots (also Live Activities and Dynamic Island sets for prayer time, Athkar and Quran). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `time` | `string` |  |
| `title` | `string` |  |
| `children` | `text` |  |
| `active` | `boolean` | Unread |
| `iconName` | `string` |  |

## Use

- Timely and contextual: after prayer, before the visit.

## Don't

- No guilt, FOMO or streak reminders.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Avatar

A person or account: initials, icon, picture or emoji, five sizes.

**Figma source:** 👩🏻‍💻 Avatar › Avatar (Kind × Size × State). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | 24 / 42 / 56 / 72 / 100, as Figma (corrected 8 November 2026; before, code used 24–72) |
| `px` | `number` | Resized instance, e.g. 38 in toolbars and cards |
| `initials` | `string` | One or two letters, or a counter (`+3`). Fits by itself: see Initials below |
| `icon` | `boolean` |  |
| `src` | `string` |  |
| `state` | `'positive' \| 'negative'` | Negative (default) = white fill; Positive = `surface-02-ivory`. Shadow/SM |
| `ink` | `boolean` | Ink fill, white icon (the Icon avatar in Group Users) |
| `ring` | `'ink' \| 'white'` | 1.36px ring, used for the +N avatar |
| `name` | `string` |  |

## Use

- Initials follow the name's script.

## Initials (14 November 2026)

UX's answer to the iOS review: initials scale down to fit and keep 4–8 px of space at the sides.

| Avatar | Style | Space a side | Shrinks when |
|---|---|---|---|
| XS 24 | `notes-2-regular` 12 | 4 | the text is wider than 16 (three characters, such as `+12`, draw at 9) |
| Resized under 40 (38 in toolbars and cards) | `notes-1-regular` 14 | 4 | wider than 30 |
| SM 42 | `headline-2-regular` 20 | 4 | wider than 34 (`+99` draws at 18) |
| MD 56 · LG 72 · XL 100 | `headline-2-regular` 20 | 8 | wider than 40 / 56 / 84 |

The font shrinks; the text is never clipped and never goes below 9 px. Code estimates 0.62 em per character; iOS and Android measure the string and do the same. The avatar's name (`name`) is what a screen reader reads, never the initials alone.

## Don't

- Do not use avatars as decoration.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# AvatarGroup

Overlapping avatars for groups and companions.

**Figma source:** 🧭 Navigation › Group Users · 🛎️ Notifications › Group Users · 🏖️ Travel › User Group (read 14 November 2026). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `people` | `(string \| { src, initials, icon })[]` | Initials; `''` gives the icon avatar |
| `px` | `number` | Avatar size, 38 by default (Figma sm resized) |
| `more` | `string` | +N avatar with a ring |
| `first` | `'icon'` | Ink icon avatar first (Group Users) |
| `label` | `string` | Text beside the stack, `body-1-light` (أنت و) |
| `max` | `number` | Overlap −15px; the stack reads left to right as in Figma |
| `preset` | `'travel' \| 'travel-active'` | 🏖️ Travel › User Group: Active Off sizes 42 · 42 · 42 · 56 · 42 · 42 · 42, Active On 24 · 42 · 56 · 72 · 56 · 42 · 24; overlap 9, 1.5 px white ring, the middle on top |
| `sizes` | `number[]` | One size per avatar |
| `caption` | `string` | Travel: a `body-2-regular` row above the group with the XS icon avatar, 8 apart. Figma's sample is «%s، و%s مرافقين»; write the count with the Arabic plural rules (one, two, few, many) |
| `ring` | `'ink' \| 'white'` |  |
| `state` | `'positive' \| 'negative'` |  |

## Use

- Show the count of the rest.

## Don't

- Do not show strangers' faces; companions only.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# BentoGrid

A mixed grid of four media cards (wide, two halves, wide) and an optional "Show more".

**Figma source:** 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`) › Bento Grid (402 × 940, three slots). Read 9 November 2026.

## Anatomy

- Wide 386 × 220, halves 189 × 330, wide 386 × 220, gap 8, side padding 8, fade surface
- `more`: Secondary MD full-width button

## Logic

- Desire: curated content.
- Hierarchy by size, not by colour.
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# BottomNav

The floating bottom navigation: a glass capsule of destinations with one optional round button, new on 10 November 2026.

**17 November 2026 — glass as Figma builds it:** the Primary bar is [Glass BG](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo?node-id=65346-1296) `bar` glass (OS shadows + Glass Effect, no fill); Primary/Small, Marketplace, Filters and Inner Pages bars, the round button and the current tab pill are `field` glass. The current tab pill draws no blur of its own (it sits inside the bar's). `glass={false}` draws Glass Off for Android. See GlassBG.

**14 November 2026:** the Figma set `Buttom Navigation` is gone. Its screens are now `Tab Bar › Active` = Landing, Travel, Content and Market/Cart +, all built on the private `_BottomTab master` (Mode Primary, Primary/Small, InnerPage, Marketplace, Interactions, Actions × Darkmode) and `_Tab` (Style Default, Current, Icon Only, Pill × Darkmode). What changed:

- Bar 402 × 95 (was 106), padding 18 / 18 / 26 / 18, gap 20 (was 12). Behind it a 24 background blur and a white-to-clear haze (was Ink at 40%).
- Current tab: the solid icon in `icons-illumination`, the label in `text-link` at Light, two glows under the icon (white 25, `surface-longing` 13). Until now the label kept its colour.
- Tabs. Landing: اليوم · السفر · الحرمين · السوق · الكل (حسابي left the bar). Travel (was Journey): السفر · الطيران · الفنادق · التجارب. Content: اكتشف · الصوتيات · الفيديو · الإرشاد. Travel and Content now open with their first tab current.
- Primary/Small: icon-only tabs 61 × 40 in a 48 capsule, round button 48 (was 44).
- `screen="journey"` still works and means `travel`.

**Figma source:** 🧭 Navigation › Tab Bar (Active Landing, Travel, Content, Market/Cart +) on `_BottomTab master` and `_Tab`. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**15 November 2026, evening:** new screen `inner-pages` (Figma Tab Bar › Inner Pages on `_BottomTab master` Mode=InnerPage): a 40-high glass pill with four icon actions (44 × 38) at the end and the 40 Nusuk AI circle at the start; pass `actions` (`{icon, label, onClick}`). `_Tab` and `_BottomTab master` now have `Darkmode` (labels Text/Inverse in dark, text style Notes 2, IBM Plex): the dark recipe code used is now Figma's (N22 closed). The bar carries no shadow of its own; only Glass BG's (N7 closed). Figma: unpublished edits in 🧭 Navigation.

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


---

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


---

# Button

The call to action. Primary for the one main action, Secondary for the alternative, Ghost for low-emphasis actions. `fate` makes any of them destructive.

**Figma source:** 🕹️ Buttons › CTA (320 variants: Kind × Size × State × Icon × Fate), built on `_Button Trail` (44 variants). Colours come from the Buttons library's own collection `Buttons Colors` (Light / Dark / Green modes). Sizes come from `Buttons Setup` (XS / SM / MD / LR modes). Insert the component from the library in Figma. This card mirrors it for concepts, decks and code.

**14 November 2026:** every case of the master is now reachable. The Figma master of masters (`_Button_Master Of Masters`) has nine booleans: Leading Icon, Trailing Icon, Icon Only, Show Text, Show Price, Show Apple Pay, Nafath Icon, Show Absher, Glass Effect. Code adds `icon="both"`, `price`, `mark` and `glass`, and composes kind × `fate` × `tone` × `onDark` so the combinations `_Button Trail` does not list also work (table below). Token fixes: `button-fate-surface` is `Alerts/Surface/Solid Error` at 10% (#ff41361a, was #fff2f1) and `button-secondary-surface-on-dark` is Slate at 70% (#303336b3).

**17 November 2026:** the `glass` prop blurs 5px behind the button (`Glass/Andriod Blur` is 10 in Figma; CSS blur is half the Figma radius). It was 10px.

**11 November 2026:** padding is smaller. Side padding 28 / 22 / 18 / 14 (was 32 / 30 / 22 / 16); icon side 24 / 20 / 16 / 12 (was 26 / 24 / 20 / 14). Icon-only and loading buttons use the icon-side value on both sides (widths 74 / 66 / 56 / 42).

**10 November 2026:** the icon side uses `button-padding-icon-*` on every filled button with a left or right icon, not only destructive ones.

## Props

| Prop | Type | Notes |
|---|---|---|
| `kind` | `'primary' \| 'secondary' \| 'ghost'` | Primary: `button-primary-surface` (Ink). Secondary: `button-secondary-surface` (Ivory at 70%). Ghost: no fill, no side padding, underlined label (`Regular/Body/Two Underline`), destructive Ghost included (8 Nov) |
| `size` | `'lr' \| 'md' \| 'sm' \| 'xs'` | Height 48 / 44 / 38 / 30 on phones and tablets (Wide 54 / 48 / 38 / 26; changed 9 November 2026). Side padding 28 / 22 / 18 / 14. Gap 8 / 8 / 8 / 4 (`button-height-*`, `button-padding-*`, `button-gap*`) |
| `state` | `'default' \| 'disabled' \| 'loading' \| 'focused'` | Disabled shows at 40% opacity. Loading collapses to an icon-only button (widths 74 / 66 / 56 / 42) with the spinner at the icon-only size; Primary and Secondary stay at full opacity, Ghost loading is 40%, as in Figma. `focused` shows the focus ring (Figma draws Focused the same as Default; see B10) |
| `icon` | `'none' \| 'left' \| 'right' \| 'only'` | Icon 20 / 20 / 18 / 16, icon-only 26 / 26 / 24 / 18 (`button-icon-*`) |
| `iconName` | `string` | Glyph for the icon |
| `fate` | `boolean` | Destructive. Secondary and Primary get `button-fate-surface` + `button-fate-content`. Ghost gets the red label. The icon side uses `button-padding-icon-*` (24 / 20 / 16 / 12), the same as a non-destructive button: start for `left`, end for `right`, both sides for `only` and loading (widths 74 / 66 / 56 / 42) |
| `onDark` | `boolean` | Figma `Light=On` (Buttons Colors › Dark). Use on photos, video and ink surfaces |
| `tone` | `'default' \| 'green'` | Figma `_Button Trail` Style=Green Default (with `kind="primary"`) and Green Ghost (with `kind="ghost"`), Buttons Colors › Green: `button-green-surface` + `button-green-content`, `button-green-ghost-content` (underlined). Fails contrast today (B12) |
| `icon="both"` | | Leading and trailing icon (master Leading Icon + Trailing Icon). `trailingIconName` sets the end glyph; by default it is `iconName` mirrored. Icon-side padding on both sides |
| `price` | `string \| number` | Master `Show Price`: the riyal symbol (`riyal` icon, icon size) and the amount, gap 4, before the label. Pass the amount already formatted ("1,300") |
| `mark` | `'apple-pay' \| 'nafath' \| 'absher'` | Master `Show Apple Pay` ("Pay" in the system font, before the label; accessible name "Apple Pay"). The Apple logo glyph (U+F8FF) exists only in Apple fonts, so code adds it only on Apple devices; elsewhere it would draw an empty box. In the iOS app use the system `PKPaymentButton`, as Apple's guidelines require, `Nafath Icon` and `Show Absher` (after the label, icon height, width from the glyph). For the full Apple Pay, Google Play or App Store badge use Special CTA instead |
| `glass` | `boolean` | Master `Glass Effect` (`Glass BG` Glass=Off, the cross-platform fallback): `glass-android` inset shadow and `blur-md` backdrop blur. Filled buttons only; ghost ignores it |
| `full` | `boolean` | Stretch to the container |
| `children` | `text` | The label: names the outcome ("Book your visit"), never "OK" or "Submit" |
| `ariaLabel` | `string` |  |
| `className` | `string` |  |
| `disabled` | `boolean` |  |
| `flipIcon` | `boolean` |  |
| `onClick` | `() => void` |  |
| `trailingIconName` | `string` | Trailing glyph when icon='both' (default: iconName mirrored). |
| `type` | `'button' \| 'submit' \| 'reset'` |  |

Labels use `body-2-regular` (16px) at every size, as in Figma.

## Every combination

`_Button Trail` lists 11 style × darkmode pairs. Code composes the same tokens, so the 7 pairs Figma leaves out also work:

| Style | On light (`onDark` off) | On dark (`onDark`) |
|---|---|---|
| Primary | Trail Default, Darkmode=Off | Trail Default, Darkmode=On |
| Secondary | Trail Secondary, Darkmode=Off | Trail Secondary, Darkmode=On |
| Ghost | Trail Ghost, Darkmode=Off | Trail Ghost, Darkmode=On |
| `fate` Primary / Secondary | Trail Fate, Darkmode=Off | Trail Fate, Darkmode=On |
| `fate` Ghost | Trail Fate Ghost | **not in Figma**: `button-fate-content-on-dark` |
| `tone="green"` Primary | **labelled Darkmode=On in Figma only** (it uses the Light mode) | same tokens (Green mode does not change on dark) |
| `tone="green"` Ghost | Trail Green Ghost | **not in Figma**: same green label |
| `tone="green"` Secondary | **not in Figma**: `button-green-secondary-*` (Green › Secondary Surface exists, no variant uses it) | same |

CTA (the public set) exposes Kind × Size × State × Icon × Fate only: Green, on-dark, Fate Ghost on dark, both icons, price, marks and glass are reached in Figma through `_Button Trail` and the master, not through CTA. Known issues B14, B15 and F2.

## Use

- One Primary per screen or sheet. LR for the main screen action, MD by default, XS inside cards and rows.
- MD, SM and XS carry tap padding to 48 (44 in the top bar); nothing to add.
- Loading keeps the place and announces busy. Use it for anything over 300ms.
- Pair Primary with Secondary for a choice. Ghost is for a third, quieter action.
- `fate` only for actions that remove or cancel something: cancel booking, delete, leave group.

## Don't

- Never restyle colour, radius or font size. Need a new look? Request it.
- Do not disable the main action to hide validation. Let people submit, then show what to fix.
- Do not use Title Case. Sentence case only.

## Known issues (kept exact from Figma)

- **Dark themes:** `button-primary-content` maps to `Text/Inverse`, which stays white while `button-primary-surface` inverts to white. The result is a 1:1 label. Logged for the DL team as C7; the removed `Buttons/Text/Primary` inverted correctly, so this is a regression with a one-alias fix in Figma.
- **Destructive** (`fate`): 3.2:1 in light themes, with or without `onDark` (C8).
- **Secondary on dark** (`secondary` + `onDark`): 1.6:1 in dark themes (B7). Avoid until fixed.
- **Green** (`tone="green"`): 2.6:1 in light themes, 1.1:1 in dark themes (B12). Use only with an icon and a short verb until Figma darkens it.
- **Ghost + Fate + Icon right** is 24px tall in Figma at every size (B13). Code keeps the size height.
- **Focused** (B10): Figma's Focused variant looks the same as Default. Code draws a 2px ring, offset 2px, because keyboard focus must be visible (WCAG 2.4.7): Ink on light surfaces, white with `onDark` and on Ink fills. It was `surface-longing` until 9 November 2026 (1.87:1 on white).
- **On dark in dark themes** (B16): the `onDark` colours invert with the theme, so Ghost is white on white on an Ink surface and Primary turns dark on media.
- **Loading glyph**: Figma's Loading variant shows the `arrow-left-02` placeholder icon; code shows a spinner of the same size.
- Primary and Secondary fills come from `Glass BG` (Navigation=Primary Action), a flat fill with no glass effect, so CSS matches it exactly.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# CardsList

Stacked full-width media cards with an optional "Show more".

**Figma source:** 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`) › Cards List (402 × 1160). Read 9 November 2026.

## Anatomy

- MediaCard 386 × 330 stacked, gap 8, side padding 8; no arrow in the title by default

## Logic

- Desire → intent: comparable offers.
- Same card type in one list so prices compare.
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# CardsSlider

A row of media cards that scrolls sideways; `layout="grid"` gives the 2 × 2 grid used for videos.

**Figma source:** 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`) › Cards Slider (402 × 430) and the 2 × 2 Video grid in Rawdah Landing. Read 9 November 2026.

## Anatomy

- Row: MediaCards 250 × 330, gap 8, side padding 8
- Grid: 2 columns, cards 189 × 250, gap 8

## Logic

- Desire realm: discovery of content and offers.
- Framing: the type pill tells what the card is before the title; no fake scarcity on prices.
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Categories

A section with a row of tiles that scrolls sideways: categories, products or faces.

**Figma source:** 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`) › Categories (402 × 238). Read 9 November 2026.

## Anatomy

- Section title, then a row: side padding 8, gap 8, scrolls horizontally
- Items: `type` image (CategoryTile 120 × 140), product (ProductTile), face (FaceTile 154)

## Logic

- Functional or Emotional, by content (services vs gifts vs voices).
- Attention & Cognitive Load: one row, one kind of item.
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# CategoryChips

A section of topic chips that wrap: Secondary SM buttons with a trailing icon.

**Figma source:** 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`) › Categories (chips, 402 × 230). Read 9 November 2026.

## Anatomy

- Section title, then wrapped Secondary SM buttons (icon right), gap 8, side padding 8, aligned to the start

## Logic

- Desire realm: browsing topics.
- Low commitment: a chip only filters or navigates.
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# CategoryTile

A tappable glass tile with an icon or image and a short label: services, categories and quick actions.

**Figma source:** Option Card_Master (Type Image, LR, SM, XS) on Glass BG (Navigation=Off) with Glass/Full. Read 9 November 2026.

**17 November 2026:** the tile surface is solid white with `Glass/Full`, as Cards build it. The old surface made the top half see-through and blurred it, which drew a white halo on the menu (Menu & Search review). Same class (`nk-gsurf`), new recipe; GlassBG `kind="card"` is the same surface.

## Props

| Prop | Type | Notes |
|---|---|---|
| `href` | `string` |  |
| `iconName` | `string` |  |
| `image` | `string` |  |
| `label` | `string` |  |
| `onClick` | `() => void` |  |
| `type` | `'image' \| 'lr' \| 'sm' \| 'xs'` |  |

## Anatomy

- Image: 120 × 140, padding 18/12, gap 12, icon slot 64, label `body-2-regular`
- LR: padding 18, gap 8, icon 24, `body-2-regular`
- SM: padding 18, gap 8, icon 20, `notes-1-regular`; 88 × 100 in Featured Actions, 85 × 100 in Services Box
- XS: radius 14, padding 12/8, icon 16, `notes-2-regular`
- Surface: Glass BG Navigation=Off (radial white rim + vertical white glass) and Glass/Full

## Logic

- Functional realm: shortcuts to a service people already intend to use. Keep labels to two short lines (use `\n`).
- Behaviour: reduces search cost (Attention & Cognitive Load). Order by frequency of use, not by org chart.

## Don't

- Do not mix tile sizes in one row.
- Do not use a tile for an action that changes data (book, pay); tiles navigate.

## Native

A button with an image/icon and label; minimum 48 dp target (SM and larger already are).

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# ChatMessage

A Nusuk AI or user message bubble, with loading and error states.

**Figma source:** 💬 Chat UI › AI Chat Messages (User × Style: Default, Short, Long, Loading, Voice, Error), AI Tab Bar, Chat Element, Try Nusuk AI. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `user` | `'ai' \| 'user'` |  |
| `style` | `'default' \| 'loading' \| 'error'` |  |
| `children` | `text` |  |

## Use

- AI explains why it suggests something; the person can always override.

## Don't

- AI quotes and cites; it never issues a fatwa or adjudicates a ruling.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Checkbox

Select any number of options, or confirm one statement.

**Figma source:** 📻 Switches, Checkbox and Radio › Checkbox (Status × Size). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**14 November 2026 (read from Figma):** 18 / 18 / 24 (`control-checkbox-*`), radius 4. Empty: no fill and a 1 px `surface-longing` line. Ticked: `surface-illumination` (gold) with a white `tick-02` 12 / 12 / 18 (was Ink). Disabled: `surface-03-pearl`, and when ticked an Ink tick at 50%. Error: a 2 px `alerts-icons-error` line, no fill. Label 14 / 16 / 18, gap 8 / 12 / 12. New `size` prop: `sm` (default), `md`, `lr`.

## Props

| Prop | Type | Notes |
|---|---|---|
| `checked` | `boolean` |  |
| `label` | `text` |  |
| `ariaLabel` | `string` | The name when there is no visible label |
| `status` | `'default' \| 'error' \| 'disabled'` |  |
| `size` | `'sm' \| 'md' \| 'lr'` | Figma Size; `sm` is the default |
| `onChange` | `(checked) => void` |  |

## Use

- The whole label is the target.
- The control is 16–27 high and carries tap padding to 48 × 48. Stack them in rows at least 48 high.

## Don't

- Never pre-tick consent or marketing boxes.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Chip

A short status or category label: Default, Pending, Success, Info, Error, Gold or White, soft or solid.

**Figma source:** 🍟 Chips › Chips (128 variants: State × Size × Icon × Solid × Background). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**15 November 2026, evening:** side padding follows `_Chips Setup` as published: 8 / 10 / 12 / 14 (`Glob Whitespace`), 6 / 8 / 10 / 12 on the icon side (`Icon-Side Whitespace`); was 12 / 14 / 14 / 16 and 10 / 12 / 12 / 14. Heights 18 / 20 / 24 / 28, text 10 / 12 / 12 / 14, gaps and icons unchanged (tokens 3.9).

## Props

| Prop | Type | Notes |
|---|---|---|
| `state` | `'default' \| 'pending' \| 'success' \| 'info' \| 'error' \| 'gold' \| 'white'` |  |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lr'` | 18 / 20 / 24 / 28px; text 10 / 12 / 12 / 14; side padding 8 / 10 / 12 / 14, 6 / 8 / 10 / 12 on the icon side (15 Nov 2026); gap 4 / 4 / 4 / 6; icon 12 / 14 / 14 / 16 (Chips `_Chips Setup`, 9 November 2026). Cards use `xs` |
| `iconName` | `string` | Any icon name |
| `icon` | `boolean` | Show the status icon |
| `solid` | `boolean` | Solid fill for emphasis |
| `background` | `boolean \| 'bare'` | false = outline; `'bare'` = Figma Background Off (no fill, no padding) |
| `children` | `React.ReactNode` |  |

## Use

- One or two words. Pair status colour with an icon or word, never colour alone.
- Gold marks what Nusuk recommends; use it sparingly.

## Don't

- Do not use chips as buttons.
- Do not invent new colours; the seven states cover every case.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# CollapsedSection

An accordion row for FAQs, policies and long details.

**Figma source:** ⬆️ Modals & Sheets › Collapsed Section (Status × Background). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `title` | `string` |  |
| `open` | `boolean` |  |
| `background` | `boolean` |  |
| `children` | `node` |  |

## Use

- Titles are questions or clear nouns.

## Don't

- Do not hide required information in a collapsed section.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# CountBadge

A small number on a tab or icon.

**Figma source:** 🎹 Tabs › Number Notification (Default, Alert, Success, Gold, White). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'default' \| 'alert' \| 'success' \| 'gold' \| 'white'` |  |
| `children` | `number` |  |

## Use

- Show counts the person can act on.

## Don't

- Do not use red counts to create urgency.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# CustomerFeedback

The rating sheet: service header, CSAT faces, optional NPS row, reasons after a low score, comments, and the two actions.

**Figma source:** [⭐️ Rating & CSAT › Customer Feedback](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76392-4735) (unpublished, 16 November 2026), with the flow in [Customer Feedback_Mobile](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76392-4868) (Default, Unsatisfied, Satisfied, Very Satisfied) and the reasons in [NPS Survey](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76591-3962) / [NPS Survey Master](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76591-3748). Put it in a BottomSheet.

**Read 16 November 2026:** padding 26 / 8 / 48, gap 20. Header: 72 circle on `alerts-surface-gold` with the service icon (Rawdah by default), optional emoji (👍🏻, 37), title `headline-1-light`, subtitle `body-2-light` `text-content`. CSAT block: radius 14, padding 18, gap 12, the step chip («1 من 3»), the question `headline-2-light`, FeedbackEmojis. NPS block: NpsScale. After Very dissatisfied or Dissatisfied: «ما سبب عدم رضاك؟» with reason cards (white, radius 18, 1 px Pearl line, soft shadow, `body-2-regular`, MD checkbox at the end) and the comments text area. Actions: Primary MD, disabled until a level is picked («قيّم الخدمة»), then «التالي», or «شارك تقييمك» after Very satisfied; Ghost MD «ذكرني لاحقًا».

**17 November 2026 · `scale="stars"`:** [Customer Feedback Bottom Sheet](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76404-3106): the gold circle with the service glyph (`package-open` for an order), «شارك تجربتك» `headline-1-light`, the question «ما مدى رضاك عن …؟» `headline-2-light` over the 24 star input (each star a 48 target), the comments box, Primary MD «شارك تقييمك» (disabled until a star) and Ghost MD. Figma puts the comments box above the question and asks «رضاك على»; code asks first, with «رضاك عن» (Q-D35, F83).

## Props

| Prop | Type | Notes |
|---|---|---|
| `scale` | `'emoji' \| 'stars'` | stars = Customer Feedback Bottom Sheet: a 1–5 star input; `onChange` gets 1–5 |
| `service` | `string` | Name in the title «قيّم تجربتك مع …» |
| `title` | `string` | Overrides the title |
| `subtitle` | `string` | Default «يساعدنا تقييمك على تحسين خدماتنا.» |
| `icon` | `boolean` | Figma Icon. Default true |
| `iconName` | `string` | Default `rawdah` |
| `emoji` | `string \| false` | Figma Emoji. Default 👍🏻 |
| `csat` | `boolean` | Figma Product Satisfaction. Default true |
| `step` | `[number, number]` | Current and total questions, shown as «1 من 3» |
| `question` | `string` | Default «هل أنت راضٍ عن الخدمة؟» |
| `labels` | `string[]` | Five level names |
| `value` | `number` | 0–4. Controlled when `onChange` is passed |
| `onChange` | `(value: number) => void` | |
| `nps` | `boolean` | Figma Recomendation. Default false |
| `npsQuestion` | `string` | |
| `npsFrom` | `0 \| 1` | See NpsScale |
| `npsValue` | `number` | |
| `onNps` | `(value: number) => void` | |
| `reasons` | `string[]` | Shown after a low score (0 or 1) |
| `reasonsTitle` | `string` | Default «ما سبب عدم رضاك؟» |
| `selectedReasons` | `number[]` | |
| `onReasons` | `(indexes: number[]) => void` | |
| `textArea` | `boolean` | Figma Text Area. Default: shown after a low score only |
| `textLabel` | `string` | Default «ملاحظاتك» |
| `textPlaceholder` | `string` | Default «اكتب هنا…» |
| `text` | `string` | |
| `rateLabel` | `string` | Primary before a pick. Default «قيّم الخدمة» |
| `nextLabel` | `string` | Default «التالي» |
| `shareLabel` | `string` | After Very satisfied. Default «شارك تقييمك» |
| `onSubmit` | `() => void` | |
| `later` | `boolean` | Ghost button. Default true |
| `laterLabel` | `string` | Default «ذكرني لاحقًا» |
| `onLater` | `() => void` | |

## Use

- Trigger after a stable outcome (Moment CSAT in the KPI framework), with sampling and a cooldown; never during anxiety peaks.
- Keep reasons specific to the service and short (5 to 7). End with «أسباب أخرى».
- Count a submission as a meaningful action only when a level is picked.

## Don't

- Do not block the user: «ذكرني لاحقًا» must always close the sheet.
- Do not show NPS and CSAT for the same moment more than once per journey.

## You provide

The service name and icon, the questions, the reasons and the handlers. Colour, type, radius and spacing come from the tokens.


---

# DayPicker

A calendar day cell with availability dot.

**Figma source:** 📅 Date & Time › Day Picker (State × Indicator × Moon), Date Picker (Calendar, Year, Month), Availability Status. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `day` | `string` |  |
| `state` | `'unselected' \| 'current' \| 'selected' \| 'disabled'` |  |
| `availability` | `'available' \| 'filling' \| 'almost' \| 'none'` | Dot colour; always add a legend |
| `ariaLabel` | `string` |  |

## Use

- Show Hijri alongside Gregorian where the task is religious.

## Don't

- Do not rely on the dot colour alone; add a legend or label.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# DayTab

A horizontal day selector tile.

**Figma source:** 📅 Date & Time › Day Tab Selection (Available, Unavailable, Selected), List of Dates. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**15 November 2026, evening (read from 📅 Date & Time, published):** weekday (12, `text-subtle`) over the date (24), a 14 corner icon (moon-01; `unavailable` when unavailable) and an 8 × 4 availability bar (`availability`: available green, filling-up orange, almost-full red, not-available grey). Available is white with no line; Selected is shade 6 with a 1.5 Longing line and `text-link`; Unavailable Ivory with a Pearl line and `text-note`. Radius 14. The today chip (Gold solid XS) sits on the top edge.

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'available' \| 'unavailable' \| 'selected'` |  |
| `date` | `string` |  |
| `weekday` | `string` |  |
| `today` | `string` | Chip label |
| `availability` | `'available' \| 'filling-up' \| 'almost-full' \| 'not-available'` | The bar; give `availabilityLabel` for screen readers |
| `iconName` | `string` | Corner icon |
| `availabilityLabel` | `string` | Spoken availability |

## Use

- Scroll horizontally; today first.

## Don't

- Do not hide unavailable days; show them disabled.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# DetailsListItem

A label–value row for booking details, zebra-striped.

**Figma source:** 🏖️ Travel › Details List Item (Icon × Availability × Value × Odd/Even), Description Master. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `label` | `string` |  |
| `value` | `string` |  |
| `iconName` | `string` |  |
| `odd` | `boolean` |  |

## Use

- Keep labels to one or two words.

## Don't

- Do not put actions in detail rows.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# DirectionSheet

A bottom sheet that asks the person to choose a direction: restore an account, pick an option, filter.

**Figma source:** 🧭 Navigation › Direction Sheet (Options: Restore, Login Sheet, 2 Options, Details, Session timeout, Filter).

**15 November 2026, evening:** Options are Restore, 2 Options, Details and Filter; Login Sheet and Session timeout are removed (N4 closed).

## Props

| Prop | Type | Notes |
|---|---|---|
| `icon` | `string` | 68px circle, 38 icon |
| `tone` | `'success' \| 'info' \| 'warning' \| 'error' \| 'brand'` | Icon circle colour |
| `title` | `string` | `headline-1-regular` |
| `subtitle` | `string` | `body-2-light` |
| `children` | `node` | Options: DropdownItem rows (Figma), or OptionCard and SelectCard |
| `primary, secondary` | `string` | Primary MD and Ghost MD |

## Use

- Read 14 November 2026: content padding 32 above, 26 at the sides, 48 below, gap 26; options run without gaps, 4 above and below, as Dropdown item rows (Text Only, Radio). The sheet is Bottom Sheet BG: corners 42 at the top and 54 (`radius-ios`) at the bottom, `glass-full`.

## Don't

- Do not stack more than eight options; use a full-screen list.

## Known issues

- Login Sheet and Session timeout are at 10% opacity in Figma, which reads as deprecated (N4).

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# DropdownItem

One row in a selection list or sheet: icon, flag, avatar or text, with radio, toggle, checkbox or download selector.

**Figma source:** ⬇️ Dropdown list › Dropdown item (Type × Selector), List Screen. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'text' \| 'icon' \| 'flag' \| 'avatar'` |  |
| `selector` | `'radio' \| 'toggle' \| 'checkbox' \| 'download'` |  |
| `title` | `string` |  |
| `subtitle` | `string` |  |
| `checked` | `boolean` | Radio and Checkbox show a 24 px solid check in `icons-longing` when true; the row itself takes `role="radio"` or `"checkbox"` |
| `iconName` | `string` | Type `icon`, 20 px; default `location-01` |
| `src`, `initials` | `string` | Type `avatar`: Avatar SM (42) |
| `downloadLabel` | `string` | Selector `download`: the button's name |
| `ariaLabel` | `string` | The selector is named by `title`; override it here |
| `onChange` | `(checked) => void` | Radio: `true`; Checkbox and Toggle: the new value; Download: on press |
| `flag` | `string` |  |

## Figma (read 14 November 2026)

`_Dropdown item list/On`: padding 12 above and below, none at the sides, gap 18, a 1 px `surface-03-pearl` line under. Title `body-2-regular` in `text-heading`, details `notes-2-light` in `text-content`, 4 apart. Selectors: Radio `checkmark-circle-02` Solid (`checkmark-circle-02-solid` in code since 14 November, night) and Checkbox `checkmark-square-02` (solid, 24, `icons-longing`), Toggle the MD Switch (42 × 21), Download `download-04` (24, `icons-black`). Lead: icon 20, flag 20 × 15, avatar SM 42. Rows are 61 tall, 66 with an avatar.

Figma draws only the chosen state of Radio and Checkbox, and Longing on white is 1.9:1, under the 3:1 a state needs (WCAG 1.4.11). Until the design team answers (questions list Q-D04), an unchosen row shows an empty 24 px slot.

## Use

- Lists of nationalities and languages use the List Screen with search on top.

## Don't

- Do not use emoji flags; use the flag assets.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# EmptyState

What to show when there is nothing yet, and the one action that fixes it. Full page, or a card in a list.

**Figma source:** [‼️ Status Handlers › Empty Status](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-32096) (Type Visual, Icon × Location Full Page, List) on [`_Empty Status Master`](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-32105) (booleans Secondary CTA, Show Icon, Show Illustration). General Bottom Sheet's No internet and Full Screen Error are this card, full page, inside a screen. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**17 November 2026: rebuilt to Figma.** Full page: the title is `headline-1-regular` and the description `body-2-light` in `text-content`, with Primary MD over Ghost MD. New: `location="list"` (the card), `secondary`, the glyph 38 in a 68 circle and the artwork sizes.

## Figma

- Full page: padding 48 18, gap 26, centred: a 68 circle (padding 8) in `alerts-surface-default` with a 38 `alert-01`, or the artwork 130 × 152; the title; the description 12 below; Primary MD, Ghost MD 4 below.
- List: a white card, radius 22, padding 26 18, Shadow/XS as drawn: the 24 glyph (or the artwork, 84 × 98) at the start, 18 from the text; the title `headline-2-regular`, the description `notes-1-light` in `text-subtle` 4 below; Primary SM and Ghost SM, 18 apart, 18 under the text.

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'icon' \| 'visual'` | Visual shows the artwork |
| `location` | `'page' \| 'list'` | Default `page` |
| `iconName` | `string` | Default `alert-01` |
| `icon` | `boolean` | Show Icon. Default true |
| `image` | `string` | The artwork from Visual Assets (Show Illustration) |
| `title` | `string` |  |
| `titleTag` | `'h2' \| 'h3'` | Default `h2` |
| `body` | `string` |  |
| `action`, `onAction` | `string`, `() => void` | Primary CTA |
| `secondary`, `onSecondary` | `string`, `() => void` | Secondary CTA (Ghost) |

## Use

- Say what will appear here and how to get it.
- No internet: «لا يوجد اتصال بالإنترنت», «فضلًا تحقق من اتصالك وحاول مجددًا», Primary «حاول مرة أخرى», with `iconName="no-internet"`.

## Don't

- Do not blame the person ("You have no bookings!").

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# FaceTile

A coloured tile with a cut-out portrait (reciters, scholars, guides). Group stacks a second tile behind.

**Figma source:** Faces (Group Off, On) in 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`). Read 9 November 2026.

## Props

| Prop | Type | Notes |
|---|---|---|
| `backColor` | `QuranColor` |  |
| `backImage` | `string` |  |
| `color` | `QuranColor` |  |
| `group` | `boolean` |  |
| `image` | `string` |  |
| `label` | `string` |  |
| `size` | `number` |  |

## Anatomy

- Front tile 90% of the size, top right, radius 12%; colour from the Quran palette with a white glow; shadow −6, 10, 40, −6 Ink 10%
- Back tile 92%, bottom left, Glass/Full
- Portrait anchored to the bottom, 7% top inset

## Logic

- Emotional / Spiritual realm: a recognisable voice or teacher invites listening.
- Use real, rights-cleared portraits only; never AI-generated faces of real scholars.

## Don't

- Do not put text over the face.
- Do not use more than two colours in one row.

## Native

The code ships no portraits (they are content with usage rights). Pass `image`.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# FeaturedHeader

The top of a destination landing: photo, search bar, title and four quick actions.

**Figma source:** 🏠 Landing Experience V2 › CMS (`9qmiMkJqcEMFY8vbxhcP6r`) › Rawdah Landing › Toolbar (Featured BG, Navbar Inner Page, Featured Actions). Read 9 November 2026.

**17 November 2026:** the back, search and support buttons are GlassBG `control` glass (OS shadows + Glass Effect with the sheen), as the Rawdah Landing toolbar instances are. The search pill lost its private white 75% → 22% gradient.

## Props

| Prop | Type | Notes |
|---|---|---|
| `actions` | `CategoryTileProps[]` |  |
| `backLabel` | `string` |  |
| `image` | `string` |  |
| `onBack` | `() => void` |  |
| `onSearch` | `() => void` |  |
| `onSupport` | `() => void` |  |
| `searchLabel` | `string` |  |
| `statusBar` | `boolean` |  |
| `supportLabel` | `string` |  |
| `title` | `string` |  |

## Anatomy

- 402 × 420; photo 402 × 402 fading into Screen BK
- Bar at y 72: glass round buttons 52 × 42 (back, support) and a glass search pill 42 high
- Title `headline-1-regular` with a white glow at y ≈ 186
- Featured Actions at y 286: four CategoryTile SM 88 × 100, gap 4, side padding 20

## Logic

- Spiritual / Emotional: the place itself.
- Quick actions are the top four of the current stage hub (phase-scoped, DESIGN.md › M9S P2), not the most used services of all time. A booking action is withheld for Dependents and Organised groups.
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# FeedbackEmojis

Five-level satisfaction scale for a Moment CSAT question.

**Figma source:** [⭐️ Rating & CSAT › Customer Feedback Emojis](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76392-4837) (Type × Active, 10) on [Smiles](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76645-2305) (Face: Awful, Bad, Okay, Good, Great). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**16 November 2026 (rebuilt from Figma):** each level is a 59 circle in the Quran palette with the Smiles mouth in the paired shade: Very dissatisfied `quran-crimson` / `quran-crimson-shade`, Dissatisfied `quran-crimson-shade` / `quran-crimson`, Neutral `quran-saffron-shade` / `quran-saffron`, Satisfied `quran-mint` / `quran-emerald`, Very satisfied `quran-emerald` / `quran-emerald-shade`. After a pick the other four drop to 40% and the picked one shows its name under it (`notes-1-regular`, `text-heading`). The scale runs from Very dissatisfied on the left to Very satisfied on the right in both languages, as Figma draws it. The old Ivory tiles with line faces are gone.

## Props

| Prop | Type | Notes |
|---|---|---|
| `value` | `number` | 0–4 (0 = very dissatisfied). Controlled when `onChange` is passed |
| `onChange` | `(value: number) => void` | |
| `label` | `string` | The question; names the radio group |
| `labels` | `string[]` | Five level names. Default «غير راضٍ تمامًا»، «غير راضٍ»، «محايد»، «راضٍ»، «راضٍ تمامًا» |
| `showLabel` | `boolean` | Name under the picked face. Default true |
| `size` | `number` | Circle size in px. Default 59 (65 in the standalone set) |

## Use

- Ask after a stable outcome (booking confirmed, visit completed, issue resolved). One ask per journey phase.
- Pair with `CustomerFeedback` for the full sheet.

## Don't

- Never ask during anxiety peaks or about worship itself; ask about the service.
- Do not colour-code without the level names: the name under the picked face carries the meaning for people who cannot tell the colours apart.

## You provide

The question and, if needed, the level names. Colour, type, radius and spacing come from the tokens and are not props.


---

# FileUploader

Upload a document: an empty field with the upload button, a loading field, the uploaded file with view and delete, and a view-only file.

**Figma source:** [⌨️ Inputs › File Uploader](https://www.figma.com/design/DATayAnynnSQqdJQLAi7DR) (Type × Status, 8 variants on `_Uploader_Master`), Multiple File Uploader, File Uploader Sheet. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**16 November 2026 (read from Figma):** the field is 78 high, radius 18 (`radius-md`), padding 20 / 18, `inputs-surface-default` with a 1 px `surface-03-pearl` line (was a dashed Mist line, radius 12). The label is 16 (`body-2-regular`), the file-types line is a Hint under the field. The actions are Secondary XS icon buttons: `upload-04` (new icon), `view`, and `delete-03` in the Fate colour. Loading shows «جاري رفع الملفات» with the `loading-03` spinner. New `status`: **Error** turns the label, line and text to the error colours and adds an Error hint; **Disabled** uses `inputs-surface-disabled`, a Mist line and `inputs-text-disabled`, and hides delete. Defaults are Arabic. Figma spells the values `Defualt` and `Dissabled`; code accepts both spellings.

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'default' \| 'loading' \| 'uploaded' \| 'view'` | Figma Type |
| `status` | `'default' \| 'error' \| 'disabled'` | Figma Status (16 Nov 2026) |
| `label` | `string` | Above the field |
| `placeholder` | `string` | Default «رفع الملف» |
| `loadingLabel` | `string` | Default «جاري رفع الملفات» |
| `fileName` | `string` | `uploaded`, `view` |
| `fileSize` | `string` | Kept left to right («200.3 KB») |
| `progress` | `number` | 0–100, read out on the spinner |
| `hint` | `string \| false` | File types and size. `false` hides it |
| `hintText` | `string` | Alias of `hint` |
| `error` | `string` | Error hint when `status="error"` |
| `errorText` | `string` | Alias of `error` |
| `viewLabel` | `string` | Accessible name of the view button. Default «عرض الملف» |
| `removeLabel` | `string` | Accessible name of the delete button. Default «حذف الملف» |
| `onUpload` | `() => void` | |
| `onView` | `() => void` | |
| `onRemove` | `() => void` | |

## Use

- State the accepted formats and size before upload (the Hint).
- Show the loading state for anything over a second.
- Write the error as what to do next («ارفع ملفًا بصيغة PDF أو JPEG»).

## Don't

- Do not hide delete once a file is uploaded; only Disabled and View have no delete.
- Do not use red without the Error hint text.

## You provide

The content (labels, values, file names) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# FlightTicket

A flight option with route, times, tag and price; full, selected and skeleton.

**Figma source:** 🏖️ Travel › Flight Ticket (Selected × Version), Hotel Ticket, From To, Room Layout, Places & Events. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `selected` | `boolean \| 'skeleton'` |  |
| `airline` | `string` |  |
| `from` | `string` |  |
| `to` | `string` |  |
| `fromTime` | `string` |  |
| `toTime` | `string` |  |
| `meta` | `string` |  |
| `price` | `string` |  |
| `tag` | `string` |  |

## Use

- Routes and times read left to right in every language.

## Don't

- Do not use the tag for paid placement without saying so.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# GlassBG

The glass every floating control sits on: Figma's Glass BG with its 12 variants, plus the layer switches that components use. Toolbar, BottomNav, SearchBar, IconBlock, the tabs and the tiles draw their glass with the same engine (`.nk-glass`), so this card shows what they are made of.

**Figma source:** [⚙️ Foundation › 🎨 Colors › Glass BG](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo?node-id=65346-1296) (Mode × Dark × Glass) on `_Glass BG Master` ([65640:511](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo?node-id=65640-511)).

**Read 17 November 2026:** every layer, fill and effect of the 12 variants, and every Glass BG instance in 🧭 Navigation, 🎹 Tabs, 🃏 Cards, 🕹️ Buttons, 🏠 Landing Experience V2 and 🔎 Menu & Search, with the layers each one hides.

## Layers (bottom → top)

| Layer | Figma | Web |
|---|---|---|
| Shadows | `Shadows / Type=OS`: drop −2 0 2, 2 0 2, 0 0 1 spread 0.5, #1A1C1F 5% | `shadow-os` |
| Default Fill | radial from the top centre, radii 113.4% × 50%: white 10% → 50% (Dark: Ink 30% → 80% at 70%) | `glass-fill`, `glass-fill-dark` (raised at the top: refraction evens Figma's fill out) |
| Active Fill | Highlighted and Active only: gold under a layer blur | child layer `.nk-gl-af` |
| Glass Effect | GLASS (frost 6 = `Liquid Glass/Frost - Regular`, refraction 0.7, depth 30, dispersion 0.2, light 0.25) + linear-burn and linear-dodge inner shadows | `blur(3px)` + `glass-rim` / `glass-rim-dark` |
| Glass=Off | Glass Effect hidden; the master takes `Glass/Andriod Blur` (background blur 10 + inner 0 5 10 10 Ink 5%) | `glass-fill-off*`, `blur(5px)`, `glass-android` |

Figma blur radii are twice the CSS value: frost 6 → `blur(3px)`, background blur 10 → `blur(5px)`, layer blur 70 → `blur(35px)`.

## Variants

| Mode | Default Fill | Active Fill |
|---|---|---|
| `default` | radial white (Dark: Ink) | hidden |
| `highlighted` | radial white (Dark: Ink) | Glass On: radial clear → Longing with a progressive blur (Dark: Longing 70% → clear, blur 20, spills past the edge). Glass Off: white 40% (Dark: Ink 40%) + radial white → Longing (Dark: Ink → #67460E) |
| `active` | `Surface/Longing` (Dark + Glass Off: `Surface/Illumination`) | as Highlighted on Glass On; hidden on Glass Off |

## Recipes components use

Figma instances hide layers. The DL names each combination (`kind`):

| kind | Layers kept | Used by |
|---|---|---|
| `control` | Shadows + Glass Effect, its fill overridden with a sheen (white 50% at the bottom → clear); Default Fill hidden | IconBlock, the toolbar logo, Wallet, DatePill, BookingPill, FeaturedHeader buttons |
| `field` (default) | Shadows + Default Fill + Glass Effect | SearchBar, Top Tabs, bottom-bar fields (Primary/Small, Marketplace, Filters, Inner Pages), the standalone tab, the current tab pill |
| `bar` | Shadows + Glass Effect | BottomNav Primary bar |
| `flat` | Default Fill only, Glass Off: Ivory (Dark: Ink radial) | Secondary Pages / Tabs |
| `card` | solid white + `Glass/Full` | CategoryTile and every tile on white (same as `.nk-gsurf`) |

Dark=On (`dark`) is the Darkmode toolbar and dark themes. Glass=Off (`glass={false}`, or `data-glass="off"` on any ancestor) is Android.

## Props

| Prop | Type | Notes |
|---|---|---|
| `mode` | `'default' \| 'highlighted' \| 'active'` | Figma Mode |
| `dark` | `boolean` | Figma Dark=On |
| `glass` | `boolean` | Figma Glass. Default `true` (iOS); `false` = Android |
| `kind` | `'control' \| 'field' \| 'bar' \| 'flat' \| 'card'` | A recipe from the table above. Default `field` |
| `shadows`, `fill`, `effect` | `boolean` | `false` hides that layer, as a Figma instance does |
| `sheen` | `boolean` | Puts the controls' sheen on the Glass Effect |
| `activeFill` | `boolean` | Overrides the mode's Active Fill |
| `size`, `width`, `height`, `radius` | `number` | Size of the surface; radius defaults to full |
| `attrs` | `object` | Extra attributes for the element (`type`, `onClick`, `aria-*`) |
| `as`, `role`, `ariaLabel`, `className`, `style`, `children` | | |

## Platforms

- **iOS:** Glass=On is the system Liquid Glass material (`.glassEffect()`, iOS 26). Do not rebuild it from these numbers.
- **Android:** Glass=Off, and every value is exact: background blur 10 (Figma units; 5px in CSS) behind the Default Fill, then the 5% Ink inner shadow. Android's blur radius is not Figma's radius, so match the blur on a device.
- **Web:** frost and rims are approximations. Refraction, dispersion and the specular light have no CSS equivalent; the fill is raised at the top to match Figma's render.

## Use

- Glass sits over content that moves (scrolling lists, photos). On a flat, still background use a solid surface.
- Over photos and video, use the Darkmode controls (`dark`) for contrast.
- Respect Reduce Transparency: the engine turns every glass opaque under `prefers-reduced-transparency: reduce` and where `backdrop-filter` is missing.

## Don't

- Don't put text on `bar` or light `control` glass over a busy photo without the Darkmode variant; contrast is not guaranteed.
- Don't stack a glass inside a glass with its own blur; the current tab pill drops its blur for that reason.


---

# Guide

A preparation guide: hint widgets that scroll sideways with page dots, in a white card (default) or plain.

**Figma source:** 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`) › Guide (Default, Variant2). Read 9 November 2026.

## Anatomy

- Default: top padding 48, side 8; white card (Glass/Full) with padding 0/18/26, Collaps header, hints gap 4, dots
- Plain: section title (tight), white hints, dots
- Dots: 6 × 6 Pearl, current 16 × 6 Mist, gap 12, follow the scroll

## Logic

- Transformational intent: getting ready for a rite.
- Commitment: a private checklist; never shame unticked items.
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

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


---

# Hint

One line of help, information, warning, error or success under a field or block.

**Figma source:** ⌨️ Inputs › Hint (Hint, Error, Info, Warning, Success; Success added 11 November 2026, with the `clapping-02` icon). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'hint' \| 'info' \| 'warning' \| 'error' \| 'success'` | Error is announced to screen readers |
| `children` | `text` |  |
| `id` | `string` |  |

## Use

- Keep it to one line. Lead with what the person can do.

## Don't

- Do not stack more than one hint per field.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# HintWidget

A preparation tip people can tick off: icon, title, details and a link chip.

**Figma source:** Hints Widget (Direction Vertical, Horizontal) in 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`). Read 9 November 2026.

**14 November 2026:** Figma has 4 directions. `Direction3` is Horizontal again with the icon in a second slot (`Icon2`), so code keeps `horizontal`. `Direction4` is new and becomes `direction="logo"`: 234 × 212, padding 26 / 20, gap 18, a partner logo 48 (Cards › Logo Icons), title `body-1-regular` (18), details `notes-1-regular` (14), no tick box. Its sample text names an airline: use it for a real service the person is booking, never as an advert (known issue F5).

## Props

| Prop | Type | Notes |
|---|---|---|
| `action` | `string` |  |
| `checkLabel` | `string` |  |
| `checkable` | `boolean` |  |
| `checked` | `boolean` |  |
| `details` | `string` |  |
| `direction` | `'vertical' \| 'horizontal' \| 'logo'` | `logo` = Figma Direction4 (14 Nov 2026): logo 48, title 18, details 14, no tick box |
| `href` | `string` |  |
| `iconName` | `string` |  |
| `logo` | `string \| React.ReactNode` |  |
| `logoAlt` | `string` |  |
| `title` | `string` |  |
| `tone` | `'white' \| 'teal' \| 'saffron' \| 'amethyst' \| 'olive'` |  |

## Anatomy

- 200 × 168, padding 26/18, gap 12, radius 18
- Top row: icon 24 at the start, tick box 18 (Longing border, radius 4) at the end
- Title `body-2-regular`, details `notes-2-light`, White XS chip with the link (18 high; invisible padding gives it a 48 target)
- Tones: Quran teal, saffron, amethyst, olive shades with a 1 px 2% inner line, or white with Glass/Full

## Logic

- Transformational / Functional: readiness for a rite. The tick is a personal checklist (Self-Control & Commitment), stored per user, never shared.
- Feedback: ticking shows progress; do not celebrate or gamify it.

## Don't

- Do not use for alerts or deadlines (use NoticeBar).

## Native

The tick is a toggle button with an accessible name ("تم: <title>").

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Icon

A 24px stroke glyph in the current text colour, sized by the `dimension-*` tokens.

**Figma source:** 🎨 Icons (Hugeicons, 4,428 sets). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `name` | `string` | **Hugeicons and Nusuk icons exported from Figma (8, 9, 11, 12 and 14 November 2026), 143 in all; added 14 November, night: checkmark-circle-02 is now the Stroke Standard glyph (Alert success) and the solid glyph is checkmark-circle-02-solid (DropdownItem); added 14 November, later: checkmark-circle-02, checkmark-square-02, download-04, package-search, package-receive, delivery-truck-02, package-out-of-stock, delivery-view-01, money-exchange-01; added 14 November: search-list-01, car-02, infinity-01, play-list, book-open-02 (each with -solid), airplane-02-solid, document-validation:** absher, airplane-01, airplane-02, airplane-landing-02, airplane-take-off-02, alert-02, alert-circle, arrow-down-01, arrow-expand-02, arrow-left-01, arrow-left-right, arrow-left-02, arrow-right-01, arrow-right-02, audit-01, bank, bed-double, berlin-tower, calendar-04, calendar-remove-02, call, camera-02, cancel-01, cancel-circle, checkmark-badge-02, checkmark-circle-02-solid, clapping-02, contact-02, customer-service-01, customer-support, delete-03, door-02, dua, favourite, filter, fire-03, flag-02, golf-cart, google-maps, gps-01, haji, hajj, hajj-service, hajj-service-solid, hajj-solid, hijab, hourglass, id, identification, image-02, internet, kaaba-01, live-streaming-02, loading-03, location-01, madinah, madinah-city, madinah-solid, mail-at-sign-01, mail-validation-01, makkah-city, man-woman, maps, masjid-gates-solid, menu-circle, more-horizontal, more-vertical, nafath, notification-01, nusuk, nusuk-logo, package, package-moving, package-process, package-remove, palm, palm-solid, passport-01, play, plus-sign, qr-code, quote-up, quran-01, rajhi, rawdah, remove-01, return-request, riyal, riyal-sharp, route-02, safe-delivery-01, scissor, search-01, security-password, share-05, shopping-basket-01, sidebar-left, simcard-02, smart-phone-04, sorting-05, spam, speed-train-01, star, stars, store-03, store-03-solid, student-card, sujood, thumbs-up, tick-02, tick-double-02, ticket-03, time-02, time-quarter-pass, truck-delivery, umrah, user, user-03, user-circle, user-group-02, user-story, view |
| `size` | `'sm' \| 'nr'` | 16px or 20px; default 24px |
| `label` | `string` | Accessible name; omit for decorative icons |
| `flip` | `boolean` | Mirror in RTL (directional glyphs) |
| `cls` | `string` |  |

## Use

- Icons sit beside a label or inside a control that names them.
- Directional icons (back, forward) mirror in Arabic.

## Don't

- Do not draw new icons. These are stand-ins for previews; production uses the Hugeicons set from 🎨 Icons.
- Do not use colour alone to carry meaning.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# InfoTile

A compact metric tile: temperature, crowding, humidity.

**Figma source:** 📅 Date & Time › Information (Default, Good, Alert, Danger). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**15 November 2026, evening:** 125 wide, radius 18, padding 12 / 26 / 8; the title (12) has a 16 icon (sun-03) after it and the value (32) a 12 unit (℃); each status colours text and icon (Success, Warning, Error alert colours).

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'default' \| 'good' \| 'alert' \| 'danger'` |  |
| `title` | `string` |  |
| `value` | `string` |  |
| `iconName` | `string \| false` | Default sun-03 |
| `unit` | `string \| false` | Default ℃ |

## Use

- Pair with advice the person can act on.

## Don't

- Do not alarm without guidance.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Leaderboard

One featured media card, full width, with the fade surface. No section title.

**Figma source:** 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`) › Leaderboard (402 × 504). Read 9 November 2026.

## Anatomy

- Top padding 48, side padding 8
- MediaCard 386 × 456, fade surface

## Logic

- Desire → intent: one featured offer.
- Use once per page; it carries the strongest visual weight.
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# ListSideBySide

Pages of two horizontal playlist cards that scroll sideways.

**Figma source:** 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`) › List Side by Side (402 × 295). Read 9 November 2026.

## Anatomy

- Pages 330 wide, each two PlaylistCard (horizontal) with gap 18; pages gap 18, side padding 8

## Logic

- Spiritual desire with a known time cost (duration).
- Present bias: show duration so a small step is easy.
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# MapPin

A map pin for places and events.

**Figma source:** 🗺️ Map › Pint Event (Icon, Logo), Select Location (screen, widget), Full Map. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `iconName` | `string` |  |
| `label` | `string` |  |

## Use

- Every pin has an accessible name.

## Don't

- Do not rely on pin colour for meaning.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

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


---

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

## Use

- Card: white, radius 18, padding 18, gap 12, Glass/Full shadow.

## Don't

- Do not show both an action and a selection tick.

## Known issues

- Selection: Figma `Selected=On` shows an empty pill and `Off` shows the tick (K1). Code shows the tick when selected.
- The meta line is 10px (8px until 9 November 2026), below the 12px minimum for body text (K2).

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# NoticeBar

An inline message that sits in the page: default, info, alert, success or error.

**Figma source:** [‼️ Status Handlers › NoticeBar](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-31987) (Color Info, Alert, Success, Error, Default) on [`_NoticeBar Master`](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=69240-4184) (booleans CTA, Close, Description), and [NoticeBar Location](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=69678-3983). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**17 November 2026:** the master's booleans are props (`action`, `onClose`, the description); each colour has Figma's glyph; Shadow/XS as drawn; `hug` is NoticeBar Location.

## Figma

- Radius 18, padding 18, 8 between the title row and the description.
- Title row: the 20 glyph (Default `alert-circle`, Info `information-circle`, Alert `spam`, Error `alert-02`, Success `tick-double-02`), the title `notes-1-regular` in Alerts/Text/<colour>, a Ghost XS (CTA) and a 19 `multiplication-sign` (Close).
- Description: `notes-1-regular` in Alerts/Icons/Reject, 26 in from the start.
- NoticeBar Location: the bar sized to its text, at the top of the screen in the toolbar row.

## Props

| Prop | Type | Notes |
|---|---|---|
| `color` | `'default' \| 'info' \| 'alert' \| 'success' \| 'error'` | Default `default` |
| `title` | `string` |  |
| `children` | `node` | Description |
| `description` | `node` | Same as `children` |
| `action`, `onAction` | `string`, `() => void` | CTA: a Ghost XS |
| `onClose` | `() => void` | Shows Close |
| `iconName` | `string` | Overrides the colour's glyph |
| `hug` | `boolean` | NoticeBar Location: as wide as its text |

## Use

- Short and specific. Pair with an action when there is one.

## Don't

- Do not stack more than one notice per screen.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# NpsScale

The "how likely are you to recommend" row: numbered circles with end labels.

**Figma source:** [⭐️ Rating & CSAT › Customer Feedback › Recommendation](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76392-4735) (unpublished, 16 November 2026). Mirrors the NPS block inside Customer Feedback; it is not a separate Figma set yet.

**Read 16 November 2026:** 37 circles; 1–6 on `alerts-surface-error`, 7–8 on `alerts-surface-warning`, 9–10 on `alerts-surface-success`; numbers `notes-1-regular` in `text-subtle`; end labels `notes-2-regular` in `text-content`. Figma starts at **1** and has no picked state. Code defaults to Figma (1–10) and offers `from={0}` for the standard 0–10 scale; the picked number is Ink with white text until Figma draws one (Q-D25, Q-D26).

## Props

| Prop | Type | Notes |
|---|---|---|
| `question` | `string` | Shown above the row and names the radio group |
| `from` | `0 \| 1` | First number. Default 1 (Figma); 0 = standard NPS |
| `value` | `number` | Controlled when `onChange` is passed |
| `onChange` | `(value: number) => void` | |
| `lowLabel` | `string` | Default «غير مرجّح إطلاقًا» |
| `highLabel` | `string` | Default «مرجّح جدًا» |

## Use

- Ask once per journey, after the outcome, and never in the same sheet as a payment or a complaint.
- Report NPS as % promoters (9–10) minus % detractors (0–6, or 1–6 on the Figma scale; the two are not comparable).

## Don't

- Do not mix 1–10 and 0–10 data in one report.

## You provide

The question. Colour, type and spacing come from the tokens.


---

# Nudge

One announcement above the bottom navigation: an illustration, one line and one action.

**Figma source:** 🧭 Navigation › Nudges (Expand On / Off) on `_Nudges Master`. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `title` | `string` | One line |
| `expand` | `boolean` | `false` mirrors Expand=Off (60% scale, N17): do not ship |
| `art` | `node \| false` | The illustration from Visual Assets; a Kaaba icon stands in |
| `actionLabel / onAction` | `string / fn` | The accessible name and the action |

## Use

- A real, dated event: registration opens, a permit is ready.
- One at a time; it follows the interrupt tiers (DESIGN.md › M9S).

## Don't

- No promotions, no countdowns, nothing in a sacred window.
- No second line and no second action.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# OptionCard

A choice or setting in a list: with an action, a counter, an icon on top, or a requirement.

**Figma source:** 🃏 Cards › Option Cards (9 types) on `_Master Card/On`.

**15 November 2026, evening:** 13 types. New: `simple-list` (title with a 16 icon before it, no lead, no action), `lr-icon` (the flag tile without an action — **this name meant LR Icon with Action until now; use `lr-icon-with-action` for that**) and `2-actions-on` (the swiped state: the card slides to reveal a Secondary action (star) and a Fate action (delete-03), each the full card height; `open` on `2-actions` does the same). `_Master Card` is published with modes Default (white, radius 18, shadow), Transparent (Ivory line) and Gray (Ivory fill, radius 14).

**10 November 2026:** new type `product` (picture, name, quantity).

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'icon-with-action' \| 'action-only' \| 'lr-icon-with-action' \| 'lr-icon' \| 'simple-list' \| 'icon-top' \| 'without-action' \| 'text-only' \| '2-actions' \| '2-actions-on' \| 'counter' \| 'requirement-item' \| 'product'` | Figma Type (Figma names work too) |
| `open, actions, onMore` | `boolean, {icon,label,fate,onClick}[], fn` | `2-actions`: reveal the swipe actions |
| `title, description` | `string` | `notes-1-light` over `body-2-regular` (Counter swaps them) |
| `status` | `string` | Error chip under the text |
| `iconName` | `string` | Lead icon (24) or tile icon |
| `flag` | `node` | Tile content for LR Icon (flag) |
| `count` | `number` | Counter start value; minus is 40% at 0 |
| `action, actionIcon` | `string` | Secondary XS icon-only button |
| `decreaseLabel` | `string` |  |
| `image` | `string` |  |
| `increaseLabel` | `string` |  |
| `moreLabel` | `string` |  |
| `quantity` | `string` |  |

## Use

- Card: radius 18, padding 18, gap 12 (Requirement: 12 / 18).

## Don't

- Do not use for navigation lists; use DropdownItem.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Page

Renders a template: an ordered list of sections (patterns) and the bottom bar. It mirrors the CMS page model, so the same JSON can drive the app, the CMS preview and decks.

**Figma source:** 🏠 Landing Experience V2 › CMS › Rawdah Landing (`18147:16034`, short; `18147:15994`, all sections). Read 9 November 2026.

## Props

| Prop | Type | Notes |
|---|---|---|
| `sections` | `PageSection[]` |  |
| `tabBar` | `object \| false` |  |
| `template` | `'rawdah-landing' \| 'rawdah-landing-full' \| PageTemplate` |  |
| `width` | `number` |  |

## Templates in this release

| Template | Sections (top to bottom) |
|---|---|
| `rawdah-landing` | featured-header · upcoming-requests · categories (products) · categories (faces) · cards-slider · guide · services-box · cards-list · bottom bar |
| `rawdah-landing-full` | featured-header · upcoming-requests · categories · cards-slider · cards-slider (grid) · category-chips · guide · playlist · bento-grid · services-box · list-side-by-side · cards-list · leaderboard · bottom bar |

The JSON is in `templates/rawdah-landing.json` and as `NusukDL.templates`.

## Section model

`{ "pattern": "<name>", "title": "…", "tag": "#…", "actionLabel": "…", "items": [ … ] }` — patterns: featured-header, upcoming-requests, categories, category-chips, cards-slider (`layout: row | grid`), playlist, list-side-by-side, leaderboard, guide (`variant: card | plain`), services-box, bento-grid, cards-list.

## Logic (composition rules)

- Order follows the render bands, top-down and never inverted (DESIGN.md › M9S): 1 ritual & safety · 2 commitment state · 3 journey step · 4 daily habit · 5 learning · 6 commercial. The header is the frame; hubs (P2) sit below every P1 section. Each section carries `band`, `placement` and `dna`; drop sections that are `withheld` for the person's mindset, outside their desire `states`, or `suppress: "sacred"` in a sacred window.
- The two Rawdah templates keep Figma's order, which inverts bands (known issue PT9); use the band order in DESIGN.md › M9P for production pages.
- One Leaderboard and one Bento Grid per page at most; never two horizontal rows of the same item type back to back.
- Every section has a reason to exist on this page; empty sections are removed, not shown empty.
- Images are content from Visual Assets; the template ships placeholders.
- Measure: section impressions → item taps → completed action (meaningful action), per section position.

## Native

iOS: one `ScrollView` + `LazyVStack` of section views keyed by `pattern`. Android: one `LazyColumn` with an item per section. Decode the same JSON on both.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Pagination

Dots for carousels and stories. The current item is a 38px bar.

**Figma source:** 🧭 Navigation › Pagination (Direction × White × Size) and `_Pagination item master` (Default, Active, Filled).

## Props

| Prop | Type | Notes |
|---|---|---|
| `count` | `number` | Default 5 |
| `active` | `number` |  |
| `direction` | `'horizontal' \| 'vertical'` | Gap 8 horizontal, 4 vertical |
| `size` | `'default' \| 'sm'` | 4px or 3px high |
| `white` | `boolean` | On media |
| `progress` | `number` | 0–1. Fills the active bar (Figma Filled), for stories |

## Use

- All items are `icons-gray`; only the active one is longer.

## Don't

- Do not use for more than 7 pages.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# PaymentDetails

A price breakdown with discounts and total.

**Figma source:** 💸 Payment › Payment Box, Payment Details (Price, Refund), Tickets Payment Details. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `title` | `string` |  |
| `lines` | `{label,amount,discount}[]` |  |
| `total` | `string` |  |
| `totalLabel` | `string` |  |

## Use

- Show every fee before payment; no surprises at the end.

## Don't

- No hidden fees, no pre-selected add-ons.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# PlaylistCard

An audio or video series: face tile, one-line title, tag; the horizontal version adds a duration button.

**Figma source:** Playlist (Vertical On 165 × 214, Off 330 × 89) in 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`). Read 9 November 2026.

## Props

| Prop | Type | Notes |
|---|---|---|
| `backColor` | `QuranColor` |  |
| `backImage` | `string` |  |
| `color` | `QuranColor` |  |
| `duration` | `string` |  |
| `group` | `boolean` |  |
| `href` | `string` |  |
| `image` | `string` |  |
| `onClick` | `() => void` |  |
| `onPlay` | `() => void` |  |
| `subtitle` | `string` |  |
| `title` | `string` |  |
| `vertical` | `boolean` |  |

## Anatomy

- Vertical: faces 150, gap 18, title `body-1-regular` one line with ellipsis, tag `notes-2-light` `text-note`
- Horizontal: faces 88 at the start, content with title, tag and Secondary XS button (play icon + duration), gap 18

## Logic

- Desire realm (Spiritual): listening is chosen, never pushed. The duration sets expectations (Motivation & Present Bias: small, known commitment).

## Don't

- Do not autoplay.
- Do not truncate the reciter name to less than one word.

## Native

Play opens the player; it is not a toggle inside the card.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# PlaylistRow

A row of vertical playlist cards.

**Figma source:** 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`) › Playlist (402 × 314). Read 9 November 2026.

## Anatomy

- Row of PlaylistCard 165 × 214, gap 18, side padding 8

## Logic

- Spiritual desire: listening.
- Autonomy: nothing plays until tapped.
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# PrayCard

A selectable day card for Rawdah and prayer bookings, with gender availability.

**Figma source:** 📅 Date & Time › Pray Card. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**15 November 2026, evening:** 110 × 90, radius 18. Off: Ivory, Slate icon (sunrise), title `text-subtle`; On: shade 6 with a 1.5 Illumination line, title `text-link`. Both show the men's and women's icons (muslim, hijab) under the title; `gender` picks them.

## Props

| Prop | Type | Notes |
|---|---|---|
| `selected` | `boolean` |  |
| `title` | `string` |  |
| `note` | `string` |  |
| `iconName` | `string` | Default sunrise |
| `gender` | `'both' \| 'male' \| 'female' \| 'none'` | Men's and women's icons |
| `genderLabel` | `string` | Spoken gender note |

## Use

- Use for Rawdah visit days.

## Don't

- Do not use for general dates; use Day Tab.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# PrayerLiveActivity

The lock-screen live activity for prayer times.

**Figma source:** 🛎️ Notifications › LiveActivity, DynamicIsland (Compact, Minimal, Expanded) for Prayer time, Athkar and Quran; Prayer Time Animation. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `now` | `string` |  |
| `sub` | `string` |  |
| `prayer` | `string` |  |
| `times` | `[name, time][]` |  |
| `current` | `number` |  |

## Use

- Uses fixed Kiswah black in every theme, like the system surface.

## Don't

- No countdown pressure; informative only.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# PriceOptions

The price block of a product card: "from", the price and the cart control.

**Figma source:** 🃏 Cards › Price Options (Vertical False / True). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `price` | `string` | Digits 0–9 |
| `fromLabel` | `string \| false` | "ابتداءً من"; pass `false` when the price is fixed |
| `vertical` | `boolean` | Stacked, for grid cards |
| `cart` | `AddToCartStatus \| false` | The control; `false` hides it |
| `cartProps` | `Partial<AddToCartCTAProps>` |  |

## Use

- Show "from" only when the price really varies.
- The price is the full price: taxes and fees included, or said beside it.

## Don't

- No struck-through price without a real earlier price.
- No second control beside the cart control (K9).

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# ProductTile

A white product-category tile with a 3D product picture and a label, for the store.

**Figma source:** Product Category (Status 3D) in 🏠 Landing Experience V2 › CMS (`9qmiMkJqcEMFY8vbxhcP6r`). Read 9 November 2026.

## Props

| Prop | Type | Notes |
|---|---|---|
| `href` | `string` |  |
| `iconName` | `string` |  |
| `image` | `string` |  |
| `label` | `string` |  |
| `onClick` | `() => void` |  |

## Anatomy

- 124 × 138, white, radius 18, Glass/Full; padding 18/8, gap 10
- Picture 86 × 72 (contain); label `body-2-light` `text-heading`

## Logic

- Desire → intent bridge (Emotional realm: gifts, Zamzam, dates for family). Show the product, not a generic icon.

## Don't

- Do not show prices here; prices belong on the product card.

## Native

Pass the product image from Visual Assets; the code shows a basket icon when none is given.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# ProgressRing

A small ring showing progress through a form or steps, with an optional title.

**Figma source:** 🧭 Navigation › Progress and `_Form Progress Indicator` (P20–P100).

## Props

| Prop | Type | Notes |
|---|---|---|
| `value` | `number` | 0–1 |
| `text` | `string` | Inside the ring, e.g. 1/4 |
| `title, subtitle` | `string` | `body-2-regular` and `notes-2-light` |
| `label` | `string` | Accessible name |

## Use

- Track `surface-03-pearl`, progress `surface-illumination`.

## Don't

- Do not use for loading; use the loading state of Button.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# QRCodeStatus

A QR code with default, used, expired, blurred, cancelled and error states.

**Figma source:** 🏖️ Travel › QR Code Status, QR Code (Normal, Priority, Child, Premium). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**15 November 2026, evening:** follows QR Code Status (200 × 200, radius 14; unpublished edits in 🏖️ Travel). Default shows the Nusuk logo in the centre. Every other state blurs the whole code (layer blur 22): Blurred nothing else; Used a Success MD chip «مستخدمة» with tick-double-02; Expired a Default MD chip «انتهت» with calendar-remove-02; Cancelled an Error MD chip «مُلغاة»; Error a Primary SM button «تحديث» with exchange-01 (`onRetry`). The old overlay text and alert icon are gone.

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'default' \| 'used' \| 'expired' \| 'blurred' \| 'cancelled' \| 'error'` |  |
| `label` | `string` |  |
| `ariaLabel` | `string` |  |
| `retryLabel, onRetry` | `string, fn` | Error: the refresh button |
| `logo` | `boolean` | Default: the Nusuk logo in the centre |

## Use

- Blur until the person taps, in public places.

## Don't

- Do not show a usable code on an expired permit.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Radio

Choose exactly one option from a short visible list.

**Figma source:** 📻 Switches, Checkbox and Radio › Radio (Status × Size). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**14 November 2026 (read from Figma):** 18 / 18 / 24 (`control-radio-*`). Off `surface-04-mist`; on `surface-illumination` (gold; was Ink). The centre is a white rounded square 10 × 10 (13 × 13 at LR), radius 4, with the avatar shadow, in both states (code drew a smaller circle when on). Disabled: `surface-03-pearl` with an Ivory centre, Mist when chosen. Error: solid `alerts-surface-solid-error`. New `size` prop: `sm` (default), `md`, `lr`.

## Props

| Prop | Type | Notes |
|---|---|---|
| `checked` | `boolean` |  |
| `label` | `text` |  |
| `ariaLabel` | `string` | The name when there is no visible label |
| `status` | `'default' \| 'error' \| 'disabled'` |  |
| `size` | `'sm' \| 'md' \| 'lr'` | Figma Size; `sm` is the default |
| `onChange` | `() => void` |  |

## Use

- Two to six options. More than six: use a Dropdown list sheet.
- The control is 16–27 high and carries tap padding to 48 × 48. Stack them in rows at least 48 high.

## Don't

- Do not use a radio for on/off.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# RatingBar

A star rating in half steps, alone or with its value and count; or a 1–5 star input.

**Figma source:** [⭐️ Rating & CSAT › Rating Bar](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76392-4805) (Rating Unrated, 0.5 … 5) on [`_Star`](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76392-4828) (Full, Half, Half/RTL, Empty), and [Ratings](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76479-1128) (Status Box, Mini, Standard · Reviews). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**17 November 2026: rebuilt to Figma.** Solid stars in `icons-longing` on `surface-03-pearl` (code had outlines 14 apart in Illumination and Mist), half stars, the three Ratings and the input of the Customer Feedback Bottom Sheet.

## Figma

- Stars touch (gap 0): 16 in Ratings Standard and Mini, 20 in Box, 24 in the feedback sheet. A half star is gold on the reading-start side (`_Star` Half/RTL in Arabic).
- Standard: the value `notes-1-regular`, the bar 4 after. Mini: the value `notes-2-regular`, one star, «(335)» `notes-2-light`. Box: a 20 star and the value `body-1-regular`, the count line `notes-2-light` under it.
- Figma's Box reads «%s تقييم» beside a separate number; code writes one string with the Arabic plural forms: «234 تقييمًا», «3 تقييمات», «100 تقييم» (F78).

## Props

| Prop | Type | Notes |
|---|---|---|
| `value` | `number` | 0–5; stars round to the nearest half, the number shows one decimal |
| `label` | `string` | Accessible name; default «4.5 من 5», with the count when shown |
| `variant` | `'bar' \| 'standard' \| 'mini' \| 'box'` | Default `bar` (stars only) |
| `size` | `number` | Star size in px |
| `count` | `number` | Number of ratings (Reviews) |
| `showCount` | `boolean` | Default true when `count` is given |
| `onChange` | `(value: number) => void` | Makes it an input: five radios «1 من 5» … «5 من 5» |

## Use

- Show the average with the count (review summary standard).
- As an input, each star is a 48 target (stars 24 apart): Figma's 24 targets touch (F81).

## Don't

- Never rate worship or the ibadah itself.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# ReasonSelection

Pick one reason from a short list; the last one, «أسباب أخرى», opens a text box.

**Figma source:** [‼️ Status Handlers › Reason Selection](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-32655) (Others On, Off) on [`_Reason Selection Master`](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-32618). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Figma

Dropdown item rows (Text Only, Radio) drawn as white cards: radius 18, padding 18, a 1 px Pearl line, Shadow/XS as drawn, 8 apart; the chosen row shows the 24 gold check. Others On adds the Text Area «اكتب هنا» 12 below. Figma's four reasons are a booking cancellation's: «ظرف صحي أو طارئ», «خطأ في اختيار التاريخ أو الوقت», «تغيير في خطة الزيارة», «أسباب أخرى».

## Props

| Prop | Type | Notes |
|---|---|---|
| `reasons` | `string[]` | Default Figma's four |
| `value` | `number` | The index picked |
| `onChange` | `(index: number) => void` | |
| `otherIndex` | `number` | The reason that opens the text box; default the last |
| `label` | `string` | Name of the group; default «السبب» |
| `placeholder` | `string` | Default «اكتب هنا» |
| `textLabel` | `string` | Name of the text box; default the reason's text |
| `text` | `string` | |
| `maxLength` | `number` | |

## Use

- Put it in a BottomSheet before a cancellation or a refund, with the action below it.
- Keep the list short (three to five) and in the person's words.

## Don't

- Do not make a reason required when the action does not need it.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# RequestCard

A booking in "My bookings": what it is, its status, when, and who it is for. Every Figma type is a preset you can override.

**Figma source:** 🃏 Cards › Request Cards (12 types) on `_Request Card Master` (Active, Empty State), with Request Card Status (46). Read 8 November 2026, re-read 17:20.

**10 November 2026:** 11 types. `sim` left Figma and is deprecated.

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'hajj' \| 'umrah' \| 'umrah-package' \| 'rawdah' \| 'electric-cart' \| 'hair-cut' \| 'hhr' \| 'flight' \| 'hotel' \| 'ticket' \| 'sim' \| 'marketplace'` | Loads the Figma content for that type |
| `upcoming, tag, tagIcon` | `string` | Upcoming header with a gold or default chip |
| `status, service` | `string` | Past header with StatusChip |
| `title, category, city` | `string` | Package title block (Hajj) |
| `route` | `{ label, text, icons?, flag? }[]` | Umrah Package route pills |
| `date, time` | `[label, value, icon?]` | Two slots, `headline-2-regular`; `range` swaps the divider for a chevron (Hotel) |
| `order, people` | `…` | Marketplace order line |
| `footer, footIcon, forName, entities` | `…` | Bottom row with the open button |
| `notice` | `string` | Alert NoticeBar at the end |
| `empty` | `{ icon, label, action }` | Empty State variant |
| `openLabel` | `string` |  |
| `range` | `boolean` |  |
| `tagState` | `'gold' \| 'default'` |  |

## Use

- Card: radius 18, padding 26 / 18, gap 18.
- Avatars inside the card carry a white inside ring: 1.5px on the 24px footer avatar, 1.4px on the 38px order avatars (Figma, 8 Nov afternoon).
- Order avatars (Marketplace) are Positive: Ivory `+2`, then pictures.

## Don't

- Do not put more than one notice on a card.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# ReviewCard

One person's review: who, what they said, their rating and when.

**Figma source:** [⭐️ Rating & CSAT › Product Review Card](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76404-3197) (published). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Figma

A white card, radius 18, padding 18, 12 apart, Shadow/XS as drawn. Avatar SM (42) with a 1.5 white ring at the start; the name `notes-1-regular` and the review `body-2-light` (`text-content`), 4 apart; under them Ratings Mini without the count and the date `notes-2-light` in `text-note`.

Figma's sample says «مياه زمزم», «نُسك» and «22 Jun 2025» in Arabic; the preview uses «ماء زمزم», «نسك» and «22 يونيو 2025» (F82).

## Props

| Prop | Type | Notes |
|---|---|---|
| `name` | `string` | |
| `children` | `node` | The review |
| `text` | `string` | Same as `children` |
| `rating` | `number` | 0–5 |
| `date` | `string` | As the reader writes dates: «22 يونيو 2025» |
| `dateTime` | `string` | Machine date for `<time>` |
| `avatar` | `string` | Photo URL |
| `initials` | `string` | Default the name's first letter |

## Use

- Show the person's words as written; never edit a review's meaning.

## Don't

- Do not invent reviews or show one without the person's consent.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# ReviewSummary

The overall rating with the faces of a few reviewers.

**Figma source:** [⭐️ Rating & CSAT › Total Review Card](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76427-1177) (published). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Figma

A white card, radius 18, padding 18, Shadow/XS as drawn: Group Users (38 avatars overlapping by 15, the remaining count first) at the start, Ratings Standard (value and bar) at the end.

## Props

| Prop | Type | Notes |
|---|---|---|
| `value` | `number` | 0–5 |
| `count` | `number` | Number of ratings, shown as «(335)» |
| `people` | `AvatarGroup people` | Initials or `{ src }` |
| `max` | `number` | Default 4 |
| `more` | `string` | For example «+2» |

## Use

- Put it above the review list; it opens the list.

## Don't

- Do not show faces of people who did not agree to it.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# SectionError

A block inside a page that failed to load, with a retry. The page around it keeps working.

**Figma source:** [‼️ Status Handlers › Section Error](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68545-4963) (published). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Figma

A white card, radius 18, padding 18, Shadow/SM as drawn: a 20 `alert-circle` over the message (`notes-1-regular`, Alerts/Text/Default), 12 apart, then a Secondary XS «إعادة المحاولة» 18 below.

## Props

| Prop | Type | Notes |
|---|---|---|
| `children` | `node` | The message; default «تعذّر تحميل هذا القسم.» |
| `message` | `string` | Same as `children` |
| `iconName` | `string` | Default `alert-circle` |
| `action` | `string \| false` | The button; default «إعادة المحاولة»; false hides it |
| `onRetry` | `() => void` | |

## Use

- Name what failed: «تعذّر تحميل أوقات الصلاة.»
- Use it for one section; when the whole page fails, use EmptyState full page.

## Don't

- Do not blame the person or show an error code.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# SectionHeader

Titles for heroes, sections and legends, with optional description and action.

**Figma source:** 🔌 Misc › Headers (13 locations: Hero, XL Header, Section Title, Simple Title, Legend, Collapse, Family, Filter / Search…). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `level` | `'hero' \| 'xl' \| 'section' \| 'simple' \| 'legend'` |  |
| `title` | `string` |  |
| `description` | `string` |  |
| `action` | `string` | "See all" |
| `divider` | `boolean` |  |

## Use

- One hero per screen. Section titles name what the section is for.

## Don't

- Do not skip heading levels.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

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


---

# SelectCard

A large selectable card for choosing a journey type or package.

**Figma source:** 📻 Switches › Select Card (Active, Selected, Disabled). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**14 November 2026 (read from Figma; the set lives in 📻 Switches):** radius 18 (`radius-md`; was 12), padding and gap 18. Active: `surface-02-ivory` with a 1 px `surface-03-pearl` line. Selected: `surface-shade-5` with a 1 px `surface-illumination` line (was shade 6 with a 1.5 Longing line). Disabled: content at 70%, the description in `text-note`, gap 20 and the soft avatar shadow (was the whole card at 38%). The top row holds the icon only; the radio code drew there is not in Figma and was removed. 

**16 November 2026 (re-read in [📻 Selections & Switches › Select Card](https://www.figma.com/design/zhcTb4a0XbF3YeYF9XI6zw)):** radius 14 (`radius-s`; was 18). Active is `surface-01-white` with a 1 px `surface-02-ivory` line and the OS shadow (−2 / 0 / 2 at 5%, plus a 0.5 spread; no token, F53). Selected stays `surface-shade-5` with a 1 px `surface-illumination` line. Disabled is `surface-02-ivory` with a 1 px `surface-03-pearl` line, full opacity, the description in `text-note`, gap 20. Type follows Figma (Q-D02 answered *keep it*): title 14 (`notes-1-regular`, `text-content`), description 16 (`body-2-regular`, `text-heading`).

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'active' \| 'selected' \| 'disabled'` |  |
| `title` | `string` |  |
| `description` | `string` |  |
| `iconName` | `string` |  |
| `onClick` | `() => void` |  |

## Use

- Use when each option needs a line of explanation.

## Don't

- Do not mix Select Cards and radios in one question.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# ServicesBox

A tinted box with a 4-column grid of service tiles.

**Figma source:** 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`) › Services Box (402 × 354). Read 9 November 2026.

## Anatomy

- Top padding 48, side 8; box Teal shade + white conic light, radius 18, Glass/Full, padding 0/18/26
- Collaps header; grid 4 columns, gap 4, CategoryTile SM 85 × 100

## Logic

- Functional intent: the services of this place.
- A stage hub (P2): 4–8 services of the current phase; membership changes with the phase. A service relevant in every phase belongs in navigation (DESIGN.md › M9S).
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# SoundPlayer

Audio player for Quran recitation, lessons and Athkar.

**Figma source:** 🎥 Media › Sound Player (Full, Mini, Speed), Player Icons, Video, Image Gallery, Single Item. **14 November 2026, night:** the Sound Player set is gone from 🎥 Media; the player is now a frame inside two new screen components, `Sound Player Screen / Quran` and `/ Others` (edits not published). This card stays as the last published Sound Player until those screens are published, then it is rebuilt to them (known issue F41). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `title` | `string` |  |
| `subtitle` | `string` | Reciter |
| `progress` | `number` | 0–1 |
| `playing` | `boolean` |  |
| `duration` | `string` |  |
| `elapsed` | `string` |  |

## Use

- Remember position; resume where the person stopped.

## Don't

- No autoplay of the next item without consent.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# StartJourney

The entry widget that starts a Hajj, Umrah or Rawdah journey.

**Figma source:** 🎫 Widgets › Start Journey (SM, LR, XS), Start Journey Animated, Manasek, Try Nusuk AI. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `size` | `'sm' \| 'xs' \| 'lr'` | `sm` (default): Start Journey Animated, one card; `xs`: three tiles; `lr`: a section title over three cards |
| `journey` | `'umrah' \| 'hajj' \| 'rawdah'` | SM: the journey the card names, default `umrah` |
| `items` | `{ k, icon, label? }[]` | Default Umrah (`umrah`), Hajj (`hajj-service-solid`), the Rawdah (`rawdah`); labels from the strings: عمرة، حج، الروضة الشريفة |
| `title` | `string` | SM: replaces «ابدأ رحلة»; LR: the section title, default «ابدأ رحلة جديدة» |
| `onSelect` | `(k) => void` | Called with the journey's key |
| `onMore`, `moreLabel` | | LR: the section's Secondary XS icon button |
| `iconName` | `string` | @deprecated |
| `subtitle` | `string` | @deprecated before 14 Nov 2026 (the Ink card) |

## Figma (read 14 November 2026)

- **SM** (Start Journey Animated, Status Umrah, Haj, Rawdah): 80 tall, padding 18, gap 12, radius 18, a `surface-01-white` to `surface-white-shine` gradient and `shadow-xs`. «ابدأ رحلة» and the journey word with its 24 icon in `headline-2-light`; a Secondary SM icon-only button with `arrow-left-02` at the end. Figma swaps the word between the journeys; code shows the one you pass.
- **XS**: three 80 × 80 tiles, a 24 icon centred in a 60 square (radius 12, no fill) over a `body-2-light` label.
- **LR**: Headers › 02 Section Title (`body-1-regular`, a Secondary XS icon button) over three cards 92 tall: padding 18, gap 12, radius 18, the same gradient and shadow; icon 24 (Umrah in `icons-longing`, the others `icons-black`), label `body-1-light`.
- Until 14 November code drew an Ink card with a gold icon tile; Figma has not had that card since the Widgets update.
- Figma: the button inside SM is still the pre-4-November CTA (`Light=Off`, 68 × 38); swap it to CTA / Secondary / SM / Icon Only (questions list).

## Use

- One journey entry per screen.

## Don't

- Do not use urgency to push the start.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# StatusChip

The status of a request. 47 statuses with their colour and icon, exactly as Figma (`approved`, مقبول, added 14 November 2026).

**Figma source:** 🃏 Cards › Request Card Status (46 variants): Chips XS, 18 high, text 10, icon 12 (9 November 2026).

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `string` | Kebab case of the Figma name: `confirmed`, `awaiting-payment`, `order-delivered`… Figma spellings (`Awatining Payment`) also work |
| `children` | `string` | Overrides the label |
| `icon` | `boolean` | Hide the icon |
| `iconName` | `string` |  |

## Use

- Success = done, Pending = waiting on someone, Error = failed or cancelled, Default = over.

## Don't

- Do not invent statuses; ask the DL team to add one.

## Known issues

- Chip text is 10px (was 8), still below the 12px minimum (K2).

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# StatusSheet

A bottom sheet that reports an outcome or asks for one decision: an error, a confirmation, a permission, a cancellation. One title, one line or two of description, at most two buttons.

**Figma source:** [‼️ Status Handlers › Bottom Sheet](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-32059) (Status Default, Brand, Success, Information, Warning, Error, Image) and [General Bottom Sheet](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-32076) (19 types), both on [`_General_Bottom_Sheet`](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-32030) (booleans Show Chips, Show Icon, Description, Instruction, T&C Statement, Primary CTA, Ghost CTA, Prev. Step, and the Additional Content slot) over [Bottom Sheet BG](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=69025-3308). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**17 November 2026: rebuilt to Figma.** The title is `headline-1-regular` (it was Headline 2) and the description `body-2-light` in `text-content`; the buttons are a Primary MD over a Ghost MD, each as wide as its label (code had two full-width LR buttons); Brand is the gold alert palette; the overlay is Overlay/Soft; the grabber sits over the top padding. New: `image`, `chip`, `instruction`, `children` (the slot), `terms`, `previous`, `fate`, `secondaryFate`, `topAction` and `template`, the General Bottom Sheet types with their copy.

## Figma

- The sheet: 8 from the screen edges, radius 42 at the top and 54 at the bottom, `glass-full` and Shadow/SM as drawn. Content: padding 32 18 48, gap 26, centred.
- Icon: a 72 circle (padding 8) in Alerts/Surface/<status> (Brand: Gold) holding a 38 glyph in Alerts/Icons/<status>: `alert-01`, `information-circle` for Information. Image: the artwork, 165 wide, instead.
- Text: title, then the description 12 below; Instruction (Settings Note) `notes-1-regular` after the Settings glyph.
- T&C Statement: `notes-2-regular` «بالمتابعة، فإنك توافق على» and the underlined «الشروط والأحكام», 12 above the buttons.
- Buttons: Primary MD, Ghost MD 4 below. Prev. Step: the previous sheet's title (`headline-2-regular`, `text-note`) on Mist, peeking above.

## Templates (General Bottom Sheet)

`template` fills status, icon, copy and buttons; every other prop overrides it. `subject` fills `{s}` (a name, a service).

| `template` | Figma type | Status · icon | Buttons |
|---|---|---|---|
| `error` | Something Went Wrong | error · alert-circle | Ghost «إغلاق» |
| `download-failed` | Download Incomplete | error · file-not-found | Primary «حاول مرة أخرى», Ghost «إغلاق» |
| `unsaved-changes` | Unsaved Changes | error · alert-01 | Primary «إكمال البيانات وحفظ التعديلات», Ghost + Fate «المتابعة دون حفظ» |
| `delete` | Delete Confirmation | error · alert-01 | Secondary + Fate «تأكيد الحذف», Ghost «إلغاء الأمر» |
| `location` | Location | brand · location-01 | Primary «تفعيل الوصول للموقع», Ghost «ذكّرني لاحقًا» |
| `location-settings` | Location 2nd time | brand · location-01 · Instruction | Primary «انتقل إلى الإعدادات» |
| `calendar` | calendar access | brand · calendar-04 | Primary «أضف الحجز للتقويم» |
| `calendar-settings` | calendar 2nd time | brand · calendar-04 · Instruction | Primary «انتقل إلى الإعدادات» |
| `notifications` | Enable Notification | brand · notification-square | Primary «تفعيل الإشعارات»; put the notification preview in `children` |
| `refund` | Refund | error · alert-01 · T&C | Secondary + Fate «إلغاء الحجز», Ghost «إغلاق»; put the two refund Select Cards in `children` |
| `wallet-refund` | Wallet Refund | error · alert-01 · T&C | Secondary + Fate «إلغاء الحجز», Ghost «إغلاق» |
| `priority` | Priority | brand · information-circle | Ghost «إغلاق» |
| `payment-failed` | Payment Failed | error · cancel-circle-half-dot | Primary «ادفع بطريقة أخرى» |
| `payment-expired` | Payment session expired | error · alert-01 | Primary «حجز جديد» |
| `update` | Force Update | brand · `image` (the app) | the store button in `children`, Ghost «ذكّرني لاحقًا»; `force` hides it |

No internet and Full Screen Error are `EmptyState` (full page) in a screen. Companion MGM and General Template are layouts: compose them in `children` (MemberCard rows, TextField counters).

Where the templates differ from Figma, and why (known issues F76–F78): Fate only where the action removes or cancels (Figma also puts it on retry, pay another way, new booking and the location permission); Location asks with the Brand palette, as Calendar and Notifications do (Figma uses Error); the copy follows the house rules («لم تُحفظ» for «لم يتم حفظها», «وسيُعاد المبلغ» for «وسيتم استرداد المبلغ», «نسك» for «نُسك»).

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'default' \| 'brand' \| 'success' \| 'information' \| 'warning' \| 'error' \| 'image'` | Default `default` |
| `template` | `string` | A General Bottom Sheet type (table above) |
| `subject` | `string` | Fills `{s}` in the template copy |
| `title` | `string` | What happened |
| `body` | `string` | Description: what it means and what to do |
| `iconName` | `string` | The 38 glyph; default `alert-01` (Information `information-circle`, Success `checkmark-circle-02`) |
| `icon` | `boolean` | Show Icon. Default true |
| `image`, `imageAlt`, `imageWidth` | `string`, `string`, `number` | The artwork in place of the icon (Status Image), 165 wide |
| `chip`, `chipIcon` | `string` | Show Chips: a Chip LR above the icon |
| `instruction` | `string` | Settings Note, for example «الإعدادات > التطبيقات > نسك > الموقع > دائمًا» |
| `children` | `node` | Additional Content (the slot) |
| `terms` | `boolean \| { lead, label, href, onClick }` | T&C Statement |
| `primary`, `onPrimary` | `string`, `() => void` | Primary MD |
| `primaryIcon` | `string \| false` | A glyph on the primary's end (Icon=Right) |
| `fate` | `boolean` | Secondary + Fate: only for an action that removes or cancels |
| `secondary`, `onSecondary` | `string`, `() => void` | Ghost MD |
| `secondaryFate` | `boolean` | Ghost + Fate, to discard |
| `previous` | `string` | Prev. Step: the previous sheet's title, peeking above |
| `force` | `boolean` | No dismissing button (a forced update) |
| `topAction`, `arrow`, `arrowLabel`, `onArrow` | see BottomSheet | Bottom Sheet BG › Top Action |

## Use

- Errors open with what happened and guide the next step: «تحقّق من بيانات بطاقتك، أو جرّب طريقة أخرى لإكمال الدفع.»
- Ask for a permission only after showing its value; when it was refused, use the `-settings` template with the path.
- Adverse outcomes are agentless and never use «تم»: «انتهت مهلة الدفع», «أُلغي حجزك».

## Don't

- Do not put a blessing on an error or payment message.
- Do not use Fate (red) for a retry or a permission; it says "this removes something".
- Do not use a sheet for a success that needs no action; use a NoticeBar.

## Accessibility

`role="alertdialog"`, `aria-modal`, named by the title. The icon is decorative. Focus the primary when the sheet opens and return focus to the trigger when it closes.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# StepCard

A journey step card with status, tag and the next action.

**Figma source:** 🏖️ Travel › Step Card (17 statuses: Current, Completed, Disabled, Action, Track, Tag, Requirement, In progress, Exception request, Cancellation, Failure…). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'current' \| 'completed' \| 'disabled' \| 'next'` |  |
| `number` | `number` |  |
| `title` | `string` |  |
| `description` | `string` |  |
| `tag` | `string` |  |
| `action` | `string` |  |

## Use

- Only the current step carries an action.

## Don't

- Do not show a disabled step without saying what unlocks it.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Steps

A horizontal step bar for order and request progress.

**Figma source:** [🔦 Tracker › Steps](https://www.figma.com/design/nj7L8ks27djv1LmxZYFTM8/?node-id=70451-491) on `_Step Master` (State Previous, Current, Next). Status variants: OrderReview, OrderPreparation, OrderShipped, OutForDelivery, Delivered (five steps) and CancellationRequested, CancellationProcessing, RefundInProgress (three steps). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**14 November 2026, night: rebuilt as a replica** after the library publish (default modes). The afternoon version used 20 instead of 18 for the start padding and gaps, 20/30 instead of 18/32 for the label, a flat glow and no gradient on the current line.

## Figma, part by part

- Steps sit in a row with no gap, start-aligned and top-aligned; each step hugs its label.
- **Point row:** 20 high, 18 (`space-nr`) in from the start, then the 20 point, 18, and a 1 px (`border-thin`) line to the end of the step. The final step has no line.
- **Previous:** a 12 `surface-10-ink` dot; the line is `surface-07-slate`.
- **Current:** the stage icon, 20, in `icons-illumination`, over the *Breathing Effect* (a soft `surface-illumination` → `surface-shade-5` glow, 34 × 34, 60%, blurred 10.9). The line runs `surface-07-slate` at the point and fades to clear 76% of the way along. The glow breathes once (4 s, to a small `surface-shade-3` glow and back) and then rests; no motion under reduced motion (DL-17).
- **Next:** a 12 ring, 1 px `surface-05-smoke`; the line is `surface-04-mist` fading the same way; the label at 40%.
- **Label:** 12 under the row; 18 in from the start, 32 at the end, gap 4. Title `notes-1-regular` in `text-heading`; the current step adds its details in `notes-2-light`, `text-note`.

| Figma Status | `current` | Stage icon of the current step |
|---|---|---|
| OrderReview · OrderPreparation · OrderShipped · OutForDelivery · Delivered | 0 · 1 · 2 · 3 · 4 | package-search · package-receive · package-moving · delivery-truck-02 · safe-delivery-01 |
| CancellationRequested · CancellationProcessing · RefundInProgress | 0 · 1 · 2 | package-out-of-stock · delivery-view-01 · money-exchange-01 |

## Props

| Prop | Type | Notes |
|---|---|---|
| `steps` | `(string \| { title, details?, icon?, state? })[]` | `details` shows on the current step; `icon` is its stage icon; `state` ('prev' \| 'current' \| 'next') overrides `current` |
| `current` | `number` | Index of the current step; the ones before it are Previous |
| `ariaLabel` | `string` | Names the list; default "Progress" / «التقدم» |

## Use

- Three to five steps with short labels. Wider than the screen, the bar scrolls sideways.
- The Figma labels are kept verbatim in the preview; their copy review is parked (F20, F30).

## Don't

- Do not use for flows people move through themselves; use a form progress.

## Accessibility

An ordered list with `aria-current="step"`; previous and next steps add «مكتملة» / «قادمة» for screen readers; the point row is hidden from them.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Switch

Turns a setting on or off immediately.

**Figma source:** 📻 Switches, Checkbox and Radio › Switch (Status × Size). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**14 November 2026 (read from Figma):** sizes SM / MD / LR = track 32 × 16 / 42 × 21 / 54 × 27 with a knob 16 × 12 / 24 × 18 / 32 × 24 (`control-toggle-*`, `control-toggle-icon-*`; MD was 40 with a 20 knob in code). Off `surface-04-mist`, on `surface-10-ink`, white knob. Disabled: `surface-03-pearl` track with a `surface-04-mist` knob and a `text-note` label (was 38% opacity). Error: the track is solid `alerts-surface-solid-error` and the label `alerts-text-error` (was a red outline). Label 14 / 16 / 18 (`control-text-*`), gap 8 / 12 / 12 (`control-gap-*`).

## Props

| Prop | Type | Notes |
|---|---|---|
| `checked` | `boolean` |  |
| `label` | `text` |  |
| `ariaLabel` | `string` | The name when there is no visible label |
| `status` | `'default' \| 'error' \| 'disabled'` |  |
| `size` | `'sm' \| 'md' \| 'lr'` | Figma Size; `sm` is the default |
| `onChange` | `(checked) => void` |  |

## Use

- Use for settings that apply at once (reminders, notifications).
- The control is 16–27 high and carries tap padding to 48 × 48. Stack them in rows at least 48 high.

## Don't

- Do not use a switch inside a form that needs a submit; use a checkbox.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

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


---

# TextField

A labelled input with every Nusuk field type: text, text area, search, select, mobile, password, OTP, action and credit card.

**Figma source:** ⌨️ Inputs › Input (12 types: Counter, Text Area, OTP, Multi Select, Search, Select, Action, Password, Input, Mobile, Credit Card, Avatar). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**14 November 2026:** Figma's Input is now 12 types × Status (Default, Error, Dissabled [sic]) × Filled (Off, On), 72 variants on the private `_Input_Master Trail` (Status Default / Error / Filled × Disabled). Error adds the 20-high Hint (Type=Error) 8 under the field; Error and Disabled keep the default field fill (`inputs-surface-default`; code used the error and disabled fills until now): Error has the `inputs-icons-error` border, Disabled the `surface-04-mist` border and `inputs-text-disabled` text. Two types were missing in code and are added: `multi-select` (two selects side by side, gap 8, each with its chevron) and `avatar` (a 42 picture at the end of the field).

**12 November 2026:** fields are radius 18 (`radius-md`, Figma Radius/MD) with `shadow-xs`; Search and Counter are capsules (`radius-full`); the label above the field is `notes-1-regular` in `inputs-text-placeholder`, inset 18. OTP boxes follow (radius 18). The Hint icon is 20.

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'input' \| 'text-area' \| 'search' \| 'select' \| 'multi-select' \| 'mobile' \| 'password' \| 'otp' \| 'action' \| 'credit-card' \| 'avatar' \| 'calendar' \| 'counter'` | `counter` draws the capsule field; the stepper is DL OptionCard Counter |  |
| `label` | `string` | Always visible above the field. It is the field's accessible name; the hint is its description |
| `placeholder` | `string` | An example, never the label |
| `value` | `string` |  |
| `state` | `'default' \| 'focused' \| 'error' \| 'success' \| 'disabled'` |  |
| `hint` | `string` | Help or error text under the field |
| `maxLength` | `number` | Shows a counter |
| `length` | `number` | OTP digits (default 4) |
| `values / placeholders / fieldLabels` | `[string, string]` | `multi-select`: the two halves. Give each half its own accessible name |
| `avatar / initials` | `string` | `avatar`: the picture at the end of the field |
| `ariaLabel` | `string` | The name when a field has no visible label (search). Without it the placeholder is read |
| `actionLabel` | `string` |  |
| `prefix` | `string` |  |

## Use

- Label every field. Put the format in the placeholder or hint ("5X XXX XXXX").
- Errors say what happened and how to fix it, in one line under the field.
- Numbers, phone numbers and OTP are always Western digits 0–9, left to right.

## Don't

- Do not use placeholder text as the label.
- Do not validate on every keystroke; validate on blur or submit.
- Do not shrink the field to fit; the 62px height is the touch target.
- `type="otp"` draws the boxes only, for mockups; build the real field with the system one-time-code input.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# TimeSlot

A selectable time slot with capacity note.

**Figma source:** 📅 Date & Time › Time slot card, Time & Slots section (Normal, Skeleton, Gender Unavailable), Time Picker. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**15 November 2026, evening:** a ticket card 54 high, radius 22, with notches top and bottom; period (16) and time (18) in `text-heading`; optional `markers` (`soon` hourglass, `instant` zap, `prayer` salah) as 20 circles overlapping the corner. Default white with a Pearl line; Selected shade 2 with a Longing line and Longing markers; Disabled Ivory and `text-note`. Put it on the screen background (the notches use `--slot-cut`).

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'default' \| 'selected' \| 'disabled'` |  |
| `time` | `string` |  |
| `note` | `string` | Real capacity only |
| `period` | `string` | ص / م; taken from `time` after a space when absent |
| `markers` | `('soon' \| 'instant' \| 'prayer')[]` | Corner markers, each with a spoken label |

## Use

- Capacity notes reflect real availability.

## Don't

- Never invent scarcity ("Only 2 left!") that isn't true.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Toolbar

The top app bar. It is transparent and floats over the screen; controls sit on glass. Every Figma type is available, in the standard and the Light (on media) version.

**Figma source:** 🧭 Navigation › Toolbar (40 variants: Type [16] × Status × Light), read 8 November 2026. Built from `_Icon Block`, `_Search-bar`, `_DatePicker`, `_Profile`, `_Nusuk AI` and `Glass BG` (Foundation).

**17 November 2026 — glass as Figma builds it:** every control now draws [Glass BG](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo?node-id=65346-1296) with the layers its Figma instance keeps. Icon blocks, the logo, Wallet, the date and booking pills are `control` glass: OS shadows and the Glass Effect carrying a white sheen (50% at the bottom → clear), no Default Fill. The search bar and Top Tabs are `field` glass (OS shadows, the radial fill, the Glass Effect). Secondary Pages / Tabs sits on a flat Ivory track (Glass Off, fill only). The old recipe (white 62% → 34%, a white outline, `saturate(1.4)`) is gone. `glass={false}` (or `data-glass="off"` on an ancestor) draws Glass Off for Android. In dark themes the controls take Dark=On. See GlassBG.

**15 November 2026, evening:** 23 types (46 variants). New `Secondary Pages / Full Search`: back, a 254-wide search field and one action in a single row, 84 high with 32 below. `Secondary Pages / Search` is a title row (title and three actions) over a full-width search row, 142 high with 18 below; code used to draw it as the one-row search, so it now renders `inner` + `with-search`. Landings › `LoggedIn` is the Figma spelling now (`Loggedin` still works); the default greeting uses the Arabic comma (مرحبا، أحمد). Figma: unpublished edits in 🧭 Navigation — publish before developers measure.

**14 November 2026:** 22 types. New `Primary Pages / Title` (188): the icon blocks, then the headline `headline-2-regular` (20) alone, bottom padding 18. `Primary Pages / Tabs` is renamed `Primary Pages / URLs` (244; its Secondary SM buttons are 119 wide, was 127). `Landings / Search` is 204 high (was 212; search row 18 under row 1). Both old and new names work in code.

**12 November 2026:** type 21, `booking` (Figma `Almatar`): back, a booking pill (`route: [from, to]`, `meta: string[]`, a more button) and a currency button. Figma names it after a partner; code names the job (DL-31).

**10 November 2026:** 20 types × `darkmode`. Pass the Figma type name (`'Secondary Pages / Default'`); the short names still work. `status`, `market-landing` and `market-category` are deprecated. The full table is in DESIGN.md › M9 › Toolbar.

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


---

# UpcomingRequests

The person's next bookings at the top of a landing page.

**Figma source:** 🏠 Landing Experience V2 › CMS (`9qmiMkJqcEMFY8vbxhcP6r`) › Rawdah Landing › Quick Actions. Read 9 November 2026.

## Anatomy

- Section title (tight) with "عرض الكل"; RequestCards 386 wide, gap 8, side padding 8
- Upcoming cards hide the past-status row

## Logic

- Intent: what I already booked comes first.
- Reassurance: date, time and status at a glance (Feedback).
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# VerticalStepper

A vertical timeline of journey steps: done, current, next.

**Figma source:** [🔦 Tracker › Vertical Stepper Mobile](https://www.figma.com/design/nj7L8ks27djv1LmxZYFTM8/?node-id=70392-810) (State Done, Current, Next × Step Start, Middle, Last) on `_Stepper Step Master Mobile`, `_Stepper Point` and `_Tracker Status`. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**14 November 2026, night: rebuilt as a replica** after the library publish (values in the default modes; 267 measured checks pass, see the change log). The code of 12 November drew a 24 rail, a breathing current dot, gold chips and a rail on every state; Figma has none of that.

## Figma, part by part

- **Step:** a row, 12 (`space-sm`) between the rail and the card column; the rail sits at the start edge. The card column has 8 (`space-xs`) above and below; Start has none below, Last none above.
- **Rail:** 20 wide (`dimension-nr`), gap 4. Line above the point 18 long, line below to the end of the step, both 1.5 (`border-medium`) in `surface-06-ash`. Start hides the line below; Last hides the line above (kept in the flow) and has 18 more above, so its point sits 40 from the top (22 for Start and Middle).
- **Points:** Done is a 20 circle in `surface-longing` with a white check (8.37 × 6). Next is the 10 `icons-longing` dot of `_Ongoing Master`, centred. Current has **no rail** (Figma hides it), so its card spans the full width (known issue F33).
- **Card:** `surface-01-white`, radius 18, padding 18, gap 18, shadow 0 1 2 at 3% Ink (Figma's `New/XS`, not a Foundation style: F35). Inside, in order: title `body-2-regular` in `text-heading` and time `notes-2-light` (8 apart); description `notes-1-regular` in `text-note` (12 below); status chips (Chips Pending MD, 8 apart); last update `notes-2-light` in `text-note`; an Alert (Figma: type Error, no icon); CTAs: two SM buttons, Primary at the start, each half the width, 8 apart.
- Figma's variants turn on Status, Description and Last Update and turn off Alerts and CTAs; in code each part shows when you pass it.

## Props

| Prop | Type | Notes |
|---|---|---|
| `steps` | `{ state, step?, title, time?, description?, status?, lastUpdate?, alert?, actions? }[]` | `state`: 'done' \| 'current' \| 'next'. `step`: 'start' \| 'middle' \| 'last', the Figma variant; by default the first item is Start, the final item Last, the rest Middle. `status`: chips, Pending by default as in Figma, or `{ label, state }`. `alert`: a DL Alert (`type: 'error', icon: false` in Figma). `actions`: two SM Buttons, primary first |
| `ariaLabel` | `string` | Names the list; default "Progress" / «التقدم» |

## Known issues in Figma (code follows them)

- **F33** Current hides the rail. **F34** Start keeps the line above and hides the one below, Last the reverse, so a list stacked Start → Last has gaps in its rail; stacked with `step` 'last' first and 'start' final it joins. **F35** `New/XS` is not in Foundation. **F36** Last's extra 18 is bound to `Space/MD` of an older Layout collection (Foundation's Space/MD is 20). **F37** Next uses `_Stepper Point` Step=Current, and nothing breathes.

## Use

- Use for journeys with dependencies (visa → flight → permit), one step per service fact.

## Don't

- Do not show more than one current step.
- The time stamp and last update are facts from the service, never estimates.

## Accessibility

An ordered list with `aria-current="step"` on the current step; done and next steps add «مكتملة» / «قادمة» (completed / upcoming) for screen readers. The rail is hidden from them.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.

