# Writing for Translation & Localization

English and Arabic are not mirrors. They are **parallel expressions of the same intent**.
Treating one as the master is what produces copy that reads correctly in one language and
mechanically in the other.

---

## Principles

- **Write for translation from the start.** Simple sentences. One idea each. Active voice.
- **Don't concatenate strings.** `"{item} has been {action}"` breaks in Arabic — gender,
  agreement, and word order all shift. Write complete sentences.
- **No idioms.** "You're all set!" doesn't translate. "Your booking is confirmed" does.
- **Leave room.** **Arabic text can be 20–30% longer than English.** Budget the layout from the
  Arabic, not the English.
- **Simple placeholders** — `{name}` — with documentation of what each contains.

---

## Parity

Parity means three things carry across:

- **Meaning** — same facts, same consequences, same specificity. If the English names the cause
  of an error, the Arabic names it too.
- **Effect** — the reader takes the same action.
- **Register and mode** — same formality, same warmth, same faith-led / logistical
  classification. A blessing word on one side and not the other means one of them is misclassified.

**Parity is not identical structure.** These pair correctly without either being a literal
rendering of the other:

| EN | AR |
|---|---|
| You have completed your hotel booking and your payment has been processed. | `أكملت حجز الفندق وعُولج الدفع.` |
| That's unfortunate. Your payment did not go through. | `هذا مؤسف. لم يكتمل الدفع.` |
| The visa for your Umrah visit is in progress. | `تأشيرة زيارة العمرة قيد المعالجة.` |

Note the first row: English names the user as actor and uses a passive for the payment; Arabic
uses `أكملت` for the user's act and the light passive `عُولج` for the system's. A literal trace
of the English would produce `تمت معالجة الدفع` — and `تم` is never Nusuk's voice.

---

## What translators need

Ship these alongside every string:

- **Tone tags on every string** — moment, case tone, and faith-led or logistical. Without them
  a translator can't reproduce the register, and the Arabic drifts toward neutral.
- **Placeholder documentation** — data type, max length, and **whether it inflects for gender**.
- **Brand names don't translate**: Nusuk, Nusuk Marketplace, Nusuk ID.

---

## Plurals

Any string with a dynamic count needs the full set of Arabic keys — **six categories, not two**.
The table with worked examples is in `arabic-ux-rules.md` under **Plurals — Critical**.

One generic Arabic string for a count is **always wrong**, and it's the single most common
localization defect. Check for it in every audit.

---

## Length budgets

| Element | Budget |
|---|---|
| Button | 1–3 words, 4 max |
| Heading / section title | 2–5 words |
| Error including recovery | 8–15 words |
| Instruction | 15 words max |
| Notification title | Under 6 words |
| Notification title + body | 10–15 words total |
| Update notification | ~140 characters max |

Budget from the **Arabic**, which runs longer. Report both counts when a constraint is in play,
and say plainly when a string can't fit honestly — a truncated booking status is a support call.
"This won't fit in 20 characters in Arabic; here's the shortest honest version at 26, or the
design needs to give" is a useful answer.

---

## Technical tokens — never touched

Never change, reorder, translate, or remove:

- Variables: `{name}`, `{count}`, `%s`, `%d`, `{{userName}}`
- ICU syntax: `{count, plural, one {...} other {...}}`
- Tags: `<strong>`, `</a>`, `<0>...</0>`
- Links, URLs, emails, filenames, product names, coupon codes

If Arabic grammar needs a different word order around a placeholder, move the surrounding words
and leave the placeholder intact.

---

## RTL and mixed text

- **No directional language.** "Tap the button on the right", "swipe left to delete" — mirroring
  makes them wrong. Name the element.
- **Latin tokens stay LTR inside Arabic** — reference numbers, `SAR 500`, emails, URLs, coupon
  codes. Keep mixed strings short: `سجّل الدخول باستخدام Google` ·
  `أرسلنا الرمز إلى name@example.com` · `استخدم الرمز SAVE20 عند الدفع`.
- **Flag mixed-direction strings** on handoff so the developer wraps them in isolation marks.
- **Arabic punctuation**: ، ؛ ؟ — the full stop is shared.
- **أو, never /** for alternatives: `البريد الإلكتروني أو رقم الهاتف`.
- **No trailing whitespace** — it causes RTL rendering artifacts.

---

## Localization keys

Follow the project's convention where one exists. Where it doesn't, propose keys on this pattern:

```
<feature>.<screen-or-component>.<element>.<variant>

booking.rawdah.error.no_availability
booking.rawdah.cta.primary
booking.hotel.confirm.destructive
onboarding.step2.title
notification.trip.departure_reminder
common.action.try_again
```

- **Key by role, never by content.** `error.expired`, not `error.booking_has_expired` — the copy
  changes and the key shouldn't.
- **`common.*` only for strings genuinely identical everywhere.** Sharing to save a line is how
  "Cancel" ends up meaning both "abandon this form" and "cancel your booking" — two different
  Arabic strings: `تراجع` vs `إلغاء الحجز`.
- **One key, one context.** If one English word needs two Arabic renderings, it needs two keys.
- **Named placeholders, not positional.** `%1$s %2$s` gives the translator nothing to reason about.

---

## Deliverable format

```
| Key | EN | AR | Chars (EN/AR) | Moment · case tone · mode | Notes |
|---|---|---|---|---|---|
| booking.rawdah.error.no_availability | No times are available right now. Try another date. | لا توجد مواعيد متاحة حاليًا. جرّب تاريخًا آخر. | 51/44 | 04 Errors · Guiding & Knowledgeable · Logistical | Shown when the slot query returns empty |
| booking.rawdah.cta.primary | Book your visit | احجز زيارتك | 15/11 | 01 Welcome · Guiding & Knowledgeable · Logistical | AR is CTA imperative; tab label uses حجز الزيارة |
```

Include the screen, the trigger condition, the character budget, placeholder documentation, and
any plural categories needed.

---

## Reviewing an existing bilingual pair

Check in this order — failures cluster at the top:

1. **Does the Arabic read as an original?** Look for تم، قم بـ، بنجاح، الخاص بك، عملية, and
   English sentence rhythm. Run the full عرنجي detector in `arabic-ux-rules.md`.
2. **Do both name the same cause and the same next step?** English errors are often more
   specific than their Arabic pair.
3. **Same mode?** A blessing word on one side only means one is misclassified.
4. **Same register**, including يرجى / "Please" parity.
5. **Glossary consistency** on both sides — no synonym drift.
6. **Plural keys present** for any count.
7. **Budgets met.** Count, don't estimate.
8. **Direction and concatenation problems.**
