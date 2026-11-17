# Glossary

One term per concept. Consistency builds trust — especially with readers who know Arabic and
Islamic terminology.

> **Living list.** Update when product language changes. **Never invent synonyms mid-flow.**

---

## Usage rules

1. **Consistency** — once a term appears in a flow, use the same form throughout.
2. **EN capitalisation** — all Islamic and Arabic-origin terms are capitalised in English:
   Hajj, Umrah, Tawaf, Salah.
3. **AR definiteness** — terms that take ال in Arabic keep it: `الفجر` not `فجر`,
   `الروضة الشريفة` not `روضة شريفة`.
4. **First-use gloss** — for terms a global Muslim audience may not know, a brief parenthetical
   gloss is acceptable on **first use in onboarding or educational surfaces**. In repeat-use
   microcopy — buttons, labels, toasts — use the term alone.
5. **Never translate literally** — if a term is in this glossary, use it as listed. Don't
   substitute an English "equivalent" that loses meaning.

---

## Writing about Nusuk

### How we express the rites

| Concept | Expression | Example |
|---|---|---|
| Hajj and Umrah | **journey / رحلة** — a complete experience from intention to return | "Book your Umrah journey now in simple steps." |
| The Rawdah | **visit / زيارة** — a moment of closeness and peace | "Book your visit to The Rawdah easily." |

Avoid heavy official terms like "permit issuance". Say **book your journey** or **book your
visit**. The word *permit* itself is fine where it names the actual **document** — "Please see
the permit confirmation attached", `تصريح زيارة الروضة`. What's off-brand is framing the user's
**action** as issuance: `لإصدار حجز جديد` should be `لحجز موعد جديد`.

