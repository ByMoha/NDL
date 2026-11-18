---
name: "nusuk-feature-handoff"
description: "Take any Nusuk feature from brief to developer handoff: Project Canvas, clickable DL prototype, auto-built gaps questionnaire with proposed answers, and a native iOS/Android handoff page. Use for a new Nusuk flow, service, PRD or handoff."
---

# Nusuk feature handoff (v2)

Produces four linked outputs, in order. Do not skip a stage; say so if one is thin.

0. **Project Canvas** (Monitor): one page of scope before anything is drawn.
1. **Prototype** (Map): clickable, Arabic, on the coded Nusuk DL.
2. **Gaps questionnaire**: everything invented or undecided, pre-answered where Nusuk already knows.
3. **Development handoff** (Measure): what iOS and Android teams build from.

## Fixed resources

- **Starter kit** (templates and build tools): https://claude.ai/artifact/NfzRFnLy9kYxSnUPfoLUih. Read it with `list_files` / `read_file`. Files: `questionnaire.html`, `app.js`, `data.js` (schema in its header), `example-support-in-chat.js`, `tools/diagram.py.txt`, `tools/handoff_build.py.txt`, `tools/prototype_build.py.txt`, `tools/prototype_style.css.txt`. Copy the files; a new project changes `data.js` and the handoff tables only. If the kit cannot be read, tell the user and rebuild from the specs below.
- **Platform decisions register**: project doc `claude/nusuk-platform-decisions.md` (Projects tool). Read it first, every time.
- **Worked examples**:
  - Support-in-Chat (from a brief, conversational): prototype https://claude.ai/artifact/16SmC2t98t4cUKgZSwf9Wf · questionnaire https://claude.ai/artifact/89BcjJiM8EsBVWn9DyapYZ · handoff https://claude.ai/artifact/ELDyY1Hry5j23tRnrog1Fn.
  - Nusuk Charity (from a Figma file, kept as is): `examples/nusuk-charity/README.md` — frames and node ids, measurements, design questions Q-01 to Q-10, floating Toolbar and Tab Bar with progressive blur, iOS motion, fixes for the traps hit; `source/` rebuilds the prototype and handoff byte for byte. Prototype https://claude.ai/artifact/TkuNddZJdVvuE1gvPCU6Sh · questionnaire https://claude.ai/artifact/WsSQEqJ6Bn6YNq8WB2VdLQ · handoff https://claude.ai/artifact/QTwEjFG3YJY452tbnGNs7s.

## Step 0 · Intake, then ground it

Run the intake in `nusuk-design-language` §0 first, every time: (1) ask the clarifications that change the build; (2) ask the objectives and purpose in the Notion DX Tracker's fields (Aims and Purpose, ST. Objectives, LT. Objectives, Questions and Objectives, Use Case, Action, User Pain, User Gain, Research Type; context: Service, Platform, Journeys, Mindsets, Personas, Release Group, Priority, Figma URL), reading the feature's tracker row first and asking only for what is empty; (3) benchmark against Nusuk's own contracts, patterns and flows; (4) search Mobbin (connector) and Dribbble (web search, `site:dribbble.com`) for structure only, never for visuals; (5) then build the flow and the screen structure from DL components. Put the answers and the references in the Project Canvas.


1. Load `nusuk-design-language`; `nusuk-content-writer` for copy; `nusuk-visual-system` only for illustration.
2. Read, in this order, and note what each already answers:
   - the platform decisions register;
   - project memory for the feature, plus `topics/dl-layout-rules`;
   - the project's Notion pages that apply: Project Canvas template, Targets and Objectives, Instrumentation & Event Schema, Metrics database, DGA Response, the Epic database entry for the feature (use the Notion tools; if unavailable, say which pages you could not read);
   - the Figma file for the feature if one is named (Figma is the source of truth over code).
3. Classify: intent or desire, realm, behavioural pattern with its five parts (Why, What, How, Where, Validate), placement (journey step, band, P-level), template contract per screen.
4. Check the never-ship list (M4) against the brief. With no Figma file, build the compliant version and say so. With a Figma file, build the Figma version and raise each conflict (M4, M6, scope, placeholders) as a numbered design question; a genuine never-ship item is a blocker at the top of the handoff. Never change the Figma flow silently.
5. Write the **Project Canvas** in the reply or as a short doc: problem, people, scope in and out, success metric with its guardrail, risks, what is unknown. Ask the user only what blocks the prototype.

## Step 1 · Prototype

Build with `tools/prototype_build.py.txt` and `tools/prototype_style.css.txt`.

