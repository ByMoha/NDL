# Writing and live rules

The live source of truth for Nusuk copy and mechanics is *Nusuk DX Live Rules* in Notion; the Arabic writing guide (دليل الكتابة) governs wording. These are the key rows. Content owners own Arabic and religious content QA and align with the religious content owners.

## Voice & tone

| Do | Don't | Why |
|---|---|---|
| Speak person to person, about the user’s situation | Describe the system’s internal state | "Booking couldn’t load", not "Verification failed 403" |
| Classify every block faith-led or logistical | Mix both in one block | A blessing on a payment receipt reads as deflection |
| Open an error with empathy, then guide | Lead with the diagnosis | One line of empathy changes the whole register |
| End sessions with calm closure | End with a prompt to do more | Guidance, mercy, continuity |

## English

| Do | Don't | Why |
|---|---|---|
| Sentence case everywhere | Title Case on labels or buttons | The rule is sentence case |
| Makkah · Madinah · Quran · Manasik · Duaa | Mecca · Medina · Koran · Rituals · Prayers | Saudi government standard |
| "Book your visit" | "Permit issuance" | The user’s action is booking |
| ﷺ after the Prophet, in full | (ص) or nothing | Protocol, always |

## Arabic

| Do | Don't | Why |
|---|---|---|
| أرسلنا or أُرسلت | تم / يتم / سيتم | Never تم |
| احجز / حجز | إصدار / استخراج as the user’s action | تصريح names the document, not the action |
| Western numerals 1 2 3 | ٠١٢٣ | Locked decision |
| نسك | نُسك / نُسُك | Write it without diacritics |

## Microcopy

| Do | Don't | Why |
|---|---|---|
| Name the outcome on a button | OK · Submit · Click here | Those describe the widget, not the result |
| Error = what happened and how to recover | A diagnosis with no next step | An error without a next step becomes a support ticket |
| Name what is loading | "Loading…" | جارٍ تجهيز حجزك |
| "Keep booking" / "Cancel booking" | Cancel / Confirm | Ambiguous under stress |

## Faith content

| Do | Don't | Why |
|---|---|---|
| Quote and cite | Adjudicate a ruling | Madhab-neutral, always |
| Frame mustahab as an invitation | "You should" for a mustahab act | A gift offered, not a task added |
| One ayah or one hadith per short piece | Stacking scripture | — |
| Blessings in faith-led messages only | A blessing on a payment or error | Reads as deflection |

## Mechanics & ethics

| Do | Don't | Why |
|---|---|---|
| Scarcity only for real capacity and cutoffs | Manufactured urgency, countdowns | Does the deadline exist without the campaign? |
| Celebrate returning | Streaks and streak shame | Return-after-lapse is the health metric |
| Keep progress private | Leaderboards, ranks, moral scoring | Worship is not a status good |
| Pair every success metric with a guardrail | Ship a mechanic with only an upside metric | Opt-out sits inside the Trust Index |

## Where copy lives in components

- **Buttons** name the outcome: احجز زيارتك · Book your visit. Keep/Cancel pairs say what is kept or cancelled.
- **Errors** (Hint, StatusSheet, NoticeBar error) say what happened and how to recover, with one line of empathy first. Never a status code alone.
- **Loading** names what is loading: جارٍ تجهيز حجزك, not "Loading…".
- **Empty states** say what will appear and offer the one action that fills it.
- **Notifications and live activities** are timely and informative; no guilt, FOMO or streak language.
- **Surveys** (FeedbackEmojis, NPS) ask once per journey phase, at most twice per pilgrimage, after a stable outcome; never about the ibadah itself.

## House rules (14 November 2026)

Condensed from the Nusuk writing guide and the copy rules confirmed in production review (account skills `nusuk-content-writer`, `nusuk-voice-rules`, `nusuk-ux`). Arabic is the source; rebuild English from it. Those skills hold the full guide; when they disagree, the stricter rule wins and this list records the outcome.

- **Who speaks.** Speak to one person (أنت). Nusuk says نحن only for caring or positive acts: «استلمنا بلاغك»، «عثرنا على غرضك»، «سنُشعرك بأي جديد». Adverse outcomes are agentless and never use تم: «أُلغي حجزك»، «انتهى حجزك»، «رُفض الطلب»، «أُغلق البلاغ»; never «ألغينا» and never «تم إلغاء». English the same: "Your booking was cancelled", not "We cancelled your booking". Apologise (نعتذر) only for a real service failure, never for a no-show.
- **Refunds.** One wording everywhere. The DL uses the neutral «سيُعاد المبلغ» / "The amount will be refunded" until the content owner chooses between it and the caring «سنعيد المبلغ».
- **People are not items.** Lost and found for a person uses reunion words: «الشخص الذي تبحث عنه»، «لاصطحابه»، «لمّ الشمل»; never «المفقود» or «استلام».
- **Placeholders.** A name in `%s` has no known gender, so no verb agrees with it: «أهلية %s»، «بإمكان %s», not «ستستنفد %s». Keep the token exactly `%s` (RTL may display it as s%; check the stored string, don't "fix" the rendering).
- **Counted nouns: six Arabic plural forms** (CLDR zero, one, two, few, many, other). Write all six; the one usually missing is many (11–99): «شخص»، «شخصان»، «%s أشخاص»، «%s شخصًا»، «%s شخص». Test 0, 1, 2, 3, 10, 11, 99, 100.
- **Grammar checks.** Dual in construct drops the nun («باقتَي عمرة»); hamzat wasl takes a bare alif (استرداد، استثناء، انتظار); منقوص indefinite takes tanwin («جارٍ»، «مستوفٍ»); «لا» is followed by a space («لا يمكن»); «أكّد» without على; «ساهم في»; أصبح takes a منصوب خبر.
- **Cut filler.** Drop من/الذي/التي, هذه/تلك, هنا/هناك, تماماً/فقط when the sentence stands without them: «تفاصيل حجزك», not «هذه تفاصيل حجزك». No قام بـ / القيام بـ.
- **Terms.** ضيف الرحمن in formal and faith address, أنت in direct address, never «المستخدم». ماء زمزم (singular). الروضة الشريفة, never الروضة alone; English "Rawdah" without "the". قيد المعالجة / قيد التوصيل, not تحت. بيانات for personal data, not معلومات. مبارك, not مبروك. مكة المكرمة، المدينة المنورة; English Makkah, Madinah. Service names as written: نسك، استكشف، زاد، مصحف نسك، Nusuk AI.
- **States.** Loading names the thing: «جارٍ تجهيز تصريحك…», not «جاري معالجة الطلب». Errors say what happened and the next step without blame or codes: «تعذر تحميل التصريح. حاول مرة أخرى.» Success is calm: «حجزك مكتمل.»
- **No pressure.** Never سارع، بادر، لا تفوّت، آخر فرصة, "Don't miss", "Hurry". "Last seats" only when literally true, and never with an urgency verb.
- **Faith text.** A verse in ﴿ ﴾ with surah and ayah; a hadith with its short source; ﷺ in full; kept apart from marketing; one verse or hadith per short piece; the content team's approved wording only, and sensitive religious content goes to human review. Hajj and Umrah are a journey, never a product.
- **English.** Global English: plain, no idioms, sentence case, Western digits, a comma over 999 (10,000), 12-hour time ("8 PM").
- **Before publishing, ask:** is it clear to someone outside the field, can a word go, is every term the approved one, does it translate without losing meaning, does it sound like Nusuk?

*Mirrors DESIGN.md › M6 › House rules.*
