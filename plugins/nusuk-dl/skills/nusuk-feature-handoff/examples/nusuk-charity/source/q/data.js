/* Nusuk Charity (نسك الإنسانية): gaps questionnaire data. Schema in the starter kit's data.js header.
   Built 17 Nov 2026 from the Figma flow 🌱 Nusuk Charity (cBtXOQA9rgnQVmCMgx3UA8 · 87401:38512, 87427:7523) and the prototype draft 0.1. */
window.QMETA = {
  key: 'nusuk-charity',
  title: 'Nusuk Charity',
  kicker: 'Nusuk · Charity (نسك الإنسانية) · gaps before native handoff · draft 0.1 · 17 Nov 2026',
  h1: 'What we still need before iOS and Android can build giving',
  lede: 'Each item is something the Figma flow or the prototype had to assume: a rule, an integration, a party, a word. Each has a proposed answer you can accept, change or assign to someone. Where a file is required, attach it. The owner ticks “Approved by the owner” to sign it off; only approved answers move into the handoff and the decisions register.',
  unlocks: [
    '<li><b>Payment architecture</b> (who takes the money, through which gateway) · <code>D1</code> <code>D3</code> <code>K1</code> <code>K3</code></li>',
    '<li><b>Whether the Apple Pay button can ship at all</b> on iOS · <code>F1</code> <code>D3</code></li>',
    '<li><b>The Android payment route</b> · <code>F5</code> <code>I2</code></li>',
    '<li><b>Legality of in-app fundraising</b> and the licence shown on each campaign · <code>F2</code> <code>K1</code></li>',
    '<li><b>The payment widget content</b> (VAT line, fees, wallet) · <code>F4</code> <code>P1</code> <code>P3</code></li>',
    '<li><b>Campaign and donation models</b>, statuses and receipts · <code>B1</code> <code>B2</code> <code>B3</code> <code>B6</code></li>',
    '<li><b>Amount rules</b> on the campaign page · <code>B4</code> <code>B5</code> <code>H4</code></li>',
    '<li><b>What 50 riyals buys</b> on an Iftar campaign · <code>K2</code></li>',
    '<li><b>Launch date</b> against Ramadan 1448 · <code>A2</code></li>',
    '<li><b>Copy and DL changes</b> before Figma is final · <code>H1</code>–<code>H11</code></li>'
  ].join(''),
  parties: '<thead><tr><th>Party</th><th>Role in this flow (as read from public sources; to confirm)</th><th>Must answer</th></tr></thead><tbody>' +
    '<tr><td>Nusuk product (IX Studio, DX)</td><td>Owns the experience, scope and rollout</td><td>A, B, H, J</td></tr>' +
    '<tr><td>Nusuk Foundation (مؤسسة نسك الإنسانية)</td><td>Named with Ehsan and the Authority in the Ramadan 1447 iftar programme; its role here (platform, recipient, or both) is open</td><td>K1, F1, F2</td></tr>' +
    '<tr><td>Ehsan, National Platform for Charitable Work (SDAIA)</td><td>Processed iftar donation payments in 1447; may be the payment channel and the listing of record</td><td>D1, K3, B7</td></tr>' +
    '<tr><td>General Authority for the Care of the Two Holy Mosques</td><td>Owns iftar rules in both mosques: permits, approved meals, locations, prices</td><td>K2</td></tr>' +
    '<tr><td>National Center for Non-Profit Sector Development (NCNP)</td><td>Licenses fundraising and electronic fundraising channels under the Fundraising Law</td><td>F2</td></tr>' +
    '<tr><td>ZATCA</td><td>VAT treatment of donations</td><td>F4</td></tr>' +
    '<tr><td>Apple and Google</td><td>Store rules for in-app donations (approved nonprofits, Apple Pay, Play billing)</td><td>F1, F5</td></tr>' +
    '<tr><td>Payment provider and acquirer</td><td>Card, mada and Apple Pay processing; merchant of record; 3-D Secure; settlement</td><td>D3, D4, D6, P4</td></tr>' +
    '<tr><td>Nusuk Care Center</td><td>Donor questions, failed or duplicate charges, refunds</td><td>K4, P2</td></tr>' +
    '<tr><td>Religious content owners</td><td>Kaffara and any faith text on campaign pages</td><td>R1, R2, R3</td></tr></tbody>',
  levels: '<thead><tr><th>Level</th><th>Who</th><th>May do</th><th>Moves up when</th></tr></thead><tbody>' +
    '<tr><td>L0 · Self-service</td><td>The app: receipt, donation history, help section</td><td>Show status and receipt; retry a failed payment with the same donation</td><td>Charged but no receipt, duplicate charge, refund request</td></tr>' +
    '<tr><td>L1 · Nusuk Care Center</td><td>Care agents <code>K4</code></td><td>Look up a donation, resend a receipt, explain status</td><td>Money must move (refund, reversal)</td></tr>' +
    '<tr><td>L2 · Payments operations</td><td>Finance and the payment provider</td><td>Reverse duplicates, issue refunds within policy <code>P2</code></td><td>The policy does not cover the case</td></tr>' +
    '<tr><td>L3 · Recipient and rule owner</td><td>Licensed recipient, Ehsan, the Authority <code>K1</code> <code>K2</code> <code>K3</code></td><td>Decide exceptions, surplus use, campaign cancellation</td><td>Final</td></tr></tbody>'
};

window.QSECTIONS = [
  { id: 'A', title: 'Scope and rollout', blurb: 'What ships first, for whom, on which surfaces, and by when.' },
  { id: 'B', title: 'Domain model', blurb: 'What a campaign and a donation are, their statuses, amounts and receipts.' },
  { id: 'D', title: 'Integrations and data', blurb: 'Who takes the money, through which systems, and where totals come from.' },
  { id: 'F', title: 'Privacy, legal and store rules', blurb: 'Fundraising law, Apple and Google rules, PDPL, tax.' },
  { id: 'P', title: 'Payments, fees, refunds and receipts', blurb: 'The money side of giving: fees, wallet, refunds, settlement.' },
  { id: 'G', title: 'Notifications', blurb: 'What reaches the donor after giving, and what never does.' },
  { id: 'R', title: 'Religious review and sacred placement', blurb: 'Kaffara, zakat, faith text, and where giving may appear.' },
  { id: 'H', title: 'Design Language and content', blurb: 'Copy fixes, Proposed pieces and DL defects found in the Figma flow.' },
  { id: 'I', title: 'Native and engineering', blurb: 'Stack, payment SDKs, offline, analytics, accessibility.' },
  { id: 'J', title: 'Measurement', blurb: 'Targets with guardrails, and who signs them off.' },
  { id: 'K', title: 'Parties and decision rights', blurb: 'Who owns the rule, who receives the money, who answers the donor.' }
];

