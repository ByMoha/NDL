# Arabic UX rules

Use فصحى مبسطة shaped by Nusuk’s established copy. Use the examples below and in the pattern guide as contextual precedents.

## Grammar and tone

- تم and بنجاح are valid, especially for explicit confirmations. Active voice is also valid. Do not universally remove لقد، هناك، or passive constructions: the newest Rawdah copy includes لقد and هناك. Judge the purpose and precedent, not isolated words.
- Prefer possessive suffixes and direct wording where appropriate. Remove قم بـ or translated filler only when it adds nothing and the target is new/unapproved copy. Preserve existing approved wording unless its revision is requested.
- Masdar fits many labels (تفعيل الإشعارات، إنشاء حساب جديد); imperative fits many instructions (توجّه، اختر). Component context decides. Do not infer component type from a string alone.
- فضلًا and مجددًا recur in recovery messages; use them as preferences, not mandatory inserts. Explain a cause only when supplied. A retry action must actually be available.
- Question framing works for meaningful choices. It is not compulsory for compact noun labels.
- Use Western digits as the existing default for new functional UI unless the product supplies another format. Preserve anchored digits in existing strings and flag inconsistency if a normalization audit is requested.
- Keep نسك without diacritics as the brand default. Use useful diacritics for clarity; do not blanket-strip them from religious text.

## Arabic examples and scope

| Nusuk example | What to learn |
|---|---|
| هناك بيانات مطلوبة نحتاج تحديثها حتى تكمل الحجز. — Rawdah | هناك is valid when it introduces a relevant condition. It is not automatically a calque. |
| تم حفظ الإعدادات بنجاح — Thikr | Keep explicit confirmation when it reassures the user; do not automatically remove تم or بنجاح. |
| ستظهر طلباتك هنا بعد إنشائها — Carts | Explain what belongs in an empty view and when it will appear. This is not a rule to positively reframe errors or negative search results. |
| %s د لإتمام 7 أشواط — Mutawif | Abbreviate minutes in compact counters where appropriate, not in every body message. |
| تفعيل الإشعارات — Carts/Nusuk Pass | Masdar fits this control label; it does not imply all instructions must use masdar. |

Full sentences generally retain periods; short labels/buttons generally omit them. Preserve visible field labels rather than making placeholders carry their meaning. Use مثال: for new example hints when no approved alternative is supplied.

## Technical integrity

Preserve variable names, types, counts, URLs, tags, ICU structure, and product identifiers. Named arguments may move to fit grammar if the format supports it. Preserve argument order for sequential %s/%d tokens; request an engineering mapping when the grammar requires reordering. Never guess whether s%, %s, or &s is intended: preserve source and flag a suspected malformed token. Do not translate a token name such as {link} into {رابط} without a supplied mapping.

When working with localization tables, multiple lines may represent plural variants rather than one multiline string. Confirm the implementation format before flattening or splitting them; a blank revision cell does not independently establish deletion.

## Arabic plurals

Use the target localization framework. For CLDR Arabic cardinal selection, the categories are zero (0), one (1), two (2), few (integer remainder modulo 100 of 3–10), many (integer remainder modulo 100 of 11–99), and other (remaining values, including 100, 101, 102 and non-integer values). Thus 103 is few and 111 is many: “11+ = many” is incorrect. The engine decides from the numeric value; do not implement selection by informal word-count labels.

Source: [Unicode CLDR plural rules](https://cldr.unicode.org/index/cldr-spec/plural-rules) and [Arabic language rules](https://unicode.org/cldr/charts/49/supplemental/language_plural_rules.html#ar).

Retain the source schema; do not invent new production keys. Supply needed forms for the supported value range and flag missing branches. Account for sentence grammar: isolated تذكرتان does not imply that every dual occurrence is nominative. For a fixed count, write its correct form; not every noun needs dynamic keys. Test representative values 0, 1, 2, 3, 10, 11, 99, 100, 101, 102, 103, 111 and decimals if supported. The plural category alone does not determine the complete Arabic phrase.

## Spelling and mixed text

For new copy use الاتصال، الاسم، استخدام، الانتقال، احتياجات، استرداد، استكمال، استعادة، التقاط، مساءً، الآن، نرجو. Preserve exact quotations and technical tokens. Use Arabic punctuation in Arabic prose while retaining syntax inside code/variables. Review suspected source errors separately.

Keep Arabic/Latin combinations legible. Check rendering of codes, dates, placeholders and currencies in RTL when a preview is available; do not add invisible direction controls arbitrarily to strings. Preserve supplied controls until their behavior is understood. Do not infer a new date or currency convention from spreadsheet type conversion.
