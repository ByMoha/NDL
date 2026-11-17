# Writing — content and UX writing

Read this for any job about words: writing, rewriting, auditing, or localizing.

> **Before writing anything new:** classify the **moment** and the **faith-led / logistical mode**
> — an unclassified string gets the wrong tone by default (`moments-and-cases.md`). If the flow's
> behavioural model isn't obvious, or you can't tell whether the user is fulfilling an intention
> or nurturing a habit, read `intent-and-desire.md` first; the tone follows from that.
>
> **If you're here as part of a larger job**, two findings belong elsewhere and should be reported
> rather than written around: a screen doing two jobs at once, or a state whose copy is impossible
> because the state itself is wrong → `designing.md`. A layout or flow defect → `evaluating.md`.

Nusuk is the galvanising reference point, the everyday companion, the alim, and the host of
every believer — brought to the world by the Saudi Government and the guardians of the Haramein.
It knows the pilgrim is a weary traveller who has made sacrifices to be in the presence of the
Haramein, and that hospitality from the host country is a crucial factor in the success of their
mission.

This skill covers **every surface**: the strings inside the product and the content around it.

---

## Brand foundation

### The persona — five voices in one

- **The Host** — devised and delivered by the Saudi Government and the guardians of the Haramein.
- **The Companion** — stays with the Muslim and the pilgrim as long as needed; guides, empowers, assures.
- **The Alim** — draws from the source of truth; all knowledge reviewed and verified by the Saudi Government.
- **The Source** — the one app that answers many needs; an ever-present reference point.
- **The Imaani** — draws its motivation from faith, and works in service of Allah (SWT).

### The values

Hospitality & Service · Empathy & Care · Guidance & Knowledge · Wisdom & Accuracy ·
Imaan & The Sacred (**madhab-neutral**, always).

### Baseline qualities — always on, beneath every string

Five qualities, non-negotiable:

1. **Trustworthy** (يثق به الناس) — no overclaiming, no guessing on faith matters, verified sources only.
2. **Timely** (حاضر في يومهم) — the right information at the right moment. Every detail earns its place on screen.
3. **Connecting** (يرافقهم في رحلتهم) — link people to knowledge and actions; stay with them through the journey.
4. **Courteous** (يُشعرهم بالتقدير) — host manners. Nobody feels unwelcome or dismissed.
5. **Succinct** (يختصر المعلومة) — as brief as possible, so the app imposes as little as possible.

### The four tones

- **Hospitable & Serving** — welcoming, generous, courteous, warm. Words that honour the guests
  of the Most Merciful and show dedication to serving them.
- **Empathetic & Caring** — considerate, kind, inclusive. Compassionate and friendly.
- **Guiding & Knowledgeable** — supportive, helpful, authoritative, assured. Clear, accessible
  language; the right information at the right time.
- **Wise & Accurate** — truthful, reliable, calm, well-judged. Verified, concise, clear.

### The mode switch — faith-led or logistical

Choose one per block. **Never both in the same block.**

- **Faith-led (إيماني)** — spiritual character: congratulating a guest on completing Umrah,
  guiding through a rite, sacred welcome.
- **Logistical (عملي)** — practical character: booking confirmations, payment receipts, error
  recovery, data entry.

---

## The writing matrix

```
① Baseline        the five qualities above — always on
② Moment tone     one of the four tones, set by the situation
③ Case tone       a DIFFERENT one of the four tones — this leads the copy
④ Mode            faith-led OR logistical, one per block
```

> **Case tone ≠ moment tone.** This is the single most important rule. The moment sets the
> emotional family; the case tone leads the microcopy.

**Worked example — a payment fails during a hotel booking:**

| Layer | Decision |
|---|---|
| Moment | Errors & Recovery |
| Moment tone | Empathetic & Caring |
| Case | Fixable error |
| Case tone | Guiding & Knowledgeable *(leads the copy)* |
| Mode | Logistical |
| Intention | Tell the user what happened, guide them to retry |

> "That's unfortunate. Your payment did not go through. Please check the number you entered and
> try again."

Empathy opens; guidance leads and drives the action.

---

## The writing process

**First, identify the job.** Creating, editing, localizing (EN↔AR), or auditing — each has a
different output format (see below) and a different starting point. An audit begins with the
existing strings; a localization begins with the intent behind the source string, never with the
source string's syntax.

Then:

1. **Identify the moment** — from the design and screen breakdown.
2. **Identify the case** — the specific scenario.
3. **State the message intention** — what must this copy achieve, in one sentence?
4. **Draft** in Nusuk's voice with the assigned tones.
5. **Check** against the writing matrix and the review checklist in `field-kit.md`.
6. **Amend, then ship.**

**Infer what you can and proceed.** If the request already carries the context — a screenshot of
a failed payment, a named screen, an obvious channel — don't ask about it. Ask one concise
question only when the missing context changes the answer materially: whether a moment is
faith-led or logistical, what actually caused an error, whether an action is reversible, or a
character budget you can't see. If you must proceed without an answer, write under a stated
assumption and flag it.

---

## Moments at a glance

| # | Moment | Moment tone |
|---|---|---|
| 01 | Welcome & Entry | Hospitable & Serving |
| 02 | Tasks & Input | Guiding & Knowledgeable |
| 03 | Decision Points | Guiding & Knowledgeable |
| 04 | Errors & Recovery | Empathetic & Caring |
| 05 | Blocks & Restrictions | Guiding & Knowledgeable |
| 06 | Faith Guidance | Wise & Accurate |
| 07 | Success & Completion | Guiding & Knowledgeable |
| 08 | Consolation | Empathetic & Caring |
| 09 | Alerts & Warnings | Guiding & Knowledgeable |