window.QUESTIONS = [
  /* A · Scope */
  { id: 'A1', sec: 'A', p: 'Blocker', owner: 'Product', type: 'multi', q: 'Which ways of giving ship in v1?',
    why: 'Figma shows six categories. Each one needs a recipient, rules and content; kaffara also needs religious review (R1).',
    poc: 'Campaigns (the Iftar campaign) are clickable; the six category tiles open nothing.',
    opts: ['Campaigns (e.g. سفرة صائم)', 'الصدقة · general sadaqa', 'تبرع بزمزم · Zamzam water', 'الحالات الإنسانية · humanitarian cases', 'الكفارة · kaffara', 'الإغاثة · relief', 'فك كربة · debt relief'] },
  { id: 'A2', sec: 'A', p: 'Blocker', owner: 'Product · Partnerships', type: 'text', q: 'What is the launch date, and must the Iftar campaign be live before Ramadan 1448?',
    why: 'The campaign is tagged «حملة رمضان 1448هـ». Ramadan 1448 is expected to begin around 8 February 2027 (Umm al-Qura to confirm). Store review, Apple nonprofit approval and the payment integration all sit on that path.',
    poc: 'No date.', after: ['F1', 'D1'] },
  { id: 'A3', sec: 'A', p: 'Medium', owner: 'Product', type: 'multi', q: 'Which surfaces at launch?',
    why: 'Decides the native builds and whether Apple Pay, Google Pay or card only is needed.', poc: 'iPhone-first with an Android variant.',
    from: 'Standard ruled 18 Oct 2026: iPhone-first, Android following.', opts: ['iOS app', 'Android app (Google services)', 'Android on Huawei (HMS)', 'Nusuk web'] },
  { id: 'A4', sec: 'A', p: 'Medium', owner: 'Product', type: 'multi', q: 'Which languages at launch?', why: 'Each language needs campaign content and QA.',
    poc: 'Arabic only.', from: 'Standard ruled 18 Oct 2026: design QA covers Arabic and English only.', opts: ['Arabic', 'English', 'Urdu', 'Indonesian', 'Other'] },
  { id: 'A5', sec: 'A', p: 'High', owner: 'Product · Legal', type: 'single', q: 'Who may give?',
    why: 'Receipts need an identity; foreign cards may need approval under the Fundraising Law’s executive regulation, which adds a committee review for donations from outside the Kingdom.',
    poc: 'A signed-in person anywhere, any card.', after: ['F2'],
    opts: ['Signed-in Nusuk users, any card', 'Signed-in users, cards issued in Saudi Arabia only', 'Anyone, including guests with Apple Pay'] },
  { id: 'A6', sec: 'A', p: 'Medium', owner: 'Product', type: 'text', q: 'What do the two toolbar icons on the home page open?',
    why: 'Figma shows a headset and a ticket glyph with no labels. Every icon must match its label, and a person must be reachable within two taps.',
    poc: 'Read as «الدعم» (support widget) and «تبرعاتي» (my donations); neither screen is designed.' },
  { id: 'A7', sec: 'A', p: 'Medium', owner: 'Product', type: 'multi', q: 'Where can a person enter Nusuk Charity?',
    why: 'Placement decides reach and the ethical limits (M9S: charity is B.4, tier T2; never on ritual screens).', poc: 'Entry not shown.',
    opts: ['Services on Home', 'Today, in Ramadan only (P2, no push)', 'Campaign deep links', 'After an Iftar permit is issued', 'Search'] },

  /* B · Domain */
  { id: 'B1', sec: 'B', p: 'Blocker', owner: 'Product · Engineering', type: 'text', upload: 'required', q: 'Upload the campaign data model.',
    why: 'Cards and the campaign page need: title, description, tag, icon, image and alt text, goal, collected, end date, category, licensed recipient and licence number, presets, status.',
    poc: 'Sample: goal 4,000, collected 3,000, tag «حملة رمضان 1448هـ».' },
  { id: 'B2', sec: 'B', p: 'Blocker', owner: 'Product · Finance', type: 'single', q: 'What happens when a campaign reaches its goal?',
    why: 'The law requires funds to be spent per the donor’s conditions, so taking money past the goal needs a stated surplus rule.',
    poc: 'A Proposed “fully funded” state closes giving and offers other campaigns.',
    opts: ['Close giving at 100% and point to open campaigns', 'Keep accepting; surplus goes to a stated similar cause', 'Raise the goal (owner decides)'] },
  { id: 'B3', sec: 'B', p: 'High', owner: 'Engineering · Finance', type: 'multi', q: 'Which donation statuses exist?',
    why: 'The app, receipts and support need one list mapped to the payment system’s states.', poc: 'Initiated, succeeded, failed, expired.',
    opts: ['Initiated', 'Awaiting 3-D Secure', 'Succeeded', 'Failed', 'Expired', 'Refunded', 'Partly refunded', 'Disputed'] },
  { id: 'B4', sec: 'B', p: 'High', owner: 'Product', type: 'single', q: 'Where do the preset amounts (50, 100, 250) come from?',
    why: 'An Iftar meal and a Zamzam case have different natural amounts.', poc: '50, 100, 250 for every campaign.',
    opts: ['Per campaign, from the CMS', 'One global set', 'Per category'] },
  { id: 'B5', sec: 'B', p: 'Blocker', owner: 'Finance · Payments', type: 'text', q: 'What are the minimum and maximum per donation, and are halalas allowed?',
    why: 'Validation and error copy depend on it. Ehsan states no minimum or maximum; the provider and anti-fraud rules still set one.',
    poc: 'Whole riyals, 1 to 50,000.' },
  { id: 'B6', sec: 'B', p: 'Blocker', owner: 'Product · Finance', type: 'multi', q: 'What receipt does the donor get?',
    why: 'Figma ends at a toast; there is no receipt or history screen.', poc: 'Toast «اكتمل تبرّعك.» only.',
    opts: ['In-app receipt page', 'PDF receipt', 'Receipt by SMS', 'Receipt by email', 'Entry in «تبرعاتي»'] },
  { id: 'B7', sec: 'B', p: 'High', owner: 'Engineering', type: 'single', q: 'Which system holds the campaign totals shown on cards?', after: ['D1'],
    why: 'Collected and remaining must be the live totals (Charity Card rule). If Ehsan lists the same campaign, two totals would disagree.', poc: 'Static sample totals; the gift is added locally after success.',
    opts: ['The payment channel (e.g. Ehsan), polled', 'Nusuk backend, updated by payment webhooks', 'CMS, updated by hand'] },
  { id: 'B8', sec: 'B', p: 'Medium', owner: 'Product', type: 'multi', q: 'Which giving options come after v1?', why: 'Each changes the model and the campaign page.', poc: 'None.',
    opts: ['Give on behalf of someone (إهداء)', 'Hide my name from the recipient', 'Recurring giving', 'Share a campaign link', 'Corporate giving'] },
  { id: 'B9', sec: 'B', p: 'Medium', owner: 'Product', type: 'single', q: 'How is a campaign end date shown?', why: 'Countdowns and “last chance” are banned (M4).',
    poc: 'Not shown.', from: 'Template contract service-landing rule: a real end date is written as a date, no timer.', opts: ['As a date in words', 'Not shown'] },

  /* D · Integrations */
  { id: 'D1', sec: 'D', p: 'Blocker', owner: 'Engineering · Finance', type: 'single', q: 'Which system takes the payment?',
    why: 'In Ramadan 1447 the Authority’s iftar programme took payment through Ehsan, with Nusuk Foundation linking the two. Figma instead shows the Nusuk wallet, Apple Pay and cards inside Nusuk.',
    poc: 'A Nusuk gateway with wallet, Apple Pay and cards.',
    opts: ['Ehsan as the payment channel, called from Nusuk', 'Nusuk payment gateway, settling to the licensed recipient', 'Both: Nusuk wallet in Nusuk, cards and Apple Pay through Ehsan'] },
  { id: 'D2', sec: 'D', p: 'Blocker', owner: 'Engineering', type: 'text', upload: 'required', q: 'Upload the API specification for campaigns and donations.', after: ['D1'],
    why: 'Native teams build from it. The handoff drafts: home, campaign, create donation, pay, status, receipt.', poc: 'Mocked endpoints with sample payloads.' },
  { id: 'D3', sec: 'D', p: 'Blocker', owner: 'Finance · Partnerships', type: 'text', q: 'Who is the merchant of record, and what name appears on the Apple Pay sheet and the card statement?', after: ['K1'],
    why: 'Apple Pay donations need an approved nonprofit as merchant; the name must match the recipient the donor chose.', poc: '“NUSUK · سفرة صائم” on the mock sheet.' },
  { id: 'D4', sec: 'D', p: 'High', owner: 'Payments', type: 'multi', q: 'Which methods and networks are accepted?', after: ['D1'],
    why: 'Figma shows the Nusuk wallet, Apple Pay and four card logos (Amex, Mastercard, Visa, mada).', poc: 'All of them.',
    opts: ['Nusuk wallet', 'Apple Pay', 'mada', 'Visa', 'Mastercard', 'American Express', 'Google Pay', 'STC Pay'] },
  { id: 'D5', sec: 'D', p: 'Blocker', owner: 'Engineering', type: 'single', q: 'How are duplicate charges prevented on retry?',
    why: 'Failure and expiry both offer a retry. A donor charged twice is the worst outcome of this flow.', poc: 'One donation id per attempt chain.',
    opts: ['One donation id per attempt chain, with an idempotency key per payment call', 'A new donation per attempt; the provider deduplicates'] },
  { id: 'D6', sec: 'D', p: 'High', owner: 'Engineering · Payments', type: 'text', q: 'What makes a payment session expire, and after how long?',
    why: 'A donation holds no inventory, so the expiry sheet comes from the provider (e.g. 3-D Secure left open). The copy says nothing was charged; that must be true.', poc: '15 minutes, nothing charged.' },
  { id: 'D7', sec: 'D', p: 'Medium', owner: 'Engineering · Content', type: 'single', q: 'Where are campaigns and categories authored?',
    why: 'Copy, images, presets and order need an owner and a tool.', poc: 'Hard-coded.', opts: ['Nusuk CMS (Strapi)', 'Ehsan listing, read by Nusuk', 'Partner portal'] },
  { id: 'D8', sec: 'D', p: 'Medium', owner: 'Content · Legal', type: 'text', q: 'Who supplies campaign photos, with rights and alt text?',
    why: 'Photos of real people at the Haram need consent and rights; every image needs alt text.', poc: 'Images cropped from Figma.' },

  /* F · Legal */
  { id: 'F1', sec: 'F', p: 'Blocker', owner: 'Legal · Partnerships', type: 'single', upload: 'required', q: 'Which approved nonprofit stands behind in-app donations on iOS?',
    why: 'App Review 3.2.1(vi): only approved nonprofits may fundraise in an app, with Apple Pay support; a platform listing other nonprofits must make sure each one is approved. Without it the iOS build is rejected.',
    poc: 'Apple Pay shown everywhere.',
    opts: ['Nusuk Foundation, approved by Apple for every campaign it lists', 'Each recipient approved separately', 'iOS sends donors to the web (Safari) to give'] },
  { id: 'F2', sec: 'F', p: 'Blocker', owner: 'Legal', type: 'text', upload: 'required', q: 'Upload the fundraising licence for each campaign, and the approval for the Nusuk app as an electronic channel.',
    why: 'The Fundraising Law (Council of Ministers decision 116) and its executive regulation limit fundraising to licensed entities and require approval before collecting through electronic channels.',
    poc: 'No licence shown.' },
  { id: 'F3', sec: 'F', p: 'High', owner: 'Legal · Privacy', type: 'single', q: 'What donor data goes to the recipient?',
    why: 'PDPL: share the minimum. Receipts and reconciliation need some of it.', poc: 'Nothing beyond amount and campaign.',
    opts: ['Amount and campaign only (donor anonymous to the recipient)', 'Name and amount, if the donor agrees', 'Name, phone and amount'] },
  { id: 'F4', sec: 'F', p: 'Blocker', owner: 'Finance · Tax', type: 'single', q: 'Does VAT apply to these donations?',
    why: 'Figma’s payment details list a VAT line «ضريبة القيمة المضافة %s%%». A gift with nothing in return is usually outside VAT scope, but this is for the tax team to confirm.',
    poc: 'No VAT line.', opts: ['No VAT: remove the line', 'VAT applies to a fee only: show the fee and its VAT', 'VAT applies'] },
  { id: 'F5', sec: 'F', p: 'Blocker', owner: 'Legal · Engineering', type: 'single', q: 'How does Android take donations?',
    why: 'Google Play billing must not be used for tax-exempt donations; the Google Pay API is open to nonprofits that prove their status. Figma has no Android path.',
    poc: 'Figma’s spare «تبرع بـ [الإجمالي]» button opens the payment page (cards and wallet).',
    opts: ['Payment page with cards and wallet only', 'Add Google Pay after nonprofit verification', 'Send donors to the web'] },
  { id: 'F6', sec: 'F', p: 'High', owner: 'Legal', type: 'text', upload: 'required', q: 'Upload the terms and conditions for donations.',
    why: 'The payment widget links to them. They must cover use of funds, surplus, refunds and data.', poc: 'Link opens nothing.' },

  /* P · Payments */
  { id: 'P1', sec: 'P', p: 'Blocker', owner: 'Finance', type: 'single', q: 'Does the donor pay any fee, or does any party deduct one?',
    why: 'Hidden fees are a red line (M4). A deduction must be stated before payment.', poc: 'No fee.',
    opts: ['No fee, nothing deducted', 'No donor fee; a stated share covers costs', 'A donor fee shown before payment'] },
  { id: 'P2', sec: 'P', p: 'Blocker', owner: 'Finance · Legal', type: 'text', q: 'What is the refund policy for donations?',
    why: 'Cases: duplicate charge, wrong amount, cancelled campaign, donor regret. Support levels L1–L3 depend on it.', poc: 'Not covered.' },
  { id: 'P3', sec: 'P', p: 'High', owner: 'Finance', type: 'single', q: 'Can the Nusuk wallet pay for donations, and where do refunds go?',
    why: 'Figma makes the wallet the first button. Wallet money may not settle to a third-party recipient.', poc: 'Wallet pays; balance 320 or 20.', after: ['D1'],
    opts: ['Wallet pays; refunds return to the wallet', 'Wallet pays; refunds return to the source', 'Wallet not used for donations'] },
  { id: 'P4', sec: 'P', p: 'High', owner: 'Finance', type: 'text', q: 'How and when are funds settled to the recipient, and who reconciles?', why: 'Totals, receipts and refunds depend on it.', poc: 'Not modelled.' },
  { id: 'P5', sec: 'P', p: 'Medium', owner: 'Product', type: 'single', q: 'Where may charity campaigns be promoted inside Nusuk?',
    why: 'Charity is a spiritual act with a commercial rail: never in sacred windows, at rite steps or above band 5; no offers in pre-desire.', poc: 'Only inside Nusuk Charity.',
    from: 'DESIGN.md M4 and M9S (Appendix B, B.4 and C.1).', opts: ['Inside Nusuk Charity and services only', 'Also Today in Ramadan, band 5 or lower, no push'] },

  /* G · Notifications */
  { id: 'G1', sec: 'G', p: 'High', owner: 'Product · CX', type: 'multi', q: 'Which messages follow a donation?', after: ['B6'],
    why: 'A receipt is expected; anything more risks pressure.', poc: 'None.',
    opts: ['Receipt (transactional)', 'Campaign completed (opt-in, once)', 'Impact report (opt-in)', 'Reminders to give again'] },
  { id: 'G2', sec: 'G', p: 'Medium', owner: 'Product', type: 'single', q: 'May Nusuk send promotional pushes for charity campaigns in Ramadan?',
    why: 'Ramadan is the largest re-engagement window and the most damaged by a commercial push (M9S C.1).', poc: 'No pushes.',
    from: 'DESIGN.md M9S C.1 and M4 (no urgency on a spiritual decision).', opts: ['No promotional pushes', 'One opt-in reminder per season, no urgency'] },

  /* R · Religious */
  { id: 'R1', sec: 'R', p: 'Blocker', owner: 'Religious content · Product', type: 'single', q: 'Can kaffara ship, and who sets its kinds and amounts?', after: ['A1'],
    why: 'Kaffara has kinds and fixed amounts that differ by ruling; the app must not issue rulings or favour a madhab (M4).', poc: 'A tile only.',
    opts: ['Not in v1', 'In v1 with amounts set by the competent religious authority, cited on the page'] },
  { id: 'R2', sec: 'R', p: 'High', owner: 'Religious content · Finance', type: 'single', q: 'Is zakat collected anywhere in this flow?',
    why: 'Zakat has eligible recipients and rules that sadaqa does not; mixing them misleads donors.', poc: 'No zakat.', opts: ['No zakat; label sadaqa clearly', 'A separate zakat path with its own rules'] },
  { id: 'R3', sec: 'R', p: 'Medium', owner: 'Content', type: 'text', q: 'Will campaign pages carry a verse or hadith, and who approves it?',
    why: 'Faith text uses approved wording with its source, kept apart from the pay button (M6).', poc: 'None.' },
  { id: 'R4', sec: 'R', p: 'Medium', owner: 'Product', type: 'single', q: 'May the app show donor counts, names or rankings?',
    why: 'Feeds of other people’s worship and ranks are red lines; the Charity Card forbids donor names, counts and ranks.', poc: 'None shown.',
    from: 'Charity Card rules (DL, 17 Nov 2026) and M4.', opts: ['None', 'Total donors as a number only'] },

  /* H · DL and content */
  { id: 'H1', sec: 'H', p: 'High', owner: 'Content', type: 'single', q: 'What is the campaign’s name?', why: 'Card «سفرة صائم», page title «سفر صائم», description «مبادرة إفطار صائم».', poc: '«سفرة صائم» everywhere.',
    opts: ['سفرة صائم', 'إفطار صائم', 'سفر الإفطار'] },
  { id: 'H2', sec: 'H', p: 'Medium', owner: 'Content', type: 'single', q: 'Which label replaces «تم جمع» on the Charity Card?', why: 'The writing guide avoids تم (DL known issue F109).', poc: '«جُمع حتى الآن».',
    opts: ['جُمع حتى الآن', 'المبلغ المجموع', 'Keep «تم جمع»'] },
  { id: 'H3', sec: 'H', p: 'Medium', owner: 'DL', type: 'single', q: 'The featured row shows Charity Cards at 320 wide; the DL card is 386. Which is right?', why: 'A width that is not in the DL is a Proposed variant.', poc: '320 in a sideways row with a peek.',
    opts: ['Register a 320 sideways variant', 'Use 386 with pagination, no peek', 'Use the ADS card size (343 × 364) for featured'] },
  { id: 'H4', sec: 'H', p: 'Medium', owner: 'Product · DL', type: 'single', from: 'DESIGN.md M4 (nothing pre-selected) and the item-details options rule.', q: 'Should an amount be selected when the page opens?', why: 'Figma shows 50 selected. Pre-selection is a red line for add-ons and a contract rule for options; for a gift it nudges the amount.',
    poc: 'Nothing selected; the button says what is missing.', opts: ['Nothing selected', 'The smallest preset selected'] },
  { id: 'H5', sec: 'H', p: 'High', owner: 'DL', type: 'single', q: 'Approve two Proposed template contracts: giving-landing and giving-details?',
    why: 'No contract fits a giving flow (DESIGN.md M9T worked example). The handoff drafts both.', poc: 'Built as Proposed.', opts: ['Approve as drafted', 'Approve with changes', 'Fold into service-landing and item-details'] },
  { id: 'H6', sec: 'H', p: 'Medium', owner: 'Content', type: 'single', q: 'What does the primary button on the expiry sheet say?', why: 'Figma: «طلب جديد»; DL template: «حجز جديد». A donation is neither.', poc: '«أعد المحاولة», with «ولم يُخصم أي مبلغ».',
    opts: ['أعد المحاولة', 'تبرّع من جديد', 'طلب جديد'] },
  { id: 'H7', sec: 'H', p: 'Medium', owner: 'Content · Religious content', type: 'single', q: 'What does the success message say?', why: 'Figma: «تم الدفع بنجاح». House rules: no تم; success is calm.', poc: '«اكتمل تبرّعك.»',
    opts: ['اكتمل تبرّعك.', 'اكتمل تبرّعك. تقبّل الله منك.', 'وصل تبرّعك.'] },
  { id: 'H8', sec: 'H', p: 'Medium', owner: 'DL · Engineering', type: 'multi', q: 'Which DL gaps found in this flow get fixed?', why: 'Native teams need coded pieces that match Figma.', poc: 'Coded locally in the prototype.',
    opts: ['Payment widget into the coded package', 'Select Card “Details” variant (riyal + amount, no title)', 'Rename the status sheets (named “Golf Carts_…” in this file)', 'Retry button not Fate (F76)'] },
  { id: 'H9', sec: 'H', p: 'High', owner: 'DL · QA', type: 'single', q: 'How is the contrast of gold amounts and green success text fixed?',
    why: 'Measured in the prototype: the Charity Card remaining amount (text-link #D99726 on white) is 2.5:1 and the success NoticeBar title is 2.5:1; WCAG 1.4.3 needs 4.5:1 at these sizes.', poc: 'As in the DL.',
    opts: ['A darker text token for amounts and success text', 'Keep the colour; add the amount in text-content beside it', 'Raise to large text (24 and up), needing 3:1'] },
  { id: 'H10', sec: 'H', p: 'Medium', owner: 'Content · Brand', type: 'text', q: 'Supply the missing category illustrations and settle the tile labels.',
    why: 'الكفارة، الإغاثة، فك كربة have no exported artwork; «تبرع بزمزم» is a verb among nouns (house term: ماء زمزم).', poc: 'DL icons stand in.' },
  { id: 'H11', sec: 'H', p: 'Medium', owner: 'Content', type: 'text', q: 'What does the search placeholder say?', from: 'Template contract service-landing: the placeholder names what can be searched.', why: 'Contract rule: the placeholder names what can be searched. Figma: «البحث».', poc: '«ابحث عن فرصة تبرّع».' },

  /* I · Native */
  { id: 'I1', sec: 'I', p: 'High', owner: 'Engineering', type: 'single', q: 'Which stack and OS floors?', why: 'Decides PassKit and Compose APIs.', poc: 'SwiftUI and Jetpack Compose; iOS 16, Android 9.',
    opts: ['SwiftUI + Compose, iOS 16 / Android 9', 'Existing app stack, its floors'] },
  { id: 'I2', sec: 'I', p: 'High', owner: 'Engineering', type: 'text', q: 'Confirm the Apple Pay integration details.', after: ['F1', 'D3'],
    why: 'PassKit needs a merchant id per recipient or a platform merchant, networks and capabilities (3-D Secure).', poc: 'One merchant, mada / Visa / Mastercard / Amex.' },
  { id: 'I3', sec: 'I', p: 'Medium', owner: 'Engineering', type: 'single', q: 'What works offline?', why: 'Pilgrims lose signal in crowds.', poc: 'Last home shown with a notice; giving needs a connection.',
    opts: ['Cached home and campaign pages; giving needs a connection', 'Nothing cached'] },
  { id: 'I4', sec: 'I', p: 'High', owner: 'Data', type: 'text', upload: 'optional', q: 'Map the proposed analytics events to the Notion event schema.',
    why: 'The Notion schema could not be read from this session; event names in the handoff are proposals.', poc: 'giving_home_view, giving_campaign_open, giving_amount_select, giving_pay_start, giving_pay_result…' },
  { id: 'I5', sec: 'I', p: 'Medium', owner: 'Engineering', type: 'single', q: 'Is giving behind a feature flag with a per-campaign switch?', why: 'A campaign may need to stop at once (licence, fraud, goal).', poc: 'Assumed.',
    opts: ['Global flag and per-campaign switch', 'Global flag only'] },
  { id: 'I6', sec: 'I', p: 'High', owner: 'QA', type: 'text', q: 'Confirm the accessibility fixes before build.',
    why: 'Found in the prototype pass: toolbar buttons 44 × 38 and card arrows 42 × 30 (DL floor 48); toast close 19 × 19 (under WCAG 2.5.8’s 24); the progress ring needs a spoken value; contrast (H9).', poc: 'Listed in the handoff, gate 5.' },

  /* J · Measurement */
  { id: 'J1', sec: 'J', p: 'High', owner: 'Product · Data', type: 'text', q: 'Set targets with guardrails for the pilot.', why: 'No baseline exists; the paired-KPI rule needs a guardrail beside each target.',
    poc: 'Proposed: payment success ≥ 97%; guardrails: duplicate charges 0, refunds and chargebacks < 0.5%, complaints < 2 per 1,000 donations.' },
  { id: 'J2', sec: 'J', p: 'Medium', owner: 'Product', type: 'single', q: 'Does a completed donation count as a meaningful action (WMA)?', why: 'Decides how giving moves the North Star.', poc: 'Yes.',
    from: 'DESIGN.md M5: charity is listed among meaningful actions.', opts: ['Yes, one per donation', 'Yes, at most one per week'] },
  { id: 'J3', sec: 'J', p: 'Medium', owner: 'Product', type: 'text', q: 'Who signs off design, content, payments and launch?', why: 'Approval on this page needs named owners.', poc: 'Not named.' },

  /* K · Parties */
  { id: 'K1', sec: 'K', p: 'Blocker', owner: 'Partnerships · Legal', type: 'single', q: 'What is Nusuk Foundation’s role in Nusuk Charity?',
    why: 'Nusuk Foundation (مؤسسة نسك الإنسانية) appears with Ehsan and the Authority in the Ramadan 1447 iftar programme. Its role decides the merchant, the licence and Apple approval.',
    poc: 'Owner of «نسك الإنسانية»; recipient not stated.', opts: ['Platform only; recipients are other licensed entities', 'Recipient of every campaign', 'Both, per campaign'] },
  { id: 'K2', sec: 'K', p: 'Blocker', owner: 'Partnerships', type: 'text', q: 'For the Iftar campaign: what does a gift buy, and who decides?',
    why: 'The Authority sets iftar rules, approved meals, locations and (in Madinah, 1447) a fixed meal price. Saying what 50 riyals provides would help donors; any such figure must come from the rule owner.',
    poc: 'Amounts only, no meal count.' },
  { id: 'K3', sec: 'K', p: 'High', owner: 'Partnerships', type: 'single', q: 'Is the same campaign also listed on Ehsan?', after: ['D1'],
    why: 'Two listings with two totals would contradict each other.', poc: 'Not considered.', opts: ['Yes: one shared total', 'Yes: separate totals, labelled', 'No: Nusuk only'] },
  { id: 'K4', sec: 'K', p: 'High', owner: 'CX', type: 'single', q: 'Who answers donors about a failed, missing or duplicate charge?',
    why: 'The failure sheet offers «تواصل مع الدعم»; it must reach someone who can see the payment.', poc: 'Nusuk Care Center.',
    opts: ['Nusuk Care Center, escalating to payments', 'Ehsan (8001247000)', 'The recipient'] }
];

