# The Heuristics

Two lenses, run together. Nielsen asks *does this work?* Rams asks *should it exist in this
form?* Each entry below carries the principle and what it means specifically at Nusuk.

---

## Nielsen's ten usability heuristics

### 1. Visibility of system status
The system keeps users informed about what is going on, through appropriate feedback in
reasonable time.

**At Nusuk:** permit and booking states are the whole product. A user who cannot tell whether a
Rawdah booking is confirmed, pending, or cancelled will either contact support or travel on a
wrong assumption. Check that every state is visible without navigating, that long waits (visa
processing, permit issuance) carry an explicit expectation, and that a status is never inferable
only from absence.

### 2. Match between the system and the real world
Speak the users' language, with familiar concepts. Follow real-world conventions.

**At Nusuk:** the real world here is worship and travel, not software. `إصدار تصريح` is
system-speak for what the user experiences as booking a visit. Check that labels match what a
pilgrim would call the thing, that Hijri dates appear where they are the operative calendar, and
that rite terminology matches how it is taught rather than how it is stored.

### 3. User control and freedom
Users need a clearly marked emergency exit to leave an unwanted state. Support undo and redo.

**At Nusuk:** bookings tie to scarce, dated inventory. Check that cancelling is possible and
that its consequences are stated before commitment, that a user can back out of a multi-step
booking without losing entered data, and that irreversible actions are marked as such *before*
the tap, not after.

### 4. Consistency and standards
Users should not wonder whether different words, situations, or actions mean the same thing.
Follow platform conventions.

**At Nusuk:** one product, many services, many teams. Check that the same object carries the same
name everywhere (permit vs booking vs appointment), that status vocabulary doesn't shift between
screens, and that a pattern used once is used everywhere it applies. Terminology drift is a
usability defect, not a style one.

### 5. Error prevention
Better than good error messages is a careful design that prevents a problem from occurring.

**At Nusuk:** many errors here are expensive and non-recoverable — a missed slot, a lapsed
window, an ineligible companion. Check that eligibility is validated before the user invests
effort, that impossible selections are unavailable rather than rejected after the fact, and that
destructive actions require confirmation proportional to the loss.

### 6. Recognition rather than recall
Minimise memory load. Make objects, actions, and options visible.

**At Nusuk:** users are tired, often elderly, frequently on their first and only Hajj. Check that
booking references, times, and locations are shown where needed rather than remembered, that
multi-step flows show progress and prior choices, and that nothing requires holding a value from
a previous screen in your head.

### 7. Flexibility and efficiency of use
Accelerators, unseen by novices, may speed up interaction for experts. Allow tailoring.

**At Nusuk:** the split matters — a once-in-a-lifetime Hajj user is a permanent novice, while a
daily Quran or prayer-times user is an expert within a week. Check that the frequent paths are
fast without making the rare paths harder, and that the instant/repeat flows exist where a user
does the same thing many times.

### 8. Aesthetic and minimalist design
Dialogues should not contain irrelevant or rarely needed information. Every extra unit competes
with the relevant units.

**At Nusuk:** the DX principle is "sufficient information for next steps, nothing more". Check
that each screen carries one job, that supporting detail is progressively disclosed, and that no
element is present because a stakeholder asked rather than because a user needs it.

### 9. Help users recognise, diagnose, and recover from errors
Error messages in plain language, precisely indicating the problem and constructively suggesting
a solution.

**At Nusuk:** check that the cause is named specifically enough that the recovery differs by
cause, that no error exposes a code or a stack trace, that the user is never blamed, and that
every error offers a next step. A generic failure message on a payment is a defect, not a string.

### 10. Help and documentation
Even though the system should be usable without documentation, help should be searchable, task-
focused, concrete, and not too large.

**At Nusuk:** help is titled by the user's question, not the process name. Check that support is
reachable from the point of failure rather than only from a settings menu, and that guidance for
rites is available at the moment of the rite, not only in an articles section.

---

## Rams' ten Good Design principles

Nusuk's stored descriptions, verbatim, with the Nusuk reading beneath each.

### Good design is innovative
> The possibilities for innovation are not, by any means, exhausted. Technological development is
> always offering new opportunities for innovative design. But innovative design always develops
> in tandem with innovative technology, and can never be an end in itself.

**Ask:** is this novelty serving the pilgrim, or is it novelty for its own sake? Innovation that
makes a rite harder to complete is a failure regardless of how advanced it is.

