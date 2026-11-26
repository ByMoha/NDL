# Behavioural Pattern Library

> Behavioural economics is what we observe. Psychology is why it happens.

This is not optional theory — it is the operating system of Nusuk design. Before starting any
feature or flow, consult and apply the relevant patterns.

**For each pattern you apply, document five things:** Why (mechanism) · What (behaviour pattern) ·
How (design method / nudge) · Where (Nusuk implementation) · Validate (metrics + risks).

The **Metrics + risk** line in each pattern below is not decoration. Every pattern here can be
turned against the user, and the named risk is the failure mode to watch for.

---

## 1 · Attention & Cognitive Load

**Mechanism** — Humans have limited attention and working memory. Under stress or time pressure,
they simplify, avoid, or defer decisions.

**What it looks like** — Decision paralysis · skipping setup · dropping off at "too many options".

**BE methods** — Choice architecture · choice overload / decision fatigue · partitioning and
chunking · smart defaults (as a *starting point*).

**Nusuk implementations**
- "Today's 3 actions" (not 30)
- Progressive disclosure: beginner → intermediate → advanced good deeds
- A default daily plan that is **editable** (critical)
- Reduce setup to one question: *"What do you want to focus on this week?"*

**Metrics + risk** — Time-to-first-action (TTFA) · completion of first micro-habit.
**Risk: over-simplification becomes patronising.**

---

## 2 · Motivation & Present Bias

**Mechanism** — People overweight the now. Long-term benefit loses to immediate effort, even when
they "want" the long-term outcome.

**What it looks like** — "I'll read Quran later" · "I'll donate tomorrow" · intent is real,
follow-through collapses.

**BE methods** — Present bias / hyperbolic discounting · immediate rewards (careful: **meaning >
dopamine**) · timely prompts.

**Nusuk implementations**
- Micro-actions under 30 seconds — one ayah, one thikr set, one kindness ping
- "Instant closure" feedback: calm confirmation that the action counted
- Context-based prompts: after prayer, before sleep, commute time

**Metrics + risk** — Same-day repeat rate · 7-day retention tied to micro-actions.
**Risk: turning worship into "quick hits" instead of meaning.**

---

## 3 · Learning, Reinforcement & Feedback

**Mechanism** — Behaviour strengthens with immediate reinforcement and clarity. Feedback reduces
uncertainty, and **uncertainty kills action**.

**What it looks like** — Users stop when they're unsure they're "doing it right" · users repeat
when success feels clear and safe.

**BE methods** — Feedback loops · progress indicators (**non-competitive**) · operant conditioning
principles (use gently).

**Nusuk implementations**
- "You're on track" confirmations — not "you're winning"
- Weekly reflection summary framed as reassurance, not a performance review
- **Celebrate "returning" more than "streaks"**

**Metrics + risk** — Re-engagement after lapse · notification opt-out rate.
**Risk: competitive progress and streak shame.**

---

## 4 · Framing, Emotion & Meaning

**Mechanism** — Wording and emotional tone change perception. Emotion drives memory and choice
more than logic.

**What it looks like** — Same information → different behaviour depending on tone · fear framing
increases action short-term and damages trust long-term.

**BE methods** — Framing effects · prospect theory (gain/loss framing) · peak–end rule.

**Nusuk implementations**
- Positive, humble framing: guidance, mercy, continuity
- End every session with **calm closure**
- Avoid fear-based FOMO — "don't miss reward" is risky

**Metrics + risk** — Trust proxies: app rating, complaint flags, content report rate.
**Risk: guilt loops — fast growth, long-term backlash.**

> This pattern is where design and copy meet. The framing decision belongs here; the words that
> execute it belong to the writing job (`writing.md`), whose tone matrix and mode switch implement
> exactly this mechanism.

---

## 5 · Self-Control & Commitment

**Mechanism** — Humans have intention but weak self-control under fatigue, distraction, or
emotional overload.

**What it looks like** — "I want to" but "I didn't" · users do well in bursts, then fall off.

