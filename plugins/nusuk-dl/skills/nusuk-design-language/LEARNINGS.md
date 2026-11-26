# Learnings: how the Nusuk DL is kept true

What ten days of building and maintaining the DL taught (2–10 November 2026). Read this before changing the DL, reading the Figma library, or releasing. Rules for designing with the DL are in `DESIGN.md`; this file is about maintaining it.

## 1 · Standing rules from the DL Advisor

1. **Figma is the source of truth.** Code and documents copy Figma exactly. A defect in Figma is copied and logged in `reference/known-issues.md`, never silently "fixed" in code (DL-01).
2. **One release, every output.** Any DL change updates, in the same release: DESIGN.md (design system, package, project), this skill, the guide, component cards, release notes, known issues, the inventory, a migration file and a native change sheet. A change that reaches only some of them is not released.
3. **Never edit the library without a go-ahead.** Only the DL Manager and the DL Advisor change the DL. Publishing a Figma library is done by a person: the plugin API cannot publish.
4. **English by default.** Arabic copy only where the design needs it or when asked.
5. **Critiques end with three parts:** "Here's what's strong", "Here's what's weak or missing", "Here's how I'd sharpen it". Evidence before opinion; challenge the assumption, not the person.
6. **Deliver things people can use:** tokens, tables, files, working previews; not directions.

## 2 · Reading the Figma library

- Re-read before every release. Tonight's file is not this morning's: Buttons, Navigation, Cards and Chips each changed more than once in a day.
- Read **bindings, not pixels**. A "0 deviations" sweep that compares Figma against itself proves nothing. The 10 November button change was invisible in sizes and obvious in which variable each padding was bound to (`Icon-Side Whitespace` against `Glob Whitespace`).
- For every set record: properties and options, variant sizes, publish status, nested components, text styles, bound variables, unbound fills, fonts. Unbound fills and text without a style are the first things that break in dark themes.
- Check the change log page, then do not trust it: three structural changes on 10 November (Toolbar types, SIM removed, a new file) had no entry.
- Tool facts: run Figma script calls one at a time, never in parallel. The plugin API reports every file's name as "Document": do not log that as a defect. Screenshot links cannot be downloaded from the workspace shell; ask for the image inline. Icons can be exported as SVG text from an instance.
- Library file keys are in `reference/library.md`.

## 3 · Accepting library updates in other files

Script: `scripts/figma-accept-updates.js` (resumable; set `START`). Count first with `scripts/figma-count-behind.js`.

- For each library instance that is behind: import the latest component, **swap a clone first**, compare text, properties and overrides, re-apply the overrides that a swap drops, and apply to the real instance only if nothing is lost. Otherwise leave it and list why.
- Typical reasons to leave one alone: the variant model changed (Toolbar lost `Status`), a property was renamed, or an override type the script will not guess (text style, variable modes, aspect ratio).
- When a set's properties change, write the old-to-new map in the release (see `reference/CHANGES-2026-11-10.md`) so instances can be re-picked or remapped.
- 10 November result: 237 instances updated and 68 left alone across nine files.
- 23 November result (🚙 Golf Carts): 47 of 53 behind instances swapped. Left alone and listed for the file owner: instances whose main component dropped properties (Visit Details Master List and Tabs) and nested Toolbars with sizing overrides. A flow the Figma file added after the brief (the discount) is built as drawn and logged against the scope as a design question.

## 4 · The release audit

Every release renders every preview and measures it; the numbers go in the release notes (DL-22).

| Check | How | 10 November |
|---|---|---|
| Text contrast | Every text run, six themes, against its real background | 88.0–96.9% pass; failures are token values in Figma |
| Targets | Hit area of every control | 356 controls, none under 24; 48 is the rule, 44 in the top bar |
| Names | The browser's accessibility tree, not a heuristic | 366 elements, none unnamed |
| Pixels | Before and after, four settings | 262 of 292 identical; every change explained |

- A heuristic that says "unnamed" is often wrong (a label wrapper names its checkbox). Confirm in the accessibility tree before fixing.
- A fix that moves a pixel it did not mean to is not shipped.
- A stylesheet variable that the tokens file does not define fails the release.

## 5 · Mistakes made, so they are not repeated

