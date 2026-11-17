# Craft & Research Practices

Two things the guide treats as foundational: how to make an interface intuitive, and which
research method to reach for.

---

# Intuitive design — eight steps

The practices behind the Intuitive principle.

### 1 · Understand the user's context
**Objective** — identify the user's environment, goals, and challenges.
**Methods** — user research through surveys, interviews, observation; personas and scenarios for
different user types.
**Outcome** — interfaces relevant to and supportive of real user tasks.

### 2 · Simplify the interaction
**Objective** — remove unnecessary elements, streamline processes.
**Methods** — task analysis breaking tasks into simpler steps; minimalist approach focused on
essentials.
**Outcome** — greater efficiency, less cognitive load.

### 3 · Ensure consistency
**Objective** — uniformity in elements and interactions.
**Methods** — design guidelines and standards; pattern libraries.
**Outcome** — user confidence, reduced learning time.

### 4 · Provide clear affordances
**Objective** — visual cues indicating what is interactive.
**Methods** — buttons, links and icons with clear indicators; feedback such as highlighting or
animation.
**Outcome** — actions are obvious, trial and error unnecessary.

### 5 · Use familiar design patterns
**Objective** — leverage common UI elements and interaction methods.
**Methods** — established conventions and industry standards; avoid novel or unconventional
designs that confuse.
**Outcome** — quick understanding through prior experience.

### 6 · Provide immediate feedback
**Objective** — instant responses to user actions.
**Methods** — real-time feedback on presses and submissions; progress indicators for ongoing
processes.
**Outcome** — users know the result of their interactions.

### 7 · Design for error recovery
**Objective** — help users correct mistakes easily.
**Methods** — undo and redo; clear, constructive error messages that guide the fix.
**Outcome** — confidence, because mistakes are recoverable.

### 8 · Conduct usability testing
**Objective** — test with real users and iterate.
**Methods** — iterative tests throughout the process; analyse feedback for improvement areas.
**Outcome** — continuously improving usability.

## Affordances

| Affordance | Meaning |
|---|---|
| Plain text | Ordinary UI text — a label or instruction |
| Button frame | The element is clickable or tappable |
| Link | Clickable, usually cued by colour or underline |
| Edit box | The text is editable; shows a caret when clicked |

> **Consistency is crucial. If an element looks interactive, it must be interactive.** A box drawn
> around text that isn't clickable is a misleading affordance, and misleading affordances are a
> defect, not a style choice.

*(Source: "Intuitive Design: Eight Steps to an Intuitive UI", Everett N. McKay.)*

---

# Research practices

## Prerequisites

Before any primary research, three things must exist:

- **Segmentation and interaction personas**
- **Current journey maps** — a rough version or flow diagram is fine
- **The ecosystem map** showing where the platform operates

Without these, you cannot choose an approach or set its scope.

## Designer-owned — do these first, before the CX team

| Method | Use it for |
|---|---|
| **Heuristic Evaluation** | Expert review against Nielsen + Rams. See `evaluating.md` |
| **Rams "Good Design" Evaluation** | The ten principles as an evaluation lens |
| **Reports & Best Practices** | What is already known, internally and externally |
| **Emotional Design** | How the experience feels, not just whether it works |
| **WCAG** | Accessibility audit, 2.1 AA |
| **Critical Incident Technique (CIT)** | Reconstructing what happened at decisive moments |
| **Customer Satisfaction Survey** | Moment CSAT — see the metrics reference |
| **General Survey** | Broad signal |
| **Design Practice Assessment** | Assessing the practice itself |

These are cheap, fast, and yours. The guide's ordering is deliberate: **run them before
commissioning user research**, because they catch the class of problem that interviews would
spend weeks rediscovering, and they sharpen the questions worth asking when research does run.

## CX-team coordinated

| Method | Use it for |
|---|---|
| **User Interview** | Depth on motivation and context |
| **Mental Model** | How users think the system works |
| **Shadowing** | Observed behaviour in real conditions — template and protocol exist |

## Additional, as needed

**Tree Testing** · **Usability Testing**

---

## Choosing a method

Match the method to the question, and check the prerequisites are in place first:

- *Is the interface broken?* → Heuristic evaluation, then usability testing to confirm
- *Should this exist in this form?* → Rams evaluation
- *Can everyone use it?* → WCAG audit
- *Why did this go wrong at the decisive moment?* → Critical Incident Technique
- *How does it feel?* → Emotional Design assessment
- *Do users think about it the way we've built it?* → Mental model mapping (CX)
- *What actually happens in Makkah, in a crowd?* → Shadowing (CX)
- *Can people find things?* → Tree testing

A finding from a designer-owned method is a strong prior, not a measurement. Say which findings
would benefit from testing — that is part of the deliverable, not a hedge.
