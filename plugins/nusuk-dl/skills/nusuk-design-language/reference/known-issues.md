# Known library issues

Found in the 2 November 2026 audit of all 31 files and in every read since. They are logged for the DL team; until they are fixed, follow the workaround.


Open questions for the design and development teams, with a reply column for each team and a status: [Nusuk DL Questions](https://claude.ai/artifact/X98C7uwN3N2KQ4e6GuL8Ah) (14 November 2026; every open row below plus Q-D01 to Q-D21 and Q-X01 to Q-X27, with UX's answers to the iOS review and the Android audit in the design reply column). Content questions are off the sheet for now (14 November, at the DL Manager's request: Q-D05, AI5, R8, F11 and the Arabic copy tab; the sheet's history can bring them back). The copy findings stay logged below. Developers answer on the [developer questions page](https://claude.ai/artifact/9KcxfMFYRKP3wwrn8n2NaS), which saves their answers and sends them to the DL team.

## Fix first (review of 9 November 2026, updated 10 November)

Ordered by harm to the people using the app. The numbers come from rendering all 72 previews in the six themes (*DESIGN.md › M10 › Measured baseline*). "Where" says who can fix it.

| # | What | Evidence | Where | Fix |
|---|---|---|---|---|
| 1 | Primary CTA label is invisible in dark themes (C7) | White on white, 1:1; 16 labels in the previews, in all three dark themes | Figma · 🕹️ Buttons › `Buttons Colors` | Default Content (Light) → `Surface/01 White`. One alias |
| 2 | The design system page serves old generated files (DS1) | `tokens.css` still has button heights 26 / 48 / 54 and Hero 64; the API cards and `manifest.json` list 51 of 77 components | The design system page | One save on the page; it rebuilds them |
| 3 | Status text on soft fills (C2) | 2.5–3.2:1; 74 text runs per light theme, most of them at 10 px | Figma · ⚙️ Foundation › `Alerts/Text` | Same hues, darker: success #3A7C40 · warning #B94E00 · error #DF0C00 · info #0E70B6 · gold #93661A (4.6–4.9:1 on their fills, 5.0–5.2:1 on white) |
| 4 | White text on gold fills (C9) and on solid status fills (C10) | 2.5:1 on gold; 2.6–3.6:1 on the solids | Figma · ⚙️ Foundation | An on-accent content token per theme (C9); Ink content on the solid fills (C10). No fill changes |
| 5 | Library files are behind each other (L10) | Travel 85 of 246 library instances behind, Date & Time 40 of 74, Navigation 24 of 276; 38 components with unpublished edits. **14 Nov, 07:58:** 61 sets with unpublished edits in 14 files (F24) | Figma · the file owners | Accept the updates and publish, file by file |
| 6 | Text under 12 px in card chips (K2) | 121 of 902 text runs are 10 px | Figma · 🃏 Cards | Chips SM (12 px text, 20 high) in cards |
| 7 | On-dark buttons in dark themes (B7, B16) | Secondary 1.6:1; Ghost white on white on an Ink surface | Figma · `Buttons Colors` › Dark | Decide what Light=On sits on (media or Ink) and alias to values that hold there |
| 8 | Focus has no drawn spec (B10) | CTA `State=Focused` equals Default in all three kinds | Figma · 🕹️ Buttons | Draw the ring code now uses: Ink, 2 px, offset 2 (DL-19) |
| 9 | Foundation variables carry no code names (L11) | 421 variables, none with code syntax or a description. **14 Nov:** the DL team added Web, iOS and Android code syntax to the 192 Colors, Layout and Effects variables (publish ⚙️ Foundation); Typography and Motion (28) have no DL token to name | Figma · ⚙️ Foundation | Add code syntax; the names are in `tokens.json` |
| 10 | Media Cards `ADS` is not in code (K8) | 19 types in Figma, 18 coded | Code, after a read | Read it with the Marketplace patterns |

## Colour

| # | Issue | Workaround |
|---|---|---|
| C1 | `text-link` in gold light (#D99726) is 2.5:1 on white and 2.2:1 on the screen background | Use for 24px+ text or beside an icon; body links in `text-content` with underline. Darker gold #93661A reaches 5.0:1 |
| C2 | Status text on soft fills (`alerts-text-info/success/warning/error`) is 2.5–3.2:1 in light themes: success 2.51, warning 2.55, error 3.17, info 3.09 (gold text on its fill 2.30). 74 text runs per light theme in the previews | Use for short labels with an icon; descriptions in `text-subtle`. Proposed values, same hue: success #3A7C40, warning #B94E00, error #DF0C00, info #0E70B6, gold #93661A |
| C3 | `text-inverse`, `icons-white` and `alerts-text-white` stay white in dark themes while `surface-10-ink` and solid alerts invert to light | On inverting fills use `surface-01-white` or `alerts-icons-white`, which do invert. Code follows this everywhere since 9 November (floating cart bar, Ink avatar and the toolbar account circle were the last three) |
| C4 | Hugeicons navy #141B34 (4,399+ icon layers) is not mapped to a token | Treat as `icons-black` until mapped |
| C5 | Brand logo, flag and placeholder greys (#C4C4C4, #D9D9D9) are unlinked on purpose | Leave them; they are not UI colours |
| C6 | Foundation no longer holds the 18 `Buttons/*` colours (removed 4 Nov 2026). Button colours now live in 🕹️ Buttons › `Buttons Colors` | On 5 Nov, 653 layers still bound to the deleted variables were rebound to Foundation tokens with identical values (Surface/10 Ink, Surface/01 White, Surface/02 Ivory, Text/Heading, Alerts/*), except `Alerts/Icons/_Info` in green-dark (#118CE4 → #E4F1F8). Code migration: Release notes |
| C7 | `Buttons Colors/Default Content` (Light) is `Text/Inverse`: in dark themes the Primary CTA is white on white (1:1). A regression: the removed `Buttons/Text/Primary` inverted correctly | Fix in Figma: point Default Content (Light) to `Surface/01 White`. Kept exact in `button-primary-content` until then |
| C8 | Destructive CTA label: `button-fate-content` #FF4136 on `button-fate-surface` (red at 10%, tokens 3.7) is 3.0:1 over white and 2.7:1 over `surface-screen-bk` in light themes (was 3.2:1 on the opaque #FFF2F1); a 16 px label needs 4.5:1 (WCAG 1.4.3). Rechecked 14 November 2026 | Always pair with an icon and a clear verb. Fix in Figma: a darker Fate Content, for example #C4271E (4.6:1 over the screen background) (questions list Q-D13) |
| C9 | White text on the accent fills fails wherever the accent is a light colour. `surface-illumination` with white: gold light 2.5:1, gold dark 1.9:1, green dark 1.9:1, lavender dark 3.3:1 (passes only in green light 10.0 and lavender light 6.6). Seen on the current step marker (Steps, Step Card) and the solid gold chip. The three themes are not alike: gold is a light accent, green and lavender are dark ones, and they swap in dark mode | Kept exact. Fix in Figma: add an on-accent content variable per theme. On `Illumination`: Ink in gold light, gold dark, green dark and lavender dark; White in green light and lavender light. On `Longing`: Ink in gold light, gold dark and green light (4.6:1, White is 4.4); White in green dark, lavender light and lavender dark |
| C10 | White label on solid status fills in light themes: success 2.59:1, warning 2.82, error 3.46, info 3.56 (solid chips, badges) | Kept exact. Fix in Figma: Ink content on the solid fills (7.7, 7.1, 5.8, 5.6:1); the fills stay as they are |
| C11 | Count Badge default: `Text/Inverse` on `Surface/05 Smoke` is 2.86:1 in light themes | Kept exact. Fix in Figma: `Surface/06 Ash` fill with `Surface/01 White` text (5.8:1 light, 6.5–7.0 dark) |
| C12 | In `_Primitive Tokens`, the dark aliases of `Others/Gold` are swapped for Dome of the Prophet and Court Fabrics compared with Quranic Illumination, so `alerts-surface-solid-gold` is light gold in gold dark (#F5B13D) but near black in green dark (#0D3F1A) and lavender dark (#260B41). No single content colour works on it across the three dark themes | Kept exact. Fix in Figma: make the three themes alias the same steps. **UX answered (iOS review #15, 14 Nov):** gold alerts in dark swap like the other themes. After the swap, solid gold with `alerts-icons-white` is 1.4:1 in gold dark (1.7:1 green, 1.2:1 lavender today): give solid gold a light content colour in dark (Q-D19) |
| C13 | Dark alert fills differ by theme (info #0C273B in gold, #1F6699 in green and lavender; success #0C3B10 and #198022), so body text in `text-subtle` on Alert and Notice Bar is 3.1–3.8:1 in green dark and lavender dark | Kept exact. Fix in Figma: use the gold-dark values in all three |
| C14 | Glass in dark themes is not verified against Figma. Code keeps the light recipe (white at 62–34%), which turns mid-grey over a dark screen; note-coloured text on it is about 1.2:1 (search placeholder) | Open: read Foundation › Glass BG in the dark modes, then fix code or log the Figma issue |

All other unlinked colour layers (2,047 outside Icons, plus every #000 in Icons → Ink) were linked to Foundation tokens on 2 November 2026; owners must publish each changed library.

## Typography

| # | Issue |
|---|---|
| T1 | Light/Hero and Light/Display/Two resolve to Regular |
| T2 | Three line heights in use: variables 100, text styles 128%, labels 120%. This system uses 1.28 |
| T3 | ~~Hero labelled 48px while its variable is 64~~ Resolved 8 November 2026: `Font-Size/Display/Hero` is now 48 and both Hero styles are 48px |
| T4 | Unused typography variables |
| T5 | Typos: "Line-hight", "Reguler", "Undeline", "Defualt", "Opcaity", "Strok", a layer named "Lato" |
| T6 | No SemiBold, though the brand allows it |

## Library hygiene

| # | Issue |
|---|---|
| L1 | 353 of 359 components have no description |
| L2 | App Assets holds a stale copy of the Foundation tokens |
| L3 | Linear Burn blend mode on the CTA Secondary variants (128 layers in Buttons), carried into many files; CSS has no linear burn |
| L4 | Other blend modes in components |
| L5 | Setup variable collections copied into feature files |
| L6 | Hard-coded colours and text values outside tokens |
| L7 | Notifications components sit on a page named *Playground* |
| L8 | Misc: two broken instances (Location=Madina, Status=1) whose source components were not found |
| L9 | None of the 31 files is deprecated; status changes go to the DL Teams channel |
| L10 | Updates do not reach the files that use them until each owner accepts and publishes. On 9 November 2026 (six files checked): 🏖️ Travel has 85 of 246 library instances behind (CTA ×16, Chips ×10, Request Card Status ×4, Headers, Collapsed Section, Option Cards, Hint, Header Tabs) and 19 components with unpublished edits; 📅 Date & Time 40 of 74 behind (CTA ×7, Chips ×4, Headers, DL Header, Bottom Sheet BG, NoticeBar, Empty Status, Header Tabs) and 17 with unpublished edits; 🧭 Navigation 24 of 276 behind (Chips ×5, Option Cards ×5) and Toolbar with unpublished edits; 🕹️ Buttons: Animated Forms CTA unpublished (B5). 🃏 Cards and 🍟 Chips are current. Those files show the old chip sizes today and CTA versions behind the published one; code already uses the new sizes |
| L11 | ⚙️ Foundation: 421 variables, none with code syntax or a description, so Dev Mode shows Figma names instead of the token names in `tokens.json` |
| L12 | ⚙️ Foundation › Layout still holds `Tags/XS–LR` (24 / 24 / 32 / 32, hidden): the old chip heights, no longer used since chips read `_Chips Setup` in 🍟 Chips. Seven Foundation variables use `ALL_SCOPES` |
| L13 | The type ramp stops at Notes 2 (12 px), but chips XS set 10 px through `_Chips Setup/Font Size`, with no text style behind it (K2) |

## Buttons (5 November 2026)

| # | Issue |
|---|---|
| B1 | `Buttons Colors/Secondary Surface` (Light) and `Ghost Surface` hold alias-with-opacity values (Ivory 70%, White 0%, Smoke 0%). They render in Figma but do not export as plain variables; code uses `#F5F5F5B3` and transparent |
| B2 | All 14 local Buttons variables use `ALL_SCOPES`; they show up in every property picker |
| B3 | Typo: `Buttons Setup/Highet` |
| B4 | Ghost labels are underlined in Light=Off but not in Light=On |
| B5 | Animated Forms CTA has unpublished changes **Closed 15 Nov 2026:** Animated Forms CTA is published. |
| B6 | CTA has no TEXT or INSTANCE_SWAP properties; labels and icons are set by direct override, so a structural change in the master drops them (seen on 5 Nov: `_Button_Master Of Masters` renamed to `…/Default`) |
| B7 | Secondary CTA in Dark mode on dark themes: `Text/Inverse` (#FFFFFF) on `Surface/07 Slate` (#CBCCCD), 1.6:1 |
| B8 | Colours moved to Buttons, heights did not: Foundation › Layout still holds `Buttons/XS–LR` (30 / 38 / 44 / 48 since 9 November; Wide 26 / 38 / 48 / 54), aliased by `Buttons Setup/Highet` |
| B9 | `Buttons Colors` variables have no code syntax; Dev Mode shows Figma names. Code names are in Release notes |
| B10 | CTA `State=Focused` is drawn the same as Default in all three kinds (no ring, stroke or shadow; checked again 9 November). Code draws the focus ring for WCAG 2.4.7: Ink, 2 px, offset 2 px; white on Ink fills and dark glass (DL-19). Until 9 November the ring was `surface-longing`, 1.87:1 on white in gold light. Fix in Figma: draw this ring on the Focused variants |
| B11 | CTA `State=Loading` uses the `arrow-left-02` icon as a placeholder for the loader; code shows a spinner at the icon-only size **Closed 15 Nov 2026:** Loading shows `loading-03`, which matches the coded spinner. |
| B12 | New `Buttons Colors` › Green mode (8 Nov, afternoon): white label on `Alerts/Surface/Solid Success` (named `_Solid Success` until 12 November; #5DB364) is 2.6:1 in light themes and 1.1:1 in dark themes (the fill inverts to #ECFDF3, the label stays white). Green Ghost label is 2.6:1 on white. All fail WCAG 1.4.3 | Use Green only with a 20px+ icon and a short verb, or wait for a darker green. Fix in Figma: Default Surface → a green of at least #2E7D32 (4.5:1 with white), Default Content → `Surface/01 White` |
| B13 | `_Button Trail` Type=Trailing, Style=Fate Ghost is 24px tall, so every CTA Ghost + Fate + Icon=Right is 24px at every size (others: 48/44/38/30) | Code keeps the size height. Fix in Figma: set that Trail variant to hug or 26 like its siblings **Closed 15 Nov 2026:** every CTA variant is now its size’s height (48 / 44 / 38 / 30). |
| B14 | `_Button Trail` Green Default exists only with Light=On and Green Ghost only with Light=Off. Green is not a CTA `Kind`; it is reachable only through the exposed nested Trail instance | Code: `tone="green"` on Primary or Ghost |
| B15 | `_Button_Master Of Masters` holds hidden Price (riyal + amount), " Pay", Nafath and Absher layers with boolean properties, but CTA does not expose them; " Pay" has no text style | Figma only. Ask the DL team before building pay or Nafath buttons |
| B16 | `Buttons Colors` › Dark (Light=On) aliases neutrals that invert with the theme. In dark themes Primary becomes a dark pill (#111315) and Secondary light grey (#CBCCCD) with a white label (B7); on an Ink surface the Ghost label (`Text/Inverse`) is white on white. The set holds on neither dark media nor an Ink surface in dark themes | Kept exact. Fix in Figma: decide what Light=On sits on. For media, alias to values that do not invert; for Ink surfaces, point Ghost Content and Secondary Content (Dark) to `Surface/01 White` |
| B17 | `_Button Trail` Type=Icon Only, Style=Fate, Light=On uses `Glob Whitespace` (50 × 30 at XS) while Light=Off uses `Icon-Side Whitespace` (46 × 30): the same button is 4 wider on dark | Code uses the icon-side value in both **Closed 15 Nov 2026:** Icon Only Fate is 42 × 30 at XS in both Darkmode values. |
| B18 | The cause of B13: `_Button Trail` Type=Trailing, Style=Fate Ghost, Light=Off has no `Highet` binding and hugs its content | Bind `Highet` like its siblings **Closed 15 Nov 2026** with B13. |
| B19 | `Buttons Colors` variables are still All scopes with no code syntax, so they appear in every picker and export without a name | Set scopes (fill, text) and code syntax `var(--button-…)` |

## Media Cards (🃏 Cards, moved from 🏠 Landing Experience V2)

| # | Issue | Workaround |
|---|---|---|
| M1 | Chip and *اختيارات نسك* text was 8 px; 10 px since the 9 November chips update (K2) | Mirrored as is; raise to Notes 2 (12) with chips SM |
| M2 | Prices set in *Saans-TRIAL* (a trial licence) and chips in *Ping AR + LT* | The system uses IBM Plex Sans Arabic for prices |
| M3 | *اختيارات نسك* hidden with 0% opacity on 16 of 18 types instead of turning off *Show Nusuk Selections* | Treat the property as off on those types |
| M4 | Fade overlay and glow (Solid BG = Off) are raw #FFFFFF, not `Surface/01 White` | The system binds them to `surface-01-white` |
| M5 | Linear Burn on spec chips and the arrow button (same as L3) | Not reproduced |
| M6 | In dark themes the spec chips and the arrow button fill (`alerts-surface-default`, `surface-02-ivory`) match the panel (#111315) and disappear | Logged for the DL team; kept exact |

## Navigation (8 November 2026)

| # | Issue | In code |
|---|---|---|
| N1 | Toolbar `Light=On` uses the white `_Status Bar`, which also turns the Dynamic Island white | Mirrored in `StatusBar white`; on a device the island is always black |
| N2 | Landings › Loggedin holds different content in Light=On (avatar, CTA) and Light=Off (wallet, logo only) | Code follows Light=Off; `avatar` adds the avatar |
| N3 | Bottom padding of the Top App Bar differs between the Light versions of Close With Title (18 / 32), Companion MGM (32 / 18) and Nusuk AI (0 / 18) | Code uses the Light=Off values |
| N4 | Direction Sheet › Login Sheet and Session timeout sit at 10% opacity | Treated as deprecated **Closed 15 Nov 2026, evening:** both variants are removed; Direction Sheet has 4 options. |
| N5 | Status names have typos: `Leading & Traling`, `Loggedin`; Pagination `Verticale` | Code accepts both spellings **Partly fixed 15 Nov 2026:** `Leading & Traling` is gone and `Loggedin` is `LoggedIn`; Pagination `Verticale`, `Marketplace Prodcut` and the frame `Buttom Navigation` remain. |
| N6 | Glass BG uses the GLASS effect (refraction 0.4, depth 50, light 0.8 at 150°, frost 2). CSS has no equal | `Glass` draws the same fills, a 2px backdrop blur and an inner rim |
| N7 | Tab Bar shadows differ by variant (6,6 / 0,−6 offsets) | Code uses 0 −6 30 −12 at 5% for all **Closed 15 Nov 2026:** no Tab Bar variant carries a shadow now; code dropped its bar shadow too (only Glass BG keeps its own). |
| N8 | Brand name renders as "نُسك AI" in the toolbar text box (left-to-right) and "AI نسك" in the tab bar nudge (outlined) | Code renders it right-to-left |
| N9 | Toolbar variants and most Top App Bars are fixed height (146 / 84), so since `Buttons/MD` became 44 the row leaves 36 under it instead of 32; Landings › Loggedin (Light=Off) was resized to 80, and Close With Title, Companion MGM and Nusuk AI hug in one Light mode only | Code hugs: 4 + 44 + 32 = 80 (142 with the status bar). Fix in Figma: set Toolbar variants and Top App Bar to hug |
| N10 | `_Nusuk AI` (Input, InputLTR, Beta) is 42 high and not bound to `Buttons/MD`, so it stayed 42 next to 44 controls | Code keeps 42. Fix in Figma: bind its height to `Buttons/MD` if it should match |
| N11 | Three CTA instances in Tab Bar keep old heights through overrides: Actions and Action & Input Primary LR at 54, Habits Secondary MD at 48 | Code follows the CTA (48 / 44). Fix in Figma: reset the height overrides |
| N12 | Six layers in the Navigation file are still bound to the deleted `Buttons/Surface/Reject` and `Buttons/Icons/Reject` (Direction Sheet icons ×4, Tab Bar button fill and icon) | Code uses `button-secondary-*`. Fix in Figma: rebind to `Buttons Colors` **Closed 15 Nov 2026:** a full scan of 🧭 Navigation finds no layer bound to a missing variable. |
| N13 | The Nusuk AI shimmer in the tab bar has no motion spec in the Navigation file (duration, repeats) | Code plays it once over 3 s, then rests (M8: no resting loops, WCAG 2.2.2). Confirm or add the spec in Figma |
| N14 | 🧭 Navigation now publishes two bottom bars: the older Tab Bar (18 variants, with Landing, Journey, Content and Market) and the new Buttom Navigation (`Tab`, `_BottomTab master`). Nothing in the file says which one is the home bar, and their tabs differ (4 + Nusuk AI against 5) | **Resolved in Figma 14 November 2026:** Buttom Navigation was folded into Tab Bar (Active Landing, Travel, Content, Market/Cart +, on `_BottomTab master`), so Tab Bar is the home bar. Code keeps `BottomNav` as the name of those bars and `TabBar` for the action bars (F6) |
| N15 | `Tab` label is 12 Regular bound to variables but has no text style, and the default label uses Ping AR + LT (the English-mode family). The Marketplace bar price is set in **Saans TRIAL**, a trial font, inside a published library; the Nudge text is Ping AR + LT 14 with the size unbound | Code uses the DL family at the same sizes. Replace Saans TRIAL before any handoff: a trial licence does not cover a shipped product **Partly fixed 15 Nov 2026:** the `_Tab` label has a text style in IBM Plex Sans Arabic; two Ping AR + LT and two Saans-TRIAL layers remain in the file. |
| N16 | The الحرمين tab holds an `Animated Icon` (Kaaba, Masjid, Maqam) with no motion spec; a loop in a resting tab bar breaks the no-resting-loops rule (M8) | Code draws the first icon, still |
| N17 | Nudges › Expand=Off is the Expand=On capsule scaled to 60% (189 × 35 inside 279 × 58), so its text is 8.4 px and its action 30 × 18 | Code mirrors it as `expand={false}`; do not ship it. Draw a real collapsed state: icon and action only, 44 high |
| N18 | The الحرمين icon is bound to `Buttons/Icons/Reject`, the deleted variable in N12, so its colour is undefined in the DL | Code uses `icons-longing` with the gold glow until the binding is fixed **Closed 15 Nov 2026:** no missing binding left (N12). |
| N19 | `_BottomTab master` (both sets), `_Nudges Master`, `_Shop CTA` and `_Animated Nudge` are unpublished, while `Tab` and `Nudges` are published: other files can insert a Tab or a Nudge but not the bar that holds them. Two sets share the name `_BottomTab master`. The frame is spelled "Buttom Navigation" and the type "Marketplace Prodcut" | Code names them `BottomNav` and accepts both spellings of the type. Publish a public `Bottom Navigation` set (Screen × Size) |
| N20 | Toolbar: the `Status` property was removed and `Light` renamed `Darkmode` without a change-log entry in the file; MarketPlace Landing and MarketPlace Category were removed. Any screen using those variants shows a missing-variant state after it accepts the update | Old names still render in code for one release (DL-25). Add the change-log entry and a migration note in the Navigation file |
| N21 | Landings greeting ("مرحبا, أحمد") uses a Latin comma and has no rule for long names | Code shows the string it is given. Use the Arabic comma "،" and set a truncation rule |
| N22 | Toolbar has `Darkmode`, but `Tab`, the bottom navigation and Nudges have no dark variant. In the three dark themes the light glass stays white while `text-subtle` turns light grey: tab labels measure 2.2:1 | Code applies the Glass BG Dark=On recipe to the bar in dark themes. The Nudge action is a Primary button, so in dark themes its arrow is white on white (C7). Add Darkmode to `Tab` and `_BottomTab master` **Closed 15 Nov 2026, evening:** `_Tab` and `_BottomTab master` have `Darkmode`; dark tab labels are Text/Inverse. Nudges still have no dark variant. |
| N23 | Toolbar instances in other files that used the old `Type` + `Status` pairs cannot take the library update without changing what they show (12 found so far: Media 11, Inputs 1). The update pass leaves them alone | Re-pick the type by hand, or run the type map in `CHANGES-2026-11-10.md` over the files |

## Cards (8 November 2026)

| # | Issue | In code |
|---|---|---|
| K1 | Member Card / Selection: `Selected=On` shows an empty pill and `Selected=Off` shows the tick | Code shows the tick when selected |
| K2 | Card chips use XS, whose text is 10px (8px until 9 November), still below the 12px minimum | Mirrored as is; SM (12) would fix it at 20 high |
| K3 | Absher badge colour comes from the Dome of the Prophet theme mode (#288A42), not a semantic token | Kept as the hex value |
| K4 | Request Card Status has spelling slips: `Awatining Payment`, `Issueing Permits`, `Passoirt Req.`, `Consl. visit`, `used` | Code keys use the corrected spelling and accept Figma's |
| K5 | Booking-entity logos in Request Cards are images (Qatar, Saudia), not components | Code shows plain circles; pass your own |
| K6 | `_Card Avatar` gained a shadow (−6, 6, blur 30, spread −12, Ink 5%) on 8 Nov, but four Member Card variants (Default Disabled=Off, Actionable Swaped=On, Selection On and Off) override effects to none, so only Disabled=On shows it | Code follows `_Card Avatar` (shadow on). Fix in Figma: reset the effect overrides on those avatars |
| K7 | Request Cards Type=Electric Cart uses the Umrah icon in its tag | Code follows Figma (`umrah`); confirm the intended icon |
| K8 | Media Cards has 19 types; `ADS` is not coded (343 × 364 in the Marketplace pattern canvas, which also records add-to-cart sizes 170 × 248 and 230 × 320 that code does not offer). Type names have spelling slips: `Streem`, `Resturants`, `Activitie` | Code has 18 types. Read and code `ADS` with the Marketplace patterns **15 Nov 2026, evening:** 23 types; ADS coded as `type: 'ad'` with a mandatory ad label (F46); type-name slips remain. |
| K9 | Price Options holds two controls side by side in both variants: an `Add to Cart CTA` and a bare CTA of the same size. In the cards that use it only one shows. The price text (20) has no text style and the riyal sign is a text glyph (U+20C1), which renders only where the font has it | Code shows one control and draws the riyal icon. Remove the extra CTA; use the riyal icon component |
| K10 | Marketplace / Grid and Marketplace / out of stock use the **Hotel** type icon in their tag, and a raw (unbound) background fill | Code uses the marketplace icon and tokens |
| K11 | Add to Cart CTA: `cart` and `arrow` are 58 wide with 8 of trailing padding while the rest hug; status names mix cases (`cart`, `Remove`, `Notify me`) | Code hugs all six and accepts either case |
| K12 | Request Cards lost Type=SIM (12 → 11) with no change-log entry; SIM orders are now drawn in 🛍️ Market › Shippment Tracker | `sim` renders for one more release (DL-25) |
| K13 | Guide has two variants named `Default` and `Variant2`; Quote Widget is unpublished | Not coded differently; name the variants |

## Chips (9 November 2026)

| # | Issue | In code |
|---|---|---|
| CH1 | In 🃏 Cards every chip renders XS (18, text 10) whatever its Size says. On 9 November (late) 52 of 61 are set to XS; nine still say MD (7) or SM (2). `_Chips Setup` is not published with the library (five of its six variables are hidden from publishing) | Code builds them as XS, the size that renders. Fix in Figma: set Size=XS on the last nine |
| CH2 | Request Cards › Hajj › Side Info is fixed at 16 high; the city chip is now 18 and spills 1 above and below | Code lets the row hug the chip, so the Hajj card is 185 (Figma 183). Fix: set Side Info to Hug |
| CH3 | `_Highlight Master Component` › Special is fixed at 16 high around the 18 *اختيارات نسك* chip | **Closed 14 November, night:** the master is gone from 🃏 Cards (F42) |
| CH4 | 🧭 Navigation (MD 20 ×3, LR 24 ×6), 📅 Date & Time (XS 16, MD 20, LR 24 ×4) and 🏖️ Travel (LR 24 ×19, MD 20 ×2) still show the old chips until they accept the Chips update (L10) | Code uses the new sizes, so toolbar, search, day-tab, step-card and ticket chips are 2 to 4 taller than those files show today **Closed 15 Nov 2026:** every file accepted the Chips update in the publish pass. |
| CH5 | `_Chips Setup` names: `Highet` (Height) and `_Chips Master Souce` (Source); `Font Size` is scoped to all properties; no variable has code syntax; five of the six are hidden from publishing | Code reads the values, not the names. Fix the names, scope `Font Size` to font size, and add code syntax before developers bind to it |

## Patterns and templates (9 November 2026)

| # | Issue | In code |
|---|---|---|
| PT1 | Featured Actions in Rawdah Landing holds an unlabelled black pill CTA | Not shown; the four quick actions are the actions |
| PT2 | Guide page dots (Pearl 6 × 6, current Mist 16 × 6, gap 12) differ from the 🧭 Navigation Pagination component (gap 8) | Code follows the Guide; use Pagination elsewhere |
| PT3 | One Hints Widget tone has a 32% inner line instead of 2% | Code uses 2% for every tone |
| PT4 | The Headers CTA (section arrow) uses Linear Burn (same as L3) | Not reproduced |
| PT5 | Quote Widget title has no text style | Not coded yet; will use `body-1-regular` when built |
| PT6 | Media Cards in the patterns keep the selection chip but hide it | Treated as off |
| PT7 | Product Category label layers are all named "مياه زمزم" | Labels are content props |
| PT8 | The Rawdah Landing frame leaves an 82 gap before the tab bar | Code uses 24 above the bar |
| PT9 | Both Rawdah Landing frames invert the render bands (M9S): the product row (band 6) sits third, above the guide and bookings (band 3) and the reciters (band 4) | Templates keep Figma's order as a layout reference and tag each section's `band`; production pages use the band order in DESIGN.md › M9P |

## Components corrected to Figma on 8 November 2026

| Component | What changed in code |
|---|---|
| Avatar | Sizes are now 24 / 42 / 56 / 72 / 100 (were 24–72); Negative is white and Positive Ivory (Negative was red) |
| Chip | Heights 16 / 18 / 20 / 24 with Figma padding and text sizes (were 24 / 32). Superseded on 9 November: 18 / 20 / 24 / 28 |
| Icon | 83 Hugeicons and Nusuk icons exported from Figma; the old stand-in glyphs remain only for names not exported |
| HeaderTabs | `background={false}` is now the glass version with a white active tab |

## Design system page and code (9 November 2026)

| # | Issue | Until fixed |
|---|---|---|
| DS1 | The design system page rebuilds `tokens.css`, the API cards (`api/…`) and `manifest.json` only when someone saves on the page. Releases published by tools since 8 November did not trigger it, so those three are old: button heights 26 / 48 / 54, Hero 64, no `button-green-*` or `shadow-avatar`, 51 of 77 components. The previews are right (the page compiles tokens when it draws them) | Make one save on the page after each release (M13). Until then take values from `tokens.json` and props from `components/index.d.ts`; the coded package carries a current `tokens.css` |
| DS2 | Header Tabs on glass is a 38 pill with 30 tabs (`Buttons/SM`, `Buttons/XS`), so a tab's target is 38 in the top bar, under the 44 allowance | Trade-off Register (M12). Fix in Figma: bind the pill to `Buttons/MD` if tabs should reach 44 |
| DS3 | Selection controls stacked closer than 48 share their tap padding (two radios 12 apart: 45 and 33 high) | Put selection controls in rows at least 48 high (Dropdown Item does) |
| DS4 | TextField `type="otp"` draws the boxes only; it holds no inputs | Mockups and decks only. Native: the system one-time-code field |

## Market (🛍️ Market library, 10 November 2026)

| # | Issue | In code |
|---|---|---|
| MK1 | `_Udhiya Details` and `_Contact Details` (the Udhiya and recipient forms) and Product Size Options are unpublished, so a product page or an Udhiya checkout cannot be assembled from the library alone | Not coded yet. Publish the three, or publish one public set that holds them |
| MK2 | Unbound (raw) fills: Shippment Tracker 63, Animated Gift 39, Product Info 30, `_Shippment Tracker Master` 29, Gifting 24, Product Size Options 20, eSIM Card 18, Order Basic Information 16 | Not coded yet. Bind before the first handoff or dark themes will break |
| MK3 | Text without a text style: Product Size Options 50 runs, Shippment Tracker 10, TrustedByNusuk 4, eSIM Card 4 | — |
| MK4 | Names: "Shippment", "cann't delever", `OutOfStock/Al`, `Product Description/forTesting` (a test variant, published), TrustedByNusuk and Animated Gift variants called `Variant2`, `v2`, `v4`; `_SIM Details/Default` is published although its name marks it private; Product Size Options is used by the product page but unpublished | Fix names before teams build on them: a published name is an API |
| MK5 | Effect styles `New/XS` (Gifting) and `Shadow/LR` (tracker master) are not in the DL tokens | Map to `shadow-xs` and `shadow-05`, or add them to Foundation |
| MK6 | Product Item › Less Available ("تبقي فقط %s منتجات") has no rule for when it shows | DESIGN.md sets one (M9 › Market): live stock only, never on worship products |
| MK7 | TrustedByNusuk has no stated criterion | Same: write it, or it is a disguised ad (M4) |
| MK8 | 17 public sets are not coded | Planned as the next release, after MK1–MK4 |

## Flows read against the template contracts (11 November 2026)

Found while writing the contracts in `templates/contracts/` (DESIGN.md › M9T). Logged, not fixed in the flows. The contracts are drafts (DL-28): each line is a question for the owning team until the contract is approved.

| # | Issue | Rule the contract sets |
|---|---|---|
| TC0 | Fourteen blueprints in ✨ Templates (read from Marketplace) keep product wording in their guide text (product, order, seller) | The contract files are neutral and are the rule; regenerate the blueprint text from them |
| TC1 | Rawdah › "Slot Selected" shows no selected slot; only the action bar changes | `date-slot`: the chosen slot is visible on the slot itself (Time slot card · Selected) |
| TC2 | Umrah Permits › date step: month header reads June 2025, date title 22 June 2026; day tab says Saturday 22, title Sunday 22 | `date-period`: day names and dates agree across header, tabs and title |
| TC3 | Raw `%s` in hint lines and status lines (Umrah, Rawdah, Hajj booking details, Hajj permit card) | No placeholder ships (M6) |
| TC4 | The main action is disabled until a choice is made (Umrah and Rawdah date steps; Marketplace cart, item details, address) | The main action stays enabled and says what is missing on tap (M10) |
| TC5 | Calendar sheet shows red dots under days, and slots carry corner icons, with no stated meaning | Every marker has a stated meaning; colour is never the only signal (M10) |
| TC6 | Umrah Permits › "Visit Missed" shows a Cancelled chip and sits under "Cancel by user" | `booking-details`: Missed is its own state with StatusChip `visit-missed` |
| TC7 | Hajj › booking details: sections change order between Issuing and Issued | `booking-details-package`: a state changes content, never the order of spaces |
| TC8 | Hajj › booking details: a flight booking form and paid cards sit above the refund account and invoices while permits are still being issued | Offers sit below status, people, confirmed parts and money (proposal; band 2 before band 6 is M9S) |
| TC9 | Umrah Permits › booking details: person cards are hand-built frames | Use MemberCard |
| TC10 | Umrah Permits › booking details: the toolbar title changes by state (service name, "booking details", "Umrah permit") | One title: the service name |
| TC11 | Hajj › booking details: the refund account number sits inside an Alert, and cancel uses Alert · Error | Alert is for alerts; the account is a field; cancel is one quiet block with a Fate CTA |
| TC12 | Hajj › booking details: two date formats on one page ("22 Jun 2025", "22 يونيو 2025") | One date format per page (M6) |
| TC13 | Emoji in a status line (Umrah) and in a section title (Hajj) | No emoji as decoration (M8 Icons) |
| TC14 | Names: frames "Compeleted", "Select data sheet", "Hajj_View permit / Field"; the permit card component is named "Hajj Landing Update" | Fix names: a published name is an API |
| TC15 | Rawdah wraps the library Visit Details Master in a local component (Rawdah Visit Details: Midnight, Green Track) | Decide: move the variants into the library component, or record why the wrapper stays |
| TC16 | Umrah Permits › pass sheet: the code carries a "privilege card" label with an info icon and no stated meaning on the sheet | State the meaning one tap away, or remove the label |

## Figma round and Nusuk AI chat (11 November 2026)

A read of the DL library files on 11 November 2026, before the Nusuk AI chat joined the DL. Nothing was edited in Figma.

| # | Issue |
|---|---|
| FR1 | Edits not published yet in 15 files: 🕹️ Buttons (Animated Forms CTA), ⬇️ Dropdown list (Dropdown item, List Screen), 📻 Switches, Checkbox and Radio (all 5 sets), 🃏 Cards (Media Cards, Cards Slider, Leaderboard, Bento Grid, Cards List), 🛍️ Market (8 sets), ⬆️ Modals & Sheets (4), 🛎️ Notifications (7), 👩🏻‍💻 Avatar, ⭐️ Rating & CSAT (9), 🎫 Widgets (5), 💸 Payment (3), 🎥 Media (15), 💬 Chat UI (AI Tab Bar, AI Chat Messages, Booking_Ticket) 🗺️ Map (4) and 🖼️ Visual Assets (Nusuk Visuals, Mosque, Nusuk Illustrations). Code follows the published version until they are published |
| FR2 | Not published at all: 🏖️ Travel › Hotel Offer, 🃏 Cards › Quote Widget, ⭐️ Rating & CSAT › Customer Feedback, 🛎️ Notifications › LiveActivity and LiveActivity/LockScreen/Athkar, and the 3 sets of Nusuk Companion |
| FR3 | Two sets named Nusuk Bot: 💬 Chat UI (2 variants, published) and Nusuk Companion (4 variants, not published). One should be the source |
| FR4 | Superseded on 12 November 2026 (R2): fields are radius 18 (Radius/MD). On 11 November they were 14 (Radius/S); the DL said 12. Select cards and day tabs are still drawn without a radius variable |
| FR5 | Hint has a fifth type, Success, with the `clapping-02` icon (⌨️ Inputs › Hint). Added to the coded Hint. Figma Hint and Info use `information-circle` and Warning uses `spam`; the coded Hint still shows the generic `info` and `alert` icons |
| FR6 | New sets not in the coded DL yet: ⌨️ Inputs › Error Messages Content (23 validation messages), 🛍️ Market › Product Size Options (11), ⭐️ Rating & CSAT › Product Review Card and Total Review Card, 🎥 Media › Live, Reel and Articles sets, 🛎️ Notifications › Dynamic Island and Live Activity sets |
| FR7 | No longer in the libraries (republished 11 November 2026): 🏖️ Travel › Step Card (17 variants, the source of the coded `StepCard`), Hotel Ticket, Room Layout and Places & Events; 💬 Chat UI › Chat Element. The coded StepCard has no Figma source until the set is found or replaced |
| AI1 | **Done 14 Nov (DL team, not published):** 💬 Chat UI's layers bound to variables outside the DL are rebound to ⚙️ Foundation with the same values: Stroke › md → Border/Medium (12), Spacing › padding/xs → Space/XXS (4), Radius › xxl - full → Radius/Full (8), Global Vars › Colors/Neutral/Black → Text/Heading (1). Still open: `Radius › XS` resolves to **34** (Nusuk Bot Messages, the ticket image, 7 corners), and Foundation has no 34 step. Decide XXL 42, XL 22 or a new step |
| AI2 | **Done 14 Nov (DL team, not published):** the 8 corners bound to Effects › Radius Backup/Full (gone from ⚙️ Foundation) are bound to Radius/Full |
| AI3 | The Nusuk Bot set is published, but the chat package says its section is marked "Beta – Do Not Use" (F1). Decide which is true |
| AI4 | **Done:** the Mobile field is `Style=Mobile` (12 Nov) and the passport field `Style=Passport` (renamed by the DL team on 14 Nov from `Pasport`; publish 💬 Chat UI). Code names follow |
| AI5 | Copy and trust: placeholder overrides reset to "العنوان" (chat handoff F27); the flight answer reuses hotel copy (chat F28); an urgency line and a discount that is not real (chat F29, off by default in code with `urgency={false}`); emoji in titles (chat F31). **14 Nov:** the decorative ✈️ left the Booking_Ticket master title (80632:38078), but the Train variant overrides the text and still shows «رحلة من ✈️ مطار جدة إلى 🕋 مكة»; 🙏 and 🕋 are an editorial call (faith content), and «مكة» should read «مكة المكرمة». The copy points wait for the content owner (parked 14 November) |
| AI6 | Saudia, Marriott and Egyptair marks in 🃏 Cards › Logo Icons are image fills, so code ships PNGs; vector marks are needed |
| AI7 | The Nusuk Bot colours stay gold in Makkah and green in Madinah in every theme. The DL has no fixed colour token for them (the primitive collection in ⚙️ Foundation is private), so they stay proposed as `chat-bot-*` |
| AI8 | 💬 Chat UI raw values outside the DL scale (recounted 14 Nov): item spacing 10 (9 layers) and 9 (2), radius 74 (5), opacity 0.3 (15). The 35 unbound white fills are now bound. The 62 input height is still no DL variable |

## Figma round (12 November 2026)

Read on 12 November 2026: ⚙️ Foundation, ⌨️ Inputs, 🧭 Navigation, 🏖️ Travel, 🔦 Tracker and 💬 Chat UI. Every Foundation value (Colors in all three themes, light and dark; Layout; Effects; text and effect styles) matches `tokens.json` 3.6. Nothing was edited in Figma.

| # | Finding | What to do |
|---|---|---|
| R1 | ⚙️ Foundation: seven colours lost their underscore and are now published names: `Alerts/Surface/Solid Info`, `Solid Success`, `Solid Warning`, `Solid Error`, `Solid Default`, `Alerts/Icons/Reject`, `Alerts/Text/Reject`. Values unchanged | Done in the docs and `tokens.json` usage. Code and native names are unchanged (`alerts-surface-solid-*`, `alerts-icons-reject`, `alerts-text-reject`) |
| R2 | **Chat UI part done 12 Nov:** 💬 Chat UI accepted the update (25 field instances now radius 18; Password and IBAN layers restored by hand). ⌨️ Inputs › Input: `Fields` radius 14 → 18 (Radius/MD) in every type; Search and Counter are capsules (Radius/Full); every field carries `Shadow/XS`, whose blur is bound to `Blur/SM` (a blur variable on a shadow radius: the two scales should stay apart). Published | Code follows (`radius-md`, `shadow-xs`, `.pill`). Files that use the field accept the ⌨️ Inputs update: 💬 Chat UI still shows 14 |
| R3 | **Open (a fix was made and reverted on request, 12 Nov):** 🧭 Navigation › Toolbar: new type `Almatar` (light and dark) built on the private `_Almatar Booking`. The name is a partner brand; inside it the Primary XS more button is squeezed to 42 × 12, and the trip-fact dots are `Icons/Black` in light but `Surface/04 Mist` in dark | Code: `type="booking"` (DL-31). In Figma: rename the type to the job (for example `Booking summary`), let the button keep its 30 height, use one dot colour token per mode |
| R4 | Unpublished edits: 🧭 Navigation › Tab Bar; 💬 Chat UI › AI Tab Bar, AI Chat Messages, Booking_Ticket; 🏖️ Travel › Seperator; 🔦 Tracker › Steps (the 12 Nov fixes) | Publishing is a Figma action only a person can take: publish 🧭 Navigation, 💬 Chat UI, 🏖️ Travel and 🔦 Tracker. Code follows the published versions until then |
| R5 | **Done 12 Nov:** property renamed `Selected` (Off / On). Was: 🏖️ Travel › Seperator has a second variant, the selected-ticket notch. Its property is `Property 1` and its values `Default` / `Variant2` | Rename to `Selected: Off / On` before teams build on it: a published name is an API |
| R6 | **Names done 12 Nov:** `OrderShipped`, `OutForDelivery`, `Delivered`. Still open:  `_Stepper Point` has no Next state (Next draws a small dot in the step) | Name the three statuses. Code draws Next as a small `surface-longing` dot |
| R7 | **Done 12 Nov:** second Password variant renamed `Style=Mobile`; Flights Selection reads حجز الطيران with `airplane-01` and its own subtitle; Single Choose options carry real topics. Its filters are still the hotel ones (area, guests, date). Was: 💬 Chat UI › AI Chat Messages: node 80626:36740, coded on 11 November as Flights Selection, is now `Style=Single Choose`; Flights Selection is a new node (80652:10299) and still carries the hotel subtitle and bed icon (F28). Two variants are both `User=Nusuk, Style=Password`. The Single Choose options are placeholder text | Code: `NusukChat.SingleChoose` added; FlightsSelection repointed. In Figma: name the second Password variant, fix the flights subtitle and icon, write the real option titles |
| R8 | 🔦 Tracker › Steps copy breaks the writing guide: «تحهيز الطلب» (typo for تجهيز), «تم إستلام الطلب» (hamzat wasl takes a bare alif: استلام; and «تم» is banned), «تحت المعالجة» (use «قيد المعالجة»), «تم شحن الطلب», «تم التوصيل» | Rewrites proposed on 14 November (parked with the content questions): step labels become stage names («المراجعة»، «التجهيز»، «الشحن»، «التوصيل»، «التسليم»), because a past-tense label also shows on steps that have not happened; the current step's details carry the sentence. Two cancellation states ship the placeholder «وصف المرحلة». Not changed in Figma: copy is the content owner's call |

## Figma round (14 November 2026)

Read on 14 November 2026: every file in the DL folder (31 libraries and 🧩 Templates-Patterns). Foundation variables and text styles match `tokens.json` in all six themes; Foundation gained one effect style. Buttons, Navigation, Inputs, Chips and Cards were read in depth and the code follows them. Library updates were accepted in 17 files (below).

| # | Finding | What to do |
|---|---|---|
| F1 | 🕹️ Buttons › `_Button Trail` has no Darkmode=On variant for Fate Ghost or Green Ghost, and no style at all for Green Secondary although `Buttons Colors` › Green defines its surface (#F0FFF5). CTA, the public set, exposes Kind × Size × State × Icon × Fate only, so Green, on-dark, both icons, price, Apple Pay, Nafath, Absher and glass are reachable only through the nested Trail and the master (B14, B15) | **Code done:** every combination composes from the button tokens (Button card › Every combination). In Figma: add the three missing Trail variants and expose Tone (Default, Green), Background (Light, Dark) and the master booleans on CTA |
| F2 | 🕹️ Buttons Colors changed: Fate Surface (Light) is `Alerts/Surface/Solid Error` at 10% (was `Alerts/Surface/Error`, #FFF2F1); Secondary Surface (Dark) is Slate at 70%. The red label on the new fill is 3.1:1 (was 3.2:1; C8) | **Code done:** `button-fate-surface` #FF41361A, `button-secondary-surface-on-dark` #303336B3 (tokens 3.7). The label still needs 4.5:1: darken Fate Content or use the solid red fill |
| F3 | ⚙️ Foundation › new effect style `Glass/Andriod Blur` (typo for Android): background blur 10 + inner shadow 0 5 10 10, Ink 5% | **Code done:** token `glass-android`. Rename the style `Glass/Android Blur` |
| F4 | ⚙️ Foundation › `Glass BG` and `_Glass BG Master`: the property is `Glass` (On / Off), but Glass=Off still carries the native glass layer and adds the Android blur; buttons use Glass=Off. "Off" reads as "no glass" | Rename to `Material: Native / Fallback` (or `Platform: iOS / Android`). Code: `glass` prop = the fallback |
| F5 | 🃏 Cards › Hints Widget: `Direction3` repeats Horizontal with a second icon slot; `Direction4` is a new logo card whose sample shows an airline logo and a layer named after another airline | **Code done:** `direction="logo"`. Rename to Horizontal Alt / Logo, use neutral sample content; the card names a service the person is booking, never an advert |
| F6 | 🧭 Navigation › `Buttom Navigation` is gone: its screens are now Tab Bar › Active = Landing, Travel, Content, Market/Cart +, on the private `_BottomTab master` and `_Tab`. The Landing bar replaced حسابي with الكل, so the account has no bar destination; Travel uses placeholder-looking icons (الطيران on Palm, الفنادق on store-03) | **Code done:** BottomNav follows the new bars. Decide where the account lives and set real icons for flights and hotels |
| F7 | 🧭 Navigation › `Toolbar - Bottom - iPhone` (5, not published) is built from Apple's iOS kit: Liquid Glass, SF Symbols glyphs and `Labels - Vibrant` variables. `_BottomTab master` also fills its home indicator with the kit's `Labels/Primary` | Keep it as an iOS-native reference (use the system toolbar); don't publish it as a DL component, or rebuild it on DL tokens. Not mirrored in code. **Closed 14 November, night:** the set was removed from 🧭 Navigation. |
| F8 | 🧭 Navigation › new `Haramin Icon` (three stacked glyphs with a layer blur) for the الحرمين tab. Name typo for Haramain | Rename. It plays once per visit, never loops (N16) |
| F9 | 🧭 Navigation › Toolbar: `Primary Pages / Tabs` renamed `Primary Pages / URLs` (buttons 119 wide); new `Primary Pages / Title` (188); `Landings / Search` 204 high | **Code done:** both names work; `with-title` added |
| F10 | ⌨️ Inputs › Input is now 12 types × Status × Filled (72). Status value `Dissabled`, layer `Fileds` and variable `Inputs/Surface/Defualt` are misspelt. Error and Disabled keep the default fill | **Code done:** `multi-select` and `avatar` types; Error and Disabled fills follow Figma. Fix the spellings before developers bind to them |
| F11 | 🃏 Cards › Request Card Status: new `Approved` (مقبول). The status copy still breaks the writing guide: «تم» in ten statuses, «جاري» and «جار» (write «جارٍ»), «بإنتظار» (bare alif: «بانتظار»), «لايحتاج» (needs a space), «تحت المراجعة» (write «قيد المراجعة»); duplicates (Ready for Pick up / Ready For Pickup, Delivered / Order Delivered, Visa Issued / Visa Issued 02); misspelt names (Passoirt, Awatining, Issueing, used) | **Code done:** `approved` added; copy kept as in Figma (R8 precedent). Content owner rewrites; merge the duplicates. Of the 47 statuses, 31 break the guide and 16 meet it (copy review of 14 November, parked) |
| F12 | 🍟 Chips are now built on `_Chips Master Souce` (typo for Source). Every size and colour still matches the `chip-*` tokens | Rename only |
| F13 | Library updates that could not be accepted safely (the override would be lost): Templates-Patterns 34 (Media Cards 22, Toolbar 6), Visual Assets 10, Animation 9, Widgets 7, Payment 5, Media 5, Market 4, Hajj Theme 1. 📱 App Assets holds 4,459 instances: the first 166 were checked (11 updated, 32 skipped) | Accept these in Figma's Libraries panel, which keeps prototype reactions and text-style overrides |
| F14 | Instances whose component is no longer in any published library (they can't update): Media 37, Navigation 36, Notifications 35, Visual Assets 32, Cards 29, Animation 22, Chat UI 14, Market 14, Travel 11, Status Handlers 6, App Assets 75 in the first batch | Swap them to the current component (for example the old Buttom Navigation to Tab Bar) |
| F15 | ✨ Nusuk Brand can't be read through the Figma connector (no permission) | Share the file with the connector's account, or export the brand pages |
| F16 | 📻 Switches (read 14 November): the chosen Checkbox and Radio are now `surface-illumination` (gold) in Figma, was Ink. Gold on white is 2.5:1 and the white tick on gold 2.5:1; the empty checkbox line (`surface-longing`) is 1.9:1 and the empty radio (Mist) 1.6:1. WCAG 1.4.11 asks 3:1 for a control's boundary and state | **Code follows Figma.** Design team: darken the selected fill (Illumination ≥ 3:1 needs about #B07A1C) or add a 3:1 outline; give the empty states a 3:1 line |
| F17 | 📻 Switches › Select Card: the title is 14 and the description 16, the reverse of every other card | **Closed 16 Nov 2026:** Q-D02 answered *keep it*; code follows Figma |
| F18 | 📻 Switches: the Status value is spelt `Defualt` in Switch, Checkbox and Radio | Rename to `Default` |
| F19 | ⬇️ Dropdown list › Dropdown item (read 14 November, later): Selector Radio and Checkbox are a solid check icon in Icons/Longing, not the Radio and Checkbox components; only the chosen state is drawn; Longing on white is 1.9:1 | **Code follows Figma:** the row is the radio or checkbox, the check shows when chosen, an unchosen row keeps an empty 24 slot. Design team: draw the unchosen state and a 3:1 check colour (Q-D04) |
| F20 | 🔦 Tracker › Steps: start-aligned steps with a stage icon, Smoke rings and fading lines; the coded Steps was a centred bar. Labels break the writing guide (تحهيز، تم إستلام، تحت المعالجة، جاري) | **Code done:** Steps rebuilt. Content owner rewrites the labels (Q-D05, as R8) |
| F21 | 🎫 Widgets › Start Journey: three sizes (SM card, XS tiles, LR cards); SM and Start Journey Animated still hold the pre-4-November CTA (`Light=Off`, 68 × 38); LR title is an English placeholder | **Code done:** StartJourney rebuilt with `size`. Design team: swap the CTA, write the title (Q-D06) |
| F22 | 🏖️ Travel › User Group: Active On places seven avatars by hand in a frame wider than the component; caption «%s، و%s مرافقين» needs plural forms | **Code done:** AvatarGroup `preset`, `sizes`, `caption`. Confirm the layout (Q-D07). The caption needs its six plural forms |
| F23 | 🧭 Navigation › Bottom Sheet BG: corners 42 / 54 and Glass/Full, no drop shadow; Direction Sheet sides 26; Support Bottom Sheet overlaps two layers with a −130 gap | **Code done:** sheets radius 42 / 54 and `glass-full`; DirectionSheet 32 / 26 / 48. Confirm (Q-D11) |
| F24 | Sets with unpublished edits (publish status Changed), so products still get the old versions: 41 in 11 files in the morning round, **61 in 14 files when every set was read again at 07:58**: Market 10, Cards 7, Navigation 6, Visual Assets 6, Notifications 6, Widgets 5, Rating & CSAT 5, Travel 4, Buttons 3, Chat UI 3, Tracker 2, Animation 2, Switches 1, Date & Time 1. Inputs, Dropdown and four Switches sets were published in between | Publish in Figma (Q-D09); [DL health](https://claude.ai/artifact/ANTJvsayyQ8md1qK32vAL8) lists every set |
| F25 | 🧭 Navigation › Nudges: the text has no text style; Expand=Off is On scaled to 60% (8.3 px text, a 25 × 18 button) | Bind Regular/Notes/One; draw a real collapsed state (N17, Q-D08) |
| F26 | Fixed-size text boxes shorter than their line (scanned 14 November in every component set): ⬇️ Dropdown › `_Dropdown item list/On` › Subtitle (18 for a 20.5 line, so rows read 61 instead of 64–65); 🧭 Navigation › Tab Bar › `Active=with Price` › «340» (24 px in 25); 🃏 Cards › `_Highlight Master Component` › PH - 5 (16 px in 9, two variants), Hints Widget › Title (16 px in 18, three directions), `_Highlight-Icons` › Streem › Text (12 in 12); 🛍️ Market › `_Product Item Master` and Product Item › title (16 in 18); 🏖️ Travel › Hotel Offer (14 in 16, 18 in 20); ⭐️ Rating › Ratings › Box › PH - 5 (18 in 16); 🛎️ Notifications › Dynamic Island and Live Activity labels (system-size mocks). The line height (1.28) is right; the boxes are wrong (T2 settled) | Set each layer to Auto height (Q-D14). Code keeps 1.28 |
| F27 | Copy found in the scan: 🛍️ Market › Product Item reads «صندوق مياه زمزم» (the glossary says ماء زمزم, singular); 💬 Chat UI › Booking_Ticket › Train reads «مكة» (write «مكة المكرمة») | Content owner fixes the sample copy; code samples use the glossary terms («ماء زمزم» in the pattern samples since 14 November) |
| F28 | No library component uses Hero (48) today, in Light or Regular (Cards, Widgets, Market, Tracker, Travel, Rating, Status Handlers, Notifications, Modals, Navigation and Templates scanned 14 November). Foundation's `Light/Hero` and `Regular/Hero` both bind `Font-Size/Display/Hero` (48) and the weight variables | Hero rule in DESIGN.md › M8 (UX answer to the iOS review: both weights stay) |
| F29 | ⚙️ Foundation › `Light/Hero` and `Light/Display/Two` store IBM Plex Sans Arabic Regular as their font; every other Light style stores IBM Plex Sans Arabic Light. All bind `Font-Weight/Light`, so where that variable can't resolve to a Light face these two draw Regular | Re-pick the font on both styles (Q-D21). Code keeps weight 300 |
| F30 | Copy review of 14 November, **parked the same day** at the DL Manager's request (the Arabic copy tab is off the questions sheet; its history can bring it back): 97 strings, 78 to change. «تم» or «سيتم» in 17 strings; statuses whose name and copy disagree (Ready for Pick up shows «تجهيز الطلب», Delivered shows «تم الشحن», Active permit shows «موعد فعال»); a stored token reversed in 🃏 Cards › Request Cards › Ticket («موعد s%») and an invalid «%S» in Marketplace; the placeholder «وصف المرحلة» in two 🔦 Tracker states; «المدينة المنور» in ✨ Templates; counted captions with one form for every number | **Code done:** StatusChip `order-delivered` reads «تم التوصيل» as in Figma (code showed «تم التوصيل في %s», a raw token). Strings the DL wrote are fixed: the IBAN check («تحقّقنا من الآيبان»), the Rawdah ticket's label («عرض حجز الروضة الشريفة»), «ماء زمزم» and «[اسم الشركة]». The rest waits for the content owner |
| F31 | `tokens.css` ships type as classes only (`.body-1-light` …) and no variable, so a `font:` declaration in component CSS has nothing to read. The chat lane's `nk-chat.css` read `--text-body-1-light` and ten more from a tokens.css older than 3.8: with the DL's own tokens.css those lines lost their type (found 14 November) | **Code done:** 12 proposed tokens `--nkc-type-*` (`chat-type-*`), each equal to its DL class; the chat gallery loads the DL's tokens.css. DL Manager: ship `--type-*` shorthands beside the classes, then the chat lane drops its aliases |
| F32 | 💬 Chat UI › Booking_Ticket uses three components that no published library holds any more: the header Nusuk Bot and its `_Eyes` on all four tickets, and the City Logo inside the Logos Group (🃏 Cards' Logos Group now nests City Logo `70306:7355`). They draw from a cached copy and can't update. Its private master is named `_Booking_Ticket Matser` (read 14 November) | **Partly fixed in Figma (15 November, chat team's round):** the header Nusuk Bot, `_Eyes` and the City Logo are library instances again. Still open: rename the master `_Booking_Ticket Master` |

## After the library publish (14 November 2026, night)

Every file in the DL folder read again after the DL Manager published the libraries and accepted their updates: no instance anywhere is behind its library. Foundation: values changed only in modes the coded DL does not use and in dark values of three primitive groups that no Colors variable reads, so every token still matches, light and dark. Links: [🔦 Tracker](https://www.figma.com/design/nj7L8ks27djv1LmxZYFTM8/?node-id=2402-18252), [‼️ Status Handlers](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o/?node-id=68392-32017), [🎨 Icons](https://www.figma.com/design/DXi3uVvGMTEdaM7vb2x6Gg), [🎥 Media](https://www.figma.com/design/H7XuGETBwnvlKavVamZXWt), [🃏 Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl), [🧭 Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw), [🏖️ Travel](https://www.figma.com/design/ozi4A2gUbVXbzbUJ3MF4uU).

| # | Finding | What to do |
|---|---|---|
| F33 | 🔦 Tracker › Vertical Stepper Mobile: State=Current hides the whole rail (no point, no lines), so the current card is 32 wider than the others and the rail breaks above and below it | **Code follows Figma.** Show the rail with a current point (see F37) |
| F34 | 🔦 Tracker › Vertical Stepper Mobile › Step: Start keeps the line above its point and hides the one below; Last hides the line above (still in the flow), keeps the one below and adds 18 above, so its point sits 40 down instead of 22. Stacked Start → Middle → Last the rail has gaps; stacked Last → Middle → Start it joins | **Code follows the names:** first item Start, final item Last, as in Figma; `step` picks the variant. Fix: swap the two lines of Start and Last and drop Last's extra 18 |
| F35 | 🔦 Tracker › step card: effect style `New/XS` (drop shadow 0 1 2, Ink at 3%) comes from outside Foundation; Foundation's Shadow/XS is 0 1 2 −1, #1A1C1F at 4% | **Code uses the New/XS values** on the card only. Rebind to Shadow/XS, or add the style to Foundation |
| F36 | 🔦 Tracker › Step=Last: the extra 18 above the rail is bound to `Space/MD` of an older Layout collection (18 on phones); Foundation's Space/MD is 20 | **Code uses 18** (`space-nr`). Rebind to Foundation |
| F37 | 🔦 Tracker › State=Next uses `_Stepper Point` Step=Current (the 10 dot of `_Ongoing Master`) resized to 20; the instance has no halo layer, so nothing breathes. `_Stepper Point` › Done shows the check and the number together in the master (the number is off in every instance) | **Code:** Next is the 10 `icons-longing` dot, still. Name the states so Current carries the ongoing point |
| F38 | 🔦 Tracker › Steps: the line gradients start from raw clear colours (#FFFFFF00, #07080800); the Breathing Effect master's gradients are raw (bound only on the Tracker instance) and its 5% noise layer has no token | **Code uses tokens**; the glow breathes once for 4 s, then rests (DL-17); the noise is not drawn |
| F39 | ‼️ Status Handlers › Alerts: Primary is the neutral Default palette (it was gold in code); the message is Light/Notes/One in Text/Heading; Below Buttons are Primary SM + Ghost SM; Close is a 16 cancel-01 | **Code done:** Alert rebuilt (`primary`, `secondary`, `icon`, `onClose`) |
| F40 | 🎨 Icons: eight variants wrapped a nested instance of a Hugeicons Pro – V.2 component whose master uses Hugeicons' `Dark` style, so Manage libraries kept listing Hugeicons Pro and the swap to Foundation found no match: message-incoming-01 (Duotone, Rounded); pointing-left-01, pointing-left-02, pointing-right-01 (Stroke and Solid, Standard); pointing-right-02 (Solid, Standard) | **Fixed in Figma** that night: the layers are drawn in the file, coloured Icons/Black, shapes unchanged; a Change Log section is on the Icons page. Publish 🎨 Icons, accept the update where these icons are used, remove Hugeicons Pro from Manage libraries. 15 November: the file's last styles from outside Foundation are detached too (`Text md/Regular` on the «story» label, from a library the file cannot reach; the `Grid` layout-grid style on patio); no layer uses `Dark` |
| F41 | 🎥 Media › `Sound Player` (Full, Mini, SpeedActive) is gone; the player is now a frame inside two new screen components, `Sound Player Screen / Quran` and `/ Others` (edits not published) | SoundPlayer stays as the last published version; rebuild it to the new player once the screens are published |
| F42 | 🃏 Cards › Media Cards: `Marketplace / Grid` is now `Marketplace`; `Museum` is new (Ticket glyph, two Default MD chips, rating, «ابتداءً من» price, Secondary XS icon button); `_Highlight Master Component` is gone (CH3 closed); the card is `_Media-Card` (Group × Solid BK) with `_Highlight-Icons` (21, Out of stock added) | MediaCard: Museum to code; meanwhile `kind: 'ticket'` with `tags`, `rating` and the price |
| F43 | 🧭 Navigation › `Toolbar - Bottom - iPhone` is removed (F7 closed). 🏖️ Travel › `Hotel Offer` is renamed `Hotel` but not published, so other files and the chat lane still see Hotel Offer | Publish 🏖️ Travel; the chat lane's names follow then |
| F44 | Paint styles from outside Foundation still in use: `Cards BG/White` (two different source styles) in Templates-Patterns, Chat UI, Media, Market, Travel, Modals, Animation, Widgets, Visual Assets and App Assets; `Avatar/Abdullah` (Navigation, Dropdown, Status Handlers, Rating, Media, App Assets); `Bottom Bar Gradient Fill` (Navigation, Status Handlers, Map, Templates, App Assets); `Grayscale/Grayscale 100` and `Neutral/900` (Travel, Media, App Assets); App Assets also `Primary`, `desciption`, `Labels/Light/Secondary`, `System Colors/…`, `unchecked`, `icon/black`, `google play`, `White`, `Perfume Dark` | Rebind to Foundation variables (App Assets mock-ups may keep theirs) |
| F45 | **Mostly closed 15 Nov 2026 (publish pass):** every DL library is published and shows No changes; every file has accepted its updates. Left: assets Figma lists as invalid and will not publish (🛎️ Notifications › LiveActivity ×2, 🃏 Cards › Quote Widget); 🎨 Icons keeps its unpublished sets hidden; Nusuk Companion, 📱 App Assets, 🕋 Hajj Theme and Templates & Patterns are not published as libraries | Fix the invalid assets in their files, or decide whether Companion, App Assets and Hajj Theme should be libraries; see `library-dependencies.json` |

## Figma round (15 November 2026, evening)

The DL Manager updated 🧭 Navigation, 📻 Selections & Switches, ⬇️ Dropdown list, 🎹 Tabs, 🍟 Chips, 🃏 Cards, 🕹️ Buttons, 🏖️ Travel and 📅 Date & Time. Every set, variant property, publish status and local variable was read, and the components that changed or had drifted were measured against code.

| # | Finding | What to do |
|---|---|---|
| F46 | 🃏 Cards › Media Cards › `ADS` is a photo with only the «اختيارات نسك» chip. That chip is the editorial-picks label (Attraction, Activity), so a paid placement would read as Nusuk's own recommendation (M4: no disguised ads) | Code: `MediaCard type="ad"` always shows «إعلان» (and `sponsor`). Design: give ADS an ad label and drop the picks chip |
| F47 | Unpublished edits on 15 Nov 2026, evening: 🧭 Navigation (Toolbar with the new Full Search type, Tab Bar with Inner Pages, Direction Sheet, Support Bottom Sheet, Nudges) and 🏖️ Travel (QR Code Status, QR Code, Ticket Master, Ticket Master Empty State, From To / Destination and Duration, Place Details, Description Master). Code already follows them | Publish 🧭 Navigation and 🏖️ Travel, then accept the updates in the files that use them |
| F48 | 🎹 Tabs › Header Tabs: the chosen tab is a white pill on the track; code drew it Ink with white text | **Fixed in code 15 Nov 2026** |
| F49 | 📅 Date & Time: Day Tab Selection, Time slot card, Pray Card and Information had drifted from code (no corner icons, availability bar, ticket notches, markers, unit; other fills) | **Fixed in code 15 Nov 2026** from the published file |
| F50 | 🃏 Cards › Option Cards: `LR Icon` now names the flag tile without an action; in code `lr-icon` used to mean LR Icon with Action | Code follows Figma; use `lr-icon-with-action` for the old look (migration `2026-11-15-evening-round.json`) |
| F51 | Still open after this round: 📻 `Defualt` and `State5` (Q-D03); ⬇️ List Screen radius 14 / 18 and the fixed Subtitle box (Q-D10, Q-D14); 🕹️ CTA Focused has no ring (B10), Green is still only on `_Button Trail` (B14) and its white label is 2.6:1 (B12); 🧭 `_Nusuk AI` is 42 high (N10), Nudges Expand=Off is the scaled capsule (N17, Q-D08), the greeting keeps a Latin comma (N21), the Light=On status bar turns the Dynamic Island white (N1) | See each issue |


## Figma round (16 November 2026: bottom bar, inputs, select card)

Read in [🧭 Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw), [⌨️ Inputs](https://www.figma.com/design/DATayAnynnSQqdJQLAi7DR) and [📻 Selections & Switches](https://www.figma.com/design/zhcTb4a0XbF3YeYF9XI6zw).

| # | Issue | Status |
|---|---|---|
| F47 | 🧭 Navigation's edits of 15 Nov are now published | **Closed for Navigation 16 Nov 2026.** 🏖️ Travel not re-read in this round; still open there |
| F52 | ⌨️ Inputs › Error Messages Content (27 types) is not published, and no screen can insert it yet | Code uses Hint `type="error"`; publish the set, then the message types can be documented one by one |
| F53 | 📻 Select Card Active and Disabled use an OS-style shadow (−2 / 0 / 2 at 5%) with no effect style or token | Code writes the values; add an effect style (for example `shadow-os`) in ⚙️ Foundation |
| F54 | ⌨️ Inputs › File Uploader values `Defualt` and `Dissabled` are misspelt (same family as Q-D03) | Code accepts both spellings; rename in Figma |
| F55 | ⌨️ Inputs › `_Input_Master` has Optional, Partner and a password strength meter; TextField does not draw them yet | Open: next Inputs pass |

## Figma round (16 November 2026, evening: CSAT and NPS)

Read in [⭐️ Rating & CSAT](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl).

| # | Issue | Status |
|---|---|---|
| F56 | Customer Feedback and NPS Survey: the step chip reads «[Total #] من [Current #]», so it would say «3 من 1» | Code writes «1 من 3» (current من total); swap the tokens in Figma |
| F57 | Customer Feedback_Mobile › `Satisfied` shows the Very Satisfied face picked and «راضي تمامًا»; it is a copy of `Very Satisfied` except for the button | Code picks by value; redraw Satisfied with the Satisfied face and «راضٍ» |
| F58 | The questions are English placeholders inside an Arabic sheet («Are you satisfied with the provided service?»; the NPS line also has a grammar slip, «How likely are you would recommend»). The text area label is «العنوان» (Title), left from the input master | Code defaults: «هل أنت راضٍ عن الخدمة؟»، «ما مدى احتمال أن توصي بنسك لصديق أو قريب أو زميل؟»، «ملاحظاتك»; confirm with content (Q-D27) |
| F59 | The Recommendation row runs 1–10. Standard NPS is 0–10 (0–6 detractors, 7–8 passives, 9–10 promoters); a 1–10 score is not comparable with any NPS benchmark | Code follows Figma by default and offers `from={0}`; decide (Q-D25) |
| F60 | Customer Feedback Emojis › Very Satisfied fill is a raw #1C664B, not bound to `Quran/Emerald` | Code uses `quran-emerald`; bind in Figma |
| F61 | Level names «غير راضي تمامًا»، «غير راضي»، «راضي»، «راضي تمامًا» break the indefinite منقوص rule | Code writes «غير راضٍ تمامًا»، «غير راضٍ»، «راضٍ»، «راضٍ تمامًا»; fix in Figma |
| F62 | «NPS Survey» holds no recommendation question: it is a CSAT question with a reasons list and comments, and its reasons are Rawdah-specific in a library component | Rename (for example "CSAT Reasons") and make the reasons a slot; code takes `reasons` |
| F63 | Customer Feedback has six booleans, but only Emoji is bound to a layer; Product Satisfaction, Effort Satisfaction, Recomendation, Text Area and Icon change nothing. There is no effort (CES) question drawn | Code maps them to `csat`, `nps`, `textArea`, `icon`, `emoji`; bind them in Figma and draw CES or remove the property |
| F64 | NPS block radius 8 next to the CSAT block's 14; neither block has a fill or line, and the NPS row has no picked state | Code uses 14 for both and Ink for the picked number (Q-D26) |
| F65 | Customer Feedback is unpublished (Smiles is new and published) | Publish Customer Feedback |

## Glass BG and the brand guidelines (17 November 2026)

Read in [⚙️ Foundation › Glass BG](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo?node-id=65346-1296) and every Glass BG instance in 🧭 Navigation, 🎹 Tabs, 🃏 Cards, 🕹️ Buttons, 🏠 Landing Experience V2 and 🔎 Menu & Search; brand guidelines Ver 1.0, edition of November 2026.

| # | Issue | Status |
|---|---|---|
| F66 | Three Glass BG builds coexist: Foundation's Mode × Dark × Glass, the older Current × Navigation × Dark set in 🃏 Cards (Option Card_Master, Categories, Services Box, Add to Cart) and the Navigation tab, and a `Primary Action` copy in Toolbar Profile and URLs | Code draws every one from the new set (cards as `card`); swap the old instances in Figma |
| F67 | Every toolbar control overrides the Glass Effect fill with the same sheen (white 50% → clear) and hides the Default Fill, by hand, instance by instance | Code names it `control`; add it as a Glass BG mode or a fill style so it cannot drift |
| F68 | Glass BG Highlighted and Active have no user in any DL file | Code builds them (GlassBG); say where they apply, or remove them |
| F69 | Figma's GLASS refraction (depth 30), dispersion and specular light have no CSS or Compose equivalent; the linear-burn and linear-dodge rims have no CSS blend for box-shadow | Web: frost, normal-blend rims and a raised Default Fill set against Figma's render. iOS 26: the system Liquid Glass. Android: Glass=Off, exact |
| F70 | `Glass/Full` carries a GLASS effect (frost 2) on opaque white cards, where it draws nothing | Code ships the shadows only; drop the GLASS from the style, or record why it stays |
| F71 | 🃏 Cards › `_Master Card` keeps a stale `Shadow/XS` (−6 6 30 −12, 5%); Foundation's Shadow/XS is 0 1 2 −1 4% | Relink the effect style in Cards |
| F72 | Logo icons use a `Glass/UP` effect style that Foundation does not have (it has `Shadow/UP`) | Restore or rename the style in Foundation |
| F73 | Figma blur values are twice CSS blur; the DL used the Figma radius in CSS (glass 2 px, Android fallback 10 px) | **Fixed in code 17 Nov:** frost 3 px, fallback 5 px, `Glass/Full` 1 px; `blur-*` tokens keep the Figma radius and say so |
| F74 | On Glass=Off the toolbar controls would draw only a blur and an inner shadow: their Default Fill is hidden and their sheen lives on the Glass Effect, which Glass=Off hides | Code shows the Glass=Off Default Fill (white 20% → 70%) on Android controls; confirm with design (Q-D29) |
| F75 | 🔎 Menu & Search prototype drew the service icons and support tiles with a see-through glass that left a white halo; Figma's Menu Icon Button content is a flat Ivory 100% → 10% gradient and the tiles are white + `Glass/Full` | **Fixed 17 Nov** in the prototype and in CategoryTile |
| F53 (update) | Foundation already has `Shadows / Type=OS` (inside Glass BG; token `shadow-os` since 17 Nov). Select Card uses Ink instead of Graphite and two of its three shadows | Use the OS shadows instance in Select Card |
| BR1 | Brand guidelines: brandmark at least 25 px wide on screen. The Landings toolbar logo is 24 × 24 | Confirm whether the product brandmark follows the rule (Q-D30) |
| BR2 | Brand guidelines: never place the logo inside a box; the brandmark is shown in rounded tiles for the app icon. The Landings toolbar puts the brandmark in a glass circle | Confirm the glass circle counts as the tile form (Q-D30) |
| BR3 | Brand guidelines Scenario 6 sets the data palette (white + the six secondaries, 7% each); the DL has no chart component or chart colour tokens | Charts take the `brand-*` secondaries in the scenario's order; check contrast per pair |

## Figma round (17 November 2026, afternoon: Status Handlers and Rating & CSAT)

Read in [‼️ Status Handlers](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o) and [⭐️ Rating & CSAT](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl).

| # | Issue | Status |
|---|---|---|
| F76 | Fate (destructive) on actions that remove nothing: Bottom Sheet › Error draws its main button Secondary + Fate, and General Bottom Sheet uses it for Download Incomplete «حاول مرة أخرى», Payment Failed «ادفع بطريقة أخرى», Payment session expired «حجز جديد», Location «تفعيل الوصول للموقع» and Location 2nd time «انتقل إلى الإعدادات». The Button card keeps Fate for actions that remove or cancel | Code: `fate` is off by default; the templates use it for Delete and the two cancellations only. Fix in Figma: Primary on those five (Q-D33) |
| F77 | Location and Location 2nd time ask for a permission with the Error status (red circle and glyph), where calendar access and Enable Notification use Brand | Code templates use Brand. Fix in Figma (Q-D33) |
| F78 | Copy against the house rules: «لديك تعديلات لم يتم حفظها هل ترغب في تجاهلها؟» (تم, no full stop), «وسيتم استرداد المبلغ إلى محفظتك بشكل فور…» (سيتم), «نُسك» in the Location settings path, «اليوم، 08:00 مساءا.» (مساءً), «لديك طلب صداقة جديدة» (طلب is masculine: جديد). Ratings › Box shows «%s تقييم» beside a separate number, so it reads «%s تقييم 234» | Code writes «لم تُحفظ.», «وسيُعاد المبلغ إلى محفظتك فورًا», «نسك», and one plural-aware string («234 تقييمًا»). Fix the strings in Figma |
| F79 | Bottom Sheet › Success (like Default, Brand and Warning) draws `alert-01`, a warning triangle | Code shows `checkmark-circle-02` for Success; fix in Figma |
| F80 | `_Star` carries a progressive layer blur (radius 4) on all four states; CSS and Compose have no progressive blur, and a soft star reads as disabled | Code draws the star sharp; remove the blur, or say what it is for |
| F81 | The Customer Feedback Bottom Sheet's star input is five 24 targets that touch; the DL floor is 48 (M10) | Code gives each star a 48 target, so the stars sit 24 apart (Q-D35) |
| F82 | Product Review Card sample: «طلبت مياه زمزم عن طريق نُسك…» and the date «22 Jun 2025» in an Arabic card | Code samples use «ماء زمزم», «نسك» and «22 يونيو 2025» |
| F83 | Customer Feedback Bottom Sheet: «ما مدى رضاك على [اسم الخدمة]؟» (رضي عن), the text area labelled «العنوان» (as F58) and placed above the question | Code: «ما مدى رضاك عن …؟», «ملاحظاتك», the question first (Q-D35) |
| F84 | Force Update offers two ways out («ذكّرني لاحقًا» and «إغلاق») and shows both store badges | A forced update has no way out and an optional one has one; show the badge for the platform only. Code: `template="update"` has one Ghost, `force` hides it (Q-D34) |
| F85 | Unpublished changes in General Bottom Sheet, NPS Survey, NPS Survey Master, Customer Feedback_Mobile and Customer Feedback Bottom Sheet; Customer Feedback is still unpublished (F65) | Publish them; the private masters (`_General_Bottom_Sheet`, `_Alert`, `_NoticeBar Master`, `_Empty Status Master`, `_Reason Selection Master`, `_Star`) stay private |
| F86 | Status Handlers draws Shadow/XS as −6 6 30 −12 and Shadow/SM as −6 9 30 −9 (Ink 5%), the stale styles of F71; Foundation's are 0 1 2 −1 4% and −6 6 12 −6 5% | Code copies what is drawn (notice bar, list cards, sheets, review cards); relink the effect styles |
| F87 | Two General Bottom Sheet types start in lower case («calendar access», «calendar 2nd time»); Session Timeout and Complete Profile were removed without a note of what replaces them | Name them «Calendar access», «Calendar 2nd time»; say what replaces the two (Q-D34) |

## Golf Carts flow read against the template contracts (17 November 2026)

Read in [🚙 Golf Carts](https://www.figma.com/design/s0G2Gga52Tz5GcZayR3jd9/🚙-Golf-Carts?node-id=86028-13834) — the Golf Carts Flow, Service Details and Entry Points sections. Continues *Flows read against the template contracts (11 November 2026)*; logged, not fixed in the flow. Requests list (`requests-list`), the date-slot step, the booking page and Confirm and pay's own content all read clean against their contracts; five findings below.

| # | Issue | Rule the contract sets |
|---|---|---|
| TC17 | Golf Carts › Service Details (`86028:13951`) is a single item's info page — gallery, description, options, action — sitting directly ahead of Select Date & Time (`86028:13935`); the exact anatomy of `item-details` | `item-details.notFor` excludes "a booking with a date, a slot or a permit"; either widen it to cover a date/slot service's info page, or give that page a contract of its own |
| TC18 | Golf Carts › Service Details and Select Date & Time both carry a pickup-zone chip picker with no DL component. Same shape as Marketplace's size/colour chips (MK1, MK2: Product Size Options, unpublished, 20 unbound fills) and Market's unpublished `Select Location/widget` — a third, independent service now needs it | The repeat across three services is the justification DL-5 asks for; propose one named, library-homed option-chip component instead of a fourth local build |
| TC19 | Golf Carts › Confirm and pay (`86028:13882`) reuses Market's `Shippment (2)` and `Shipping Details` frames, with a hidden `Location` sub-frame, to hold the pickup zone and time — not a shipped parcel | `payment`: nothing else on the page; borrowed shipping copy also mistranslates and misreads to a screen reader |
| TC20 | Golf Carts › the pass is a local `_GolfCart Ticket` component (booking details `86028:13911`; a standalone Ticket/QR frame reused across Passenger and Passengers variants), not `QRCodeStatus`, and shows a remaining-uses count ("used 1 of 5") | `pass-sheet.states` has four states and none of them is multi-use; a reusable pass needs its own state, not a local workaround |
| TC21 | Golf Carts › Service Details shows a Contact Details block (phone, email) inline, part of a hidden Shared Facilities / Working Hours / F&amp;Qs / Contact Details master — none of these are spaces in `item-details.spaces` | Either document a venue-info space family on `item-details` for location-based services, or route to `service-support`'s `contact` space instead of duplicating it |

## Figma round (17 November 2026, 15:30: 💬 Chat UI)

Read in [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252): every variant and master, with its size and Body padding. Logged, not fixed in Figma.

| # | Issue | What to do |
|---|---|---|
| F88 | `_Chat Container` (`80453:2664`) still has Body 20 / 18 / 20 / 18. 16 variants override the bottom to 26 and 8 keep 20 (Voice ×2, the Days and Slots answers, Passport Attach, Location Guide, Hotel Choose, Flights Selection). Overrides that disagree with their master drift at the next edit | If 26 is the rule, set it on the master and reset the overrides; if the 8 are deliberate, say why (Q-D38). Code follows each variant as drawn |
| F89 | Style=Password (`80607:16432`) lists three criteria (8 characters, one lowercase, one uppercase); the chat checks five (adds a digit and a symbol without spaces) | One policy for design and code; the content owner decides (Q-D39) |
| F90 | The password field label is «كلمة المُرور», with a damma | «كلمة المرور», as everywhere else in the DL and the chat |
