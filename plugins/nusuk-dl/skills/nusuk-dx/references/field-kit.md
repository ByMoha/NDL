# Field Kit

Tools for drafting and review. Use these before every handoff.

---

## A · Moment picker

```
What is the user experiencing right now?
│
├─ Arriving somewhere in the app ──────────────► 01 Welcome & entry
├─ Filling, choosing, or performing a task ────► 02 Tasks & input
├─ Choosing a path forward ────────────────────► 03 Decision points
├─ Something went wrong ───────────────────────► 04 Errors & recovery
├─ Can't proceed (gate / eligibility / hold) ──► 05 Blocks & restrictions
├─ In a rite or worship guidance ──────────────► 06 Faith guidance
├─ Just finished something ────────────────────► 07 Success & completion
├─ Sacred plan cancelled or missed ────────────► 08 Consolation
└─ Emergency or mass warning ──────────────────► 09 Alerts & warnings
```

Once you have the moment, open it in `moments-and-cases.md`, answer the deciding question, and
lock the case tone and mode.

---

## B · Screen audit worksheet

| Field | Answer |
|---|---|
| Journey | |
| Pattern | |
| Component(s) | |
| Moment | |
| Deciding question answer | |
| Case | |
| Leading tone (case tone) | |
| Supporting tone (moment tone) | |
| Faith-led or logistical | |
| Purpose (one sentence) | |
| Draft EN | |
| Draft AR | |
| Faith review needed? | Yes / No |
| Notes | |

---

## C · Review checklist

**Baseline**

- [ ] **Trustworthy** — no overclaim, no invented fiqh, no unverified information
- [ ] **Timely** — the right information at the right moment, not too early, not too late
- [ ] **Connecting** — stays with the user through the journey, doesn't drop them after one fact
- [ ] **Courteous** — host manners; people feel valued, not processed
- [ ] **Succinct** — every word earns its place on the screen

**Tone**

- [ ] Correct moment and case identified
- [ ] Case tone matches the case, **and differs from the moment tone**
- [ ] Mode is faith-led or logistical, not mixed in one block
- [ ] If the screen stacks blocks, each block has its own moment assignment

**Faith (when applicable)**

- [ ] Madhab-neutral; aligned with the Council of Senior Scholars
- [ ] Rukn / wajib / mustahab framed correctly
- [ ] Ikhtilaf is not forced as obligation
- [ ] Blessing words are earned by the moment, not used as filler

**Language**

- [ ] **EN**: plain, universal, active voice. No jargon or idioms that don't travel
- [ ] **AR**: فصحى مبسطة. No قم بـ / lazy تم / عامية / عرنجي phrasing
- [ ] Glossary terms used consistently — no synonym drift mid-flow
- [ ] Placeholders and product names preserved exactly

**English — granular**

- [ ] Sentence case for headings, buttons, labels, and navigation
- [ ] Contractions used in logistical copy; avoided in faith-led and legal
- [ ] Makkah / Madinah, not Mecca / Medina
- [ ] Booking language, not permit-issuance language
- [ ] Past tense for what happened; present tense for present facts
- [ ] "Please" only when asking; no "Please note that…"
- [ ] Women / Men, Orders (not Requests)
- [ ] No exclamation mark in an error; no emoji in faith-led, errors, consolation, or legal

**Arabic — granular**

- [ ] فصحى مبسطة — sounds natural read aloud
- [ ] Gender strategy consistent — masdar for labels, imperative for CTAs
- [ ] نحن active or light passive for system actions; **never تم**
- [ ] User-performed acts in direct past tense addressed to the user (`أكملت`، `سبّحت`)
- [ ] يرجى used for courtesy where appropriate
- [ ] **Plural keys** present and correct for every dynamic count — six categories, not two
- [ ] Arabic comma ، not English comma
- [ ] Western numerals (1 2 3), not ١ ٢ ٣
- [ ] نسك with no diacritics
- [ ] أو not / for alternatives
- [ ] No trailing whitespace; labels on a single line

**Accessibility and clarity**

- [ ] Copy works without seeing the layout — no "click the button on the right"
- [ ] Link and button text describes the action, not just "click here"
- [ ] Error copy offers a recovery path, not just a diagnosis

---

## D · Rewriting prompts

When a draft isn't landing, rewrite in this order:

1. **Outcome first.** What is true now? Lead with the new state.
   ✔ "Your booking is confirmed."
   ✘ "After processing your request, we are pleased to confirm…"
2. **Action second.** What should the user do next? Name it clearly.
   ✔ "Please see the attached receipt."
   ✘ "You may wish to review…"
