(function () {
  var SECS = window.QSECTIONS, QS = window.QUESTIONS;
  var A = {};            // answers by question id
  var dirty = {};        // ids edited locally and not yet confirmed
  var timers = {};
  var db = null, assets = null, downloads = null, user = null, myId = null;
  var filter = 'all', mode = 'topic';
  var REC = window.QREC || {}, OWN = window.QOWNERS || [];
  function groups() {
    if (mode === 'owner') return OWN.map(function (o) { return { id: o.id, short: '', title: o.title, blurb: o.blurb, items: QS.filter(function (x) { return window.ownerGroup(x.owner) === o.id; }) }; }).filter(function (g) { return g.items.length; });
    return SECS.map(function (s) { return { id: s.id, short: s.id, title: s.title, blurb: s.blurb, items: QS.filter(function (x) { return x.sec === s.id; }) }; });
  }
  var $ = function (s, r) { return (r || document).querySelector(s); };
  function el(tag, attrs, kids) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v == null || v === false) return;
      if (k === 'text') e.textContent = v;
      else if (k === 'class') e.className = v;
      else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? '' : v);
    });
    (kids || []).forEach(function (c) { if (c != null) e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return e;
  }
  function ans(id) { return A[id] || (A[id] = { value: null, text: '', files: [], state: 'open', assignee: '' }); }
  function q(id) { for (var i = 0; i < QS.length; i++) if (QS[i].id === id) return QS[i]; }
  function hasValue(a, qq) {
    if (qq.type === 'multi') return Array.isArray(a.value) && a.value.length > 0;
    if (qq.type === 'single') return !!a.value;
    return !!(a.text && a.text.trim()) || (qq.type === 'number' && a.value !== null && a.value !== '');
  }
  function status(qq) {
    var a = A[qq.id];
    if (!a) return 'open';
    if (a.state === 'na') return 'na';
    var filesOk = qq.upload !== 'required' || (a.files && a.files.length);
    if (hasValue(a, qq) && filesOk) return 'closed';
    if (qq.upload === 'required' && hasValue(a, qq) && !filesOk) return 'needs-file';
    if (a.state === 'unknown') return 'assigned';
    return 'open';
  }
  var LABEL = { open: 'Open', closed: 'Closed', na: 'Not applicable', 'needs-file': 'File needed', assigned: 'Assigned' };

  /* ---------- persistence ---------- */
  var META = window.QMETA || {};
  var LS = 'nusuk-gaps-' + (META.key || 'project');
  function saveLocal() { try { localStorage.setItem(LS, JSON.stringify(A)); } catch (e) {} }
  function loadLocal() { try { var s = localStorage.getItem(LS); if (s) A = JSON.parse(s) || {}; } catch (e) {} }
  function persist(id) {
    dirty[id] = true; setSave(id, 'Saving…');
    clearTimeout(timers[id]);
    timers[id] = setTimeout(function () {
      var a = Object.assign({}, A[id], { by: myId, at: new Date().toISOString() });
      saveLocal();
      if (!db) { delete dirty[id]; setSave(id, 'Saved on this device'); return; }
      db.collection('answers').doc(id).set(a).then(function () { delete dirty[id]; setSave(id, 'Saved for the team'); db.collection('log').add({ id: id, by: myId, at: a.at, state: a.state, approved: !!a.approved }).catch(function () {}); })
        .catch(function (e) { delete dirty[id]; setSave(id, e && e.code === 'invalid_argument' ? 'View only: not saved' : 'Not saved: try again'); });
    }, 600);
    refreshSummary(); refreshCard(id);
  }
  function setSave(id, t) { var n = $('#save-' + id); if (n) n.textContent = t; }

  /* ---------- rendering ---------- */
  function render() {
    var nav = $('#nav'); nav.textContent = '';
    var main = $('#qs'); main.textContent = '';
    groups().forEach(function (g) {
      nav.appendChild(el('a', { href: '#sec-' + g.id, class: 'navlink', id: 'nav-' + g.id }, [el('span', { class: 'nid', text: g.short }), el('span', { class: 'nt', text: g.title }), el('span', { class: 'nc', id: 'navc-' + g.id })]));
      var sec = el('section', { class: 'sec', id: 'sec-' + g.id, 'aria-labelledby': 'h-' + g.id }, [
        el('header', { class: 'sech' }, [g.short ? el('span', { class: 'sid', text: g.short }) : null, el('div', null, [el('h2', { id: 'h-' + g.id, text: g.title }), el('p', { text: g.blurb })])])
      ]);
      g.items.forEach(function (qq) { sec.appendChild(card(qq)); });
      main.appendChild(sec);
    });
    refreshSummary(); applyFilter();
    document.querySelectorAll('.mbtn').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.m === mode); });
  }

  function card(qq) {
    var a = ans(qq.id);
    var c = el('article', { class: 'card', id: 'q-' + qq.id, 'data-p': qq.p });
    var head = el('div', { class: 'ch' }, [
      el('span', { class: 'qid', text: qq.id }),
      el('span', { class: 'pill p-' + qq.p.toLowerCase(), text: qq.p }),
      el('span', { class: 'owner', text: qq.owner }),
      qq.upload ? el('span', { class: 'pill up', text: qq.upload === 'required' ? 'File required' : 'File optional' }) : null,
      el('span', { class: 'grow' }),
      el('span', { class: 'st', id: 'st-' + qq.id })
    ]);
    c.appendChild(head);
    c.appendChild(el('h3', { class: 'qt', id: 'qt-' + qq.id, text: qq.q }));
    c.appendChild(el('p', { class: 'why', text: qq.why }));
    if (qq.from) c.appendChild(el('p', { class: 'poc reg' }, [el('b', { text: 'Already decided for Nusuk: ' }), qq.from]));
    if (qq.after) c.appendChild(el('p', { class: 'why' }, [el('b', { text: 'Answer first: ' }), qq.after.join(', ')]));
    if (qq.poc) c.appendChild(el('p', { class: 'poc' }, [el('b', { text: 'The POC assumes: ' }), qq.poc]));

    var r = REC[qq.id];
    if (r) {
      var shown = Array.isArray(r.v) ? r.v.join(' · ') : String(r.v);
      c.appendChild(el('div', { class: 'rec' }, [
        el('div', { class: 'rect' }, [el('b', { text: 'Proposed: ' }), shown, el('span', { class: 'recw', text: ' ' + r.why }), r.conf ? el('span', { class: 'pill conf c-' + r.conf, text: r.conf + ' confidence' }) : null, r.src ? el('span', { class: 'recs', text: 'Source: ' + r.src }) : null]),
        el('button', { type: 'button', class: 'xbtn recb', text: 'Use this proposal', onclick: function () {
          var x = ans(qq.id);
          if (qq.type === 'single') x.value = r.v; else if (qq.type === 'multi') x.value = r.v.slice(); else if (qq.type === 'number') x.value = r.v; else x.text = shown;
          x.state = 'answered'; x.fromProposal = true; syncInputs(qq.id); persist(qq.id);
        } })
      ]));
    }
    var body = el('div', { class: 'cb' });
    if (qq.type === 'single' || qq.type === 'multi') {
      var group = el('div', { class: 'opts', role: qq.type === 'single' ? 'radiogroup' : 'group', 'aria-labelledby': 'qt-' + qq.id });
      qq.opts.forEach(function (o, i) {
        var id = 'o-' + qq.id + '-' + i;
        var checked = qq.type === 'single' ? a.value === o : Array.isArray(a.value) && a.value.indexOf(o) > -1;
        var inp = el('input', { type: qq.type === 'single' ? 'radio' : 'checkbox', name: 'n-' + qq.id, id: id, value: o, checked: checked,
          onchange: function () {
            var x = ans(qq.id);
            if (qq.type === 'single') x.value = o;
            else { var v = Array.isArray(x.value) ? x.value.slice() : []; var k = v.indexOf(o); if (inp.checked && k < 0) v.push(o); if (!inp.checked && k > -1) v.splice(k, 1); x.value = v; }
            if (x.state !== 'na') x.state = 'answered';
            persist(qq.id);
          } });
        group.appendChild(el('label', { class: 'opt', for: id }, [inp, el('span', { text: o })]));
      });
      body.appendChild(group);
    }
    if (qq.type === 'number') {
      var nid = 'n-' + qq.id;
      body.appendChild(el('label', { class: 'lbl', for: nid, text: 'Value' }));
      body.appendChild(el('input', { class: 'inp num', type: 'number', id: nid, inputmode: 'numeric', placeholder: qq.ph || '', value: a.value == null ? '' : a.value,
        oninput: function (e) { var x = ans(qq.id); x.value = e.target.value; x.state = 'answered'; persist(qq.id); } }));
    }
    var tid = 't-' + qq.id;
    var isText = qq.type === 'text';
    body.appendChild(el('label', { class: 'lbl', for: tid, text: isText ? 'Answer' : 'Notes (optional)' }));
    body.appendChild(el('textarea', { class: 'inp', id: tid, rows: isText ? 3 : 2, placeholder: qq.ph || (isText ? 'Type the answer' : 'Anything to add'),
      oninput: function (e) { var x = ans(qq.id); x.text = e.target.value; if (isText && e.target.value.trim()) x.state = 'answered'; persist(qq.id); } }));
    $('textarea', body).value = a.text || '';

    if (qq.upload) body.appendChild(uploader(qq));

    var fid = 'f-' + qq.id;
    var foot = el('div', { class: 'cf' }, [
      el('label', { class: 'chk', for: 'u-' + qq.id }, [el('input', { type: 'checkbox', id: 'u-' + qq.id, checked: a.state === 'unknown',
        onchange: function (e) { var x = ans(qq.id); x.state = e.target.checked ? 'unknown' : (hasValue(x, qq) ? 'answered' : 'open'); $('#' + fid).hidden = !e.target.checked; persist(qq.id); } }), el('span', { text: 'Not decided yet: assign it' })]),
      el('label', { class: 'sr', for: fid, text: 'Who will decide ' + qq.id }),
      el('input', { class: 'inp assign', id: fid, hidden: a.state !== 'unknown', placeholder: 'Who decides, and by when', value: a.assignee || '',
        oninput: function (e) { ans(qq.id).assignee = e.target.value; persist(qq.id); } }),
      el('label', { class: 'sr', for: 'due-' + qq.id, text: 'Due date for ' + qq.id }),
      el('input', { class: 'inp assign due', type: 'date', id: 'due-' + qq.id, value: a.due || '', onchange: function (e) { ans(qq.id).due = e.target.value; persist(qq.id); } }),
      el('span', { class: 'grow' }),
      el('label', { class: 'chk', for: 'ap-' + qq.id }, [el('input', { type: 'checkbox', id: 'ap-' + qq.id, checked: !!a.approved,
        onchange: function (e) { var x = ans(qq.id); x.approved = e.target.checked; x.approvedBy = e.target.checked ? myId : null; persist(qq.id); } }), el('span', { text: 'Approved by the owner' })]),
      el('label', { class: 'chk', for: 'na-' + qq.id }, [el('input', { type: 'checkbox', id: 'na-' + qq.id, checked: a.state === 'na',
        onchange: function (e) { var x = ans(qq.id); x.state = e.target.checked ? 'na' : (hasValue(x, qq) ? 'answered' : 'open'); persist(qq.id); } }), el('span', { text: 'Not applicable' })]),
      el('span', { class: 'save', id: 'save-' + qq.id, 'aria-live': 'polite' })
    ]);
    c.appendChild(body); c.appendChild(foot);
    return c;
  }

  var ACCEPT = '.pdf,.csv,.json,.md,.txt,.png,.jpg,.jpeg,.svg,application/pdf,text/csv,application/json,text/markdown,text/plain,image/*';
  function uploader(qq) {
    var wrap = el('div', { class: 'upl' });
    var list = el('ul', { class: 'files', id: 'files-' + qq.id });
    var inId = 'file-' + qq.id;
    var input = el('input', { type: 'file', id: inId, class: 'sr', multiple: true, accept: ACCEPT, onchange: function (e) { handle(qq, e.target.files); e.target.value = ''; } });
    var drop = el('label', { class: 'drop', for: inId, tabindex: '-1' }, [
      el('span', { class: 'dt', text: qq.upload === 'required' ? 'Attach the file to close this item' : 'Attach a file (optional)' }),
      el('span', { class: 'ds', text: 'PDF, CSV, JSON, Markdown, text or image · up to 20 MB · export Excel or Word as PDF or CSV' })
    ]);
    ['dragover', 'dragenter'].forEach(function (t) { drop.addEventListener(t, function (e) { e.preventDefault(); drop.classList.add('over'); }); });
    ['dragleave', 'drop'].forEach(function (t) { drop.addEventListener(t, function () { drop.classList.remove('over'); }); });
    drop.addEventListener('drop', function (e) { e.preventDefault(); handle(qq, e.dataTransfer.files); });
    wrap.appendChild(input); wrap.appendChild(drop); wrap.appendChild(list);
    wrap.appendChild(el('p', { class: 'uhint', id: 'uh-' + qq.id }));
    setTimeout(function () { drawFiles(qq.id); }, 0);
    return wrap;
  }
  function handle(qq, fileList) {
    var files = Array.prototype.slice.call(fileList || []);
    var hint = $('#uh-' + qq.id);
    if (!files.length) return;
    if (!assets) { hint.textContent = 'Uploads are not available in this view. Open the page on claude.ai as an editor or contributor, or send the file in the chat.'; return; }
    files.forEach(function (f) {
      if (f.size > 20 * 1024 * 1024) { hint.textContent = f.name + ' is over 20 MB. Split it or export a smaller PDF.'; return; }
      hint.textContent = 'Uploading ' + f.name + '…';
      assets.upload(f).then(function (r) {
        var x = ans(qq.id);
        x.files = (x.files || []).concat([{ id: r.id, name: f.name, size: r.sizeBytes, type: r.contentType, url: r.url || ('/_blob/' + r.id) }]);
        if (x.state !== 'na' && hasValue(x, qq)) x.state = 'answered';
        hint.textContent = '';
        drawFiles(qq.id); persist(qq.id);
      }).catch(function (e) {
        hint.textContent = 'Could not upload ' + f.name + (e && e.message ? ': ' + e.message : '') + '. Check the type (PDF, CSV, JSON, text or image) and try again.';
      });
    });
  }
  function drawFiles(id) {
    var list = $('#files-' + id); if (!list) return;
    list.textContent = '';
    (ans(id).files || []).forEach(function (f, i) {
      list.appendChild(el('li', null, [
        el('a', { href: f.url, target: '_blank', rel: 'noopener', text: f.name }),
        el('span', { class: 'fs', text: f.size ? Math.max(1, Math.round(f.size / 1024)) + ' KB' : '' }),
        el('button', { type: 'button', class: 'rm', 'aria-label': 'Remove ' + f.name, text: 'Remove', onclick: function () { var x = ans(id); x.files = x.files.filter(function (_, j) { return j !== i; }); drawFiles(id); persist(id); } })
      ]));
    });
  }

  function refreshCard(id) {
    var qq = q(id), st = status(qq), n = $('#st-' + id), c = $('#q-' + id);
    if (n) { n.textContent = LABEL[st]; n.className = 'st s-' + st; }
    if (c) c.setAttribute('data-st', st);
  }
  function refreshSummary() {
    var t = { all: 0, closed: 0, blk: 0, blkClosed: 0, up: 0, upClosed: 0, assigned: 0, approved: 0 };
    QS.forEach(function (qq) {
      var st = status(qq), done = st === 'closed' || st === 'na';
      t.all++; if (done) t.closed++;
      if (qq.p === 'Blocker') { t.blk++; if (done) t.blkClosed++; }
      if (qq.upload === 'required') { t.up++; if (done) t.upClosed++; }
      if (st === 'assigned') t.assigned++;
      if (A[qq.id] && A[qq.id].approved) t.approved++;
      refreshCard(qq.id);
    });
    $('#k-blk').textContent = t.blkClosed + ' / ' + t.blk;
    $('#k-all').textContent = t.closed + ' / ' + t.all;
    $('#k-up').textContent = t.upClosed + ' / ' + t.up;
    $('#k-as').textContent = String(t.assigned);
    var kap = $('#k-ap'); if (kap) kap.textContent = t.approved + ' / ' + t.all;
    $('#bar-blk').style.width = (t.blk ? 100 * t.blkClosed / t.blk : 0) + '%';
    $('#bar-all').style.width = (100 * t.closed / t.all) + '%';
    $('#bar-up').style.width = (t.up ? 100 * t.upClosed / t.up : 0) + '%';
    groups().forEach(function (s) {
      var list = s.items;
      var d = list.filter(function (x) { var st = status(x); return st === 'closed' || st === 'na'; }).length;
      var n = $('#navc-' + s.id); if (n) n.textContent = d + '/' + list.length;
      var l = $('#nav-' + s.id); if (l) l.classList.toggle('done', d === list.length);
    });
    $('#ready').textContent = t.blkClosed === t.blk ? 'All blockers closed. Ready to finalise the handoff.' : (t.blk - t.blkClosed) + ' blockers still open before the handoff is final.';
  }
  function applyFilter() {
    QS.forEach(function (qq) {
      var st = status(qq), show = true;
      if (filter === 'open') show = st !== 'closed' && st !== 'na';
      if (filter === 'blocker') show = qq.p === 'Blocker' && st !== 'closed' && st !== 'na';
      if (filter === 'upload') show = !!qq.upload && st !== 'closed' && st !== 'na';
      if (filter === 'assigned') show = st === 'assigned';
      var c = $('#q-' + qq.id); if (c) c.hidden = !show;
    });
    groups().forEach(function (s) {
      var any = s.items.some(function (x) { return !$('#q-' + x.id).hidden; });
      $('#sec-' + s.id).hidden = !any;
    });
    document.querySelectorAll('.fbtn').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.f === filter); });
  }

  /* ---------- export ---------- */
  function exportJSON() {
    var out = { title: (META.title || 'Nusuk feature') + ' · handoff gaps', exported: new Date().toISOString(), items: QS.map(function (qq) { var a = A[qq.id] || {}; return { id: qq.id, section: qq.sec, priority: qq.p, owner: qq.owner, question: qq.q, status: status(qq), value: a.value || null, answer: a.text || '', files: (a.files || []).map(function (f) { return { name: f.name, id: f.id }; }), assignee: a.assignee || '', due: a.due || '', approved: !!a.approved, from_proposal: !!a.fromProposal }; }) };
    return JSON.stringify(out, null, 2);
  }
  function exportMD() {
    var lines = ['# ' + (META.title || 'Nusuk feature') + ' · handoff gaps', '', 'Exported ' + new Date().toISOString().slice(0, 10), ''];
    SECS.forEach(function (s) {
      lines.push('## ' + s.id + ' · ' + s.title, '');
      QS.filter(function (x) { return x.sec === s.id; }).forEach(function (qq) {
        var a = A[qq.id] || {}, v = Array.isArray(a.value) ? a.value.join(', ') : (a.value || '');
        lines.push('- **' + qq.id + ' ' + qq.q + '** (' + qq.p + ', ' + qq.owner + ') · ' + LABEL[status(qq)]);
        if (v) lines.push('  - Choice: ' + v);
        if (a.text) lines.push('  - Answer: ' + a.text.replace(/\n/g, ' '));
        if (a.files && a.files.length) lines.push('  - Files: ' + a.files.map(function (f) { return f.name; }).join(', '));
        if (a.state === 'unknown') lines.push('  - Assigned: ' + (a.assignee || 'not named'));
      });
      lines.push('');
    });
    return lines.join('\n');
  }
  function save(name, data, btn) {
    if (downloads) { downloads.save({ filename: name, data: data }).catch(function () {}); return; }
    try { navigator.clipboard.writeText(data).then(function () { btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = btn.dataset.l; }, 1500); }); } catch (e) {}
  }

  /* ---------- boot ---------- */
  ['kicker', 'h1', 'lede'].forEach(function (k) { var n = $('#m-' + k); if (n && META[k]) n.textContent = META[k]; });
  if (META.title) document.title = META.title + ' Handoff Gaps';
  ['unlocks', 'parties', 'levels'].forEach(function (k) { var n = $('#m-' + k); if (!n) return; if (META[k]) n.innerHTML = META[k]; else { var d = n.closest('details') || n.parentElement; d.hidden = true; } });
  loadLocal(); render();
  document.querySelectorAll('.fbtn').forEach(function (b) { b.addEventListener('click', function () { filter = b.dataset.f; applyFilter(); }); });
  document.querySelectorAll('.mbtn').forEach(function (b) { b.addEventListener('click', function () { mode = b.dataset.m; render(); }); });
  $('#ex-json').addEventListener('click', function (e) { save((META.key || 'feature') + '-gaps.json', exportJSON(), e.currentTarget); });
  $('#ex-md').addEventListener('click', function (e) { save((META.key || 'feature') + '-gaps.md', exportMD(), e.currentTarget); });

  if (window.claude && window.claude.use) {
    window.claude.use('user').then(function (u) { user = u; return u ? u.id() : null; }).then(function (id) { myId = id; }).catch(function () {});
    window.claude.use('downloads').then(function (d) { downloads = d; }).catch(function () {});
    window.claude.use('assets').then(function (a) { assets = a; $('#upl-note').hidden = !!a; }).catch(function () {});
    var conn = $('#conn'); conn.textContent = 'Connecting to the team copy…';
    window.claude.use('db').then(function (d) {
      db = d;
      if (!d) { conn.textContent = 'Saved on this device only. Open the page on claude.ai to share answers with the team.'; return; }
      var to = setTimeout(function () { conn.textContent = 'The team copy can’t be reached yet. Answers are kept on this device and will sync.'; }, 10000);
      d.collection('answers').onSnapshot(function (snap) {
        if (!snap.metadata.fromCache) { clearTimeout(to); conn.textContent = 'Answers save for everyone on this page.'; }
        snap.docs.forEach(function (doc) {
          if (dirty[doc.id] || !q(doc.id)) return;
          var data = doc.data(); A[doc.id] = JSON.parse(JSON.stringify(data));
          syncInputs(doc.id);
        });
        saveLocal(); refreshSummary(); applyFilter();
      }, function () { clearTimeout(to); conn.textContent = 'Team sync stopped. Answers are kept on this device; reload later.'; });
    }).catch(function () { conn.textContent = 'Saved on this device only.'; });
  } else {
    $('#conn').textContent = 'Saved on this device only.';
  }
  function syncInputs(id) {
    var qq = q(id), a = A[id], c = $('#q-' + id); if (!c) return;
    var act = document.activeElement;
    c.querySelectorAll('.opts input').forEach(function (i) { i.checked = qq.type === 'single' ? a.value === i.value : Array.isArray(a.value) && a.value.indexOf(i.value) > -1; });
    var t = $('#t-' + id); if (t && t !== act) t.value = a.text || '';
    var n = $('#n-' + id); if (n && n !== act) n.value = a.value == null ? '' : a.value;
    var u = $('#u-' + id); if (u) u.checked = a.state === 'unknown';
    var f = $('#f-' + id); if (f) { f.hidden = a.state !== 'unknown'; if (f !== act) f.value = a.assignee || ''; }
    var na = $('#na-' + id); if (na) na.checked = a.state === 'na';
    var ap = $('#ap-' + id); if (ap) ap.checked = !!a.approved;
    var du = $('#due-' + id); if (du && du !== act) du.value = a.due || '';
    drawFiles(id);
  }
})();
