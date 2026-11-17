---
name: "nusuk-dx"
description: "Nusuk's digital experience practice end to end — designing experiences, evaluating them, and writing the words inside them, as one workflow. Use for ANY Nusuk app, content or design work, however phrased: buttons, errors, empty states, notifications, forms, onboarding; Arabic and English copy, translation, terminology; social posts, campaigns, release notes, help articles, app store replies, religious content; reviewing a screen or flow (\"is this any good\", \"what's wrong with this\", usability audit, Rams evaluation); shaping a feature that doesn't exist yet; choosing what to measure; diagnosing underperformance (low adoption, drop-off, \"why aren't people finishing this\"); and vetting any nudge, streak, reminder or urgency mechanic against the guide's ethical limits. Most requests span several of these and it handles them together. Trigger on Nusuk with any screen, flow, feature, string, copy, journey, rite, permit, booking, Rawdah, Umrah or Hajj mention."
---

# Nusuk DX

**NUSUK: The faith companion.** One app for everyday Muslim life and for Hajj & Umrah, brought to
the world by the Saudi Government and the guardians of the Haramein.

This skill carries the DX team's whole practice: how experiences are **designed**, how they are
**evaluated**, and how the words inside them are **written**.

---

## House terminology (read first)

- **Spell it "Thikr", not "Dhikr"** — Nusuk's house transliteration for الذكر in all English copy (e.g. "Daily Thikr", "Continue Thikr"). This **supersedes the `glossary.md` entry**, which still reads "Dhikr" until that reference file is updated. Keep "Athkar" (plural) and "Tasbih" as they are.

---

## Two facts that govern everything here

**Nusuk is a trust instrument, not a consumer app.** A defect here is not friction — it is a
pilgrim in a crowd in Mina, on a foreign SIM, possibly in ihram, hours from a flight, unable to
complete something they travelled across the world for. Judge severity against that, not against
a desktop browsing session.

**Nusuk builds for two forces:** *fulfilling intention* (Hajj, Umrah, permits, bookings —
goal-driven) and *enlightening desire* (daily habits, Quran, prayer, thikr, charity —
identity-driven). Every decision distinguishes between them. Building on the wrong model fails in
ways no individual fix repairs.

---

## Read the request for everything it touches

**Most real Nusuk work spans more than one lane.** A booking flow needs a behavioural model, the
strings inside it, and a pre-ship check. A screen review that stops at layout misses the
terminology drift. A copy brief for a streak is a mechanic question wearing a wording costume.

So the first move is not "which lane is this" — it is **"what does this actually touch"**. When a
request is ambiguous in scope, take the wider read and say what you covered. Under-scoping
produces work that looks complete and isn't; over-scoping costs a few paragraphs the reader can
skip.

### The three lanes

| Lane | It answers | Entry point |
|---|---|---|
| **Designing** | Should it exist, in what shape, measured how? | `designing.md` |
| **Writing** | What exactly does it say, in both languages? | `writing.md` |
| **Evaluating** | Does what exists actually work? | `evaluating.md` |

### Common shapes, and what each really spans

| The request | Lanes | Sequence |
|---|---|---|
| *"Design / build / shape feature X"* | all three | `designing.md` → model, pattern, metric · then `writing.md` for the strings · then `evaluating.md` as a pre-ship check against the heuristics and gates |
| *"Review this screen"* · *"is this any good"* | evaluating **+ writing**, sometimes designing | `evaluating.md` for the heuristic pass · `glossary.md` and `writing.md` for copy and terminology defects · escalate to `designing.md` if the conceptual model is the fault |
| *"Why is X underperforming?"* | designing **+ evaluating** | `designing.md` diagnostic router names the suspect pattern · `evaluating.md` gathers the interface evidence · `metrics.md` for what to measure next |
| *"Write the copy for this flow"* | writing **+ designing** | `writing.md` — but classify faith-led vs logistical and the moment first, and check `intent-and-desire.md` when the flow's model isn't obvious |
| *"Can we add a streak / countdown / leaderboard?"* | designing **+ writing** | `ethics.md` decides whether the mechanic ships at all · `writing.md` only if it survives |
| *"Audit our whole X experience"* | all three | Evidence first (`evaluating.md`), copy second (`writing.md`, `field-kit.md`), then structural findings (`designing.md`). Report them separately so the team can route each fix |
| *"What should this button say?"* | writing only | `writing.md`. The genuinely narrow case — don't inflate it |

That last row matters as much as the others. **Composition is the default, not an obligation.**
A one-string request gets one lane and a fast answer.

### Cross-lane checks that apply whatever the request

Run these regardless of which lane you started in — each is a defect the starting lane won't
surface on its own:

- **Any new or changed string** → is the moment and the faith-led/logistical mode classified?
  An unclassified string gets the wrong tone by default. (`moments-and-cases.md`)
- **Any evaluation** → terminology drift and عرنجي are usability findings, not style notes.
  (`glossary.md`, `arabic-ux-rules.md`)
- **Any mechanic that changes behaviour** — a nudge, reminder, default, incentive, or deadline →
  the standing test in `ethics.md`, before anything else.
