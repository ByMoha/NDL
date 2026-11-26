# Ethics & Persuasion Limits

> **We are not evil, but we do borrow these principles.**

The guide includes *Evil by Design* deliberately — a catalogue of psychological and behavioural-
economics principles used to influence behaviour, which "can be applied in both ethically
questionable and ethically sound ways". Knowing the manipulative form of a technique is how you
recognise it in a proposal, including your own.

This file is the governing layer. Where `methods-library.md` catalogues what exists, this decides
what Nusuk will and will not ship.

---

## The Seven Deadly Sins framework

The guide's taxonomy of persuasion levers, with Nusuk's position on each.

### Pride — leveraging self-esteem and social status
*Techniques: social proof, public recognition, badges and achievements, leaderboards.*

**At Nusuk: mostly closed.** Recognition of worship, made public or ranked, produces exactly what
the Identity pattern warns against — moral scoring and performative religiosity. Private
acknowledgement of one's own consistency is fine. Anything comparative is not.

### Sloth — reducing user effort
*Techniques: simplified processes, default options, automation.*

**At Nusuk: fully open, and encouraged.** This is the Attention & Cognitive Load pattern and the
Intuitive principle. The only condition is autonomy — defaults must be editable, automation must
be visible and reversible. Reducing effort for a tired pilgrim is service, not manipulation.

### Gluttony — encouraging over-consumption
*Techniques: infinite scroll, autoplay, binge encouragement.*

**At Nusuk: closed.** There is no version of this that serves a pilgrim. Time spent in the app is
not the goal; **meaningful actions completed** is the goal, and the NSM was designed specifically
so that shallow engagement doesn't count. A design that maximises session length is optimising
against the North Star.

### Greed — stimulating desire for more
*Techniques: limited-time offers, exclusive deals, scarcity.*

**At Nusuk: narrowly open, on operational truth only.** Real capacity and scheduling constraints
may be stated. Manufactured scarcity on a spiritual decision is banned by the Scarcity pattern in
its own words.

### Envy — desire through others' possessions or achievements
*Techniques: social comparison, user rankings, follower counts.*

**At Nusuk: closed.** Comparison and exclusion are the named risks of the Social Norms pattern.
Worship is not a status good, and an interface that implies otherwise damages the thing it is
meant to serve.

### Lust — attraction and desire
*Techniques: aesthetic design, alluring visuals, aspirational content.*

**At Nusuk: open in its craft sense, closed in its aspirational sense.** Rams' "good design is
aesthetic" applies: beauty is integral to usefulness. But aspirational content that sells a
lifestyle around a rite commodifies worship, which the content guide bans outright.

### Wrath — provoking anger or frustration
*Techniques: controversial content, provocative headlines, debate.*

**At Nusuk: closed, without qualification.** Nothing about this platform's subject matter or its
authority makes provocation acceptable.

---

## Techniques and tactics

The guide separates three bands. The distinction is what makes it usable rather than moralising.

### Dark patterns — design that deceives users into actions they wouldn't otherwise take
*Hidden fees, sneaky opt-ins, disguised ads.*

**Never.** Not a judgement call. Hidden costs in a booking flow, pre-ticked consent, or promotion
disguised as guidance would each be a serious breach for a platform carrying government authority.

### Persuasive design — behavioural insight guiding decisions subtly
*Default settings, pre-selected options, nudging.*

**Permitted, under the libertarian-paternalism test**: does it make the chooser better off *as
judged by themselves*, and is it easy and cheap to avoid? If either answer is no, it has crossed
into the band above.

### Addictive design — elements encouraging repetitive use
*Notifications, reward loops, variable rewards, daily login bonuses.*

**This is the contested band, and Nusuk's position is specific rather than blanket.** Repetition
is genuinely the goal — daily prayer, daily Quran, daily thikr are habits worth forming. What is
refused is the *mechanism*: intermittent variable reward, streak pressure, and notification
volume as a retention lever.

The tell is in the metrics. The Identity pattern's success measure is **long-term retention
without increasing notification pressure**, and **notification opt-out rate sits inside the Trust
Index**. The framework was built so that engagement bought with pressure shows up as a trust
cost. If a mechanic raises retention and opt-outs together, it has failed on the guide's own terms.

---

## Design for good, and mitigating harm

The guide closes constructively, and so should any proposal that trips a limit above.

**Design for good** — leverage design to promote positive behaviour and well-being: encouraging
good habits through reminders, goal-setting and progress tracking; promoting learning through
interactive content; fostering community through supportive features.

**Mitigating harm** — identify and minimise harmful practices: features that encourage breaks or
limit usage; moderation and reporting tools; robust data security with clear policies and
easy-to-use privacy settings.

---

## The standing test

Before shipping any behavioural mechanic, answer all four:

1. **Would the user endorse this if it were explained to them?** (Libertarian paternalism —
   better off *as judged by themselves*.)
2. **Is it easy and cheap to avoid?** (The definition of a nudge. If avoiding it is hard, it isn't
   one.)
3. **What is the named risk on the relevant pattern page, and would you accept it publicly?**
4. **What metric would tell you it's harming, and are you tracking it?** A mechanic shipped with
   only an upside metric has no brakes.

When a proposal fails one of these, name the pattern it is reaching for and offer the version that
stays inside the line. Almost every manipulative mechanic has an honest counterpart that works
nearly as well — and at this scale, on this subject, the difference between them is the whole
mission.