### Good design makes a product useful
> A product is bought to be used. It has to satisfy certain criteria, not only functional, but
> also psychological and aesthetic. Good design emphasises the usefulness of a product whilst
> disregarding anything that could possibly detract from it.

**Ask:** what does this screen let the user *do*? A passive screen is a failure by the Engaging
principle. If it informs, does the information change a decision?

### Good design is aesthetic
> The aesthetic quality of a product is integral to its usefulness because products we use every
> day affect our person and our well-being. But only well-executed objects can be beautiful.

**Ask:** does the treatment match the gravity of the moment? A sacred completion rendered with
transactional chrome is an aesthetic failure with a spiritual cost.

### Good design makes a product understandable
> It clarifies the products structure. Better still, it can make the product talk. At best, it is
> self-explanatory.

**Ask:** can a first-time user infer the model — what a permit is, how a booking relates to a
visit, who a companion is — without being taught?

### Good design is unobtrusive
> Products fulfilling a purpose are like tools. They are neither decorative objects nor works of
> art. Their design should therefore be both neutral and restrained, to leave room for the users
> self-expression.

**Ask:** during worship, does the app recede? This is the principle behind "Circuit 3 of 7"
rather than celebratory encouragement mid-Tawaf.

### Good design is honest
> It does not make a product more innovative, powerful or valuable than it really is. It does not
> attempt to manipulate the consumer with promises that cannot be kept.

**Ask, hardest of the ten here:** does anything overstate availability, certainty, or approval?
Manufactured urgency, implied guarantees about government processing, and progress indicators
that don't reflect real progress all fail this. Nusuk speaks with state authority — a dishonest
interface is a different category of harm.

### Good design is long-lasting
> It avoids being fashionable and therefore never appears antiquated. Unlike fashionable design,
> it lasts many years - even in today's throwaway society.

**Ask:** will this pattern survive the next three seasons and the next two services added to it?

### Good design is thorough down to the last detail
> Nothing must be arbitrary or left to chance. Care and accuracy in the design process show
> respect towards the consumer.

**Ask:** are the edge states designed — empty, error, loading, offline, partial, long names,
long Arabic strings, zero and single and many? Care shown in detail is the form respect takes in
an interface.

### Good design is environmentally friendly
> Design makes an important contribution to the preservation of the environment. It conserves
> resources and minimises physical and visual pollution throughout the lifecycle of the product.

**Ask:** at Nusuk's scale, read this as resource cost too — payload, battery, and data on a
foreign SIM, and the visual pollution of notification volume. A notification that didn't need to
fire is pollution.

### Good design is as little design as possible
> Less, but better - because it concentrates on the essential aspects, and the products are not
> burdened with non-essentials. Back to purity, back to simplicity.

**Ask:** what can be removed? This is the DX principle "no redundancy, clean, minimal" stated by
its source. The strongest recommendation a heuristic evaluation can make is usually a deletion.

---

## The three DX principles

Layer these over both frameworks — they are the house standard every deliverable must satisfy.

- **Intuitive** — the user feels confident and never lost. Conceptual models and UI built on
  universal best practices. No redundancy. Sufficient information for next steps, nothing more.
- **Engaging** — every element drives either actionable engagement (a positive user action) or
  informative engagement (awareness, education). **Passive screens are a failure.**
- **Intelligent** — the experience uses data, AI, and user context to adapt, acting proactively
  to reduce cognitive overload. The user should intervene less, not more.

> These three, the diagnostic router, the quality gates below, and the behavioural patterns are
> owned by the designing job (`designing.md`), which carries the full Digital Experience Guide.
> They are summarised here because an evaluation checks against them; go there to design with
> them, to diagnose a pattern, or when a finding touches a nudge or incentive mechanic — that side
> holds the ethical limits in `ethics.md`.

## The seven quality gates

A deliverable is not complete until it clears all seven. A heuristic evaluation should say which
gates the artefact currently fails.

1. **Principle check** — Intuitive + Engaging + Intelligent?
2. **Behavioural model** — is intent vs desire clear, and the relevant psychological pattern documented?
3. **Metric alignment** — which KPI pillar does this serve, and what is the success threshold?
4. **Accessibility** — has a WCAG 2.1 AA review been performed?
5. **Brand compliance** — does it align with the brand guidelines?
6. **Research grounding** — is the decision supported by evidence?
7. **Handoff readiness** — specs, tokens, states, edge cases, responsive behaviour documented?
