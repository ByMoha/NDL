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
- **Worked example**: Support-in-Chat. Prototype https://claude.ai/artifact/16SmC2t98t4cUKgZSwf9Wf · questionnaire https://claude.ai/artifact/89BcjJiM8EsBVWn9DyapYZ · handoff https://claude.ai/artifact/ELDyY1Hry5j23tRnrog1Fn.

## Step 0 · Ground it before asking anything

1. Load `nusuk-design-language`; `nusuk-content-writer` for copy; `nusuk-visual-system` only for illustration.
2. Read, in this order, and note what each already answers:
   - the platform decisions register;
   - project memory for the feature, plus `topics/dl-layout-rules`;
   - the project's Notion pages that apply: Project Canvas template, Targets and Objectives, Instrumentation & Event Schema, Metrics database, DGA Response, the Epic database entry for the feature (use the Notion tools; if unavailable, say which pages you could not read);
   - the Figma file for the feature if one is named (Figma is the source of truth over code).
3. Classify: intent or desire, realm, behavioural pattern with its five parts (Why, What, How, Where, Validate), placement (journey step, band, P-level), template contract per screen.
4. Check the never-ship list (M4) against the brief. If the brief breaks one, say so and build the compliant version.
5. Write the **Project Canvas** in the reply or as a short doc: problem, people, scope in and out, success metric with its guardrail, risks, what is unknown. Ask the user only what blocks the prototype.

## Step 1 · Prototype

Build with `tools/prototype_build.py.txt` and `tools/prototype_style.css.txt`.

- One page: DL tokens, bundle and (for conversational flows) the chat files inlined; React 18.3.1 from cdnjs. Page `dir="rtl"`, reviewer panel `dir="ltr"`. Phone frame 402 × 874 above 480px.
- A reducer drives the flow; `#stage` hashes replay it. The panel shows per stage: contract, components, decision, pattern, metric and guardrail, and the payload the back office receives.
- Include the non-happy states the feature needs: loading, empty, error, offline, permission denied, limit reached. List any you did not design.
- Review rulings, applied by default (also in the register): Modern Standard Arabic; Western digits; IDs read left to right; cards 26/18/18, related cards 8px; tokens only; back arrow points right in RTL; chat screens use close plus title; every action icon matches its label; a person reachable within two taps; AI answers only from approved content with a source, refuses rulings, cuts to the emergency route on danger words; destructive actions are Secondary (Fate) with a second confirmation; help sections are a drop-in widget in a real host page.
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

Sections: status tiles and a "not ready to build from" banner while blockers are open → prototype (embedded, with jump links) → architecture → end-to-end flow → lifecycle (as the business shared it, then what the person sees) → operating or support levels → screens and components (DL, Chat lane, Proposed, with Figma node links when a Figma file exists) → states per screen (loading, empty, error, offline) → acceptance criteria per screen (Given / When / Then) → API contracts with a sample payload → analytics events (named to the Notion event schema) → string table (key, Arabic, English, notes) → native notes (iOS and Android side by side) → edge cases → assumptions register → quality gates → plan.

- **Quality gates table**: all eight gates with pass, partial or not done, and the evidence. Run a WCAG 2.2 AA pass on the prototype before marking gate 5. Never mark a gate passed without evidence.
- Diagrams: inline SVG, labelled arrows, dashed for integrations that need another party, one claim per figure.
- Every assumption carries its questionnaire code. Sample data and dummy dates are labelled as such.
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