window.QREC = {
  A1: { v: ['Campaigns (e.g. سفرة صائم)', 'الصدقة · general sadaqa'], why: 'Ship the Iftar campaign and general sadaqa first; add the others once each has a licensed recipient. Kaffara waits for R1.', conf: 'low', src: 'Claude’s proposal' },
  A2: { v: 'Live by 18 January 2027 for the Iftar campaign, three weeks before Ramadan 1448 (expected around 8 Feb 2027), with Apple nonprofit approval and payment certification done by 4 January.', why: 'Iftar giving peaks before and during Ramadan; store and payment approvals take weeks.', conf: 'low', src: 'Claude’s proposal; Ramadan date approximate' },
  A3: { v: ['iOS app', 'Android app (Google services)'], why: 'Matches the standing rule; Huawei and web follow.', conf: 'high', src: 'Standards ruled 18 Oct 2026 (project memory)' },
  A4: { v: ['Arabic', 'English'], why: 'The two languages design QA covers.', conf: 'high', src: 'Standards ruled 18 Oct 2026 (project memory)' },
  A5: { v: 'Signed-in Nusuk users, any card', why: 'Receipts need an account. Allow foreign cards only if the recipient is approved to receive from abroad (F2); otherwise switch to Saudi cards.', conf: 'medium', src: 'Fundraising Law executive regulation, press coverage (Okaz)' },
  A6: { v: 'Headset opens the support widget (Support-in-Chat); the ticket opens «تبرعاتي» (my donations and receipts).', why: 'A person within two taps; receipts need a home (B6).', conf: 'medium', src: 'Review rulings in the handoff skill; Support-in-Chat' },
  A7: { v: ['Services on Home', 'Campaign deep links', 'Search'], why: 'Keep giving out of ritual screens and push; Ramadan Today placement only after P5 is decided.', conf: 'medium', src: 'DESIGN.md M9S (B.4, C.1)' },
  B1: { v: 'Campaign: id, title, description, tag {label, icon}, image + alt, category, goal, collected, currency, ends_at, status, presets[], recipient {name, licence_no}, owner, updated_at.', why: 'Everything the card and page render, plus the licence the law and Apple require.', conf: 'medium', src: 'Charity Card props (DL) and prototype' },
  B2: { v: 'Close giving at 100% and point to open campaigns', why: 'No surplus question for donors; the funded state is drawn as Proposed in the prototype.', conf: 'medium', src: 'Fundraising Law (spend per donor conditions)' },
  B3: { v: ['Initiated', 'Awaiting 3-D Secure', 'Succeeded', 'Failed', 'Expired', 'Refunded', 'Partly refunded'], why: 'Covers every sheet in Figma plus refunds; disputes stay in finance tools.', conf: 'medium', src: 'Industry practice' },
  B4: { v: 'Per campaign, from the CMS', why: 'Lets the Iftar campaign match meal multiples once K2 is answered.', conf: 'medium', src: 'Claude’s proposal' },
  B5: { v: 'Whole riyals from 1 to 50,000 per donation; larger gifts through the recipient directly.', why: 'Simple validation; the upper bound limits fraud exposure. Confirm with the provider.', conf: 'low', src: 'Claude’s proposal' },
  B6: { v: ['In-app receipt page', 'PDF receipt', 'Entry in «تبرعاتي»'], why: 'A receipt the donor can keep and find again; no blessing on the receipt (payment rule 4).', conf: 'medium', src: 'payment contract rules; industry practice' },
  B7: { v: 'Nusuk backend, updated by payment webhooks', why: 'One source the app can trust; reconcile daily with the channel.', conf: 'medium', src: 'Claude’s proposal' },
  B8: { v: ['Give on behalf of someone (إهداء)', 'Hide my name from the recipient', 'Share a campaign link'], why: 'Common in Saudi giving; recurring giving needs its own consent design.', conf: 'low', src: 'Claude’s proposal' },
  B9: { v: 'As a date in words', why: 'Contract rule.', conf: 'high', src: 'Template contract service-landing (DL)' },
  D1: { v: 'Ehsan as the payment channel, called from Nusuk', why: 'It is the government’s official channel and processed iftar payments in 1447; it settles the licence and nonprofit questions faster. Keep the wallet only if P3 allows.', conf: 'medium', src: 'Arab News, Cairoscene (Jan 2026) on the iftar mechanism' },
  D2: { v: 'OpenAPI file from the service team covering home, campaign, donation, pay, status and receipt.', why: 'The handoff’s draft contracts show the shape.', conf: 'medium', src: 'Claude’s proposal' },
  D3: { v: 'The licensed recipient (or Nusuk Foundation if it is the approved nonprofit), shown as «<recipient> · <campaign>».', why: 'The donor sees who receives the money.', conf: 'medium', src: 'Apple Pay for Donations requirements' },
  D4: { v: ['Apple Pay', 'mada', 'Visa', 'Mastercard'], why: 'mada is essential in Saudi Arabia; drop Amex unless the acquirer supports it; wallet depends on P3.', conf: 'medium', src: 'Industry practice' },
  D5: { v: 'One donation id per attempt chain, with an idempotency key per payment call', why: 'Retries after failure or expiry cannot charge twice.', conf: 'high', src: 'Payment industry practice' },
  D6: { v: 'The provider session (3-D Secure or hosted page) times out after 15 minutes; nothing is captured before confirmation.', why: 'Makes «ولم يُخصم أي مبلغ» true.', conf: 'low', src: 'Claude’s proposal' },
  D7: { v: 'Nusuk CMS (Strapi)', why: 'The app’s section-based CMS already exists; totals still come from B7.', conf: 'medium', src: 'Project memory: Nusuk CMS on Strapi' },
  D8: { v: 'The recipient supplies photos with written rights and consent of people shown; Content writes alt text.', why: 'Faces at the Haram are personal data.', conf: 'medium', src: 'PDPL; DL accessibility rules' },
  F1: { v: 'Nusuk Foundation, approved by Apple for every campaign it lists', why: 'One approval covers the catalogue if the Foundation is the recipient or each listed recipient is approved too.', conf: 'medium', src: 'App Review Guidelines 3.2.1(vi)' },
  F2: { v: 'Each campaign page shows the recipient and its licence number; Legal files the channel approval before launch.', why: 'Donors can verify through NCNP’s licence check.', conf: 'medium', src: 'Fundraising Law and executive regulation (press)' },
  F3: { v: 'Amount and campaign only (donor anonymous to the recipient)', why: 'Least data by default; add consented sharing later.', conf: 'medium', src: 'PDPL data minimisation' },
  F4: { v: 'No VAT: remove the line', why: 'A gift without consideration is normally outside VAT scope; the tax team confirms.', conf: 'medium', src: 'ZATCA guidance on non-profit sector and donations (Claude’s reading)' },
  F5: { v: 'Payment page with cards and wallet only', why: 'Works without Google’s nonprofit verification; add Google Pay later.', conf: 'medium', src: 'Google Play payments policy' },
  F6: { v: 'Legal drafts terms covering use of funds, surplus, refunds, data and the recipient’s licence.', why: 'The widget links to them.', conf: 'medium', src: 'Claude’s proposal' },
  P1: { v: 'No fee, nothing deducted', why: 'Simplest honest promise; state it in the terms.', conf: 'low', src: 'Claude’s proposal' },
  P2: { v: 'Refund in full for duplicate or erroneous charges within 30 days; no refund for completed gifts otherwise; cancelled campaigns move funds to a stated similar cause or refund, as the terms say.', why: 'Covers the likely cases with one rule each.', conf: 'low', src: 'Claude’s proposal' },
  P3: { v: 'Wallet not used for donations', why: 'Until Finance confirms wallet funds can settle to a licensed third party; the payment page then opens on Apple Pay and cards.', conf: 'low', src: 'Claude’s proposal (conservative)' },
  P4: { v: 'Weekly settlement by the channel to the recipient; Finance reconciles daily against webhooks.', why: 'Keeps totals and receipts true.', conf: 'low', src: 'Claude’s proposal' },
  P5: { v: 'Inside Nusuk Charity and services only', why: 'Red lines on commerce in sacred windows and pre-desire.', conf: 'high', src: 'DESIGN.md M4, M9S' },
  G1: { v: ['Receipt (transactional)', 'Campaign completed (opt-in, once)'], why: 'Closure without pressure; no reminders to give again.', conf: 'medium', src: 'DESIGN.md M3 (calm closure), M4' },
  G2: { v: 'No promotional pushes', why: 'Ramadan is most damaged by a commercial push.', conf: 'high', src: 'DESIGN.md M9S C.1' },
  R1: { v: 'Not in v1', why: 'Needs a religious owner, amounts and citations; ship after review.', conf: 'medium', src: 'DESIGN.md M4 (no rulings, madhab neutrality)' },
  R2: { v: 'No zakat; label sadaqa clearly', why: 'Avoids eligibility rules in v1.', conf: 'medium', src: 'Claude’s proposal' },
  R3: { v: 'One approved verse or hadith per campaign at most, with its source, above the description and away from the pay button.', why: 'House rules on faith text.', conf: 'medium', src: 'DESIGN.md M6' },
  R4: { v: 'None', why: 'Charity Card rule.', conf: 'high', src: 'DL Charity Card (17 Nov 2026), M4' },
  H1: { v: 'سفرة صائم', why: 'Matches the card and the iftar programme’s term (سفرة).', conf: 'medium', src: 'Figma card; public naming' },
  H2: { v: 'جُمع حتى الآن', why: 'Avoids تم; reads as a running total.', conf: 'medium', src: 'DL known issue F109' },
  H3: { v: 'Register a 320 sideways variant', why: 'Keeps Figma’s layout and the peek that shows the row scrolls.', conf: 'low', src: 'Claude’s proposal' },
  H4: { v: 'Nothing selected', why: 'No default amount is chosen for the donor; the main action says what is missing.', conf: 'high', src: 'DESIGN.md M4; item-details contract options rule' },
  H5: { v: 'Approve as drafted', why: 'Both drafts follow the contract fields and the worked example.', conf: 'medium', src: 'DESIGN.md M9T' },
  H6: { v: 'أعد المحاولة', why: 'Names the outcome; the body says nothing was charged.', conf: 'medium', src: 'House rules (M6)' },
  H7: { v: 'اكتمل تبرّعك.', why: 'Calm success without تم; a blessing is the content owner’s call.', conf: 'medium', src: 'House rules (M6), DL-34' },
  H8: { v: ['Payment widget into the coded package', 'Select Card “Details” variant (riyal + amount, no title)', 'Rename the status sheets (named “Golf Carts_…” in this file)', 'Retry button not Fate (F76)'], why: 'All four were coded locally or worked around in the prototype.', conf: 'medium', src: 'Prototype build; DL known issues' },
  H9: { v: 'A darker text token for amounts and success text', why: 'Fixes every use at once; the brand gold stays for fills and the ring.', conf: 'medium', src: 'WCAG 2.2 SC 1.4.3; measured in the prototype' },
  H10: { v: 'Brand supplies three illustrations in the same 3D style; labels as nouns: الصدقة، سقيا زمزم، الحالات الإنسانية، الكفارة، الإغاثة، فك كربة.', why: 'Consistent tiles; «ماء زمزم» stays the house term in body copy.', conf: 'low', src: 'Claude’s proposal' },
  H11: { v: 'ابحث عن فرصة تبرّع', why: 'Names what can be searched.', conf: 'high', src: 'Template contract service-landing (DL)' },
  I1: { v: 'Existing app stack, its floors', why: 'Giving lives inside the Nusuk app.', conf: 'medium', src: 'Claude’s proposal' },
  I2: { v: 'PKPaymentRequest with supportsThreeDS, networks mada, Visa, Mastercard; one merchant id per approved nonprofit.', why: 'Matches D3 and D4.', conf: 'medium', src: 'Apple PassKit docs' },
  I3: { v: 'Cached home and campaign pages; giving needs a connection', why: 'Shown in the prototype’s offline state.', conf: 'medium', src: 'Prototype' },
  I4: { v: 'Data maps each proposed event to the schema and returns the list.', why: 'Names must match before build.', conf: 'medium', src: 'Claude’s proposal' },
  I5: { v: 'Global flag and per-campaign switch', why: 'Stops one campaign without a release.', conf: 'high', src: 'Industry practice' },
  I6: { v: 'Raise hit areas to 48 (toolbar, card arrows, toast close, terms link), give the ring a spoken value («75٪ من الهدف»), and fix contrast per H9.', why: 'DL floor and WCAG 2.2 AA.', conf: 'high', src: 'DESIGN.md M10; prototype pass' },
  J1: { v: 'Payment success ≥ 97% of payment starts; guardrails: duplicate charges 0, refunds and chargebacks < 0.5%, complaints < 2 per 1,000 donations, notification opt-out not above baseline in Ramadan.', why: 'Paired-KPI rule.', conf: 'low', src: 'Claude’s proposal' },
  J2: { v: 'Yes, one per donation', why: 'Charity is listed in M5.', conf: 'high', src: 'DESIGN.md M5' },
  J3: { v: 'Design: DL Manager; content: Content lead; payments: Finance; launch: Product owner.', why: 'One approver per area.', conf: 'low', src: 'Claude’s proposal' },
  K1: { v: 'Both, per campaign', why: 'Keeps today’s partnerships possible; each campaign names its recipient.', conf: 'low', src: 'Claude’s reading of public coverage' },
  K2: { v: 'The Authority confirms the meal price and what a gift covers; the page may then say, for example, “50 riyals ≈ N meals” in words the Authority approves.', why: 'Meaning without inventing figures.', conf: 'medium', src: 'Alwatan (Madinah meal price in 1447)' },
  K3: { v: 'Yes: one shared total', why: 'One number everywhere.', conf: 'medium', src: 'Claude’s proposal' },
  K4: { v: 'Nusuk Care Center, escalating to payments', why: 'Matches the operating levels.', conf: 'medium', src: 'Claude’s proposal' }
};

