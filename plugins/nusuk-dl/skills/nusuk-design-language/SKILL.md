---
name: nusuk-design-language
description: "Nusuk Design Language: use for any Nusuk concept, deck, design, prototype, copy or UI code, so it follows DL tokens, components, patterns, placement, rules and ethics."
---

# Nusuk Design Language (DL) · skill

Version 3.7.1 · 18 November 2026 · Owner: DL Manager (Sara), DL Advisor (Mohamed Auf).

You are designing for Nusuk, the faith companion for every Muslim: Hajj, Umrah, Rawdah visits, permits and bookings, and the daily practice around them (prayer, Quran, dhikr, charity). Nusuk is a trust instrument, not a consumer app.

**What this skill holds:** this file is the root of DESIGN.md (always read). `DESIGN.md` in this folder is the full text: this root, modules M1–M13 (open only the one the task needs: search its heading, e.g. `## M9S`) and Appendix A (the 53 services) and Appendix B (every journey step), which are data to look up, not read end to end. `reference/tokens.json` holds every exact value, `reference/components.d.ts` every component and section prop, `reference/rawdah-landing.json` the page models, `reference/templates/index.json` and `reference/templates/contracts/<id>.json` the template contracts, `reference/patterns-index.json` the layout patterns.

## 0 · Intake: every new task starts here (DL Advisor, 18 November 2026)

Before drawing a screen or writing a flow, run these five steps in order. Skip one only when it cannot apply (a copy fix has no flow to benchmark) and say which you skipped and why.