- One page: DL tokens, bundle and (for conversational flows) the chat files inlined; React 18.3.1 from cdnjs. Page `dir="rtl"`, reviewer panel `dir="ltr"`. Phone frame 402 × 874 above 480px.
- A reducer drives the flow; `#stage` hashes replay it. The panel shows per stage: contract, components, decision, pattern, metric and guardrail, and the payload the back office receives.
- Include the non-happy states the feature needs: loading, empty, error, offline, permission denied, limit reached. When building from a Figma file, include only the states Figma draws and list the missing ones as questions.
- **Native iOS motion**: pushes slide from the trailing edge (from the left in Arabic) with the previous screen shifting and dimming, back swipes from the leading edge, sheets rise over a dimmed backdrop and drag down to close, tabs switch without a slide, alerts fade with a slight scale; a no-bounce spring close to iOS's default; cross-fade under reduced motion. Values that matched iOS in the Charity example: the screen beneath moves 30% and dims 10%; the edge swipe commits at 35% of the width or on a flick; sheets rise in 500 ms; easing `cubic-bezier(.32,.72,0,1)`.
- **Floating bars, built right**: only the Toolbar's first row (back, title, actions) sticks; search scrolls away. Make the wrapper, `.nk-tb` and `.nk-tb-bar` `display:contents` and stick `.nk-tb-row`, carrying the bar's bottom padding (18 under search, 32 without) as margins. Keep progressive-blur layers at full opacity and fade only the tint (an ancestor below opacity 1 becomes the backdrop root and the blur disappears). The home indicator stays above sheets.
- **Builder traps**: prefix every local class and check it against `bundle.css` first (`.ch-amt` and `.ch-row` collided with the Charity Card); StatusSheet brings its own scrim, so don't stack a second; Figma's plus-darker fill is `mix-blend-mode: plus-darker` with a `color-mix` fallback under `@supports not`; use the DL `StatusBar`, never a hand-built one (the island drifts in RTL).
- **Companion skills in the plugin**: `apple-design` for the feel of the motion (DESIGN.md's values win), `mobile-native` for the phone shell (safe areas, `dvh`, 16 px inputs, no tap highlight) and `break-ui` to run the worst-case data (four-part Arabic names, Hijri dates, riyal amounts, long permit names) before the prototype goes to review; `review-animations` checks the motion code.
- **Status bar on every screen**: time fixed at **02:22**, signal, Wi-Fi and the battery with its percentage; Western digits, left to right.
- **Figma audit**: list the page's frames first and build exactly one stage per frame, each with its node id; nothing outside the file or the DL. Copy validation sheets and toasts as drawn. Re-list the frames before every publish.
- **Measure**: compare section bounding boxes and rendered rows with the Figma frame (within 2px) and sample background colours; put the numbers in the comment replies.
- Review rulings, applied by default (also in the register): Modern Standard Arabic; Western digits; IDs read left to right; cards 26/18/18, related cards 8px, sections 8px from the screen sides, Option Card rows 18 all round (60px); Toolbar and Tab Bar float with a progressive blur, never solid, with the Figma Header Effect under the Toolbar; tokens only; back arrow points right in RTL; chat screens use close plus title; every action icon matches its label; a person reachable within two taps; AI answers only from approved content with a source, refuses rulings, cuts to the emergency route on danger words; destructive actions are Secondary (Fate) with a second confirmation; help sections are a drop-in widget in a real host page.
- Everything not in the DL is labelled **Proposed**. For each, draft the DL request: name, need, evidence of reuse, use cases, where not to use, requirements, accessibility, tokens.
- **Verify**: run the full flow in a local browser, then open the published page once in the user's browser if a browser tool is available. Report what was and was not verified.
- Artifact comments: one at a time; change, verify, reply in the thread; raise DL or contract conflicts in the reply.

## Step 2 · Gaps questionnaire (automatic)

**Find the gaps**
1. List everything the prototype invented: mock APIs, statuses, categories, promises (times, SLAs), copy, permissions, parties, Proposed components.
2. Add the core sections, then the sections for the feature type:

| Always | Covers |
|---|---|
| A Scope and rollout | services, surfaces, languages, eligibility, pilot |
| B Domain model | main record, types, statuses, numbering, duplicates, timeouts |
| D Integrations and data | system of record, API specs, sources, realtime, files, identity |
| F Privacy and legal | consent, retention, staff visibility, reporting |
| G Notifications | channels, copy, quiet hours and sacred windows |
| H Design Language and content | Proposed pieces, missing statuses and icons, copy owner |
| I Native and engineering | stack, OS floors, offline, analytics, flags, accessibility |
| J Measurement | baseline, targets with guardrails, sign-off owners |
| K Parties and decision rights | rule owner, resolver, who is told; search public sources for existing channels and rule owners |

| Feature type | Add |
|---|---|
| Support, complaints | C SLAs, routing, safety · L support levels and authority matrix · ticket hub items from the register |
| Booking, permits | capacity and slots, eligibility rules and their owner, cancellation and no-show, gate or field operations, group and dependents |
| Commerce, payments | pricing and fees, refunds and disputes, provider onboarding and SLAs, tax and invoices, commerce placement (never above band 5 or in sacred windows) |
| Worship, guidance, content | religious review and madhab neutrality, sources and citations, sacred-tier silence, no scores or streaks, offline use |
| AI features | E model and hosting, content source, allowed actions, fallback, limits, evaluation |
| Any process diagram the user shares | one item per open or red mark; summarise the diagram in bullets and state which readings are yours |

3. **Pre-answer before asking.** For each item, check the register and the sources read in Step 0. If answered: set `from` to the entry and its source, propose that answer with `conf:'high'`, and lower its priority. Only undecided items stay Blocker.

**Write `data.js`** in the kit's schema. Every item has an owner, what the prototype assumes, and a proposal with `conf` (high = from a Nusuk source; medium = industry practice or public source; low = Claude's judgement) and `src`. Proposals must be valid options and lean conservative where decision rights or privacy are open. Use `after` for dependencies. Fill `QMETA` with the parties table, the levels table where relevant, and the "what each answer unlocks" list.

