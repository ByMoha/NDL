/* Nusuk Charity (نسك الإنسانية) · clickable prototype on the coded Nusuk DL.
   Source: Figma 🌱 Nusuk Charity (cBtXOQA9rgnQVmCMgx3UA8), section 87401:38512 + Payment Confirmation 87427:7523.
   A reducer drives the flow; #stage hashes replay it. All data is sample data. */
(function () {
  var N = window.NusukDL, h = React.createElement, useReducer = React.useReducer, useEffect = React.useEffect, useRef = React.useRef;
  var IMG = window.IMG || {};
  var FIG = 'https://www.figma.com/design/cBtXOQA9rgnQVmCMgx3UA8/?node-id=';

  /* ---------- sample data (as in Figma) ---------- */
  var CAMPAIGN = { id: 'iftar-1448', title: 'سفرة صائم', desc: 'إفطار الصائمين في الحرمين الشريفين', tag: 'حملة رمضان 1448هـ', icon: 'spoon-and-fork',
    bar: 'سفر صائم' /* toolbar title as drawn in Figma (Q-01) */, about: 'مبادرة إفطار صائم تتيح لك المساهمة في تفطير ضيوف الرحمن خلال شهر رمضان.', goal: 4000, collected: 3000 };
  var CATS = [ { id: 'sadaqa', label: 'الصدقة', image: IMG.sadaqa }, { id: 'zamzam', label: 'تبرع بزمزم', image: IMG.zamzam }, { id: 'cases', label: 'الحالات الإنسانية', image: IMG.cases },
    { id: 'kaffara', label: 'الكفارة', image: IMG.kaffara }, { id: 'relief', label: 'الإغاثة', image: IMG.relief }, { id: 'debt', label: 'فك كربة', image: IMG.debt } ];
  var PRESETS = [50, 100, 250];
    var fmt = function (n) { return Number(n).toLocaleString('en-US'); };
  var toWestern = function (s) { return String(s).replace(/[٠-٩]/g, function (d) { return '٠١٢٣٤٥٦٧٨٩'.indexOf(d); }).replace(/[۰-۹]/g, function (d) { return '۰۱۲۳۴۵۶۷۸۹'.indexOf(d); }); };

  /* ---------- state ---------- */
  var init = { feat: 0, stage: 'landing', next: 'success',
    sel: 50, other: '', focus: false, open: true, collected: CAMPAIGN.collected, toast: null, sheet: null, from: null, events: [] };
  function amountOf(s) { var o = parseInt(toWestern(s.other), 10); return s.other !== '' ? (isNaN(o) ? 0 : o) : s.sel; }
  function ev(s, name, props) { return s.events.concat([{ t: new Date().toTimeString().slice(0, 8), name: name, props: props || {} }]).slice(-14); }
  function reducer(s, a) {
    switch (a.type) {
      case 'go': return Object.assign({}, s, { stage: a.stage, sheet: null, toast: a.keepToast ? s.toast : null, from: a.from || s.from, events: a.ev ? ev(s, a.ev[0], a.ev[1]) : s.events });
      case 'set': return Object.assign({}, s, a.patch);
      case 'pick': return Object.assign({}, s, { sel: a.v, other: '', events: ev(s, 'giving_amount_select', { kind: 'preset', amount: a.v }) });
      case 'other': return Object.assign({}, s, { other: toWestern(a.v).replace(/[^0-9]/g, '').slice(0, 7), sel: null });
      case 'sheet': return Object.assign({}, s, { sheet: a.sheet, events: a.ev ? ev(s, a.ev[0], a.ev[1]) : s.events });
      case 'result':
        if (a.r === 'success') return Object.assign({}, s, { stage: 'details', sheet: null, sel: 50, other: '', collected: Math.min(CAMPAIGN.goal, s.collected + a.amount), toast: 'success',
          events: ev(s, 'giving_pay_result', { result: 'success', method: a.method, amount: a.amount }) });
        return Object.assign({}, s, { stage: s.stage === 'details' && a.r === 'failed' ? 'payment' : s.stage, sheet: a.r, events: ev(s, 'giving_pay_result', { result: a.r, method: a.method, amount: a.amount }) });
      case 'log': return Object.assign({}, s, { events: ev(s, a.name, a.props) });
      default: return s;
    }
  }
  var STAGES = [
    ['landing', 'Charity home', 'نسك الإنسانية'], ['details', 'Campaign · choose amount', 'سفرة صائم'], ['applepay', 'Apple Pay (system sheet)', 'iOS'],
    ['payment', 'Payment', 'التبرّع'], ['failed', 'Payment failed', 'sheet'], ['expired', 'Payment session expired', 'sheet'], ['done', 'Donation complete', 'toast']];
  function fromHash() {
    var k = (location.hash || '').slice(1);
    var patch = { stage: 'landing' };
    if (k === 'details') patch = { stage: 'details' };
    if (k === 'applepay') patch = { stage: 'details', sel: 50, sheet: 'applepay' };
    if (k === 'payment') patch = { stage: 'payment', sel: 50 };
    if (k === 'failed') patch = { stage: 'payment', sel: 50, sheet: 'failed' };
    if (k === 'expired') patch = { stage: 'payment', sel: 50, sheet: 'expired' };
    if (k === 'done') patch = { stage: 'details', toast: 'success', collected: CAMPAIGN.collected + 50 };
    return Object.assign({}, init, patch);
  }

  /* ---------- small pieces ---------- */
  var I = function (n, size, label) { return h(N.Icon, { name: n, size: size, label: label }); };
  var Riyal = function (px) { return h('span', { className: 'ch-riyal', style: { display: 'inline-flex', width: px, height: px }, 'aria-hidden': true }, h(N.Icon, { name: 'riyal', size: px <= 16 ? 'sm' : undefined })); };
  function Money(p) { return h('span', { className: 'ch-amtv ' + (p.cls || 'body-2-regular'), dir: 'ltr' }, h('span', { 'aria-hidden': true, style: { display: 'inline-flex' } }, I('riyal', p.big ? undefined : 'sm')), h('span', null, p.v), h('span', { className: 'nk-sr', style: { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' } }, ' ريال')); }
  function card(s, w, onOpen) {
    var col = s.collected, rem = Math.max(0, CAMPAIGN.goal - col);
    return h(N.MediaCard, { type: 'charity', image: w === 'feat' ? IMG.iftar : IMG.kaaba, imageAlt: w === 'feat' ? 'متطوع يقدّم الإفطار لصائم في ساحات المسجد النبوي' : 'المصلون حول الكعبة المشرفة في المسجد الحرام', cta: w === 'feat' ? false : undefined, tag: { label: CAMPAIGN.tag, icon: CAMPAIGN.icon },
      title: CAMPAIGN.title, description: CAMPAIGN.desc, progress: col / CAMPAIGN.goal,
      remaining: { label: 'المبلغ المتبقي', amount: fmt(rem) }, collected: { label: 'تم جمع', amount: fmt(col) }, ctaLabel: 'افتح ' + CAMPAIGN.title, onOpen: onOpen });
  }
  function Toolbar(p) {
    /* Toolbar has no handlers: one listener reads the pressed button's name */
    /* Only the first row (back, title, actions) sticks; the rest of the Toolbar scrolls. The blur layer is a sibling that never takes space. */
    return h(React.Fragment, null,
      h('div', { className: 'ch-tbfx', 'aria-hidden': true }, h('div', { className: 'pc-pblur' }, h('i'), h('i'), h('i'), h('b'))),
      h('div', { className: 'ch-top', onClick: function (e) { var b = e.target.closest('button'); if (b && p.on) p.on(b.getAttribute('aria-label') || ''); } },
        h(N.Toolbar, Object.assign({ backLabel: 'رجوع' }, p.tb))),
      h('div', { style: { height: p.mb || 0, flex: 'none' } }));
  }

  /* Header Effect (Figma instance per frame): two blurred ellipses, values read from the file 17 Nov 2026; positions in frame coordinates */
  var FX = {
    main: [{ l: 92.5, t: -327, w: 306, h: 503, c: '#FAD89E', b: 146 }, { l: 463.5, t: -444, w: 107, h: 895, c: '#F7C56E', b: 146 }],
    details: [{ l: 65, t: -379, w: 214, h: 352, c: 'var(--surface-illumination)', b: 102 }, { l: 325, t: -461, w: 75, h: 625, c: '#F5B13D', b: 102 }],
    payment: [{ l: 94, t: -542, w: 306, h: 503, c: 'var(--surface-illumination)', b: 146 }, { l: 464, t: -659, w: 107, h: 895, c: '#F5B13D', b: 146 }] };
  function Fx(p) { return h('div', { className: 'ch-fx', 'aria-hidden': true }, FX[p.k].map(function (e, i) { return h('i', { key: i, style: { left: e.l, top: e.t, width: e.w, height: e.h, background: e.c, filter: 'blur(' + e.b + 'px)' } }); })); }
  /* Network marks as drawn in Figma › _Payment Logos (24 × 17 each) */
  var LOGOS = '<svg width="24" height="17" viewBox="0 0 24 17"><rect width="24" height="17" rx="3" fill="#1F72CD"/><text x="12" y="11" font-size="6.2" font-weight="700" font-family="Arial,sans-serif" fill="#fff" text-anchor="middle">AMEX</text></svg>' +
    '<svg width="24" height="17" viewBox="0 0 24 17"><rect x=".5" y=".5" width="23" height="16" rx="3.5" fill="#fff" stroke="#F5F5F5"/><circle cx="9.6" cy="8.5" r="4.6" fill="#EB001B"/><circle cx="14.4" cy="8.5" r="4.6" fill="#F79E1B"/><path d="M12 4.6a4.6 4.6 0 0 1 0 7.8 4.6 4.6 0 0 1 0-7.8z" fill="#FF5F00"/></svg>' +
    '<svg width="24" height="17" viewBox="0 0 24 17"><rect x=".5" y=".5" width="23" height="16" rx="3.5" fill="#fff" stroke="#F5F5F5"/><text x="12" y="11.2" font-size="6.6" font-weight="800" font-style="italic" font-family="Arial,sans-serif" fill="#172B85" text-anchor="middle">VISA</text></svg>' +
    '<svg width="24" height="17" viewBox="0 0 24 17"><rect x=".5" y=".5" width="23" height="16" rx="3.5" fill="#fff" stroke="#F5F5F5"/><rect x="3.5" y="5.5" width="7" height="2.2" fill="#259BD6"/><rect x="3.5" y="9.3" width="7" height="2.2" fill="#84B740"/><text x="16.5" y="10.6" font-size="5.2" font-weight="700" font-family="Arial,sans-serif" fill="#27292D" text-anchor="middle">mada</text></svg>';

  /* One scroll area per screen; it tells the sticky Toolbar row when content is under it */
  function Scroller(p) {
    return h('div', { className: 'pc-scroll ch-scr' + (p.fill ? ' fill' : ''), onScroll: function (e) { var el = e.currentTarget; el.classList.toggle('scrolled', el.scrollTop > 2); } }, p.children);
  }
  /* Keeps a value on screen while its exit animation runs */
  function useLinger(v, ms) {
    var st = React.useState(v), shown = st[0], set = st[1];
    useEffect(function () { if (v) { set(v); return; } if (!shown) return; var id = setTimeout(function () { set(null); }, ms); return function () { clearTimeout(id); }; }, [v]);
    return [v || shown, !v && !!shown];
  }

  /* ---------- screens ---------- */
  function Landing(p) {
    var s = p.s, d = p.dispatch;
    var open = function (where) { return function () { d({ type: 'go', stage: 'details', from: 'landing', ev: ['giving_campaign_open', { campaign_id: CAMPAIGN.id, from: where }] }); }; };
    var tb = h(Toolbar, { mb: 14, tb: { type: 'Secondary Pages / Search', title: 'نسك الإنسانية', actions: ['ticket-03', 'customer-support'], actionLabels: ['تبرعاتي', 'الدعم'], placeholder: 'البحث' },
      on: function (l) { if (l === 'رجوع') d({ type: 'log', name: 'nav_back', props: { from: 'giving_home' } }); else d({ type: 'log', name: 'giving_toolbar_tap', props: { action: l, designed: false } }); } });
    var body = h(React.Fragment, null,
      h('section', { 'aria-label': 'فرص مميزة', 'aria-roledescription': 'شريط' },
        h('div', { className: 'ch-feat', onScroll: function (e) { var el = e.currentTarget, w = 328, i = Math.round(Math.abs(el.scrollLeft) / w); if (i !== s.feat) d({ type: 'set', patch: { feat: Math.min(5, i) } }); } },
          [0, 1, 2, 3, 4, 5].map(function (i) { return h('div', { key: i, className: 'ch-open', role: 'group', 'aria-label': (i + 1) + ' من 6', onClick: open('featured_' + (i + 1)) }, card(s, 'feat')); })),
        h('div', { className: 'ch-pag' }, h(N.Pagination, { count: 6, active: s.feat || 0, label: 'الفرصة ' + ((s.feat || 0) + 1) + ' من 6' }))),
      h(N.Categories, { title: 'طرق العطاء', action: true, onAction: function () { d({ type: 'log', name: 'giving_categories_all', props: { designed: false } }); },
        items: CATS.map(function (c) { return { label: c.label, image: c.image, iconName: c.iconName, onClick: function () { d({ type: 'log', name: 'giving_category_select', props: { category: c.id, designed: false } }); } }; }) }),
      h('section', { className: 'ch-listsec' },
        h(N.SectionTitle, { title: 'جديد الفرص', action: false }),
        h('div', { className: 'ch-list' }, [0, 1, 2].map(function (i) { return h('div', { key: i, className: 'ch-open', onClick: open('new_' + (i + 1)) }, card(s, 'list')); })),
        h('div', { className: 'ch-more' }, h(N.Button, { kind: 'secondary', size: 'md', full: true, onClick: function () { d({ type: 'log', name: 'giving_more', props: { designed: false } }); } }, 'عرض المزيد'))),
      null);
    return h(Scroller, null, h(Fx, { k: 'main' }), tb, h('div', { className: 'ch-body' }, body));
  }

  function Details(p) {
    var s = p.s, d = p.dispatch, amt = amountOf(s), ref = useRef(null);
    /* Figma draws no amount error: with no amount the field takes focus and nothing else happens (Q-07) */
    function check(next) { if (!amt) { if (ref.current) ref.current.focus(); d({ type: 'log', name: 'giving_amount_missing', props: {} }); return; } next(); }
    var tb = h(Toolbar, { mb: 4, tb: { type: 'Secondary Pages / Default', title: CAMPAIGN.bar, actions: ['share-05', 'information-circle'], actionLabels: ['مشاركة', 'عن المبادرة'] },
      on: function (l) { if (l === 'رجوع') d({ type: 'go', stage: 'landing' }); else d({ type: 'log', name: l === 'مشاركة' ? 'giving_share' : 'giving_info', props: { designed: false } }); } });
    var amountBox = h('div', { className: 'ch-box ch-amtbox', role: 'group', 'aria-labelledby': 'ch-amt-h' },
        h('h2', { id: 'ch-amt-h', className: 'body-1-light' }, 'اختر مبلغ التبرع'),
        h('div', { className: 'ch-grp' },
          h('div', { className: 'ch-prices' }, PRESETS.map(function (v) { return h('button', { key: v, type: 'button', className: 'ch-sel', 'aria-pressed': s.sel === v, onClick: function () { d({ type: 'pick', v: v }); } }, h(Money, { v: fmt(v) })); })),
          h('label', { className: 'ch-fld' + (s.focus ? ' on' : '') },
            h('input', { ref: ref, inputMode: 'numeric', autoComplete: 'off', placeholder: 'مبلغ آخر', 'aria-label': 'مبلغ آخر بالريال', value: s.other,
              onFocus: function () { d({ type: 'set', patch: { focus: true } }); }, onBlur: function () { d({ type: 'set', patch: { focus: false } }); if (s.other) d({ type: 'log', name: 'giving_amount_select', props: { kind: 'custom', amount: amt } }); },
              onChange: function (e) { d({ type: 'other', v: e.target.value }); } }),
            h('span', { 'aria-hidden': true, style: { display: 'inline-flex' } }, I('riyal')))),
        h('div', { className: 'ch-ctas' },
          h(N.Button, { kind: 'primary', size: 'md', full: true, mark: 'apple-pay', ariaLabel: 'الدفع باستخدام Apple Pay', onClick: function () { check(function () { d({ type: 'sheet', sheet: 'applepay', ev: ['giving_pay_start', { method: 'apple_pay', from: 'details', amount: amt }] }); }); } }),
          h('button', { type: 'button', className: 'ch-link body-2-regular', onClick: function () { check(function () { d({ type: 'go', stage: 'payment', ev: ['giving_checkout_open', { from: 'other_method', amount: amt }] }); }); } }, 'اختر وسيلة تبرّع أخرى')));
    return h(React.Fragment, null,
      h('div', { className: 'ch-art', 'aria-hidden': true }, h('img', { src: IMG.visuals, alt: '' }), h('i', { className: 'e1' }), h('i', { className: 'e2' })),
      h(Scroller, { fill: true }, h(Fx, { k: 'details' }), tb,
        h('div', { className: 'ch-body ch-detail' },
          h('div', { className: 'ch-box ch-svc' }, h('p', { className: 'notes-1-light' }, CAMPAIGN.about), h('span', { className: 'ch-svc-ic', 'aria-hidden': true }, I(CAMPAIGN.icon))),
          h('div', { className: 'ch-flex' }), amountBox)));
  }

  function Payment(p) {
    var s = p.s, d = p.dispatch, amt = amountOf(s) || 50, bal = 320;
    function pay(method) {
      if (method === 'apple_pay') { d({ type: 'sheet', sheet: 'applepay', ev: ['giving_pay_start', { method: method, from: 'payment', amount: amt }] }); return; }
      d({ type: 'log', name: 'giving_pay_start', props: { method: method, from: 'payment', amount: amt } });
      setTimeout(function () { d({ type: 'result', r: s.next, method: method, amount: amt }); }, 350);
    }
    return h(Scroller, null, h(Fx, { k: 'payment' }),
      h(Toolbar, { mb: 4, tb: { type: 'Secondary Pages / No Actions', title: 'التبّرع' /* as drawn; spelling is Q-02 */ }, on: function (l) { if (l === 'رجوع') d({ type: 'go', stage: 'details' }); } }),
      h('div', { className: 'ch-body' }, h('div', { className: 'ch-pad' },
        h('section', { className: 'ch-pay', 'aria-label': 'الدفع' },
          h('div', { className: 'ch-payfx', 'aria-hidden': true }, h('i', { style: { left: 94, top: -542, width: 306, height: 503, background: 'var(--surface-illumination)' } }), h('i', { style: { left: 464, top: -659, width: 107, height: 895, background: '#F5B13D' } })),
          h('div', { className: 'ch-total' }, h('p', { className: 'notes-1-regular', style: { margin: 0 } }, 'المبلغ الإجمالي'),
            h('div', { className: 'ch-total-v', dir: 'ltr' }, h('span', { style: { display: 'inline-flex', transform: 'scale(1.55)' }, 'aria-hidden': true }, I('riyal')), h('span', { className: 'hero-light' }, fmt(amt)), h('span', { style: { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' } }, ' ريال')),
            h('button', { type: 'button', className: 'ch-dt', 'aria-expanded': s.open, onClick: function () { d({ type: 'set', patch: { open: !s.open } }); } },
              h('span', { className: 'ch-dt-h body-2-regular' }, 'التفاصيل', I('arrow-up-01', 'sm')),
              s.open && h('span', { className: 'ch-prows' },
                h('span', { className: 'ch-prow body-2-regular' }, h('span', null, '1x عنصر'), h(Money, { v: fmt(amt) })),
                h('span', { className: 'ch-prow body-2-regular' }, h('span', null, '2x عنصر'), h(Money, { v: '0' })),
                h('span', { className: 'ch-prow body-2-regular' }, h('span', null, 'ضريبة القيمة المضافة ⁦0⁩%'), h(Money, { v: '0' })),
                h('span', { className: 'ch-prow body-1-regular' }, h('span', null, 'المجموع'), h(Money, { v: fmt(amt), cls: 'body-1-regular' }))))),
          h('div', { className: 'ch-acts' },
            h('p', { className: 'ch-terms notes-2-regular' }, 'بالمتابعة، فإنك توافق على ', h('a', { href: '#', onClick: function (e) { e.preventDefault(); d({ type: 'log', name: 'giving_terms_open', props: { designed: false } }); } }, 'الشروط والأحكام')),
            h(N.Button, { kind: 'primary', size: 'md', full: true, icon: 'right', iconName: 'wallet-01', onClick: function () { pay('wallet'); } }, h('span', { className: 'ch-amtv' }, 'ادفع', h('span', { dir: 'ltr', className: 'ch-amtv' }, I('riyal', 'sm'), fmt(amt)), 'عبر المحفظة')),
            h('p', { className: 'ch-bal notes-2-regular' }, h('span', { className: 'ch-amtv' }, 'رصيد المحفظة الحالي:', h('span', { dir: 'ltr', className: 'ch-amtv' }, I('riyal', 'sm'), fmt(bal))), I('information-circle', 'sm')),
            h('div', { className: 'ch-or notes-1-regular', 'aria-hidden': true }, h('i'), 'أو', h('i')),
            h(N.Button, { kind: 'primary', size: 'md', full: true, mark: 'apple-pay', ariaLabel: 'الدفع باستخدام Apple Pay', onClick: function () { pay('apple_pay'); } }),
            h('button', { type: 'button', className: 'ch-cards', onClick: function () { pay('card'); } }, h('span', { className: 'notes-1-regular' }, 'أو ادفع عبر'),
              h('span', { className: 'ch-logos', role: 'img', 'aria-label': 'أمريكان إكسبريس، ماستركارد، فيزا، مدى', dangerouslySetInnerHTML: { __html: LOGOS } })))))));
  }

  function Overlays(p) {
    var s = p.s, d = p.dispatch, amt = amountOf(s) || 50;
    var close = function () { d({ type: 'set', patch: { sheet: null } }); };
    var L = useLinger(s.sheet, 320), sheet = L[0], sc = 'ch-scrim' + (L[1] ? ' out' : '');
    var T = useLinger(s.toast, 280), toast = T[0];
    var o = null;
    if (sheet === 'applepay') o = h('div', { className: sc, onClick: function (e) { if (e.target === e.currentTarget) close(); } },
      h('div', { className: 'ch-applepay ch-sys', role: 'dialog', 'aria-label': 'Apple Pay' },
        h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }, h('b', null, ' Pay'), h('button', { type: 'button', className: 'pc-btn ghost', onClick: close }, 'Cancel')),
        h('dl', { className: 'notes-1-regular' }, h('dt', null, 'Card'), h('dd', null, 'mada •••• 4417'), h('dt', null, 'Pay'), h('dd', null, 'NUSUK · ' + CAMPAIGN.title), h('dt', null, 'Total'), h('dd', null, 'SAR ' + fmt(amt))),
        h('p', { className: 'notes-2-regular pc-muted', style: { margin: 0 } }, 'System sheet, drawn here only to show the step. The merchant name is an open question (D3).'),
        h('button', { type: 'button', className: 'pc-btn', style: { textAlign: 'center' }, onClick: function () { d({ type: 'result', r: s.next, method: 'apple_pay', amount: amt }); } }, 'Confirm with Face ID')));
    if (sheet === 'failed') o = h('div', { className: sc }, h(N.StatusSheet, { template: 'payment-failed', fate: true, body: 'تحقّق من بيانات بطاقتك، أو جرب طريقة أخرى لإكمال الدفع', onPrimary: close, onArrow: close }));
    if (sheet === 'expired') o = h('div', { className: sc }, h(N.StatusSheet, { template: 'payment-expired', fate: true, body: 'تعذر تأكيد الطلب لانتهاء الوقت المحدد', primary: 'طلب جديد', onPrimary: close, onArrow: close }));
    var t = toast === 'success' && h('div', { className: 'ch-toast' + (T[1] ? ' out' : '') }, h(N.NoticeBar, { color: 'success', hug: true, iconName: 'tick-double-02', title: 'تمّ الدفع بنجاح' }));
    return h(React.Fragment, null, o, t);
  }

  /* ---------- reviewer panel ---------- */
  var NOTES = {
    landing: { contract: 'Proposed · <b>giving-landing</b>. No contract fits (M9T rule 7). Nearest is <code>service-landing</code>, which is for a catalogue for sale with a cart pill; giving has no cart, and its rows are one vertical list of 386 cards, not 170 × 248 sliders.',
      comps: 'Toolbar <i>Secondary Pages / Search</i> · SearchBar · MediaCard <code>type:"charity"</code> (DL, 17 Nov) in a sideways row at 320 wide · Pagination · Categories (CategoryTile image) · SectionTitle · CardsList-style column · Button Secondary MD «عرض المزيد».',
      decision: 'The featured row uses Charity Cards at 320 (Figma) where the card is specified at 386: a sideways row of a 386 card is a <b>Proposed</b> width (H3). The second toolbar icon is a ticket glyph; read here as «تبرعاتي» (my donations) — not confirmed (A6). Category tiles and «عرض المزيد» open pages that are not designed.',
      pattern: '<b>Framing, emotion &amp; meaning</b> (M3). Why: giving is a desire; real, collective progress gives meaning without pressure. What: open a campaign. How: live totals, no countdown, no donor names or ranks (Charity Card rules, M4). Where: J0 B.4 Charity, T2; Ramadan C.1. Validate: below.',
      metric: 'Success: share of sessions that open a campaign; donations per weekly active giver (WMA). Guardrails: notification opt-out in Ramadan, complaints per 1,000 donations, refunds and chargebacks.',
      states: ['Drawn in Figma (87392:27288): ready', 'Not drawn, so not built (Q-08): loading, empty, error, offline; category page, all campaigns, search results, my donations, support entry'],
      payload: { 'GET /v1/giving/home': { featured: [{ id: 'iftar-1448', title: 'سفرة صائم', tag: 'حملة رمضان 1448هـ', goal: 4000, collected: 3000, currency: 'SAR', image: 'cdn://…', owner: 'nusuk_foundation' }], categories: ['sadaqa', 'zamzam', 'cases', 'kaffara', 'relief', 'debt'], latest: ['iftar-1448', '…'], as_of: '2026-11-17T22:40:00+03:00' } } },
    details: { contract: 'Proposed · <b>giving-details</b>. Nearest is <code>item-details</code>, which is for an item added to a cart; here the person gives at once. The act (description) and the transaction (amount box) sit in separate cards, as M9S B.4 requires.',
      comps: 'Toolbar <i>Secondary Pages / Default</i> (information-circle, share-05) · Service Box (local frame in Figma) · Select Card ×3 (Figma Details variant: riyal + amount; the coded SelectCard has no such variant) · Input with riyal · Button Primary MD with Apple Pay mark · Ghost link.',
      decision: 'As drawn in Figma, 50 is selected when the page opens; whether that stays is open (H4). The main action stays enabled and says what is missing. Built for iPhone only, as drawn; Android and Figma’s spare «تبرّع بـ [الإجمالي]» button (87419:10294) are Q-08. The toolbar title is «سفر صائم» as drawn; the card says «سفرة صائم» (Q-01).',
      pattern: '<b>Attention &amp; cognitive load</b> + <b>anchoring with care</b> (M3). Three amounts and a free field; the smallest first, none chosen for the person; no decoy (M4). Validate: amount errors per start; share of custom amounts.',
      metric: 'Success: payment starts per campaign view; time from open to pay. Guardrails: amount errors per start, back-outs after an error, refunds by reason.',
      states: ['Drawn in Figma (87401:38513): amount chosen (50); custom amount is the field as drawn', 'Not drawn, so not built (Q-07, Q-08): amount missing or over a limit, offline, campaign fully funded, Android (no Apple Pay); about sheet, share sheet'],
      payload: { 'POST /v1/giving/donations': { campaign_id: 'iftar-1448', amount: 50, currency: 'SAR', source: 'preset', method: 'apple_pay', idempotency_key: 'c2d1…', locale: 'ar-SA', device: 'iOS 19 · Nusuk 4.12' } } },
    applepay: { contract: 'System UI (PassKit). Not a DL surface.', comps: 'PKPaymentRequest; merchant capabilities 3DS; supported networks mada, Visa, Mastercard, Amex (to confirm, D4).',
      decision: 'Apple requires an approved nonprofit for in-app donations with Apple Pay (App Review 3.2.1 vi): who is the merchant of record decides whether this button can ship (F1, K1).',
      pattern: 'Choice architecture: the fastest path for the most common device.', metric: 'Apple Pay share of successful donations; guardrail: Apple Pay failure rate.',
      states: ['Success, failure, cancel by the person (returns to the amount, nothing kept)'],
      payload: { 'POST /v1/giving/donations/{id}/apple-pay': { donation_id: 'DN-2611-000481', payment_token: '<PKPaymentToken>', amount: 50, currency: 'SAR' } } },
    payment: { contract: '<code>payment</code> (draft): Toolbar No Actions, the payment widget only, TabBar Empty. Fits.',
      comps: 'Toolbar <i>Secondary Pages / No Actions</i> · Payment widget (Figma 💸 Payment › _Payment widget Master; not in the coded bundle, coded locally here) · Button Primary MD wallet · Apple Pay · card button with network logos.',
      decision: 'Built as drawn: title «التبّرع» (spelling, Q-02); details list «1x عنصر», «2x عنصر», VAT, total (a donation is one line; VAT is F4 — Q-03). Values in the extra rows are sample zeros.',
      pattern: '<b>Feedback &amp; reassurance</b>: the amount equals the one chosen; nothing added (payment rule 3).', metric: 'Success: payment success rate. Guardrails: payment failure, session expiry, wallet-insufficient rate.',
      states: ['Drawn in Figma (87418:5453, 87427:7524/7526/7528): ready; failure sheet; expiry sheet; success toast', 'Not drawn, so not built (Q-08): wallet too low, offline, Android; card entry, 3-D Secure, receipt, terms page'],
      payload: { 'POST /v1/giving/donations/{id}/pay': { donation_id: 'DN-2611-000481', method: 'wallet', amount: 50, currency: 'SAR', idempotency_key: 'c2d1…' }, 'response': { status: 'succeeded', receipt_id: 'RC-2611-000481', paid_at: '2026-11-17T22:41:09+03:00' } } },
    failed: { contract: 'StatusSheet <code>template:"payment-failed"</code> (payment rule 2).', comps: 'StatusSheet error · cancel-circle-half-dot · Fate pill «ادفع بطريقة أخرى».',
      decision: 'Drawn as Figma draws it, copy word for word, no support link (a person within two taps is Q-05). The retry is a Secondary Fate pill. The DL keeps Fate for removal only (F76, H8), and the pill’s red text is 3.5:1 on white (H9). Nothing is charged twice: the retry reuses the donation and its idempotency key (D5).', pattern: 'Feedback &amp; reassurance; blame-free copy (M6).', metric: 'Recovery: share of failures followed by success within 10 minutes.',
      states: ['From Apple Pay on the campaign page, a failure opens the payment page with the sheet over it'], payload: { 'webhook payment.failed': { donation_id: 'DN-2611-000481', reason: 'issuer_declined', retryable: true } } },
    expired: { contract: 'StatusSheet <code>template:"payment-expired"</code>.', comps: 'StatusSheet error · alert-01 · Primary.',
      decision: 'Built as drawn: «طلب جديد» and «تعذر تأكيد الطلب لانتهاء الوقت المحدد» (the DL template says «حجز جديد»). Whether a donation should say nothing was charged and offer a retry is Q-06. No timer is shown.',
      pattern: 'Feedback &amp; reassurance.', metric: 'Session expiry rate; guardrail: duplicate charges (must be 0).', states: ['Expiry comes from the provider session (e.g. 3-D Secure left open), not from a hold'], payload: { 'webhook payment.expired': { donation_id: 'DN-2611-000481', session_ttl_s: 900 } } },
    done: { contract: 'NoticeBar <code>hug</code> success (Figma: NoticeBar Location, «تم الدفع بنجاح»).', comps: 'NoticeBar success · tick-double-02.',
      decision: 'Built as drawn: «تمّ الدفع بنجاح». Whether it should name the gift rather than the payment, and any short blessing, is Q-04 (H7). The person returns to the campaign and its totals include the gift. No receipt screen is designed (B6).',
      pattern: 'Calm closure (Hook, Nusuk version): reward is meaning, not points.', metric: 'Meaningful action counted in WMA: a completed donation. Guardrail: refund requests within 7 days.',
      states: ['Not designed: receipt, donation history, a receipt by email or SMS'], payload: { 'GET /v1/giving/donations/{id}': { id: 'DN-2611-000481', status: 'succeeded', amount: 50, campaign_id: 'iftar-1448', receipt_url: 'https://…/RC-2611-000481.pdf' } } }
  };
  function stageKey(s) { if (s.sheet === 'applepay') return 'applepay'; if (s.sheet === 'failed') return 'failed'; if (s.sheet === 'expired') return 'expired'; if (s.toast === 'success') return 'done'; return s.stage; }
  function Panel(p) {
    var s = p.s, d = p.dispatch, k = stageKey(s), n = NOTES[k];
    var tab = React.useState('notes'), t = tab[0];
    function sel(label, key, opts) { return h('label', { className: 'ch-opt' }, label, h('select', { value: s[key], onChange: function (e) { var pt = {}; pt[key] = e.target.value; d({ type: 'set', patch: pt }); } }, opts.map(function (o) { return h('option', { key: o[0], value: o[0] }, o[1]); }))); }
    return h('aside', { className: 'pc-panel', dir: 'ltr', lang: 'en', 'aria-label': 'Reviewer panel' },
      h('span', { className: 'notes-2-regular pc-muted' }, 'Nusuk · Charity (نسك الإنسانية) · prototype draft 0.4 · 18 Nov 2026 · Figma kept as is · iOS motion'),
      h('h1', { className: 'headline-2-regular' }, 'Give to a campaign'),
      h('p', { className: 'notes-1-regular pc-muted' }, 'Built from the Figma flow with the coded Nusuk DL, as drawn; every conflict is a numbered design question (Q-xx) in the handoff. Only the states Figma draws. Motion simulates iOS: push and pop, swipe back from the right edge, sheets rise, the toast drops. Sample data.'),
      h('ul', { className: 'pc-rail' }, STAGES.map(function (x, i) {
        return h('li', { key: x[0] }, h('button', { type: 'button', className: 'pc-rail-b' + (k === x[0] ? ' on' : ''), onClick: function () { location.hash = x[0]; } },
          h('span', { className: 'pc-rail-n' }, i + 1), h('span', null, x[1]), h('span', { className: 'pc-muted', style: { marginInlineStart: 'auto', fontSize: 12 } }, x[2])));
      })),
      h('h2', null, 'Conditions'),
      h('div', { className: 'pc-ctrl ch-grid' },
        sel('Next payment result', 'next', [['success', 'Success'], ['failed', 'Failed'], ['expired', 'Session expired']])),
      h('div', { className: 'pc-ptabs', role: 'tablist' }, [['notes', 'Notes'], ['payload', 'Back office payload'], ['events', 'Events']].map(function (x) {
        return h('button', { key: x[0], role: 'tab', 'aria-selected': t === x[0], className: 'pc-ptab' + (t === x[0] ? ' on' : ''), onClick: function () { tab[1](x[0]); } }, x[1]); })),
      t === 'notes' && h('div', { className: 'pc-notes' }, h('dl', null,
        h('dt', null, 'Contract'), h('dd', { dangerouslySetInnerHTML: { __html: n.contract } }),
        h('dt', null, 'Components'), h('dd', { dangerouslySetInnerHTML: { __html: n.comps } }),
        h('dt', null, 'Decision'), h('dd', { dangerouslySetInnerHTML: { __html: n.decision } }),
        h('dt', null, 'Pattern'), h('dd', { dangerouslySetInnerHTML: { __html: n.pattern } }),
        h('dt', null, 'Metric and guardrail'), h('dd', null, n.metric),
        h('dt', null, 'States'), h('dd', null, h('ul', null, n.states.map(function (x, i) { return h('li', { key: i }, x); })))),
        h('p', { className: 'notes-2-regular pc-muted' }, 'Figma: ', h('a', { href: FIG + '87401-38512', target: '_blank', rel: 'noopener' }, 'Nusuk Charity Flow'), ' · ', h('a', { href: FIG + '87427-7523', target: '_blank', rel: 'noopener' }, 'Payment Confirmation'))),
      t === 'payload' && h('pre', { className: 'pc-json' }, JSON.stringify(n.payload, null, 2)),
      t === 'events' && (s.events.length ? h('pre', { className: 'pc-json' }, s.events.slice().reverse().map(function (e) { return e.t + '  ' + e.name + '  ' + JSON.stringify(e.props); }).join('\n')) : h('p', { className: 'notes-1-regular pc-muted' }, 'Tap through the flow; analytics events appear here (names proposed, I4).')));
  }

  /* ---------- app ---------- */
  /* ---------- app: an iOS navigation stack ----------
     Push: the new screen enters from the left (RTL) while the one under it slides 30% right and dims; pop reverses it.
     Back by swiping from the right edge (RTL), as in UINavigationController. Sheets rise from the bottom; the toast drops from the top. */
  var ORDER = { landing: 0, details: 1, payment: 2 }, PREV = { details: 'landing', payment: 'details' }, SCREENS = { landing: Landing, details: Details, payment: Payment };
  var DUR = 500;
  function App() {
    var r = useReducer(reducer, null, fromHash), s = r[0], d = r[1];
    var last = useRef(s.stage), tr = useRef(null), quiet = useRef(false), g = useRef(null);
    var tick = React.useState(0), dragS = React.useState(null), dg = dragS[0], setDg = dragS[1];
    useEffect(function () { var f = function () { d({ type: 'set', patch: fromHash() }); }; window.addEventListener('hashchange', f); return function () { window.removeEventListener('hashchange', f); }; }, []);
    useEffect(function () { if (!s.toast) return; var id = setTimeout(function () { d({ type: 'set', patch: { toast: null } }); }, 6000); return function () { clearTimeout(id); }; }, [s.toast]);
    if (s.stage !== last.current) {
      tr.current = quiet.current ? null : { from: last.current, to: s.stage, dir: ORDER[s.stage] > ORDER[last.current] ? 'push' : 'pop', id: Math.random() };
      quiet.current = false; last.current = s.stage;
    }
    var t = tr.current;
    useEffect(function () { if (!t) return; var id = setTimeout(function () { tr.current = null; tick[1](function (n) { return n + 1; }); }, DUR + 40); return function () { clearTimeout(id); }; }, [t && t.id]);

    /* edge swipe back */
    function down(e) {
      if (!PREV[s.stage] || s.sheet || t || dg || e.button > 0) return;
      var rc = e.currentTarget.getBoundingClientRect();
      if (rc.right - e.clientX > 16) return;
      g.current = { x: e.clientX, t0: e.timeStamp, w: rc.width, on: false, dx: 0 };
    }
    function move(e) {
      var st = g.current; if (!st) return;
      var dx = Math.max(0, Math.min(st.w, st.x - e.clientX));
      if (!st.on) { if (dx < 8) return; st.on = true; e.currentTarget.setPointerCapture(e.pointerId); }
      st.dx = dx; st.v = dx / Math.max(1, e.timeStamp - st.t0); setDg({ dx: dx, w: st.w });
    }
    function up() {
      var st = g.current; g.current = null; if (!st || !st.on) return;
      var go = st.dx > st.w * 0.35 || (st.v > 0.6 && st.dx > 40), back = PREV[s.stage];
      setDg({ dx: go ? st.w : 0, w: st.w, rel: true });
      setTimeout(function () { if (go) { quiet.current = true; d({ type: 'go', stage: back, ev: ['nav_back', { from: s.stage, gesture: 'edge_swipe' }] }); } setDg(null); }, 300);
    }

    var top = s.stage, stack = Object.keys(ORDER).filter(function (k) { return ORDER[k] <= ORDER[top]; });
    if (t && t.dir === 'pop' && stack.indexOf(t.from) < 0) stack.push(t.from);
    var pages = stack.map(function (k) {
      var c = 'ch-page', st = null;
      if (t) {
        if (t.dir === 'push') c += k === t.to ? ' top in-push' : k === t.from ? ' under push-under' : ' hid';
        else c += k === t.from ? ' top out-pop' : k === t.to ? ' under pop-under' : ' hid';
      } else if (dg) {
        var f = dg.dx / dg.w;
        if (k === top) { c += ' top moving' + (dg.rel ? ' rel' : ''); st = { transform: 'translateX(' + (-dg.dx) + 'px)' }; }
        else if (k === PREV[top]) { c += ' under' + (dg.rel ? ' rel' : ''); st = { transform: 'translateX(' + (30 * (1 - f)).toFixed(2) + '%)', '--dimo': (0.1 * (1 - f)).toFixed(3) }; }
        else c += ' hid';
      } else c += k === top ? ' top' : ' hid';
      var live = k === top && !(t && t.dir === 'pop' && k === t.from);
      return h('div', { key: k, className: c, style: st, 'aria-hidden': live ? undefined : true, inert: live ? undefined : '' }, h(SCREENS[k], { s: s, dispatch: d }));
    });
    return h('div', { className: 'pc-stage' },
      h('div', { className: 'pc-phone', role: 'application', 'aria-label': 'Nusuk prototype' },
        h('div', { className: 'ch-sbw' }, h(N.StatusBar, { time: '02:22' })),
        h('div', { className: 'pc-screen', onPointerDown: down, onPointerMove: move, onPointerUp: up, onPointerCancel: up }, pages, h(Overlays, { s: s, dispatch: d })),
        /* Tab Bar · Active=Empty (Figma, every frame): floats over the content with a progressive blur rising from the bottom, never a solid fill */
        h('div', { className: 'ch-tabbar', 'aria-hidden': true }, h('div', { className: 'pc-pblur' }, h('i'), h('i'), h('i'), h('b'))),
        /* the home indicator stays above sheets, as on iOS */
        h('div', { className: 'ch-tabbar ch-hindw', 'aria-hidden': true }, h(N.HomeIndicator, null))),
      h(Panel, { s: s, dispatch: d }));
  }
  ReactDOM.createRoot(document.getElementById('root')).render(h(App));
})();