3. **Warmth last.** Add warmth only if it doesn't cost clarity. A warm sentence that confuses is
   worse than a clear sentence that's merely polite.

### Common rewrites

| Before (fails Nusuk) | After (passes Nusuk) | What changed |
|---|---|---|
| "Payment did not go through. Check the number." | "That's unfortunate. Your payment did not go through. Please check the number you entered and try again." | Empathy added; recovery made explicit |
| "Identity verification is required to continue." | "Please follow the instructions to verify your identity to continue." | Courtesy added; same information |
| "Your booking for your visit has been cancelled." | "We regret to inform you that your visit to The Rawdah has been cancelled due to unplanned maintenance work. Please accept our apologies. Please try to book a slot for your next Rawdah visit here." | Regret, apology, and forward path added |
| "Choose your Umrah package." | "Browse and select the Umrah package from the choices below." | Invitation added; user feels guided, not commanded |
| "Pending! Check later." | "The visa for your Umrah visit is in progress. We will notify you as soon as possible when it is complete, inshaAllah." | Status, next signal, and reassurance added |

---

## E · Auditing an existing string base

When the job is an audit rather than a new string, start from **Known drift in the shipped
string base** in `glossary.md`. It lists the defects already measured in production with counts,
so you can confirm whether a finding is a one-off or an instance of a known pattern — and skip
re-deriving what's already been established.

Order the findings by the audit priority: wrong meaning > unclear action > broken
placeholder/plural > عرنجي > terminology > style polish. A mistranslation outranks 80 instances
of تم, however much larger the تم backlog looks.

---

## F · Where the guide's own examples break the guide's own rules

These are real conflicts inside the source guide, found by auditing its worked examples against
its stated rules. **The examples are reproduced verbatim in this skill and have not been
rewritten** — they are the brand's approved copy, and correcting them is the content team's call,
not the writer's.

Use this table when an example and a rule disagree. The short version: **copy the example's
structure and tone; apply the rule to its mechanics.**

| Guide example | Rule it breaks | Recommendation |
|---|---|---|
| `By clicking 'PAY', you confirm…` (03 Decision Points) | Sentence case on buttons — and `english-style.md` writes this same sentence as `'Pay'` | Write `'Pay'`. The all-caps form appears once; the registered button is "Complete payment" |
| `…planning for your Umrah rituals` ×2 (09 Alerts) and `…when planning your rituals` (Warning/alert anatomy) | Glossary: **never "Rituals"** — use Manasik | Write **Manasik**. This is the glossary's most explicit ban |
| `Please note: The time you are planning…` (09 Alerts) | "Please" only when asking, not when stating | Drop it, or make it a request. The clause is also missing its verb |
| `Mabrouk, your booking is confirmed! May Allah accept your worship.` (blessing vocabulary) | Colloquial and unregistered; exclamation mark; illustrates "on completing a rite" with a **booking**, which the mode rule treats as logistical | Reserve `تقبل الله طاعتك` for an actual completed rite. Drop "Mabrouk" |
| `you can recite dua as you walk` (06 Faith Guidance) | Registered spelling is **Duaa** | Capitalise and use the registered spelling |
| `pray your Nafl salah` (06 Faith Guidance) | Islamic terms are capitalised — `faith-content-rules.md` writes the same sentence as **Salah** | Capitalise |
| `We will notify you … inshaAllah` | Registered form is **InshaAllah** | Pick one and register it; the skill currently carries both |
| `Performing Umrah erases sins and raises your rank` (notification title) | Notification titles are **under 6 words**; this is 8 | Either shorten the title or relax the budget — but not both silently |
| `…book a slot for your next Rawdah visit here. (link)` (08 Consolation) | Link meaningful words, never "here" | Move the link onto "book a slot for your next Rawdah visit" |
| `Add one more person to your party` (05 Blocks) | Registered term for someone added to a booking is **Companion** | Use Companion — this is the synonym drift the glossary opens by forbidding |

None of these touch the framework — the moments, the tone assignments, the mode switch, and the
Arabic locked decisions are internally consistent throughout. They are all example-level
mechanics, which is exactly the class of defect a worked example tends to carry.

---

## G · Escalate when…

- A ruling is unclear, contested, or falls outside the matrix's coverage
- Legal, medical, or safety language is involved
- Partner or government wording is mandated by contract
- A consolation risks sounding dismissive — fact only, no regret or next step. Get a second pass
- A blessing word feels forced or misplaced in context
- You're unsure whether a moment is faith-led or logistical. The wrong choice can feel hollow or
  inappropriate, and that's a worse failure than a delayed string