**BE methods** — Commitment devices (reframed as **covenant**) · commitment and consistency ·
implementation intentions (if–then plans).

**Nusuk implementations**
- If–then templates: *"If it's after Maghrib, then 3 minutes of Quran"*
- Soft commitments: "set a gentle reminder", **not "pledge"**
- "Restart" flows: one tap back to routine

**Metrics + risk** — Habit continuity rate (return after lapse) · plan adherence without coercion.
**Risk: commitments that feel like obligation to the app.**

---

## 6 · Social Psychology & Norms

**Mechanism** — People look to others for cues and belonging. Social proof is strongest when the
reference group feels "like me".

**What it looks like** — Users follow norms under uncertainty · users comply more with trusted
messengers.

**BE methods** — Social proof / social norms · messenger effect · bandwagon effect (use carefully).

**Nusuk implementations**
- "People in your city often do X after Fajr" — **only if true and privacy-safe**
- Community-based reassurance: "You're not alone"
- Avoid popularity vanity — no "trending worship" vibes

**Metrics + risk** — Participation rates in communal journeys.
**Risk: comparison, performative religiosity, exclusion.**

---

## 7 · Valuation Biases (Anchoring, Endowment, Decoy)

**Mechanism** — Humans don't evaluate value objectively; we compare relative to reference points
and ownership feelings.

**What it looks like** — The first reference shapes the perceived "right option" · free access
increases perceived value.

**BE methods** — Anchoring · endowment effect · **decoy effect (explicitly banned for Nusuk)**.

**Nusuk implementations**
- Anchors for **correctness**: trusted sources, clear sequence
- Endowment via "experience ownership": a short trial of a guidance feature
- **No decoys** — never manipulate choices by making one option look stupid

**Metrics + risk** — Conversion to sustained usage of guidance modules.
**Risk: manipulation perception.**

---

## 8 · Scarcity & Urgency

**Mechanism** — Scarcity increases perceived value. Urgency narrows attention and increases
impulsive choice.

**What it looks like** — Quick action with lower deliberation · anxiety-driven behaviour.

**BE methods** — Scarcity principle · urgency effect.

**The Nusuk rule**
> Use scarcity **only for operational truth** — capacity, scheduling constraints.
> **Never use scarcity to emotionally pressure spiritual decisions.**

**Metrics + risk** — Drop-offs after urgency prompts.
**Risk: reputational damage — people feel pushed.**

> The test is whether the deadline exists without the campaign. A permit window closing on a real
> date is fact. A countdown manufactured to lift conversion is not, and it is the single fastest
> way to spend trust this platform cannot re-earn.

---

## 9 · Identity, Autonomy & Intrinsic Motivation

**Mechanism** — Long-term change depends on identity and intrinsic motivation, **not extrinsic
rewards**.

**What it looks like** — Sustainable behaviours become "who I am" · controlling systems produce
reactance and dropout.

**BE methods** — Self-determination logic (autonomy / competence / relatedness) · identity-based
habits.

**Nusuk implementations**
- User chooses focus: *Consistency / Knowledge / Kindness / Family*
- **No ranks that imply moral superiority**
- Personal meaning: *"your intention, your pace"*

**Metrics + risk** — Long-term retention **without increasing notification pressure**.
**Risk: turning "better Muslim" into moral scoring.**

> Note the metric: retention *without* more notifications. A pattern that lifts retention by
> raising notification pressure has failed this pattern's own test.

---

## Choosing between patterns

Start from the symptom, not the technique. The router in `SKILL.md` maps symptoms to patterns.
Then check three things before committing:

1. **Is it intent or desire?** Present-bias and commitment patterns serve desire-driven habit
   loops. Cognitive-load and feedback patterns serve intent-driven journeys. Applying the wrong
   family produces a mechanic that technically works and feels wrong.
2. **What's the named risk, and would you accept it publicly?** Every pattern above lists one.
   If the answer is no, you've found the line.
3. **What would you measure to know it's working, and what would tell you it's harming?** A
   pattern shipped with only a success metric is a pattern with no brakes.
