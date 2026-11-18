# Builds the Nusuk Charity development handoff (index.html). Page CSS comes from the questionnaire's <style>.
import sys, json, html
sys.path.insert(0, '.')
from svgs import ARCH, FLOW, STATE, LIFE
E = html.escape
import os
GAPS = os.environ.get('GAPS_URL', 'https://claude.ai/artifact/WsSQEqJ6Bn6YNq8WB2VdLQ')  # set GAPS_URL to the questionnaire's new link after migrating
FIG = 'https://www.figma.com/design/cBtXOQA9rgnQVmCMgx3UA8/?node-id='
def table(head, rows):
    return '<div class="tw"><table><thead><tr>' + ''.join(f'<th>{h}</th>' for h in head) + '</tr></thead><tbody>' + ''.join('<tr>' + ''.join(f'<td>{c}</td>' for c in r) + '</tr>' for r in rows) + '</tbody></table></div>'
A = lambda *ids: ' '.join(f'<span class="q">{i}</span>' for i in ids)
P = '<span class="pill pr">Proposed</span>'; D = '<span class="pill dl">DL</span>'; F = '<span class="pill pv">DL · Figma only</span>'
fl = lambda node, t: f'<a href="{FIG}{node}" target="_blank" rel="noopener">{t}</a>'
ar = lambda s: f'<span dir="rtl" lang="ar" class="arb">{s}</span>'