| Mistake | What it cost | Rule now |
|---|---|---|
| Told the Advisor "no change" in Buttons after a sweep that tested Figma against itself | A wrong report, corrected an hour later | Diff against the last DL, and read bindings |
| Hand-edited a generated stylesheet | A token used in code but missing from `tokens.json` | Generated files are generated; the release checks it |
| Reused known-issue numbers | Two issues under one id | Check the last id before adding |
| Logged the API's "Document" file name as a Figma defect | A false issue, published for 20 minutes | Verify a finding against a second source before it is written down |
| Let DESIGN.md stay at one version through three releases | Nobody could tell copies apart | The release that changes it bumps it |
| Assumed "Left" in a Figma variant meant leading | Icons on the wrong side in Arabic | Compare a render with a Figma screenshot for anything directional |
| Shipped a skill zip with 217 files (one per card, chat card and migration) | claude.ai refused the upload: at most 200 files | The release joins the cards, chat cards and migrations into one file each and fails above 200 (17 Nov 2026) |
| Offered every DL file as its own download | A long page and no clear choice | Three packages (developers, designers, everything) on Google Drive and GitHub; single files are not listed (17 Nov 2026) |
| Edited the chat's manifest and cards by hand | `tools/build-dl-package.js` would have put the old text back | Change the registry in `nk-chat.js`: the cards and `manifest.proposed.json` are built from it (NusukChat 2.8.4, 17 Nov 2026) |
| Synced ByMoha/NusukDL with no marketplace manifest | claude.ai could not sync it as the organization's plugin | The release writes `.claude-plugin/marketplace.json` and `plugins/nusuk-dl`, and raises the plugin's version every time (17 Nov 2026) |
| Gave change-log entries of one day the same anchor (the colon in "15:30" cut the link) | A link to one entry opened another | Anchors keep the time; the release fails on a duplicate (17 Nov 2026) |
| Shipped the plugin with the DL skill alone | Members had no visual-system artworks and no content skills | The plugin carries the seven Nusuk skills; the DL skill also carries the content guide and the voice rules (17 Nov 2026) |
| Left single-file downloads on the design system tab after the Downloads tab moved to three packages | Two download stories in one guide | Every tab offers the same three packages: everything, developers, designers (17 Nov 2026) |
| "Improved" Figma to meet M4, M6 and the scope (removed discounts, unselected the default, reworded toasts, a new ticket) | The whole Golf Carts draft rejected | Keep Figma and ask (GC-R2) (17 Nov 2026) |
| Invented a cost sheet, a pass sheet and hint lines | Rejected as "creative" | One stage per Figma frame, nothing added (GC-R1) |
| Used the content-card padding (26) on Option Cards | Rows 78 high, not 60 | Option Card rows are 18 all round (GC-R15) |
| Solid toolbar, no Header Effect | Two comments | Bars float with a progressive blur; the Header Effect sits under every Toolbar (GC-R8, GC-R10) |
| Payment summary and methods as two cards | A comment | The Payment Box is one piece (GC-R17) |
| Missed a Figma frame added mid-review | A late rebuild | Re-list the frames before every publish (GC-R4) |
| `all:unset` on a DL button | Clicks landed on the wrong control | Never `all:unset` a DL component (builder rule) |
| Embedded the prototype in the narrow text column of a handoff | A comment, twice | The prototype runs at full page width (GC-R18) |
| Built a prototype from a standalone copy of the DL skill older than the plugin | Two "defects" that the plugin's code had already fixed (Select Card radio, Option Card padding) | Use the plugin; turn off standalone copies of the Nusuk skills (18 Nov 2026) |
| Local class names `.ch-amt` and `.ch-row` in the Charity prototype collided with the DL Charity Card and stacked the riyal sign | A visual bug | Prefix every local class and check it against `bundle.css` (18 Nov 2026) |
| A sticky element inside the Toolbar only stuck within the Toolbar | The row scrolled away | `display:contents` on the wrapper, `.nk-tb` and `.nk-tb-bar`; stick `.nk-tb-row` |
| The progressive blur showed nothing when faded with `opacity` | No blur | Keep blur layers at full opacity; fade only the tint |
| A second scrim stacked over StatusSheet's own | A dark band | Let the sheet's scrim fill the screen |
| A hand-built status bar | The island sat off centre in RTL | Use the DL `StatusBar` |
| Figma asset URLs and `exportAsync` returned nothing useful | No artwork | Clone the node at 2–3× into a temporary frame, screenshot it, delete the frame and confirm none remain |

