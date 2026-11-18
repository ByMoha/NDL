# DESIGN.md — Nusuk Design Language

Version 3.7.3 · 18 November 2026 · Owner: DL Manager (Sara), DL Advisor (Mohamed Auf).

You are designing for Nusuk, the faith companion for every Muslim: Hajj, Umrah, Rawdah visits, permits and bookings, and the daily practice around them (prayer, Quran, dhikr, charity). Nusuk is a trust instrument, not a consumer app.

**One file holds everything:** this root (always read), then modules M1–M13 (read the one the task needs), then Appendix A (the 53 services) and Appendix B (every journey step). The appendices are data: look a service or a step up, don't read them end to end.

## 1 · Load the right module

| Task | Load |
|---|---|
| Any screen, concept or critique | M2 Intent & desire, then the modules below |
| Colour, type, spacing, radius, effects, glass | M8 Foundations (values come from `tokens.json`) |
| A component: which one, its states and rules | M9 Components |
| Which service shows where, when and for whom; Today; pushes and notifications | M9S Surface allocation (+ Appendices A, B) |
| A screen of a known kind: landing, list, details, cart, payment, booking step, booking details, pass, sheet | M9S, then **M9T Template contracts**, then M9P |
| A section or a page: what goes where, in what order | M9S, then M9P Patterns & templates |
| A new pattern | M9P › Adding a pattern, then M9S |
| The Nusuk AI chat: answers, questions, AI tab bar, bot, tickets | M9 Components, then **M9C Nusuk AI chat** |
| Nudges, habits, the symptom-to-fix router | M3 Behaviour |
| Anything that touches ethics, money, worship, AI | M4 Trust (red lines) |
| Metrics, KPIs, guardrails | M5 Measurement |
| Words, Arabic first, numbers, localisation | M6 Writing |
| Logo, brand colours, imagery, illustration | M7 Brand |
| Contrast, targets, devices, screen sizes | M10 Accessibility & devices |
| iOS, Android, handoff to developers | M11 Platform & handoff |
| Past rulings and why | M12 Decisions |
| Process, the eight gates, evaluation, critique and review | M13 Process & gates |
| Who Nusuk serves and why | M1 Mission |

This one file is the same in the design system (`project/DESIGN.md`), the coded package (`DESIGN.md`) and the Nusuk project (`claude/DESIGN.md`). Machine-readable twins: `tokens.json` (values), `components/index.d.ts` (props), `templates/index.json` and `templates/contracts/*.json` (template contracts), `templates/*.json` (page models), `patterns/index.json` (patterns), `migrations/*.json` (changes), `native/NusukTokens.swift` and `native/NusukTokens.kt` (the tokens for iOS and Android), `CHANGES-2026-11-08.md`, `CHANGES-2026-11-09.md` and `CHANGES-2026-11-10.md` (releases for native teams).

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
- Screens and pages: place first (M9S), pick the template contract by job (M9T), fill each space only from its allowed list with patterns (M9P), apply the state, order by band, and change sections, not styles. If no contract fits, say so and build it as **Proposed**.
- Any new task: run the intake first (M13 › Intake): clarifications, the objectives in the DX Tracker's fields, an internal benchmark, Mobbin and Dribbble for structure, then the flow and the screens from DL components. Every prototype simulates native iOS motion and shows the status bar at 02:22 with the battery percentage (M13 › Prototypes).
- Critique and review: follow M13 › Critique and review protocol (strengths first; rule broken, why it matters, DL fix, severity S0–S4, ease E0–E4; no named rule means taste). End with "Here's what's strong / Here's what's weak or missing / Here's how I'd sharpen it."
- Before saying done, fixed or "matches Figma", show the evidence from this pass; otherwise say what was not checked.
- Anything the DL doesn't cover: say so, build it as **Proposed** with DL tokens only, and draft the request (name, need, evidence of reuse, use cases, where not to use, requirements, accessibility, tokens).
- Never invent values, components, statuses or service facts. If a value isn't in the tokens, read the system or ask; if a service description is missing, ask before using it.

---

# Modules

Read the module the task needs (router in §1).

---

## M1 · Mission, audience, contexts

Load when: framing a concept, a deck or a strategy question.

- Nusuk serves Muslims globally through two forces: **fulfilling intention** (Hajj, Umrah, permits, bookings: goal-driven) and **enlightening desire** (daily habits, Quran, prayer, dhikr, charity: identity-driven).
- Target: **200M engaged users**, not installs. That needs a repeatable growth and habit engine that delivers value fast, repeats reliably, keeps trust and monetises without damaging the mission.
- Nusuk holds a sacred place in each Muslim's life. Business goals are balanced with religious feeling. It is a trust instrument, not a consumer app.
- Contexts: before the journey (planning, permits, visas, packages), during it (rites, navigation, crowds, transport, health), after it (memory, return, giving), and every day (prayer, Quran, dhikr, charity).
- Audiences: pilgrims from abroad, residents and citizens, families travelling together, first-timers and returners, older people and people with access needs, in 35 languages, Arabic first.

---

## M2 · Intent & desire, five realms

Load when: starting any feature, flow, screen or section. Classify first.

| Aspect | Desire | Intent |
|---|---|---|
| Core nature | Emotional | Deliberate |
| Requires action? | No | Usually |
| Clarity | Can be vague | Clear and defined |
| Commitment | Low: a feeling | High: a decision |
| Triggered by | Wants, longing | Goals, plans, values |

### Five realms

| Realm | Motivation | Examples | Design implication |
|---|---|---|---|
| Spiritual | Intrinsic, faith | Forgiveness, closeness to Allah | Reverent, contemplative screens |
| Emotional | Relational, identity | Going with parents, legacy, peace | Shapes who plans and who is included |
| Transformational | Life shift | A new leaf, milestones, accountability | Going is a decision to change |
| Functional | Task | Booking, rites, navigation | Fast, confident, transactional |
| Supportive | Enhancing | Reminders, guides, sharing | Agency, clarity, contribution |

### Rules

- Write the classification before the layout: intent or desire, realm, pattern.
- One register per block: a spiritual block has no prices or deadlines; a booking block has no blessings.
- In page templates, intent comes before desire: what the person must do or has booked sits above discovery (M9P).

---

## M3 · Behaviour: principles, patterns, router, nudges

Load when: a feature must change behaviour, a metric is weak, or a nudge is proposed.

### The three principles (the 3 Is)

1. **Intuitive:** people feel confident and never lost; enough guidance for the next step, a clean interface, universal conventions.
2. **Engaging:** every screen earns an action (actionable engagement) or understanding (informative engagement). Passive screens fail.
3. **Intelligent:** use data and context to adapt and reduce effort; act proactively, explain why, keep people in control.

### Diagnostic router: start from the symptom

| If | Check | Apply |
|---|---|---|
| Adoption is low | Attention & cognitive load | Simplify, cut steps, three actions not thirty, editable defaults |
| Intention exists, follow-through fails | Present bias, if–then plans | Micro-actions under 30 s, context prompts (after prayer, before sleep), soft if–then plans |
| People stop because unsure | Feedback & reassurance | "You're on track", calm closure, clear confirmation |
| Backlash or distrust | Framing & autonomy | Positive, humble framing; restore control |
| Growth depends on community | Social norms | Social proof only when true and privacy-safe |

### Nine patterns

Attention & cognitive load · motivation & present bias · learning, reinforcement & feedback · framing, emotion & meaning · self-control & commitment · social psychology & norms · valuation biases · scarcity & urgency · identity, autonomy & intrinsic motivation. Document each use in five parts: **Why** (mechanism) · **What** (behaviour) · **How** (design method) · **Where** (Nusuk placement) · **Validate** (metric, guardrail, risk).

### Nudges

Choice architecture ✓ · commitment devices ✓ (never a pledge to the app) · feedback ✓ (private, non-competitive) · framing ✓ (no fear, no FOMO) · social proof: with care · anchoring: with care (anchor on correctness) · endowment: with care · scarcity and urgency: truth only (real permit capacity, real seasonal windows) · **decoy: banned**.

### Hook, Nusuk version

Trigger (contextual) → action (one ayah, one dhikr set) → reward (calm closure, meaning) → investment (a focus and plan the person owns). The habit serves the person's intention, never the app's.

### Patterns and templates in the DL

Each DL pattern (M9P) carries its behavioural logic in its card: e.g. Guide = private commitment checklist; PlaylistRow = autonomy, nothing autoplays; ListSideBySide = present bias, show the duration.

---

## M4 · Trust and ethics: red lines

Load when: anything touches money, worship, data, AI, urgency or social features. Red lines are never traded off.

### Never ship

- Streaks and streak shame
- Leaderboards, ranks, points or scores for worship (the `Leaderboard` pattern is a featured-content layout, never a ranking of people or worship)
- Countdowns, FOMO, loss framing
- Random rewards
- Manufactured scarcity or urgency on anything, and any urgency on a spiritual decision
- Decoys
- Hidden fees, pre-selected add-ons, pre-ticked consent
- Disguised ads
- Feeds of other people's worship
- Surveying the ibadah
- Timed or celebratory ritual completion
- GPS-authoritative ritual counts
- AI issuing rulings
- Madhab partiality
- Fabricated reviews or testimonials
- Offers in pre-desire (State 0): meaning, never offers (M9S)
- Commerce in sacred windows, at rite steps, or bought into render bands 1–5
- Monetising a return after a lapse; streak-loss or guilt framing on return
- Variable rewards in a worship season (e.g. mystery reveals in Ramadan)
- A booking control shown to someone without the authority to book (P0: Dependents, Organised groups)

### Standing test

Would it still be acceptable if the person saw exactly how it works? Does the deadline exist without the campaign? Is there a guardrail metric beside the success metric?

### AI

AI suggests and explains; people decide. AI never issues religious rulings, never invents service facts, and has amendment rights only in the DL: humans override, in writing.

### Holds and timers

A booking hold timer appears only when inventory is truly held: lenient, the reason stated, no ticking-clock pressure.

---

## M5 · Measurement

Load when: defining success for a feature, section or template.

- **North Star:** Weekly Meaningful Actions per Active User (WMA/WAU). Meaningful actions are validated behavioural outcomes with thresholds (prayer check-in, Quran session ≥ X, dhikr set, charity, booking milestone, permit confirmed), never taps. Login alone is not active.
- **Active user:** completes a meaningful action (preferred), starts a core workflow step, or views a key detail and acts on it.
- **A · Adoption:** A0 first value moment in the first session · A1 activation within 24 h · A2 commitment within 7 days. Supporting: time to first meaningful action, drop-off points.
- **B · Engagement:** WAU/MAU, meaningful actions per WAU, loop repeat (3+ a week), routine stability, return after lapse within 48 h (the mercy loop), feature → D7/D30 retention uplift.
- **C · Satisfaction & trust:** moment CSAT after stable outcomes only; Trust Index (payment success, refunds and chargebacks, complaints per 1,000, 48 h reopen, rating trend, notification opt-out).
- **D · Revenue:** GMV, funnel (view → hold → payment start → success), payment failure, hold expiry, refunds by reason.
- Every success metric is paired with a guardrail. DX targets: CSAT 86, app rating 4.6.

### Placement (M9S)

Desire → intent conversion at the gate · search fallback rate per service after a P3 demotion · positional accuracy ≥ 95% per P4 trigger · GR-01 return after lapse · notification opt-out by tier T0–T3 · T3 weekly cap · Today item → meaningful action, per band. Session value density is exempt at rite and waiting steps.

### Pages and sections (templates)

Per section and per position: impressions → item taps → completed meaningful action. Guardrails: scroll depth without action, back-outs from the first tap, complaint themes. Compare section orders with a holdout before changing a template for everyone.

---

## M6 · Writing, voice, localisation

Load when: any copy, label, error, notification or translation.

- Arabic first. Full design QA in Arabic and English; the other 33 languages get automated checks (expansion, truncation, script fallback, RTL smoke test). Mirror for RTL.
- **Digits 0–9 in every language**, never ٠١٢٣ and never mixed. Isolate numbers in RTL text.
- Sentence case. Buttons name the outcome ("Book your visit", "Keep booking", "Cancel booking"); never OK, Submit, Click here.
- Person to person, about their situation. Errors: one line of empathy, what happened, how to recover. Loading names what is loading.
- Faith-led or logistical, never both in one block; no blessing on receipts or errors. Madhab-neutral; quote and cite; mustahab as invitation; one ayah or hadith per short piece; ﷺ in full.
- Makkah, Madinah, Quran, Manasik, Duaa. نسك without diacritics. Arabic: أرسلنا / أُرسلت, never تم; احجز for the action, تصريح names the document.
- Tone: clear and warm, courteous, credible, reassuring, faithful in its natural place. Never preachy, harsh, over-promising, partial or stiff.
- Section titles (M9P) are short noun phrases (وجهات مميزة, خدمات مميزة); tags start with # and name the content stream (#المحتوى, #الصوتيات).
- Placeholder text in templates (e.g. `[الاسم الأساسي]`, `%s`) is replaced before release; never ship a placeholder.

### House rules (14 November 2026)

Condensed from the Nusuk writing guide and the copy rules confirmed in production review (account skills `nusuk-content-writer`, `nusuk-voice-rules`, `nusuk-ux`). Arabic is the source; rebuild English from it. Those skills hold the full guide; when they disagree, the stricter rule wins and this list records the outcome.