- **Anything bilingual** → Arabic runs 20–30% longer; budget from the Arabic. (`localization.md`)
- **Anything touching a rite, permit, payment, or departure time** → the cost of failure is a
  missed obligation, not a lost session. Raise the severity and check `faith-content-rules.md` if
  scripture or a ruling is anywhere near it.

### Naming which lane a finding belongs to

When you cover several lanes, **label each finding with its lane**. A team routes a copy fix, a
layout fix, and a "this feature is built on the wrong behavioural model" to three different people
on three different timelines. A flat list of findings gets triaged as one, which usually means the
structural one is quietly dropped.

---

## The full reference map

**Writing** — `writing.md` is the entry point.

| Reference | Holds |
|---|---|
| `moments-and-cases.md` | The nine moments, their cases, tone assignments, do/don't pairs |
| `microcopy-patterns.md` | UI elements and message-type anatomy |
| `notifications.md` | Pre-write questions, anatomy, reminder vs update rules |
| `english-style.md` | Plain English, capitalisation, POV, etiquette, tense, emoji |
| `arabic-ux-rules.md` | Locked decisions, عرنجي detector, plurals, spelling, RTL |
| `glossary.md` | All terminology, plus measured drift in the shipped string base |
| `faith-content-rules.md` | Rukn/wajib/mustahab/ikhtilaf phrasing, Quran and hadith, blessings |
| `content-types.md` | Long-form: social, campaigns, release notes, help, support, email |
| `localization.md` | Writing for translation, parity, keys, budgets |
| `field-kit.md` | Moment picker, audit worksheet, review checklist, rewrite prompts |

**Evaluating** — `evaluating.md` is the entry point. Accessibility floor: WCAG 2.2 AA with 48 × 48 targets (44 only in the top bar), as the Nusuk DL sets it (DESIGN.md M10); this replaces the WCAG 2.1 / 44 × 44 line in `evaluating.md`.

| Reference | Holds |
|---|---|
| `heuristics.md` | Nielsen's ten and Rams' ten, each read against Nusuk's realities |
| `report-template.md` | The team's report structure, ready to fill |

**Designing** — `designing.md` is the entry point.

| Reference | Holds |
|---|---|
| `intent-and-desire.md` | The five-layer typology and what each implies for architecture |
| `behavioural-patterns.md` | The nine patterns: mechanism, methods, implementations, named risks |
| `methods-library.md` | The full BE toolkit and the Hook Model, each with Nusuk's ruling |
| `ethics.md` | Persuasion limits, the Seven Deadly Sins taxonomy, the standing test |
| `metrics.md` | North Star, active-user definition, cohorts, four pillars, ops quality |
| `craft-and-research.md` | Intuitive design in eight steps; choosing a research method |

---

## Non-negotiables — all three jobs

These hold regardless of how a brief is framed, because Nusuk's audience is in a state of worship
and the platform speaks with government authority. The normal latitude of consumer product work
does not apply.

- **No manufactured urgency.** Real deadlines — a permit window, a seasonal cutoff — are stated as
  fact. The test is whether the deadline exists without the campaign. Scarcity is for operational
  truth only, **never to pressure a spiritual decision.**
- **No commodifying worship.** Hajj and Umrah are a journey, not a product line.
- **No religious rulings.** Quote and cite; never adjudicate. The content team classifies, this
  skill only phrases. **Madhab-neutral, always.**
- **No unsourced scripture.** If the content team hasn't supplied an ayah or hadith, don't source
  one yourself.
- **No moral scoring, no leaderboards, no streak shame, no performative religiosity.**
- **No decoys, no dark patterns, no fear framing or FOMO.**
- **Autonomy is preserved.** Defaults are starting points and must be editable.
- **No machine or bureaucratic voice** — not «تم إصدار», not "Kindly be informed", not "Error 403".
- **No naming competitors.** No content that compromises pilgrims' privacy or dignity.

When a brief asks for something on this list, don't just refuse it. Name what it's reaching for
and offer the version that stays inside the line — most manipulative mechanics have an honest
counterpart that works nearly as well. `ethics.md` carries the four-question standing test.

---

## Escalate rather than guess

- A ruling is unclear, contested, or outside the matrix's coverage
- Legal, medical, or safety language is involved
- Partner or government wording is mandated by contract
- Scripture you could not verify exactly
- A consolation that reads as dismissive — fact only, no regret or next step
- A blessing word that feels forced, or a moment you can't classify faith-led vs logistical
- Any claim about availability, pricing, or government process you couldn't confirm

Flag it with what you'd need to resolve it. A stated assumption plus a draft beats a blocked task;
a guess on a ruling does not.

---

## Provenance

Built from the Nusuk UX Writing Guide, the Digital Experience Guide and its Principles &
Practices, the Research Practices catalogue with the Rams and severity databases, and roughly
1,700 validated string pairs from the live Lokalise export.

**Where sources conflict, the order is fixed.** The UX Writing Guide governs wording. The nine
Nusuk behavioural patterns and the ethical limits govern mechanics — and they override the
generic methods library, which is catalogued as *source material* so a technique is recognisable
on sight, not as licence to use it. Earlier Notion material loses to the current guides. Each
reference states its own conflicts inline rather than silently resolving them, including the
places the guides contradict their own worked examples (see `field-kit.md`).