Full cases, tone assignments, and do/don't pairs in `moments-and-cases.md`. If a screen stacks
several blocks, **each block gets its own moment assignment.**

---

## When to read which reference

| Reading | When |
|---|---|
| `moments-and-cases.md` | Any string tied to a moment — which is nearly every string |
| `microcopy-patterns.md` | UI elements and message-type anatomy: buttons, headings, links, forms, errors, empty states, loading, modals, permissions, alt text |
| `notifications.md` | Any push, in-app, or update notification |
| `arabic-ux-rules.md` | **Every Arabic string** — locked decisions, عرنجي checklist, plurals, spelling, calques, RTL |
| `english-style.md` | Every English string — Plain English, capitalisation, numbers, POV, etiquette, tense, emoji |
| `glossary.md` | Any string with Islamic terms, place names, product or account terms, people and parties, identity, permissions, booking, payment, or status vocabulary — and the measured drift in the shipped string base |
| `faith-content-rules.md` | Rukn/wajib/mustahab/ikhtilaf phrasing, Quran and hadith, blessing vocabulary |
| `content-types.md` | Long-form — social, carousels, campaigns, release notes, help, support, email, app store replies |
| `localization.md` | Bilingual delivery, EN↔AR parity, keys, placeholders, what translators need |
| `field-kit.md` | **Before every handoff** — moment picker, screen audit worksheet, review checklist, rewrite prompts, the places the guide's own examples break its own rules, escalation triggers |

Load what the job needs. Pulling the campaign playbook into a button label wastes context.

---

## Voice in Arabic

The tones manifest through five voice qualities, from the official Arabic writing guide:

- **واضح وودود** — simple words close to the heart, free of complexity.
- **مهذب ومرحّب** — we honour the guest; no harsh directives, no mockery.
- **رسمي بقدر يعزز المصداقية** — language suiting the sanctity of the experience, without stiffness.
- **مطمئِن** — we make the user feel things are under control.
- **إيماني** — carefully chosen expressions of faith, in their natural places.

### Locked Arabic decisions

| Decision | Standard |
|---|---|
| Nusuk's actions | «نحن» plural (`أصدرنا تصريحك`) or light passive (`أُصدر التصريح`). **Never تم.** |
| Numerals | Western: 1 2 3 — not ١ ٢ ٣ |
| Button labels | Masdar: `تأكيد الحجز`، `إكمال الحجز` |
| Instructions & CTAs | Imperative: `أضف أدعيتك`، `أكّد حجزك` |
| Punctuation | Arabic marks ، ؛ ؟ — full stop is shared |
| Register | فصحى مبسطة |
| Brand name | نسك |

Full rules — including the عرنجي detector and plural keys — in `arabic-ux-rules.md`.

---

## We never sound

- **Preachy or scolding.** Nusuk informs; the pilgrim acts.
- **Harsh or mocking.** Even under urgency, we keep courtesy.
- **Exaggerating or over-promising.** We present strengths as they are.
- **Madhab-partial.** We never pick a side.
- **Stiff or affected.** Professionalism with simplicity.

And the hard limits, which hold regardless of how a brief is framed:

- **No manufactured urgency.** Real deadlines are stated as fact; invented ones don't exist.
- **No commodifying worship.** Hajj and Umrah are a journey, not a product line.
- **No religious rulings.** Quote and cite; never adjudicate. The content team classifies; this
  skill only phrases. See `faith-content-rules.md`.
- **No unsourced scripture.** If the content team hasn't supplied an ayah or hadith, don't source one.
- **No عرنجي, no colloquial Arabic.**
- **No machine or bureaucratic voice** — not «تم إصدار», not "Kindly be informed", not "Error 403".
- **No naming competitors.**
- **No images or video that compromise pilgrims' privacy or show them undignified.**

If a brief asks for something on this list, write the strongest version that stays inside the
line and explain the swap in one sentence. Solve it differently rather than refusing it.

---

## Output format

**Creating** — recommendation first, then the reasoning:

```
EN: `...`
AR: `...`
Why: moment · case tone · mode, and the one decision that mattered.
```

**Editing or reviewing:**

```
Original: `...`
Better:   `...`
Issue:    the rule, named.
```

**A set of strings** — a localization-ready table with keys, character counts, and tone tags.
See `localization.md`.

**Auditing** — group by flow or surface, prioritised:

> wrong meaning > unclear action > broken placeholder or plural > عرنجي > terminology > style polish

**Long-form** — the structures in `content-types.md`, each part labelled.

**Where a content review surfaces a design or usability defect** — a screen doing two jobs, a
state with no copy because the state itself is wrong, a flow that needs a step removed rather
than reworded — report it and hand it to the evaluating job (`evaluating.md`). Say what you found; don't
paper over a structural problem with better wording.

**Where a brief asks for manufactured urgency, a streak, a leaderboard, or similar** — the ban in
this file is the copy-level expression of a rule the designing job (`designing.md`) owns at the
mechanic level. Hand it there rather than only refusing the words.

**Escalate rather than guess** when: a ruling is unclear or contested; legal, medical, or safety
language is involved; partner or government wording is mandated; a consolation risks sounding
dismissive; a blessing word feels forced; or you can't tell whether a moment is faith-led or
logistical. The full list is in `field-kit.md`.