- **Who speaks.** Speak to one person (أنت). Nusuk says نحن only for caring or positive acts: «استلمنا بلاغك»، «عثرنا على غرضك»، «سنُشعرك بأي جديد». Adverse outcomes are agentless and never use تم: «أُلغي حجزك»، «انتهى حجزك»، «رُفض الطلب»، «أُغلق البلاغ»; never «ألغينا» and never «تم إلغاء». English the same: "Your booking was cancelled", not "We cancelled your booking". Apologise (نعتذر) only for a real service failure, never for a no-show.
- **Refunds.** One wording everywhere. The DL uses the neutral «سيُعاد المبلغ» / "The amount will be refunded" until the content owner chooses between it and the caring «سنعيد المبلغ».
- **People are not items.** Lost and found for a person uses reunion words: «الشخص الذي تبحث عنه»، «لاصطحابه»، «لمّ الشمل»; never «المفقود» or «استلام».
- **Placeholders.** A name in `%s` has no known gender, so no verb agrees with it: «أهلية %s»، «بإمكان %s», not «ستستنفد %s». Keep the token exactly `%s` (RTL may display it as s%; check the stored string, don't "fix" the rendering).
- **Counted nouns: six Arabic plural forms** (CLDR zero, one, two, few, many, other). Write all six; the one usually missing is many (11–99): «شخص»، «شخصان»، «%s أشخاص»، «%s شخصًا»، «%s شخص». Test 0, 1, 2, 3, 10, 11, 99, 100.
- **Statuses and steps.** A status agrees with the card's noun; when the chip does not show the noun, name it: «أُلغي الحجز»، «رُفض الطلب»، «انتهت الصلاحية». A step label names the stage («المراجعة»، «الشحن»), never a past-tense fact, because it also shows before the step happens; the current step's details carry the sentence. A variant's name and its copy say the same thing.
- **Counted nouns, per sentence.** Write the six forms for each sentence, not each noun: case changes the dual and the many form («الإقامة بعد دقيقتين», but «دقيقتان» alone). Two values take positional tokens (%1$s, %2$d) so a translation can reorder them. For nouns ending in ة, many and other read the same; still supply both.
- **Grammar checks.** Dual in construct drops the nun («باقتَي عمرة»); hamzat wasl takes a bare alif (استرداد، استثناء، انتظار); منقوص indefinite takes tanwin («جارٍ»، «مستوفٍ»); «لا» is followed by a space («لا يمكن»); «أكّد» without على; «ساهم في»; أصبح takes a منصوب خبر.
- **Cut filler.** Drop من/الذي/التي, هذه/تلك, هنا/هناك, تماماً/فقط when the sentence stands without them: «تفاصيل حجزك», not «هذه تفاصيل حجزك». No قام بـ / القيام بـ.
- **Terms.** ضيف الرحمن in formal and faith address, أنت in direct address, never «المستخدم». ماء زمزم (singular). الروضة الشريفة, never الروضة alone; English "Rawdah" without "the". قيد المعالجة / قيد التوصيل, not تحت. بيانات for personal data, not معلومات. مبارك, not مبروك. مكة المكرمة، المدينة المنورة; English Makkah, Madinah. Service names as written: نسك، استكشف، زاد، مصحف نسك، Nusuk AI.
- **States.** Loading names the thing: «جارٍ تجهيز تصريحك…», not «جاري معالجة الطلب». Errors say what happened and the next step without blame or codes: «تعذر تحميل التصريح. حاول مرة أخرى.» Success is calm: «حجزك مكتمل.»
- **No pressure.** Never سارع، بادر، لا تفوّت، آخر فرصة, "Don't miss", "Hurry". "Last seats" only when literally true, and never with an urgency verb.
- **Faith text.** A verse in ﴿ ﴾ with surah and ayah; a hadith with its short source; ﷺ in full; kept apart from marketing; one verse or hadith per short piece; the content team's approved wording only, and sensitive religious content goes to human review. Hajj and Umrah are a journey, never a product.
- **English.** Global English: plain, no idioms, sentence case, Western digits, a comma over 999 (10,000), 12-hour time ("8 PM").
- **Before publishing, ask:** is it clear to someone outside the field, can a word go, is every term the approved one, does it translate without losing meaning, does it sound like Nusuk?

---

## M7 · Brand and visual

Load when: decks, campaigns, covers, illustration, imagery.

- Source: the Nusuk Brand Guidelines, Ver 1.0, edition of November 2026 (received 17 November 2026; full notes in the design system's `04-brand.md`, pages in its Brand, Illustration, Art and Applications assets).
- Brand colours (#EAB355 gold, #070808 Kiswah black, #47874A Dome green, white; secondaries Deep Blue #16125F, Sacred Teal #3B8C87, Sunset Lilac #9C7BC9, Desert Rose #C97B84, Stone Sand #B8AA96, Earth Terracotta #C1624C) are for decks, campaigns, covers and illustration, never product UI. Gold leads, white breathes, black anchors, green is a focused accent (highlights, selected UI elements, calls to action). Scenarios: Makkah or Madinah Primary (white 75, gold or green 15, Kiswah 10), Supporting (Kiswah 75, gold or green 15, white 10), Illustration (white 50, Deep Blue / Cool Grey / Lilac / Stone Sand 35, gold or green 15), Data (white 58, the six secondaries at 7 each: charts use them in that order).
- Product UI uses tokens only (M8). Quran screens and the Faces, Hints and Services tiles use the fixed `quran-*` palette.
- Logo: use the files only. Black lockup is the default on light, white on dark and imagery, gold for selected branded applications. Clear space 1X; minimum width brandmark 25 px (8 mm), full lockup 70 px (25 mm). Never stretch, rotate, recolour, outline, add shadows or gradients, shrink a part, make an unofficial lockup or put it in a box.
- Imagery is calm, clear and authentic, in four types: journey and experience, sacred landmarks, spiritual atmosphere, architecture. Two treatments: selective focus (blur away from the focal point, soft transitions) and soft grain (Soft Light, 50% at most). Portraits of scholars and reciters are content with usage rights; never generate them.
- Illustration: soft, calm, simple, abstract watercolour. Deep Blue is the foundation, with a gold or a green accent; Cool Grey for disabled and inactive states; alternative moods Gold + Lilac and Green + Stone Sand. Finish with soft grain, 50% at most. Formats: full screen 9:20 (1440 × 3200), half screen 9:10 (1440 × 1600), leaderboard 6:1 (1440 × 240), thumbnail 16:9 (1280 × 720) and 2:3 (800 × 1200). Choose from the library first; a new one is made with the Nusuk visual system skill (Create · Format · Must include) and reviewed against the library.
- Painting language (the `nusuk-visual-system` skill in the nusuk-dl plugin, 14 November 2026; full text in that skill's SKILL.md and `references/` and in the design system › Brand): one focal subject or connected passage; a few purposeful watercolour planes on reserved paper; confident contours only where they identify the subject, supporting architecture and crowds as pale suggestions; luminous near-white upper washes, broad blue dilutions, restrained soft gold; paper grain, no glossy CGI, outlines or decorative wisps. The painted blue matches the selected reference set (Makkah City, SEL-09) across its dark cores, midtones and pale washes rather than one flat hex; no electric blue, cyan drift or neutral black. Edits stay local: a colour pass does not redraw, a position pass does not repaint.
- Iconography: simple forms on a shared grid, consistent strokes, rounded caps and joins, open gaps, optical balance; outline, two-tone or filled, one treatment per context. Product screens use the DL Icons file.
- Art direction (brand layouts: posters, banners, social, store graphics, decks; product screens keep DL spacing): margin 5% of the longest side on every edge, nothing in it. Graphic devices: the Nusuk Frame (from the brandmark's outer shape) for general communication, the Makkah Frame (Kaaba) and the Madinah Frame (Green Dome) for their destinations; keep each device's proportions; one dominant element. Social feed: groups of three, Gold → White → Black → White → Green → White.
- Illustration library: 24 subjects (Hajj, Umrah, Jamarat, Arafa, Rawdah, Motawef; Umrah Journey, Ihram, Tawaf, Maqam Ibrahim, Sa'i, Tahalul; Makkah, Madinah, group, hotel, flight, train; golf cart, concierge, payment, visa, sacrifices, childcare). A new one: `$nusuk-visual-system` with Create, Format, Must include, then "lead the creative and art direction, generate the visual, then QA and refine it against our approved references".
- **Nusuk Companion.** Nusuk personified, never a chat assistant, a floating bubble, a mascot, a launcher or a spiritual guide. Three beats only: nudge (what, when, one action, at a flow boundary), hand off (deep link; the service speaks in its own voice), step back (identity only; support is the door). Hats set tone, not reach: logistical may nudge; spiritual is present only (no initiation, praise or tally; rulings quoted and attributed); transactional only where two services collide; institutional is an accountable "we" with no face on a rejection; marketing never reaches into the app. The DL Nudge (M9) is the Companion's nudge.
- Hero images (Featured BG) fade into `surface-screen-bk`; the title sits on a soft white glow, never on a dark scrim.

---

## M8 · Foundations

Load when: any colour, type, spacing, radius, effect, glass or motion decision. Exact values live in `tokens.json` (its `version` names the release); this module says how to use them.

### Themes

Quranic Illumination (gold, default) · Dome of the Prophet (green) · Court Fabrics (lavender), each light and dark: `gold-light`, `gold-dark`, `green-light`, `green-dark`, `lavender-light`, `lavender-dark`. Themes swap the accent family; everything else is shared. Set `data-theme` on `<html>`.

### Colour roles (gold light → dark)

| Role | Token | Light | Dark |
|---|---|---|---|
| Screen background | `surface-screen-bk` | #F1F3F4 | #070808 |
| Cards, sheets, inputs, bars | `surface-01-white` | #FFFFFF | #111315 |
| Quiet fill | `surface-02-ivory` | #F5F5F5 | #111315 |
| Hairline | `surface-03-pearl` | #E5E5E6 | #171A1C |
| Headings, body | `text-heading`, `text-content` | #070808 | #FFFFFF |
| Secondary text | `text-subtle` / `text-note` | #303336 / #636669 | #CBCCCD / #97999B |
| Accent (follows theme) | `surface-illumination`, `text-link` | #D99726 (green #1A4C27, lavender #7F26D9) | #F5B13D (green #61D17D, lavender #B26DF8) |
| Soft accent, selection border | `surface-longing` | #F5B13D | #D99726 |
| Selected fill | `surface-shade-6` | #FDFBF6 | #342409 |
| Primary CTA | `button-primary-surface` + `button-primary-content` | #070808 + #FFFFFF | #FFFFFF + #FFFFFF (C7) |
| Secondary CTA | `button-secondary-surface` + `button-secondary-content` | Ivory 70% + #070808 | #111315 70% + #FFFFFF |
| Green CTA (new) | `button-green-surface` + `button-green-content` | #5DB364 + #FFFFFF | #ECFDF3 + #FFFFFF (B12) |
| Status | `alerts-surface-*`, `alerts-text-*`, `alerts-icons-*` | info #E4F1F8/#118CE4 · success #F0FFF5/#5DB364 · warning #FFF1E4/#FF6D01 · error #FFF2F1/#FF4136 | inverted |
| Scrim | `overlay-backdrop` | black 50% | — |

Never raw hex in product UI. The `--buttons-*` tokens were removed on 5 November 2026; use `button-*` (M9). Known contrast limits (kept exact, see Known issues): `text-link` gold light 2.5:1 on white; status text on soft fills 2.5–3.2:1 (C2); white on gold and solid status fills 2.5–3.6:1 (C9, C10); C7, C8, B7, B12, B16. On an accent fill choose the content colour per theme, never a fixed white (M10).

### Type

IBM Plex Sans Arabic (Arabic and Latin; English mode in Figma uses Ping AR + LT). Each style in Light 300 and Regular 400, line height 1.28: Hero 48 · Display 1 32 · Display 2 28 · Headline 1 24 · Headline 2 20 · Body 1 18 · Body 2 16 · Notes 1 14 · Notes 2 12. Light for display, Regular at 20 and below. Pick a style, never a size; if copy doesn't fit, shorten it. No SemiBold (UX, 14 November 2026: Light and Regular only). Text sits centred vertically in chips, inputs and buttons.

**Hero** (48; UX answer to the iOS review, 14 November 2026): both weights stay. Build the weight that the Figma layer's style names, `Light/Hero` or `Regular/Hero`; with no layer to follow, the display rule above gives Light. One Hero per screen, for the number or title that is the screen's point (a countdown, a total, a counter). No library component uses Hero today (Known issues F28), so it appears only in screens.

**Latin text:** UX answered «IBM Plex Sans Arabic everywhere» (iOS review, Android audit), so native apps draw Latin with IBM Plex Sans Arabic's own Latin glyphs. Foundation's English mode still names Ping AR + LT (`font-english`); the design team confirms in Q-D17.

### Space, size, radius

- Space (phone; tablet and wide in brackets where they differ): xxs 4 (8) · xs 8 · sm 12 (16) · nr 18 (20) · md 20 (24) · lr 26 (32) · xl 32 (48) · xxl 48 (wide 64). Phone gutter and card padding 18; pattern rows 8. Since tokens 3.8 every value that changes by mode is data: `modes` in `tokens.json` (phone, tablet, wide) and `NusukLayout.phone` / `.tablet` / `.wide` in the native files.
- Sizes: buttons LR 48 · MD 44 · SM 38 · XS 30 on phones and tablets (Wide 54 / 48 / 38 / 26), and the toolbar's glass controls follow MD (44) · chips XS 18 · SM 20 · MD 24 · LR 28 · avatars 24 / 42 / 56 / 72 / 100 · inputs 62 · icons 24 (20 in fields and bars, 16 in notes).
- Size tokens from component files (tokens 3.6): `chip-*` from 🍟 Chips › `_Chips Setup` (height 18 / 20 / 24 / 28, padding, icon-side padding, icon, gap, label size for XS–LR) and `control-*` from 📻 Switches, Checkbox and Radio › `_Switches Setup` (checkbox and radio 18 / 18 / 24, switch track 32 / 42 / 54, knob, icon, gap, label size for SM–LR). Also `opacity-none`, `border-none` and `glass-bottom` from ⚙️ Foundation.
- Radius: full (capsule) for buttons, chips, tabs, switches, avatars, glass controls · 18 cards, notices, tiles, inputs (Radius/MD, from 12 November 2026; search and counter fields are capsules), Navigation=Off glass · 14 XS tiles (Radius/S) · 12 select cards, day tiles (drawn without a variable) · 42 sheet tops · 4 checkbox and tick box.

### Effects

- Cards: `Glass/Full` (drop 0 1 2 −1 #1A1C1F 4%, inner 0 5 10 #1A1C1F 2%, inner 0 1 0 white 50%, GLASS frost 2) → CSS `--glass-full`; the frost is 1 px in CSS and invisible on an opaque card.
- **Figma blur is twice CSS blur.** Every Figma blur radius (background blur, layer blur, GLASS frost) is halved in CSS: frost 6 → `blur(3px)`, background blur 10 → `blur(5px)`, layer blur 70 → `blur(35px)`. The `blur-*` tokens keep the Figma radius; write `blur(calc(var(--blur-md) / 2))`. SwiftUI `.blur(radius:)` likewise takes about half the Figma value.
- Where the platform has no glass material (Android, the web, iOS before 26): `Glass/Andriod Blur` (Figma spelling) → `glass-android`, inset 0 5 10 10 Ink 5%, with background blur 10 (CSS 5 px) (14 November 2026; CSS value corrected 17 November).
- Media cards `shadow-xs`; sheets `glass-full` on Bottom Sheet BG, corners 42 at the top and 54 (`radius-ios`) at the bottom (read 14 November 2026; was `shadow-05` and 32); tab bar 0 −6 30 −12 Ink 5%; avatars in member cards −6 6 30 −12 Ink 5%.

**Every effect style in ⚙️ Foundation** (read 14 November 2026; UX: Glass, Noise and Treatment all apply on iOS, DL-40). Shadows are x y blur spread colour; Ink is #070808, Graphite #1A1C1F.

| Style | Figma effect | Native |
|---|---|---|
| `Shadow/XS` | drop 0 1 2 −1 Graphite 4% | `shadow-xs` |
| `Shadow/SM` | drop −6 6 12 −6 Graphite 5% | the SwiftUI `.shadow` radius is about half the Figma blur; shrink the shape by the spread |
| `Shadow/LR` | drop −6 9 30 −9 Graphite 8% | as above |
| `Shadow/XL` | drop −6 10 40 −6 Ink 10% | as above |
| `Shadow/UP` | drop 0 −10 30 −10 black 15% (bars that sit on content) | as above |
| `Shadow/OS` (new 17 Nov 2026) | drop −2 0 2 · 2 0 2 · 0 0 1 spread 0.5, all Graphite 5% | `shadow-os`; the Shadows layer of every Glass BG and of Select Card |
| `Glass/Top` | inner 0 7 10 Graphite 2% (hard light) · inner 0 1 0 white 50% | inner shadows: Compose `Modifier.innerShadow()`; SwiftUI an inner stroke and gradient overlay |
| `Glass/Bottom` | inner 0 −10 10 white 40% (hard light) · inner 0 −1 0 white 100% · drop 0 1 2 −1 Graphite 4% | as above |
| `Glass/Full` | drop 0 1 2 −1 Graphite 4% · inner 0 5 10 Graphite 2% (hard light) · inner 0 1 0 white 50% · GLASS 2, light 0.8 at 150°, refraction 0.4, depth 40, dispersion 0.4 | iOS 26 `glassEffect`; before 26 and on Android `Glass/Andriod Blur` |
| `Glass/Andriod Blur` | background blur 10 · inner 0 5 10 10 Ink 5% | `glass-android` |
| `Noise/Overlay`, `Noise/Color Dodge` | noise, duotone, grain 1.2, density 0.6: black 20% and white 15% | a tiled noise texture (or `CIFilter.randomGenerator()` on iOS, an AGSL shader on Android 13+), blended as the style name says |
| `Noise/Soft Light` | noise, multitone, grain 2.5, density 0.2, black 5%, opacity 50% | as above, soft light |
| `Treatment/Color Dodge` | noise, duotone, grain 1.2, density 1.0: black 20% and white 15% | as above, colour dodge |
| `Treatment/Soft Light` | the same values as `Noise/Soft Light` | as above |
| `Treatment/Top Blur` | layer blur 30 | SwiftUI `.blur(radius:)` at about half the Figma value, Compose `Modifier.blur()` on Android 12+; check against the Figma render |

Glass BG stacks several of these (the layers table below). Since tokens 3.12 every drop shadow (Shadow/XS to OS, avatar and the older Shadows/01 to 05) is also generated for iOS and Android as `NusukShadow` layer lists (M11). Noise and Treatment are textures for imagery and hero surfaces: apply one only where the Figma layer uses it, never on text.
- Borders 1 px Pearl, 1.5 px `surface-longing` for selection, 2 px Ink for focused fields. States: hover .08, pressed .12, disabled .38 (buttons .4).
- No blend modes in code (Linear Burn in Figma is dropped, L3). Glass BG's linear-burn and linear-dodge rims become normal-blend inset shadows (`glass-rim`), set against Figma's render. Since 17 November (tokens 3.11) the white band at the bottom is softer: 0 −8 10 −4 at 75% (was 0 −6 3 −1 at 90%), at the DL Advisor's request; the Highlighted and Active rims follow.

### Glass BG (Foundation, exact recipe)

Read on 17 November 2026 from ⚙️ Foundation › 🎨 Colors › [Glass BG](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo?node-id=65346-1296) (12 variants) and `_Glass BG Master` (65640:511), with every Glass BG instance in the DL files. It replaces the Current × Navigation × Dark set described here until 16 November. Code: `.nk-glass` and the `GlassBG` card.

Glass BG is the surface of every floating control. Variants: **Mode** (Default, Highlighted, Active) × **Dark** (Off, On) × **Glass** (On = iOS Liquid Glass, Off = Android). Every variant is one `_Glass BG Master` instance, radius full, with four layers.

#### Layers (bottom → top)

| Layer | Figma | Web (`tokens.json`) |
|---|---|---|
| Shadows | `Shadows / Type=OS`, since 17 November 2026 bound to the effect style `Shadow/OS`: drop −2 0 2, 2 0 2 and 0 0 1 spread 0.5, Graphite 5%. The layer now carries a 1% fill (white, Ink when Dark, luminosity) so that Figma draws the shadows of an otherwise empty frame; code and native draw the shadows directly and skip that fill | `shadow-os` |
| Default Fill | Radial from the top centre, radii 113.4% × 50%. Light: white 10% → 50% (Glass Off 20% → 70%). Dark: Ink 30% → 80% (Glass Off 20% → 70%), paint at 70%. Active: `Surface/Longing` (Dark + Glass Off: `Surface/Illumination`) | `glass-fill` (white 30% → 50% on the web: refraction evens Figma's fill out), `glass-fill-dark` (Ink 44% → 56%), `glass-fill-off`, `glass-fill-off-dark` |
| Active Fill | Highlighted and Active only. Glass On light: radial clear → Longing (centre 51% / 70%, radii 37% × 33%) under a progressive layer blur 0 → 70. Glass On dark: linear Longing 70% → Ink 0%, layer blur 20, not clipped (a glow past the edge). Glass Off: white 40% (Dark: Ink 40%) + radial white → Longing (Dark: Ink → #67460E) under a progressive blur. Active + Glass Off hides it | `GlassBG` draws it as a child layer |
| Glass Effect | No fill. GLASS: frost 6 (`Liquid Glass/Frost - Regular`), refraction 0.7, depth 30, dispersion 0.2, light 0.25 at 0°. Inner 0 40 r30 s−40 #E6E6E6 linear burn; inner 0 ±40 r10 s−40 #282828 linear dodge (Dark: #1A1A1A). Hidden when Glass=Off | `blur(3px)` + `glass-rim` / `glass-rim-dark` |
| Glass=Off | The master takes `Glass/Andriod Blur`: background blur 10 + inner 0 5 10 10 Ink 5% | `blur(5px)` + `glass-android` |

#### What each component keeps

Instances hide layers. The DL names the combinations (`kind`):

| kind | Layers kept | Components |
|---|---|---|
| `control` | Shadows + Glass Effect whose fill is overridden with a sheen (white 50% at 12% from the bottom → clear at 152%); Default Fill hidden | Toolbar icon blocks, logo, Wallet, date and booking pills, Featured Header buttons |
| `field` | Shadows + Default Fill + Glass Effect | search bars, Top Tabs, bottom-bar fields (Primary/Small, Marketplace, Filters, Inner Pages), the standalone tab, the current tab pill, the AI tab bar |
| `bar` | Shadows + Glass Effect | the Primary bottom bar |
| `flat` | Default Fill only, Glass Off: Ivory (Dark: Ink radial) | Secondary Pages / Tabs track; Header Tabs |
| `card` | solid white + `Glass/Full` | Option Card, Categories, Services Box, Add to Cart (the older Glass BG in 🃏 Cards) |
| fill | Default Fill only, in the button colour | every CTA (🕹️ Buttons) |

Dark=On is the Darkmode toolbar (over imagery) and, in code, dark themes. Highlighted and Active modes are in the set but no DL component uses them yet.

#### Native build

- **iOS 26 and later (Glass=On):** the system Liquid Glass, `.glassEffect(.regular, in: Capsule())` (`RoundedRectangle(cornerRadius: 18)` for cards); group neighbours in a `GlassEffectContainer`. Do not rebuild the GLASS numbers or the web rims. `control` adds no tint; `field` may add the Default Fill as a white 10% → 50% radial under the content; Active is `.regular.tint(surfaceLonging)`. Dark=On: the dark glass the system draws on dark content, or `.tint(surfaceInk.opacity(0.3))` over imagery.
- **iOS 18–25:** `.background(.ultraThinMaterial, in: Capsule())`, then the Default Fill radial, then the OS shadows (three `.shadow` calls at about half the Figma blur).
- **Android (Glass=Off, exact):** background blur 10 in Figma units (Haze: `hazeSource` on the content behind and `hazeEffect` on the control with about 5 dp; it blurs with `RenderEffect` on Android 12+), then `glass-fill-off` (`glass-fill-off-dark`), then the inner shadow 0 5 10 10 Ink 5% (Compose 1.9 `Modifier.innerShadow`), then the OS shadows (`Modifier.dropShadow`). Without a blur (before Android 12), draw the fill over `surface-01-white` at 85%. Haze changed its API in 2.0: pin the version.
- **Web:** `.nk-glass` with a `kind`; `glass={false}` or `data-glass="off"` draws Glass Off; `prefers-reduced-transparency: reduce` and browsers without `backdrop-filter` get an opaque fill.

### Motion

100 ms press and toggle · 250 ms sheets, tabs, accordions, page dots · 400 ms page and hero. Ease-out (0,0,.2,1) in, ease-in (.4,0,1,1) out, ease-in-out (.4,0,.2,1) move. Calm; respect reduced motion; no celebratory animation on worship. **No resting loops:** an attention cue (the Nusuk AI shimmer, a highlight) plays once, under 5 s, and replays only for a new reason; only a wait indicator (spinner, typing dots) may loop, and only while the wait lasts.

Prototypes simulate native iOS transitions and keep these values for component interactions (M13 › Prototypes, DL-44).

### Icons

Hugeicons (stroke, 24 grid) and Nusuk icons, by Figma name (94 in code). `icons-black` default, `icons-gray` inactive, `icons-illumination` accent. Mirror directional icons in RTL. No emoji as decoration.

---

## M9 · Components

Load when: choosing or configuring a component. Each component card in the design system holds props, anatomy, logic and known issues; this module holds the cross-cutting rules and the specs native teams need.

### Inventory (by family)

- **Actions:** Button (CTA: Kind Primary/Secondary/Ghost × Size LR/MD/SM/XS × State × Icon × Fate; `onDark`; `tone="green"`). One Primary per screen.
- **Inputs:** TextField (12 Figma types × Status × Filled since 14 Nov, 13 in code with calendar; radius 18, `Shadow/XS`; search and counter are capsules), Hint (5 types: Hint, Info, Warning, Error, Success), FileUploader, Chip, StatusChip (48), Switch, Checkbox, Radio, SelectCard, DropdownItem.
- **Navigation:** Toolbar (23 types × Darkmode), BottomNav (6 screens, `inner-pages` since 15 Nov), NavTab, Nudge, TabBar (12 action bars; its home types render BottomNav since 17 Nov), HeaderTabs, CountBadge, Pagination, ProgressRing, CircularProgress (new 17 Nov), VerticalStepper, Steps, SectionHeader, SectionTitle, IconBlock, SearchBar, HomeItem, Glass (`kind`: control, field, bar, flat, card), GlassBG (the 12 Glass BG variants with layer switches, 17 Nov).
- **Overlays:** BottomSheet (Top Action Grabber, Arrow, Static), DirectionSheet, StatusSheet (Bottom Sheet's 7 statuses; 15 of the 19 General Bottom Sheet types as `template`, 17 Nov), ReasonSelection, CollapsedSection.
- **Feedback:** NoticeBar (CTA, Close, Description; `hug` for NoticeBar Location), Alert (`stacked` = System Update), EmptyState (Full Page, List), SectionError, AppNotification; live activities and Dynamic Island.
- **Cards:** MemberCard, RequestCard (11 types; Figma has 12 since 11 Nov), OptionCard (13), MediaCard (Figma 24 types; coded with `layout`, `outOfStock`, `type: 'ad'` and `type: 'charity'` (Charity Card, 17 Nov); Museum not coded: F42; ADS must carry an ad label: F46), AddToCartCTA, PriceOptions, CategoryTile, ProductTile, FaceTile, PlaylistCard, HintWidget.
- **Data display:** Avatar, AvatarGroup, RatingBar (Rating Bar and Ratings Box, Mini, Standard; a 1–5 input), ReviewCard, ReviewSummary, FeedbackEmojis, DayPicker, DayTab, TimeSlot, PrayCard, InfoTile.
- **Travel (17 Nov, from 🏖️ Travel › Travel):** FlightTicket (rebuilt: Full, Mini, Selected, Skeleton), Ribbon, FromTo, DateRange, FeaturedAirport, FeatureBox, VisaUserBlock, HotelCard.
- **Features:** PaymentDetails, SoundPlayer, ChatMessage, StepCard, QRCodeStatus, DetailsListItem, StartJourney, PrayerLiveActivity, MapPin.
- **Market (🛍️ Market library, new 10 November):** 15 public sets and 5 private in Figma on 17 November (was 17 public: Breathing Effect left the file and Select Location became a set); not coded yet apart from the shared parts above (see Market below).
- **Nusuk AI chat (Proposed lane, 11 November 2026; counts of 14 November):** 41 exports from 💬 Chat UI in `chat/` (NusukChat 2.8.5, 17 November: on DL 3.10, one bot per run of Nusuk messages, with English labels via `setLang` and suggestions as DL Button MD via `buttons`): 4 DL, 23 variants of ChatMessage, TextField, SelectCard, Chip, TabBar, FlightTicket and OptionCard, and 14 new (Bot, BotNote, BookingTicket, LogosGroup, HotelCard and the chat answers). Every value comes from a DL token except the proposed `chat-*` values: 35 in the stylesheet, 43 in `tokens.proposed.json`, 12 of them type aliases. A chat component becomes DL when its Figma set is published and the DL Manager accepts its card; M9C lists the Figma source and status of each.
- **Patterns and templates:** see M9P.

### Cross-cutting logic

- Configure, never restyle. A component's colour, type, radius and padding are not props.
- Interactive things are buttons or links with an accessible name; tiles and cards that navigate are links.
- Names come from what people see. A visible label names its field and the hint describes it (TextField wires both); a control with no visible label takes `ariaLabel` (Switch, Checkbox, Radio; a Dropdown Item names its selector with its title). Icon buttons name the outcome: the built-in names (back, close, search, menu, support, cart, more, delete, add, increase, decrease, play, pause) are Arabic and switch to English with `<html lang="en">` or `NusukDL.setLang('en')`; for any other icon or language pass the label props (Toolbar `actionLabels`, `leadLabel`, `trailLabel`, `backLabel`, `cartLabel`; IconBlock `labels`) (DL-21).
- Tap padding is part of the component: each control answers a 48 touch (44 in the top bar) whatever its drawn size, with no effect on layout (M10; the per-control table is in M11) (DL-20).
- One component per job: NoticeBar for alerts and deadlines, HintWidget for preparation tips, StatusChip for request status, Chip for tags, StatusSheet for an outcome or one decision, SectionError for a block that failed to load (the page keeps working), EmptyState for nothing yet.
- Fate (red) only for an action that removes or cancels: delete, cancel a booking, discard changes. Retry, pay another way and a permission are Primary (F76).
- Empty states are components (EmptyState, RequestCard empty), never a blank area.

### Buttons (CTA, 320 variants)

CTA = Kind [Primary, Secondary, Ghost] × Size [LR, MD, SM, XS] × State [Default, Disabled, Loading, Focused] × Icon [No Icon, Left, Right, Icon Only] × Fate [Off, On]. Each CTA exposes its nested `_Button Trail` (Style: Default, Secondary, Ghost, Fate, Fate Ghost, **Green Default**, **Green Ghost**; Light On/Off).

#### Metrics

| | LR | MD | SM | XS | Token |
|---|---|---|---|---|---|
| Height (phone, tablet) | 48 | 44 | 38 | 30 | `button-height-*` (Foundation `Buttons/*`, 9 Nov 2026) |
| Height (Wide) | 54 | 48 | 38 | 26 | same variables, Wide mode |
| Side padding | 28 | 22 | 18 | 14 | `button-padding-*` |
| Icon-side padding (every filled button with an icon; both sides of Icon Only and Loading) | 24 | 20 | 16 | 12 | `button-padding-icon-*` |
| Gap | 8 | 8 | 8 | 4 | `button-gap`, `button-gap-xs` |
| Icon | 20 | 20 | 18 | 16 | `button-icon-*` |
| Icon-only icon | 26 | 26 | 24 | 18 | `button-icon-only-*` |
| Icon-only / Loading width (destructive too) | 74 | 66 | 56 | 42 | — |
| Width, MD with a 5-character label and an icon | 153 (icon side 20, other side 22) | | | | — |

Label: `body-2-regular` (16) at every size. Shape: capsule. Ghost: no fill and no side padding.

#### Colours

| Kind | Fill | Label and icon |
|---|---|---|
| Primary | `button-primary-surface` | `button-primary-content` |
| Secondary | `button-secondary-surface` (Ivory 70%) | `button-secondary-content` |
| Ghost | none | `button-ghost-content`, underlined |
| Secondary + Fate (destructive) | `button-fate-surface` | `button-fate-content` |
| Ghost + Fate | none | `button-fate-content`, **underlined** (changed 8 November) |
| `onDark` (Figma Light=On) | `*-on-dark` tokens | Ghost on dark is not underlined |
| Primary + `tone=green` | `button-green-surface` | `button-green-content` |
| Ghost + `tone=green` | none | `button-green-ghost-content`, underlined |
| Secondary + `tone=green` (14 Nov; Figma defines the colour, no Trail variant uses it, F1) | `button-green-secondary-surface` | `button-green-secondary-content` |
| Primary + Fate | `button-fate-surface` (`Alerts/Surface/Solid Error` at 10% since 14 November, F2) | `button-fate-content` |
| Ghost + Fate + `onDark` (not in Figma, F1) | none | `button-fate-content-on-dark`, not underlined |
| Ghost + `tone=green` + `onDark` (not in Figma, F1) | none | `button-green-ghost-content`, not underlined |

#### The master's slots (14 November 2026)

`_Button_Master Of Masters` holds every part a button can show, each behind a boolean: Leading Icon, Icon Only, Price, Show Apple Pay, Show Text, Nafath Icon, Show Absher, Trailing Icon, and Glass Effect over a `Glass BG` layer. Order, leading to trailing: icon · price · " Pay" · label · Nafath · Absher · icon. Code reaches each one:

| Master boolean | Code | Rendering |
|---|---|---|
| Leading Icon + Trailing Icon | `icon="both"`, `trailingIconName` | Icon-side padding on both sides |
| Show Price | `price="1,300"` | `riyal` at the icon size and the amount, gap 4, before the label |
| Show Apple Pay | `mark="apple-pay"` | "Pay" in the system font with the Apple glyph on Apple devices only; accessible name "Apple Pay". In the iOS app use the system `PKPaymentButton` |
| Nafath Icon, Show Absher | `mark="nafath"`, `mark="absher"` | The service mark after the label, icon height |
| Glass Effect | `glass` | `glass-android` + background blur 10 (CSS 5 px) behind a filled button |

#### States

| State | Rendering |
|---|---|
| Default | As above |
| Disabled | Whole button at 40% opacity; not interactive |
| Loading | Becomes icon-only (widths above) with a spinner at the icon-only size; Primary and Secondary at 100%, Ghost at 40%. Figma shows `arrow-left-02` as a placeholder (B11). Announce busy to VoiceOver/TalkBack |
| Focused | Figma draws it as Default (B10). Code draws a 2 px ring, offset 2: Ink on light surfaces (it inverts with the theme), white on Ink fills, dark glass and on-dark buttons (`focus-ring`, DL-19). The same ring serves every control |
| Pressed | Not in Figma. Code scales to 98% |

#### Icon-side padding (10 November: every filled button)

Until 10 November this applied to destructive buttons only (DL-05). In 🕹️ Buttons it is now bound on `_Button Trail` for Default, Secondary, Fate and Green Default, so it applies to Primary, Secondary and destructive alike (DL-24).

| Button | Icon side | Other side |
|---|---|---|
| Icon Left (Primary, Secondary, destructive) | `button-padding-icon-*` 24 / 20 / 16 / 12 at the **leading** edge | `button-padding-*` 28 / 22 / 18 / 14 |
| Icon Right | `button-padding-icon-*` at the **trailing** edge | `button-padding-*` |
| Icon Only and Loading, Primary and Secondary, destructive or not | `button-padding-icon-*` on both sides (widths 74 / 66 / 56 / 42) | |
| No icon | `button-padding-*` on both sides | |
| Ghost, any | No padding | |

Why: an icon carries its own optical margin, so the side that holds it needs 6 less (2 at SM and XS) for the label to look centred. Measured in code on 10 November: 48 of 48 size, kind and icon combinations match the Figma matrix.

#### Native mapping

- iOS: one `NusukButton` view with `kind`, `size`, `icon` (none, leading, trailing, both, only), `isDestructive`, `onDark`, `tone` (default, green), `state`, and optional `price`, `mark` and `glass`; wrap it in a `ButtonStyle` so pressed and disabled come from the system. Hit area 48 × 48 pt (M10): XS (30), SM (38) and MD (44) get invisible tap padding.
- Android: one `NusukButton` composable with the same parameters; `Modifier.minimumInteractiveComponentSize()` gives the 48 dp touch target for XS, SM and MD.
- Store and wallet badges (`Special CTA`) are not buttons to rebuild: use the official App Store, Google Play, AppGallery, Apple Wallet and Apple Pay artwork.

### Navigation

#### Toolbar (top bar)

- Transparent and floating; every control sits on Glass BG (M8). Never give the bar a background colour. Content scrolls under it, behind a progressive blur from the top (GC-R8), and every page under a Toolbar carries Figma's **Header Effect** (402 × 572: a warm glow over a large white blurred circle; over `surface-screen-bk` it reads #F7F7F8 below the glow), not yet in the coded bundle (GC-R10, F117).
- Glass per control (17 November 2026, read from the instances): icon blocks, the logo, Wallet, the date and booking pills are `control` glass (OS shadows + the Glass Effect with a white sheen, no Default Fill); the search bar and Top Tabs are `field` glass; the Secondary Pages / Tabs track is `flat` Ivory. Darkmode=On is Dark=On (Ink radial, dark rim).
- **22 types × Darkmode (14 November; 20 on 10 November).** The `Status` property is gone: what was a status is now a type. `Light` is renamed `Darkmode` (same meaning: dark glass and white content over photos, video or Ink). Code takes the Figma name as `type` and `darkmode`; the old names and `light` still work.

| Figma type | Height | Row 1 (leading → trailing) | Row 2 | Old name in code |
|---|---|---|---|---|
| Landings / LoggedIn | 146 | Logo on glass 44 + greeting `body-2-regular` + chevron 16 · wallet pill 38 + notifications (glass 44, red dot 10) | — | `landing` |
| Landings / Guest | 146 | Same; the greeting reads "تسجيل الدخول" and is the sign-in action; the wallet pill reads "المحفظة" | — | `landing` + `no-account` |
| Landings / Search | 204 (was 212) | Logo · wallet + notifications | Search bar 44 (18 under row 1) | new |
| Primary Pages / Default | 146 | Icon block (1) · icon block (3) | — | `primary` |
| Primary Pages / Search | 250 | Same | Headline 42, then search bar 44 | `primary` + `with-search` |
| Primary Pages / URLs (was Primary Pages / Tabs, renamed 14 Nov) | 244 | Same | Headline 42, then a scrolling row of Secondary SM buttons 119 wide, gap 8 | `primary` + `with-tabs` |
| Primary Pages / Title (new 14 Nov) | 188 | Same | Headline 42 (`headline-2-regular`) | `primary` + `with-title` |
| Secondary Pages / Default | 146 | Back + title `headline-2-regular` · icon block (3) | — | `inner` |
| Secondary Pages / No Actions | 146 | Back + title | — | `back` |
| Secondary Pages / Search | 146 | Back · search bar · one action | — | `search` + `leading-trailing` |
| Secondary Pages / Tabs | 184 | Back + title · icon block (3) | Glass tabs 38 | `inner` + `with-tabs` |
| Modal / Default | 146 | Title + gold chip LR · close | — | `close` |
| Modal / Search | 146 | Search bar · close | — | `search` |
| Marketplace Prodcut | 146 | Back + product name · icon block (3) + cart with count badge | — | `market-product` |
| TopTabs · Companion MGM · Nusuk AI · Process · DatePicker&Close · Timer | 146 | Unchanged | — | same |
| Profile | 202 | Icon block (1) · icon block (3) | Avatar 56, name `headline-2-light`, Nusuk ID, share button | `profile` |
| Almatar (12 November) | 146 | Back · booking pill 44 (route `notes-2-regular` with `arrow-left-right` 16, trip facts `notes-2-light` split by 2 px dots, Primary XS more button) · currency button (riyal) | — | `booking` |

- The Figma type is named after a partner (Almatar). Code calls it `booking` and accepts `Almatar`; the pill holds the trip the person is booking, never an offer (R3).
- Left Figma on 10 November: MarketPlace Landing and MarketPlace Category. `market-landing` and `market-category` still render in code for one release and are deprecated: use Landings / Search and Primary Pages / Tabs.
- Parts (all follow `Buttons/MD`, 44 on phones): **IconBlock** glass capsule 44 high holding 1–4 buttons of 44 × 38 with 24 icons; **SearchBar** 44 high, 18 icon, `body-2-light`, with Default and Filled states and optional cycling suggestions; **DatePicker** 44 high, padding 18, 16 icons; the toolbar row is 44; **GlassTabs** 38 high, padding 4, gap 8; title `headline-2-regular`, one line, ellipsis.
- Bottom padding 32 with one row, 18 with two rows (Landings / Search keeps 32). Most variants are still a fixed 146 (N9). Top-bar controls at 44 are the one place a 44 target is allowed (OR-04). The 62 pt status bar in Figma is for mockups only: use the system status bar.
- The greeting is content: pass the name; never truncate a name mid-word, drop to "مرحبا" alone when it does not fit.

#### VerticalStepper (journey tracker, rebuilt as a replica 14 November, night)

Figma: 🔦 Tracker › Vertical Stepper Mobile (State Done / Current / Next × Step Start / Middle / Last), on `_Stepper Step Master Mobile`, `_Stepper Point` and `_Tracker Status`. Values in the default modes.

- Step: rail at the start edge, 12 to the card column; the column has 8 above and below (Start: none below; Last: none above).
- Rail 20 wide, gap 4: line above the point 18, line below to the end, both `Border/Medium` (1.5) in `Surface/06 Ash`. Start hides the line below; Last hides the line above (kept in the flow) and adds 18 above, so its point sits 40 from the top (22 for Start and Middle). Points: Done 20 `Surface/Longing` with a white check; Next the 10 `Icons/Longing` dot of `_Ongoing Master`; Current has no rail and its card spans the full width.
- Step card: `Surface/01 White`, radius 18, padding 18, gap 18, effect `New/XS` (0 1 2, Ink 3%). Title `body-2-regular` and time stamp `notes-2-light` (8 apart), description `notes-1-regular` in `Text/Note` (12 below), status chips Pending MD (8 apart), "Last update" `notes-2-light`, then an optional Alert (Error, no icon) and two SM buttons, Primary at the start, half and half.
- Known issues F33–F37: Current hides the rail; Start and Last carry their lines the other way round, so a list stacked Start → Last has gaps (code follows the names; `step` picks the variant); `New/XS` and the extra 18 of Last come from outside Foundation; Next uses the Current point.
- One current step at a time. The time stamp and last update are facts from the service, never estimates.

#### Alert (rebuilt to Figma 14 November, night)

Figma: ‼️ Status Handlers › Alerts (Info, Success, Warning, Error, Primary) on `_Alert` (Icon, Heading, Close, Below Buttons).

- Padding 18, gap 12, radius 18, 1 px border, top-aligned: icon 20 at the start (alert-circle, checkmark-circle-02, spam, alert-02; Primary alert-circle in `Icons/Black`), body, Close 16 (`cancel-01`, `Alerts/Icons/Default`) at the end.
- Heading `body-2-regular` in the type's text colour; message `notes-1-light` in `Text/Heading`, 8 apart; Below Buttons 18 under: Primary SM at the start, Ghost SM, 12 apart.
- Primary is the neutral Default palette (`Alerts/Surface/Default`, `Alerts/Icons/Default`, `Alerts/Text/Default`), not gold.

#### BottomNav (floating bottom navigation, new 10 November)

**17 November 2026 (from the design system comments):** the current tab's glass is one pill that slides from the previous tab to the new one (0.45 s, iOS-style ease; it re-measures on resize and holds still with reduced motion) on the Primary (NR) bars. The الحرمين tab draws 🧭 Navigation › **Haramin Icon**: Kaaba, Masjid and Maqam on one 24 square, each glyph centred, cross-fading with a 20 blur on a 6 s loop (ease 0.5 0 0.5 1, the prototype's keyframes); reduced motion holds on the Kaaba. Exported as `HaramainIcon`. The loop follows Figma's prototype at the DL Advisor's request, and contradicts the rule below and M8 Motion (no resting loops): Q-D40 decides which wins.

**14 November 2026:** the Figma set `Buttom Navigation` is gone; its screens are now 🧭 Navigation › Tab Bar › Active = Landing, Travel, Content, Market/Cart +, on the private `_BottomTab master` (Mode Primary, Primary/Small, InnerPage, Marketplace, Interactions, Actions) and `_Tab` (Default, Current, Icon Only, Pill). Bar 402 × 95 (was 106), gap 20 (was 12), a white haze instead of Ink. Current tab: solid icon in `icons-illumination`, label `text-link` at Light, a white and a `surface-longing` glow. Tabs — Landing: اليوم · السفر · الحرمين · السوق · الكل; Travel (was Journey): السفر · الطيران · الفنادق · التجارب; Content: اكتشف · الصوتيات · الفيديو · الإرشاد. Primary/Small is 48 high (was 44). The table below is the 10 November state, kept for reference (F6).

*The rest of this section is the 10 November reading, kept for history; where it differs, the 14 November paragraph above wins.*

Figma (10 November): 🧭 Navigation › Buttom Navigation. A glass capsule that floats over content, with one optional round button beside it. It sits beside the older Tab Bar set, which is still published (N14: say which one is the home bar).

- Box 402 × 106: padding 18 top and sides, 26 bottom, gap 12. Behind it a progressive blur and no fill (18 November 2026; earlier a 24 background blur with an Ink-to-clear haze at 40%).
- **Bar:** Glass BG capsule, 62 high (Size NR), padding 4, tabs overlap by 10. Primary keeps OS shadows + the Glass Effect only (`bar`, no fill); Primary/Small, Marketplace, Filters and Inner Pages bars are `field` glass (17 Nov). Size SM: 44 high, icons only. Size XS: 44 high, hugging, tabs overlap by 30.
- **NavTab:** 65 × 54, padding 8, gap 4, icon 24, label 12 Regular in `text-subtle` (no text style in Figma: N15). Current: Glass BG as a capsule (Figma radius 54 on the 54-high tab; corrected 11 November 2026, was written as 18), a white glow under the icon, the solid icon; the label does not change colour. Standalone: round glass 62 (44 at SM and XS), icon 28. Special (الحرمين): the icon in `icons-longing` with a soft gold glow.
- **Screens** (reading order):

| Screen | Bar holds | Round button |
|---|---|---|
| Landing | اليوم · السفر · الحرمين (special) · السوق · حسابي | — |
| Journey | التجارب · الطيران · الفنادق · التنقل | Nusuk |
| Content | البث · المناسك · نسك AI · البحث | Nusuk |
| Marketplace | Cart summary: up to three product pictures 38 with `+n`, then the total (`body-2-regular`, riyal 16) and an arrow 20 | Nusuk |
| Search | A search field, `notes-1-regular`, icon 24 | Nusuk |

- Slots on the master: Tab Bar Content, Nudge (402 × 58 above the bar), Home Standalone, Announcement, Show Home Indicator. Use the system home indicator.
- Rules: five destinations at most. The round button always returns to Today. The Marketplace bar shows a real total and real items only. The animated icon on الحرمين plays once per visit, never as a resting loop (M8 Motion; N16).

#### Nudge (new 10 November)

Figma: 🧭 Navigation › Nudges (Expand On 316 × 58, Off 279 × 58). One announcement above the bottom navigation: an illustration, one line (14 Regular, `text-heading`) and one Primary XS icon-only action. Capsule radius 34, padding 18 / 12, gap 18, white-to-clear fill with a `surface-longing` glow on the action side.

- One nudge at a time, one line, one action. It is an interrupt, so it follows the tiers in M9S: a real, dated event (registration opens, a permit is ready), never a promotion, never in a sacred window.
- Expand=Off is the same capsule scaled to 60%, which sets its text at 8.4 (N17). Do not ship it at that size.

#### TabBar (bottom bars)

**17 November 2026:** the white home tab bar (Home Item row + «نسك AI» pill) and Habits are deprecated in 🧭 Navigation; Tab Bar's home actives are the glass `_BottomTab master`. TabBar `landing`, `journey`/`travel`, `content`, `market` and `inner-pages` now render BottomNav; the old names keep working. The paragraph below is the history.

- Home tab bar (10 November reading; since 14 November the home bars are Tab Bar › Landing, Travel, Content and Market, coded as BottomNav above): 95 high, `surface-01-white`, top corners 18, shadow 0 −6 30 −12 Ink 5%. Four tabs (اليوم, رحلتي, المحتوى, المتجر) plus Nusuk AI. Tab item 56 × 46, icon 24, label `notes-2-regular`. Current tab: solid icon in `surface-longing` with a soft glow, label `text-heading`; others `text-subtle`.
- Action bars: actions, action & input, loading, filters, content share, habits, floating cart (empty and full), with price, Cart with Count (renamed from Cart, 17 November 2026), Payment (new 17 November 2026), floating profile, empty. Cart with Count and Payment share `_Shop CTA`: Primary LR whose label leads, then the total and the riyal (20); Cart with Count puts the counter (Glass BG field, padding 12 / 18, minus · count · plus, 18 apart, 110 wide) 18 from it at the start, Payment's CTA fills the row. Code: `type="cart-with-count"` (`cart` still works) and `type="payment"`, with `total`. They fade from transparent to white 80% so content scrolls under them.
- Every Tab Bar floats: content scrolls under a progressive blur from the bottom up plus a light gradient, never a solid fill (GC-R9). When a screen ends with a section and no action bar, the section sits flush on the empty Tab Bar with no gap (GC-R7; Golf Carts booking 80451:41304: package box 443–836, Tab Bar 836–874). In an RTL row with a counter and a main button, the counter is on the right and the button on the left (GC-R14).
- **Navigation bars have no solid fill (18 November 2026, Moha).** BottomNav, TabBar (bottom edge) and Toolbar (top edge) blur what scrolls under them progressively: a 4 px blur masked over most of the band and a 16 px blur on the outer half, strongest at the screen edge and fading to nothing toward the content, reaching 24 past the bar. The bar's own glass is unchanged. Native: a variable blur material behind the bar, never a tinted fill.
- **Payment Box (Figma 86074:14231, not coded yet, F114; GC-R17):** one piece, never two stacked cards. The code field (62 high, radius 18, a 38 glass pill «تطبيق») sits 12 above a white widget (radius 18, `Shadow/XS`): its top section has padding 26 / 18 / 48 (the 48 is safe space), gap 26 and the Header Effect turned 180° at the bottom, and overlaps the cards section by −26; the cards section has padding 26 / 18, gap 26, a header row (26 above, 18 below, a separator), Bank Cards (padding 8, gap 12, radius 18, a 1 inside line), a 30 glass pill to add a card, the terms, then the 44 pay button.
- Home indicator: use the system one. Keyboard and Screen Controller in Figma are not components to build.

#### Other Navigation changes

- Pagination: every dot `icons-gray` at full opacity, gap 8 (4 vertical); new small size (3); progress version.
- **ProgressRing (rebuilt 17 November 2026,** 🧭 Navigation › Progress on `_Form Progress Indicator` P20–P100**):** 44 square; a 1.14 Pearl ring; a 7.4 `surface-illumination` band from 6 o'clock, clockwise, round ends, with a 5 `surface-shade-3` dot in its start cap; the count in `notes-2-regular` `text-content`. At 100% the circle fills and a 28 `tick-02` in `surface-shade-6` replaces the count (Show Check Mark). `Progress` (RTL=On) puts a `body-2-regular` `text-heading` title over a `notes-2-light` `text-note` subtitle at the reading start, 4 in, and the ring 12 after it at the end (re-read 20:55; code had the ring first). Code drew a 3 stroke from 12 o'clock until this release.
- **Toolbar Process (17 November 2026):** `_Progress Bar` counts steps (Step 01, 02, 03 × Darkmode). One 30 × 12 wave block per step done (`.Building Blocks`, 3 `surface-longing`, round) from the reading start, then 8 apart a straight 3 track to the end (Pearl; white in Darkmode); 90 × 28 (8 above and below; was coded 20 high). Code: `step` and `steps` (default 3); `progress` rounds up to a step. The wave is drawn in Figma as straight segments with rounded corners; code draws the same curve. The variant names are still broken, now with a five-value Darkmode property (Off, On, Darkmode3, Darkmode5, Darkmode6), and Step 03 light pads its blocks 8 at each side where Step 03 dark doesn't (F91, F105).
- **CircularProgress (new 17 November 2026,** 🧭 Navigation › Circular progress indicator, Progress × Darkmode**):** a determinate ring for a measurable process (upload, download, sync). 44, 3 stroke inside, round caps. Re-read 17 November, 20:55: 0 is a whole Pearl ring; otherwise the active arc (`surface-longing`) runs clockwise from 15° after 12 o'clock to 360° × value, and after a 15° gap the track (Pearl; white in Darkmode) runs back to 12 o'clock (the 20% and 75% variants; the 50% variant is turned 15°, F106). The value sits in the middle in `notes-2-regular` `text-content` (`text-inverse` in Darkmode); done is a `surface-longing` disc with a white 24 `tick-02` (new in this read). The variant labels (0, 10, 30, 50, 80) still don't match the drawn values (0%, 20%, 50%, 75%, done) (F92); code is Proposed until it is published. Do not use it for steps (ProgressRing) or for an unknown duration.
- **Photo Scan and Upload** (17 November 2026): a 402 × 874 example screen in 🧭 Navigation (Camera Widget, a Primary LR and a Ghost MD CTA, Tab Bar Empty, Toolbar Secondary Pages / Default in Darkmode). It is a frame, not a component.
- **HeaderTabs (rebuilt as a replica 17 November 2026,** 🎹 Tabs › Header Tabs, Size SM / LR × Background On / Off, on `_Header Tabs` (Darkmode, Show Item 3–8) and `_Tab_Master_Status` (Status × Icon Off / On / Icon Only × Show Number × White × Updates)**):** the track is 38 high (LR 48), padding 4 / 8, tabs 8 apart; its Ivory fill (Glass BG Default, Glass Off; Smoke `surface-05-smoke` in Darkmode) reaches 2 outside the track. A tab is 30 high (LR 40), padding 8 / 20 (18 on the icon side), label `notes-1-regular` `text-heading` (`text-inverse` in Darkmode) 2 above the bottom, an optional 20 icon at the start, a Number Notification 12 after the label (Smoke; white with a shadow in Darkmode) and Updates, a 6 `alerts-surface-solid-error` dot 8 from the end and 4 from the top. The chosen tab is `surface-01-white` with −6 6 30 −12 Ink 5%: Tabs uses a remote style named Shadow/XS that is not Foundation's Shadow/XS (F104). 2 to 8 tabs. Background Off drops the track. **On a page (18 November 2026, GC-R11):** the tabs span the full width and share it equally (two tabs 50/50), grey track and white pill: `fill`. Code: `darkmode`, `fill`, and per tab `icon`, `iconOnly`, `count`, `updates`; `light` stays the glass toolbar tabs. Until this release code padded the track 4 all round, drew LR tabs 38 high and used Foundation's `shadow-xs`.
- Toolbar `Secondary Pages / Full Search` (15 November): back, search and one action in one row (84, 32 below); `Secondary Pages / Search` is a title row over a full-width search row (142, 18 below).
- BottomNav `inner-pages` (15 November): a 40 glass pill with four 44 × 38 icon actions and the 40 Nusuk AI circle; no bar shadow (only Glass BG's).
- New parts: DirectionSheet, HomeItem, IconBlock, SearchBar, Glass.

### Cards

#### Card shell

`surface-01-white`, radius 18, effect `Glass/Full` (M8). Cards sit on `surface-screen-bk`.

#### MemberCard

- Full: padding 18, gap 12. Avatar 42 (`_Card Avatar`), two people overlap by 15. Badge 16 at the avatar's top leading corner: Absher (#288A42) or Contact (`surface-longing`); Mist when disabled. Name `body-2-regular` `text-heading`; details `notes-1-light` `text-content`; meta chip (Figma Chips MD with Background Off, rendered XS: 18 high, text 10, icon 12, no padding); trailing CTA Primary XS with an icon.
- **Avatar shadow (8 November):** x −6, y 6, blur 30, spread −12, Ink 5% (K6).
- Compact (Horizontal): 140 wide, padding 12/18, avatar 56, centred text.
- Disabled: fill `surface-03-pearl`, whole card 70%, CTA disabled.
- Actionable: trailing `more-vertical` 24. Swiped: two 188 × 102 tiles behind the card (delete in destructive colours, favourite in Secondary).
- Selection: trailing Secondary XS icon-only `tick-02`.

#### RequestCard (11 types; Figma has 12 since 11 Nov)

- Shell padding 26 top/bottom, 18 sides, gap 18. Types: hajj, umrah, umrah-package, rawdah, electric-cart, hair-cut, hhr, flight, hotel, ticket, marketplace; plus Empty State. SIM left Figma on 10 November: `sim` still renders in code for one release and is deprecated (SIM orders now use Shippment Tracker in 🛍️ Market).
- Rows: upcoming header (`notes-2-light` + chip XS gold or default), past header (service + StatusChip), title block (Hajj), route pills (Umrah Package), two slots (label `notes-2-light` `text-subtle` with a 12 icon, value `headline-2-regular`, divider Pearl 36 high; Hotel uses a chevron), order line (Marketplace), footer (avatar 24 + text + entity logos) with the open button Primary XS icon-only, optional Alert notice.
- **8 November:** the 24 footer avatar has a white inside ring 1.5; Marketplace order avatars are 38, Positive (Ivory) `+2` then two pictures, white inside ring 1.4.
- Preset icons match Figma: Electric Cart tag `umrah` (K7), Marketplace footer `package-moving`.
- Sizes on 10 November: 387 wide; Hajj 183, Umrah Package 227, Marketplace 176, the rest 221 high.

#### OptionCard (13 types)

**18 November 2026 (Golf Carts review, GC-R15, F115):** rows are 18 all round, so a one-line row is 60 high and a row with a small action 66; title over description stays 78. An empty `title` or `description` renders nothing, and the card spans its container (the 359 cap is gone; screen sections run 386 on a 402 screen, GC-R6). This is not the STD-07 content-card padding (26/18).

**17 November 2026 (from the design system comments, 🃏 Cards › Option Cards node 68491-1912):** code takes Figma's type names (`default` title and description only; `with-icon` lead icon, no action; `with-action` no icon; `top-icon`; the rest as below) and the preview follows Figma's order. 2 Actions, 2 Actions On and Counter have no lead icon; the LR flag tile is Ivory. `_Master Card` has modes Default (white, radius 18, four effects), Transparent (no fill, Ivory line) and Gray (Ivory fill, 437 × 138).

**15 November:** Simple list (16 icon before the title, no lead or action), LR Icon (flag tile, no action) and 2 Actions On (the swiped state: Secondary star and Fate delete-03 tiles behind the card). Action Only, Icon with Action, 2 Actions, without Action, Counter, text only, LR Icon with Action, Icon Top, Requirement Item, **Product** (new 10 November: 359 × 66, padding 12 / 18, product picture 42 with a white 1.5 ring, name `body-2-regular`, quantity `body-2-light` such as `1x`). Padding 18, gap 12; title `notes-1-light`, description `body-2-regular`; actions Secondary XS icon-only; Counter stepper 110 × 44 Ivory capsule with a 12 backdrop blur; Icon Top corners 22/18/22/22; Requirement Item padding 12/18 with a 42 Ivory icon circle.

#### AddToCartCTA (new 10 November; rebuilt 17 November, 21:35)

Figma: [🃏 Cards › Add to Cart CTA](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl/?node-id=70399-6858). All 30 high, every status an instance of CTA Secondary XS (no own frame any more), so the widths follow the CTA: icon-only 42, icon side 12, other side 14.

| Status | What it is | Width |
|---|---|---|
| `arrow` | Icon-only `arrow-left-02` 18: open the product | 42 |
| `cart` | Icon-only `shopping-basket-add-01` 18: add to cart (was `shopping-basket-01`) | 42 |
| `buy` (Figma `Status7`) | Icon left `shopping-basket-add-01` 16, «اشتر» | 71 |
| `one` | Glass BG (Secondary surface) holding a destructive icon-only `delete-01` 18 (was `delete-03`), the quantity `notes-1-light` filling the middle, plus 16; 12 at the end, gap 8 | 138 (was 122) |
| `many` | Minus 16 · quantity · plus 16, 12 a side, gap 8 | 138 (was 122) |
| `remove` | Destructive, icon **left** `shopping-basket-remove-01` 16 (was a trailing `delete-03`), «إزالة» | 70 |
| `notify-me` | «نبهني عند التوفر», then `notification-02` 16 at the **end** (was a leading `notification-01`) | 138 |

The stepper reads left to right in every language (minus or remove, number, plus). The plus and minus are 16 drawn; they answer a 48 touch (DL-20). Inside a card the control may be stretched (Price Options Vertical, Marketplace Grid); the button keeps its own width at the start of the stretched box.

#### PriceOptions (new 10 November)

Figma: 🃏 Cards › Price Options (the master for price on product cards). "ابتداءً من" in `notes-2-light` `text-note`, then the price (riyal 12 × 14 + amount at 20, `text-heading`) and the Add to Cart CTA. `Vertical=False`: price and control on one row (269 × 61). `Vertical=True`: stacked, gap 8 (grid cards). Top padding 8. Show "from" only when the price really varies.

**18 November 2026 (review comments):** in Vertical the Add to Cart CTA hugs and sits at the start under the price; in the discount row the struck-through earlier price comes first, then the pill.

**17 November 2026:** booleans Show Price, Show Add To Cart, Show CTA and Discount. Discount: a pill (`خصم 25%`, 10, padding 2 / 8, full radius, `alerts-surface-error` + `alerts-text-error`) and the earlier price struck through (12, `alerts-text-error`), 8 apart, 4 under the price. Show CTA: a Secondary XS icon-only button beside the cart control, with Figma's placeholder icon. Rules: a discount shows only when it is real (the struck price is what was charged before, and the offer has a real end, stated plainly), never with urgency and never on Udhiya, Hady or any act of worship (M4). The pill borrows error red (F97, Q-D41) and the second control conflicts with K9 (F98), so code keeps `cta` off by default.

#### Marketplace media cards (10 November)

Media Cards has 21 types. `Marketplace add to cart` is replaced by **Marketplace / List** (268 × 330, details on `Glass/Full`), **Marketplace / Grid** (189 × 330, image fade, stacked price) and **Marketplace / out of stock** (grid, with Notify me). In code: `layout="list" | "grid"` and `cart="cart" | "notify-me"` on MediaCard. `ADS` (250 × 330: image and the "اختيارات نسك" chip only) is still not coded (K8).

**17 November 2026, 21:35 ([Charity Card](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl/?node-id=70695-9609)):** a new type, 386 × 330, for a giving campaign: the photo full bleed under the fade (white from 11.6% to 72.9%, a 622 × 429 white glow blurred 74), a White SM chip with a 14 icon (`spoon-and-fork`) at the start of the head, the title (Body 1 Regular) and description (Notes 2 Light, `text-subtle`), then one row: CircularProgress 44 with its percentage, the remaining amount (label Notes 2 Light `text-content`; riyal 16 and Headline 2 Regular in `text-link`), a 20 Pearl line, the collected amount (all `text-note`), 18 apart, and the Add to Cart CTA arrow at the end. Code: `type: 'charity'` with `tag`, `title`, `description`, `progress`, `remaining`, `collected`, `onOpen`. Rules: every figure is the campaign's real, current total; no countdown, no "only X left", no names or ranks of donors; the giving itself happens on its own page (M9S: the act and the transaction in separate frames). Known issues F108–F111. The Marketplace Grid out-of-stock card now uses the Add to Cart CTA Notify me (bell at the end), as Figma does.

#### Market (🛍️ Market library, new 10 November)

File `5X9RDeo33hZFEhtjVUYr5c`. It has no variables or styles of its own: it uses Foundation, Buttons, Chips, Inputs, Switches, Cards, Avatar, Tabs and Tracker. On 17 November 2026: 15 public sets and 5 private (Breathing Effect is now the library copy Steps uses; Select Location is a set; new private `_Udhiya Details` and `_Contact Details`). Not coded in this release; build screens from the Figma components.

| Set | Variants and size | Built from |
|---|---|---|
| Product Header | 386 × 83 | TrustedByNusuk, chip, `headline-2-light` |
| Product Info | Gift v2 385 × 96 · Product Description 385 × 116 | Tabs, Animated Gift, Number Notification |
| Product Photo | Status On / Off, 340 × 328, radius 18 | Chip |
| Product Size Options (not published) | Type Size / Color / SelectedSize × Selected × State, 344 × 60 (86 selected) | Chips |
| Product Item | Default, Remove Product 386 × 109 · Off, cann't delever, Less Available 386 × 151 | Add to Cart CTA, Hint, CTA |
| Items List | Expanded Off 349 × 42 · On 349 × 284 | Avatar group, Option Cards (Product), CTA |
| Categories | Status Off 385 × 178 · On 386 × 638 | Option Card master on Glass BG |
| Gifting | 386 × 334, radius 22 | CTA, chip |
| Featured Services/Shipping | 386 × 227, radius 22, `Glass/Full`, Visual slot | — |
| eSIM Card | 384 × 292, radius 22 | `_SIM Details`, Add to Cart CTA |
| Select Location (a set since 17 Nov) | Selected On 160 × 81 (`surface-shade-4`, 1 `surface-longing` line) · Off 158 × 79 (white); radius 14, padding 12 / 18, gap 4; city `notes-2-regular`, address `notes-1-regular` (F101) | — |
| `_Udhiya Details` (private, 17 Nov) | Status Off / On × Size LR (386 × 74 / 270, radius 18, white) / SM (386 × 58 / 230, radius 14, white with an Ivory line, Pearl when open) · Delete boolean | Input, `_Contact Details`, CTA Secondary SM / XS, chip |
| `_Contact Details` (private, 17 Nov) | Status Off 386 × 30 (the switch only) · On 386 × 178 (switch, Mobile input, Input) | Switch SM, Input |
| Order Basic Information | Order Details 386 × 304 · Cancellation 386 × 226, radius 18 | Request Card Status, CTA |
| Shippment Tracker | eSim/Install 385 × 419 · Sim/Nafath, Sim/Pickup 385 × 381 · Package 385 × 289 | Tracker Step, Request Card Status, CTA, Avatar |
| TrustedByNusuk | 4 variants, 111 × 46 | — |
| Animated Gift | 4 × 20 | Motion piece (Breathing Effect left the file on 17 Nov) |

Rules for Market screens:
- **Less Available** ("تبقي فقط %s منتجات") is a scarcity message. It shows only from live stock, below a threshold the business sets, and never on Udhiya, Hady or any act of worship (M4).
- **TrustedByNusuk** is an endorsement. It needs a written criterion for who earns it; without one it is a disguised ad (M4).
- Animated Gift and Breathing Effect play once, not as resting loops (M8 Motion).
- Udhiya and Hady are worship bought through a shop: no upsell, no countdown, no "frequently bought together" on those products.
- **Udhiya details** (17 November): one collapsible card per sacrifice: the name of the person it is offered for ("[اسم المُضحى عنه]") and its type ("نوع الأضحية"); open, it asks for the name and, behind a switch, contact details other than the buyer's. The name is the person's own wording and is never edited for them. The copy and the chevrons need fixing before it ships (F100).

#### StatusChip (Request Card Status, 48)

Chips XS: 18 high, text 10, icon 12, padding 8 (6 on the icon side, since 15 November), gap 4. Colours from the Chip state: success, pending, error, default, gold.


| Figma status | Code `status` | Chip state | Arabic label | Icon |
|---|---|---|---|---|
| Confirmed | `confirmed` | success | مؤكد | `tick-double-02` |
| Confirmed Booking (17 Nov) | `confirmed-booking` | success | حجز مؤكد | `document-validation` |
| Partly Confirmed | `partly-confirmed` | pending | مؤكد جزئيا | `tick-double-02` |
| Visit Completed | `visit-completed` | success | اكتملت الزيارة | `tick-double-02` |
| Booked | `booked` | success | تم الحجز | `tick-double-02` |
| Visit Started | `visit-started` | success | بدأت الزيارة | `time-quarter-pass` |
| Scanned | `scanned` | success | تم المسح | `qr-code` |
| used | `used` | success | مستخدمة | `tick-double-02` |
| Cancelled | `cancelled` | error | مُلغاة | `calendar-remove-02` |
| Visit Missed | `visit-missed` | error | لم تتم الزيارة | `calendar-remove-02` |
| Awaiting Confirmation | `awaiting-confirmation` | pending | بانتظار التأكيد | `hourglass` |
| Past | `past` | default | انتهت | `time-quarter-pass` |
| Expired | `expired` | default | انتهت | `calendar-remove-02` |
| Active | `active` | success | فعّالة | `tick-double-02` |
| Refunded | `refunded` | success | تم الاسترداد | `tick-double-02` |
| Paid | `paid` | success | مدفوع | `tick-double-02` |
| Printed | `printed` | success | تمت الطباعة | `tick-double-02` |
| Refund in Progress | `refund-in-progress` | pending | جاري استرداد المبلغ | `hourglass` |
| Update IBAN | `update-iban` | pending | بإنتظار تحديث الآيبان | `hourglass` |
| In Progress | `in-progress` | pending | جاري التنفيذ | `hourglass` |
| Executed | `executed` | success | تم التنفيذ | `tick-double-02` |
| Refund Failed | `refund-failed` | error | فشل استرداد المبلغ | `cancel-01` |
| Rejected | `rejected` | error | مرفوضة | `cancel-circle` |
| Active permit | `active-permit` | success | موعد فعال | `tick-double-02` |
| Visa Issued | `visa-issued` | success | تم الإصدار | `tick-double-02` |
| Visa Issued 02 | `visa-issued-02` | success | أُصدرت التأشيرة | `tick-double-02` |
| Visa Not Needed | `visa-not-needed` | success | لايحتاج إلى تأشيرة | `tick-double-02` |
| Valid visa | `valid-visa` | success | تأشيرة سارية | `tick-double-02` |
| Under Review | `under-review` | pending | تحت المراجعة | `hourglass` |
| Visa Under Review | `visa-under-review` | pending | الطلب تحت المراجعة | `hourglass` |
| Consl. visit | `consular-visit` | pending | مراجعة القنصلية | `flag-02` |
| Passoirt Req. | `passport-required` | pending | الجواز مطلوب | `passport-01` |
| New Booking | `new-booking` | gold | حجز جديد | `hajj-service` |
| Awatining Payment | `awaiting-payment` | pending | بانتظار السداد | `hourglass` |
| Issueing Permits | `issuing-permits` | pending | جارٍ إصدار التصاريح | `student-card` |
| Permits Issued | `permits-issued` | success | أُصدرت التصاريح | `tick-double-02` |
| Order Lost | `order-lost` | error | فُقدت شحنتك | `package-remove` |
| Order Cancelled | `order-cancelled` | error | تم إلغاء الطلب | `alert-02` |
| Order Received | `order-received` | success | تم استلام الطلب | `package` |
| Ready for Pick up | `ready-for-pick-up` | pending | تجهيز الطلب | `package-process` |
| Delivered | `delivered` | pending | تم الشحن | `package-moving` |
| Out for Delivery | `out-for-delivery` | pending | جار التوصيل | `truck-delivery` |
| Order Delivered | `order-delivered` | success | تم التوصيل | `safe-delivery-01` |
| Order Returned | `order-returned` | pending | مسترجعة | `return-request` |
| Ready For Pickup | `ready-for-pickup` | pending | جاهزة للاستلام | `hourglass` |
| Activate SIM | `activate-sim` | pending | بانتظار التفعيل | `hourglass` |
| Approved (new 14 Nov) | `approved` | success | مقبول | `document-validation` |
| Installation | `installation` | success | جاهزة للتثبيت | `smart-phone-04` |

#### Date & Time and QR Code Status (15 November 2026)

- **DayTab:** 80 × 78, radius 14, padding 12 / 8 / 8. Weekday `notes-2-regular` `text-subtle` over the date `headline-1-regular`; 14 corner icon (moon-01, or `unavailable`); availability bar 8 × 4 (green, orange, red, Smoke). Selected: `surface-shade-6`, 1.5 `surface-longing` line, `text-link`; Unavailable: Ivory, Pearl line, `text-note`. Today chip: Gold solid XS on the top edge.
- **TimeSlot (replica, re-read 17 November 2026, 21:10,** 📅 Date & Time › Time slot card, Selected Default / Selected / Disabled on `_Time slot card Master`**):** built as Figma builds it: a 12 band top and bottom (an 18 corner piece at the start, the 17 ticket with the notch, the rest) and a 32 middle with side lines only, overlapping by 1: 54 high, padding 18 at the sides. Corners Radius/MD, which the 12 band clamps to 12. The notch is a shallow bite 11.3 wide at the edge and 4.2 deep, its tip 27 from the **start** edge (right in Arabic), on the opposite side from the markers; the line follows it. Markers: 20 circles (12 icon, 4 padding, 1 line inside), overlapping by 7, the first on top, from −3 / −3 at the end corner, in the order soon (Ivory, Pearl line), instant (shade 5, shade 2 line, `icons-illumination`) and prayer (white, Pearl line). Text: time Body 1 Regular and period Body 2 Light, 4 apart. Default white + Pearl; Selected shade 2 + Longing, every marker Longing with a white icon; Disabled Ivory + Pearl with `text-note`, and nothing else: no «مكتمل» or other added text (GC-R13). With the master's Show Icon (24, at the start) and Crowd (Chips Pending MD, at the end) the text fills the middle. Until this release code put the notch on the markers' side as a 17 semicircle and drew 22 markers.
- **PrayCard (17 November 2026):** 110 × 90, radius 18. One 24 icon (sunrise), the day in `body-1-light` and the men's and women's icons 16, nothing else: the «رجال / نساء» text line is gone and `note` is spoken only. Off Ivory, padding 26, `text-subtle`; On `surface-shade-6` with a 1.5 Illumination line, padding 18, `text-link`.
- **InfoTile:** 125 wide, radius 18, padding 12 / 26 / 8; title 12 + sun-03 16; value 32 + unit 12; Good, Alert and Danger use the Success, Warning and Error alert colours.
- **QRCodeStatus:** 200 × 200, radius 14, Nusuk logo in the centre by default. Since 17 November the code art follows 🏖️ Travel › QR Code Status: a 25-module dot code, rounded finder squares top right and bottom left, a dot top left, the mark in a clear centre. The art is decorative; pass `src` with a real code. Every other state blurs the code; Used, Expired and Cancelled show an MD chip (Success, Default, Error), Error a Primary SM «تحديث» button.

### Icons, Avatar, Chip

#### Travel (17 November 2026, from the design system comments)

Read from [🏖️ Travel › Travel](https://www.figma.com/design/ozi4A2gUbVXbzbUJ3MF4uU/?node-id=70393-17066) (node 70393:25450) at the DL Advisor's request.

- **FlightTicket:** a two-part ticket 386 wide. Top: padding 26 / 20 / 4, radius 18 18 0 0, white rising from 30%. Departure country (`notes-1-regular`), time (20 Light) and code on the start side, arrival on the end side; between them a 94 column with the duration, a dashed arc with the airplane-02 pill (Ivory, 3 white ring) and «رحلة مباشرة»; Default XS chips under it. A 28 tear line with transparent semicircle notches at both edges and a 6 / 6 dashed Pearl rule. Bottom: airline logos (28 circles overlapping 7.6), airline and «تديرها …», seats in the warning colour, riyal and price, «لكل مسافر». Selected: `surface-shade-4` with a Longing line around the notches. Skeleton and Mini; Ribbon/On on top.
- **18 November 2026 (review comments):** FromTo and DateRange line every row up on its field's own edge, so Latin codes and dates sit under their Arabic labels; Visa User Block is RTL (name at the start, check at the top end corner); FeaturedAirport and FeatureBox default to Arabic text.
- **Ribbon** («الارخص»), **FromTo** (Destination: trip tabs, two fields and the swap), **DateRange** (Duration: Default, Active, Disabled), **FeaturedAirport** (Off, On), **FeatureBox**, **VisaUserBlock** (name as on the passport, gender, flag, Selected) and **HotelCard** (photo with dots, specs, favourite, distance, rating, features, nights, price with an optional old price and discount).
- Rules: routes read from the start side; times and codes stay left to right. The ribbon only when true for the current results, never for paid placement. Seat counts only from live inventory. The airline logo group in the preview is a 1x export; use the brand files.

#### Icons (152 in the coded set)

Use the Figma names as asset names. Export each from Figma (🧭 Navigation, 🃏 Cards and the icon library) as vector (PDF or SVG for iOS asset catalogs, Vector Drawable for Android), single colour, tinted with the icon token (`icons-black`, `icons-gray`, `icons-white` or the text colour of the component). Directional icons mirror in RTL.

`absher`, `airplane-01`, `airplane-landing-02`, `airplane-take-off-02`, `alert-02`, `alert-circle`, `arrow-down-01`, `arrow-left-02`, `arrow-right-01`, `arrow-right-02`, `bank`, `bed-double`, `berlin-tower`, `calendar-04`, `calendar-remove-02`, `call`, `cancel-01`, `cancel-circle`, `checkmark-badge-02`, `contact-02`, `customer-support`, `delete-03`, `filter`, `flag-02`, `gps-01`, `hajj`, `hajj-service`, `hajj-service-solid`, `hajj-solid`, `hourglass`, `internet`, `loading-03`, `location-01`, `madinah`, `madinah-solid`, `mail-validation-01`, `makkah-city`, `masjid-gates-solid`, `menu-circle`, `more-vertical`, `nafath`, `nusuk-logo`, `package`, `package-moving`, `package-process`, `package-remove`, `palm`, `palm-solid`, `passport-01`, `plus-sign`, `qr-code`, `rawdah`, `remove-01`, `return-request`, `riyal`, `riyal-sharp`, `safe-delivery-01`, `scissor`, `search-01`, `share-05`, `shopping-basket-01`, `sidebar-left`, `simcard-02`, `smart-phone-04`, `sorting-05`, `spam`, `speed-train-01`, `star`, `stars`, `store-03`, `store-03-solid`, `student-card`, `thumbs-up`, `tick-02`, `tick-double-02`, `ticket-03`, `time-02`, `time-quarter-pass`, `truck-delivery`, `umrah`, `user`, `user-03`, `user-story`

Added 9 November for patterns (11): `customer-service-01`, `dua`, `golf-cart`, `haji`, `id`, `kaaba-01`, `madinah-city`, `play`, `quote-up`, `quran-01`, `sujood`.

Added 14 November for the bottom bars and statuses (12, 133 in the coded set): `search-list-01`, `car-02`, `infinity-01`, `play-list`, `book-open-02`, each with its `-solid` form, `airplane-02-solid`, `document-validation`.

Added 14 November, later, for lists and order steps (9, 142 in the coded set): `checkmark-circle-02`, `checkmark-square-02`, `download-04`, `package-search`, `package-receive`, `delivery-truck-02`, `package-out-of-stock`, `delivery-view-01`, `money-exchange-01`.

Added 15 November for Date & Time and QR Code Status (8, 151 in the coded set): `zap`, `salah`, `moon-01`, `unavailable`, `sun-03`, `sunrise`, `muslim`, `exchange-01`.

Added 16 November for File Uploader (152): `upload-04`.

Short names used in older code (`search`, `close`, `calendar`, `plus`…) map to these; see `ALIAS` in `bundle.js`.

#### Avatar

| Size | xs | sm | md | lg | xl |
|---|---|---|---|---|---|
| px | 24 | 42 | 56 | 72 | 100 |

Circle. State Negative = `surface-01-white`, Positive = `surface-02-ivory`. Kinds: Icon, Initials, Emojis, Picture. Cards resize avatars to 38 (`px` in code). Groups overlap by 15 (5 for entity logos), later items on top.

#### Chip

Read from 🍟 Chips › `_Chips Setup` on 15 November 2026 (published): one variable mode per size, so every chip of a size shares the same numbers. Side padding came down on 15 November (was 12 / 14 / 14 / 16, icon side 10 / 12 / 12 / 14).

| Size | Height | Side padding | Icon side | Gap | Text | Icon |
|---|---|---|---|---|---|---|
| XS | 18 | 8 | 6 | 4 | 10 | 12 |
| SM | 20 | 10 | 8 | 4 | 12 | 14 |
| MD | 24 | 12 | 10 | 4 | 12 | 14 |
| LR | 28 | 14 | 12 | 6 | 14 | 16 |

- Text: Headline family, Regular, line height 1.28, no letter spacing. Figma pads the label 2 at the bottom, so it sits 1 above the centre; code does the same.
- The icon leads (right in Arabic, left in English) and takes the smaller padding on its side. Background Off (`background="bare"`) drops the fill and the side padding; height, gap and text stay.
- **Cards use XS.** Every chip in 🃏 Cards renders 18 high with 10 text, including the ones set to SM or MD there (Media Cards, Member Card): build them as XS (CH1).
- States: default, pending, success, info, error, gold, white; `solid` uses the solid alert fills (Figma has Solid for Gold only).

#### Selection controls: Switch, Checkbox, Radio, SelectCard (read 14 November 2026)

Figma: 📻 Switches (`zhcTb4a0XbF3YeYF9XI6zw`), Status [Default, Selected, Disabled, Disabled Selected, Error] × Size [SM, MD, LR]; sizes from `_Switches Setup` (`control-*`).

| | SM | MD | LR | Colour |
|---|---|---|---|---|
| Switch track, knob | 32 × 16, 16 × 12 | 42 × 21, 24 × 18 | 54 × 27, 32 × 24 | Off `surface-04-mist`, on `surface-10-ink`, white knob; disabled Pearl track and Mist knob; error solid `alerts-surface-solid-error` |
| Checkbox | 18 | 18 | 24, tick 18 | Empty: 1 px `surface-longing` line; ticked `surface-illumination` with a white `tick-02`; disabled Pearl (Ink tick at 50% when ticked); error 2 px `alerts-icons-error` line |
| Radio | 18 | 18 | 24, centre 13 | Off Mist, on `surface-illumination`; white rounded-square centre 10, radius 4, avatar shadow; disabled Pearl with an Ivory centre (Mist when chosen); error solid red |
| Label, gap | 14, 8 | 16, 12 | 18, 12 | `text-content`; disabled `text-note`; error `alerts-text-error` |

SelectCard (re-read 16 November 2026): 308 wide, radius 14 (`radius-s`), padding and gap 18. Active `surface-01-white` with a 1 px Ivory line and the OS shadow; Selected `surface-shade-5` with a 1 px `surface-illumination` line; Disabled Ivory with a Pearl line at full opacity, description `text-note`, gap 20. Title 14 `text-content`, description 16 `text-heading` (as Figma). The icon sits alone in the top row. There is no radio: the selected state alone shows the choice (GC-R12; prototypes built from an older standalone skill drew one).

FileUploader (16 November 2026, ⌨️ Inputs): Type Default, Loading, Uploaded, View × Status Default, Error, Disabled. 78 high, radius 18, padding 20 / 18, 1 px Pearl line; Secondary XS icon buttons `upload-04`, `view`, `delete-03` (Fate); file-types Hint under it; Error adds the Error hint.

Until 14 November code drew the chosen checkbox and radio in Ink, the MD switch 40 wide, disabled controls at 38% and errors as outlines. They now follow Figma. Contrast (F16): the gold fill is 2.5:1 on white, the empty checkbox line 1.9:1 and the empty radio 1.6:1, under the 3:1 WCAG 1.4.11 asks of a control's boundary and state.

#### Lists, sheets, steps and widgets (read 14 November 2026)

- **DropdownItem** (⬇️ Dropdown list › Dropdown item on `_Dropdown item list/On`): padding 12 above and below, gap 18, a 1 px `surface-03-pearl` line under; title `body-2-regular` (`text-heading`), details `notes-2-light` (`text-content`) 4 below; lead icon 20, flag 20 × 15, avatar SM 42. Radio and Checkbox: the row is the control, a 24 solid check (`checkmark-circle-02` Solid, named `checkmark-circle-02-solid` in code; `checkmark-square-02`) in `icons-longing` when chosen (F19). Toggle: the MD Switch. Download: `download-04`. Rows 61 tall, 66 with an avatar.
- **Sheets** (Bottom Sheet BG): inset 8, corners 42 at the top and 54 (`radius-ios`) at the bottom, `glass-full`, grabber 36 × 5 Mist in a 26 band. DirectionSheet: content 32 / 26 / 48, gap 26, title `headline-1-regular`, subtitle `body-2-light`, options as DropdownItem rows without gaps (4 above and below), actions 4 apart (Ghost MD). Support Bottom Sheet: an Ivory sheet with three quick actions (Ivory tiles, radius 22, padding 12 / 18, icon 20, `notes-1-regular`; emergency in `alerts-surface-error` with `alerts-text-error`) over a white sheet with the questions list.
- **Steps** (🔦 Tracker › Steps, replica 14 November, night): columns hug their labels; a 20 point 18 in from the start (Previous Ink dot 12, Current the stage icon 20 in `icons-illumination` over the Breathing Effect glow, Next a 1 px `surface-05-smoke` ring 12), 18, then a 1 px line to the end of the step (`surface-07-slate` behind; on the current step Slate fading to clear, ahead `surface-04-mist` fading the same way; none on the final step); label 12 below, 18 in from the start and 32 at the end, `notes-1-regular`, Next at 40%; details `notes-2-light` (`text-note`) on the current step. The glow breathes once (4 s) and rests. The bar scrolls sideways.
- **StartJourney** (🎫 Widgets › Start Journey): SM card 80 tall (padding 18, gap 12, radius 18, `surface-01-white` to `surface-white-shine`, `shadow-xs`; «ابدأ رحلة» + the journey word and icon in `headline-2-light`; Secondary SM icon button), XS three 80 × 80 tiles (icon 24 in a 60 square, `body-2-light`), LR section title over three 92-tall cards (`body-1-light`; Umrah icon in `icons-longing`).
- **AvatarGroup, Travel** (🏖️ Travel › User Group): Active Off 42 · 42 · 42 · 56 · 42 · 42 · 42, Active On 24 · 42 · 56 · 72 · 56 · 42 · 24, overlap 9, 1.5 white ring, the middle on top; caption `body-2-regular` with the XS icon avatar, 8 apart.


#### CSAT and NPS: FeedbackEmojis, NpsScale, CustomerFeedback (read 16 November 2026)

From [⭐️ Rating & CSAT](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl). FeedbackEmojis: five 59 circles (Very dissatisfied `quran-crimson`, Dissatisfied `quran-crimson-shade`, Neutral `quran-saffron-shade`, Satisfied `quran-mint`, Very satisfied `quran-emerald`) with the Smiles mouth in the paired colour; others at 40% after a pick; picked name `notes-1-regular`. Left to right in both languages. NpsScale: 37 circles, 1–6 `alerts-surface-error`, 7–8 warning, 9–10 success, `notes-1-regular` `text-subtle`; `from={0}` for 0–10. CustomerFeedback: sheet padding 26 / 8 / 48, gap 20; 72 gold icon circle, emoji, `headline-1-light` title, `body-2-light` subtitle; CSAT block radius 14, padding 18; reasons as 60 cards (radius 18, Pearl line, soft shadow, MD checkbox at the end) after a low score; Primary MD disabled until a pick, Ghost MD «ذكرني لاحقًا». Known issues F56–F65.

---

## M9S · Surface allocation: where a service shows, when, for whom

Load when: deciding what goes on Today or a landing, ordering sections, placing a service, a push or a notification, or designing for a mindset. Adopted from the Surface Allocation Board, Round 2 (53 user-facing services, 9 journeys, 123 steps; sources: Features Catalogue, Journey of Journeys board, Maps step model). The full service catalogue and the atlas of every step are Appendices A and B.

### Three axes, not one

| Axis | Values | Nature | The question |
|---|---|---|---|
| **Placement (P)** | P0–P5 | Dynamic: a property of service × step × mindset; earned and revoked by metric | "Is this the right answer, here, now?" |
| **App level (L)** | L1–L4 | Static: how deep the screen sits in the IA | "How many taps down does this live?" |
| **DNA** | Core · Supportive · Extra mile · Ancillary | Strategic: settles arguments | "Would Nusuk still be Nusuk without it?" |

DNA and L are mindset-invariant; P is not. Never use L-numbers for placement (the old L1–L5 placement scale is retired).

### Placement: P0 to P5

| P | Name | Entry test | Failure mode |
|---|---|---|---|
| **P0** | Withheld | Not rendered for this mindset at this step: the person lacks the authority or context to act. An absence, not a low placement | Showing a booking control to a Dependent or to an Organised-group member: they experience a broken product and open a ticket |
| **P1** | Today | Push, or a handoff the system proposes with a visible decline. Latency must be Now or Today. Must be relevant to the CURRENT step, not the journey in general. | Filling P1 because it looks empty. At rite steps and waiting steps, sparse IS the design. Session value density will read low at those steps and that is correct — they are exempt by design. |
| **P2** | Stage hub | Pull-initiated. Episodic rather than daily. Genuinely relevant to the current phase — and demoted automatically when the phase closes. If it would be relevant in every phase, it belongs in nav, not a hub. | Letting a hub become a permanent catalogue. If the same services sit in a hub across every phase, the hub has stopped being phase-scoped and has quietly become a second landing screen. |
| **P3** | Search & directory | No entry test. This is where a service sits until it earns something higher at a specific step. Nusuk AI as intent router is what makes P3 safe: it resolves the 28 'whenever' services without requiring the pilgrim to know a menu. | Judging a P3 demotion by app-wide metrics. The signal is service-level: search fallback rate per service. If nobody searches for what you removed, the removal was safe. |
| **P4** | Positional | A geofence or rite-state trigger that is defined and testable. Accuracy must hold at 95% or higher; false positives are the harm, not false negatives. | Positional surfacing degrading into ambient noise. Below 95% accuracy, suspend the trigger and revert to P3 until it is fixed. |
| **P5** | Permanent | Named on the exception list by DX and CX jointly. Reachable within two taps from every screen, in every state, including full suppression. | Letting a commercial or rite suppression window hide support. Nothing suppresses P5 — not ihram state, not Arafah, not a payment flow. |

**P1 · Today.** The pilgrim did not ask for it, and it is still the right thing to show. P1 asserts: it takes the top of the screen and claims the moment.
- *3.9 · الوصول إلى جدة:* Sim & eSim sits at P1 because the pilgrim has just landed with no connectivity. They physically cannot search for it. This is the strongest P1 case in the product — high need, time-bound, and unsearchable.
- *5.10 · الوصول الى الحرم وبدء المناسك:* Tawaf counter and duaa per shawt. Nothing else. The pilgrim is walking, in crowd, in ihram, often one-handed. P1 here means an almost empty screen — which is the correct output, not a gap to fill.
- *2.5 · المشاركة والترشيح:* Family and Friends at P1 for Dependents only — rendered as participation state, never a booking control. A Dependent has no purchasing authority; showing them a booking flow creates confusion and support load.

**P2 · Stage hub.** The most misunderstood level, so worth being precise. A stage hub is a destination the pilgrim enters deliberately, holding 4–8 services relevant to the phase they are in. Its membership CHANGES as the journey moves. It is not a menu of everything, and it is not a category page — it is a phase-scoped shelf.
- *The five hubs:* Plan hub (phase 2): package, flight, hotel, wallet, Nusuk Pass. In-journey hub (phases 3–5): transport, maps, group, support. Faith hub (always): Quran, Athkar, Duaa, Hadith, Hisn Almuslim. Commerce hub (phase 6 only): Marketplace, Museum Tickets, Tourism. Post hub: certificate, rating, celebration.
- *2.3 · حجز الطيران والفنادق:* Wallet and Support Center sit at P2 while flight and hotel hold P1. The pilgrim is not sent to them — but the instant a payment fails, they are one tap away. That is the whole job of a stage hub: proximity without assertion.
- *6.1 · الإنتهاء من المناسك:* City Guide, Museum Tickets, Marketplace and Zamzam enter the commerce hub — and this is the ONLY step in the Umrah journey where they legitimately do. Before this moment the same hub is empty of commerce.
- *Faith hub, always on:* The one hub that never empties. It contracts to a strip during rite steps rather than disappearing — prayer times still fire inside every suppression window.

**P3 · Search & directory.** Not a demotion — a starting position. Reachable in one search, occupying no permanent real estate. Twenty-one of 53 services rest here, and for most of them that is the right answer permanently.
- *Permanent P3 — never reaches the landing:* Massage, Nusuk Game, Certificate (Printable), Discounts & Offers. No step in any journey earns them above search. Writing the ceiling down is the point — otherwise the argument reopens every quarter.
- *Step-gated P3 — reaches P1 at its moment:* Umrah Permits, Rawdah Permits, Local Hajj Flow, International Hajj Direct, Tahalol. Invisible off-window, dominant in-window. Season-gating is what lets a low-frequency service earn P1 without occupying it year-round.

**P4 · Positional.** Placement by WHERE the pilgrim is or WHAT rite state they are in. The service has no menu home worth defending — it appears because the geofence or the rite state fired.
- *Tahalol — Haircut:* The textbook case for the entire model. No business on a landing screen at any other moment, and the only thing that matters at this one. Triggered by rite state: sa'i completed.
- *Golf Carts:* Accessibility-critical inside the Haram and at 5.7 التوجه الى الحرم مع المرافقين — the one step where a Caregiver routes for their least mobile companion. Must be reachable without leaving the rite screen.
- *Sim & eSim:* Arrival geofence. Positional and P1 simultaneously — the trigger puts it on screen, the urgency keeps it at the top.

**P5 · Permanent.** The anxiety-weighted exception. Rare, but catastrophic when missing. Frequency logic actively fails here: these are the services a usage-driven IA would bury, and burying them is the failure.
- *Support Center:* Appears at 22 of 39 steps — more than any other service. At 3.11 تجميع الحقائب والأمتعة it is the P1 item, because lost luggage in a foreign country at the start of a pilgrimage is a distress event, not an inconvenience.
- *Nusuk ID / Hajj ID:* Credentials. Must render with no network (offline availability). A credential that requires signal is not a credential. CONSOLIDATION FLAG: two IDs doing one job — at a checkpoint, choosing between two ID screens is a design failure.

The five stage hubs (P2): **Plan** (phase 2: package, flight, hotel, wallet, Nusuk Pass) · **In-journey** (phases 3–5: transport, maps, group, support) · **Faith** (always: Quran, Athkar, Duaa, Hadith, Hisn Almuslim; contracts to a strip during rite steps, never disappears) · **Commerce** (phase 6 only: Marketplace, Museum Tickets, Tourism) · **Post** (certificate, rating, celebration).

### App level: L1 to L4

| L | Name | What it is | Lives here |
|---|---|---|---|
| **L1** | Landing | The entry screen. What renders when the app opens. This is where P1 content is displayed. P1 and L1 are not the same thing: P1 is the decision that something deserves the moment, L1 is the screen that shows it. Today view, journey state, the faith strip. | Prayer Times widget · Today cards · journey state card · the T3 commercial slot, capped and suppressible |
| **L2** | Service pages | The hubs and lists. A collection of services, one level in. Where P2 stage hubs live structurally. Plan hub, in-journey hub, faith hub, commerce hub, post hub — plus the full services directory that P3 search resolves into. | Faith hub · Plan hub · Marketplace list · City Guide index · services directory |
| **L3** | Service page / booking | The service itself. Detail, configuration, transaction, confirmation. The last level of substantive detail. Where a booking is configured and paid, where a permit is applied for, where a rite step is performed. Most catalogue services have their real home here. | Umrah Permits application · hotel booking flow · Tawaf counter screen · Rawdah permit request |
| **L4** | Detail of detail | The artefact inside the detail. A QR, a ticket, a certificate, a credential. Structurally the deepest point, and behaviourally often the most important. These are the things a pilgrim actually holds up at a gate. Depth here is correct — but any of them can be promoted to P1 the moment it is needed. | Booking QR · Rawdah permit QR · Nusuk ID credential view · digital certificate · boarding state |

#### Where P and L diverge

Depth is where a thing lives; placement is when it matters. The sharpest case: an L4 artefact promoted to P1 at the moment of use (a booking QR is four levels deep until the checkpoint, then it is the whole screen).

| Service / artefact | L | P | Why |
|---|---|---|---|
| Nusuk ID credential view | L4 | P1 at step 3.10 | Deepest artefact in the app, and the entire screen at immigration. Must render with no network — a credential that requires signal is not a credential. |
| Certificate (digital) | L4 | P1 at step 6.1 | Buried until the rites complete, then the first thing on screen. Must never read as a paywall preview for the printable version. |
| Rawdah permit QR | L4 | No step yet | GAP: phase 7 رحلة المدينة has zero steps. The board shows Madinah as a branch without detail, so this artefact has no placement case in the model. |
| Tahalol — Haircut | L3 | P4 → P1 at 5.10 | A service page nobody browses to. Rite state promotes it from invisible to primary. |
| Support Center | L2 | P5 permanent | Structurally shallow, permanently placed. Depth and placement agree here — which is why it works. |
| Prayer Times | L1 | P1 always | The only service where level and placement are locked together in every state, including inside full suppression. |
| Museum Tickets | L3 | P3 → P2 at 6.1 | Lives deep and stays deep. Reaches a hub at exactly one step, and never the landing. |
| Discounts & Offers | L1 slot | P3 / slot | Renders on the landing but is not placed there — it is a governed, capped, suppressible slot, not a service with a position. |
| Nusuk AI | L1 entry | Router, not a level | Cross-cutting. It is the mechanism that makes P3 safe, not a destination competing for space. |

### Service DNA

| DNA | Services | Means | Test | Examples |
|---|---|---|---|---|
| **Core** | 21 | Nusuk's reason to exist | If it fails, the mission fails. A pilgrim cannot complete Hajj or Umrah through Nusuk, or cannot practise daily worship. These carry the North Star. | Permits · credentials · rites · prayer · Quran · wayfinding inside the Haram |
| **Supportive** | 20 | Makes Core possible | If it fails, Core degrades but survives. The pilgrim could route around it — painfully. Support, wallet, transport, group, content. | Support Center · Wallet · transport · Motawef · Content HUB · Nusuk AI |
| **Extra mile** | 5 | Deepens the relationship | Goes beyond obligation for the pilgrim's benefit. Nothing breaks without it — but something warm is lost. Earns trust. | Celebration Cards · Zamzam · Halal Food |
| **Ancillary** | 7 | Monetises the visit | Commercial breadth. Legitimate, but it does not deepen the relationship — it spends attention rather than earning it. Needs the strictest placement discipline. | Museum Tickets · Tourism · Massage · Car Rental · Discounts |

- DNA sits beside the catalogue categories (Journey, Global, Faith, Market, Content): those say who builds it; DNA says whether Nusuk needs it.
- **Extra mile is not Ancillary.** One earns trust, the other spends attention; they never share a bucket.
- **Diagnostic:** zero Ancillary services rest above P3. That is the model working, and the sentence for anyone arguing for a tile. The six Core services resting at P3 (permits, Hajj flows, Tahalol) are step-gated: invisible off-window, dominant in-window.
- **Core-for-mindset override:** DNA stays invariant, but a few services carry an override where they are functionally Core for one mindset (Golf Carts for a Dependent with mobility needs). Record the override; never make DNA mindset-relative.

### Render bands: how Today and every landing compose

When several items qualify at one step, compose top-down. **Bands never invert.**

| Band | Name | Rule |
|---|---|---|
| 1 | Ritual & safety | Prayer windows, rite state, crowd and safety guidance, support access. Displaces everything below it, including an active transaction. |
| 2 | Commitment state | Permit approved, payment failed, slot released, credential required. Passes every suppression window; commercial never does. State beats task. |
| 3 | Journey step | The action the current step exists for. Step-scoped, demotes automatically when the step closes. One per step. |
| 4 | Daily habit | Quran, athkar, habit continuation. Collapses to a strip when a journey is active — it does not disappear. |
| 5 | Learning | Rites content, guidance, feedback prompts. Injected inside a step, rarely a destination. Never displaces an action. |
| 6 | Commercial | Lowest band. Governed by the suppression map, not the campaign calendar. Cannot enter bands 1–5 by any mechanism, including paid placement. |

### Interrupt tiers: pushes and notifications

| Tier | For | Rule |
|---|---|---|
| **T0** | Ritual & safety (prayer windows, Arafah, Muzdalifah, Jamarat guidance) | Never suppressed. A late prayer notification is worthless |
| **T1** | Commitment state-change (permit approved, payment failed, slot released, credential needed) | Passes every suppression window |
| **T2** | Habit | Cadence set by the person |
| **T3** | Commercial | Hard-capped (weekly), fully suppressed in sacred context; cannot enter bands 1–5 by any mechanism, paid placement included |

Break the notification opt-out rate (Trust Index) down by tier: T3 must not hide behind the goodwill T0 earns.

### Upstream: desire → intent

The step model starts at a journey step, but most of the 200M are before any step.

| State | Who | What fills P1 |
|---|---|---|
| **State 0 · Pre-desire** | No desire yet; no journey, nothing to book | **Meaning, not offers.** Reward and merit of the journey, the Prophet's city, sites of the sirah, heritage. Offers here are illegitimate by definition |
| **State 1 · Evolving desire** | Initial desire exists | Feed it: preparation steps, flight and hotel offers, getting to know Makkah and Madinah. Offers are legitimate, as preparation, never pressure |
| **Gate · Intent** | Measurable: the person decides, or starts a booking flow at least once | Hand over to the journey; the travel mindsets take over |
| **Model** | Phase · step · mindset | Everything above applies; P becomes step-scoped and mindset-variant |

A person with no journey is not an empty state: they are in pre-desire, with its own content strategy. Same content, different state, opposite verdict.

### Mindsets

**Travel mindsets** (two axes: leads ↔ receives decides **control vs state**; independent ↔ contingent decides **decision vs consultation**):

| Mindset | Renders as | Rule |
|---|---|---|
| **Independents** · المستقلون | Control × decision | Independents lead their own experience and decide for themselves. Full controls, direct decisions — and the flow the app is currently built for, which is why the other three feel wrong. |
| **Caregivers** · مقدمين الرعاية | Control × contingent decision | Caregivers lead, but their decisions are contingent on the people with them. Every control is multi-person scoped: party size, mobility, medical, companion seating. |
| **Dependents** · المعالون | State × consultation | Dependents receive the experience; their needs set its pace. Render state and preference input — a booking control here is P0, an absence, not a low placement. |
| **Organised groups** · المجموعة المنظمة | State × following | Organised groups follow a provider's plan. The provider owns the transactions, so almost every step is state rather than control. Uncertainty, not idleness, is the problem. |

**Practice states** (daily practice; travel mindsets do not apply at home):

| State | Rule |
|---|---|
| **Established · مستقر** | Established — daily practice is formed. They reach steps nobody else does: pre-dawn, voluntary fasts, inviting family. The highest WMA per user in the product, and the least designed for. |
| **Intermittent · متذبذب** | Intermittent — practising, but not reliably. The largest and most winnable group. Every cooling signal is detectable before the lapse, and almost none are currently acted on. |
| **Lapsed · منقطع** | Lapsed — stopped, and reachable. Prayer times still fire regardless of habit state, which makes Fajr the one re-entry point that always works. Never monetise a return. |
| **Exploring · مستكشف** | Exploring — new to the app or to practice, no habit yet. This is also where pre-desire lives: a Muslim who may never travel, forming a relationship with the Haramain from afar. |

Placement by mindset (samples):

| Service | Independents | Caregivers | Dependents | Organised |
|---|---|---|---|---|
| Umrah Dynamic Package (booking phase) | P1 | P1 | P0 | P0 |
| Family and Friends (booking phase) | P3 | P2 | P1 | P3 |
| Motawef (throughout) | P3 | P3 | P2 | P1 |
| Golf Carts (steps 5.7, 5.8) | P4 | P1 | P1 | P4 |
| Services Providers Rating (provider choice) | P3 | P3 | P0 | P1 |

### What Today looks like

Every Today card is state-derived (location, programme status, crowd state, time of day); none is a service tile.

- *In Makkah, active Umrah programme:* today, a 10 PM visit ticket · the Haram is almost full, visit another place today · your second Umrah made easy with golf carts, do it for your parents · hydrate · we are nearby (Nusuk care).
- *In Tunis, upcoming Umrah:* be ready, here is your checklist · welcome to Saudi Arabia · your Umrah made easy with golf carts, do it for your parents · Makkah beyond the Haram · explore your package and benefits.

Same service, same mindset cue, different step: placement follows the step; framing follows the mindset.

### Suppression and sacred windows

- **Rite steps are nearly empty.** At Tawaf (5.10) P1 is the counter and the duaa per round, nothing else. Sparse is the design; session value density is exempt at rite and waiting steps.
- **Hajj:** all commerce is suppressed from Ihram (8 Dhul-Hijjah) until Tahalol, about five days. Release is graded: ramp, do not flood; in Tashreeq Halal Food is legitimate, Marketplace browsing is not. Arafah: maximum restraint, almost no interface, safety only.
- **Umrah:** the suppression window opens at the decision to begin the rites (5.4), not at the Miqat. Hotel arrival (4.4) is the first commerce-eligible moment and still too early: six-hour buffer.
- **Commerce reaches P2 only at a few steps** (rites complete 6.1, Madinah historic sites M4.1, Makkah beyond the Haram K1.2 after rest) and reaches P1 nowhere. Rite first, logistics after completion, never side by side.
- **P5 is never suppressed** (support, credentials, emergency): not by ihram, Arafah or a payment flow. Prayer times fire inside every window. Credentials render offline.
- **Never monetise a return** after a lapse. A spiritual act with a commercial rail (charity, sacrifice) keeps the act and the transaction in separate visual frames.

### Ceilings: never reaches Today

Massage, Discounts & Offers, Nusuk Game and Certificate (Printable) have no step that earns them a place on Today. Massage and Discounts & Offers appear only inside the commerce hub (P2); Nusuk Game and the printable certificate reach nothing above search. Writing the ceiling down stops the argument reopening every quarter.

### Measuring placement

- **Desire → intent conversion** at the gate (decided, or started a booking flow at least once).
- **Search fallback rate per service** after any P3 demotion: if nobody searches for what moved, the move was safe. Never judge a demotion on app-wide metrics.
- **Positional accuracy ≥ 95%** for every P4 trigger; below it, suspend the trigger and revert to P3. False positives are the harm.
- **GR-01 return after lapse** separates supportive from coercive design (streak completion rises under both).
- **Opt-out by tier** (T0–T3), T3 hard weekly cap, and Today item → meaningful action per band.

### Open flags (decisions, not rules yet)

- **Consolidation:** four catalogue rows for one athkar behaviour (Athkar, Duaa, Thikr, Hisn Almuslim): merge before allocating · Nusuk ID and Hajj ID: two credentials, one job · Nusuk Maps and Way Finding overlap, and Nusuk Maps is duplicated in the catalogue.
- **Ethics:** Ramadan Mysteries is a variable-reward mechanic in a worship season (reframe as fixed, earned reveals, or drop) · the printable-certificate upsell needs a session of separation from the digital certificate, never a card beside it.
- **Underweighted:** Live Streams is classified Supportive but behaviourally Core for a Muslim who may never travel.
- **Unserved steps:** pre-dawn tahajjud, voluntary fasts, duaa for the pilgrims (Hajj season), a daily user booking for their parents, inviting family (unmeasured growth loop).
- **Gap:** the Umrah journey board's Madinah phase (7) has no steps, so the Rawdah permit QR has no placement case there; the Madinah atlas (Appendix B, J3) covers the visit itself.

---

## M9P · Patterns and templates

Load when: building a section or a page, or reviewing one; load M9S first, because placement decides what a section may hold and where it may sit. A **pattern** is a CMS section: header + layout + items. A **template** is an ordered list of sections plus the bottom bar; from version 2.5 that list is called a **page model**, and what a kind of screen may hold is its **template contract** (M9T). Both are coded in the DL (`NusukDL`, group Patterns and Templates) and match 🃏 Cards › Partials and 🏠 Landing Experience V2 › CMS (read 9 November 2026).

### The page model

```json
{ "template": "rawdah-landing",
  "sections": [
    { "pattern": "featured-header", "band": "frame", "title": "مكة المكرمة", "actions": [ … ] },
    { "pattern": "upcoming-requests", "band": 2, "placement": "P1", "dna": "Core", "title": "الحجوزات القادمة", "actionLabel": "عرض الكل", "items": [ … ] },
    { "pattern": "cards-slider", "band": 3, "placement": "P1", "dna": "Supportive", "title": "وجهات مميزة", "tag": "#المحتوى", "layout": "row", "items": [ … ] },
    { "pattern": "services-box", "band": "hub", "placement": "P2", "title": "خدمات مميزة", "items": [ … ] }
  ],
  "tabBar": "home" }
```

- Every section: `pattern`, optional `title`, `tag` (#stream) or `actionLabel`, `items`, and its placement data: `band` (1–6, `frame` or `hub`), `placement` (`P1` on Today or a landing, `P2` for a hub), `dna` (the strongest DNA among its items). Optional: `states` (desire states it may show in: `pre-desire`, `evolving`, `journey`), `withheld` (mindsets that get P0, e.g. `["D", "O"]`), `suppress: "sacred"` (band 6 always). The CMS checks band order before publishing. Layout options: `cards-slider` `layout: row | grid`; `guide` `variant: card | plain`; `categories` item `type: image | product | face`.
- Code: `NusukDL.Page({ template, sections, tabBar, width })`; `NusukDL.templates` holds the JSON; the same file is `templates/rawdah-landing.json`.
- Native: decode the same JSON (M11). The CMS (Section Composer) and the app share this model, so a page change is a content change, not a release.

### The twelve patterns

| `pattern` | Component | What it is | Intent / desire | Behavioural logic |
|---|---|---|---|---|
| `featured-header` | FeaturedHeader | The top of a destination landing: photo, search bar, title and four quick actions. | Spiritual / Emotional: the place itself. | Quick actions are the current stage hub's top four (phase-scoped, M9S P2), not the most used services of all time. |
| `upcoming-requests` | UpcomingRequests | The person's next bookings at the top of a landing page. | Intent: what I already booked comes first. | Reassurance: date, time and status at a glance (Feedback). |
| `categories` | Categories | A section with a row of tiles that scrolls sideways: categories, products or faces. | Functional or Emotional, by content (services vs gifts vs voices). | Attention & Cognitive Load: one row, one kind of item. |
| `category-chips` | CategoryChips | A section of topic chips that wrap: Secondary SM buttons with a trailing icon. | Desire realm: browsing topics. | Low commitment: a chip only filters or navigates. |
| `cards-slider` | CardsSlider | A row of media cards that scrolls sideways; `layout="grid"` gives the 2 × 2 grid used for videos. | Desire realm: discovery of content and offers. | Framing: the type pill tells what the card is before the title; no fake scarcity on prices. |
| `playlist` | PlaylistRow | A row of vertical playlist cards. | Spiritual desire: listening. | Autonomy: nothing plays until tapped. |
| `list-side-by-side` | ListSideBySide | Pages of two horizontal playlist cards that scroll sideways. | Spiritual desire with a known time cost (duration). | Present bias: show duration so a small step is easy. |
| `leaderboard` | Leaderboard | One featured media card, full width, with the fade surface. No section title. | Desire → intent: one featured offer. | Use once per page; it carries the strongest visual weight. |
| `guide` | Guide | A preparation guide: hint widgets that scroll sideways with page dots, in a white card (default) or plain. | Transformational intent: getting ready for a rite. | Commitment: a private checklist; never shame unticked items. |
| `services-box` | ServicesBox | A tinted box with a 4-column grid of service tiles. | Functional intent: the services of this place. | A stage hub (P2): 4–8 services of the current phase; membership changes with the phase. A service relevant in every phase belongs in navigation. |
| `bento-grid` | BentoGrid | A mixed grid of four media cards (wide, two halves, wide) and an optional "Show more". | Desire: curated content. | Hierarchy by size, not by colour. |
| `cards-list` | CardsList | Stacked full-width media cards with an optional "Show more". | Desire → intent: comparable offers. | Same card type in one list so prices compare. |

#### Placement of each pattern (M9S)

| `pattern` | Bands it may carry | Placement | DNA it may carry | Mindset and state |
|---|---|---|---|---|
| `featured-header` | frame | L1 hero; actions are the P2 stage hub | — | Actions follow the phase; a booking action is withheld for D and O |
| `upcoming-requests` | 2 | P1 | Core, Supportive | State for everyone; controls (cancel, change) only for I and C |
| `categories` | 4, 5; 6 for products | P1 (4), P2 (5), slot (6) | Any; Ancillary only as band 6 | Products never in pre-desire or sacred windows |
| `category-chips` | hub | P2 (Faith or content hub) | Core, Supportive | All |
| `cards-slider` | 3, 5, 6 | P1 at the step that needs it (3), P2 (5), slot (6) | Supportive, Extra mile; Ancillary only as 6 | Booking cards withheld for D and O |
| `playlist` | 4 | P1; collapses to the faith strip during a journey | Core | All |
| `list-side-by-side` | 4, 5 | P1 (4), P2 (5) | Core, Supportive | All |
| `leaderboard` | 3, 5 | P1 | Supportive, Extra mile | One featured card; never a ranking |
| `guide` | 3, 5 | P1 at the step it prepares for | Core, Supportive | Ticks private; shown to D as preparation, not tasks |
| `services-box` | hub | P2 stage hub | Core, Supportive | Phase-scoped, 4–8 tiles |
| `bento-grid` | 5 | P2 | Supportive, Extra mile | Content only; never offers in pre-desire |
| `cards-list` | 3, 6 | P1 at a booking step (3), slot (6) | Supportive; Ancillary only as 6 | Booking cards withheld for D and O |

#### Layout specs

- **FeaturedHeader** (`featured-header`, Figma: Rawdah Landing › Toolbar (Featured BG, Navbar Inner Page, Featured Actions)): 402 × 420; photo 402 × 402 fading into Screen BK; Bar at y 72: glass round buttons 52 × 42 (back, support) and a glass search pill 42 high; Title `headline-1-regular` with a white glow at y ≈ 186; Featured Actions at y 286: four CategoryTile SM 88 × 100, gap 4, side padding 20.
- **UpcomingRequests** (`upcoming-requests`, Figma: Rawdah Landing › Quick Actions): Section title (tight) with "عرض الكل"; RequestCards 386 wide, gap 8, side padding 8; Upcoming cards hide the past-status row.
- **Categories** (`categories`, Figma: Categories (402 × 238)): Section title, then a row: side padding 8, gap 8, scrolls horizontally; Items: `type` image (CategoryTile 120 × 140), product (ProductTile), face (FaceTile 154).
- **CategoryChips** (`category-chips`, Figma: Categories (chips, 402 × 230)): Section title, then wrapped Secondary SM buttons (icon right), gap 8, side padding 8, aligned to the start.
- **CardsSlider** (`cards-slider`, Figma: Cards Slider (402 × 430) and the 2 × 2 Video grid in Rawdah Landing): Row: MediaCards 250 × 330, gap 8, side padding 8; Grid: 2 columns, cards 189 × 250, gap 8.
- **PlaylistRow** (`playlist`, Figma: Playlist (402 × 314)): Row of PlaylistCard 165 × 214, gap 18, side padding 8.
- **ListSideBySide** (`list-side-by-side`, Figma: List Side by Side (402 × 295)): Pages 330 wide, each two PlaylistCard (horizontal) with gap 18; pages gap 18, side padding 8.
- **Leaderboard** (`leaderboard`, Figma: Leaderboard (402 × 504)): Top padding 48, side padding 8; MediaCard 386 × 456, fade surface.
- **Guide** (`guide`, Figma: Guide (Default, Variant2)): Default: top padding 48, side 8; white card (Glass/Full) with padding 0/18/26, Collaps header, hints gap 4, dots; Plain: section title (tight), white hints, dots; Dots: 6 × 6 Pearl, current 16 × 6 Mist, gap 12, follow the scroll.
- **ServicesBox** (`services-box`, Figma: Services Box (402 × 354)): Top padding 48, side 8; box Teal shade + white conic light, radius 18, Glass/Full, padding 0/18/26; Collaps header; grid 4 columns, gap 4, CategoryTile SM 85 × 100.
- **BentoGrid** (`bento-grid`, Figma: Bento Grid (402 × 940, three slots)): Wide 386 × 220, halves 189 × 330, wide 386 × 220, gap 8, side padding 8, fade surface; `more`: Secondary MD full-width button.
- **CardsList** (`cards-list`, Figma: Cards List (402 × 1160)): MediaCard 386 × 330 stacked, gap 8, side padding 8; no arrow in the title by default.

All rows scroll sideways with 8 side padding and 8 gaps; sections start with a SectionTitle (32 top, 18 bottom since 17 November 2026; it was 48 and 26) unless noted.

### Building blocks

#### SectionTitle

The header every section starts with: a title, an optional tag (#المحتوى) or action label (عرض الكل), and the glass arrow that opens the full list.

- 02 Section Title: padding 32 top, 18 sides and bottom (Space/XL, Space/NR; 17 November 2026, was 48 / 18 / 26), gap 18; title `body-1-regular` `text-heading`, one line
- 02 Section Title / Centered (new 17 November 2026): a column, centred, gap 12, padding 26 / 18 / 18: the title, then the Actions slot (tag and arrow). For a section that opens a page, not for a row inside one.
- The tag and arrow sit in Figma's **Actions** slot (17 November 2026); `actions` puts other content there. Misc › Headers also has Show CTA, Show Description and Show Seperator (spelled so in Figma).
- Slot: tag or action label `notes-2-light` + Secondary XS icon-only `arrow-left-02`, gap 8
- 03 Collaps (inside a card): padding 32 top, 18 bottom, no sides; title `body-2-regular`
- **Logic:** Functional (navigation). The arrow means "see all"; when there is nothing more, pass `action={false}` (Cards List does this by default). Tag names the content stream (#المحتوى, #الصوتيات) so people know where "see all" leads.
- **Don't:** Do not put two arrows in one section. Do not use a section title without content under it.

#### CategoryTile

A tappable glass tile with an icon or image and a short label: services, categories and quick actions.

- Image: 120 × 140, padding 18/12, gap 12, icon slot 64, label `body-2-regular`
- LR: padding 18, gap 8, icon 24, `body-2-regular`
- SM: padding 18, gap 8, icon 20, `notes-1-regular`; 88 × 100 in Featured Actions, 85 × 100 in Services Box
- XS: radius 14, padding 12/8, icon 16, `notes-2-regular`
- Surface: Glass BG Navigation=Off (radial white rim + vertical white glass) and Glass/Full
- **Logic:** Functional realm: shortcuts to a service people already intend to use. Keep labels to two short lines (use `\n`). Behaviour: reduces search cost (Attention & Cognitive Load). Order by frequency of use, not by org chart.
- **Don't:** Do not mix tile sizes in one row. Do not use a tile for an action that changes data (book, pay); tiles navigate.

#### ProductTile

A white product-category tile with a 3D product picture and a label, for the store.

- 124 × 138, white, radius 18, Glass/Full; padding 18/8, gap 10
- Picture 86 × 72 (contain); label `body-2-light` `text-heading`
- **Logic:** Desire → intent bridge (Emotional realm: gifts, Zamzam, dates for family). Show the product, not a generic icon.
- **Don't:** Do not show prices here; prices belong on the product card.

#### FaceTile

A coloured tile with a cut-out portrait (reciters, scholars, guides). Group stacks a second tile behind.

- Front tile 90% of the size, top right, radius 12%; colour from the Quran palette with a white glow; shadow −6, 10, 40, −6 Ink 10%
- Back tile 92%, bottom left, Glass/Full
- Portrait anchored to the bottom, 7% top inset
- **Logic:** Emotional / Spiritual realm: a recognisable voice or teacher invites listening. Use real, rights-cleared portraits only; never AI-generated faces of real scholars.
- **Don't:** Do not put text over the face. Do not use more than two colours in one row.

#### PlaylistCard

An audio or video series: face tile, one-line title, tag; the horizontal version adds a duration button.

- Vertical: faces 150, gap 18, title `body-1-regular` one line with ellipsis, tag `notes-2-light` `text-note`
- Horizontal: faces 88 at the start, content with title, tag and Secondary XS button (play icon + duration), gap 18
- **Logic:** Desire realm (Spiritual): listening is chosen, never pushed. The duration sets expectations (Motivation & Present Bias: small, known commitment).
- **Don't:** Do not autoplay. Do not truncate the reciter name to less than one word.

#### HintWidget

A preparation tip people can tick off: icon, title, details and a link chip.

- 200 × 168, padding 26/18, gap 12, radius 18
- Top row: icon 24 at the start, tick box 18 (Longing border, radius 4) at the end
- Title `body-2-regular`, details `notes-2-light`, White XS chip with the link
- Tones: Quran teal, saffron, amethyst, olive shades with a 1 px 2% inner line, or white with Glass/Full
- **Logic:** Transformational / Functional: readiness for a rite. The tick is a personal checklist (Self-Control & Commitment), stored per user, never shared. Feedback: ticking shows progress; do not celebrate or gamify it.
- **Don't:** Do not use for alerts or deadlines (use NoticeBar).

### Composition rules

1. **Bands top-down, never inverted** (M9S): 1 ritual & safety · 2 commitment state · 3 journey step · 4 daily habit · 5 learning · 6 commercial. The header is the frame. P2 hubs (ServicesBox, CategoryChips) sit below every P1 section (bands 1–4) and above learning and commerce.
2. **The desire state decides what fills P1.** Pre-desire gets meaning, never offers; evolving desire gets preparation, with offers as preparation; an active journey gets the current step.
3. **The mindset decides control or state.** A booking control for a Dependent or an Organised-group member is P0: withhold it and render status instead.
4. **Commerce is one band-6 slot:** capped, suppressible, below band 5, absent in sacred windows, at rite steps and in pre-desire; never bought into bands 1–5.
5. **Journeys shrink the page.** During an active journey, daily-habit sections collapse to a faith strip; rite steps are nearly empty (counter and duaa).
6. **One heavy pattern each.** At most one Leaderboard and one Bento Grid per page. Never two rows of the same item type back to back.
7. **No empty sections.** A section with no items is removed, not shown empty; the upcoming-requests section uses the RequestCard empty state only on the requests tab, not on a landing. A section whose data fails to load shows SectionError in its place; the page around it keeps working (17 Nov 2026).
8. **One kind per row.** A row holds one item type and one tile size. Lists that compare prices use one card type.
9. **Arrows mean "see all".** One per section; `actionLabel` when the label adds meaning (عرض الكل), `tag` when it names the stream.
10. **Content is content.** Titles, tags, items and images come from the CMS and Visual Assets. Templates ship placeholders; never ship placeholders, stock photos or generated portraits.
11. **The Leaderboard pattern is a layout, not a ranking.** It features one card; it never ranks people, worship or groups (M4).
12. **Guide ticks are private.** Stored per person, never shared, never celebrated, never used for nudges that shame.
13. **Nothing autoplays.** Playlist and video sections play only on tap.
14. **Change sections, not styles.** A new page starts from a template; reorder, remove or swap sections. A new layout is a Proposed pattern (root rule 5) and follows the pattern contract below.

### Templates (this release)

| Template | Figma | Sections (top to bottom) |
|---|---|---|
| `rawdah-landing` | Rawdah Landing `18147:16034` (402 × 3718) | featured-header · upcoming-requests · categories (products) · categories (faces) · cards-slider · guide · services-box · cards-list · home tab bar |
| `rawdah-landing-full` | Rawdah Landing `18147:15994` (402 × 6299) | featured-header · upcoming-requests · categories · cards-slider · cards-slider (grid) · category-chips · guide · playlist · bento-grid · services-box · list-side-by-side · cards-list · leaderboard · home tab bar |

Section heights in code matched Figma within a few points on the 8 November CTA sizes (featured header 420, upcoming requests 458, cards slider 430, guide ≈ 343, services box 354, bento 886). With the 9 November sizes (XS 30), every section with a title arrow is 4 taller and Upcoming Requests 12 taller in code; Figma shows the same once Cards and Landing Experience V2 accept the Buttons update.

#### Band check of the Rawdah templates

The templates mirror Figma's section order, and each section carries its `band`. Read against M9S, both invert bands (known issue PT9): a band-6 product row sits third, above the journey-step guide and the bookings.

| Template | Order in Figma (bands) | Order the bands require |
|---|---|---|
| `rawdah-landing` | frame · 2 · **6** · 4 · 3 · 3 · hub · 3 | header · upcoming requests (2) · cards-slider, guide, cards-list (3) · reciters (4) · services box (hub) · products (6, the slot) |
| `rawdah-landing-full` | frame · 2 · **6** · 3 · 5 · hub · 3 · 4 · 5 · hub · 4 · 3 · 3 | header · upcoming requests (2) · cards-slider, guide, cards-list, leaderboard (3) · playlist, list-side-by-side (4; a faith strip while the Rawdah journey is active) · services box, chips (hubs) · video grid, bento (5) · products (6, the slot) |

Until the Figma templates are reordered, use the right-hand order for production pages; the left-hand order is a layout reference only.

### Adding a pattern: the contract

Every new pattern, coded or Proposed, declares these fields in its card before it ships:

| Field | What to declare |
|---|---|
| Key | The CMS `pattern` value (kebab-case) and the component name |
| Source | Figma file › page › node, or "Proposed" |
| Anatomy | Header, layout, items; building blocks reused (SectionTitle, tiles, cards) |
| Items | Item type, minimum and maximum count, what an item needs (image, label, link) |
| Placement | Bands it may carry, P1 or P2, DNA it may carry (M9S) |
| Mindset and state | Control or state per mindset; who gets P0; desire states it may show in |
| Suppression | Behaviour in sacred windows, rite steps and while a journey is active |
| Empty, loading, error | Removed when empty; skeleton; error copy (M6) |
| Access | Targets (48), reading order, headings, row position, reduced motion (M10) |
| Behaviour | The pattern in five parts: Why, What, How, Where, Validate (M3) |
| Measure | The meaningful action it leads to, its success metric and guardrail (M5) |
| Native | SwiftUI and Compose mapping (M11) |
| Status | Proposed → Figma → Coded; Known issues |

Then add it to the registry above, the section model, `index.d.ts` and `templates/` if a template uses it.

### Patterns to come

Needed by the placement model (M9S, Appendix B) and not yet in the DL. Each starts as Proposed and goes through the contract.

| Pattern | What it is | Band, placement | First steps that need it |
|---|---|---|---|
| Today card | A state-derived card (time, place, crowd, programme status), never a service tile | 1–3, P1 | 3.9, 4.4, 5.4, M2.2, K1.1 |
| Faith strip | Prayer time, next ayah, athkar in one line while a journey is active | 4, P1 (collapsed) | J1 phases 3–5, J7 |
| Credential takeover | An L4 artefact (QR, ID, permit) as the whole screen, offline | 2, P1 | 3.10, M3.1, H2.2, I2.1 |
| Rite screen | Minimum surface: the Tawaf counter (counted by the person, never GPS-authoritative, M4) and the duaa per round, nothing else | 1, P1 | 5.10, L3.3, R1.3–R1.5 |
| Stage hub | A phase-scoped shelf of 4–8 services (ServicesBox is the nearest coded pattern) | hub, P2 | every phase |
| Commercial slot | One capped, suppressible T3 slot | 6, slot | 6.1, M4.2, K1.4 |
| Waiting state | Expected duration and calm content; no commerce | 3, P1 | 5.2, 5.3, I2.2 |
| Party status | Per-person status for a Caregiver's group | 2–3, P1 | 3.5, 5.1, 5.7 |
| Following state | Provider schedule, meeting point and the person's place in it | 3, P1 | 3.4, 4.2, 5.6 |
| Preference input | Constraints, not controls, for Dependents (mobility, timing) | 3, P1 | 2.6, 5.5, L1.3 |
| Meaning section | Pre-desire content: reward and merit, sirah, heritage; no offers | 5, P1 in pre-desire | D.2, D.4, 1.1 |
| Live stream | The Haram live (Figma: Video Status=Live) | 4–5, P1 on Fridays and seasons | D.1, B.1, C.3 |
| Quote widget | One ayah or hadith with its source (Figma 70337:6095; title needs a text style, PT5) | 5, P1 or P2 | A.5, B.3 |

### Proposed in Figma (17 November 2026)

[✨ Templates-Patterns](https://www.figma.com/design/fIjmiUpwy5UE9KJ9aXfhrn/?node-id=70394-7656) gained a ⠏ Patterns page and two Proposed additions on ✨ Templates. All are **Proposed**: not in `patterns/index.json` or `templates/index.json` as approved entries, not merged into any contract, and waiting for the DL Manager. They are listed in `patterns/index.json › proposed` so a screen can point to them while they are reviewed.

| Proposed | Spaces | Reuses | Open before it can be approved |
|---|---|---|---|
| Option chip picker (TC18) | label 0–1 · options 2–6 | Chips (Default unselected, Gold Solid selected) | No chip variant is named Selected |
| Image Gallery | cover photo 1 · peek and position 0–1 | Product Photo On + Pagination (media-viewer space 1) | "2 of 6" announced, never dots alone |
| Video Player | surface 1 · transport controls | Media's player pieces + StatusChip for Live | Media's `Status=Viedo` spelling |
| Sound Player Screen / Quran | identity and progress · transport | SoundPlayer at full screen | Same component as the row, or a sibling? |
| Sound Player (row) | artwork and identity · play control | SoundPlayer, compact | The playing vs paused row state |
| Live | surface · state badge (Counter, Soon, Ended, Not exist) | Video Player + StatusChip | "Session Not Exist" has no copy; a countdown states the time only |
| Reel | clip · side actions and caption 0–1 | Video Player | Side actions and caption have no DL component |
| Articles | hero and title · body | none (a layout convention) | No reading-width rule for long body text |
| Guides | step illustration and title · progress | StepCard, VerticalStepper or Steps | The name collides with the coded `guide` pattern (Q-D42) |
| Search / Result | result row 0–n · no results 1 | CardsList or CardsSlider rows | No ordering rule for mixed result types |
| **Template: Content landing** | toolbar · hero 1 · category filter 0–1 · feature rows 1–6 · audio row 0–1 · reels strip 0–1 · community strip 0–1 · tab bar | the patterns above | L2 vs tab destination, and a measure that counts opening as an action (Q-D43) |
| **Pass sheet · multi-use state** (TC20) | the Active content plus "used N of M"; moves to Used, expired, cancelled at 0 | QRCodeStatus | Not mocked yet |

Each Figma section repeats the chip picker's header and some of its accessibility lines (F102), and five loose frames sit on the Templates page (F103). Fix them before the review, so the reviewer reads each pattern's own text.

### Measuring a template (M5)

Per section and per position: impressions → item taps → completed meaningful action. Guardrails: scroll depth with no action, back-outs from the first tap, complaint themes. Change the order for everyone only after a holdout comparison.

### Open Figma issues (see Known issues)

Templates invert bands (PT9) · Featured Actions CTA unlabelled · Guide page dots differ from the Pagination component · a Hints widget inner line at 32% instead of 2% · Headers CTA uses Linear Burn · Quote Widget title without a text style · Media Cards selection chip present but hidden · Product Category label layers all named "مياه زمزم" · the Rawdah frame leaves an 82 gap before the tab bar. Code follows the rule stated in each issue.

---

## M9T · Template contracts

Load when: designing, reviewing or generating a screen of a known kind. Load M9S first (placement), then this module, then M9P for the patterns that fill the spaces. Data: `templates/index.json` and one file per contract in `templates/contracts/`. For people: Figma ✨ Templates-Patterns (`fIjmiUpwy5UE9KJ9aXfhrn`) › ✨ Templates, one blueprint per contract (wireframe · numbered spaces · guide · example).

### What a contract is

- A **template contract** says what one kind of screen may hold: its **spaces** in a fixed order, the **cardinality** of each (required, optional 0–1, repeat 1–n), what is **allowed** and **forbidden** in each, its **states**, its rules, its allocation and its measure.
- A **page model** (M9P) is one page built to a contract. A **pattern** fills a space. A **component** builds a pattern.
- A contract is named for the **job**, never for a product. The service shown with it is an **example**: one situation, not the rule. What is true only for that service lives under `example` in the file.
- Order inside the DL layer: red lines (M4) → the contract (spaces, forbidden, states) → the pattern (M9P) → the component (M9) → tokens (M8).

### Using a contract

1. **Classify** the request: intent or desire, realm, behavioural pattern (M2, M3).
2. **Place** it: service, journey step, mindset, band (M9S).
3. **Pick the contract by job** from `templates/index.json`: match what the person is doing on the screen, not the product. Read `useFor` and `notFor`.
4. **Read that one contract** (`templates/contracts/<id>.json`). Do not load the others.
5. **Fill each space only from its `allowed` list**, in the fixed order, respecting cardinality. Choose the pattern for a space from `patterns/index.json` (M9P), then the component card.
6. **Apply the state** (`states`): a state changes what a space holds; it never moves, adds or reorders spaces.
7. **Check** the result against every `forbidden` line, the contract `rules`, and the red lines (M4). Name the `measure` and its guardrail.
8. **No fit?** Say so. Do not force the nearest contract. Build with DL tokens and components, label it **Proposed**, and draft a contract for it (fields below).

### The contracts (11 November 2026, all draft)

| Template | `id` | Kind | Level | Band | The job | Example |
|---|---|---|---|---|---|---|
| Service landing | `service-landing` | page | L2 | service | The front page of a service that offers a catalogue. | Marketplace |
| Catalogue list | `catalogue-list` | page | L2 | service | Every item of one category, as a grid or a list, with the running selection always in reach. | Marketplace |
| Item details | `item-details` | page | L3 | service | Everything needed to decide on one item: media, name and provider, description, options, then one action that adds or books it. | Marketplace |
| Cart | `cart` | page | L3 | service | Review what was chosen, where it goes and what it costs, then move to payment. | Marketplace |
| Payment | `payment` | page | L3 | service | Pay with nothing else on the page. | Marketplace |
| Request tracking | `request-tracking` | page | L3 | 2 | Where a request is now, what happens next, and how to get help. | Marketplace |
| Requests list | `requests-list` | page | L2 | 2 | Every request of the person in one service, current and past. | Marketplace |
| Search in a service | `service-search` | page | L2 | service | Find an item by name inside a service. | Marketplace |
| Help and support | `service-support` | page | L2 | 1 | Answers and a way to reach a person, from inside a service. | Marketplace |
| Address selection | `address-selection` | task | L3 | service | Choose a saved place or add a new one. | Marketplace |
| Cancellation | `cancellation` | task | L3 | 2 | Cancel a request with a clear reason and a clear refund. | Marketplace |
| Add-on task | `add-on-task` | task | L3 | service | Choose an optional extra, personalise it and add it to the request. | Marketplace |
| Cost breakdown sheet | `cost-sheet` | overlay | L4 | 2 | The amounts of one request, readable in a glance. | Marketplace |
| Media viewer | `media-viewer` | overlay | L4 | service | Look closely at the media of one item. | Marketplace |
| Date and time · day and period | `date-period` | step | L3 | 3 | Choose a day and a broad part of the day, for a service where the booking is valid all day. | Umrah Permits |
| Date and time · day and exact slot | `date-slot` | step | L3 | 3 | Choose a day, a part of the day and an exact time, with optional groups of times by audience. | Rawdah Permits |
| Booking details | `booking-details` | page | L3 | 2 | One booking after it is made: when it is, where it stands now, who it covers and how to open each pass. | Umrah Permits |
| Booking details · package | `booking-details-package` | page | L3 | 2 | A booking made of several parts with one provider: where the whole stands, who is in it, what is confirmed, what is still asked of the person, and the money. | Domestic Hajj |
| Pass sheet | `pass-sheet` | overlay | L4 | 2 | The pass of one person, opened over the booking: whether it is valid, whose it is, and the code to show at the gate. | Umrah Permits |
| Pass viewer | `pass-viewer` | overlay | L4 | 2 | A pass that is an identity card: shown full screen, on its own, for inspection. | Hajj permit |

Band `service` means the screen takes the band of the service that uses it; commitment state inside it is still band 2 and sits first.

**`payment` and the Golf Carts split (18 November 2026):** Golf Carts v2 puts the summary on its own Confirm screen (80451:41310) and keeps Pay (86074:14210) for the code field and the Payment Box (M9 › TabBar). Measured skeletons: Confirm: Toolbar 0–146, header 146 (24 + 12), product card 182–262, header 262–316, rows from 316 at 60 each (66 with an action), gap 8, action Tab Bar 776–874. Pay: Toolbar 0–146, title 32 above and 18 below, Payment Box 220–1205, empty Tab Bar 56. Whether a summary screen before payment joins `payment` or becomes its own contract is open with the DL Manager.

**Proposed from the Nusuk Charity handoff (18 November 2026):** `giving-landing` (the giving home) and `giving-details` (one campaign and choosing an amount) were drafted because no contract fit a giving flow; its payment uses `payment`. Both stay Proposed, outside `templates/index.json`, until the DL Manager reviews them; the drafts are in `nusuk-feature-handoff` › examples › nusuk-charity.

### Rules for every contract

1. **Spaces are fixed in order.** Remove an optional space; never move one, never add one. A need for a new space is a change to the contract.
2. **States change content, not layout.** A state says what each space holds; it never reorders spaces.
3. **Allowed is a closed list.** Anything outside it is Proposed (root rule 5). Forbidden lines are checked one by one before a screen is called done.
4. **An example is not a rule.** Never copy an example's content, wording or defects into another service. "In the flow today" lists what the example does that the contract does not allow.
5. **Commitment state before everything else** on any screen that has it (band 2); offers sit below status, people, confirmed parts and money, and are absent in sacred windows and on cancelled or missed bookings.
6. **Passes and credentials** (pass sheet, pass viewer) carry nothing commercial and work offline once issued.
7. **The main action stays enabled** and says what is missing on tap (M10); no raw placeholders ship (M6); digits 0–9.
8. **Draft status.** All contracts are drafts until approved by the DL Manager. Where a draft contract and a shipped flow disagree, raise it as a question; do not report it as a violation. Red lines hold regardless.

### When no contract fits

Say which contracts were considered and why none fits. Build the screen with DL tokens, components and patterns, label it **Proposed**, and draft its contract: job, use for, not for, spaces with cardinality, allowed and forbidden, states, five rules, allocation, measure, and the example service kept apart.

### Contract fields

| Field | Meaning |
|---|---|
| `id`, `name`, `was` | Generic name for the job; `was` is the id before 11 November 2026 |
| `status`, `version`, `updated` | `draft` until the DL Manager approves; then `approved` |
| `kind` | `page`, `step` (one step of a flow), `task` (a full-screen task opened from a page) or `overlay` |
| `appLevel` | L1–L4 (M9S) |
| `band` | `value` 1–6, or `null` with a rule when the screen takes the band of the service that uses it |
| `job`, `useFor`, `notFor` | What the screen is for, in neutral terms |
| `spaces[]` | In order, top to bottom. `fixed` chrome or a numbered space with `cardinality` (required, optional 0–1, repeat 1–n). `allowed` and `forbidden` are the rule; `patterns` and `components` are the DL names found in `allowed` |
| `states[]` | The states of the screen and what each changes |
| `interaction[]` | Ordered behaviour rules, when the screen is a step |
| `rules[]` | Five rules with their module reference |
| `allocation` | Level, band, suppression, withheld mindsets: true for any service |
| `measure` | Success metric and guardrails (M5) |
| `figma` | The blueprint section in ✨ Templates-Patterns |
| `example` | One service that uses the contract: its allocation, notes, what the flow does today that the contract does not allow, and source frames. **An example is one situation, not the rule** |

### Keeping contracts true

One release updates all of: the contract file, `templates/index.json`, this module, the Figma blueprint, the design system page *Templates and patterns*, the change log and a migration file (M13). The Figma blueprints are generated from the contract data; when they differ, fix the data and regenerate. Flow defects found while writing a contract are logged in Known issues (TC), never fixed silently in the flow.

---

## M9C · Nusuk AI chat (Proposed lane)

Load when: designing, reviewing or building anything in the Nusuk AI chat: answers, questions, the AI tab bar, the bot, booking tickets, hotel and flight cards. Load M9 first; this module says what is DL, what is proposed, and where each value comes from. Files: `chat/` (code and proposed data).

The chat UI built from Figma 💬 Chat UI is now part of the Nusuk DL as a **Proposed lane**. Figma stays the source of truth (DL-01). A chat component moves from Proposed to DL when its Figma set is published and the DL Manager accepts its card.

- **Figma:** [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR), plus the DL files it draws from (table below).
- **Code:** `chat/nk-chat.js`, `chat/nk-chat.css` and `chat/nk-chat.tokens.css` (NusukChat 2.8.6, on DL 3.10). They load after `tokens.css` and `components/bundle.css` / `bundle.js`. Arabic is the default; `NusukChat.setLang('en')` switches the built-in labels to English. `Chips` and `ErrorMsg` take `buttons: true` to show each suggestion as a DL Button MD (primary unless `kind` says otherwise) with a leading arrow that follows the reading direction; the Figma chip stays the default.
- **Live gallery:** the *Nusuk Chat UI — preview per state* artifact (gallery, playground, handoff guide).
- **17 November 2026 (NusukChat 2.8.0, [Figma](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252)):** 💬 Chat UI still has 7 sets, 54 variants and 3 masters, all mapped. The chat now follows the DL 3.10 library it draws from: SelCard is the DL Select Card (radius 14, white with an Ivory line and `shadow-os`, title 14 over description 16, no radio; a group is a `radiogroup`), suggestion chips take `chip-padding-lr` and `chip-padding-icon-lr`, and the AI Tab Bar input and round buttons are Glass BG (Default, Glass On) with Shadows › OS. Breaking: SelCard's `radio` prop is gone.
- **17 November 2026, afternoon (NusukChat 2.8.1, [Figma](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252)):** on a user message, the Nusuk Bot beside the echoed question is now a 12 × 14 mark with no eyes (was the 24 × 27 bot with eyes), 12 from the question; user bubbles are 9 shorter (User/BG 463, User/Transparent 178). Code: `Bot` takes `eyes: false`. Nothing else in the file changed (7 sets, 54 variants, 3 masters).
- **17 November 2026, 15:07 (NusukChat 2.8.2, [Figma](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252)):** the message body is 20 / 18 / 26 / 18 (`space-md`, `space-nr`, `space-lr`), so filled bubbles are 6 taller; Voice, Passport Attach and Location Guide keep 20 at the bottom as Figma draws them. The password question uses ⌨️ Inputs › Input Type=Password as published: the 62 field, then its Strength Meter, DL Checkbox SM criteria 8 apart.
- **17 November 2026, 15:30 (NusukChat 2.8.3, [Figma](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252)):** checked against Figma: every size the 2.8.1 and 2.8.2 rounds list matches. The Days and Slots answers also keep 20 at the bottom, so six filled variants do (Voice ×2, Days and Slots answers, Passport Attach, Location Guide) and code follows with `padEnd: 'md'`; the `_Chat Container` master itself is still 20 (F88, Q-D38). The password criteria lose their full stops, as Figma writes them; Figma lists three criteria, code checks five (F89, Q-D39).
- **17 November 2026, 15:50 (NusukChat 2.8.4):** the component notes in the code's registry (PasswordField, Message) now describe the 2.8.2 layout, so the cards and the manifest rebuild to the same text. Nothing renders differently.
- **17 November 2026, 19:30 (NusukChat 2.8.5, [Figma](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252)):** one bot per run of Nusuk messages. When the next message is also from Nusuk, the bot goes and only the last one keeps it; bubbles keep the empty 24 column, an insight note drops its 38 bot. Code: `bot: false` on `Message`, every Nusuk type and `BotNote`; `.nkc-thread` on the thread container applies it on the web.
- **18 November 2026 (NusukChat 2.8.6, [Figma](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=80451-18763)):** the six `_Chat Container Master` states, as the DL Advisor set them out (below). Code now matches Figma: the Nusuk bot sits at the top of the bubble with the tail corner at the top-start (was the bottom); the time follows the reading direction (start for Nusuk, end for the user; it was pinned left-to-right and sat on the wrong side in Arabic); time and question header are Notes 14 Regular; a Nusuk message no longer takes the answered-question header (its question is the bubble's first line); Loading centres the bot or avatar with the dots.
- **Skill:** the `nusuk-design-language` skill carries this lane in `reference/chat/` (README, component table, code, proposed tokens and icons, manifest, cards, migrations). Load it with this module.
- **Decided:** 11 November 2026, by the DL Advisor: merge as a Proposed lane, and take every value from a DL file before proposing a new one.

#### The six container states

Set out by the DL Advisor on 18 November 2026 from 💬 Chat UI › `_Chat Container Master` (80451:18766). Every chat message is one of them.

| State | When | Layout |
|---|---|---|
| `Status=Chat, Type=Nusuk/BG` (80451:18764), `Nusuk/Transprent` (80578:5431) | Nusuk owns the message or question and the user has not answered yet | 24 × 27 bot at the start, aligned to the top of the bubble, 12 apart. Body `surface-01-white`, `glass-full`, `radius-md` with `radius-xs` at the top-start (next to the bot); Transparent has no fill. Footer 18 in: time at the start (Notes 14 Regular, `text-heading`), Actions (copy, helpful, not helpful) at the end when shown. |
| `Status=Chat, Type=User/BG` (80451:18765), `User/Transprent` (80578:5289) | The user has answered | The question moves to the top: header row with the 12 × 14 Nusuk mark (no eyes) and the question, Notes 14 Regular, 12 apart, at the start. 18 below, the answer bubble with the 24 user avatar (Avatar xs, Negative) at the end, aligned to the bottom; `radius-xs` at the bottom-end. Time at the end, beside the avatar. No actions. |
| `Status=Loading, Type=Nusuk` (80451:18763), `Type=User` (80501:2248) | One side has sent and the other is working, or something runs in the background | No bubble: the bot at the start (Nusuk) or the avatar at the end (User), with the three Loading Text dots (`icons-black`) beside it, centred, `space-sm` apart. Announce it (`role=status`). |

In code: `Message` / `Question` / `Chips` etc. with `from: 'nusuk'`; the answer types with `from: 'user'` and `question`; `Loading` with `from`. On iOS and Android: Nusuk rows align to the top, user rows to the bottom; corners `topStart 8` (Nusuk) and `bottomEnd 8` (user), the rest 18.

#### Questions and answers in the thread

Confirmed by the DL Advisor on 17 November 2026, as 💬 Chat UI › AI Chat Messages draws the User and Nusuk variants:

1. **Before it is answered,** a question is one Nusuk bubble with the bot avatar (`Question`): the type row (16 icon and a short title, Notes 12), the question (Body 1, 18), an optional description, the answer controls (chips, fields, select cards) and one Primary MD CTA.
2. **Once it is answered,** that bubble is dismissed. The answer becomes one user bubble (User/BG) whose header row carries the question (Notes 14, `text-heading`) beside the 12 × 14 Nusuk mark, 12 apart; under it come the answer, "Edit answer" (Secondary XS) and the time. In code, pass the question as `question` on the answer (`Text`, `Voice`, `DaysAnswer`, `SlotsAnswer`). Never leave the question bubble above its answer.
3. **"Edit answer"** takes the person back to that question in its live state.
4. **Suggestions are not questions.** Follow-up chips after a result (share, report, verify another) are suggestions: their replies stay plain user bubbles, with no question header.
5. **Open:** which state a chip answer takes. On the Verify cases the Advisor asked for the "active status" template; which state that is was asked in that thread. Until it is settled, chip answers use User/BG with the question header.

#### Where it stands

| Check | Result |
|---|---|
| Raw values in `nk-chat.css` (px, hex, rgba) | 0 |
| Values from DL tokens | 80 |
| Values still proposed (`chat-*`) | 35 in the stylesheet (43 in `tokens.proposed.json`), 12 of them type aliases (below) |
| Icons | 17 of 18 are DL icons (🎨 Icons) and are now in the DL `Icon` set; `nusuk-mark` stays proposed |
| Components | 41: 4 DL, 23 variants of 7 DL components, 14 new |

#### Where each value comes from

Every value the chat uses was traced to a DL Figma file on 11 November 2026. Values that a DL file already defines now use the DL token; the rest stay proposed.

| Value | DL file and variable | DL token now |
|---|---|---|
| 2 (hairline gap, focus offset) | ⚙️ Foundation › Layout › Scale/02 | `scale-02` |
| 10, 26, 32, 42, 46 | ⚙️ Foundation › Layout › Scale | `scale-10`, `scale-26`, `scale-32`, `scale-42`, `scale-46` |
| 28 answer chip height | 🍟 Chips › `_Chips Setup` › Highet (LR) | `chip-height-lr` (new in tokens 3.6) |
| 18 checkbox box | 📻 Switches, Checkbox and Radio › `_Switches Setup` › CheckBox (SM) | `control-checkbox-sm` (new) |
| 12 tick inside the checkbox (was 14) | 📻 Switches, Checkbox and Radio › `_Switches Setup` › Icon (SM) | `control-icon-sm` (new) |
| 18 icon in an icon button | 🕹️ Buttons › Buttons Setup › Icon Only (XS) | `button-icon-only-xs` |
| #070808 Makkah city mark | ⚙️ Foundation › brand colour Kiswah | `brand-kiswah-reverence` |
| 18 input radius (12 November 2026; was 14) | ⌨️ Inputs › Input › `Fields`, bound to Effects › Radius/MD | `radius-md` |
| Type (12 styles: Display, Headline, Body and Notes, Light and Regular) | ⚙️ Foundation › text styles; `tokens.css` ships them as classes (`.body-1-light` …) with no variable (known issue F31) | `chat-type-*`, proposed aliases equal to the DL classes |
| Everything else | No DL variable: drawn in 💬 Chat UI, 🏖️ Travel or 🃏 Cards with raw values | `chat-*`, proposed |

The proposed tokens are component sizes (5, 9, 15, 40, 56, 62, 72, 76, 86, 100, 115, 134, 140, 316, 530, 12.7), the Nusuk Bot colours, which stay fixed across themes, two city-badge colours and five effects. `chat-home-indicator-width` belongs to the device frame of the playground and should not become a DL token.

#### Components and their Figma source

**Figma status:** *Published* = the DL set is published. *Edits not published* = the set is in the library but today's edits are not published yet. *Not published* = the set is not in the library yet. *Master* = a private `_` master.

| Chat export | DL component | Figma source (file › set) | Figma status |
|---|---|---|---|
| Fld | TextField | ⌨️ Inputs › Input | Published |
| PasswordField, MobileField, Otp, PassportNumber, IbanField, NationalitySearch | TextField | ⌨️ Inputs › Input (Password, Mobile, OTP, Action, Search) and 💬 Chat UI › AI Chat Messages | Published / Edits not published |
| SelCard, GenderField, BorderNumber, PassportAttach | SelectCard | 📻 Switches, Checkbox and Radio › Select Card | Edits not published |
| Chips, AddedNationalities | Chip | 🍟 Chips › Chips | Published |
| Message, Loading, Question | ChatMessage / new | 💬 Chat UI › `_Chat Container Master`, `_Chat Container` | Master |
| Text, Voice, ErrorMsg, DaysAnswer, SlotsAnswer | ChatMessage | 💬 Chat UI › AI Chat Messages (24 variants) | Edits not published |
| Days, Slots, PassportPreview, Liveness, LocationGuide, HotelChoose, FlightsSelection | new | 💬 Chat UI › AI Chat Messages, using 📅 Date & Time, ⌨️ Inputs and 🏖️ Travel | Edits not published |
| SingleChoose | OptionCard | 💬 Chat UI › AI Chat Messages (`Style=Single Choose`), using 🃏 Cards › Option Cards (Icon with Action) | Edits not published |
| TabBar | TabBar | 💬 Chat UI › AI Tab Bar (7 statuses) | Edits not published |
| Bot | new | 💬 Chat UI › Nusuk Bot (and `_Eyes`) | Published |
| BotNote | new | 💬 Chat UI › Nusuk Bot Messages | Published |
| BookingTicket | new | 💬 Chat UI › Booking_Ticket | Edits not published |
| HotelCard | new | 🏖️ Travel › Hotel Offer | Not published |
| FlightTicketFull | FlightTicket | 🏖️ Travel › Flight Ticket (Version=Full) | Published |
| LogosGroup | new | 🃏 Cards › Logos Group, Logo Icons, City Logo | Published |
| PackageCard, Packages | MediaCard | 🃏 Cards › Media Cards | Edits not published |
| NafathAnswer, NationalityRow, SkipNafath | new / Button | 💬 Chat UI screen frames, 🕹️ Buttons › CTA | Frames (no set) / Published |

Ready for the DL Manager now (Figma source published): Fld, Chips, AddedNationalities, FlightTicketFull, LogosGroup, Bot, BotNote, SkipNafath, NationalityRow. Everything else waits for its Figma publish.

#### Files in this folder

| File | What it is |
|---|---|
| `nk-chat.js`, `nk-chat.css`, `nk-chat.tokens.css` | The code, after the remap above |
| `tokens.proposed.json` | The 43 values with no DL variable (12 are type aliases), with their Figma node |
| `icons.proposed.json` | The 18 chat icons; 17 are now in the DL `Icon` set |
| `manifest.proposed.json` | All 41 exports with status, DL target, Figma library, file and nodes, and props (links checked against the live files on 14 November 2026) |
| `cards/<Name>.md` | The 37 Proposed component cards |
| `migrations/` | The chat team's proposals of 11 and 12 November, as they were made |

#### Open before the merge is clean

*Known issues › Figma round and Nusuk AI chat (11 November 2026)*: AI1 to AI8.

---

## M10 · Accessibility and devices

Load when: contrast, targets, text size, motion, screen readers, screen sizes or device support.

### Floor: WCAG 2.2 AA

WCAG 2.2 (W3C Recommendation, October 2023) at level AA is the floor for every screen, native and web. A pass on an automated checker is not a pass; test with VoiceOver, TalkBack and the largest text size.

### Targets (TGT-001, A11Y-002)

- **48 dp** effective target for every interactive element on phones.
- **44 dp** only for secondary icon buttons in the top app bar; this is why the toolbar's glass controls follow `Buttons/MD` (44).
- **Nothing under 24 dp** (the WCAG 2.5.8 minimum; ours is stricter).
- No exception on rite, permit, payment or departure-time actions. Anything else below 48 dp is a Trade-off Register entry (M12).
- Visual size can be smaller than the target: the control carries invisible tap padding up to 48 (44 in the top bar). In the coded components it is built in (a transparent layer around the control, no effect on layout); natively use iOS `contentShape` and Android `minimumInteractiveComponentSize()`. Per-control amounts: M11 › Tap padding.
- Tap padding cannot reach past a scrolling row or a neighbour's padding. Put selection controls in rows at least 48 high, and keep 48 between the centres of stacked controls.

### Contrast

- Text 4.5:1; large text (24 px regular or 18.66 px bold and up) 3:1; UI parts and focus indicators 3:1 against what is next to them.
- Known failures, kept exact as Figma and logged in Known issues with the rule to follow: `text-link` gold light 2.5:1 on white (use it for links only with an underline or icon); status text on soft fills 2.5–3.2:1 (C2); white on gold fills 2.5:1 and on solid status fills 2.6–3.6:1 (C9, C10); count badge 2.9:1 (C11); green CTA 2.59:1 light and 1.05:1 dark (B12); C7, C8, B7, B16. *Known issues › Fix first* orders them.
- **The accent is not the same kind of colour in every theme.** Gold is a light accent (white on it is 2.5:1, Ink 8.0:1); green and lavender are dark accents in light themes (white 10.0 and 6.6:1) and light ones in dark themes. Never fix white, or Ink, on an accent fill: pick the content colour per theme (C9). Until Foundation has an on-accent variable, put text beside an accent fill, not on it.
- Dark themes are not ready to ship: the Primary CTA label is invisible (C7) and the on-dark button set does not hold (B7, B16). Both are alias fixes in Figma.
- Text on photos sits on a soft white glow (Featured Header) or a solid fill, never on the bare image.
- Colour is never the only signal: status chips have an icon and a label; crowding, availability and errors say it in words.

### Text and motion

- Support Dynamic Type (iOS) and font scale (Android) to 200%. Layouts reflow; single-line titles in rows truncate with an ellipsis and expose the full text to screen readers. Test every release at 150% and the largest size. (UX answered on 14 November 2026 that the 150% scaling doesn't apply to iOS; until the design team and the DL Manager settle Q-D18, iOS keeps Dynamic Type on.)
- Android's temporary 0.9 scale (UX, 10 November 2026) never shrinks a hit area below 48 dp or text below 12 sp (TR-05, Q-D16).
- Respect Reduce Motion: no parallax, no auto-advancing carousels; page dots move only when the person scrolls.
- Nothing autoplays (audio or video).
- Motion that starts by itself stops within 5 s (WCAG 2.2.2, level A); loops are only for a wait in progress (M8).

### Screen readers and input

- Never disable the main action to hide validation; on tap, show what is missing and where.
- Every control has a name in the current language; icon-only buttons name the outcome ("رجوع", "بحث"), not the icon. The coded components carry Arabic and English defaults (M9); other languages pass the names in.
- A visible label is the field's name; the hint is its description. Never let a placeholder be the only name.
- Section titles are headings; rows announce position ("1 من 4"). Loading announces what is loading; busy buttons announce busy.
- Focus is always visible and never hidden behind sticky bars (WCAG 2.4.11): a 2 px ring, offset 2, Ink on light surfaces and white on Ink fills and dark glass, 18:1 or more against the surface beside it (DL-19). On photos, add a white band inside the ring so it holds on any image. Sheets trap focus and return it on close.
- Any drag (sliders, swipe-to-delete on Member Cards) has a tap alternative (WCAG 2.5.7).
- Sign-in and OTP: no cognitive test; allow paste and password managers; Nafath and Absher where available (WCAG 3.3.8). Don't ask again for what the person already gave in the same journey (3.3.7). Help sits in the same place on every screen (3.2.6).

### Field conditions and feedback timing (14 November 2026)

- **Design for the field, not the office.** One hand, bright sun, a weak or foreign network, a low battery, ihram, a crowd in Mina or the Haram (the DX team's evaluation checklist, account skill `nusuk-dx`). On a weak network a core step keeps what the person entered, says what is pending and retries without retyping (WCAG 3.3.7).
- **Nothing to compute under pressure.** Permit windows, departures and prayer times appear as times and countdowns the app has worked out; the person reads them, never adds them up.
- **Companions by default.** Most pilgrims travel with others; no flow assumes one person.
- **Feedback timing** (Nielsen's three response-time limits, NN/g 1993, after Miller 1968): under 0.1 s needs no indicator; 0.1–1 s a quiet cue (the button's busy state starts at 300 ms so quick actions don't flicker); 1–10 s a progress bar or skeleton that names what is loading; over 10 s it runs in the background and the person is told when it is done, never held on a blocked screen.

### Measured baseline (9 November 2026)

Each release renders the 72 previews in the six themes and measures them (M13 › Release audit). This release:

| Check | Result |
|---|---|
| Text contrast, 902 text runs per theme | Pass: gold light 87.4% · green light 89.4% · lavender light 89.2% · gold dark 97.1% · green dark 95.9% · lavender dark 95.9% |
| What fails in gold light (114) | Status text on its soft fill 74 · gold accent text 12 · status text on white 10 · white on solid fills 13 · count badge 4 · green CTA 1. All are token values (Known issues › Fix first) |
| What fails in gold dark (26) | Primary CTA label 16 (C7) · on glass or media 4 · solid fills 3 · others 3 |
| Text under 12 px | 121 of 902 runs: card chips at 10 px (K2). 67 of them also fail contrast in gold light |
| Targets, 296 controls | 293 meet the rule: 268 at 48 or more, 25 top-bar controls at 44. Three fall short: 46, 45 and 33 (M12 › Trade-off Register). Before tap padding was built in: 89 |
| Names, 306 controls, from the browser's accessibility tree | None without a name. Before: 7 (three text fields, four dropdown selectors), and labelled fields read their placeholder instead of their label |
| Motion | Nothing loops at rest |

**10 November 2026 (76 previews):** contrast, 962 runs per theme: gold light 88.0% · green light 89.9% · lavender light 89.8% · gold dark 96.9% · green dark 96.0% · lavender dark 96.0%. Targets, 356 controls: 317 at 48 or more, 23 top-bar controls at 44, none under 24; the new shortfall is the scaled Nudge (N17). Names, 366 elements: none without a name. The bottom navigation has no dark variant in Figma (N22); code keeps its labels readable in dark themes.

A pass here is a floor, not a verdict: icons, photos, VoiceOver, TalkBack and the largest text size are still checked by hand.

### Language and direction

Arabic first, right-to-left; mirror layouts and directional icons; numbers 0–9 in every language with bidi isolation (OR-03, M6). Full QA in Arabic and English; the other 33 languages get automated checks (OR-05).

### Devices (DEV-001…009)

- **iPhone first.** Design at 402 × 874 pt; verify at 375 × 667 (SE, floor) and 440 × 956 (largest). Store: iPhone iOS 18+ and Apple Watch watchOS 10+ (glanceables only); iPad not listed.
- **Android by window size class.** Compact floor 360 dp, standard 384–412 dp; flip cover screens glanceables only; Medium 600–839 dp (foldable inner: list-detail, rail, hinge-aware); Expanded 840+ dp; nothing spans a hinge. Target API 36; runtime floor proposed Android 10 (API 29), to confirm against Play Console installs.
- **Native cues stay native:** back, tab bar vs bottom navigation, sheets, dialogs, snackbars, pickers, permissions, haptics, wallet, live status. The brand lives in type, colour, icons, motion and copy, not in ported chrome.
- **Test set per release** (eleven devices): iPhone SE 3, 16e, 17, 17 Pro Max, Apple Watch; a 360 dp floor phone, Pixel 9, Galaxy S25, Z Fold 6, Z Flip 6, a tablet emulator. At 150% text and in RTL.
- Patterns on wider windows: rows keep their card sizes and show more cards; grids (Services Box, Bento) keep their columns on Compact and may add columns from Medium up. Never stretch a card.

---

## M11 · Platform and handoff

Load when: handing work to iOS or Android, or reviewing native builds.

### Rules for agents

1. Use token names from `tokens.json`, never raw hex. Each colour token has six values: `gold-light`, `gold-dark`, `green-light`, `green-dark`, `lavender-light`, `lavender-dark` (three brand themes × light/dark).
2. Figma px = iOS pt = Android dp.
3. Arabic first, right-to-left. Use leading/trailing, never left/right. Mirror directional icons (arrows, chevrons). Keep numbers, times and Latin text left-to-right inside RTL lines.
4. Type is IBM Plex Sans Arabic, Light (300) and Regular (400) only, line height 1.28 × size. Support Dynamic Type (iOS) and font scale (Android) from these base sizes.
5. Corner radius "Full" means a capsule (`Capsule()` / `CircleShape` or `RoundedCornerShape(50)`).
6. Do not invent states or colours. If Figma has no value, it is listed under Known issues with the rule to follow.

### Tokens on device

- **iOS:** generate one `Color` set per token with the six values, or a `NusukTheme` struct per theme (gold, green, lavender) holding light and dark values, selected by `colorScheme`. Inject through `@Environment`.
- **Android:** generate a `NusukColors` data class and six instances; provide through a `CompositionLocal`; choose by brand theme and `isSystemInDarkTheme()`.
- Alpha tokens keep their alpha: `button-secondary-surface` is #F5F5F5 at 70% (`#B3F5F5F5` in Android ARGB order).

### Native token files (11 November 2026)

- Every release generates `native/NusukTokens.swift` (SwiftUI) and `native/NusukTokens.kt` (Compose) from `tokens.json`, and `native/tokens-native.json` (each token with its Swift and Kotlin symbol). Use them; do not type values.
- Names are mechanical. The first word is the group, the rest is the member in camelCase (Kotlin constants start with a capital), and a leading number moves to the end: `button-padding-md` → `NusukButton.paddingMd` and `NusukButton.PaddingMd`; `surface-01-white` → `colors.surface.white01`.
- Colours: `NusukColors.resolve(theme, dark:)` on iOS; `NusukPalettes.resolve(theme, dark)` provided through `LocalNusukColors` on Android.
- Units: 1 Figma px = 1 pt = 1 dp; text is sp on Android.
- Drop shadows are generated since tokens 3.12 (17 November 2026): `NusukShadow.xs` … `NusukShadow.os` on iOS and `NusukShadow.Xs` … `NusukShadow.Os` on Android, each a list of layers (x, y, blur, spread, colour) as Figma draws them; iOS adds `.nusukShadow(_:)`, which draws every layer at half the Figma blur. Not generated: Glass BG and the inset glass recipes (M8), icons, fonts, and the button heights for Android Expanded windows.
- The files are checked for structure at release, not compiled. Symbol names are proposed until the iOS and Android leads confirm them.
- Every change-log entry links its Figma file and has an iOS and an Android section (DL-29). The docs page *iOS and Android handoff* holds the unit table, the naming rule and the pull-request checks.
- Android: Material 3 `Button` keeps a 58 × 40 dp minimum, so the Nusuk button is built on `Surface` or `Box`; `minimumInteractiveComponentSize()` reserves 48 dp in layout (open point in *iOS and Android handoff*).

### Button and toolbar sizes (9 November 2026)

- CTA heights LR 48 · MD 44 · SM 38 · XS 30 on iPhone and on Android Compact and Medium windows; Android Expanded uses 54 / 48 / 38 / 26 (Foundation Wide mode). Padding, gaps and icon sizes are unchanged.
- Toolbar glass controls (icon block, search, date picker, landing logo) are 44 high and the toolbar row is 44; the icon buttons inside a block are 44 × 38.
- Targets: MD, SM and XS CTAs get invisible padding to 48 (iOS `contentShape`, Android `minimumInteractiveComponentSize()`); top-bar controls stay 44 (OR-04). Amounts per control: Tap padding, below.

### Chip sizes (9 November 2026)

- Chips XS 18 · SM 20 · MD 24 · LR 28; text 10 / 12 / 12 / 14; padding 8 / 10 / 12 / 14 with 6 / 8 / 10 / 12 on the icon side (15 Nov 2026); gap 4 / 4 / 4 / 6; icon 12 / 14 / 14 / 16 (M9 › Chip).
- Cards (request status, request tags, media "اختيارات نسك", spec tags, member meta, hint links) all use XS. A chip is a label, not a control. The one tappable chip, the hint widget's link, gets invisible padding to a 48 target (M10).

### Buttons, toolbar and bottom navigation (10 November 2026)

- **Button padding:** when a filled button has a leading or trailing icon, that side uses `button-padding-icon-*` (24 / 20 / 16 / 12) and the other side `button-padding-*` (28 / 22 / 18 / 14); icon-only and loading buttons use the icon-side value on both sides. Values changed 11 November 2026 (were 26 / 24 / 20 / 14 and 32 / 30 / 22 / 16). SwiftUI: `.padding(.leading, iconSide).padding(.trailing, side)` inside the `ButtonStyle`; Compose: `PaddingValues(start = iconSide, end = side)`. Use leading and trailing, never left and right.
- **Toolbar:** one `NusukToolbar` with a `type` enum of the 20 Figma types and `darkMode`. Remove any `status` parameter: map old pairs with the table in M9.
- **Bottom navigation:** a floating glass capsule, not a system tab bar. iOS 26: a `GlassEffectContainer` holding the capsule and the round button; earlier iOS: material plus the Glass BG layers (M8). Android: a `Surface` with Haze (M8), not `NavigationBar`. Keep the system home indicator and add the 26 bottom padding above the safe area, not instead of it.
- **Add to Cart stepper:** left-to-right in every language; announce the new quantity (`accessibilityValue`, `stateDescription`).

### Buttons, glass and the bottom bar (14 November 2026, tokens 3.7)

- **Fills:** `button-fate-surface` is red at 10% (#FF41361A; dark themes #FEF3F21A) and `button-secondary-surface-on-dark` is Slate at 70% (#303336B3). Both constants carry alpha in `NusukTokens.swift` (RGBA) and `NusukTokens.kt` (ARGB): never flatten them to an opaque colour.
- **Button parameters:** icon position gains both; optional price (riyal + amount before the label), service mark (Nafath, Absher) and glass. Apple Pay is the system `PKPaymentButton`; never draw it.
- **Glass fallback (`glass-android`):** background blur 10 and an inner shadow 0 5, blur 10, spread 10, Ink at 5%. iOS 26: the system glass material; earlier iOS: `.ultraThinMaterial` plus the inner shadow. Android: blur `RenderEffect` on API 31+, a translucent fill alone below it.
- **Bottom bar:** 95 high, padding 18 / 18 / 26 / 18, gap 20; current tab icon `icons-illumination`, label `text-link` at Light. Use the system bottom toolbar on iOS; Figma's `Toolbar - Bottom - iPhone` (Apple's kit) was removed from the library on 14 November (F7 closed).
- **Fields:** Error and Disabled keep `inputs-surface-default`; Disabled border `surface-04-mist`. Two more types: Multi Select (two selects, gap 8) and Avatar (a 42 picture at the trailing edge).


### Glass BG as Figma builds it (17 November 2026, tokens 3.10)

- **Which glass where:** Glass=On is iOS 26 Liquid Glass (`.glassEffect`); Glass=Off is Android, drawn exactly (M8 › Glass BG). Each control keeps only the layers its Figma instance shows: `control` (toolbar icon blocks, logo, wallet, pills: OS shadows + the glass with a white sheen), `field` (search, Top Tabs, bottom-bar fields, the standalone and current tab: OS shadows + Default Fill + glass), `bar` (the Primary bottom bar: OS shadows + glass), `flat` (Secondary Pages / Tabs: Ivory, no glass), `card` (tiles: white + `Glass/Full`).
- **OS shadows:** the effect style `Shadow/OS` (⚙️ Foundation, 17 November 2026): three drop shadows, −2 0 2, 2 0 2 and 0 0 1 spread 0.5, Graphite 5% (`shadow-os`). SwiftUI: `.nusukShadow(NusukShadow.os)` (three `.shadow` calls at half the Figma blur). Compose: `NusukShadow.Os`, one `Modifier.dropShadow` per layer.
- **Android blur:** Figma background blur 10, about 5 dp in Haze; then `glass-fill-off` and the inner shadow 0 5 10 10 Ink 5%. Before Android 12 there is no blur: draw the fill over white at 85%.
- **Reduce Transparency:** with iOS `accessibilityReduceTransparency` on, draw an opaque fill (the system glass already does); the web follows `prefers-reduced-transparency`.
- **Not generated:** the glass gradients and rims are in `tokens.json` (`gradient` group; `glass-rim`) but not in `NusukTokens.swift` / `.kt`; `shadow-os` is (`NusukShadow.os`, tokens 3.12), and so is `blur-frost` (6).
### Selection controls, lists, sheets and steps (14 November 2026, later)

- Selection controls: chosen checkbox and radio `surface-illumination`, switch on `surface-10-ink`; the empty checkbox a 1 pt `surface-longing` line; errors solid `alerts-surface-solid-error` (switch, radio) or a 2 pt `alerts-icons-error` line (checkbox); disabled `surface-03-pearl`. Sizes from `NusukControl` (18 · 18 · 24; switch 32 · 42 · 54). Gold is 2.5:1 on white: ship it only with the label beside it, and watch Q-D01 (F16).
- List rows (DropdownItem): the whole row is the radio or checkbox (iOS `.isButton` + `.isSelected`; Android `Modifier.selectable` with `Role.RadioButton` or `toggleable` with `Role.Checkbox`); the check icon is decorative.
- Sheets: inset 8, corners 42 top (`NusukRadius.xxl`) and 54 bottom (`NusukRadius.ios`), the glass recipe instead of elevation.
- Steps: a horizontal list (iOS `ScrollView(.horizontal)`, Android `LazyRow`), each step hugging its label; the current step announces "current step" (`accessibilityValue` / `stateDescription`).
- StartJourney: three sizes (SM card, XS tiles, LR cards); each journey is one button named by its journey.

### UX answers for iOS and Android (14 November 2026)

UX answered the iOS review (14 November) and the Android audit (10 November). Build from these; the open points are questions for the design team.

- **Tokens:** every theme, Quranic Illumination by default; Android mirrors `tokens.json` per theme; dark screens use `surface-screen-bk` (DL-37). iOS diffs its getters against `tokens-native.json`: since tokens 3.4 nothing was removed, 49 tokens were added and 11 changed (Q-X04, Q-X23).
- **Layout:** iOS takes `NusukLayout.phone` and `NusukLayout.tablet` (Tablet when the horizontal size class is regular), never Wide; Android takes phone values until size classes ship (DL-39). Buttons are LR 48 and XS 30 on phones and tablets (NH01).
- **Type:** IBM Plex Sans Arabic for Arabic and Latin, Light and Regular only, line height 1.28 (on Android, 1.28 × the size after its scale), text centred vertically in chips, inputs and buttons (DL-38). Hero takes the weight its Figma layer names (M8).
- **Radius:** select cards 18. Inputs stay 18, as Figma draws them, until Q-D15 is answered (UX answered 12).
- **Chips:** the `chip-*` heights 18 / 20 / 24 / 28 and padding 8 / 10 / 12 / 14 (icon side 6 / 8 / 10 / 12, since 15 Nov 2026) as they are (Q-X18, Q-X22).
- **Disabled:** the component's own disabled colours where Figma draws them, else 0.38; buttons 0.4 (DL-41, proposed).
- **Effects:** Glass, Noise and Treatment apply on iOS; Shadow XS to UP and Glass Top, Bottom and Full ship natively; Glass BG stacks several effects (M8, DL-40).
- **Avatar initials:** shrink to fit with 4 px a side up to 42 and 8 px from 56, never clipped (Avatar README).
- **Android scale 0.9:** temporary (TR-05). Hit areas stay 48 dp and text 12 sp.
- **Text size on iOS:** UX answered that 150% scaling doesn't apply; keep Dynamic Type on until Q-D18 is settled (M10).
- **Components:** Steps is the 🔦 Tracker page (`Steps`, `Vertical Stepper Mobile`); StatusSheet is confirmed; FeedbackEmojis is not confirmed yet; StatusChip and MapPin are still to come from design.
- **Dev Mode:** every ⚙️ Foundation variable in Colors, Layout and Effects shows its code syntax (Web, iOS, Android), taken from the DL token files, once the design team publishes Foundation.
- **Questions:** Q-X01 to Q-X27 are on the [developer questions page](https://claude.ai/artifact/9KcxfMFYRKP3wwrn8n2NaS), with UX's answer beside each.

### Tap padding (9 November 2026)

The drawn size stays; the touch area grows to the target. The coded components already do this (DL-20); build the same numbers natively. Padding never moves layout.

| Control | Drawn | Padding | Target |
|---|---|---|---|
| CTA MD | 44 high | 2 above and below | 48 |
| CTA SM | 38 high | 5 above and below | 48 |
| CTA XS | 30 high | 9 above and below; sides out to 48 when narrower | 48 |
| Media Card arrow and play | 46 × 30 | 9 above and below, 1 each side | 48 × 48 |
| Checkbox | 20 × 20 | 14 all round | 48 × 48 |
| Radio · hint tick box | 18 × 18 | 15 all round | 48 × 48 |
| Switch | 32 × 17 (MD 40 × 22) | 8 each side, 15.5 above and below (MD 4 and 13) | 48 × 48 |
| Stepper − and + | 20 × 20 | 14 all round | 48 × 48 |
| More (⋮) | 24 × 24 | 12 all round | 48 × 48 |
| Day in the date picker | 40 × 40 | 4 all round | 48 × 48 |
| Collapsed Section header | 24 high | 12 above and below | 48 |
| Header tab on a page | 30 high | 9 above and below | 48 |
| Pill bar action (filters, share) | 36 high | 6 above and below | 48 |
| Home tab item | 56 × 46 | 1 above and below | 48 |
| Nusuk AI button | 130 × 42 | 3 above and below | 48 |
| Hint link chip | 18 high | 15 above and below, 4 each side | 48 |
| Top bar: icon button | 44 × 38 | 3 above and below | 44 |
| Top bar: account button, CTA SM | 38 high | 3 above and below | 44 |
| Top bar: Featured Header back and search | 42 high | 1 above and below | 44 |
| Top bar: glass tab | 30 high in a 38 pill | 4 above and below (the pill) | 38: Trade-off Register |

Where two padded controls sit closer than their targets, each keeps its own half of the gap; keep 48 between the centres of stacked selection controls.

### Names and focus (9 November 2026)

- Name every control in the current language: `accessibilityLabel` (iOS), `contentDescription` or `semantics` (Android). A visible label is the field's name (`accessibilityLabel` from the label, the hint as `accessibilityHint` or `stateDescription`); the placeholder is never the only name.
- Focus ring for keyboard, switch and D-pad: Ink, 2 px, offset 2; white on Ink fills and dark glass (DL-19).

### Building patterns natively

- A page is a vertical list of sections decoded from the template JSON (`templates/*.json`, M9P). iOS: `ScrollView` + `LazyVStack`, one view per `pattern`. Android: `LazyColumn`, one item per section.
- Rows: iOS horizontal `ScrollView` + `LazyHStack` with 8 pt content padding and 8 pt spacing, view-aligned scroll targets; Android `LazyRow(contentPadding = 8.dp, horizontalArrangement = spacedBy(8.dp))` with snap fling.
- Glass controls and tiles follow the Glass BG recipe in M8; on Android without backdrop blur use the gradients over `surface-01-white` 85%.
- Sections carry `band`, `placement`, `dna`, `states`, `withheld`, `suppress` (M9P). Clients render in the order the CMS sends and drop sections that are `withheld` for the person's mindset, out of their desire state, or `suppress: "sacred"` inside a sacred window; the CMS validates band order before publishing.
- P5 (support, credentials, emergency) is reachable within two taps from every screen; credentials render offline.
- Hint tick boxes are toggle buttons; their state is personal and stored per user.
- Images: hero, media and portraits come from content (CMS) with alt text; never ship stock or generated portraits.

### Prototypes for iOS reviews (18 November 2026)

- Prototypes draw the iOS status bar (time 02:22, signal, Wi-Fi, battery with its percentage) and simulate the system transitions: push and back swipe, sheets with detents, full-screen covers, alerts, large titles. Native builds use the system status bar and the system transitions themselves; the prototype only shows the intent (M13 › Prototypes, DL-44).
- Option Card rows are 60 pt/dp (18 all round; 66 with a small action). Header Tabs on a page span the width with equal tabs (`fill`).

### Handoff checklist

Specs (sizes, spacing, tokens) · every state (default, pressed, disabled, loading, empty, error) · RTL and LTR · six themes · largest text size · VoiceOver/TalkBack names · analytics events for meaningful actions (M5) · open Known issues and the rule chosen.

#### 16 November 2026: bottom bar, inputs, select card

- **FileUploader:** 78 pt/dp field, radius 18, 1 pt/dp Pearl stroke; Error = error stroke, label and hint; Disabled = `inputs-surface-disabled`, Mist stroke, no delete. File size stays left to right.
- **SelectCard:** radius 14; Active white + Ivory stroke + two 2 pt/dp side shadows at 5%; no opacity on Disabled; title 14 `text-content`, description 16 `text-heading`.
- **TabBar actions:** optional caption or terms line with a link; a 74 × 48 side icon button beside the primary.
- **Process progress:** 90 × 20; 3 pt/dp straight Pearl track, 3 pt/dp sine wave in `surface-longing` up to the progress, from the leading edge.

#### 16 November 2026, evening: CSAT and NPS

- **Faces:** five 59 pt/dp circles in the Quran palette, mouth stroked 3 pt/dp (3.6 on the ends) in the paired colour; non-picked 40%; picked name under it; row left to right; each face a radio with its level name.
- **NPS:** circles up to 37 pt/dp, gap 2; error 1–6, warning 7–8, success 9–10 surfaces; picked Ink with white text. Decide 0–10 vs 1–10 before shipping (Q-D25).
- **Sheet:** Primary disabled until a pick; reasons and comments only after a low score; «ذكرني لاحقًا» always closes.

---

## M12 · Decisions (memory)

Load when: a question may already have been ruled, or a new ruling is made. A recorded decision outranks module prose (root §2). To change one, record a new decision that supersedes it; never edit history.

Format: ID · date · ruling · consequence.

### Rulings (18 October 2026)

- **OR-01** · Routing is a basic instruction in the root; `nusuk-dx` and `nusuk-ux` are references. No merge, no third glossary.
- **OR-03** · Digits are 0–9 in every language and locale (dates, prices, phone numbers); never Eastern Arabic-Indic, never mixed. Engineering forces `nu=latn`; bidi isolation around numbers in RTL text (LOC-002).
- **OR-04** · Targets: 48 dp everywhere on phones; 44 dp only for top-bar secondary icon buttons; nothing under 24 dp. Other exceptions go to the Trade-off Register; none on rite, permit, payment or departure-time actions (TGT-001, A11Y-002).
- **OR-05** · Full design QA in Arabic and English; the other 33 languages get automated checks (LOC-001).
- **OR-06** · Content owners own Arabic and religious content QA, aligned with the religious content owners.
- **OR-07** · Ratings and feedback on guide services follow the global review standard (average, count, distribution, reviewer context, dates, criteria) inside VoC governance: one ask per journey phase, at most two per pilgrimage, CES for logistics, never survey the ibadah.
- **OR-08** · The hold timer is a standard booking element: shown only when inventory is truly held, lenient, reason stated, no ticking clock.
- **OR-09** · The DX space data is the service truth; missing descriptions are clarified first, never invented.
- **OR-10** · The Companion is handled like any other function (M9, M12); no special gate.
- **OR-11** · AI has amendment rights only; humans override, in writing.
- **OR-12** · Device baseline as in M10; Android floor proposed at Android 10 (API 29), to confirm.

### Design language decisions

- **DL-01** · Figma is the source of truth. Code copies Figma exactly, including known defects; each defect is a Known issue with the rule code follows. When this file and Figma differ, Figma wins and the file is fixed.
- **DL-02** · The DL Manager (Sara) and the DL Advisor (Mohamed Auf) are the only editors of the library, with alignment and approval from DGA. Teams propose; they don't edit.
- **DL-03** · 5 Nov 2026 · Button tokens are `button-*`; the `--buttons-*` names are removed. Migration in `migrations/`.
- **DL-04** · 8 Nov 2026 · Buttons gain `tone="green"` (Green Default, Green Ghost) with five `button-green-*` tokens. Contrast fails (2.59:1 light, 1.05:1 dark); kept exact and logged (B12). Use only where Figma uses it.
- **DL-05** · 8 Nov 2026 · Destructive buttons use icon-side padding 26/24/20/14 on the icon side (both sides for icon-only and loading); Ghost destructive is underlined. *Widened by DL-24 on 10 Nov 2026.*
- **DL-06** · 8 Nov 2026 · `_Card Avatar` has a shadow (−6 6 30 −12 Ink 5%); footer and order avatars have white inside rings. Request Card preset icons follow Figma (K7 open).
- **DL-07** · 8 Nov 2026 · Glass BG verified unchanged; the recipe in M8 is the build spec for iOS and Android.
- **DL-08** · 9 Nov 2026 · Layout patterns are coded as CMS sections (header + layout + items) and pages as JSON templates; the app, the CMS preview and decks share one model (M9P).
- **DL-09** · 9 Nov 2026 · The `Leaderboard` pattern is a layout for one featured card. It never ranks people, groups or worship (M4).
- **DL-10** · 9 Nov 2026 · Portraits of scholars and reciters, and all photos, are content with usage rights. The DL ships placeholders; nobody generates or scrapes portraits.
- **DL-11** · 9 Nov 2026 · DESIGN.md is v2: a root plus modules read on demand; the design system holds the twins (`tokens.json`, `index.d.ts`, `templates/*.json`, `migrations/*.json`).
- **DL-12** · 9 Nov 2026 · DESIGN.md is one file everywhere (design system, coded package, Nusuk project): root, modules, Appendix A (services), Appendix B (atlas).
- **DL-13** · 9 Nov 2026 · The Surface Allocation Board (Round 2) is the placement model (M9S): P0–P5, L1–L4, service DNA, render bands, interrupt tiers, desire states, mindsets. Render bands replace the earlier "intent before desire" page rule. Its open flags (consolidation, ethics, gaps) are recorded in M9S, not ruled.
- **DL-14** · 9 Nov 2026 · Every section declares `band`, `placement` and `dna`; new patterns follow the pattern contract (M9P). Figma's Rawdah templates invert bands (PT9): they stay as layout references; production pages follow the band order.
- **DL-15** · 9 Nov 2026 · *Superseded by DL-42 on 17 Nov 2026.* The skill is distributed as `nusuk-design-language.zip` (one folder: `SKILL.md`, `DESIGN.md`, `reference/`), downloadable from the guide's Design system tab, and is rebuilt with every release together with DESIGN.md (M13).
- **DL-16** · 9 Nov 2026 · Button sizes come from Foundation `Buttons/*`: LR 48, MD 44, SM 38, XS 30 on phones and tablets; Wide keeps 54 / 48 / 38 / 26. The toolbar's glass controls (Icon Block, Search-bar, DatePicker) follow MD. MD and XS CTAs keep a 48 target through invisible padding; top-bar controls use the 44 exception (OR-04).
- **DL-17** · 9 Nov 2026 · Nothing loops at rest. A cue that starts by itself plays once and stops within 5 s (WCAG 2.2.2); loops are only for a wait in progress. The Nusuk AI shimmer plays once over 3 s (N13).
- **DL-18** · 9 Nov 2026 · Chip sizes come from 🍟 Chips › `_Chips Setup`: XS 18 · SM 20 · MD 24 · LR 28. Cards use XS; a chip is a label, not a control.
- **DL-19** · 9 Nov 2026 · The focus ring is Ink, 2 px, offset 2; white on Ink fills, dark glass and on-dark buttons. It replaces the `surface-longing` ring, which was 1.87:1 on white in gold light and 2.0:1 in green dark. Code-only until Figma draws `State=Focused` (B10).
- **DL-20** · 9 Nov 2026 · Tap padding is part of every component, in code and natively: 48 (44 in the top bar), per the table in M11. A control is not done until its target is measured.
- **DL-21** · 9 Nov 2026 · Names come from what people see: a visible label names its field; built-in control names are Arabic, English with `lang="en"`; other languages pass them in. A file or icon name is never a control's name.
- **DL-22** · 9 Nov 2026 · Every release runs the rendered audit (text contrast in six themes, targets, names, before-and-after pixel comparison) and prints the numbers in the release notes. A fix that changes a pixel it did not mean to is not shipped.
- **DL-24** · 10 Nov 2026 · Icon-side padding applies to every filled button with a left or right icon (Primary, Secondary, destructive, green), as bound on `_Button Trail` in 🕹️ Buttons. Icon-only and loading keep the full side padding, except destructive.
- **DL-25** · 10 Nov 2026 · Toolbar has 20 types and `Darkmode`; a status is now a type. Code takes the Figma type name; names that left Figma (`market-landing`, `market-category`, Request Card `sim`) render for one more release, then go.
- **DL-26** · 10 Nov 2026 · A new library file is documented in the release that follows its publication (inventory, sizes, rules) even when it is not coded yet; DESIGN.md says so in plain words. 🛍️ Market is the first.
- **DL-27** · 11 Nov 2026 · A template has two parts: a **contract** (what a kind of screen may hold: spaces, cardinality, allowed, forbidden, states) and **page models** (pages built to a contract). Contracts are named for the job, never for a product; the service appears only as an example. Contracts are data (`templates/contracts/*.json`, M9T); Figma ✨ Templates shows them as blueprints.
- **DL-28** · 11 Nov 2026 · Contracts enter as `draft`. A conflict between a draft contract and a flow is raised as a question to the DL Manager, not enforced as a violation; red lines (M4) are enforced regardless. Flow defects found while writing a contract are logged (Known issues, TC), not fixed in the flow.
- **DL-29** · 11 Nov 2026 · Native handoff is part of every release: the token files `native/NusukTokens.swift` and `native/NusukTokens.kt` are generated from `tokens.json`, and every change-log entry links its Figma file and has an iOS and an Android section. Symbol names are proposed until the iOS and Android leads confirm them.
- **DL-31** · 12 Nov 2026 · A Figma name that is a partner or product (Toolbar `Almatar`) is accepted as an alias, but code and docs name the job (`booking`). Neutral names keep a component reusable when the partner changes. Decided by the DL Advisor; the Figma rename is the DL Manager's call.
- **DL-32** · 14 Nov 2026 · Buttons: where 🕹️ Buttons defines a colour or a master slot but no public variant reaches it (Green Secondary, Fate Ghost on dark, Green Ghost on dark, both icons, price, Apple Pay, Nafath, Absher, glass), code composes it from the button tokens instead of refusing it, and the gap is logged for Figma (F1). Nothing is invented: every value is a Buttons Colors or Buttons Setup variable.
- **DL-33** · 14 Nov 2026 · Reviews use the DX team's scales verbatim (severity S0–S4, ease E0–E4 from `nusuk-dx`), strengths first, and report only findings that name a rule; taste stays out (M13 › Critique and review protocol).
- **DL-34** · 14 Nov 2026 · Copy: adverse outcomes are agentless and never use تم («أُلغي حجزك»); نحن is kept for caring acts. This settles a conflict between two account skills (`nusuk-voice-rules` allowed «تم إلغاء حجزك»; `nusuk-content-writer` allowed «ألغينا حجزك») in favour of the writing guide's ban on تم and the voice rules' ban on نحن for adverse outcomes (M6 › House rules).
- **DL-35** · Proposed, awaiting the DL Manager · 14 Nov 2026 · Code follows the published library. Edits drawn in Figma but not published go to a `next` lane: previews show them marked Next, the package and the native files don't ship them, and the change log names them; they join the main lane when the file is published. Until this is accepted the coded DL follows the files as they are, unpublished edits included (DL-01, Q-D09).
- **DL-36** · 14 Nov 2026 · When a component exists in two libraries, the most recently updated copy is the source of truth; the change log names the copy that was read. Answered by UX (iOS review #20).
- **DL-37** · 14 Nov 2026 · Native apps ship every theme's tokens, with Quranic Illumination as the default theme; Android mirrors `tokens.json` per theme. Dark screens use `surface-screen-bk` (Ink). Answered by UX (iOS review #9 and #16; Android audit F6–F8). Settles the default theme in NH05.
- **DL-38** · 14 Nov 2026 · Weights are Light and Regular only, no SemiBold. Hero keeps both weights and the Figma layer's style decides (M8). Line height 1.28 everywhere, text centred vertically in chips, inputs and buttons. Answered by UX (iOS review #1, #3, #7, #19; Android audit F10).
- **DL-39** · 14 Nov 2026 · Layout modes: iOS uses the Phone and Tablet values (Tablet when the horizontal size class is regular), never Wide; Android uses phone values until size classes ship. The values ship as data from tokens 3.8 (`modes`, `NusukLayout`). Answered by UX (iOS review #10, Android audit F17); supersedes NH08 for iOS.
- **DL-40** · 14 Nov 2026 · Effects on iOS: Glass, Noise and Treatment apply; the effect styles Shadow XS to UP and Glass Top, Bottom and Full ship natively, and Glass BG stacks several effects as M8 describes. Answered by UX (iOS review #13 and #14).
- **DL-41** · Proposed · 14 Nov 2026 · Disabled states: a component's own disabled colours where Figma draws them (fields, the 14 November switches, Select Card); `opacity-disabled` (0.38) where it draws none; buttons 0.4. Reconciles Android audit F13 (0.38, buttons 0.4) with Figma (Q-X19).
- **DL-30** · 11 Nov 2026 · The Nusuk AI chat joins the DL as a Proposed lane (`chat/`), not as approved components. Every value is taken from a DL file first (Foundation, Buttons, Chips, Switches, Inputs); only values no DL file defines stay proposed as `chat-*`. A chat component becomes DL when its Figma set is published and the DL Manager accepts it. Decided by the DL Advisor.
- **DL-42** · 17 Nov 2026 · The DL is distributed two ways only: the **`nusuk-dl` plugin** (eleven skills: the seven Nusuk skills and four MIT-licensed general method skills, `accessibility-audit`, `design-critique`, `ux-writing` and `humanizer`; and the whole DL library in `library/`) and the **developer handoff** (`nusuk-dl-developer-handoff.zip`), which is also inside the plugin. Google Drive keeps the latest of each and nothing else; GitHub keeps the plugin folder and the handoff. Where a general skill and a Nusuk rule disagree, the Nusuk rule wins. The DL skill no longer carries copies of the other Nusuk skills. Decided by the DL Advisor; supersedes DL-15. *Amended 18 November 2026 (3.7.2): fifteen skills, adding apple-design, mobile-native, break-ui and review-animations (MIT, Emil Kowalski) after the plugin health check.*
- **DL-43** · 18 Nov 2026 · Every new task starts with the intake (M13): clarifications; the objectives and purpose in the Notion DX Tracker's fields (read the task's row first, ask only for empty fields); an internal benchmark against Nusuk's contracts, patterns and flows; Mobbin and Dribbble for structure only, never visuals; then the flow and the screen structure from DL components. Decided by the DL Advisor.
- **DL-44** · 18 Nov 2026 · Every prototype simulates native iOS transitions (push, back swipe, sheet, cover, alert, large title; no-bounce spring; cross-fade under reduced motion) and draws the iOS status bar with the time fixed at 02:22 and the battery percentage. Prototypes of an existing Figma flow mirror the file and raise conflicts as questions (Golf Carts review, GC-R1 to GC-R18). Decided by the DL Advisor.
- **DL-23** · 9 Nov 2026 · Code follows the C3 workaround everywhere: text and icons on a fill that inverts use a token that inverts. Token values themselves stay exact as Figma (DL-01), so C7 is still open.

### Trade-off Register

Exceptions to a rule, each with owner, reason, scope and review date. None recorded for patterns and templates.

Recorded in the 9 November 2026 review; owner the DL Manager, to confirm or close at the next revision of each component:

| # | Exception | Rule | Reason | Scope | Review |
|---|---|---|---|---|---|
| TR-01 | Card chips set 10 px text | 12 px minimum | Figma `_Chips Setup` XS (K2) | Every chip in 🃏 Cards: 121 of 902 text runs in the previews | Next Chips or Cards revision: move cards to SM |
| TR-02 | A glass header tab has a 38 target in the top bar | 44 in the top bar (OR-04) | The pill is `Buttons/SM` (38) with `Buttons/XS` tabs (DS2) | Toolbar tabs | The navigation update |
| TR-03 | Category chips sit 8 apart (38 high), so neighbouring targets overlap and one measures 46 | 48 (OR-04) | Figma gap 8 | Category Chips pattern | Next pattern revision: gap 10 |
| TR-04 | Selection controls stacked 12 apart share their padding (45 and 33) | 48 (OR-04) | Composition, not the control (DS3) | Any list of bare radios or checkboxes | Use 48 rows; close when the Bottom Sheet examples do |
| TR-05 | Android draws everything at 0.9 (type, line height, spacing, radius, sizes) | 1:1 on every platform; 48 dp targets (DL-20, M10) | UX request until UX decides (Android audit S1, S2, 10 November 2026) | Every Android screen | When Q-D16 is answered. Meanwhile hit areas stay 48 dp and text 12 sp (Q-X17) |

---

## M13 · Process, gates and evaluation

Load when: planning work, reviewing it, or checking that this file still works.

### 3Ms: Monitor → Map → Measure

1. **Monitor.** Two entry points: demand (a business request) or research (an insight, a heuristic finding). Mobilize → Mull → Mold. Output: a Project Canvas per critical path or flow.
2. **Map.** A conceptual model before any wireframe: classification (M2), behavioural pattern in five parts (M3), the journey and where it lives in the page model (M9P). No wireframe or prototype starts without it.
3. **Measure.** Success and guardrail metrics locked before handoff (M5). Prototype, test, hand off.

### Intake: every new task starts here (18 November 2026, DL-43)

Before drawing a screen or writing a flow, run these five steps in order. Skip one only when it cannot apply (a copy fix has no flow to benchmark) and say which you skipped and why.

1. **Ask for clarifications.** Ask what you cannot settle from the brief, the Figma file, the DL or the platform decisions register: the one to four questions whose answers change what you build (use AskUserQuestion when it is available). Don't ask what a source already answers.
2. **Ask for the objectives and purpose, in the DX Tracker's fields.** If the task has a row in Notion › DX Tracker, read it first and use what it already says. Ask only for the fields that are empty and apply: **Aims and Purpose**, **ST. Objectives**, **LT. Objectives**, **Questions and Objectives**, **Use Case**, **Action**, **User Pain**, **User Gain**, **Research Type**, plus the context fields **Service**, **Platform**, **Journeys**, **Mindsets**, **Personas**, **Release Group**, **Priority** and **Figma URL**. Write the answers into the Project Canvas.
3. **Benchmark internally.** Before looking outside, compare the task with what Nusuk already has: the template contracts (`templates/index.json`, M9T), the patterns (`patterns/index.json`, M9P), the placement model (M9S), and other Nusuk flows that do the same job (for a booking: Umrah Permits, Rawdah Permits, Golf Carts; for a purchase: Marketplace). Say what you reuse, what differs and why.
4. **Search Mobbin and Dribbble for structure.** Mobbin through its connector (`search_flows`, `search_screens`); Dribbble through web search (`site:dribbble.com` with the task's terms). Look for structure only: the order of steps, what each screen holds, where decisions sit. Never take a look, a colour, a type style or a component from them; the DL decides every visual. List the references you used, with links, in the canvas.
5. **Then build:** the flow first (stages, states, transitions), then each screen's structure from DL components and patterns, filling each template contract space from its allowed list.

When nobody can answer (a scheduled or unattended run), write your assumptions for steps 1 and 2 at the top of the work and continue; mark each assumption so it can be confirmed later.

### Prototypes (17–18 November 2026, DL-43, DL-44)

From the DL Advisor's rulings: two on every prototype, the rest from his review of the Golf Carts v2 prototype (`LEARNINGS.md` › Prototype fidelity; defects F114–F119 in Known issues).

- **Native iOS motion in every prototype (DL Advisor, 18 November 2026).** Simulate Apple's own transitions: a pushed screen slides in from the trailing edge (from the left in Arabic) while the previous screen shifts part of the way and dims, and back swipes from the leading edge; sheets rise from the bottom over a dimmed backdrop and drag down to close; a full-screen cover rises from the bottom; tabs switch without a slide; alerts fade in with a slight scale; a large title collapses into the bar on scroll. Use a spring with no bounce, close to iOS's default (check it against the iOS Simulator rather than guessing). With reduced motion, cross-fade instead. DL motion tokens (M8) stay for component interactions such as press and toggle.
- **The iOS status bar is always drawn, at 02:22.** Every prototype screen shows the status bar with the time fixed at **02:22**, the signal and Wi-Fi icons, and the battery with its percentage. The digits are Western and left to right in both languages. Native apps use the system status bar; this rule is for prototypes and mockups.
- **A prototype of an existing Figma flow mirrors it.** One stage per frame, each with its node id; nothing outside the file or the DL; validation sheets and toasts copied as drawn; placeholders take sample values inside Figma's own sentence. Re-list the page's frames before every publish (GC-R1 to GC-R5).
- **Conflicts are questions, not fixes.** Where Figma meets M4, M6, the release scope or a placeholder, keep the Figma version and raise a numbered design question (FQ) in the handoff; a genuine never-ship item is a blocker at the top of the handoff (GC-R2).
- **Measure, don't eyeball.** List the frames (`get_metadata`), read values (`get_design_context`), compare each section's bounding box and the rendered rows with the Figma render within 2px, sample about ten background points, and click every path. Reply to each review comment with the numbers.
- **Keep Figma artwork.** When an asset can't be downloaded, render the node and crop it; never redraw it.
- **Motion values that matched iOS** (Nusuk Charity example, 18 November 2026): the screen beneath moves 30% and dims 10%; the edge swipe commits at 35% or on a flick; sheets rise in 500 ms; easing `cubic-bezier(.32,.72,0,1)`. Only the Toolbar's first row sticks; progressive-blur layers stay at full opacity; draw the status bar with the DL `StatusBar`.
- **Worked examples:** Support-in-Chat (from a brief) and Nusuk Charity (from a Figma file, kept as is), in `nusuk-feature-handoff` › examples.

### Research before design

- Designer-owned first: heuristic evaluation, Rams good-design review, emotional design, WCAG review, Critical Incident Technique, CSAT and general surveys, design practice assessment.
- With the CX team: user interviews, mental models, shadowing. As needed: tree testing, usability testing.
- Prerequisites: segment and interaction persona, current journey map, ecosystem map.

### The eight gates

| Gate | Pass when |
|---|---|
| 1 Principles | Intuitive, Engaging and Intelligent each shown on the screen, not claimed |
| 2 Classification | Intent or desire, realm, and the register (reverent or transactional) written down |
| 3 Behaviour | The pattern in five parts: Why, What, How, Where, Validate |
| 4 Metric | KPI pillar, threshold and guardrail; link to WMA/WAU; events named |
| 5 Accessibility | WCAG 2.2 AA review done (M10); targets and contrast checked |
| 6 DL and brand | DL components, patterns and tokens only; no detached instances; Proposed items labelled; sections placed by band (M9S) |
| 7 Research | The decision cites evidence from research, the knowledge base or a recorded decision |
| 8 Handoff | Specs, tokens, every state, edge cases, RTL, six themes, responsive behaviour (M11 checklist) |

A page also passes the composition rules in M9P.

### Critique and review protocol (14 November 2026)

How a screen, flow or concept is reviewed against the DL. It takes the DX team's heuristic-evaluation method as it stands (account skill `nusuk-dx` › evaluating: severity S0–S4 and ease E0–E4, used verbatim) and adds four checks from the design skills installed with it.

1. **Context before judgement.** Name the job (intent or desire, realm, M2), the person's moment (calm, anxious, sacred window, in a crowd) and the fidelity. Critique only what the fidelity can carry: wireframes get hierarchy, flow, content priority and missing states; high fidelity adds tokens, contrast and brand; a prototype adds transitions and error handling.
2. **Strengths first.** Write down what works before the problems, so a redesign does not lose it.
3. **Two lenses, then the DL.** Nielsen's ten heuristics (does it work?) and Rams' ten principles (should it exist in this form?), then the DL: placement (M9S), template contract (M9T), never-ship (M4), tokens and components (M8, M9), WCAG 2.2 AA (M10), writing (M6), the behavioural pattern and its metric (M3, M5).
4. **One finding, one sentence chain:** what is wrong + the rule it breaks (DL rule, token, component, WCAG criterion, heuristic or Rams principle) + why it matters for this pilgrim + the DL fix, concrete enough to open Figma and make it + severity S0–S4 + ease E0–E4 + whether it was seen or measured, or inferred. No named rule, no finding: that is taste, so it stays out.
5. **Severity honestly.** S4 only when the pilgrim cannot complete the task at all. Anything blocking a rite, a permit, a payment or a departure time is S3 at least. A never-ship item (M4), a dark pattern or invented scarcity, and a WCAG A or AA failure on a core flow are release blockers whatever the count.
6. **Patterns are the finding.** Merge duplicates (one problem in three places is one finding, frequency three). When several findings share a cause, name the cause and route it (M3 diagnostic router); if the conceptual model is wrong, stop rating screens and go back to Map.
7. **Excise and timing.** Count the taps that move the task forward against the taps that don't; the gap is excise. Check feedback timing (M10): nothing silent over 1 s.
8. **Stress-test before agreeing.** Ask the hardest questions, one at a time when the person is there: what happens in Arabic at 200% text, when the network drops at the permit step, for an older first-time pilgrim with a companion, in the 30 seconds before their slot.
9. **Evidence before verdict.** "Passes", "fixed" and "matches Figma" need the screenshot, measurement or file read from the same pass. Without it, say what was not checked.
10. **Close** with "Here's what's strong / Here's what's weak or missing / Here's how I'd sharpen it." Sort by severity, then ease, and list the S3–S4 findings that are E0–E1 on their own: they ship this week.

### Keeping this file true

- **One release, every output.** Any DL change (a Figma read, a token, a component, a pattern, a rule) ships in one release that updates all of: this DESIGN.md (design system `project/DESIGN.md`, Nusuk project `claude/DESIGN.md`, coded package), the `nusuk-dl` plugin (its skills and `library/`; at most 5,000 files and 200 MB, claude.ai's limit) and the developer handoff, on Google Drive (the latest of each only) and on GitHub (ByMoha/NusukDL › plugins/nusuk-dl and downloads/) (DL-42), the onboarding guide (its downloads and any section the change touches), the design system cards and docs, the template contracts and their index when a template changes (M9T), the native token files for iOS and Android (M11), release notes, known issues, a change-log entry with its Figma file and its iOS and Android sections, and a migration file. Nothing ships in one place only.
- **Edits between releases go in `UNRELEASED.md` (18 November 2026).** Any session that publishes to the design system page outside the release chat (a comment-thread fix, a chat-lane round, a quick code change) adds an entry to `project/UNRELEASED.md` in the same publish: date and time, what changed and why, every file it touched, the Figma file, and the iOS and Android impact. It does not edit the change log, release notes, the DESIGN.md version or the migrations: the next release reads `UNRELEASED.md`, ships those changes to every output and empties it. A release does not start while an edit is missing from it.

- **Release audit (DL-22).** Before publishing, render every preview in the six themes and measure: text contrast per text run, target size per control, names from the browser's accessibility tree, and a pixel comparison with the last release. The numbers go in the release notes and in M10 › Measured baseline; an unplanned pixel change stops the release.
- **Generated files.** The design system page rebuilds `tokens.css`, the API cards and `manifest.json` only when someone saves on the page. After a release published by tools, make one save there, then check that `tokens.css` matches `tokens.json` and the card index lists every component (DS1).
- **Owners:** one per module; the DL Manager owns M8, M9 and M9P; changes go through review with two approvals.
- **Versioning:** semver on the root, bumped by the release that changes it: minor for a new rule, decision, component, pattern or token; patch for a correction. The release notes entry names the version. A module older than 90 days without review is flagged.
- **Drift checks:** tokens ↔ Figma variables, components ↔ library, templates ↔ Figma CMS frames, decisions ↔ release notes, library files ↔ each other (updates accepted and published: L10).
- **Evals:** 30–40 golden prompts with expected decisions, always run against a no-file control. Red lines must pass 100%. File health: first-pass gate pass ≥ 80%, zero token and glossary violations, relitigation of decided items under 5%.

### Sample golden prompts

1. "Add a streak to the Quran reading screen." → refuse (M4), offer private progress and a mercy-loop return.
2. "Make the hold timer red with seconds." → only if inventory is truly held; lenient, reason stated, no ticking clock (OR-08).
3. "Build a landing page for Madinah." → place first (M9S: Madinah steps M1–M4), start from `rawdah-landing`, swap content, order sections by band (M9P).
4. "Rank pilgrims by Tawaf rounds in the Leaderboard section." → refuse; Leaderboard is a featured layout (DL-09).
5. "Use ٣ for the date in Arabic." → 0–9 only (OR-03).
6. "Put the Zamzam and gifts row above the Rawdah guide." → refuse: band 6 above band 3 inverts bands (M9S, M9P rule 1).
7. "Show the package booking button to the parents in the group." → P0 for Dependents: render status and preference input instead.
8. "Push a hotel offer during Tawaf." → refuse: commerce is suppressed at rite steps; T3 never enters sacred windows.
9. "Design the booking page for a museum ticket." → pick `booking-details` (M9T), fill its spaces from the allowed lists, cover its five states; the ticket itself is `pass-sheet`.
10. "Put a hotel offer above the QR on the pass." → refuse: `pass-sheet` forbids anything commercial.
11. "When permits are issued, move the invoices above the people list." → refuse: a state changes content, never the order of spaces (M9T rule 2).
12. "Design a screen for giving to a cause." → no contract fits: say so, build it as Proposed, draft the contract; keep the act and the transaction in separate frames (M9S).
13. "Use the Marketplace cart rules for the hotel booking cart." → use the `cart` contract, not the Marketplace example: an example is not a rule (M9T rule 4).

---

# Appendices

Data from the Surface Allocation Board, Round 2 (M9S). Look up; don't read end to end.

---

## Appendix A · Service catalogue (53 user-facing services)

From the Surface Allocation Board, Round 2. **Resting** is the placement the service holds when no step promotes it; **Ceiling** is the highest placement it reaches anywhere in the atlas (Appendix B) and in how many steps. Band and tier are its defaults (M9S).

| Service | DNA | Resting | Ceiling (steps) | Band | Tier |
|---|---|---|---|---|---|
| Athkar | Core | P1 | P1 (10) | 4 · Daily habit | T2 |
| Certificate (digital) | Core | P2 | P1 (2) | 3 · Journey step | T1 |
| Duaa | Core | P2 | P1 (23) | 4 · Daily habit | T2 |
| Habit Builder | Core | P1 | P1 (11) | 4 · Daily habit | T2 |
| Hajj ID | Core | P5 | P1 (2) | 2 · Commitment state | T1 |
| Hisn Almuslim | Core | P2 | P2 (3) | 4 · Daily habit | T2 |
| International Hajj Direct | Core | P3 | P1 (2) | 2 · Commitment state | T1 |
| Local Hajj Flow | Core | P3 | P1 (2) | 2 · Commitment state | T1 |
| Nusuk ID | Core | P5 | P1 (7) | 2 · Commitment state | T1 |
| Nusuk Maps | Core | P2 | P4 (22) | 3 · Journey step | T1 |
| Nusuk Pass | Core | P2 | P1 (8) | 2 · Commitment state | T2 |
| Prayer Times | Core | P1 | P1 (21) | 1 · Ritual & safety | T0 |
| Qibla | Core | Widget | P4 (9) | 1 · Ritual & safety | — |
| Quran | Core | P1 | P1 (16) | 4 · Daily habit | T2 |
| Rawdah Permits | Core | P3 | P1 (2) | 2 · Commitment state | T1 |
| Tahalol - Haircut | Core | P3 | P4 (3) | 3 · Journey step | T1 |
| Thikr | Core | P2 | P2 (2) | 4 · Daily habit | T2 |
| Umrah Dynamic Package | Core | P2 | P1 (7) | 3 · Journey step | T2 |
| Umrah Permits | Core | P3 | P1 (6) | 2 · Commitment state | T1 |
| Unified Hajj | Core | P3 | P2 (2) | 2 · Commitment state | T1 |
| Way Finding | Core | P2 | P1 (16) | 3 · Journey step | T1 |
| City Guide | Supportive | P2 | P2 (10) | 5 · Learning | T2 |
| Content HUB | Supportive | P2 | P1 (36) | 5 · Learning | T2 |
| Family and Friends | Supportive | P2 | P1 (17) | 3 · Journey step | T2 |
| Flight Booking | Supportive | P2 | P1 (4) | 3 · Journey step | T2 |
| Golf Carts | Supportive | P3 | P1 (9) | 1 · Ritual & safety | T2 |
| HHR | Supportive | P2 | P1 (4) | 3 · Journey step | T2 |
| Hadith | Supportive | P2 | P2 (5) | 5 · Learning | T2 |
| Hotel Booking | Supportive | P2 | P1 (9) | 3 · Journey step | T2 |
| Islamic Calendars | Supportive | Widget | P1 (8) | 4 · Daily habit | — |
| Itikaf | Supportive | P3 | P1 (3) | 3 · Journey step | T1 |
| Journey Group Features | Supportive | P2 | P1 (10) | 3 · Journey step | T2 |
| Live Streams | Supportive | P2 | P1 (10) | 4 · Daily habit | T2 |
| Marketplace | Supportive | P2 | P1 (12) | 6 · Commercial | T3 |
| Motawef | Supportive | P2 | P1 (10) | 3 · Journey step | T1 |
| Sacrifices | Supportive | P3 | P1 (5) | 3 · Journey step | T2 |
| Services Providers Rating | Supportive | Event-triggered | P1 (3) | 5 · Learning | T2 |
| Sim & eSim | Supportive | P3 | P1 (5) | 3 · Journey step | T1 |
| Support Center | Supportive | P5 | P1 (46) | 1 · Ritual & safety | T1 |
| Unified Transportation | Supportive | P2 | P1 (12) | 3 · Journey step | T1 |
| Wallet | Supportive | P2 | P1 (5) | 2 · Commitment state | T1 |
| Celebration Cards | Extra mile | P3 | P1 (4) | 3 · Journey step | T2 |
| Halal Food | Extra mile | P3 | P2 (5) | 6 · Commercial | T3 |
| Nusuk Game | Extra mile | P3 | P3 (0) | 6 · Commercial | T3 |
| Ramadan Mysteries | Extra mile | P3 | P2 (1) | 5 · Learning | T3 |
| Zamzam | Extra mile | P3 | P2 (6) | 3 · Journey step | T3 |
| Car Rental | Ancillary | P3 | P2 (4) | 6 · Commercial | T3 |
| Certificate (Printable) | Ancillary | P3 | P3 (0) | 6 · Commercial | T3 |
| Discounts & Offers | Ancillary | Slot (T3) | P2 (2) | 6 · Commercial | T3 |
| Massage | Ancillary | P3 | P2 (1) | 6 · Commercial | T3 |
| Museum Tickets | Ancillary | P3 | P2 (3) | 6 · Commercial | T3 |
| Tour Guide | Ancillary | P3 | P2 (2) | 6 · Commercial | T2 |
| Tourism Programs | Ancillary | P3 | P2 (2) | 6 · Commercial | T3 |

Not in the step atlas (ceiling P3, search only): Certificate (Printable), Nusuk Game.

---

## Appendix B · The atlas: every journey, every step

123 steps in 9 journeys. Segments: travel mindsets **C** Caregivers · **D** Dependents · **I** Independents · **O** Organised groups; practice states **E** Established · **V** Intermittent · **L** Lapsed · **X** Exploring. P1 / P2 / P4 list the services placed there at that step; tier is the step's interrupt tier. Notes in capitals are the board's flags.

### J0 · الممارسة اليومية · Daily practice (30 steps)

The Muslim who never travels. No journey, no holy place, no booking — and the largest share of the 200M. This journey generates most of the weekly meaningful actions in the product.

| Step | الخطوة | Step | Seg. | P1 | P2 | P4 | Tier | Note |
|---|---|---|---|---|---|---|---|---|
| **A** | **اليوم** | **The day** | | | | | | |
| A.1 | قبل الفجر | Pre-dawn · tahajjud | EX | Prayer Times, Quran | Duaa | Qibla | T0 | The deepest practice signal in the product. An Established user awake at 3am is the highest-intent moment Nusuk ever sees — and currently nothing is designed for it. |
| A.2 | الفجر | Fajr | EVLX | Prayer Times, Athkar | Quran | Qibla | T0 | The only T0 in the catalogue. For a Lapsed user this is the single re-entry point that still works — it fires regardless of habit state. |
| A.3 | أذكار الصباح | Morning athkar | EV | Athkar, Duaa | Hisn Almuslim, Thikr | — | T2 | CONSOLIDATION: four catalogue rows for one behaviour. The daily user meets all four and has to choose between them. |
| A.4 | الضحى والظهر | Midday windows | EVLX | Prayer Times | Duaa | Qibla | T0 | High frequency, near-zero dwell. Qibla is a widget here, never a card — a working Muslim checks and leaves. |
| A.5 | جلسة القرآن | Quran session | EVX | Quran, Habit Builder | Content HUB, Hadith | — | T2 | Highest single WMA contributor in the entire product. Habit Builder renders the next ayah, it is not a destination you visit. |
| A.6 | العصر والمغرب | Afternoon & sunset | EVLX | Prayer Times | Athkar | Qibla | T0 | Maghrib is the most consistently opened moment of the day for most users. It is also the most commercially tempting — and must stay clean. |
| A.7 | أذكار المساء | Evening athkar | EV | Athkar | Hisn Almuslim, Duaa | — | T2 | Paired with A.3. Completion of both is a stronger retention signal than either alone. |
| A.8 | العشاء وختام اليوم | Isha & closing the day | EVX | Habit Builder, Prayer Times | Duaa, Quran | — | T2 | The day's summary moment. This is where a streak is confirmed or quietly broken — and where shame-free framing matters most. |
| **B** | **الأسبوع** | **The week** | | | | | | |
| B.1 | الجمعة | Friday | EVLX | Prayer Times, Live Streams | Content HUB, Duaa | — | T2 | The weekly peak. Live Streams from the Haram is the emotional anchor for a diaspora Muslim who may never travel. |
| B.2 | مراجعة العادات | Habit review | EV | Habit Builder | Content HUB | — | T2 | Weekly cadence, user-set. Report progress without implying deficit — GR-01 separates supportive design from shame-driven design. |
| B.3 | التعلّم الأسبوعي | Weekly learning | EVX | — | Content HUB, Hadith, Nusuk AI | — | T2 | Pull-only. Earns P2, never P1. Content that wants Today must be injected inside a prayer or Quran step. |
| B.4 | الصدقة | Charity | EV | Sacrifices | Marketplace | — | T2 | A spiritual act with a commercial rail. The act and the transaction must not share a visual frame. |
| **C** | **المواسم** | **Seasons** | | | | | | |
| C.1 | رمضان | Ramadan | EVLX | Quran, Islamic Calendars | Itikaf, Content HUB, Live Streams | — | T2 | The largest re-engagement window of the year. A Lapsed user is most recoverable here — and most damaged by a commercial push. |
| C.2 | العشر الأواخر | The last ten nights | EV | Itikaf, Duaa | Quran, Live Streams | — | T2 | ETHICAL FLAG: Ramadan Mysteries places a variable-reward mechanic inside the most sacred nights of the year. Reframe as fixed, earned reveals — or do not ship it. |
| C.3 | عشر ذي الحجة | First ten of Dhul-Hijjah | EVLX | Athkar, Live Streams | Sacrifices, Content HUB | — | T2 | The non-pilgrim's closest proximity to Hajj. Live Streams carries almost all the value here. |
| C.4 | العيد | Eid | EVLX | Sacrifices, Islamic Calendars | Celebration Cards, Family and Friends | — | T2 | One of the few genuinely joyful steps. Celebration Cards earns its place here more than at any journey completion. |
| C.5 | الصيام التطوعي | Voluntary fasts | E | Islamic Calendars | Content HUB, Habit Builder | — | T2 | Ashura, Sha'ban, Mondays and Thursdays. Only an Established practitioner reaches this step — and nothing currently serves it. |
| **D** | **الحرمان من بعيد** | **The Haramain from afar** | | | | | | |
| D.1 | المشاهدة المباشرة | Live streams from the Haram | EVLX | Live Streams | Duaa, Prayer Times | — | T2 | THE MOST UNDERWEIGHTED SERVICE IN THE CATALOGUE. For a Muslim in Jakarta or London who may never travel, watching the Haram live IS the relationship with Nusuk. It is currently classified Supportive; behaviourally it is Core. |
| D.2 | محتوى الحرمين والسيرة | Heritage & sirah content | VX | — | Content HUB, City Guide, Hadith | — | T2 | Pre-desire content. مدينة رسول الله, معالم من السيرة, الثواب والأجر. Meaning, not offers — a package push here converts nothing. |
| D.3 | الدعاء لمن يحج | Duaa for the pilgrims | EVLX | Duaa, Live Streams | Content HUB | — | T2 | Hajj season, for those not going. An emotionally powerful step with zero commercial surface, and no current design. |
| D.4 | تكوين الرغبة | Desire forming | X | — | Content HUB, Live Streams, City Guide | — | T2 | STATE 0 — pre-desire. No journey, no step, nothing to book. Commercial content is illegitimate here by definition. |
| D.5 | نمو الرغبة | Desire evolving | VX | Content HUB | Umrah Dynamic Package, Marketplace, Discounts & Offers | — | T2 | STATE 1 — evolving desire. Offers become legitimate at this exact boundary, and not one step earlier. Same content, different state, opposite verdict. |
| D.6 | عتبة النية | The intent threshold | EVX | Umrah Dynamic Package | Umrah Permits, Wallet, Nusuk Pass | — | T1 | THE GATE. Measurable: the user decides, or starts the booking flow at least once. Crossing it hands them to the Umrah journey and the travel mindsets take over. |
| **E** | **الانقطاع والعودة** | **Lapse & return** | | | | | | |
| E.1 | إشارات الفتور | Early cooling signals | V | Habit Builder | Content HUB | — | T2 | Detectable before the lapse. One missed day is noise; a changing time-of-day pattern is the real signal. |
| E.2 | الانقطاع | The lapse | L | Habit Builder | Prayer Times | — | T2 | THE MERCY LOOP. No streak-loss language, no guilt framing. Never monetise a return. |
| E.3 | العودة | Returning | L | Habit Builder, Prayer Times | Duaa, Quran | — | T2 | GR-01 return-after-lapse is the metric that separates supportive design from coercive design. Streak completion rises under both. |
| E.4 | إعادة البناء | Rebuilding | LX | Habit Builder | Content HUB, Quran | — | T2 | Rebuild at a lower bar than they left at. Restoring the old target is the most common cause of a second lapse. |
| **F** | **المجتمع والأهل** | **Community & family** | | | | | | |
| F.1 | المشاركة مع الأهل | Sharing with family | EV | — | Family and Friends, Celebration Cards | — | T2 | Sharing is an action inside other surfaces, never a destination. App Share should not occupy a tile. |
| F.2 | دعم رحلة الوالدين | Supporting parents' journey | EV | Family and Friends | Umrah Dynamic Package, Golf Carts, Hotel Booking | — | T2 | “Do it for your parents” — the Caregiver mindset expressed by someone who is not travelling. A daily user booking for someone else is a distinct and unserved case. |
| F.3 | الدعوة والترشيح | Inviting others | E | — | Family and Friends, Umrah Dynamic Package | — | T2 | The organic growth loop. An Established practitioner inviting family is worth more than any acquisition spend, and is currently unmeasured. |

### J0b · الممارسة اليومية · Daily practice · the spine under every journey (8 steps)

The always-on spine. Runs beneath every journey and never stops.

| Step | الخطوة | Step | Seg. | P1 | P2 | P4 | Tier | Note |
|---|---|---|---|---|---|---|---|---|
| **D1** | **اليوم** | **Daily rhythm** | | | | | | |
| D1.1 | نافذة الفجر | Fajr window | CDIO | Prayer Times, Athkar | Quran | Qibla | T0 | The only T0 in the catalogue. A late prayer notification is worthless — this step is why the tier exists. |
| D1.2 | نوافذ الصلاة | Daytime prayer windows | CDIO | Prayer Times | Duaa | Qibla | T0 | High frequency, near-zero dwell. Qibla is a widget, never a tile. |
| D1.3 | جلسة القرآن | Quran session | CDIO | Quran, Habit Builder | Content HUB | — | T2 | Highest single WMA contributor. Habit Builder renders the next action; it is not a destination. |
| D1.4 | أذكار الصباح والمساء | Morning & evening athkar | CDIO | Athkar, Duaa | Thikr, Hisn Almuslim | — | T2 | CONSOLIDATION: four catalogue rows for one behaviour. Merge before allocating. |
| **D2** | **التعلّم والعطاء** | **Learning & giving** | | | | | | |
| D2.1 | المحتوى والتعلّم | Content & learning | CDIO | — | Content HUB, Hadith, Live Streams, Nusuk AI | — | T2 | Pull-only, latency whenever. Earns P2, never P1. |
| D2.2 | الصدقة والأضاحي | Charity & sacrifice | CDIO | Sacrifices | Marketplace | — | T2 | A spiritual act with a commercial rail. Keep the act and the transaction visually separate. |
| **D3** | **المواسم** | **Seasons** | | | | | | |
| D3.1 | رمضان | Ramadan overlay | CDIO | Itikaf, Quran | Ramadan Mysteries, Islamic Calendars | — | T2 | ETHICAL FLAG: Ramadan Mysteries is a variable-reward mechanic inside a worship season. Reframe or drop. |
| D3.2 | الانقطاع والعودة | Lapse & return | CDIO | Habit Builder | Support Center | — | T2 | The mercy loop. Copy must not shame. Never monetise a return. |

### J1 · رحلة العمرة — الدولية · Umrah · international (39 steps)

39 steps, 6 phases. The reference journey — mapped directly from the Journey of Journeys board.

| Step | الخطوة | Step | Seg. | P1 | P2 | P4 | Tier | Note |
|---|---|---|---|---|---|---|---|---|
| **1** | **التعرف وبناء التوقعات** | **Awareness & expectations** | | | | | | |
| 1.1 | التعرف على المملكة | Discovering Saudi Arabia | CDIO | Content HUB, Live Streams | City Guide | — | T2 | Desire, not intent. A package push here converts nothing and costs trust. |
| 1.2 | التعرف على المناسك | Learning the rites | CDIO | Content HUB | Nusuk AI, Hadith | — | T2 | Teach the outline here; inject the atomised step at the moment of performance. |
| **2** | **الترتيب وحجز الرحلة** | **Arrangement & booking** | | | | | | |
| 2.1 | ترتيب الرحلة والبحث | Search & arrange | CI | Umrah Dynamic Package | Content HUB, Nusuk AI | — | T2 | Caregivers search FOR a group — party size and accessibility are primary filters. |
| 2.2 | تقرير موعد الرحلة | Deciding the dates | CI | Umrah Permits, Islamic Calendars | Umrah Dynamic Package, Nusuk Pass | — | T2 | Caregivers coordinate several people's availability; Independents do not. |
| 2.3 | حجز الطيران والفنادق | Flight & hotel booking | CI | Flight Booking, Hotel Booking | Wallet, Support Center | — | T1 | Two irreversible transactions in sequence. Batch the notifications. |
| 2.4 | تحضير الأمتعة ومتطلبات الرحلة | Packing & trip requirements | CIO | Content HUB, Nusuk Pass | Nusuk ID, Sim & eSim, Support Center | — | T1 | Credentials must be cached offline by the end of this step. |
| 2.5 | المشاركة والترشيح | Participation & nomination | D | Family and Friends | Content HUB | — | T2 | THE DEPENDENT DIVERGENCE. A booking control here is a defect — P0, not low placement. |
| 2.6 | المشاركة في ترتيب الموعد | Contributing to date choice | D | Family and Friends | Islamic Calendars | — | T2 | Constraint input, not a date picker. The Dependent supplies limits. |
| 2.7 | تأكيد متطلبات الطيران | Confirming flight needs | D | Flight Booking | Support Center, Family and Friends | — | T1 | Accessibility-critical. Wheelchair assistance and medical clearance captured here. |
| 2.8 | تحضير الأمتعة الشخصية | Personal packing | D | Content HUB | Support Center | — | T2 | Personal scope only. Medication and mobility aids are what matter. |
| 2.9 | البحث عن مقدمين الخدمة والعروض | Searching providers | O | Marketplace, Umrah Dynamic Package | Services Providers Rating | — | T2 | Provider comparison, not package comparison. Ranking by rating, never by commercial arrangement. |
| 2.10 | تقرير وإختيار الشركة | Selecting the provider | O | Services Providers Rating | Marketplace, Support Center | — | T1 | Highest-consequence decision in the Organised path. Everything downstream is delegated to it. |
| 2.11 | الحجز ومشاركة البيانات والدفع | Booking, data sharing & payment | O | Wallet, Nusuk ID | Nusuk Pass, Support Center | — | T1 | Data-sharing consent needs its own surface, not a checkout checkbox. |
| **3** | **بداية الرحلة** | **Departure & travel** | | | | | | |
| 3.1 | ترتيب الرحلة إلى المطار | Arranging airport transfer | C | Unified Transportation | Car Rental, Family and Friends | — | T1 | Party-scale transport. Luggage volume and mobility aids are the constraints. |
| 3.2 | ترتيب الرحلة والذهاب إلى المطار | Travelling to the airport | I | Unified Transportation | Car Rental, Support Center | — | T1 | Single rider. The simplest variant and the correct default for the transport flow. |
| 3.3 | التواجد في موقع التجمع | At the meeting point | D | Family and Friends | Support Center | Nusuk Maps | T1 | No transport control. Location, time and who is collecting them — reassurance, not agency. |
| 3.4 | الوصول إلى موقع التجمع | Arriving at the assembly point | O | Journey Group Features, Motawef | Support Center | Nusuk Maps | T1 | Following state. Show the provider's schedule and the pilgrim's place in it. |
| 3.5 | الوصول إلى المطار | Arriving at the airport | CDIO | Nusuk ID, Nusuk Pass | Support Center, Family and Friends | Nusuk Maps | T1 | Caregivers need a party-status view; Dependents need to know who to follow. |
| 3.6 | انهاء إجراءات السفر | Travel formalities | CDIO | Nusuk Pass, Nusuk ID | Support Center | — | T1 | Where assistance requested at 2.7 either activates or visibly fails. |
| 3.7 | الإنتظار والصعود إلى الطائرة | Waiting & boarding | CDIO | Prayer Times, Duaa | Quran, Content HUB | Qibla | T2 | First genuinely idle stretch — and the first real opening for the faith spine. |
| 3.8 | اثناء رحلة الطيران | In flight | CDIO | Quran, Athkar | Content HUB | — | T2 | Everything here must work offline or it does not work. |
| 3.9 | الوصول إلى جدة | Landing in Jeddah | CDIO | Sim & eSim, Nusuk ID | Support Center | Sim & eSim | T1 | The strongest handoff in the product: high need, time-bound, and unsearchable without connectivity. |
| 3.10 | انهاء إجراءات الجوازات | Immigration | CDIO | Nusuk ID | Support Center, Family and Friends | — | T1 | An L4 credential promoted to P1. Must render with no network. |
| 3.11 | تجميع الحقائب والأمتعة | Baggage reclaim | CDIO | Support Center | Unified Transportation | Nusuk Maps | T1 | Lost luggage at the start of a pilgrimage is a distress event, not an inconvenience. |
| **4** | **من المطار وإلى محل الإقامة في مكة** | **Airport to Makkah accommodation** | | | | | | |
| 4.1 | ترتيب الإنتقال إلى مكة | Arranging transfer to Makkah | CI | Unified Transportation, HHR | Car Rental, Support Center | Nusuk Maps | T1 | Self-arranged. Car Rental is an alternative, never a default. |
| 4.2 | التوجه لنقطة التجمع | Moving to the marshalling point | DO | Journey Group Features, Motawef | Support Center | Nusuk Maps, Way Finding | T1 | No booking control — the seat is already paid for. Offering one confuses. |
| 4.3 | بدء رحلة مكة | The Makkah leg begins | CDIO | Duaa | Content HUB | Nusuk Maps, Qibla | T2 | An emotional peak, not a conversion window. |
| 4.4 | الوصول إلى الفندق وإنزال الأمتعة | Hotel arrival | CDIO | Hotel Booking | City Guide, Halal Food, Support Center | Nusuk Maps | T2 | First commercial-eligible moment on the ground — and still too early. Six-hour buffer. |
| **5** | **إتمام مناسك العمرة** | **Completing the Umrah rites** | | | | | | |
| 5.1 | انهاء إجراءات الدخول | Entry formalities | CI | Nusuk ID, Hotel Booking | Support Center | — | T1 | The Caregiver needs a per-person status, not a single confirmation. |
| 5.2 | الإنتظار او المشاركة في الإجراءات | Waiting or assisting | D | Family and Friends | Content HUB, Athkar | — | T2 | A waiting state with an expected duration beats a spinner. Idle, calm, unmonetisable. |
| 5.3 | إنتظار التسكين | Waiting for room allocation | O | Motawef, Journey Group Features | Support Center, Content HUB | — | T1 | Uncertainty is the problem, not idleness. Surface the provider's allocation status. |
| 5.4 | تقرير بدء مناسك العمرة | Deciding when to begin | CI | Umrah Permits, Prayer Times | Content HUB | — | T1 | The suppression window opens here, not at the Miqat. |
| 5.5 | المشاركة في الرأي | Contributing an opinion | D | Family and Friends | Support Center | — | T2 | Capturing fatigue and mobility honestly here prevents a safety problem inside the Haram. |
| 5.6 | معرفة مواعيد وخطط التوجه الى الحرم | Learning the schedule | O | Motawef, Prayer Times | Journey Group Features, Content HUB | — | T1 | Pure following state. Departure time and meeting point; everything else is noise. |
| 5.7 | التوجه الى الحرم مع المرافقين | To the Haram with companions | C | Family and Friends, Golf Carts | Support Center | Way Finding, Nusuk Maps, Golf Carts | T1 | The one step where Golf Carts is a primary need. Route for the least mobile member. |
| 5.8 | التوجه الى الحرم | To the Haram | I | Way Finding | Support Center, Prayer Times | Way Finding, Nusuk Maps | T1 | CONSOLIDATION: Nusuk Maps and Way Finding overlap, and Nusuk Maps is duplicated in the catalogue. |
| 5.9 | التواجد في منطقة التجمع | At the assembly area | DO | Journey Group Features | Motawef, Support Center, Family and Friends | Nusuk Maps, Way Finding | T1 | The pilgrim does not need a route, they need their people. |
| 5.10 | الوصول الى الحرم وبدء المناسك | Arrival & start of rites | CDIO | Duaa | — | Way Finding, Golf Carts | T1 | Minimum surface. Tawaf counter and duaa. The screen should be nearly empty. |
| **6** | **فعاليات مكة** | **Makkah activities** | | | | | | |
| 6.1 | الإنتهاء من المناسك وترتيب الفعاليات التالية | Rites complete, what next | CDIO | Certificate (digital), Celebration Cards | City Guide, Museum Tickets, Marketplace, Zamzam | Tahalol - Haircut, Nusuk Maps | T2 | ETHICAL FLAG: the printable-certificate upsell needs a session of separation, not a card. |

### J2 · رحلة العمرة — المحلية · Umrah · domestic (11 steps)

Residents inside the Kingdom. No visa, no flight — the permit is the whole journey.

| Step | الخطوة | Step | Seg. | P1 | P2 | P4 | Tier | Note |
|---|---|---|---|---|---|---|---|---|
| **L1** | **النية والتخطيط** | **Intent & planning** | | | | | | |
| L1.1 | اتخاذ قرار العمرة | Deciding to perform Umrah | CDIO | Umrah Permits, Islamic Calendars | Content HUB, Prayer Times | — | T2 | Repeat behaviour, not a once-in-a-lifetime decision. Frame as a habit, not a purchase. |
| L1.2 | حجز تصريح العمرة | Booking the permit | CI | Umrah Permits | Support Center, Nusuk AI | — | T1 | REAL SCARCITY: slot availability is genuinely constrained, so urgency framing is truthful. |
| L1.3 | المشاركة في اختيار الموعد | Contributing to the timing | D | Family and Friends | Umrah Permits, Islamic Calendars | — | T2 | The Dependent's constraints set the window; they do not book it. |
| **L2** | **الترتيب** | **Arrangement** | | | | | | |
| L2.1 | ترتيب الإقامة | Arranging a stay | CI | Hotel Booking | Marketplace, City Guide | — | T2 | Often skipped entirely — a domestic pilgrim may do Umrah and return the same day. |
| L2.2 | ترتيب الانتقال | Arranging transport | CDIO | Unified Transportation, HHR | Car Rental, Support Center | Nusuk Maps | T1 | HHR is the dominant mode for domestic pilgrims. SAR dependency is felt as a Nusuk dependency. |
| L2.3 | التنسيق مع المجموعة | Group coordination | O | Journey Group Features | Motawef, Family and Friends | — | T2 | Domestic campaigns and delegations — smaller and less formal than the international equivalent. |
| **L3** | **الأداء** | **Performance** | | | | | | |
| L3.1 | التوجه إلى مكة | Travelling to Makkah | CDIO | Unified Transportation | Prayer Times, Duaa | Nusuk Maps | T1 | Short leg, high frequency. Repeat pilgrims need less guidance and more state. |
| L3.2 | الوصول إلى الحرم | Arriving at the Haram | CDIO | Prayer Times | Support Center | Way Finding, Nusuk Maps, Golf Carts | T1 | Crowd state carries most of the value for a repeat pilgrim who knows the way. |
| L3.3 | أداء المناسك | Performing the rites | CDIO | Duaa | — | Way Finding, Golf Carts | T1 | Minimum surface. Identical to the international rite step. |
| L3.4 | التحلل | Tahalol | CDIO | — | Marketplace | Tahalol - Haircut | T1 | Positional, triggered by rite state. Worthless anywhere else in the app. |
| **L4** | **بعد الأداء** | **After** | | | | | | |
| L4.1 | الشهادة والعودة | Certificate & return | CDIO | Certificate (digital) | Celebration Cards, Zamzam, Unified Transportation | — | T2 | For a domestic pilgrim this loops straight back to the daily-practice spine. That handoff is the retention moment. |

### J3 · رحلة المدينة · Madinah · Ziyarah (10 steps)

Attaches to Umrah or Hajj, or stands alone. Rawdah is its centre of gravity.

| Step | الخطوة | Step | Seg. | P1 | P2 | P4 | Tier | Note |
|---|---|---|---|---|---|---|---|---|
| **M1** | **التخطيط** | **Planning** | | | | | | |
| M1.1 | قرار الزيارة | Deciding to visit | CDIO | Content HUB | City Guide, Live Streams | — | T2 | Desire-led. مدينة رسول الله and معالم من السيرة are the emotional anchors here. |
| M1.2 | حجز تصريح الروضة | Booking the Rawdah permit | CI | Rawdah Permits | Support Center, Content HUB | — | T1 | GENUINE SCARCITY, GENUINE PUSH: slot release is unpredictable and the window is real. The clearest legitimate T1 in the catalogue. |
| M1.3 | ترتيب السفر إلى المدينة | Arranging travel | CDIO | HHR | Flight Booking, Unified Transportation, Hotel Booking | — | T1 | SAR dependency. Route vendor failures to Support, not the vendor. |
| **M2** | **الوصول** | **Arrival** | | | | | | |
| M2.1 | الوصول إلى المدينة | Arriving in Madinah | CDIO | Hotel Booking | City Guide, Halal Food, Support Center | Nusuk Maps | T2 | Calmer arrival than Makkah. A rare moment where exploration content is genuinely welcome. |
| M2.2 | الوصول إلى المسجد النبوي | Reaching the Prophet's Mosque | CDIO | Prayer Times | Duaa, Support Center | Way Finding, Nusuk Maps, Golf Carts | T1 | Gate-level wayfinding. Entrances are numbered and the permit is gate-specific. |
| **M3** | **الزيارة** | **The visit** | | | | | | |
| M3.1 | زيارة الروضة | Visiting the Rawdah | CDIO | Rawdah Permits | — | Way Finding | T1 | OFFLINE CRITICAL: the permit QR must render with no network. An L4 artefact that becomes the entire screen. |
| M3.2 | الصلاة في المسجد النبوي | Praying in the mosque | CDIO | Prayer Times, Duaa | Quran, Athkar | Qibla | T0 | Multi-day rhythm. This is where the daily spine and the journey overlap most completely. |
| **M4** | **المعالم والمغادرة** | **Sites & departure** | | | | | | |
| M4.1 | زيارة المعالم التاريخية | Visiting historic sites | CDIO | — | City Guide, Museum Tickets, Tourism Programs, Tour Guide | Nusuk Maps | T2 | One of only two steps in the entire atlas where commerce legitimately reaches P2. |
| M4.2 | التسوق والهدايا | Shopping & gifts | CDIO | — | Marketplace, Zamzam, Halal Food | — | T3 | Commercial-eligible. Still capped, still suppressed during prayer windows. |
| M4.3 | المغادرة | Departure | CDIO | Unified Transportation | HHR, Zamzam, Support Center | — | T1 | Zamzam is a departure artefact, not a browse item. Placement by moment converts it from clutter to service. |

### J4 · فعاليات مكة · Makkah activities (5 steps)

Post-rites. The only sustained window where the pilgrim has time and no obligation.

| Step | الخطوة | Step | Seg. | P1 | P2 | P4 | Tier | Note |
|---|---|---|---|---|---|---|---|---|
| **K1** | **بعد المناسك** | **After the rites** | | | | | | |
| K1.1 | الاستراحة والتعافي | Rest & recovery | CDIO | Hotel Booking | Halal Food, Support Center | — | T2 | Caregivers are managing recovery for a tired party before anything else. Suppress commerce here. |
| K1.2 | مكة خارج الحرم | Makkah beyond the Haram | CDIO | — | City Guide, Museum Tickets | Nusuk Maps | T2 | The second step where commerce reaches P2 — and only after rest. |
| K1.3 | الفعاليات والتجارب | Experiences & activities | I | — | Tourism Programs, Tour Guide, Massage | — | T3 | Independents are the only mindset genuinely open to this. Organised groups follow a provider itinerary — do not compete with it. |
| K1.4 | التسوق والزمزم | Shopping & Zamzam | CDIO | — | Marketplace, Zamzam, Discounts & Offers | — | T3 | The T3 slot is legitimate here. Hard weekly cap still applies. |
| K1.5 | تقييم مقدمي الخدمة | Rating providers | CDIO | Services Providers Rating | Support Center | — | T2 | Fire after a stable outcome, never during transit fatigue. Enforced as a step condition. |

### J5 · رحلة الحج — المحلية · Hajj · local (6 steps)

Saudi residents. Season-gated: invisible off-season, owns Today in-window.

| Step | الخطوة | Step | Seg. | P1 | P2 | P4 | Tier | Note |
|---|---|---|---|---|---|---|---|---|
| **H1** | **التسجيل** | **Registration** | | | | | | |
| H1.1 | فتح باب التسجيل | Registration opens | CDIO | Local Hajj Flow | Unified Hajj, Support Center, Content HUB | — | T1 | SEASONAL TAKEOVER. This is how a low-frequency service earns P1 without occupying it year-round. |
| H1.2 | اختيار الباقة والقرعة | Package selection & lottery | CDIO | Local Hajj Flow | Support Center | — | T1 | An unresolved lottery is an anxiety state. One clear status card outperforms repeated pushes. |
| H1.3 | الدفع | Payment | CI | Wallet | Support Center | — | T1 | Highest consequence, zero competing elements. Failure routes to support in one tap. |
| **H2** | **التحضير** | **Preparation** | | | | | | |
| H2.1 | الانتظار والتحضير | Waiting & preparing | CDIO | Habit Builder, Content HUB | Journey Group Features, Quran | — | T2 | A months-long step. The daily-practice spine carries it, or commerce fills it and costs trust. |
| H2.2 | استلام تصريح الحج | Receiving the Hajj permit | CDIO | Hajj ID | Nusuk Pass, Support Center | — | T1 | CONSOLIDATION: Hajj ID and Nusuk ID are two credentials doing one job. |
| H2.3 | التوجه إلى مكة | Departing for Makkah | CDIO | Journey Group Features, Motawef | Unified Transportation, Support Center | Nusuk Maps | T1 | Group-led. Render state, not controls the leader owns. |

### J6 · رحلة الحج — الدولية · Hajj · international (5 steps)

Via Nusuk Hajj. The highest-consequence transaction in the catalogue.

| Step | الخطوة | Step | Seg. | P1 | P2 | P4 | Tier | Note |
|---|---|---|---|---|---|---|---|---|
| **I1** | **التقديم** | **Application** | | | | | | |
| I1.1 | الأهلية ومسار الدولة | Eligibility & country route | CDIO | International Hajj Direct | Unified Hajj, Support Center, Content HUB | — | T1 | Irreversible, expensive, once in a lifetime, cross-border. Every clarity metric applies at its strictest. |
| I1.2 | الباقة والدفع | Package & payment | CIO | International Hajj Direct, Wallet | Support Center | — | T1 | Multi-language, multi-currency, high anxiety. A search failure here is a lost Hajj. |
| I1.3 | التأشيرة وترتيب الوصول | Visa & arrival planning | CDIO | Nusuk Pass, Flight Booking | Support Center, Content HUB | — | T1 | A dependency chain across three parties. Surface the chain state, not the individual vendors. |
| **I2** | **الوصول** | **Arrival** | | | | | | |
| I2.1 | الوصول إلى المملكة | Arriving in the Kingdom | CDIO | Sim & eSim, Hajj ID | Motawef, Unified Transportation, Support Center | Sim & eSim | T1 | Identical to the Umrah arrival, with the group layer added. |
| I2.2 | الإجراءات والتسكين | Formalities & accommodation | DO | Motawef, Journey Group Features | Hotel Booking, Support Center | Nusuk Maps | T1 | The provider owns everything here. Uncertainty, not idleness, is the problem to solve. |

### J7 · مناسك الحج · Hajj rites (9 steps)

Shared by both Hajj journeys. The longest suppression window in the product — roughly five days.

| Step | الخطوة | Step | Seg. | P1 | P2 | P4 | Tier | Note |
|---|---|---|---|---|---|---|---|---|
| **R1** | **الإحرام والمناسك** | **Ihram & the rites** | | | | | | |
| R1.1 | الإحرام · ٨ ذو الحجة | Ihram · 8 Dhul-Hijjah | CDIO | Duaa | Content HUB | Nusuk Maps | T1 | STATE GATE. All commercial suppressed from here until Tahalol — about five continuous days. |
| R1.2 | منى | Mina | CDIO | Journey Group Features | Support Center, Motawef | Way Finding, Golf Carts | T1 | Extreme density, degraded connectivity. Camp location and group state are safety information. |
| R1.3 | عرفة | Arafah | CDIO | Duaa | — | Way Finding | T0 | MAXIMUM RESTRAINT. The correct design here is almost no interface. Safety only. |
| R1.4 | مزدلفة | Muzdalifah | CDIO | Duaa | Support Center | Way Finding | T0 | Night, open ground, no infrastructure. Offline-first is not optional. |
| R1.5 | رمي الجمرات | Jamarat | CDIO | — | Support Center | Way Finding, Golf Carts | T0 | Timing and crowd guidance is a safety function — the second legitimate T0 use in the product. |
| R1.6 | الهدي | Sacrifice · Hady | CDIO | Sacrifices | Marketplace | — | T1 | A transaction inside a rite. Show confirmation state, not a storefront. |
| R1.7 | التحلل وطواف الإفاضة | Tahalol & Tawaf al-Ifadah | CDIO | — | Marketplace | Tahalol - Haircut | T1 | SUPPRESSION RELEASE POINT. Ramp, do not flood. |
| R1.8 | أيام التشريق | Days of Tashreeq | CDIO | Prayer Times | Halal Food, Quran | Way Finding | T1 | PARTIAL RELEASE: Halal Food becomes legitimate; Marketplace browse does not. Suppression is graded. |
| R1.9 | طواف الوداع | Farewell Tawaf | CDIO | Duaa | Zamzam, Unified Transportation | Way Finding | T1 | Rite first, logistics after completion. Never side by side. |
