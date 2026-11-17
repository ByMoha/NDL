# KPI Framework

Every design deliverable specifies which metrics it targets and how success will be validated.

---

## North Star Metric

**Weekly Meaningful Actions per Active User (WMA/WAU)** — the average number of *validated
meaningful actions* completed per active user per week.

- Meaningful actions must be **behavioural outcomes, not taps**
- The NSM forces alignment: it rewards **repeat value** and discourages shallow engagement

### Meaningful actions catalogue
A sample — tailor per feature.

- **Habit loop actions** — prayer on-time check-in, Quran reading session (≥ X seconds/pages),
  thikr set completed, charity action completed, family outreach completed, learning module completed
- **Journey actions** — booking milestone completed, permit confirmed, guidance step completed,
  issue resolved

### Validation rule
Each action must have a **minimum threshold** — time, completion, confirmation — **so it cannot be
gamed.** An action without a threshold is a tap wearing a costume.

---

## Active user definition

An "active user" must be tied to **meaningful behaviour, not app opens.** A user is active if they
do any one of:

- Complete a meaningful action (preferred)
- Start a core workflow step (booking / payment / help)
- View a key detail screen **and** take an in-page action (save / share / apply filter)

> **"Login only" is not something we will talk about.**

---

## Cohort system

Retention must be segmented, otherwise it's noise.

**Mandatory cohorts** — first meaningful action (what did they do first?) · channel (organic /
paid / partner) · region and language · journey type (rituals vs daily habits vs commerce/service).

**Retention metrics** — D1 / D7 / D30 · "return after first value moment" (stronger than D1
alone) · cohort retention by first action.

---

## Pillar A — Adoption (time-to-value)

*Do people reach value fast and understand what Nusuk is for them?*

**Tiered adoption model**

| | Definition | Metric |
|---|---|---|
| **A0 — First Value Moment** | User completes **one** meaningful action in the **first session** | FVM rate = users with FVM / new users |
| **A1 — Activation (24h)** | **Two** meaningful actions within 24h, **or** one core-loop action + one return | Activation rate (24h) |
| **A2 — Commitment (7d)** | Repeats the same meaningful action category **≥2 times** within 7 days | Commitment rate (7d) |

**Supporting** — signup conversion (landing → registration complete) · time to first meaningful
action (TTFMA) · onboarding completion rate · drop-off points: OTP fail, permissions, first-prompt
ignore.

---

## Pillar B — Engagement (habit loop strength)

*Do users repeat value reliably, without coercion?*

**Core** — WAU / MAU · stickiness (WAU/MAU, more meaningful for habits than DAU/MAU) · meaningful
actions per week per WAU.

**Habit loop quality**
- **Loop repeat rate** — % who repeat a core action 3+ times/week
- **Routine stability** — % with consistent time-window usage (e.g. the same 2–3 daily anchors)
- **Return-after-lapse rate** — % who return within 48h after missing 1–2 days. *This is the
  "mercy loop" health signal.*

**Feature adoption** — diagnostic, not headline: filter usage rate · map usage rate · save/favourite
rate · share rate · expert help usage rate, each over active users.

**Upgrade worth making:** Feature → Retention Contribution. For each feature, measure uplift in
D7/D30 retention among users who used it vs did not, controlling for acquisition channel.

---

## Pillar C — Satisfaction & Trust

*Do users trust Nusuk, feel supported, and recommend it?*

**Moment CSAT** — collected at key moments: registration complete (OTP verified) · first
meaningful action (FVM) · payment success/failure · reservation or permit confirmed · complaint
resolved.

**Survey governance (critical at scale)** — sampling and cooldown so heavy users aren't
over-surveyed · target response-rate thresholds · **trigger only after stable outcomes, never
during anxiety peaks.**

**Trust Index** — a composite heartbeat blending leading indicators of distrust: payment success
rate · refund/chargeback rate · complaint rate per 1,000 users and per 1,000 transactions · ticket
reopen rate (especially within 48h) · app rating trend weighted by volume · **notification opt-out
rate** (proxy for "you're annoying / pushing me").

> CSAT is reactive; the Trust Index is proactive and scalable.

Notification opt-out sitting inside the trust measure is deliberate — it is where an
over-aggressive engagement mechanic shows up first.

---

## Pillar D — Revenue & Unit Economics

*Can we monetise without breaking trust or leaking value?*

**Accounting separation** — **GMV** (total transaction value) · **gross revenue** (GMV × take-rate
or fixed fees) · **net revenue** (gross − refunds − chargebacks − processing costs − dispute ops).

**Funnel** — view → reservation/hold → payment start → payment success. Leakage points: payment
failure rate (payment_failed / payment_attempt_started) · hold expiry rate · cancellation rate,
split user-driven (booking_cancelled / hold_created) from checkout abandonment
(purchase_cancelled / purchase_start).

**Revenue quality** — refund rate by reason · chargeback rate (trust and fraud proxy) · dispute
rate per 1,000 transactions.

---

## Operational quality

Leading indicators of satisfaction.

1. Complaint rate per 1,000 users and per 1,000 transactions
2. Time to first response (TFR) and time to resolution (TTR), segmented by channel and severity
3. Reopen rate — track "reopen within 48h"
4. **Friction signals** — rage taps · repeated attempts (resend OTP, pay button, map toggle) ·
   form error loops
5. App store rating trend and top complaint themes — weekly moving average plus review volume,
   top 5 negative themes

---

## Using this

- **Every feature names its pillar and its threshold** before a prototype is handed over. That is
  the Measure stage of the 3Ms and it is not optional.
- **Pair every success metric with a guardrail.** The framework's own design says so: notification
  opt-out sits in the trust pillar precisely so engagement gains can't be booked without their
  cost. A pattern shipped with only an upside metric has no brakes.
- **Define acceptable failure thresholds and treat breaches as release blockers.** This is on the
  team's own to-do list; where thresholds don't exist yet, propose them rather than shipping
  unmeasured.
