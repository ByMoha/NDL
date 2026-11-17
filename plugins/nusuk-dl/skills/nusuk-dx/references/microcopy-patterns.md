# UI Elements & Message Types

Rules for the building blocks of every screen, and the anatomy of each message type.

This is the component view. `moments-and-cases.md` is the situational view; read them together —
they answer different questions about the same string. Notifications have their own file.

**Contents:** Buttons · Headings · Links · Forms · Errors · Empty states · Loading & progress ·
Modals & destructive actions · Permission prompts · Alt text & accessibility · Message-type
anatomy

---

## Buttons

- **Always name the action.** "Confirm booking", "Try again", "Browse packages" — not "Submit"
  or "OK".
- **Sentence case.** "Confirm booking", not "Confirm Booking".
- **1–3 words, 4 maximum.**
- **Destructive actions name what happens**: "Cancel booking", not just "Cancel".
- In a pair, both buttons name their outcome. Under stress, "Cancel / Confirm" is ambiguous;
  "Keep booking / Cancel booking" isn't.
- Switch to first person when the user is making a commitment: "I agree to the terms."
- **Arabic: masdar for labels, imperative for instructions and CTAs.** `تأكيد الحجز` on a tab;
  `أكّد حجزك` as a CTA.

| Context | EN | AR (CTA) | AR (label) |
|---|---|---|---|
| Book Umrah | Book Umrah | احجز العمرة | حجز العمرة |
| Confirm | Confirm booking | أكّد حجزك | تأكيد الحجز |
| Continue | Continue | تابع | المتابعة |
| Retry | Try again | حاول مرة أخرى | — |
| Pay | Complete payment | ادفع | إتمام الدفع |
| Sign in | Sign in | سجّل الدخول | تسجيل الدخول |
| Defer | Not now | ليس الآن | — |

---

## Headings

- **Sentence case.** "Your booking details", not "Your Booking Details".
- **No end punctuation** unless the heading is a question.
- **Respect hierarchy**: H1 → H2 → H3. Never skip a level — screen readers depend on it.
- **Be specific.** "Your Umrah package" beats "Details".
- Arabic headings take the masdar or a noun phrase: `تفاصيل حجزك`، `إعدادات الحساب`.
- Section titles are scannable nouns, not evocative phrases: `إيمانيات`, not `وهج روحي`.

---

## Links

- **Link meaningful words.** "Read the booking guide" — not "click here".
- Don't link articles or punctuation.
- Link text must make sense read on its own, out of the sentence.

---

## Forms

- **Label every field.** Placeholder text is not a label — it disappears on focus and is missed
  by some screen readers.
- **Mark required fields clearly.**
- **Helper text below the field**: "DD / MM / YYYY", `8 أحرف على الأقل`.
- **Placeholders are examples, not instructions**: `name@example.com`, `05XXXXXXXX`.
- **Validation says exactly what to fix**: "Enter a valid email address" /
  `أدخل بريدًا إلكترونيًا صحيحًا` — not "Invalid input".
- Validate on blur, not on keystroke. Correcting someone mid-word is hostile.
- Arabic labels are stable noun phrases: `البريد الإلكتروني`، `رقم الهاتف`، `تاريخ الميلاد`.

---

## Errors

**Moment tone: Empathetic & Caring. Case tone: Guiding & Knowledgeable.**

Structure: **empathy line (optional) → what happened → how to fix it.**

- **Never blame the user.** Lead with the situation, not the mistake.
- **No exclamation marks in errors.** Ever.
- **Inline errors sit next to the field**, not in a banner.
- **No error codes, stack traces, or HTTP status.** Log them; show a short reference ID only if
  support genuinely needs one.
- Arabic keeps **يرجى** here — it's the courtesy marker, not bureaucracy.
- Avoid blame language: `تحقّق من الرقم` — not `بيانات خاطئة`.

| Cause | EN | AR |
|---|---|---|
| Payment declined | That's unfortunate.<br>Your payment did not go through.<br>Please check the number you entered and try again. | `هذا مؤسف.`<br>`لم يكتمل الدفع.`<br>`يرجى التحقق من الرقم الذي أدخلته والمحاولة مرة أخرى.` |
| Offline | You may not be connected to the internet.<br>Please check your connection and try again. | `قد لا تكون متصلًا بالإنترنت.`<br>`يرجى التحقق من اتصالك والمحاولة مرة أخرى.` |
| Save failed | We couldn't save that. Please check your connection and try again. | `تعذّر الحفظ. يرجى التحقق من اتصالك بالإنترنت.` |
| No availability | No times are available right now. Try another date. | `لا توجد مواعيد متاحة حاليًا. جرّب تاريخًا آخر.` |
| Details don't match | These details don't match. Please check your passport number and date of birth. | `البيانات غير مطابقة. يرجى التحقق من رقم الجواز وتاريخ الميلاد.` |

