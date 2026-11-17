# Arabic UX Rules for Nusuk

Essential Arabic UX writing rules for Nusuk microcopy, adapted for Nusuk's voice, register, and confirmed conventions.

---

## Locked Decisions

These are settled. Don't relitigate them string by string.

| Decision | Standard |
|---|---|
| Nusuk's actions | «نحن» plural — `أصدرنا تصريحك` — **or** light passive — `أُصدر التصريح`. **Never تم.** |
| Numerals | Western: 1 2 3 — never ١ ٢ ٣ |
| Button labels | Masdar: `تأكيد الحجز`، `إكمال الحجز` |
| Instructions & CTAs | Imperative: `أضف أدعيتك`، `أكّد حجزك` |
| Address form | Direct أنت with possessive suffixes: `حسابك`، `رحلتك`، `حجزك` |
| Register | فصحى مبسطة — not formal government Arabic, not colloquial |
| يرجى | **Kept.** Use where EN says "Please" — it carries Nusuk's hospitality |
| Booking language | حجز — avoid the heavy official framing «إصدار تصريح» |
| Punctuation | Arabic marks ، ؛ ؟ · full stop (.) is shared · أو never / |
| Time | 12-hour: `2:30 م` / `9:00 ص` |
| Calendars | Hijri first when both are shown |
| Brand name | نسك |
| Blessing words | `الحمد لله` · `إن شاء الله` (three words, never إنشاء الله) |

**Note on the user as actor.** System actions take نحن or light passive. Acts the *user*
performed — worship, personal completions — take direct past tense addressed to them:
`أكملت حجز الفندق`، `سبّحت`، `أكملت القراءة`.

---

## Quality Standards

Every Arabic string must pass these in order:

1. **هادف — Purposeful**: helps the user do something, understand a state, recover from a problem, or make a decision. If it doesn't serve the user's immediate goal, remove it.
2. **موجز — Concise**: fewest words that preserve meaning, tone, and trust. Cut filler before cutting useful guidance.
3. **طبيعي — Natural**: read it aloud. If it sounds like a translated manual or a government form, soften it. Target: فصحى مبسطة.
4. **واضح — Clear**: the user understands it in one read. Specific verbs, concrete nouns, direct recovery steps.

---

## Length Targets

| Element | Target |
|---------|--------|
| Buttons | 1–3 words, 4 max |
| Titles / Section headers | 2–5 words |
| Errors | 8–15 words including recovery |
| Instructions | 15 words max |
| Notification title + body | 10–15 words total when possible |

---

## Action-First Copy

For actions and instructions, lead with the verb:

- ✔ `حمّل التطبيق`
- ✘ `قم بتحميل التطبيق`

Headings, status labels, and badges work better as nominal phrases:

- ✔ heading: `إعدادات الحساب`
- ✔ status: `الحساب مُفعّل`

---

## عرنجي Detector — Full Checklist

Rewrite if the copy:

1. **تم + مصدر** — never. Use نحن active (`أرسلنا الرسالة`) or light passive (`أُرسلت الرسالة`), not `تم إرسال الرسالة`. Where a process genuinely reaches completion, prefer the verb itself: `اكتمل التحميل`.
2. **قم بـ / القيام بـ** — use the direct verb: `أنشئ حسابك` not `قم بإنشاء حسابك`.
3. **لقد قمت بـ** — always rewrite.
4. **الخاص بك** instead of possessive suffix: `حسابك` not `الحساب الخاص بك`.
5. **من أجل** where لـ works: `لإكمال التسجيل` not `من أجل إكمال التسجيل`.
6. **بنجاح** when success is already obvious: `أكملنا حجزك` not `تم إكمال حجزك بنجاح`.
7. **عملية** before ordinary actions: `إتمام الدفع` not `إتمام عملية الدفع`.
8. **بشكل + adjective** as an English adverb calque: `دائمًا` not `بشكل دائم`.
9. **Leading with هناك** (existential): `في سلتك 3 عناصر` not `هناك 3 عناصر في سلتك`.
10. **احصل على** as catch-all for "get": use the specific verb — اطلب (order)، فعّل (activate)، حمّل (download)، اشترِ (buy).
11. **عندما** for conditional meaning: use إذا or إن instead.
12. **Filler هو/هي** as English copula: `حسابك جاهز` not `حسابك هو جاهز`.
13. **Describing UI interaction**: avoid `اضغط هنا`، `انقر على الزر`.
14. **Sounds like a literal translation** when read aloud → rewrite entirely.

---

## Filler to Cut

- `الذي / التي / الذين` when padding: `حدد الموعد المناسب` not `حدد الموعد الذي يناسبك`.
- `هذا / هذه` when obvious: `تفاصيل طلبك` not `هذه تفاصيل طلبك`.
- `هنا / من هنا` when the UI location is obvious: `استعرض حجوزاتك` not `استعرض حجوزاتك من هنا`.
- `بنجاح` in most success messages.
- `عملية` before actions.
- `الخاص بك`: use possessive suffix.

