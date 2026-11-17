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

1. Upload the skill zip in Customize › Skills (or share it from a Team or Enterprise plan). It holds fewer than 200 files, the most claude.ai accepts; the full DL tree is in GitHub (ByMoha/NusukDL) and in the guide's Downloads.
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
| `nusuk-visual-system` | The whole skill: painting language, colour discipline, creation, refinement and QA | M7 (summary); `reference/visual-system.md` and design system › Brand (full text); `reference/visual-system/` holds its scene guide, colour procedure, manifest and, in the with-artworks zip, the 18 unaltered reference images (hashes checked against the manifest) |
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
