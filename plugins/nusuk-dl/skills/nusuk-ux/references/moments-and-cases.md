# Patterns and examples

Use these examples for comparable states and components. “Before” is the earlier wording, not a universally prohibited phrase. The reasoning is the inferred editorial principle; the revised wording is the evidence.

## Status, welcome, and action do different jobs

Latest Rawdah revisions:

| Component/job | Before | Revised wording |
|---|---|---|
| Entry status | يمكنك الدخول الآن | الدخول متاح الآن |
| Entry welcome | توجه إلى البوابة المحددة لإكمال إجراءات الدخول | تفضل بالدخول، نتمنى لك زيارة مقبولة |
| Entry instruction | توجّه إلى البوابة المحددة، وأظهر الرمز لإكمال إجراءات الدخول | توجّه إلى نقطة الدخول، وأظهر الرمز لإكمال إجراءات الدخول |

**Reasoning:** report availability in the status, welcome in the message, and explain the required behavior in the instruction. Do not turn every status into an imperative or put the entire flow in each label.

## Confirm the precise outcome

| Context | Revised wording |
|---|---|
| Rawdah visa update | تم تحديث رقم التأشيرة بنجاح. |
| Rawdah calendar addition | أضفنا حجزك إلى التقويم بنجاح. |
| Individual Dhikr settings saved | تم حفظ الإعدادات بنجاح / Settings saved successfully |
| Rawdah cancellation requested by user | تم إلغاء الزيارة بناءً على طلبك |
| Rawdah maintenance cancellation | تم إلغاء الزيارة بسبب أعمال الصيانة |

**Reasoning:** users need to know what completed and, where relevant, why. تم and active voice are both natural; بنجاح can provide explicit reassurance. Do not require a next step when the confirmation is complete on its own. English need not mirror every Arabic word.

## Distinguish missed, incomplete, and cancelled visits

Latest Rawdah uses تعذّر إتمام الزيارة, لم تتم زيارة الروضة الشريفة, and تم إلغاء الزيارة in different instances. These do not all mean the same thing. First establish the actual outcome; use the phrase appropriate to it. Do not replace every outcome with لم تتيسر الزيارة. For the accompanying consoling message, see [faith content](faith-content-rules.md).

## Name the actual action

| Flow/context | Before | Revised wording |
|---|---|---|
| Mutawif, return to Tawaf | توجه إلى صحن الطواف | العودة إلى الطواف / Return to Tawaf |
| Individual Dhikr, restart counter | أعد التعيين | ابدأ من جديد / Start over |
| Carts, confirm cancellation | الموافقة والمتابعة للإلغاء | تأكيد الإلغاء / Cancel booking |
| Umrah permits, defer prompt | ذكرني لاحقًا | ليس الآن / Not now |

**Reasoning:** use familiar wording for what happens when selected. مصدر and imperative can both work. Use التالي for a step advance when appropriate; do not apply it to final consent or cancellation. ليس الآن means deferral, not every kind of closing. A payment button must communicate the payment action when that is what it does.

## Remove redundant context, retain useful explanation

Carts label: تاريخ الموعد → التاريخ. The surrounding booking view already provides the missing context.

Mutawif exit message: عند خروجك من خدمة المطوف الرقمي سيتوقف العد الحالي، وستبدأ من جديد عند استخدام الخدمة لاحقًا.

**Reasoning:** labels can be short, while consequence messages may need more detail. Do not impose a fixed word limit that removes the information needed to decide.

## Make restrictions actionable

Latest Rawdah:

> الموعد الذي اخترته لزيارة الروضة الشريفة متاح للمصرّحين بالحجّ فقط. اختر موعدًا آخر للمتابعة.

**Reasoning:** state the relevant eligibility condition and an available alternative instead of leading with an unnecessary apology. Transfer the structure, not the Hajj restriction, to unrelated services.

Maintenance recovery:

> تم إلغاء موعد زيارتك للروضة الشريفة بتاريخ %s بسبب أعمال الصيانة. فضلًا احجز موعد زيارة آخر.

**Reasoning:** identify the cancelled appointment, give the known cause, and offer the supported recovery. Never supply a plausible cause or promise another appointment is available without evidence.

## English decisions and bilingual parity

Useful examples: Return to Tawaf; Start over; Settings saved successfully; Welcome to Rawdah. Prefer everyday wording and sentence case in new generic copy. Existing approved strings and product names retain their wording.

A deadline such as خلال 48 ساعة القادمة means within the next 48 hours; قبل الموعد بـ 48 ساعة means 48 hours before the appointment. These are different facts, not localization variants. When Arabic changes, reassess its English partner before treating the pair as a reusable example. Product-policy values such as refund timing remain task inputs, not house-style rules.

## Tone defaults

| Moment | Primary tone | Complementary tone | Purpose |
|---|---|---|---|
| Welcome/entry | Hospitable & Serving | Guiding & Knowledgeable | Orient and welcome |
| Worship guidance | Wise & Accurate | Guiding & Knowledgeable | Convey supplied guidance calmly |
| Silent accompaniment | Wise & Accurate | Empathetic & Caring | Minimize interruption |
| Success/completion | Guiding & Knowledgeable | Hospitable & Serving | Confirm the actual completed action |
| Consolation | Empathetic & Caring | Guiding & Knowledgeable | Acknowledge disruption, offer a way forward |
| Tasks/input | Guiding & Knowledgeable | Hospitable & Serving | Help users enter or select information |
| Sensitive data | Guiding & Knowledgeable | Wise & Accurate | Explain the relevant purpose |
| Decisions | Guiding & Knowledgeable | Hospitable & Serving | Clarify action and consequence |
| Destructive action | Guiding & Knowledgeable | Empathetic & Caring | Explain consequence and confirmation |
| Errors/recovery | Empathetic & Caring | Guiding & Knowledgeable | Describe failure and available recovery |
| Waiting | Empathetic & Caring | Hospitable & Serving | Describe actual progress |
| Blocks/alerts | Guiding & Knowledgeable | Empathetic & Caring | Explain conditions or urgent instructions |

These guide the tone; they do not require extra sentences, blessings, apologies, or visible tone labels.