## 6 · What the DL still owes (10 November 2026)

Fix first, in order of harm (detail in `reference/known-issues.md`):

1. Primary button label is white on white in dark themes (C7): one alias in `Buttons Colors`.
2. Status text on soft fills is 2.5–3.2:1 (C2): darker status primitives.
3. Card chips set 10 px text (K2, TR-01).
4. Two bottom bars are published with no stated owner (N14); the new one has no dark variant (N22).
5. A trial font sits in a published library (N15).
6. 🛍️ Market is documented, not coded (MK8), and has 200+ unbound fills (MK2).
7. The design system page needs one in-page save to rebuild its generated cards (DS1).

## 7 · Trust calls made while building

Each is a rule in `DESIGN.md`; they are listed here because they were decided under pressure and are easy to undo by accident.

- No resting loops: an attention cue plays once; only a wait indicator may loop.
- A Nudge is an interrupt: one real, dated event, never a promotion, never in a sacred window.
- "Only N left" shows from live stock only, and never on Udhiya, Hady or any act of worship.
- "Trusted by Nusuk" needs a written criterion or it is a disguised ad.
- The `Leaderboard` pattern is a layout for featured content, never a ranking of people or worship.
- Commerce never enters render bands 1–5 or a rite step.

## 7b · Templates (11 November 2026)

- A template is documented as a contract, not as a copy of a page: wireframe, numbered spaces, guide with allowed and not allowed, then one example.
- Name a template for the job. The product it was read from is an example and lives apart from the rule.
- Screens that differ only by state are one template with a States list, not several templates.
- Write the contract as data first (`templates/contracts/<id>.json`); the Figma blueprint and the docs are generated from it.
- Flow defects found while writing a contract are logged (Known issues, TC), never fixed silently in the flow.
- Library components that are private or unpublished cannot be placed by key in another file: show a labelled placeholder and say so.

## 8 · Using this skill in a new account

1. For a whole organization, sync https://github.com/ByMoha/NusukDL as a plugin marketplace (Organization settings › Plugins & skills › Sync from GitHub): the `nusuk-dl` plugin carries this skill and the six other Nusuk skills, and every release updates them. Otherwise upload the skill zip in Customize › Skills (or share it from a Team or Enterprise plan). It holds fewer than 200 files, the most claude.ai accepts; the full DL tree is in GitHub (https://github.com/ByMoha/NusukDL) and in the guide's Downloads.
2. For work on Nusuk, also add `DESIGN.md` to the project so every chat has it.
3. To build with the coded components, use `assets/bundle.js`, `assets/bundle.css` and `assets/tokens.css` with React 18 (`window.NusukDL`); `assets/starter.html` shows the wiring.
4. The live design system and guide are linked in `DESIGN.md` §2. When they are newer than this skill, they win; ask for a fresh skill file.

## Working alongside another session (11 November 2026)

- Before any release, read the live design system index and the live guide. If `lastChange` or the version is not yours, another session has published: pull its files, rebuild the modules from the live DESIGN.md, and apply your change on top. Never publish over it from an older local copy.
- The guide, the design system and the project DESIGN.md can each be ahead of your local files. Check all three.

## Change log entries link their Figma file (11 November 2026)

Every change-log entry starts with a **Figma file(s)** line linking each file that holds the change (`https://www.figma.com/design/<key>`; keys are in `reference/library.md`). A release without that line is not finished. Sources that are not Figma files are named in the same line.

## Native handoff (11 November 2026)

- `gen_native_tokens.py` writes `native/NusukTokens.swift`, `native/NusukTokens.kt` and `native/tokens-native.json` from `tokens.json` in every release; never edit them by hand.
- Every change-log entry has an iOS and an Android section: constants in pt and dp, the code shape with leading/trailing and start/end, and platform behaviour (Material 3 minimum button size, edge to edge, touch-target modifiers).
- The files are structure-checked, not compiled: say so, and never claim they build.
- A Compose data class of `Color` values must stay under about 120 members (each `Color` takes two JVM parameter slots, limit 255): colours are grouped by the token's first word.

## The guide's shell (11 November 2026)