canvas = table(['', 'Draft'], [
 ['Problem', 'Pilgrims and Muslims at home want to share in the good works of the Two Holy Mosques (feeding fasting guests, Zamzam water, relief) through a channel they trust. Today that sits on other platforms; Nusuk has no place to give.'],
 ['People', 'Signed-in Nusuk users in and outside the Kingdom, in daily practice (J0 B.4) and in Ramadan (C.1). Caregivers giving on behalf of parents come later ' + A('B8') + '.'],
 ['In scope (v1, proposed)', 'Charity home, one campaign page, payment, failure and expiry, success; receipts ' + A('A1', 'B6') + '.'],
 ['Out of scope', 'Kaffara until reviewed ' + A('R1') + ' · zakat ' + A('R2') + ' · recurring giving, giving on behalf · donor counts, names or ranks (red line) ' + A('R4') + '.'],
 ['Success metric', 'Payment success ≥ 97% of payment starts; completed donations count toward WMA ' + A('J1', 'J2') + '.'],
 ['Guardrails', 'Duplicate charges 0 · refunds and chargebacks &lt; 0.5% · complaints &lt; 2 per 1,000 donations · notification opt-out flat in Ramadan.'],
 ['Risks', 'iOS rejection without an approved nonprofit ' + A('F1') + ' · fundraising without a licence or channel approval ' + A('F2') + ' · two totals if Ehsan lists the same campaign ' + A('K3') + ' · VAT shown on a gift ' + A('F4') + ' · Ramadan 1448 deadline ' + A('A2') + '.'],
 ['Unknown', 'Who takes the money ' + A('D1') + ', who the recipient is ' + A('K1') + ', what a gift buys ' + A('K2') + ', fees and refunds ' + A('P1', 'P2') + '.'],
])
classify = table(['Lens', 'Reading'], [
 ['Intent or desire', 'Desire (closeness to Allah through sadaqa, sharing in iftar at the Haram) that ends in an intent act (pay). The campaign page carries the desire; the payment frame is functional.'],
 ['Realm', 'Spiritual, with a Functional payment rail.'],
 ['Pattern (five parts)', '<b>Why</b>: framing and meaning; real collective progress gives purpose without pressure. <b>What</b>: open a campaign and give once. <b>How</b>: live totals, three amounts and a free field, nothing pre-selected, no countdown, no donor ranks. <b>Where</b>: J0 B.4 (tier T2), Ramadan C.1, never on ritual screens or in sacred windows. <b>Validate</b>: payment success with duplicate charges, refunds and complaints as guardrails.'],
 ['Placement', 'B.4 Charity: “a spiritual act with a commercial rail; the act and the transaction must not share a visual frame”. The campaign page keeps description and amount in two cards; payment is its own page.'],
 ['Template contracts', 'Home: <b>giving-landing</b> ' + P + ' (nearest service-landing: no cart, vertical list) · Campaign: <b>giving-details</b> ' + P + ' (nearest item-details: no cart) · Payment: <code>payment</code> (fits) · Sheets: StatusSheet templates ' + A('H5') + '.'],
 ['Never-ship check', 'Passed with fixes: Figma pre-selects 50 (removed here, ' + A('H4') + '); no countdown, no scarcity, no donor names. Open: VAT line on a gift ' + A('F4') + ', blessing wording ' + A('H7') + '.'],
])
screens = table(['Screen or state', 'Figma', 'Contract', 'Built with', 'Status'], [
 ['Charity home', fl('87392-27288', 'Charity_Main screen'), 'giving-landing', 'Toolbar Secondary Pages / Search · SearchBar · MediaCard <code>type:"charity"</code> · Pagination · Categories · SectionTitle · Button Secondary', D + ' ' + P + ' 320-wide featured cards ' + A('H3')],
 ['Campaign · choose amount', fl('87401-38513', 'Charity_Details'), 'giving-details', 'Toolbar Secondary Pages / Default · Service Box · Select Card (Details) ×3 · Input with riyal · Button Primary MD Apple Pay · Ghost link', D + ' ' + F + ' Select Card Details variant, Service Box'],
 ['Campaign · Android primary', fl('87419-10294', 'Sides Button'), 'giving-details', 'Not built: no Android frame in Figma', 'Design question ' + A('Q-08')],
 ['Campaign · fully funded', 'not in Figma', 'giving-details', 'Not built', 'Design question ' + A('Q-08', 'B2')],
 ['Payment', fl('87418-5453', 'Charity_Payment'), 'payment', 'Toolbar No Actions · Payment widget (total, details, terms, wallet, balance, Apple Pay, cards)', F + ' widget not in the coded bundle ' + A('H8')],
 ['Payment failed', fl('87427-7524', 'Payment failed sheet'), 'payment rule 2', 'StatusSheet <code>template:"payment-failed"</code>, <code>fate</code>, copy word for word from Figma, no support link', D + ' ' + A('H8', 'Q-05')],
 ['Payment session expired', fl('87427-7526', 'Payment session expired sheet'), 'payment rule 2', 'StatusSheet <code>template:"payment-expired"</code>, primary «طلب جديد» as drawn', D + ' ' + A('Q-06')],
 ['Donation complete', fl('87427-7528', 'Payment confirmation toast'), '—', 'NoticeBar success, hug, «تمّ الدفع بنجاح» as drawn', D + ' ' + A('Q-04')],
 ['Receipt, my donations, category page, all campaigns, about sheet, share, terms', 'not in Figma', '—', '—', '<b>Not designed</b> ' + A('B6', 'A6')],
])
states = table(['Screen', 'Drawn in Figma', 'Not drawn, so not built (design question)'], [
 ['Charity home', 'Ready', 'Loading, empty, error, offline ' + A('Q-08')],
 ['Campaign', 'Ready with 50 chosen; custom amount typed', 'No amount, over a limit, offline, campaign fully funded, Android ' + A('Q-07', 'Q-08', 'B5', 'B2')],
 ['Payment', 'Ready; failed sheet; expired sheet; success toast', 'Paying (button loading), wallet too low, offline, Android ' + A('Q-08', 'P3')],
])
ac = table(['Screen', 'Given', 'When', 'Then'], [
 ['Home', 'Campaigns are loaded', 'the person opens Nusuk Charity', 'featured campaigns, ways of giving and the latest campaigns show in that order; every amount is the campaign’s live total; no countdown, no donor names'],
 ['Campaign', 'No amount is chosen (the field was cleared)', 'the person taps Apple Pay', 'nothing opens; the amount field takes focus; the button stays enabled. No message is drawn ' + A('Q-07')],
 ['Campaign', 'A preset is selected', 'the person types in «مبلغ آخر»', 'the preset clears; only one amount is ever active; Arabic-Indic digits are stored as 0–9'],
 ['Campaign (iOS)', 'An amount is chosen', 'the person taps Apple Pay and confirms', 'one donation is created with an idempotency key; on success the person returns to the campaign, the toast «تمّ الدفع بنجاح» drops in from the top and the totals include the gift and the totals include the gift'],
 ['Payment', 'The amount was chosen on the campaign', 'the page opens', 'the total equals that amount; the details list is built as drawn (two item rows, VAT, total) until Q-03 is answered; nothing is added ' + A('F4', 'P1', 'Q-03')],
 ['Payment', 'The provider declines', 'the payment returns', 'the failed sheet opens; «ادفع بطريقة أخرى» closes it on the payment page; a retry reuses the same donation ' + A('D5')],
 ['Payment', 'The provider session times out', 'the person returns', 'the expired sheet rises with «طلب جديد» as drawn; what it starts is ' + A('Q-06', 'D5')],
 ['Any screen', 'The person scrolls', 'content passes under the top', 'only the Toolbar’s first row (back, title, actions) stays; search and everything else scroll away; behind the row is a progressive blur over the Header Effect, never a solid fill'],
 ['Any pushed screen', 'The person swipes from the right edge (RTL) or taps back', 'the gesture passes 35% of the width or is flicked', 'the screen pops: it slides out to the left while the one beneath returns from 30% right and undims; below the threshold it springs back'],
 ['Any', 'VoiceOver or TalkBack is on', 'the person moves through the flow', 'every control has a name; the progress ring reads its value; selected amounts announce as selected; errors are announced'],
])
api = table(['Call', 'Purpose', 'Depends on'], [
 ['<code>GET /v1/giving/home</code>', 'Featured campaigns, ways of giving, latest campaigns, with live totals', A('B1', 'B7', 'D7')],
 ['<code>GET /v1/giving/campaigns/{id}</code>', 'Campaign page: description, presets, recipient and licence, status', A('B1', 'F2')],
 ['<code>POST /v1/giving/donations</code>', 'Create a donation (amount, campaign); returns id and allowed methods', A('B3', 'B5', 'D5')],
 ['<code>POST /v1/giving/donations/{id}/pay</code>', 'Pay by wallet or card; returns status or a 3-D Secure URL', A('D1', 'D4', 'D6')],
 ['<code>POST /v1/giving/donations/{id}/apple-pay</code>', 'Send the PKPaymentToken', A('F1', 'D3')],
 ['<code>GET /v1/giving/donations/{id}</code>', 'Status and receipt', A('B6')],
 ['<code>GET /v1/me/donations</code>', 'My donations (the ticket icon)', A('A6', 'B6')],
 ['<code>webhook payment.*</code>', 'Provider → Nusuk: succeeded, failed, expired, refunded', A('D1', 'P4')],
])
payload = json.dumps({
 "id": "DN-2611-000481", "campaign_id": "iftar-1448", "amount": 50, "currency": "SAR", "source": "preset",
 "method": "apple_pay", "status": "succeeded", "idempotency_key": "c2d1a8e4-…",
 "recipient": {"name": "<licensed recipient>", "licence_no": "<NCNP licence>"},
 "donor": {"nusuk_id": "NSK-48•••21", "shared_with_recipient": False}, "locale": "ar-SA",
 "device": "iOS 19 · Nusuk 4.12", "created_at": "2026-11-17T22:40:51+03:00", "paid_at": "2026-11-17T22:41:09+03:00",
 "receipt": {"id": "RC-2611-000481", "url": "https://…/RC-2611-000481.pdf"}}, ensure_ascii=False, indent=2)
