# Designing — the Digital Experience Guide

The DX team's operating system. Read this when shaping something not yet built.

> **A design isn't finished when the model is.** Once the pattern, the metric and the risk are
> named, the flow still needs its strings (`writing.md`) and a pre-ship pass against the
> heuristics and the seven quality gates (`evaluating.md`). Handing over a conceptual model alone
> is half a deliverable.
>
> **If you arrived here from a copy or review request** — a proposed streak, countdown, or
> leaderboard, or a screen whose real defect is its model — start at `ethics.md` or the diagnostic
> router below, not at the top.

> **We're targeting 200M downloads that translate into 200M engaged users — not installs.** That
> scale requires more than a platform; it requires a repeatable growth and habit engine that
> delivers value fast, repeats reliably, preserves trust, and monetises without damaging the
> mission.

Nusuk builds for two forces: **fulfilling intention** (Hajj, Umrah, permits, bookings — goal-driven)
and **enlightening desire** (daily habits, Quran, prayer, thikr, charity — identity-driven). Every
design decision must distinguish between them and build the appropriate behavioural model.

This is not a consumer app. It is a **trust instrument**.

---

## The three principles

Every deliverable satisfies all three.

**Intuitive** — an interface where users feel confident in their decisions and never feel lost.
Sufficient information to guide the next step, on a clean and minimal surface. Conceptual model
and interface both built on universal best practices, without needless repetition.

**Engaging** — higher adoption and engagement translate into revenue and satisfaction. Every
element must engage: **actionable** engagement (a positive user action) or **informative**
engagement (awareness, education). **A passive screen is a failure.**

**Intelligent** — leverage data, AI, and available user context to adapt the interface
dynamically: better service, better navigation, less cognitive overload. In the AI era the
platform should act proactively and the user should intervene less, not more.

---

## The 3Ms

> Simplification is the ultimate sophistication.

**Monitor** → **Map** → **Measure**.

**Monitor** — two entry points: **Demand** (business requirements from stakeholders) or
**Research** (internal insight, initiative, heuristic findings). Before any design work, confirm
which source is driving the task and what evidence supports it.

**Map** — map the experience and build a conceptual model that fulfils the experience strategy.
This is where intent vs desire and the behavioural patterns are applied. **No wireframe or
prototype starts without a mapped conceptual model.**

**Measure** — define success criteria upfront. Every feature carries metrics from the KPI
framework, and measurement criteria are locked before an interactive prototype is handed to
development.

---

## Workflow

1. **Name the entry point.** Demand or Research? What evidence supports it?
2. **Classify the behaviour.** Intent or desire? See `references/intent-and-desire.md` — the UX
   architecture differs fundamentally, and building on the wrong model fails in ways no
   individual fix repairs.
3. **Select the pattern(s).** From `references/behavioural-patterns.md`. Document five things
   for each: **Why** (mechanism), **What** (behaviour), **How** (method/nudge), **Where** (the
   Nusuk implementation), **Validate** (metrics + risks).
4. **Map the conceptual model** before any interface work.
5. **Choose the metrics** from `references/metrics.md`. Which pillar, which threshold?
6. **Run the quality gates** below.

If you're diagnosing rather than designing, start at the router.

---

## When to read which reference

| Reading | When |
|---|---|
| `intent-and-desire.md` | **Before any conceptual model** — the five-layer typology, the motivational realms, and what each implies for architecture |
| `behavioural-patterns.md` | Choosing or diagnosing with the nine Nusuk patterns; each carries its mechanism, methods, implementations, metrics and named risk |
| `methods-library.md` | The full behavioural-economics toolkit and the Hook Model, each with Nusuk's ruling on it |
| `ethics.md` | **Whenever a nudge, incentive, streak, reminder, or urgency mechanic is proposed** — the persuasion limits and the four-question standing test |
| `metrics.md` | Choosing what to measure: North Star, active-user definition, cohorts, the four pillars, operational quality |
| `craft-and-research.md` | Making an interface intuitive (eight steps, affordances) and choosing a research method |

