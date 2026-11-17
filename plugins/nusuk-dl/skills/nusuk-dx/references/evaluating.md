# Evaluating — heuristic evaluation

Read this to review an existing screen or flow. The expert review the DX team performs **first**, before user interviews, shadowing, or testing.
It is cheap, it is fast, and it catches the class of problem that user research would spend weeks
rediscovering.

> **An evaluation is never only about layout.** Run the copy pass alongside the heuristic pass:
> terminology drift, عرنجي, and unclassified tone are usability findings, not style notes
> (`glossary.md`, `arabic-ux-rules.md`). And when the defect turns out to be the conceptual model
> rather than the interface, stop rating screens and go to `designing.md` — no number of S2s adds
> up to "this is built on the wrong behavioural model".

Nusuk is a **trust instrument**, not a consumer app. A usability defect here is not friction —
it is a pilgrim in a crowd in Mina, on a foreign SIM, possibly in ihram, hours from a flight,
unable to complete something they travelled across the world for. Rate severity against that
reality, not against a desktop browsing session.

---

## What you need before starting

Ask only for what is genuinely missing — infer the rest:

1. **The artefact** — Figma frame, screenshot, flow description, or live build.
2. **What it is and who it's for** — which journey, which user segment.
3. **The stage** — exploration, refinement, or final. This changes what's worth reporting:
   at exploration, structural findings only; at final, everything down to E0 polish.

If the user gives you a screen with no context, evaluate it and state the assumptions you made.
A useful evaluation under stated assumptions beats a blocked one.

---

## The two lenses

Run **both**. They catch different things, and the DX guide names both.

**Nielsen's ten usability heuristics** — does the interface work?
**Rams' ten Good Design principles** — should it exist in this form at all?

Nielsen catches the broken. Rams catches the unnecessary, the dishonest, and the overbuilt —
which at Nusuk matters more than usual, because the platform speaks with government authority
and a screen that overpromises damages more than a conversion rate.

Full definitions, and what each one means specifically at Nusuk, are in
`references/heuristics.md`. Read it before evaluating.

Layer the three DX principles over both: **Intuitive** (the user is never lost, no redundancy),
**Engaging** (every element drives actionable or informative engagement — a passive screen is a
failure), **Intelligent** (the platform uses context to reduce cognitive load; in the AI era the
user should intervene less, not more).

---

## Severity — S0 to S4

Rate every finding. These are the team's definitions; use them verbatim.

| | Meaning |
|---|---|
| **S0** | Violates a heuristic but doesn't seem to be a usability problem. |
| **S1** | Superficial. Easily overcome, or occurs extremely infrequently. Doesn't need fixing for the next release unless extra time is available. |
| **S2** | Minor. May occur more frequently or be more difficult to overcome. Low priority for the next release. |
| **S3** | Major. Occurs frequently and persistently, or users may be unable or unaware of how to fix it. Important to fix — high priority. |
| **S4** | Usability catastrophe. Seriously impairs use and cannot be overcome by users. **Imperative to fix before release.** |

**Rate honestly.** Inflating everything to S3 makes the report unusable, and an S4 that is
actually an S2 costs you the next one. Reserve S4 for "the pilgrim cannot complete this at all".

Anything touching a **rite, a permit, a payment, or a departure time** carries a floor of S3 when
it blocks completion — the cost is not a lost session, it is a missed obligation.

## Ease to fix — E0 to E4

| | Meaning |
|---|---|
| **E0** | Trivially easy to implement. |
| **E1** | Easily completed by a single developer with minor effort. |
| **E2** | Requires a more concentrated effort, but the issue and solution are understood. |
| **E3** | Requires considerable effort, but the issue and solution are understood. |
| **E4** | Maximum effort, including more investigation into the proper solution. |

**S×E is where the report earns its keep.** S3/E0 findings ship this week. S4/E4 findings start a
project. Sort by severity, but always surface the high-severity/low-effort cluster explicitly —
that list is the reason anyone reads a heuristic evaluation.

---

## The protocol

### 1. Gather observations
Walk the artefact heuristic by heuristic. For each issue: the heuristic violated, where it
occurs, why it's a problem, the severity, the ease to fix. Note the location precisely — the same
problem in three places is one issue with a frequency of three, not three issues.