window.QOWNERS = [
  { id: 'o-product', title: 'Product', blurb: 'Scope, rules of the experience, rollout.' },
  { id: 'o-fin', title: 'Finance, payments and tax', blurb: 'Gateway, fees, VAT, refunds, settlement.' },
  { id: 'o-ext', title: 'Partnerships and outside parties', blurb: 'Nusuk Foundation, Ehsan, the Authority.' },
  { id: 'o-legal', title: 'Legal and privacy', blurb: 'Licences, store rules, PDPL, terms.' },
  { id: 'o-eng', title: 'Engineering', blurb: 'APIs, native, data.' },
  { id: 'o-content', title: 'Content, brand and religious review', blurb: 'Words, images, faith text.' },
  { id: 'o-dl', title: 'Design Language', blurb: 'Contracts, components, tokens.' },
  { id: 'o-qa', title: 'QA, data and CX', blurb: 'Accessibility, analytics, support.' }
];
window.ownerGroup = function (o) {
  var f = o.split('·')[0].trim();
  if (/Finance|Payments/.test(f)) return 'o-fin';
  if (/Partnerships/.test(f)) return 'o-ext';
  if (/Legal/.test(f)) return 'o-legal';
  if (/Engineering/.test(f)) return 'o-eng';
  if (/Content|Religious|Brand/.test(f)) return 'o-content';
  if (/^DL/.test(f)) return 'o-dl';
  if (/QA|Data|CX/.test(f)) return 'o-qa';
  return 'o-product';
};