---

## The diagnostic router

The piece most teams forget. Symptom → where to look first:

| Symptom | Check |
|---|---|
| Adoption is low | Attention and cognitive load. Simplify, reduce steps |
| Intention exists but follow-through fails | Present bias. Apply nudges, if–then prompts, commitment devices |
| Users stop because they're unsure | Feedback loops and reassurance |
| Backlash or distrust | Framing and autonomy signals |
| Growth depends on community | Social norms and proof mechanisms |

> We're not after a beautiful theory library that doesn't drive decisions.

---

## The seven quality gates

No deliverable ships without clearing all seven.

1. **Principle check** — Intuitive + Engaging + Intelligent?
2. **Behavioural model** — is intent vs desire clear, and the relevant pattern documented?
3. **Metric alignment** — which KPI pillar, and what is the success threshold?
4. **Accessibility** — has a WCAG 2.1 AA review been performed?
5. **Brand compliance** — aligned with the brand guidelines?
6. **Research grounding** — supported by research evidence?
7. **Handoff readiness** — specs, tokens, states, edge cases, responsive behaviour documented?

---

## Ethical limits — hard

The guide licenses behavioural design and then fences it. These are not preferences; every one of
them is stated as a rule or a named risk in the pattern pages, and the reason is always the same:
**Nusuk operates on worship, at scale, with government authority behind it.** A mechanic that
would merely be cynical elsewhere is corrosive here.

- **Scarcity only for operational truth** — capacity, scheduling constraints. **Never use scarcity
  to emotionally pressure a spiritual decision.**
- **No decoys.** Never manipulate a choice by making one option look stupid. Named and banned
  outright.
- **No fear framing or FOMO.** It raises action short-term and damages trust long-term.
  "Don't miss reward" is explicitly flagged as risky.
- **No streak shame or competitive progress.** Celebrate *returning* more than streaks.
- **No moral scoring.** No ranks implying moral superiority; never turn "better Muslim" into a
  leaderboard.
- **No performative religiosity.** No "trending worship", no popularity vanity.
- **No commitment that feels like obligation to the app.** Soft commitments — "set a gentle
  reminder", not "pledge".
- **Autonomy is preserved.** Defaults are starting points and must be editable.
- **Social proof only if true and privacy-safe.**

When a proposal trips one of these, don't just refuse it — name the pattern it's reaching for and
offer the version that stays inside the line. Most manipulative mechanics have an honest
counterpart that works nearly as well and doesn't cost the mission.

---

## The other lanes

- **Evaluating an existing screen or flow** → `evaluating.md` (Nielsen + Rams, S0–S4/E0–E4).
  This file supplies the principles, the router, and the gates that evaluation checks against.
- **Wording, terminology, tone, Arabic** → `writing.md`.

A design rationale that names the pattern, the metric, and the risk is the deliverable this job
produces. Don't hand over a layout without one — the guide's whole argument is that the
conceptual model comes first.

---

## A note on sources

The principles, 3Ms, intent/desire model, pattern library, methods library, Hook Model, Evil by
Design taxonomy, intuitive-design steps, research practices, router, KPI framework, and quality
gates are all reproduced faithfully from the guide.

**Two layers, and the order matters.** `methods-library.md` and the Evil by Design taxonomy in
`ethics.md` are *source material* — general practice catalogued so the team can recognise a
technique when they see it. The nine Nusuk pattern pages and the ethical limits are the
*governing* layer. Where they conflict — and they conflict on decoys, FOMO, leaderboards, streaks,
variable reward, and scarcity — **the Nusuk rule wins.** Each method in the library carries its
Nusuk ruling inline so the two are never read apart.

The workspace's **Intelligent Experiences** page is exploratory research — surveys of Google PAIR,
Microsoft HAX, IBM, and others, captured as raw notes rather than adopted standards. It is **not**
encoded here. If the team settles a position on intelligent-experience frameworks, that
belongs here as a reference; until then, treat the Intelligent principle as defined above and
nothing further.