### 2. Identify strengths first
Before the problems. **Identify what already works, so it doesn't get lost in a redesign** — this
is an explicit instruction in the team's template and the step most often skipped. A redesign that
fixes six problems and destroys two strengths is a net loss.

### 3. Group and count
Consolidate duplicates. Record frequency. Group by heuristic.

### 4. Prioritise
Sort by severity, then by ease to fix within a severity band. The template also uses a coarse
points scale for this pass — 🟣 critical = 3, 🔴 major = 2, 🟡 minor = 1, 🟢 none = 0 — which maps
onto S4/S3, S3/S2, S1, S0. Use S0–S4 as the record and the points scale only if the team asks for
the tallied view.

### 5. Identify patterns
Look for recurring themes. Many issues around navigation means the navigation model is wrong, not
that six labels need editing. **Patterns are the finding; individual issues are the evidence.**
A report that lists thirty issues and no patterns has done half the work.

When a pattern emerges, run it through the DX diagnostic router:

- Adoption low → attention and cognitive load
- Intention exists but follow-through fails → present bias, if–then prompts
- Users stop because they're unsure → feedback loops and reassurance
- Backlash or distrust → framing and autonomy signals
- Growth depends on community → social norms and proof

### 6. Recommend
Every recommendation names **the change** and **the outcome it produces**.

Actionable and specific: *"Provide clearer error messages that guide the user on how to rectify
the mistake"* — not *"Improve error messages"*. If you cannot name the change concretely enough
for a designer to open Figma and make it, you have written an observation, not a recommendation.

---

## Output

Use the team's report structure — `references/report-template.md` has the tables ready to fill.

```
## Summary
[2–4 sentences: what was evaluated, the headline finding, the single most important action]

## 1. Usability strengths
| Strength | Reasoning |

## 2. Usability problems
| UX problem | Location | Principle violated | Severity | Ease | Recommendation |

## 3. Patterns
| Pattern | Evidence (which issues) | What it implies |

## 4. Prioritised actions
| # | Change | Outcome | Severity | Ease |

## 5. Best practices worth adopting
| Best practice | Source | Solves | Why it works |
```

Lead the prioritised actions with the high-severity/low-effort cluster.

**Where a finding is about the behavioural model rather than the interface** — the wrong pattern
applied, a nudge that crosses an ethical limit, a screen built on intent architecture for a
desire-driven behaviour — report it and switch to the designing job (`designing.md`). That side
owns the patterns, the router, and the persuasion limits; this one checks whether the result works.

**Where the evaluation touches copy** — wording, terminology, tone, Arabic phrasing — report the
finding here and hand the rewrite to the writing job (`writing.md`). Don't rewrite strings inside a
heuristic evaluation; name the defect and its severity, and let the content skill do the writing
against the glossary and the tone matrix.

---

## Nusuk-specific things to check every time

These are where this product breaks in ways a generic heuristic evaluation would miss:

- **Bilingual and RTL.** Does the layout mirror correctly? Does any instruction depend on
  direction ("the button on the right")? Do Arabic strings truncate where English doesn't?
- **The faith/logistical boundary.** Does a sacred moment carry transactional chrome? Does a
  payment screen carry a blessing? Both are failures of the same kind.
- **Crowd and connectivity conditions.** Does this work one-handed, in bright sun, on a weak
  network, with a dying battery? Mina and the Haram are not office conditions.
- **Time pressure that is real.** Permit windows, departure times, prayer times. Does the
  interface make the user compute anything under pressure?
- **Companions and group flows.** Most pilgrims don't travel alone. Does the flow assume one
  person?
- **Accessibility.** WCAG 2.1 AA: 4.5:1 contrast for normal text, 3:1 for large, 44×44px touch
  targets, keyboard and screen-reader semantics, focus order, error identification. A global
  audience of this size includes every access need there is.
- **Intent vs desire.** Is this screen serving a goal (booking Hajj) or nurturing a habit (daily
  Quran)? The architecture should differ, and a screen built on the wrong model will fail in ways
  no individual fix repairs.

---

## What this evaluation is not

- **Not user research.** It is expert judgement and it is fallible. Findings are hypotheses with
  a strong prior, not measured facts. Say so when a finding would benefit from testing.
- **Not a design review of taste.** Report defects against a named principle, never a preference.
  If you cannot name the heuristic or the Rams principle, it is an opinion — leave it out.
- **Not a substitute for the accessibility audit** where one is required, though it should catch
  the obvious violations.