Forbidden shapes: «خطأ في الإدخال» · «حدث خطأ غير معروف» · «بيانات خاطئة» · "Error 500" ·
"Invalid input" · "Request failed".

---

## Empty states

- **Explain what will appear here** once the user takes action.
- **Include a CTA**: "You don't have any bookings yet. Browse Umrah packages."
- **Be specific about the container**: `لا توجد حجوزات نشطة لزيارة الروضة الشريفة.` beats
  `لا توجد حجوزات نشطة.` — a vague empty state reads as data loss to a user who holds other
  bookings.
- Distinguish the three kinds:
  - **First use** — explain the value, offer the first action.
  - **Cleared** — acknowledge; don't invent work. `ليس لديك إشعارات بعد.`
  - **No results** — say why, offer the way back.
    `لا توجد نتائج لـ"{query}". جرّب كلمات بحث مختلفة.`
- Don't be playful here. The user came looking for something and didn't find it.

---

## Loading and progress

- **Name what's happening**: "Preparing your booking…" — not "Loading…"
- **If it takes time, set expectations**: "This usually takes a few seconds."
- **Spinners for short waits (under 5 seconds); progress bars for longer ones.**
- For a genuinely uncertain wait, give a commitment rather than a spinner label:
  "The visa for your Umrah visit is in progress. We will notify you as soon as possible when it
  is complete, inshaAllah." Never "Pending! Check later."
- Arabic: **جارٍ** with the kasratayn — `جارٍ تجهيز حجزك...` — never `جاري`.

---

## Modals & destructive actions

**Moment tone: Guiding & Knowledgeable. Case tone: Empathetic & Caring.**

Structure: **confirm intent → state consequences → give an escape.**

```
Are you sure you'd like to proceed? You are about to cancel your hotel booking.

Once you cancel your hotel booking, your booking details will no longer be available.

[ Go back ]   [ Cancel booking ]

هل تريد المتابعة؟ أنت على وشك إلغاء حجز الفندق.

بعد الإلغاء، لن تتوفر تفاصيل حجزك.

[ تراجع ]   [ إلغاء الحجز ]
```

Empathetic, never alarming. Name the act and the consequence — it cuts surprise later.

---

## Permission prompts

The system dialog isn't yours to write; the priming screen before it is, and that's where the
opt-in rate is decided.

- Ask in context, when the permission becomes useful — not at launch.
- Give the user's benefit, not the app's need.
- Offer a real decline, and mean it.

| Element | EN | AR |
|---|---|---|
| Title | Turn on notifications | فعّل الإشعارات |
| Body | We'll let you know when your booking status changes. | سننبهك عند تحديث حالة حجزك. |
| Primary | Turn on notifications | تفعيل الإشعارات |
| Secondary | Not now | ليس الآن |

Where a permission touches privacy — location, contacts, photos — say what you won't do with it.

---

## Alt text & accessibility

Nusuk serves Muslims of all abilities. Writing for accessibility means everyone can use the
product.

- **No directional language.** Don't say "the button on the right" — layouts flip between LTR
  and RTL. Name the element instead.
- **Descriptive link text.** "Read the booking guide", not "click here".
- **Heading hierarchy.** H1 → H2 → H3, never skipped.
- **Meaningful alt text.** Describe what the image *communicates*, not what it looks like:
  "Open map" / `فتح الخريطة`, not "map icon".
- **Decorative images take empty alt** (`alt=""`) so screen readers skip them.
- **Label every form field.** A placeholder is not a label.
- **Don't rely on colour alone.** Pair it with text or an icon — an error must read as an error
  in words.
- **Captions or transcripts** for video and audio.
- Don't write "image of" / «صورة لـ» — the screen reader announces it already.

---

## Message-type anatomy

Different messages have different shapes. Match the shape to the type.

### Confirmation
**Structure:** what was completed → what the user should do next.
**Tone:** warm, assured. Faith-led completions get a blessing; logistical ones stay factual.

> "You have completed your hotel booking and your payment has been processed. Please see the
> attached receipt."

### Error
**Structure:** empathy line (optional) → what happened → how to fix it.
**Tone:** empathetic first, then guiding.

> "That's unfortunate. Your payment did not go through. Please check the number you entered and
> try again."

### Informational
**Structure:** the key fact → supporting detail if needed.
**Tone:** calm and factual.

> "The visa for your Umrah visit is in progress. We will notify you when it is complete,
> inshaAllah."

### Warning / alert
**Structure:** what's happening → what the user should do → health or safety advice if relevant.
**Tone:** guiding, firm but courteous.

> "The Tawaf area will be busy at your planned time. Please prioritise your health when planning
> your rituals."

### Destructive / irreversible
**Structure:** confirm intent → state consequences → give an escape.
**Tone:** empathetic, never alarming.

> "Are you sure you'd like to proceed? You are about to cancel your hotel booking. Once
> cancelled, your booking details will no longer be available."