- Navigation follows the DL: a transparent Toolbar (logo on glass, the language switch on glass), the floating Bottom Navigation with five destinations (Hello is the round Nusuk button), and Header Tabs only for views inside one destination (Practice: DX practice, Surface allocation; Library: Figma library, Brand, Design system, iOS and Android). Header Tabs are never used for navigation between destinations.
- Panels keep their ids and hashes (#dx, #surface, #library, #brand, #ds, #native, #changelog); a map in the router names each panel's destination. Old links keep working.
- i18n: inside a link, wrap an icon in a `div`, never a `span`, or the whole link (with its SVG) becomes one translation block. The language button keeps its label in `[data-lbl]`.
- The Log's iOS and Android sections become side-by-side cards at build time (`plat_cards` in release.py); the native tab shows the newest entry's cards and embeds the three token files.
- Tests: `i18n/contrast.js` and `i18n/ovf.js` cover `#gbnav`, `#gsub` and the native tab; `audit3/dlaudit.js` counts off-scale text, bordered cards and targets under 48 (44 in the top bar), reading each control's tap padding.


## Installed skills, read against the DL (14 November 2026)

Every skill installed on the account and in the plugins was listed (about 250). The design, UX, accessibility, writing, Figma and verification ones were read; the rest (finance, cap table, Cloudflare, marketing, enterprise search) have nothing for the DL. What was taken, and where it now lives:

| Skill | Taken | Where |
|---|---|---|
| `nusuk-dx` › evaluating | Severity S0–S4 and ease E0–E4 verbatim, strengths first, Nielsen + Rams lenses, patterns over issues, S3 floor for rite / permit / payment / departure, recommendation = change + outcome, "no named rule is taste", field conditions | M13 › Critique and review protocol; M10 › Field conditions |
| `nusuk-voice-rules`, `nusuk-content-writer`, `nusuk-ux` | Who speaks (نحن only for caring acts; adverse outcomes agentless), dignity for people, `%s` gender, six Arabic plurals, grammar checks, filler to cut, terms, states, faith text, Global English | M6 › House rules |
| `nusuk-visual-system` | The whole skill: painting language, colour discipline, creation, refinement and QA | M7 (summary); the `nusuk-visual-system` skill in this plugin (SKILL.md, `references/approved-set.md`, `references/colour.md`, `references/manifest.json` and the 18 unaltered reference images in `references/images/`, hashes checked against the manifest) and design system › Brand (full text) |
| `design-critique` (design-skills) | Critique by fidelity, excise count, response-time limits | M13 protocol steps 1 and 7; M10 › Feedback timing |
| `accessibility-audit` | Five layers (automated, keyboard, screen reader, visual, flow); the DL already met WCAG 2.2 AA, so only the pairing is noted | Skill §9 |
| `verification-before-completion`, `karpathy-guidelines`, `brainstorming`, `grill-me` | Evidence before "done"; change only what the task needs; state assumptions; two or three options for a Proposed item; stress-test one question at a time | Skill §7; M13 steps 8 and 9 |

Left out on purpose: generic palettes, type scales and spacing from `design-elevation` and `frontend-design` (the DL has its own tokens); "five variants at most" from `design-systems` (Figma's sets are the source); research and strategy templates (the 3Ms and the Project Canvas already cover them); `humanizer` (it rewrites to a personal voice, not Nusuk's).

Conflicts found between the account skills, and how the DL settles them:
- `nusuk-voice-rules` lists «تم إلغاء حجزك» as correct, but the writing guide bans تم: the DL uses «أُلغي حجزك».
- `nusuk-content-writer` gives «ألغينا حجزك» as an example of Nusuk speaking as نحن, but the voice rules forbid نحن for adverse outcomes: the DL keeps نحن for caring acts only.
- `nusuk-dx` checks WCAG 2.1 AA with 44 × 44 targets; the DL floor is WCAG 2.2 AA with 48 (44 only in the top bar).
Edits to those three skills were proposed to the owner, to be saved from the review card.

## Full assessment (14 November 2026, later)

| Lesson | What to do |
|---|---|
| Figma's publish status **Changed** means edits sit in the library file but products still get the old version | Code follows the file (DL-01); list the sets in the change log under "Publish in Figma" and ask the owner to publish (F24) |
| Some files show other hex values for the same variable because a page or frame uses another mode | Compare by variable name, never by hex; the token name is what code binds |
| Stale buttons hide inside other components (Start Journey still held the pre-4-November CTA, `Light=Off`) | Search instances for `_Button_Master Of Masters/Default` or `Light=` before trusting a widget's button |
| A selection list may draw only the chosen state (Dropdown item shows a check, no empty radio) | Make the row the control (`role="radio"` / `"checkbox"`), keep the slot, and ask for the unchosen state; never invent it |
| Gold fills and Longing lines look right but fail 3:1 for states (2.5:1, 1.9:1) | Compute contrast for every new state colour; log it with a proposed value that passes |
| README props drift from `index.d.ts` | Run the props parity script before a release: every prop in the types must be in the card |

## Intake and native prototypes (18 November 2026)

The DL Advisor asked for two standing behaviours (DL-43, DL-44; SKILL.md §0 and §9; DESIGN.md M13):

- **Intake before any build.** Ask the clarifications that change the build; ask the objectives and purpose in the Notion DX Tracker's fields (Aims and Purpose, ST. Objectives, LT. Objectives, Questions and Objectives, Use Case, Action, User Pain, User Gain, Research Type; context Service, Platform, Journeys, Mindsets, Personas, Release Group, Priority, Figma URL), reading the task's row first; benchmark against Nusuk's own contracts, patterns and flows; search Mobbin (connector) and Dribbble (web search) for structure only; then build the flow and the screens from DL components.
- **Native prototypes.** Every prototype simulates Apple's transitions (push and back swipe, sheets, covers, alerts, large titles; a no-bounce spring; cross-fade under reduced motion) and draws the iOS status bar with the time fixed at 02:22 and the battery percentage.

## Prototype fidelity (17 November 2026)

From the DL Advisor's 20 artifact comments and 4 chat rulings on the Golf Carts v2 prototype ([🚙 Golf Carts](https://www.figma.com/design/s0G2Gga52Tz5GcZayR3jd9)). Every rule below comes from his comments. The coded defects it found are F114–F119 in `reference/known-issues.md`; the Select Card radio and the Option Card padding it also reported were already fixed in the plugin's bundle, and the body-2 line height is not a defect (Figma's Body 2 is 1.28 too), because the prototype was built from an older standalone copy of this skill.

#### Fidelity

**GC-R1 · Mirror the Figma file. Add nothing.**
- **Rule:** a prototype of an existing Figma flow has exactly one stage per frame on the page. It adds no screen, sheet, state, hint line, helper copy or component that is not in the file or the DL.
- **Why:** the Advisor's words were “do not be creative, do what is there only” and “ensure you do not have any case or component outside it and outside the DL”. Draft 1 added a cost sheet, a pass sheet, a hold-reason line and error hints. Every one was rejected.
- **Check:** list the page's frames with `get_metadata` on the page node. Map them 1:1 to stages and put the node id in each stage. A stage with no node id is a defect.

**GC-R2 · When Figma conflicts with a rule, keep Figma and ask. Do not fix it.**
- **Rule:** Figma may meet M4 (timers, defaults), M6 (writing, e.g. “تم”), the Notion scope (e.g. discounts out of v2) or placeholders (`%s`, `[Total]`). Keep the Figma version in the prototype and raise each conflict as a numbered design question (FQ) in the handoff.
- **Why:** draft 1 “fixed” ten things (removed the discount line, unselected the default package, reworded toasts, replaced the ticket). The Advisor rejected the draft as “nothing to do with the design”.
- **Limit:** this does not switch off M4. A real never-ship item, such as a countdown on a spiritual decision, is still raised as a **blocker** at the top of the handoff. The conflict is flagged loudly; the Figma file is not quietly changed.

**GC-R3 · Sheets and toasts are copied as drawn.**
- **Rule:** frames in the “Validations” section (permission, directions, hold, payment, calendar, wallet, QR, cancel) are built as is: words, icon, buttons, order and count.
- **Why:** the first directions sheet was rejected with “implement the validation and bottom sheets from the Validations section as is”.
- **Check:** compare each sheet's text and button labels with its frame.

**GC-R4 · Watch the file during a review.**
- **Rule:** re-list the page's frames before every publish. Designers change the file mid-review.
- **Why:** the Confirm and Pay split (new frame 86074:14210) landed during this review.

**GC-R5 · Sample values fill placeholders. Structure stays.**
- **Rule:** `%s`, `[Total]` and `[المبلغ]` are filled with plausible sample values, and the sentence around them stays exactly as Figma writes it. Example: “🎉 وفرت %s” becomes “🎉 وفرت 10%”, not a rewritten line.

#### Layout and chrome

**GC-R6 · Screen sections sit 8px from the screen sides.**
- **Rule:** cards span 386px on a 402px screen.
- **Check:** in Golf Carts, the service box, package box, summary and detail rows are all at x 8, width 386.

**GC-R7 · A bottom section sits on the empty tab bar.**
- **Rule:** when a screen ends with a section and has no action bar, the section sits directly on the empty Tab Bar with no gap.
- **Evidence:** booking 80451:41304. Package box 443–836, Tab Bar 836–874.

**GC-R8 · Every top nav bar floats.**
- **Rule:** every nav bar (Toolbar) floats over the content with a progressive blur from the top. It is never a solid fill. Content scrolls under it.
- **Check:** content starts at y 146, under a 146px toolbar.

**GC-R9 · Every bottom tab bar floats.**
- **Rule:** every tab bar (actions, empty) floats with a progressive blur from the bottom up, plus a light gradient.
- **Exception:** the empty bar under a flush section (GC-R7).

**GC-R10 · The Header Effect is part of the page.**
- **Rule:** every page under a Toolbar carries the Figma **Header Effect** (402×572): a warm glow from the top over a large white blurred circle that lifts the screen background.
- **Measured:** over `Surface/Screen BK` #F1F3F4 it reads as #F7F7F8 below the glow (247,247,248).
- **Why:** the Advisor's comment was “the white circle with blur that comes from the top … is missing”.

**GC-R11 · Header Tabs share the width equally.**
- **Rule:** Header Tabs fill the full width, each tab an equal share (two tabs are 50/50). Grey track, white active pill. Zone tabs use the same layout.

**GC-R12 · Select Card has no radio.**
- **Rule:** the box selection is shown by the card's selected state alone.

**GC-R13 · Disabled time slots show only the disabled state.**
- **Rule:** no “مكتمل” or other added text.

**GC-R14 · The counter goes on the right.**
- **Rule:** in an RTL row with a counter and a main button, the counter is on the right (start) and the button on the left. The minus sign sits on the counter's right.

**GC-R15 · Option Card rows use 18px vertically.**
- **Rule:** Option Card rows have 18px top and bottom (and 18px sides), giving 60px rows; 66px with a small action. They are not cards under STD-07 (26/18).
- **Note:** this is the second padding rule. STD-07 (26/18) is for content cards; Option Cards are 18 all round.

**GC-R16 · Title spacing follows the page exactly.**
- **Rule:** section titles follow the Figma page geometry exactly, never a generic header margin.
- **Evidence:** on Confirm 80451:41310, “ملخص الحجز” (body-1) sits at the content top with 12 below; “تفاصيل الحجز” (body-2) has 17 above and 17 below. On Pay 86074:14210, “اختر طريقة الدفع” has 32 above and 18 below.

#### Composite patterns

**GC-R17 · The Payment Box is one piece.**
- **Rule:** it is never two stacked cards.
- **Code field:** 62px high, radius 18, glass pill button “تطبيق” 38px. It sits 12px above the widget.
- **Widget:** white, radius 18, shadow XS.
  - **Top section:** padding 26 / 18 / **48 bottom** (the safe space), gap 26. Header Effect rotated 180° at the bottom. **margin-bottom −26** so it overlaps the section below.
  - **Cards section:** padding 26/18, gap 26. Header row (26 above, 18 below, separator line). Bank Cards: padding 8, gap 12, radius 18, 1px inside stroke. The add button is a 30px glass pill. Terms, then the 44px pay button.
- **Why:** the Advisor's comment was “no separation … combined with negative spaces between them and safe space extra”.

#### Handoff page

**GC-R18 · The prototype fills the page width.**
- **Rule:** on the handoff page the embedded prototype runs at full page width (24px margins), at least 960px high or the window height. The phone and the reviewer panel must both fit.

### Measured geometry

| Screen | Skeleton (y, px) |
|---|---|
| Booking 80451:41304 | Toolbar 0–146 · service box 146–242 (96) · art space · package box 443–836 (393: title +26, tabs +67, cards +123 (140, gap 12), savings +293 (18), CTA row +319 (48), bottom 26) · empty Tab Bar 836–874 |
| Confirm 80451:41310 | Toolbar 0–146 · header 146 (24 + 12) · product card 182–262 (80) · header 262–316 (54) · rows from 316, 60 each (location 66), gap 8 · Tab Bar actions 776–874 (98) |
| Pay 86074:14210 | Toolbar 0–146 · header (32 above, 18 below) · Payment Box 220–1205 · empty Tab Bar 56 · frame 1261 |

---

### Method that worked

1. **List the frames first.** Run `get_metadata` on the page and write the frame list (id, name, size) into the stage table before building.
2. **Read values, not pictures.** Use `get_metadata` for geometry and `get_design_context` for paddings, gaps, radii and type, then build.
3. **Measure the build.** Take `getBoundingClientRect()` of each section and compare it with the frame numbers. Compare dark-pixel rows of your render against the Figma render of the same frame; agree within 2px.
4. **Compare colour by sampling.** Sample about 10 background points against the Figma render. This is how GC-R10 was found and fixed.
5. **Click-test every path.** Use Playwright on a local build: every sheet opens and closes, every toggle works, and `#stage` replay works.
6. **Treat comments as a backlog.** Change, measure, publish, reply in the thread with the numbers. Leave threads for the reviewer to resolve.
7. **Keep Figma artwork in code.** When an asset can't be downloaded from Figma, render the node and crop it. Keep it as Figma artwork; never redraw it.

---

## Figma boards, the Device frame and the working log (19–27 November 2026)

From this account only (RELEASE.md › 1.7): Moha's complaints-flow and Golf Carts chats, his comments on the design system page and his memory. Rules in DESIGN.md › M13 (Figma boards, Prototypes, Keeping this file true) and the `Device` card.

**Figma boards (complaints flow, 23 November).**
- A board holds only DL instances, Proposed components and three wrappers: the screen, the navbar and Content. No plain frames and no loose groups; a leftover group becomes a Proposed component.
- A screen is one vertical auto layout, 402 × 874, with Last on top: the navbar (the Toolbar and the Header Effect, absolute at 0,0, locked, not clipped), then Content, then the Tab Bar. Sheets and backdrops stay absolute on top.
- No device mockups on Figma boards. The iPhone frame belongs to coded prototypes, drawn with the DL `Device`.
- No separate progressive-blur layer in Figma: the Toolbar and the Tab Bar carry it. Chat screens use Toolbar Type=Nusuk AI.
- Anything the DL does not have becomes its own Proposed component, and an element repeated inside a widget becomes a component first (memory, 18 November).

**The design system page (Moha's comments, 19 November).** The Toolbar always keeps the status-bar area above it; Avatar groups without pictures take the Quran colours in turn; selection controls keep 8 between the indicator and the label at every size; previews use real photos wherever Figma has one; on glass bars only the container is glass, never its children.

**Prototypes (memory, 18 November).** Every prototype shows the iOS status bar at 02:22 with the battery percentage and simulates native transitions, inside an iPhone frame. The frame is now the DL `Device` component (402 × 874, the status bar with the battery percentage, the home indicator), so no prototype draws its own.

**The working log.** `project/UNRELEASED.md` did its job: nine entries from two chats between 18 and 26 November, and the release folded them all in. One entry was back-filled a week late, so the release still compares every live file (`drift`) rather than trusting the log alone. Corrections Moha confirms in a working chat (the `learn-taste` method) go under `### Learnings` in that file; working chats never edit DESIGN.md, the skills or the plugin.

**What broke, so it is not repeated.**
- The chat lane uploaded a new developer handoff zip on 26 November and trashed the old one, which the guide still linked, so the guide's download failed until this release. A zip shipped between releases leaves the linked one in place; only a release points the guide at a new zip and trashes the old ones. Each release opens the linked file first (RELEASE.md › 1.8) and plugin health fails while the guide links a file that is not live.
- The chat lane also pushed four plugin builds to GitHub between releases. The release fast-forwards the local mirror to the remote before it builds, so its push does not fail or undo them.
- New components reached the page without types in `index.d.ts` (NusukCard, QuoteWidget, SupportSheet, LoginForm, ResendTimer), so their API cards lagged. A component published between releases adds its types in the same publish.