---

## Structural Calques to Fix

| Calque | Fix |
|--------|-----|
| `بشكل دائم` | `دائمًا` |
| `هناك 3 عناصر في سلتك` | `في سلتك 3 عناصر` |
| `عندما تريد المتابعة` | `إذا أردت المتابعة` |
| `من أجل إكمال التسجيل` | `لإكمال التسجيل` |
| `خدمات أكثر` (EN word order) | `المزيد من الخدمات` |
| `مفتوح الآن` (calque of "is now open") | `بدأ التسجيل` |

---

## UX Pattern Library

> **Ownership:** `microcopy-patterns.md` owns the component rules — what a button does, what an
> error must contain, how a modal is structured. This section carries only the **Arabic
> renderings** of those patterns. If the two ever disagree on structure, `microcopy-patterns.md`
> wins; if they disagree on Arabic wording, this file wins.


### Buttons

Use a specific action verb. Nusuk uses **masdar for labels, masculine imperative for CTAs**.

| Context | Do | Don't |
|---------|----|-------|
| Book Umrah | `احجز العمرة` | `قم بحجز العمرة` |
| Save changes | `احفظ التغييرات` | `حفظ` (too vague for CTA) |
| Continue | `تابع` | `اضغط هنا للمتابعة` |
| Sign in | `سجّل الدخول` (CTA) / `تسجيل الدخول` (label) | `اضغط لتسجيل الدخول` |

### Error Messages

Pattern: what happened + why if useful + how to recover. Nusuk keeps يرجى for courtesy.

| Do | Don't |
|----|-------|
| `تعذّر الدفع. يرجى التحقق من الرقم والمحاولة مرة أخرى.` | `خطأ في الإدخال` |
| `تعذّر الحفظ. يرجى التحقق من اتصالك بالإنترنت.` | `حدث خطأ غير معروف` |
| `لا توجد مواعيد متاحة حاليًا. جرّب تاريخًا آخر.` | `حدث خطأ في الخادم. الرجاء الانتظار.` |

Avoid blame language like `بيانات خاطئة`. Use specific, recoverable language.

### Success Messages

Nusuk uses **نحن active** for system actions, or **light passive** where the actor doesn't matter:

| Do | Don't |
|----|-------|
| `أكملنا حجزك.` | `تم إكمال الحجز بنجاح.` |
| `أرسلنا رمز التحقق.` | `تم إرسال رمز التحقق.` |
| `أكملت حجز الفندق وعُولج الدفع.` | `تمت عملية حجز الفندق ومعالجة الدفع بنجاح.` |

For **user-performed actions** (worship, personal acts), use direct past tense addressed to the user:

| Do | Don't |
|----|-------|
| `سبّحت` | `تم الانتهاء من التسبيح` |
| `أكملت القراءة` | `تم إكمال القراءة بنجاح` |

### Empty States

Pattern: why it's empty + useful next step. Add context specific to Nusuk.

| Do | Don't |
|----|-------|
| `لا توجد حجوزات نشطة لزيارة الروضة الشريفة.` | `لا توجد حجوزات نشطة.` |
| `لا توجد نتائج لـ"{query}". جرّب كلمات بحث مختلفة.` | `لم يتم العثور على نتائج.` |
| `ليس لديك إشعارات بعد.` | `لا يوجد محتوى لعرضه في الوقت الحالي.` |

### Forms

- **Labels**: stable noun phrases — `البريد الإلكتروني`، `رقم الهاتف`، `تاريخ الميلاد`.
- **Placeholders**: examples, not instructions — `name@example.com`، `05XXXXXXXX`.
- **Helper text**: brief and specific — `8 أحرف على الأقل`.
- **Validation**: say exactly what to fix — `أدخل بريدًا إلكترونيًا صحيحًا`.
- Do not hide the label inside the placeholder.

### Notifications

Title and body complement each other — don't repeat.

- Title: `حجزك مؤكّد`
- Body: `يمكنك الاطلاع على تفاصيل الحجز من صفحة حجوزاتك.`

Keep titles under 40 characters when possible.

### Modals and Destructive Actions

Confirm the consequence, then give a clear action.

- Title: `إلغاء الحجز؟`
- Body: `سيُلغى حجز فندقك نهائيًا. لا يمكن التراجع.`
- Primary button: `إلغاء الحجز`
- Secondary button: `تراجع`

### Permission Prompts

Explain the benefit before asking.

- Title: `فعّل الإشعارات`
- Body: `سننبهك عند تحديث حالة حجزك.`
- Primary: `تفعيل الإشعارات`
- Secondary: `ليس الآن`

---

## Nusuk-Specific Vocabulary Rules

- **Labels = user intent**, not system behavior: `استعرض المزيد` not `تحميل المزيد`.
- **Section titles = scannable nouns**: `إيمانيات` not `وهج روحي`.
- **No bureaucratic verbs**: avoid إصدار، استخراج in user-facing copy. Use حجز.
- **جميع** over كافة (less formal, more natural).
- **معك** over شريكك for companionship language.
- **Value props over motivational copy**: promise a concrete benefit, not generic inspiration.