The distinction matters in practice — the shipped string base carries 36 instances of `تصريح`
(mostly correct, naming the document) and 18 of `إصدار` (mostly the user's action, and wrong).

### Approved terminology

| Concept | English | Arabic | Notes |
|---|---|---|---|
| The pilgrim, Umrah performer, or visitor | Guest of the Most Merciful | ضيف الرحمن | **Never "user" in direct address** |
| The Nusuk app | The Companion | الرفيق | The unified descriptor |
| The app | the app | التطبيق | Never "program" or transliterated "application" in Arabic |
| People added to a booking | Companions | المرافقين | |
| Hajj campaign offering | Package | باقة | |
| An app feature | Service | خدمة | |
| Installing the app or content | Download | حمّل | |

### Sacred places

| English | Arabic | Scope |
|---|---|---|
| The Makkah Haram | الحرم المكي | The area around the Grand Mosque and Haram boundaries |
| The Madinah Haram | الحرم المدني | The area around the Prophet's Mosque |
| Al-Masjid Al-Haram / The Grand Mosque | المسجد الحرام | The mosque itself and its facilities. Use the Quranic name; الحرم المكي only for the broader sanctuary area |
| The Prophet's Mosque | المسجد النبوي | The mosque itself and its facilities |
| The Rawdah | الروضة | Full form **Rawdah Sharifah / الروضة الشريفة** when space allows. EN: never "kindergarten" or "garden" |
| The Haramein | الحرمين الشريفين | The two holy mosques and sanctuaries |
| Makkah | مكة المكرمة | Never Mecca |
| Madinah | المدينة المنورة | Never Medina |

### Brand name

- **English: Nusuk**, capital N. **Arabic: «نسك»**.
- Speak as **"we"** — "We've issued your permit" — a full team serving the guest.

---

## Sacred & journey terms

Keep the Arabic form; capitalise in English.

| Term | Notes |
|---|---|
| Hajj | Keep Arabic form. Never "Pilgrimage" as a substitute |
| Umrah | Keep Arabic form. Never "lesser pilgrimage" |
| Tawaf | Keep; gloss if first exposure needs it |
| Saʿi / Sa'i | Prefer **Saʿi** in editorial; `Sa'i` is fine in UI fonts lacking ʿ |
| Circuit | A round of Tawaf or Saʿi. Keep **Circuit** consistently — avoid Round, Lap |
| Ihram | Keep |
| Rawdah | Keep; full form Rawdah Sharifah when space allows |
| Salah / Prayer | Prefer **Salah** in faith-led; "prayer" is fine in plain logistical help |
| Rukn | Keep when stating pillars |
| Wajib | Keep when stating requirement level |
| Mustahab | Keep in worship UI; "recommended" is fine in plain paraphrase |
| Fidyah | Keep |
| Haram | "the Haram" for the sacred mosque precinct |
| Fard | Obligatory. Keep the term |
| Nafl | نفل / نافلة — voluntary worship |
| Ikhtilaf | اختلاف — a difference of scholarly opinion |
| Madhab | Spelled **madhab** in running text. Nusuk is madhab-neutral |
| Council of Senior Scholars of Saudi Arabia | Full name on About / policy pages — not on every string |

---

## Product & account

| Concept | EN | AR | Avoid |
|---|---|---|---|
| Sign in | Sign in | تسجيل الدخول | "Login" as a heading or title. "Log in" is fine on buttons if used consistently |
| Create account | Create account | إنشاء حساب | Register (ambiguous) |
| Sign out | Sign out | تسجيل الخروج | |
| Profile | Profile | الملف الشخصي | |
| Settings | Settings | الإعدادات | |
| Notifications | Notifications | الإشعارات | Alternating with "alerts" unless genuinely distinct |
| Nusuk ID | Nusuk ID | هوية نسك | |
| Nafath | Nafath | نفاذ | |

## Booking & travel

| Concept | EN | AR | Avoid |
|---|---|---|---|
| Booking | Booking | الحجز | Reservation, unless partner legal language requires it |
| Confirm | Confirm | تأكيد | Submit, unless it's a technical form context |
| Cancel | Cancel | إلغاء | |
| Reschedule | Reschedule | إعادة الجدولة | |
| Availability | Availability | التوفر | |
| Time slot | Time slot | الموعد | |
| Visa | Visa | التأشيرة | |

> **Pick one product term** for permit vs appointment vs booking when they name the same object,
> and keep it. Don't mix them mid-flow.

## Payments

| Concept | EN | AR | Avoid |
|---|---|---|---|
| Pay | Pay / Complete payment | ادفع / إتمام الدفع | Checkout, if it isn't UI chrome |
| Payment method | Payment method | طريقة الدفع | |
| Card | Card | البطاقة | |
| Refund | Refund | استرداد | |

## Status & system

| Concept | EN | AR | Avoid |
|---|---|---|---|
| In progress | In progress | قيد المعالجة | "Pending" overload — define it if it's genuinely distinct |
| Completed | Completed | مكتمل | "Successfully completed" (fluff) |
| Failed | Couldn't complete / Failed | تعذّر / فشل | "Invalid" as user blame |
| Try again | Try again | حاول مرة أخرى | "Click retry" |
| Offline | You're offline / No connection | لا يوجد اتصال | |

---

## Time & scheduling

| Concept | EN | AR | Notes |
|---|---|---|---|
| A time of day | Time | وقت | **Never ساعة** (hour / clock). A bookable slot is `الموعد` — see Booking & travel above |
| Prayer time | Prayer time | وقت الصلاة | |

---

## People & parties

Drawn from the shipped string base. `مرافق` is the settled term for someone added to a booking;
`صديق` for the social graph. They are not interchangeable.

| Concept | EN | AR | Notes |
|---|---|---|---|
| Someone added to a booking | Companion | مرافق / المرافقين (pl.) | **Never "Member"** — it appears once in production and on a mistranslated string |
| A minor companion | Companion under 18 | مرافق دون 18 عامًا | |
| An overseas companion | International companion | مرافق دولي | |
| The list of them | Companions list | قائمة المرافقين | |
| Social connection | Friend | صديق / الأصدقاء (pl.) | |
| An invitation to connect | Friend request | طلب إضافة | |
| The social feature as a whole | Friends & Family | — | Production ships `مجتمع نسك` ("Nusuk community") against EN "Family & friends". Pick one and register it here |

---

## Booking & visit status

One canonical form per state. Production currently ships two renderings for several of these —
see **Known drift** at the end of this file.

| State | EN | AR | Notes |
|---|---|---|---|
| Awaiting action from Nusuk | Awaiting confirmation | بانتظار التأكيد | Prefer over "Waiting for confirmation" / `في انتظار التأكيد` — pick one and hold it |
| Awaiting action from a person | Pending acceptance | في انتظار القبول | Distinct from the above: a human, not the system, is the blocker |
| Confirmed | Confirmed | مؤكد (m.) / مؤكدة (f.) | **Both are correct** — agreement follows the referent: `حجز مؤكد`, `زيارة مؤكدة`. Not an inconsistency |
| Cancelled | Cancelled | ملغى (m.) / ملغاة (f.) | Same agreement rule |
| Visit finished | Visit completed | اكتملت الزيارة | The model for status phrasing: a real verb, no تم |
| Visit under way | Visit started | بدأت الزيارة | |
| User didn't show | Not attended | لم تحضر | Production ships `لم يتم الحضور` — تم, rewrite it |
| Ticket scanned | Scanned | اكتمل المسح | Production ships `تم المسح` — تم, rewrite it |
| Booking reference | Booking number | رقم الحجز | |
| Existing booking | Existing booking | لديك حجز قائم | **Not "Reservation"** — production ships "Existing Reservation" against the glossary |

---

## Identity & authentication

| Concept | EN | AR | Notes |
|---|---|---|---|
| Nusuk identifier | Nusuk ID | معرّف نسك | Production ships both `معرف نُسك` (diacritics — wrong) and `هوية نسك`. Register one; the brand name never takes diacritics |
| National single sign-on | Nafath | نفاذ | |
| Sign in with Nafath | Log in with Nafath | الدخول عبر نفاذ | |
| Sign in with email | Log in with email | الدخول بواسطة البريد الإلكتروني | |
| GCC identity document | GCC ID | الهوية الخليجية | Production ships bare `الهوية`, which is ambiguous next to national ID |
| Passport | Passport | جواز السفر | |
| Visa number | Visa number | رقم التأشيرة | |
| Border number | Border number | رقم الحدود | |
| Nationality | Nationality | الجنسية | |
| Biometric unlock | Face ID / Fingerprint / PIN | — | Register the Arabic forms here once settled; production varies |

---

## Device permissions & actions

Permission strings are a Blocks & Restrictions moment — give the benefit before the ask. See
`microcopy-patterns.md`.

| Concept | EN | AR |
|---|---|---|
| Location access | Allow location access | السماح بالوصول للموقع |
| Calendar access | Allow calendar access | السماح بالوصول للتقويم |
| Contacts sync | Sync contacts | مزامنة جهات الاتصال |
| Notifications | Turn on notifications | تفعيل الإشعارات |
| Add to wallet | Add to wallet | أضف إلى المحفظة |
| Add to calendar | Add to calendar | أضف إلى التقويم |
| Save to photos | Save to photos | حفظ في الألبوم |

**The canonical pair is "Turn on notifications" / `تفعيل الإشعارات`**, matching `الإشعارات` as the
registered noun for Notifications above. Production currently ships two other forms against the
same concept: `تفعيل التنبيهات` (التنبيهات is not the registered noun) and `كن على اطلاع`
("stay informed", which is a tagline, not a label). Both are drift — see **Known drift** below.

---

## Prayer & daily faith

| English | Arabic | Notes |
|---|---|---|
| Fajr, Dhuhr, Asr, Maghrib, Isha | الفجر، الظهر، العصر، المغرب، العشاء | Never "dawn prayer". Prayer names always take ال in Arabic |
| Salah | الصلاة | The act of prayer |
| Duaa | الدعاء / أدعية | Never "Prayers" for أدعية — "Prayers" in English means Salah |
| Quran | القرآن الكريم / القرآن | EN: **Quran** only. AR: القرآن الكريم in general content; مصحف for the Quran-reading feature |
| Sunnah, Hadith | السنة، الحديث / الأحاديث | |
| Dhikr, Tasbih | الذكر / الأذكار، التسبيح | |

## Pilgrimage rites

| English | Arabic | Notes |
|---|---|---|
| Manasik | المناسك | Never "Rituals" — negative connotation in English |
| Adhahi | الأضاحي | Never "Sacrifices" |
| Tahallul | التحلل / الحلاقة | Exiting Ihram. Never "analysis" |
| Wuquf | الوقوف | Standing at Arafat |
| Talbiyah | التلبية | |
| Mina, Arafat, Muzdalifah, Jamarat | منى، عرفات / عرفة، مزدلفة، الجمرات | عرفة for the day, عرفات for the place |
| Maqam Ibrahim | مقام إبراهيم | |
| Mutawwif | المطوّف | With shaddah. Never المطوف or "Motawef" |
| Zamzam water | ماء زمزم | Singular ماء. Never مياه زمزم |
| Electric carts | العربات الكهربائية | Never "golf carts" / عربات القولف |

---

## Blessing vocabulary

| Phrase | Use | Notes |
|---|---|---|
| **AlhamduLillah** / الحمد لله | Affirmation — Umrah complete, booking confirmed, rite complete | Spelling in source: AlhamduLillah |
| **InshaAllah** / إن شاء الله · بإذن الله | Confirming an expectation on a faith-related item | Not filler — skip for generic logistics |
| **Taqabbal Allah** / تقبل الله طاعتك | On completing a rite | "Mabrouk, your booking is confirmed! May Allah accept your worship." |
| **May Allah grant you acceptance** / نسأل الله لك القبول | Praying for the guest | "Your Umrah journey is near, may Allah grant you acceptance." |

**The rule:** natural placement, no direct preaching, no exaggeration, and **never in purely
logistical messages.** See `faith-content-rules.md`.

## Honorifics

| Phrase | Use | Notes |
|---|---|---|
| The Prophet ﷺ | Sacred welcome, Rawdah protocol | Prefer "The Prophet ﷺ" / "Rawdah of The Prophet ﷺ". Always the full ligature, never (ص) |
| Allah (SWT) / سبحانه وتعالى | After Allah in faith-led copy | In short microcopy, `Allah` alone is acceptable |

---

## Social & general

| English | Arabic | Notes |
|---|---|---|
| Social networks | شبكات التواصل | Not شبكات اجتماعية (literal calque) |
| Points | نقاط | Not نقطات |
| Faith-related | إيماني | Not روحي — incorrect in an Islamic context |

## Nusuk services

| العربية | English | الوصف |
|---|---|---|
| سوق نسك | Nusuk Marketplace | حجوزات الرحلات والباقات |
| استكشف | Explore | خدمة المحتوى المعرفي |
| زاد | Zad | مقالات ومحتوى إيماني |
| مصحف نسك | Nusuk Quran | خدمة قراءة القرآن |
| Nusuk AI | Nusuk AI | يُكتب بالإنجليزية في اللغتين |

## Hashtags

- **#تطبيق_واحد** — the primary campaign hashtag.
- Match the hashtag to the language of the content. No trending tags unrelated to Nusuk.

## Brand & identity notes

- Use the official approved logo only — unofficial versions circulate.
- Never name a competitor. General value comparisons are acceptable; named ones are not.

---

## Spelling & capitalisation (English)

- Sacred rites and places: **capitalise** — Umrah, Tawaf, Rawdah.
- Sentence case for UI sentences, headings, buttons, and helper text.
- Button labels sentence case — "Confirm booking" — unless an OS pattern requires otherwise.
- **Allah**: always capitalised. Honorifics sparingly in microcopy; fuller forms in long faith content.

---

## Transliteration principles

When transliterating Arabic terms into English:

1. **Retain Arabic terms** where no true English equivalent exists — Hajj, Umrah, Tawaf, Salah.
2. **Use the most widely recognised English form** when one exists.
3. **Prioritise meaning over literalism** — choose the rendering that captures intent for a
   global audience.
4. **Be consistent** — once a spelling is chosen, apply it uniformly. Inconsistency undermines
   trust more than an imperfect choice does.

---

## Known drift in the shipped string base

Measured against ~1,700 validated AR/EN pairs from `LokaliseLite_DB` (the `rawdah` and `friends`
namespaces). This is an audit backlog, not a style debate — each line is a rule already settled
elsewhere in this file.

| Finding | Count | Rule |
|---|---|---|
| **Brand name with diacritics** — `نُسك` (45), `نٌسك` (18) vs clean `نسك` (18) | 63 | The brand name never takes diacritics. `نٌسك` carries a dammatan and is simply incorrect Arabic |
| `تم` / `يتم` / `سيتم` | 80 | Never تم. Use نحن active or light passive |
| `بنجاح` | 27 | Cut it — success is already evident from the message |
| `إصدار` / `استخراج` as the user's action | 18 | Booking language: حجز |
| `الروضة` without `الشريفة` | 63 | Full form where space allows |
| EN "successfully" | 27 | Redundant — "Completed", not "Completed successfully" |
| EN "Reservation" | 9 | Booking |
| EN Title Case on short labels | 231 of 615 | Sentence case everywhere. Production is split 231 Title / 384 sentence — the same label ships both ways |
| `Fajir` | — | Spelling: **Fajr** |
| `تفعيل التنبيهات` / `كن على اطلاع` for the notifications permission | — | Canonical pair is "Turn on notifications" / `تفعيل الإشعارات` |
| `Males` / `Females` | — | **Men** / **Women** |

**Clean in production, worth protecting:** no `قم بـ`, no `الخاص بك`, no `عملية`, no `بشكل`, no
`اضغط هنا`, no Eastern numerals, no Mecca/Medina, no "Koran", no "Click here", no "Invalid" as
user blame. And 99 strings use `يرجى` correctly.

**One likely bug, not a style issue:** `rawdah.book_for_member_button` ships EN "Book for member"
against AR `ألغي الحجز` ("Cancel the booking"). Worth raising with the team directly.

---

## Open entries

Add service names, partner terms, and legal labels as they're approved.

| Term | Definition | EN | AR | Status |
|---|---|---|---|---|
| — | — | — | — | Draft |