events = table(['Event (proposed name ' + A('I4') + ')', 'When', 'Key properties'], [
 ['<code>giving_home_view</code>', 'Home shown', 'state (ready, empty, error, offline)'],
 ['<code>giving_campaign_open</code>', 'Campaign opened', 'campaign_id, from (featured_n, new_n, deep_link)'],
 ['<code>giving_category_select</code>', 'Way of giving tapped', 'category'],
 ['<code>giving_amount_select</code>', 'Amount chosen', 'kind (preset, custom), amount'],
 ['<code>giving_amount_error</code>', 'Pay tapped without a valid amount', 'reason (no_amount, over_max, offline)'],
 ['<code>giving_checkout_open</code>', 'Payment page opened', 'from (other_method, details_primary), amount'],
 ['<code>giving_pay_start</code>', 'A method is tapped', 'method (apple_pay, wallet, card), from, amount'],
 ['<code>giving_pay_blocked</code>', 'Wallet too low or offline', 'reason'],
 ['<code>giving_pay_result</code>', 'Provider answers', 'result (success, failed, expired), method, amount, latency_ms'],
])
strings = table(['Key', 'Arabic (source)', 'English (rebuilt)', 'Notes'], [
 ['giving.home.title', ar('نسك الإنسانية'), 'Nusuk Humanity', 'Product name as in Figma'],
 ['giving.home.search', ar('البحث'), 'Search', 'As drawn ' + A('H11')],
 ['giving.home.featured.label', ar('فرص مميزة'), 'Featured opportunities', 'Screen-reader label only'],
 ['giving.home.ways', ar('طرق العطاء'), 'Ways of giving', ''],
 ['giving.home.latest', ar('جديد الفرص'), 'New opportunities', ''],
 ['giving.home.more', ar('عرض المزيد'), 'Show more', ''],
 ['giving.home.empty.title', ar('لا توجد فرص تبرّع متاحة الآن'), 'No giving opportunities right now', 'Proposed'],
 ['giving.home.error', ar('تعذّر تحميل فرص التبرّع.'), 'Couldn’t load giving opportunities.', 'Proposed'],
 ['giving.card.remaining', ar('المبلغ المتبقي'), 'Still needed', ''],
 ['giving.card.collected', ar('تم جمع'), 'Raised', 'As drawn ' + A('H2')],
 ['giving.campaign.iftar.title', ar('سفرة صائم'), 'Iftar meal', 'Toolbar in Figma «سفر صائم» ' + A('H1')],
 ['giving.campaign.iftar.desc', ar('إفطار الصائمين في الحرمين الشريفين'), 'Iftar for fasting guests at the Two Holy Mosques', ''],
 ['giving.amount.title', ar('اختر مبلغ التبرع'), 'Choose an amount', 'As drawn'],
 ['giving.amount.other', ar('مبلغ آخر'), 'Other amount', ''],
 ['giving.cta.other_method', ar('اختر وسيلة تبرّع أخرى'), 'Choose another way to give', ''],
 ['pay.title', ar('التبّرع'), 'Give', 'As drawn; shadda misplaced ' + A('Q-02')],
 ['pay.total', ar('المبلغ الإجمالي'), 'Total', ''],
 ['pay.details', ar('التفاصيل'), 'Details', ''],
 ['pay.sum', ar('المجموع'), 'Total', ''],
 ['pay.terms', ar('بالمتابعة، فإنك توافق على %s'), 'By continuing, you agree to the %s', '%s = «الشروط والأحكام»'],
 ['pay.wallet', ar('ادفع %s عبر المحفظة'), 'Pay %s from wallet', ''],
 ['pay.wallet.balance', ar('رصيد المحفظة الحالي: %s'), 'Wallet balance: %s', ''],
 ['pay.or', ar('أو'), 'or', ''],
 ['pay.cards', ar('أو ادفع عبر'), 'Or pay with', 'Followed by network logos'],
 ['pay.failed.title', ar('مشكلة في الدفع'), 'Payment problem', 'DL template'],
 ['pay.failed.body', ar('تحقّق من بيانات بطاقتك، أو جرب طريقة أخرى لإكمال الدفع'), 'Check your card details, or try another way to pay', 'As drawn (the DL template writes «جرّب» and ends with a full stop)'],
 ['pay.failed.cta', ar('ادفع بطريقة أخرى'), 'Pay another way', ''],
 ['pay.expired.title', ar('انتهت مهلة الدفع'), 'Payment timed out', 'DL template'],
 ['pay.expired.body', ar('تعذر تأكيد الطلب لانتهاء الوقت المحدد'), 'The request couldn’t be confirmed because the time ran out', 'As drawn ' + A('Q-06')],
 ['pay.expired.cta', ar('طلب جديد'), 'New request', 'As drawn ' + A('H6', 'Q-06')],
 ['giving.success', ar('تمّ الدفع بنجاح'), 'Payment successful', 'As drawn ' + A('H7', 'Q-04')],
])
native = table(['Topic', 'iOS', 'Android'], [
 ['Tokens', '<code>NusukTokens.swift</code> (DL skill)', '<code>NusukTokens.kt</code>'],
 ['Charity Card', '<code>ZStack</code>: image, <code>LinearGradient</code> (clear 0.116 → white 0.729), blurred white <code>Ellipse</code>; row <code>HStack(spacing: 18)</code>', '<code>Box</code> + <code>Brush.verticalGradient</code>; blurred oval on API 31+; row <code>Row(spacedBy(18.dp))</code>'],
 ['Featured row', '<code>ScrollView(.horizontal)</code> + <code>.scrollTargetBehavior(.viewAligned)</code> (iOS 17) or paging fallback', '<code>HorizontalPager</code> with page spacing 8 dp and peek'],
 ['Amount input', '<code>.keyboardType(.numberPad)</code>; normalise Arabic-Indic digits to 0–9', '<code>KeyboardType.Number</code>; same normalisation'],
 ['Apple Pay / Google Pay', '<code>PKPaymentButton</code> (official artwork), <code>PKPaymentRequest</code>, 3-D Secure capability ' + A('F1', 'I2'), 'No Apple Pay; payment page with cards ' + A('F5') + '; Google Pay later only after nonprofit verification'],
 ['3-D Secure', '<code>ASWebAuthenticationSession</code> or provider SDK', 'Custom Tab or provider SDK'],
 ['Retries', 'Keep the donation id and idempotency key across app restarts until a final status', 'Same, in DataStore'],
 ['Direction and digits', 'RTL by locale; Western digits 0–9 in every language; riyal symbol before the amount in LTR runs', 'Same'],
 ['Accessibility', 'VoiceOver: ring reads «75٪ من الهدف»; selected amount <code>.isSelected</code>; 48 pt targets', 'TalkBack: <code>stateDescription</code>; 48 dp targets ' + A('I6')],
])
edge = table(['Case', 'Expected behaviour', 'Open'], [
 ['Double tap on pay', 'One donation, one charge (idempotency key)', A('D5')],
 ['App killed during 3-D Secure', 'On return, fetch status by donation id; never create a second donation', A('D5', 'D6')],
 ['Charged but the app shows failure', 'Webhook wins; status updates to succeeded; receipt appears in my donations', A('B6', 'K4')],
 ['Campaign fills while the person is on the page', 'On pay, the server answers “funded”; the page shows the funded state', A('B2')],
 ['Amount typed in Arabic-Indic digits', 'Stored and sent as 0–9', ''],
 ['Foreign card', 'Allowed or refused per the licence', A('A5', 'F2')],
 ['Guest (not signed in)', 'Sign-in before giving', A('A5')],
 ['Apple Pay not set up on the device', 'Use the payment page; no Apple Pay button', A('I2')],
 ['Wallet balance too low', 'Message under the wallet button; other methods stay', A('P3')],
 ['Refund requested', 'Through support, by policy', A('P2', 'K4')],
 ['Sacred window or ritual screen', 'Charity is never promoted there', A('P5')],
])
assume = table(['Assumed in this draft', 'Why it may change', 'Decided by'], [
 ['Payments run through a Nusuk gateway with wallet, Apple Pay and cards (as in Figma)', 'The 1447 iftar programme paid through Ehsan', A('D1')],
 ['An Apple-approved nonprofit stands behind every campaign', 'Required by App Review 3.2.1(vi)', A('F1', 'K1')],
 ['No VAT and no fees on a gift', 'Figma shows a VAT line', A('F4', 'P1')],
 ['Nothing is pre-selected', 'Figma selects 50', A('H4')],
 ['Whole riyals, 1 to 50,000', 'Placeholder', A('B5')],
 ['Funded campaigns stop taking gifts', 'Surplus rule not set', A('B2')],
 ['Totals come from the Nusuk backend via webhooks', 'Ehsan may hold them', A('B7', 'K3')],
 ['Android uses Figma’s spare «تبرع بـ [الإجمالي]» button and the payment page', 'My reading of an unlabelled frame', A('F5')],
 ['Headset = support widget; ticket = my donations', 'Icons have no labels in Figma', A('A6')],
 ['Event names as listed', 'The Notion event schema could not be read', A('I4')],
])
gates = table(['Gate', 'Status', 'Evidence'], [
 ['1 · Principles (Intuitive, Engaging, Intelligent)', '<span class="pill dl">Pass</span>', 'Prototype: one amount, one action; every screen earns an action; live totals and offline cache (Intelligent depends on ' + A('B7') + ')'],
 ['2 · Intent/desire and realm', '<span class="pill dl">Pass</span>', 'Classification above'],
 ['3 · Behavioural model in five parts', '<span class="pill dl">Pass</span>', 'Pattern row above; reviewer panel per stage'],
 ['4 · KPI pillar with threshold and guardrail', '<span class="pill pr">Partial</span>', 'Proposed in ' + A('J1') + '; not approved; no baseline'],
 ['5 · WCAG 2.2 AA', '<span class="pill pr">Partial</span>', 'Automated pass on the prototype (names, contrast, targets, keyboard order): fails 1.4.3 on the Charity Card remaining amount (2.5:1), the success NoticeBar title (2.5:1) and the Secondary Fate retry pill on the status sheets (3.5:1); toast close 19 × 19 under 2.5.8; DL 48 floor missed by toolbar buttons (44 × 38) and card arrows (42 × 30). Not tested: VoiceOver and TalkBack on devices, 200% text ' + A('H9', 'I6')],
 ['6 · DL and brand compliance', '<span class="pill pr">Partial</span>', 'DL components throughout; Proposed: two contracts, 320 card width, funded state; Figma-only pieces coded locally ' + A('H3', 'H5', 'H8')],
 ['7 · Research grounding', '<span class="pill pr">Partial</span>', 'Public sources on the iftar mechanism, the Fundraising Law, store rules; no user research with donors yet'],
 ['8 · Handoff (specs, tokens, states, edge cases)', '<span class="pill pr">Partial</span>', 'This page; 19 blockers open on the gaps page'],
])
plan = table(['Milestone', 'Dummy date', 'Needs'], [
 ['Blockers closed on the gaps page', '1 Dec 2026', '19 blockers, 5 required files'],
 ['Apple nonprofit approval filed; channel approval filed', '8 Dec 2026', A('F1', 'F2', 'K1')],
 ['Architecture and API contracts v1.0', '8 Dec 2026', A('D1', 'D2', 'D3', 'D5')],
 ['DL: Proposed pieces and contrast fix published in Figma', '15 Dec 2026', A('H3', 'H5', 'H8', 'H9')],
 ['Native sprint 1 (home, campaign)', '21 Dec 2026', A('B1', 'B4', 'B7')],
 ['Native sprint 2 (payment, receipts, my donations)', '4 Jan 2027', A('B6', 'D4', 'P3')],
 ['Payment certification and store review', '11–14 Jan 2027', A('F1', 'I2')],
 ['Launch the Iftar campaign', '18 Jan 2027', 'Ramadan 1448 expected around 8 Feb 2027 ' + A('A2')],
])
design_q = table(['#', 'Where (Figma)', 'As drawn and built', 'Conflict', 'Proposed answer', 'Owner'], [
 ['Q-01', fl('87401-38513', 'Charity_Details') + ' toolbar', ar('سفر صائم'), 'The card on the home page says ' + ar('سفرة صائم') + '.', 'One name everywhere: ' + ar('سفرة صائم') + '.', 'Content owner'],
 ['Q-02', fl('87418-5453', 'Charity_Payment') + ' toolbar', ar('التبّرع'), 'Shadda on the wrong letter.', ar('التبرّع') + '.', 'Content owner'],
 ['Q-03', fl('87418-5453', 'Charity_Payment') + ' › Details', ar('1x عنصر') + ', ' + ar('2x عنصر') + ', VAT, total', 'A donation is one line; whether VAT applies is a finance question ' + A('F4') + '.', 'One line with the campaign name and the total; a VAT row only if finance says so.', 'Finance, designer'],
 ['Q-04', fl('87427-7528', 'Payment confirmation toast'), ar('تمّ الدفع بنجاح'), 'Names the payment, not the gift ' + A('H7') + '.', ar('اكتمل تبرّعك.') + ' (a blessing only if the content owner wants it).', 'Content owner'],
 ['Q-05', fl('87427-7524', 'Payment failed sheet'), 'Fate pill ' + ar('ادفع بطريقة أخرى') + ' only', 'The register asks for a person within two taps on any failure; Fate is for removal only ' + A('H8') + '.', 'Primary ' + ar('ادفع بطريقة أخرى') + ' + Ghost ' + ar('تواصل مع الدعم') + '.', 'Designer, DL Manager'],
 ['Q-06', fl('87427-7526', 'Payment session expired sheet'), ar('طلب جديد') + ' · ' + ar('تعذر تأكيد الطلب لانتهاء الوقت المحدد'), 'A donation holds nothing, so “new request” is the wrong verb, and the person needs to know nothing was charged ' + A('H6', 'D6') + '.', ar('أعد المحاولة') + ' · ' + ar('انتهت مهلة إتمام الدفع، ولم يُخصم أي مبلغ.') + ' (true only if D6 holds).', 'Content owner, payments'],
 ['Q-07', fl('87401-38513', 'Charity_Details'), 'No message when there is no amount or it is too high', 'The main action stays enabled, so it must say what is missing ' + A('B5') + '.', 'Draw the inline error under the field: ' + ar('اختر مبلغ التبرع أو اكتب مبلغًا آخر.'), 'Designer'],
 ['Q-08', 'not in Figma', 'Only the states Figma draws are built', 'Missing: home loading, empty, error, offline; campaign fully funded; paying; wallet too low; offline on pay; every Android frame (no Apple Pay; the spare ' + fl('87419-10294', 'Sides Button') + ' has no screen).', 'Draw them before sprint 1; prototype v0.3 had a proposal for each.', 'Designer'],
 ['Q-09', 'all three screens', 'First Toolbar row sticks over a progressive blur; search scrolls away', 'Figma draws one scroll position; the scrolled Toolbar and Header Effect are not drawn.', 'Draw the scrolled frame of the home page.', 'Designer'],
 ['Q-10', 'all transitions', 'Standard iOS push, pop, edge-swipe back, sheet rise, toast drop', 'Figma has no prototype connections or motion specs.', 'Use the platform transitions, no custom motion; confirm.', 'Designer, iOS lead'],
])
motion = table(['Moment', 'iOS', 'Android', 'Prototype value'], [
 ['Push (home → campaign → payment)', 'UINavigationController push; in RTL the new screen enters from the left', 'Navigation default; in RTL from the left', '500 ms, cubic-bezier(.32,.72,0,1); the screen beneath moves 30% and dims 10%'],
 ['Pop', 'Back button or interactive swipe from the right edge (RTL)', 'System back, predictive back', 'Threshold 35% of the width or a flick; springs back below it'],
 ['Sheets (Apple Pay, failed, expired)', 'Sheet presentation from the bottom', 'ModalBottomSheet', 'Rise 500 ms; dismiss 300 ms ease-in; the scrim fades'],
 ['Success toast', 'Drops from the top under the status bar', 'Same', '500 ms in, 280 ms out, 6 s on screen'],
 ['Toolbar while scrolling', 'Only the first row stays; progressive blur behind it; the tint fades in once content is under it', 'Same; RenderEffect blur on Android 12+, a translucent fill below that', 'Blur layers blur-sm/md/lr with masks over 130 px; tint 35% screen-bk'],
 ['Tab Bar (Active = Empty, every screen)', 'Floats over the content; progressive blur rising from the bottom, never a solid fill; content ends at its top edge and scrolls under it; the home indicator stays above sheets', 'Same; edge-to-edge with a blurred or translucent navigation-bar scrim', 'Blur over 78 px (38 bar + 40 fade); tint 35% screen-bk; indicator 134 × 5 at 25 from the bar top ' + fl('87392-27297', 'Tab Bar')],
 ['Reduced motion', 'Cross-fade', 'Animator duration scale 0', 'All durations 1 ms'],
])
css = open('../q/index.html').read().split('<style>')[1].split('</style>')[0]
nav = [('canvas', 'Project canvas'), ('architecture', 'Architecture'), ('flow', 'End-to-end flow'), ('lifecycle', 'Donation lifecycle'), ('levels', 'Operating levels'), ('screens', 'Screens and components'), ('questions', 'Design questions'), ('motion', 'Motion and scrolling'), ('states', 'States per screen'), ('ac', 'Acceptance criteria'), ('contracts', 'API contracts'), ('events', 'Analytics events'), ('strings', 'String table'), ('native', 'Native notes'), ('edge', 'Edge cases'), ('assumptions', 'Assumptions'), ('gates', 'Quality gates'), ('plan', 'Plan')]
levels = table(['Level', 'Who', 'May do', 'Moves up when'], [
 ['L0 · Self-service', 'Receipt, my donations, help section', 'Show status, resend receipt, retry the same donation', 'Charged with no receipt, duplicate charge, refund request'],
 ['L1 · Nusuk Care Center ' + A('K4'), 'Care agents', 'Look up a donation, explain status, resend receipt', 'Money must move'],
 ['L2 · Payments operations', 'Finance and the provider', 'Reverse duplicates; refunds within policy ' + A('P2'), 'The policy does not cover the case'],
 ['L3 · Recipient and rule owner ' + A('K1', 'K2'), 'Licensed recipient, Ehsan, the Authority', 'Exceptions, surplus, cancelling a campaign', 'Final'],
])
doc = f'''<!DOCTYPE html>
<html lang="en" dir="ltr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Nusuk Charity · development handoff</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Sans+Arabic:wght@400;500&family=IBM+Plex+Mono:wght@500&display=swap">
<style>{css}
.doc{{display:grid;gap:36px;min-width:0}}
.doc section{{display:grid;gap:12px;scroll-margin-top:16px;min-width:0}}
.doc h2{{font:600 22px/1.25 var(--display);margin:0}}
.doc h3{{font:600 16px/1.3 var(--display);margin:8px 0 0}}
.doc p{{margin:0;max-width:78ch}}
.doc p.m{{color:var(--muted)}}
.tw{{overflow-x:auto;background:var(--paper);border:1px solid var(--line);border-radius:14px}}
table{{border-collapse:collapse;width:100%;font-size:13.5px;min-width:680px}}
th{{text-align:start;font-weight:500;color:var(--muted);padding:10px 14px;border-bottom:1px solid var(--line);white-space:nowrap}}
td{{padding:10px 14px;border-bottom:1px solid var(--line);vertical-align:top}}
tr:last-child td{{border-bottom:0}}
code{{font:500 12.5px var(--mono)}}
.arb{{font-family:"IBM Plex Sans Arabic",sans-serif;font-size:15px}}
pre{{margin:0;background:var(--ink);color:#f2f3f4;border-radius:14px;padding:16px;font:500 12.5px/1.55 var(--mono);overflow-x:auto}}
.q{{display:inline-block;font:500 11px var(--mono);background:var(--high-soft);color:var(--high);border-radius:6px;padding:2px 6px;margin:1px 0}}
.pr{{background:var(--high-soft);color:var(--high)}}.dl{{background:var(--ok-soft);color:var(--ok)}}.pv{{background:var(--info-soft);color:var(--info)}}
figure{{margin:0;background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:16px;overflow-x:auto}}
figure svg{{display:block;width:100%;min-width:760px;height:auto;color:var(--ink)}}
figcaption{{font-size:13px;color:var(--muted);margin-top:10px;max-width:84ch}}
svg .b{{fill:var(--paper);stroke:currentColor;stroke-width:1.2}}
svg .b.k{{fill:var(--gold-soft);stroke:var(--high)}}
svg .b.ok{{fill:var(--ok-soft);stroke:var(--ok)}}
svg .b.x{{fill:var(--blk-soft);stroke:var(--blk)}}
svg .b.q{{fill:var(--info-soft);stroke:var(--info)}}
svg .g{{fill:var(--bg);stroke:var(--line)}}
svg .t{{font:500 12px var(--body);fill:currentColor}}
svg .s{{font:400 10.5px var(--body);fill:var(--muted)}}
svg .l{{font:500 10.5px var(--body);fill:var(--muted)}}
svg .h{{font:600 12px var(--body);fill:var(--muted)}}
svg .a{{fill:none;stroke:currentColor;stroke-width:1.2}}
svg .a.d{{stroke-dasharray:4 4}}
.status{{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}}
.proto{{border:1px solid var(--line);border-radius:18px;overflow:hidden;background:#e5e5e5}}
.proto iframe{{display:block;width:100%;height:1000px;border:0}}
.protofull{{display:grid;gap:12px;margin-top:28px}}
.protofull h2{{font:600 22px/1.25 var(--display);margin:0}}
.protofull p.m{{color:var(--muted);margin:0;max-width:90ch}}
.jumps{{display:flex;flex-wrap:wrap;gap:8px}}
#questions td:first-child{{white-space:nowrap;font:500 12.5px var(--mono)}}
.banner{{background:var(--blk-soft);border-radius:14px;padding:12px 16px;font-size:14px}}
@media (max-width:860px){{.status{{grid-template-columns:repeat(2,1fr)}}}}
</style></head><body><div class="wrap">
<div class="top">
  <span class="kicker">Nusuk · Charity (نسك الإنسانية) · development handoff · draft 0.3 · 18 Nov 2026 · Figma kept as is; conflicts are design questions</span>
  <h1>Giving to a campaign: what to build, and what is still assumed</h1>
  <p class="lede">For the iOS and Android teams. Built from the Figma flow {fl('76438-60811', '🌱 Nusuk Charity')} with the coded Nusuk DL. All data is sample data and all dates are placeholders. An amber code such as <span class="q">D1</span> is a decision still open on the <a href="{GAPS}">gaps questionnaire</a>; the section changes when it closes.</p>
  <div class="status">
    <div class="tile blk"><span class="k">0 / 19</span><span class="l">Blockers closed</span></div>
    <div class="tile"><span class="k">0 / 65</span><span class="l">Open items closed</span></div>
    <div class="tile up"><span class="k">0 / 5</span><span class="l">Required files received</span></div>
    <div class="tile"><span class="k">3 / 8</span><span class="l">Quality gates passed</span></div>
  </div>
  <p class="banner"><b>Not ready to build from.</b> Screens and states are stable; who takes the money, who receives it and whether Apple Pay can ship are open ({A('D1', 'K1', 'F1', 'F2')}). <a href="{GAPS}">Open the gaps questionnaire</a>.</p>
</div>
<section id="prototype" class="protofull"><h2>Prototype</h2>
<p class="m">Built from Figma as drawn, clickable, with iOS motion: push and pop, swipe back from the right edge, sheets that rise and a toast that drops. Only the first Toolbar row stays while scrolling, over a progressive blur; the empty Tab Bar floats over the content with a progressive blur too. The panel switches the payment outcome and shows the contract, decision, pattern and payload per stage.</p>
<div class="jumps">{''.join(f'<a class="fbtn" href="prototype.html#{k}" target="proto">{t}</a>' for k, t in [('landing', 'Home'), ('details', 'Campaign'), ('applepay', 'Apple Pay'), ('payment', 'Payment'), ('failed', 'Failed'), ('expired', 'Expired'), ('done', 'Complete')])}</div>
<div class="proto"><iframe name="proto" src="prototype.html" title="Clickable prototype of Nusuk Charity"></iframe></div></section>
<div class="layout" style="margin-top:24px">
<nav id="nav" aria-label="Sections">
  {''.join(f'<a class="navlink" href="#{i}"><span class="nid">{n:02d}</span><span class="nt">{t}</span><span></span></a>' for n, (i, t) in enumerate(nav, 1))}
</nav>
<main class="doc">
<section id="canvas"><h2>Project canvas</h2>{canvas}<h3>Classification</h3>{classify}</section>



<section id="architecture"><h2>Architecture</h2>
<figure>{ARCH}<figcaption>The app talks to one Nusuk giving service. Dashed arrows are integrations that depend on another party; blue boxes are parties whose role is open. Whether Ehsan or a Nusuk provider takes the payment is the first decision {A('D1')}.</figcaption></figure>
<p>Three boundaries matter. The app never holds card data: Apple Pay tokens and 3-D Secure go to the provider through the orchestrator. Totals shown on cards come from one source {A('B7')}. The recipient and its licence are campaign data the app shows, not a choice it makes {A('F2')}.</p></section>

<section id="flow"><h2>End-to-end flow</h2>
<figure>{FLOW}<figcaption>Amber boxes change real records. On iOS, Apple Pay is on the campaign page; every other method, and Android, goes through the payment page. Failures and expiries retry with the same donation.</figcaption></figure></section>

<section id="lifecycle"><h2>Donation lifecycle</h2>
<h3>As reported for the Ramadan 1447 iftar programme</h3>
<figure>{LIFE}<figcaption>Public reports (January 2026): register on the Authority’s site, pay through Ehsan, Nusuk Foundation linked the two, then meals and a permit. That flow books a sufra; this one gives to a campaign. How the two relate is {A('K2', 'D1')}.</figcaption></figure>
<h3>What the system and the person see</h3>
<figure>{STATE}<figcaption>Proposed statuses {A('B3')}. The person sees: nothing while initiated, the provider page while awaiting 3-D Secure, {ar('«اكتمل تبرّعك.»')} on success, the failed or expired sheet otherwise.</figcaption></figure></section>

<section id="levels"><h2>Operating levels</h2>{levels}</section>
<section id="screens"><h2>Screens and components</h2>{screens}
<p class="m">DL = published Nusuk DL component. DL · Figma only = in the Figma library but not in the coded bundle (coded locally in the prototype). Proposed = not in the DL; needs a request to the DL Manager.</p></section>
<section id="questions"><h2>Design questions</h2><p class="m">Figma is kept as is: every place where the file and the DL, the writing guide or the register disagree is built as drawn and raised here, one row per conflict. Answer in Figma; the prototype follows.</p>{design_q}</section>
<section id="motion"><h2>Motion and scrolling</h2><p class="m">Platform transitions, not custom ones. The values are what the prototype uses to imitate iOS; native code uses the system animations.</p>{motion}</section>
<section id="states"><h2>States per screen</h2><p class="m">Only the states Figma draws. The rest are listed, not invented {A('Q-08')}.</p>{states}</section>
<section id="ac"><h2>Acceptance criteria</h2>{ac}</section>
<section id="contracts"><h2>API contracts (draft, sample data)</h2>{api}
<h3>Donation: sample record</h3><pre>{E(payload)}</pre></section>
<section id="events"><h2>Analytics events</h2>{events}
<p class="m">Report payment success only next to duplicate charges, refunds and complaints {A('J1')}.</p></section>
<section id="strings"><h2>String table</h2>{strings}
<p class="m">Arabic is the source; English is rebuilt from it. Western digits 0–9 in both. Keep <code>%s</code> exactly as written.</p></section>
<section id="native"><h2>Native notes</h2>{native}</section>
<section id="edge"><h2>Edge cases</h2>{edge}</section>
<section id="assumptions"><h2>Assumptions register</h2>{assume}</section>
<section id="gates"><h2>Quality gates</h2>{gates}</section>
<section id="plan"><h2>Plan (dummy dates)</h2>{plan}
<p class="m">Dates show the sequence only; they move once the blockers have owners. No Figma frames were pushed from this handoff.</p></section>
<p class="m" style="font-size:13px">Sources: <a href="https://www.arabnews.pk/node/2630469">Arab News, iftar digital mechanism (Jan 2026)</a> · <a href="https://cairoscene.com/Buzz/Digital-Platform-Streamlines-Ramadan-Iftar-at-the-Holy-Mosques">Cairoscene</a> · <a href="https://www.okaz.com.sa/local/na/2232347">Okaz, Ehsan and Nusuk Humanitarian Foundation</a> · <a href="https://www.alwatan.com.sa/article/1176559">Alwatan, Madinah iftar meal price</a> · <a href="https://www.uqn.gov.sa/details?p=25374">Umm Al-Qura, Fundraising Law</a> · <a href="https://www.okaz.com.sa/local/saudi-arabia/2248848">Okaz, executive regulation</a> · <a href="https://developer.apple.com/apple-pay/nonprofits/">Apple Pay for nonprofits</a> · <a href="https://zatca.gov.sa/en/HelpCenter/guidelines/Documents/Guideline-for-VAT-Refund-for-the-Non-Profit-Sector.pdf">ZATCA non-profit VAT guideline</a></p>
</main></div></div></body></html>'''
open('index.html', 'w').write(doc); print(len(doc))