**Publish** `questionnaire.html` as `index.html`, with `app.js` and `data.js`, then declare: `db` (root: read `view`, write `interact`), `user`, `assets` (`upload: "interact"`), `downloads`. The page already gives: topic or owner grouping, filters, "Use this proposal", uploads (PDF, CSV, JSON, Markdown, text, images, 20 MB), assign with due date, "Approved by the owner" sign-off, change log, Markdown and JSON export.

**Tell the user**: counts by priority and owner, which items the register pre-answered, and that contributors need Contributor access.

## Step 3 · Development handoff

Build with `tools/handoff_build.py.txt` and `tools/diagram.py.txt`; publish `index.html` plus `prototype.html`.

Sections: status tiles and a "not ready to build from" banner while blockers are open → prototype (embedded, with jump links) → architecture → end-to-end flow → lifecycle (as the business shared it, then what the person sees) → operating or support levels → screens and components (DL, Chat lane, Proposed, with Figma node links when a Figma file exists) → states per screen (loading, empty, error, offline) → acceptance criteria per screen (Given / When / Then) → API contracts with a sample payload → analytics events (named to the Notion event schema) → string table (key, Arabic, English, notes) → native notes (iOS and Android side by side) → edge cases → design questions (Figma kept as is, one row per conflict) → assumptions register → quality gates → plan. The embedded prototype runs at full page width, at least 960px high.

- **Quality gates table**: all eight gates with pass, partial or not done, and the evidence. Run a WCAG 2.2 AA pass on the prototype before marking gate 5. Never mark a gate passed without evidence.
- Diagrams: inline SVG, labelled arrows, dashed for integrations that need another party, one claim per figure.
- Every assumption carries its questionnaire code. Sample data and dummy dates are labelled as such.
- **Native notes**: write the iOS column with `swift-ios-skills` when it is installed (`ios-localization` for right-to-left and String Catalogs, `ios-accessibility`, `swiftui-navigation`, `swiftui-liquid-glass`, `activitykit` for Live Activities such as PrayerLiveActivity, `widgetkit`) and `figma-swiftui` for Figma to SwiftUI; values come from `NusukTokens.swift` / `NusukTokens.kt` and DESIGN.md M11, never from those skills. Say in the handoff which ones were used.
- **Figma leg**: when the user wants frames, load the Figma skills and push the agreed screens with DL library components; otherwise state that the handoff has no Figma frames yet.

## Keeping it current

When the user says answers are in: read them (`db_list` / `db_query` on the questionnaire), then
1. replace assumptions in the handoff with decisions, update counts, bump the draft number;
2. for every **approved** answer tied to a platform-level item, update the decisions register (move Open to Confirmed, with source and date). Never record a proposal or an unapproved answer;
3. update the prototype where an answer changes the experience.

## Reporting

- Lead with what was built and its state; say what was tested and what was not.
- Separate confirmed facts, your readings, and proposals.
- For reviews of the user's concept, end with: Here's what's strong / Here's what's weak or missing / Here's how I'd sharpen it.
- Save durable rulings to project memory and the register; never save assumptions as facts.