1. **Ask for clarifications.** Ask what you cannot settle from the brief, the Figma file, the DL or the platform decisions register: the one to four questions whose answers change what you build (use AskUserQuestion when it is available). Don't ask what a source already answers.
2. **Ask for the objectives and purpose, in the DX Tracker's fields.** If the task has a row in Notion › DX Tracker, read it first and use what it already says. Ask only for the fields that are empty and apply: **Aims and Purpose**, **ST. Objectives**, **LT. Objectives**, **Questions and Objectives**, **Use Case**, **Action**, **User Pain**, **User Gain**, **Research Type**, plus the context fields **Service**, **Platform**, **Journeys**, **Mindsets**, **Personas**, **Release Group**, **Priority** and **Figma URL**. Write the answers into the Project Canvas.
3. **Benchmark internally.** Before looking outside, compare the task with what Nusuk already has: the template contracts (`templates/index.json`, M9T), the patterns (`patterns/index.json`, M9P), the placement model (M9S), and other Nusuk flows that do the same job (for a booking: Umrah Permits, Rawdah Permits, Golf Carts; for a purchase: Marketplace). Say what you reuse, what differs and why.
4. **Search Mobbin and Dribbble for structure.** Mobbin through its connector (`search_flows`, `search_screens`); Dribbble through web search (`site:dribbble.com` with the task's terms). Look for structure only: the order of steps, what each screen holds, where decisions sit. Never take a look, a colour, a type style or a component from them; the DL decides every visual. List the references you used, with links, in the canvas.
5. **Then build:** the flow first (stages, states, transitions), then each screen's structure from DL components and patterns, filling each template contract space from its allowed list.

When nobody can answer (a scheduled or unattended run), write your assumptions for steps 1 and 2 at the top of the work and continue; mark each assumption so it can be confirmed later.

## 1 · Load the right module

| Task | Load |
|---|---|
| Any screen, concept or critique | M2 Intent & desire, then the modules below |
| Colour, type, spacing, radius, effects, glass | M8 Foundations (values come from `tokens.json`) |
| A component: which one, its states and rules | M9 Components |
| The Nusuk AI chat: answers, questions, AI tab bar, bot, tickets, hotel and flight cards | M9 Components, then **M9C Nusuk AI chat**, with `reference/chat/` (§11) |
| Which service shows where, when and for whom; Today; pushes and notifications | M9S Surface allocation (+ Appendices A, B) |
| A prototype of a flow that already exists in Figma | **§9** (below), then M9 and M9T |
| A screen of a known kind: landing, list, details, cart, payment, booking step, booking details, pass, sheet | M9S, then **M9T Template contracts** (§8 below), then M9P |
| A section or a page: what goes where, in what order | M9S, then M9P Patterns & templates |
| A new pattern | M9P › Adding a pattern, then M9S |
| Nudges, habits, the symptom-to-fix router | M3 Behaviour |
| Anything that touches ethics, money, worship, AI | M4 Trust (red lines) |
| Metrics, KPIs, guardrails | M5 Measurement |
| Words, Arabic first, numbers, localisation | M6 Writing |
| Logo, brand colours, imagery, illustration | M7 Brand |
| Contrast, targets, devices, screen sizes | M10 Accessibility & devices |
| iOS, Android, handoff to developers | M11 Platform & handoff |
| Past rulings and why | M12 Decisions |
| Process, the eight gates, evaluation | M13 Process & gates |
| Who Nusuk serves and why | M1 Mission |

The same DESIGN.md lives in the design system (`project/DESIGN.md`), the coded package and the Nusuk project (`claude/DESIGN.md`). Machine-readable twins in the design system: `tokens.json` (values), `components/index.d.ts` (props), `templates/index.json` and `templates/contracts/*.json` (template contracts), `templates/*.json` (page models), `patterns/index.json` (patterns), `migrations/*.json` (changes), `CHANGES-2026-11-08.md`, `CHANGES-2026-11-09.md` and `CHANGES-2026-11-10.md` (releases for native teams). This skill carries copies of the first three, the template contracts and the pattern index in `reference/`.

## 2 · Sources and precedence

1. The **Nusuk Design Language** design system: https://claude.ai/artifact/6BJrx3hWU6GVwBYby9xGAr — `project/README.md`, the component card you need, `project/tokens.json` for exact values.
2. The **DL guide**: https://claude.ai/artifact/JiezHP45Sx6J8cqXp3iYpw
3. The **Figma library** (32 files, ⚙️ Foundation `avzbRTP9CgpbbO8NgU5Ymo`). Figma is the source of truth; when this file and Figma differ, Figma wins and the file is fixed.

Product strategy and UX method: the `nusuk-dx` and `nusuk-ux` skills. Arabic and English copy: `nusuk-content-writer`. Do not create a third glossary.

**Precedence (higher wins):** law and regulators (PDPL, ministry mandates) → trust red lines (M4) → recorded decisions (M12) → the Nusuk writing guide → behavioural patterns (M3) → DL tokens, components, surface allocation, template contracts, patterns (M8, M9, M9S, M9T, M9P) → module prose → generic best practice.

## 3 · Classify before you draw

Write three lines before any layout:
- **Intent or desire?** Intent is a decision to act (book, get a permit, navigate a rite). Desire is a feeling or longing (forgiveness, closeness to Allah, going with parents). Many features serve both.
- **Realm:** Spiritual · Emotional · Transformational · Functional · Supportive.
- **Pattern:** the behavioural pattern that applies and the symptom it answers (M3).
- **Placement:** the desire state, the journey step and mindset, and the band and P-level it earns (M9S).

Spiritual desires get reverent, contemplative screens. Logistics intents get fast, confident, transactional flows. Never both registers in one block.

## 4 · The five DL rules

1. **DL first.** Use DL components, patterns and tokens. Search the library before drawing.
2. **Never detach.** Configure variants; never break an instance.
3. **Content only.** Change words, DL icons and images. Never colour, type, radius, shadow, stroke or inner padding.
4. **Never edit the library.** Only the DL Manager (Sara) and the DL Advisor (Mohamed Auf) change the DL, with alignment and approval from DGA.
5. **Ask, don't improvise.** Anything new is built locally with DL tokens, labelled **Proposed**, and submitted with justification, use cases and requirements. The proposing team makes every fix.

Zones: Content ✓ · Configuration ✓ · Composition ✓ · Customisation ✗.

## 5 · Never ship (summary of M4)

Streaks or streak shame · ranks, points or scores for worship · countdowns, FOMO, loss framing · manufactured scarcity or urgency, and any urgency on a spiritual decision · decoys · hidden fees, pre-selected add-ons, pre-ticked consent · disguised ads · feeds of other people's worship · surveying the ibadah · timed or celebratory ritual completion · GPS-authoritative ritual counts · AI issuing rulings · madhab partiality · fabricated reviews · offers in pre-desire · commerce in sacred windows or above band 5 · monetising a return after a lapse.

## 6 · Done means the eight gates (M13)

Principles (Intuitive, Engaging, Intelligent) · intent/desire and realm · behavioural model in five parts · KPI pillar with threshold and guardrail, linked to WMA/WAU · WCAG 2.2 AA · DL and brand compliance · research grounding · handoff (specs, tokens, states, edge cases, responsive).

## 7 · How to answer

- Concepts and decks: open with the classification, show the design with DL components, patterns and tokens, then the pattern, metric and guardrail, then the gate check. Arabic and English side by side where copy matters.
- Screens and pages: place first (M9S), pick the template contract by job (§8, M9T), fill each space only from its allowed list with patterns (M9P), apply the state, order by band, and change sections, not styles. State the contract you picked and why. If no contract fits, say so and build it as **Proposed**.
- Critique and review: follow M13 › Critique and review protocol. Strengths first; each finding names the rule, token, pattern, WCAG criterion or heuristic it breaks, why it matters for this pilgrim, the DL fix, severity S0–S4 and ease E0–E4 (the DX team's scales, verbatim); no named rule means taste, so leave it out. Anything blocking a rite, permit, payment or departure is S3 at least. End with "Here's what's strong / Here's what's weak or missing / Here's how I'd sharpen it."
- Before you say done, fixed or "matches Figma", show the evidence from this pass (screenshot, measurement, file read); otherwise say what was not checked. Change only what the task needs, state your assumptions, and for a Proposed item offer two or three options with their trade-offs and recommend one.
- Anything the DL doesn't cover: say so, build it as **Proposed** with DL tokens only, and draft the request (name, need, evidence of reuse, use cases, where not to use, requirements, accessibility, tokens).
- Never invent values, components, statuses or service facts. If a value isn't in the tokens, read the system or ask; if a service description is missing, ask before using it.

## 8 · Start every screen from its template contract (M9T)

A **template contract** says what one kind of screen may hold: spaces in a fixed order, the cardinality of each, what is allowed and forbidden in each, its states and rules. A **pattern** fills a space; a **component** builds a pattern; a **page model** is one page built to a contract. Contracts are named for the job, never for a product: the service shown with one is an example, not the rule.

**Procedure:**
1. Classify (§3) and place it (M9S).
2. Pick the contract by job from the list (confirm with `useFor` / `notFor` in `reference/templates/index.json`).
3. Read that one file in `reference/templates/contracts/`. Do not load the others.
4. Fill each space only from its `allowed` list, in the fixed order, within its cardinality; choose the pattern from `reference/patterns-index.json`, then the component.
5. Apply the state: it changes what a space holds, never the order of spaces.
6. Check every `forbidden` line, the contract `rules` and the red lines (§5). Name the `measure` and its guardrail.
7. No contract fits? Say which you considered and why none fits; do not force the nearest. Build it as **Proposed** and draft its contract.

**Contracts (all draft, 11 November 2026):**
- `service-landing` · The front page of a service that offers a catalogue
- `catalogue-list` · Every item of one category, as a grid or a list, with the running selection always in reach
- `item-details` · Everything needed to decide on one item: media, name and provider, description, options, then one action that adds or books it
- `cart` · Review what was chosen, where it goes and what it costs, then move to payment
- `payment` · Pay with nothing else on the page
- `request-tracking` · Where a request is now, what happens next, and how to get help
- `requests-list` · Every request of the person in one service, current and past
- `service-search` · Find an item by name inside a service
- `service-support` · Answers and a way to reach a person, from inside a service
- `address-selection` · Choose a saved place or add a new one
- `cancellation` · Cancel a request with a clear reason and a clear refund
- `add-on-task` · Choose an optional extra, personalise it and add it to the request
- `cost-sheet` · The amounts of one request, readable in a glance
- `media-viewer` · Look closely at the media of one item
- `date-period` · Choose a day and a broad part of the day, for a service where the booking is valid all day
- `date-slot` · Choose a day, a part of the day and an exact time, with optional groups of times by audience
- `booking-details` · One booking after it is made: when it is, where it stands now, who it covers and how to open each pass
- `booking-details-package` · A booking made of several parts with one provider: where the whole stands, who is in it, what is confirmed, what is still asked of the person, and the money
- `pass-sheet` · The pass of one person, opened over the booking: whether it is valid, whose it is, and the code to show at the gate
- `pass-viewer` · A pass that is an identity card: shown full screen, on its own, for inspection

**Always:** an example is one situation, never copied to another service · commitment state first, offers below status, people, confirmed parts and money · passes carry nothing commercial and work offline · the main action stays enabled · drafts: a conflict with a shipped flow is a question, not a violation; red lines hold regardless.

**Worked examples:** "Booking page for a museum ticket" → `booking-details`, five states; the ticket is `pass-sheet`. · "Pick a visit day and an exact time" → `date-slot` (valid all day: `date-period`). · "Offer above the QR on the pass" → refuse. · "Move invoices above people when permits are issued" → refuse: states never reorder spaces. · "Use the Marketplace cart rules for the hotel cart" → use the `cart` contract, not the example. · "A screen for giving to a cause" → no contract fits: Proposed, with a draft contract.

## 9 · Prototypes: Figma fidelity, native motion and the status bar (17–18 November 2026)

Every prototype simulates native iOS motion and shows the status bar at 02:22 (the two bullets below). When the brief is a Figma file, the prototype is also a mirror, not a redesign. The fidelity rules come from the DL Advisor's 20 comments and 4 rulings on the Golf Carts v2 prototype; the evidence and the method are in `LEARNINGS.md` › Prototype fidelity, the defects in `reference/known-issues.md` › Golf Carts review (GC).

- **One stage per frame, nothing else (GC-R1).** List the page's frames (`get_metadata` on the page) before building; every stage carries its node id, and a stage without one is a defect. No added screens, sheets, states, hint lines or helper copy. Re-list the frames before every publish: designers change the file mid-review (GC-R4).
- **Conflicts are questions, not fixes (GC-R2).** Where Figma meets M4, M6, the release scope or a placeholder, keep the Figma version and raise a numbered design question (FQ) in the handoff. A genuine never-ship item is raised as a blocker at the top of the handoff, never silently built either way.
- **Validation sheets and toasts are copied as drawn (GC-R3):** words, icon, buttons, order and count.
- **Placeholders** (`%s`, `[Total]`, `[المبلغ]`) take sample values inside Figma's own sentence (GC-R5): «🎉 وفرت %s» becomes «🎉 وفرت 10%».
- **Chrome:** sections sit 8px from the screen sides, 386 on a 402 screen (GC-R6); a closing section sits flush on the empty Tab Bar (GC-R7); every Toolbar floats with a progressive blur from the top and every Tab Bar with one from the bottom, never solid (GC-R8, GC-R9); the Figma Header Effect (402 × 572: a warm glow over a white blurred circle) sits under every Toolbar (GC-R10).
- **Components:** Select Card has no radio (GC-R12); Header Tabs on a page share the width equally, grey track and white pill (`fill`, GC-R11); disabled time slots show only the disabled state (GC-R13); Option Card rows are 18 all round, 60px (66 with an action), not the STD-07 card padding 26/18 (GC-R15); in RTL the counter sits on the right of its button row (GC-R14); section titles take the page's own spacing (GC-R16).
- **Payment Box** is one piece (GC-R17): the code field, 12 above a widget whose top section (bottom padding 48) overlaps the cards section by −26.
- **Never `all:unset` a DL component**: its tap-padding layer needs `position: relative` and would cover its neighbours (a builder rule from the Golf Carts review).
- **Native iOS motion in every prototype (DL Advisor, 18 November 2026).** Simulate Apple's own transitions: a pushed screen slides in from the trailing edge (from the left in Arabic) while the previous screen shifts part of the way and dims, and back swipes from the leading edge; sheets rise from the bottom over a dimmed backdrop and drag down to close; a full-screen cover rises from the bottom; tabs switch without a slide; alerts fade in with a slight scale; a large title collapses into the bar on scroll. Use a spring with no bounce, close to iOS's default (check it against the iOS Simulator rather than guessing). With reduced motion, cross-fade instead. Values that matched iOS in the Nusuk Charity example (`nusuk-feature-handoff` › examples): the screen beneath moves 30% and dims 10%, the edge swipe commits at 35% or on a flick, sheets rise in 500 ms, easing `cubic-bezier(.32,.72,0,1)`. Only the Toolbar's first row sticks; keep progressive-blur layers at full opacity and fade only the tint. DL motion tokens (M8) stay for component interactions such as press and toggle.
- **The iOS status bar is always drawn, at 02:22.** Every prototype screen shows the status bar with the time fixed at **02:22**, the signal and Wi-Fi icons, and the battery with its percentage, drawn with the DL `StatusBar` (a hand-built bar puts the island off centre in RTL). The digits are Western and left to right in both languages. Native apps use the system status bar; this rule is for prototypes and mockups.
- **Measure, don't eyeball:** compare section bounding boxes and dark-pixel rows with the Figma render (within 2px) and sample background colours. A coded component that differs from Figma is logged as a GC issue and overridden locally with a note.
- **Use the plugin's bundle.** A prototype built from an older standalone copy of this skill drew a radio in Select Card and 26 padding in Option Card, both fixed in the coded DL before the review. Turn off standalone copies of the Nusuk skills.

## 10 · Skills that work with this one

This skill ships inside the `nusuk-dl` plugin with ten other skills, and the plugin is the only way it is distributed (DL-42, 17 November 2026). They cover what the DL does not; the DL still decides tokens, components, placement and the never-ship list, and where a general skill and a Nusuk rule disagree, the Nusuk rule wins. The plugin's `library/` folder (two levels up from this file: `../../library/`) holds the whole DL tree: every component folder with its preview, the coded package, every migration and the developer handoff.

| Task | Use with this skill | What it adds |
|---|---|---|
| Heuristic evaluation, research plan, behavioural model, metrics | `nusuk-dx` | The DX team's method: S0–S4 and E0–E4, Nielsen and Rams lenses, report template, 3Ms. The DL's WCAG floor (2.2 AA, 48 targets) overrides its older 2.1 / 44 line |
| Arabic or English copy, notifications, store replies | `nusuk-content-writer`, `nusuk-voice-rules`, `nusuk-ux` | The writing guide in full. M6 › House rules records where they disagreed: adverse outcomes are agentless and never use تم («أُلغي حجزك») |
| Illustrations and campaign art | `nusuk-visual-system` (with its 18 reference paintings and `scripts/match_blue_tone.py`) | The watercolour painting language, colour discipline and the create, refine and QA steps (M7) |
| A feature from brief to developer handoff | `nusuk-feature-handoff` | Project Canvas, a clickable DL prototype, the gaps questionnaire and the iOS and Android handoff page |
| Any change in Figma | `figma-use` (with `figma-generate-library` for library work) | The Plugin API rules; never run two Figma calls at once |
| A full accessibility audit | `accessibility-audit` | The five-layer audit (automated, keyboard, screen reader, visual, flow) behind the M10 floor |
| A structured design critique | `design-critique` | Heuristics, UX laws, pattern and excise reviews; M13 › Critique and review protocol sets the Nusuk scales (S0–S4, E0–E4) and the closing lines |
| General microcopy method | `ux-writing` | Patterns and checklists for buttons, errors, empty states and onboarding; Nusuk wording comes from `nusuk-ux`, `nusuk-voice-rules` and M6 |
| Rephrasing so text reads as written by a person | `humanizer` | Detects and rewrites AI-sounding prose (English and Spanish rules); never for Quran, hadith or approved faith text, and Arabic follows the Nusuk writing guide |

## 11 · The Nusuk AI chat (M9C)

The chat is one aspect of this skill, a **Proposed lane** of the DL built from Figma [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252) (7 sets, 54 variants, 3 masters on 17 Nov 2026). Load it for any chat answer, question, AI tab bar, bot, ticket or chat card.

1. **Classify first (§3).** Chat answers are mostly logistics intents: fast, one step, one primary action. A spiritual question gets a calm text answer with its source; the bot never issues rulings (M4).
2. **Use a chat export before drawing.** `reference/chat/components.md` lists the 41 exports: 4 are DL components as they are, 23 are variants of DL components (ChatMessage, TextField, SelectCard, Chip, TabBar, FlightTicket, OptionCard) and 14 are new. Configure them; don't restyle them.
3. **Values come from DL tokens.** The only exceptions are the proposed `chat-*` tokens in `reference/chat/tokens.proposed.json`; never add a raw value.
4. **One question per bubble, one bubble per answer.** A question is a Question container with its own primary Button MD; suggestions are Chips (or DL Button MD with `buttons: true`). Once answered, the question bubble is dismissed and the answer becomes one user bubble with the question as its header row (pass `question` on the answer) and "Edit answer". Replies to suggestions after a result have no header (M9C).
5. **Load order in code:** `tokens.css` → `bundle.css` → `nk-chat.tokens.css` → `nk-chat.css`, then React 18 → `bundle.js` → `nk-chat.js`. `NusukChat.setLang('en')` for English; Arabic is the default.
6. **Something new for the chat** follows §4 rule 5: build it locally with DL tokens, label it Proposed, and add it to `manifest.proposed.json` with its Figma node.

## Also in this skill

| File | Open it when |
|---|---|
| `GETTING-STARTED.md` | Someone asks how to install, share, use or update this skill |
| `LEARNINGS.md` | Changing the DL, reading the Figma library, accepting library updates, releasing, or asking what is still broken |
| `reference/templates/index.json`, `reference/templates/contracts/<id>.json` | Designing or reviewing a screen of a known kind (§8) |
| `reference/patterns-index.json` | Choosing the layout pattern for a space |
| `reference/templates-and-patterns.md`, `reference/template-contracts.md` | The method for templates and patterns, and the full text of every contract |
| `reference/chat/README.md`, `reference/chat/components.md`, `reference/chat/` | The Nusuk AI chat (Proposed lane, NusukChat 2.8.5): how to use it, the 41 exports with their Figma nodes and DL parents, code, proposed tokens, icons and manifest; every card in `reference/chat/cards.md`, every chat migration in `reference/chat/migrations.json`; the rules are DESIGN.md › M9C |
| `reference/known-issues.md` | A value looks wrong: it may be a logged Figma defect that code copies on purpose |
| `reference/component-inventory.md`, `reference/library.md` | Finding a Figma set, its variants, or a library file key |
| `reference/native/NusukTokens.swift`, `reference/native/NusukTokens.kt`, `reference/native/tokens-native.json`, `reference/native-handoff.md` | Any iOS or Android work: the tokens as Swift and Kotlin constants, the name map, units and the pull-request checks |
| `reference/change-log.md` | The short change log for developers, newest first |
| `reference/release-notes.md`, `reference/CHANGES-*.md`, `reference/migrations.json` | What changed and when; old-to-new maps for developers (every migration in one file, keyed by its file name) |
| `reference/governance.md` | Who may change the DL and how to propose something new |
| `reference/components.md` | Every component's card in one file (search `# <Name>`, e.g. `# StatusSheet`): props, variants, use, don't, accessibility, the Figma set it mirrors |
| `reference/brand.md`, `reference/writing.md`, `reference/behaviour.md`, `reference/dx-practice.md`, `reference/targets-and-kpis.md`, `reference/devices-accessibility.md`, `reference/using-with-claude.md` | The design system's own sections, word for word (DESIGN.md carries their rules) |
| `assets/logos/` | The Nusuk logo in ink, white and gold (SVG); clear space and misuse rules are in `reference/brand.md` |
| `assets/bundle.js`, `assets/bundle.css`, `assets/tokens.css`, `assets/starter.html` | Building a prototype with the coded components (React 18, `window.NusukDL`) |
| `scripts/figma-count-behind.js`, `scripts/figma-accept-updates.js` | Carrying a library update into other Figma files, safely |
| `../../library/` (the plugin's library folder; also on GitHub https://github.com/ByMoha/NusukDL › plugins/nusuk-dl/library) | The full DL tree this skill condenses: one folder per component with its preview page, the coded package, every migration and the developer handoff. The skill carries the cards, chat cards and migrations as one file each so it stays light to load |