---

## Plurals — Critical

Any string with a dynamic count (`{count}`, `%s`, `%d`) **must** have separate keys:

| Count | Category | Example (دقيقة) | Example (حجز) |
|-------|----------|------------------|----------------|
| 0 | zero | لا توجد دقائق | لا توجد حجوزات |
| 1 | one | دقيقة واحدة | حجز واحد |
| 2 | two | دقيقتان | حجزان |
| 3–10 | few | {count} دقائق | {count} حجوزات |
| 11+ | many | {count} دقيقة | {count} حجزًا |
| 100, 200, decimals | other | {count} دقيقة | {count} حجز |

Six categories, not two. `other` is the one most often dropped — it carries 100, 200, 300 and any
decimal, so a string that omits it breaks on exactly the counts a marketplace or a counter hits.

One generic string is **always wrong**. Labels in isolation use nominative: تذكرتان not تذكرتين.

---

## Preserve Technical Tokens

Never change, reorder, translate, or remove:

- Variables: `{name}`، `{count}`، `%s`، `%d`، `{{userName}}`.
- ICU syntax: `{count, plural, one {...} other {...}}`.
- Tags: `<strong>`، `</a>`، `<0>...</0>`.
- Links, URLs, emails, filenames, product names, coupon codes.

If Arabic grammar needs different word order around a placeholder, move the surrounding words — keep the placeholder intact.

---

## RTL and Mixed Text

Arabic is RTL but product names, emails, and codes are LTR. Keep mixed strings short.

- ✔ `سجّل الدخول باستخدام Google`
- ✔ `أرسلنا الرمز إلى name@example.com`
- ✔ `استخدم الرمز SAVE20 عند الدفع`

Use أو not / for alternatives:
- ✔ `البريد الإلكتروني أو رقم الهاتف`
- ✘ `البريد الإلكتروني/رقم الهاتف`

---

## Spelling Quick Reference

| Rule | Do | Don't |
|------|----|-------|
| همزة وصل (افتعال) | احتاج، اتصال | إحتياج، إتصال |
| همزة قطع (أفعل) | أتمّ، أرسل | اتمّ، ارسل |
| الآن | الآن (with مدة) | الأن |
| ى vs ي | رحلتي (my trip) / مستشفى (hospital) | رحلتى / مستشفي |
| Shaddah for meaning | ذكّرني (remind) / المطوّف (guide) | ذكرني (mentioned) / المطوف |
| Tanween | مساءً | مساءًا |
| Present tense | نرجو | نرجوا |
| كـ connected | كيوم | كـ يوم |
| Arabic comma | ، | , (inside Arabic text) |
| No trailing whitespace | (clean) | (causes RTL rendering issues) |
| Labels = single line | (clean) | (no line-break artifacts) |
| Brand name | نسك | نُسك / نُسُك / نٌسك |

---

## Additional Spelling Rules

These supplement the quick reference above and come from the Nusuk writing guideline.

| Rule | Do | Don't |
|------|----|-------|
| اسم الفاعل الناقص منوَّنًا | جارٍ التحميل | جاري التحميل |
| الأسماء المضافة متصلة | عبدالعزيز | عبد العزيز |
| البسملة بلا ألف في البداية | بسم الله الرحمن الرحيم | باسم الله الرحمن الرحيم |
| همزة متوسطة على السطر بعد ألف ساكنة | إجراءات، قراءة | إجرائات، قرائة |
| التاء المربوطة — اختبر بالتثنية | عمرة ← عمرتان ✔ / وجه ← وجهان ✔ | — |

## Additional Grammar Rules

- **لا تكرّر «كلما»**: `كلما بادرت بالسداد، ضمنت` — not `كلما بادرت بالسداد، كلما ضمنت`.
- **لا تفصل المضاف عن المضاف إليه**: `جمال القيم وروعتها` — not `جمال وروعة القيم`.
- **تجنّب الإضافة المتسلسلة الطويلة**: three chained إضافات overload the phrase.
  `موعد تسجيل رحلة العمرة` — not `موعد بدء إجراءات تسجيل رحلة العمرة`.
- **طابق الفعل مع الفاعل** in gender. Where a shared string can't commit, fall back to the
  masdar per the gender strategy: `إضافة زائر` rather than `أضف/أضيفي زائرًا`.

## Long-Form Arabic

The rules above govern microcopy. In long-form (social, campaigns, help articles) they still
hold, with three relaxations:

- Sentences may run longer, but one idea per sentence remains the ceiling.
- Rhetorical structure is allowed where it serves the reader — a question that opens a post,
  a parallel construction across carousel slides.
- Faith phrasing beyond the two blessing words is available in replies and social content.
  See `content-types.md`.

عرنجي, the spelling rules, Western numerals, and the ban on إصدار/تصريح apply everywhere,
without exception.
