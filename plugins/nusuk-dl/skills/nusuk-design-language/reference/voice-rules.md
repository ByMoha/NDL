<!-- The nusuk-voice-rules skill, carried inside the DL skill. -->
# Nusuk voice & grammar house rules

Supplements the **nusuk-ux** Tone of Voice skill with conventions confirmed in production review. Apply when writing or reviewing Nusuk AR/EN microcopy. Arabic is the authoritative source; rebuild English from it.

## 1. Message voice — the first-person rule
Nusuk is "the faith companion," but it must never sound like it is doing harm to the user.

- **Negative / adverse actions** (cancel, end, close, reject, expire) → agentless passive or intransitive. **Never** first-person «نحن / ـنا».
  - صح: «أُلغي حجزك»، «انتهى حجزك»، «أُغلق البلاغ»، «رُفض الطلب». بلا «تم»: دليل الكتابة يحظرها (Nusuk DL 3.0, M6 › House rules, DL-34).
  - خطأ: «ألغينا حجزك»، «أنهينا حجزك»، «أغلقنا البلاغ».
- **Positive / caring actions** (found your item, received your report, we'll notify you, gathered, opened appointments) → first-person «نحن» is on-brand and warm.
  - «عثرنا على غرضك»، «استلمنا بلاغك»، «سنُشعرك بأي جديد»، «جمعنا لك أدعية».
- Apology (نأسف / نعتذر) only for a genuine service failure, never for a user-caused outcome (a no-show gets no apology).
- Refund wording: pick one and apply everywhere — neutral passive «سيُعاد المبلغ» (system event) or active «سنعيد المبلغ» (a caring "we'll make it right").

## 2. No manufactured urgency
Ban سارع، بادر، لا تفوّت، and English "Don't miss / Hurry". Replace with a plain invitation: «يمكنك الحجز الآن» / "You can book now". A scarcity label (آخر المقاعد / "Last seats") is allowed **only** when literally true and never paired with an urgency verb.

## 3. Dignity for people
Lost-&-found copy about a **person** must not reuse item language. A human is not «المفقود» collected «لاستلامه».
- Use reunification wording: «الشخص الذي تبحث عنه»، «لاصطحابه»، «لمّ الشمل».
- صح: «عثرنا على الشخص الذي تبحث عنه… لاصطحابه»، «تأكّد لمّ الشمل».
- خطأ: «استلام المفقود لك».

## 4. Placeholders — gender & integrity
- A name «%s» has no known gender. **Never let a verb agree with it**: «ستستنفد %s» / «لن تتمكن %s» silently assume feminine and break for a male name. Keep %s as a possessive or object and use passive/neutral verbs: «أهلية %s»، «لـ %s»، «بإمكان %s»، «تُستنفد… لـ %s».
- Preserve token spelling and order exactly: it is «%s», never «s%» or «ل s%». Flag a suspected malformed/reversed token — do not guess. In RTL, «%s» may *display* as «s%»; verify the stored token, don't "fix" the rendering.

## 5. Arabic plurals (CLDR) for counted nouns
Six categories: zero, one, two, few (n%100 = 3–10), many (n%100 = 11–99), other (100, 101…). The tamyiz differs by branch:
- one «شخص» · two «شخصان» · few «%s أشخاص» (جمع مجرور) · **many «%s شخصًا» (مفرد منصوب)** · other «%s شخص» (مفرد مجرور).
- The **many** branch (11–99) is the one usually missing. Without «%s شخصًا», every number 11–99 renders ungrammatically. Test values 2, 3, 10, 11, 99, 100.

## 6. Recurring grammar checks
- **Dual in construct drops the nun:** «باقتَي عمرة»، «طلبَي استثناء»، «تذكرتي عمرة» — not «باقتين عمرة». A standalone dual keeps it: «طلبين فقط».
- **Hamzat waṣl = bare alif:** استثناء، الانتهاء، استخدام، استرداد — not إستثناء / الإنتهاء.
- **منقوص indefinite (nom/gen) drops the yaa + takes tanwin:** «حاجٌّ مستوفٍ» — not «مستوفي». «المستوفي» only when definite; «مستوفيًا» only in accusative; plural «المستوفون / المستوفين» (one yaa, never «المستوفيين»).
- **أصبح / أصبحت take a منصوب خبر:** «أصبح الطلب مُرتجَعًا / تالفًا» — not «أصبحت حالة الطلب مرتجع».
- **لا negation takes a space:** «لا يمكن»، «لا يمكنك».
- **أكّد is transitive, no على:** «تؤكد عدم وجود…» not «تؤكد على».
- **ساهم في**, not «ساهم بـ».
- **No «تم / يتم / سيتم» + verbal noun, negated or not:** use the passive or a plain verb: «لم تُحفظ التغييرات»، «سيُعاد المبلغ»، «أُرسل الرمز» — not «لم يتم حفظها»، «سيتم إعادة المبلغ»، «تم إرسال الرمز».
- **Tanwin fath after a final hamza takes no extra alif:** «مساءً»، «مساءَ اليوم» — not «مساءا».
- **In an iḍāfa the adjective agrees with the head noun, not the last word:** «طلب صداقة جديد» (the request is new) — not «طلب صداقة جديدة».
- **رضي عن / رضا عن**, not «على»: «ما مدى رضاك عن الخدمة؟».
- **Dates inside Arabic copy use Arabic month names with Western numerals:** «22 يونيو 2025» — not «22 Jun 2025» in an Arabic string (the Product Review Card sample, 17 Nov 2026).
- Restructure escalating warnings to lead with the most severe consequence (e.g. "won't perform Hajj this year" before "affects future eligibility").

## 7. Terms (reinforce glossary)
- ماء زمزم — singular, never «مياه زمزم».
- الروضة الشريفة — never «الروضة» alone; EN "Rawdah" without "the".
- قيد المعالجة / قيد التوصيل — never «تحت المعالجة».
- بيانات for user data, not «معلومات».
- مبارك, not «مبروك».
- حجز / احجز for bookings — never تصريح, except actual Hajj permits (تصريح الحج).
- مكة المكرمة / المدينة المنورة — never Mecca / Medina.

## 8. English
Plain language, sentence case, Western numerals, comma over 999 (10,000), 12-hour "8 PM". Negative messages go agentless-passive in English too ("Your booking was cancelled", not "We cancelled your booking").

## Faith content
Follow nusuk-ux faith-content-rules: emojis follow contextual precedent (don't auto-strip or auto-add); 🕋/🕌 on sacred references are an editorial call, not a blanket rule. Hadith/Quran need the content team's exact approved wording, attribution, and verified per-language translation — never a generated rendering presented as authoritative.