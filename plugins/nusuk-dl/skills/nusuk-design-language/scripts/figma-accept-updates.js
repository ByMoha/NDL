const START = 0, LIMIT = 75000, DO_ACCEPT = true, t0 = Date.now(); let g = 0;
const out = { file: figma.root.name, seen: 0, updated: 0, reapplied: 0, skipped: 0, noLatest: 0, skippedSets: {}, errors: [], next: null };
const T = f => { try { f(); } catch (e) {} };
const pages = figma.root.children.filter(p => !/^[-—\s]*$/.test(p.name));
if (DO_ACCEPT) {
figma.skipInvisibleInstanceChildren = false;
const norm = props => { const o = {}; for (const [k, v] of Object.entries(props || {})) o[k.split('#')[0]] = v.type === 'INSTANCE_SWAP' ? 'swap' : v.value; return o; };
const vis = (t, root) => { let p = t; while (p && p !== root) { if (!p.visible) return false; p = p.parent; } return true; };
const texts = n => n.findAllWithCriteria({ types: ['TEXT'] }).filter(t => vis(t, n)).map(t => t.characters);
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const ipath = (n, root) => { const r = []; let p = n; while (p && p.id !== root.id) { const par = p.parent; if (!par) return null; r.unshift(par.children.indexOf(p)); p = par; } return r.join('.'); };
const byIdx = (root, ip) => { let n = root; if (ip === '' || ip === null) return ip === '' ? n : null; for (const k of ip.split('.')) { if (!n || !('children' in n)) return null; n = n.children[+k]; } return n || null; };
const mapIp = (oR, nR, ip) => { if (ip === '') return ''; let o = oR, n = nR; const res = []; for (const k of ip.split('.')) { if (!o || !('children' in o) || !n || !('children' in n)) return null; const oc = o.children[+k]; if (!oc) return null; let t = null; const nm = n.children.filter(x => x.name === oc.name && x.type === oc.type); if (oc.visible) { const ov = o.children.filter(x => x.visible && x.type === oc.type), nv = n.children.filter(x => x.visible && x.type === oc.type); if (ov.length === nv.length) t = nv[ov.indexOf(oc)]; } if (!t && nm.length === 1) t = nm[0]; if (!t) { const x = n.children[+k]; if (x && x.type === oc.type) t = x; } if (!t) return null; res.push(n.children.indexOf(t)); o = oc; n = t; } return res.join('.'); };
const ovIdx = async inst => { const m = new Map(); let ov = []; try { ov = inst.overrides; } catch (e) {} for (const o of ov) { const n = await figma.getNodeByIdAsync(o.id); if (!n) continue; const ip = n.id === inst.id ? '' : ipath(n, inst); if (ip === null) continue; m.set(ip, { n, f: o.overriddenFields.filter(f => f !== 'pluginData') }); } return m; };
const SIMPLE = new Set(['topLeftRadius', 'topRightRadius', 'bottomLeftRadius', 'bottomRightRadius', 'cornerRadius', 'cornerSmoothing', 'itemSpacing', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'layoutAlign', 'layoutGrow', 'primaryAxisAlignItems', 'counterAxisAlignItems', 'textAlignHorizontal', 'textAlignVertical', 'autoRename', 'strokeWeight', 'strokeAlign', 'clipsContent', 'effects', 'fontName', 'fontSize', 'letterSpacing', 'lineHeight', 'textCase', 'textDecoration', 'textAutoResize', 'layoutSizingHorizontal', 'layoutSizingVertical']);
const OK_F = new Set(['mainComponent', 'characters', 'styledTextSegments', 'fills', 'strokes', 'visible', 'opacity', 'name', 'width', 'height', 'boundVariables', ...SIMPLE]);
const vkey = async id => { try { const v = await figma.variables.getVariableByIdAsync(id); return v ? (v.key || v.name) : id; } catch (e) { return id; } };
const capture = async (lost, before) => { const data = []; for (const [ip, f] of lost) { const n = before.get(ip).n; const d = { ip, f, t: n.type }; if (f === 'mainComponent') { if (n.type !== 'INSTANCE') return null; d.v = await n.getMainComponentAsync(); if (!d.v) return null; } else if (f === 'characters') { if (n.type !== 'TEXT') return null; d.v = n.characters; } else if (f === 'fills' || f === 'strokes') { if (n[f] === figma.mixed) return null; d.v = JSON.parse(JSON.stringify(n[f])); } else if (f === 'visible' || f === 'opacity' || f === 'name') d.v = n[f]; else if (f === 'width' || f === 'height') d.v = [n.width, n.height]; else if (f === 'styledTextSegments' || f === 'boundVariables') d.v = null; else if (SIMPLE.has(f)) { if (n[f] === figma.mixed || n[f] === undefined) return null; d.v = JSON.parse(JSON.stringify(n[f])); } else return null; data.push(d); } return data; };
const order = data => data.sort((a, b) => (a.ip.split('.').length - b.ip.split('.').length) || (a.f === 'mainComponent' ? -1 : b.f === 'mainComponent' ? 1 : 0));
const applyOne = async (n, d) => { if (d.f === 'mainComponent') { if (n.type !== 'INSTANCE') return false; const cur = await n.getMainComponentAsync(); if (!cur || cur.id !== d.v.id) n.swapComponent(d.v); } else if (d.f === 'characters') { if (n.type !== 'TEXT') return false; await Promise.all(n.getRangeAllFontNames(0, Math.max(1, n.characters.length)).map(fn => figma.loadFontAsync(fn))); n.characters = d.v; } else if (d.f === 'fills' || d.f === 'strokes') { if (n.type !== d.t) return false; n[d.f] = d.v; } else if (d.f === 'visible' || d.f === 'opacity' || d.f === 'name') n[d.f] = d.v; else if (d.f === 'width' || d.f === 'height') { try { if (Math.abs(n.width - d.v[0]) > 0.5 || Math.abs(n.height - d.v[1]) > 0.5) n.resize(d.v[0], d.v[1]); } catch (e) {} } else if (SIMPLE.has(d.f)) { if (n.type === 'TEXT') { await Promise.all(n.getRangeAllFontNames(0, Math.max(1, n.characters.length)).map(fn => figma.loadFontAsync(fn))); if (d.f === 'fontName') await figma.loadFontAsync(d.v); } try { n[d.f] = d.v; } catch (e) { return false; } } return true; };
const valOk = (n, d) => { if (!n) return false; if (d.f === 'fills' || d.f === 'strokes') return n[d.f] !== figma.mixed && JSON.stringify(n[d.f]) === JSON.stringify(d.v); if (d.f === 'visible' || d.f === 'opacity' || d.f === 'name') return n[d.f] === d.v; if (d.f === 'characters') return n.characters === d.v; if (SIMPLE.has(d.f)) return JSON.stringify(n[d.f]) === JSON.stringify(d.v); return true; };
const latest = new Map();
const sid = a => (a.parent && a.parent.type === 'COMPONENT_SET' ? a.parent.name + '/' : '') + a.name;
const swapScan = async (i, m) => { const sw = []; for (const n of i.findAllWithCriteria({ types: ['INSTANCE'] })) { const ip = ipath(n, i); if (ip === null || sw.some(x => ip.startsWith(x.ip + '.'))) continue; const mn = byIdx(m, ip); if (!mn || mn.type !== 'INSTANCE') continue; const a = await n.getMainComponentAsync(), b = await mn.getMainComponentAsync(); if (a && b && sid(a) !== sid(b)) { let v = a; if (a.remote) { if (!latest.has(a.key)) { try { latest.set(a.key, await figma.importComponentByKeyAsync(a.key)); } catch (e) { latest.set(a.key, null); } } v = latest.get(a.key) || a; } sw.push({ ip, f: 'mainComponent', t: 'INSTANCE', v, s: sid(a) }); } } return sw; };
const isMain = async (n, v) => { if (!n || n.type !== 'INSTANCE') return false; const a = await n.getMainComponentAsync(); return !!a && (a.id === v.id || a.key === v.key || sid(a) === sid(v)); };
for (const pg of pages) {
await pg.loadAsync();
const list = pg.findAllWithCriteria({ types: ['INSTANCE'] }).filter(i => !i.id.startsWith('I'));
for (const i of list) { g++; if (g <= START) continue; if (Date.now() - t0 > LIMIT) { if (out.next == null) out.next = g - 1; continue; } out.seen++;
let m; try { m = await i.getMainComponentAsync(); } catch (e) { continue; }
if (!m || !m.remote) continue;
if (!latest.has(m.key)) { try { latest.set(m.key, await figma.importComponentByKeyAsync(m.key)); } catch (e) { latest.set(m.key, null); } }
const L = latest.get(m.key);
if (!L) { out.noLatest++; continue; }
if (L.id === m.id) continue;
const bT = texts(i), bP = norm(i.componentProperties), before = await ovIdx(i);
let sw = []; try { sw = await swapScan(i, m); } catch (e) { sw = []; }
const propsOk = c => Object.keys(bP).every(k => same(bP[k], norm(c.componentProperties)[k]));
let ok = false, plan = null, why = '';
let c = null;
try {
c = i.clone(); c.swapComponent(L);
const after = await ovIdx(c);
const lost = [];
for (const [ip, o] of before) { const nip = mapIp(i, c, ip); const a = nip === null ? null : after.get(nip); for (const f of o.f) { if (f === 'mainComponent' && sw.some(x => x.ip === ip)) continue; if (!a || !a.f.includes(f)) lost.push([ip, f]); } }
const swLost = []; for (const x of sw) { const nip = mapIp(i, c, x.ip); if (!(await isMain(byIdx(c, nip), x.v))) swLost.push(x); }
if (!lost.length && !swLost.length) { ok = same(bT, texts(c)) && propsOk(c); why = ok ? '' : 'txt/props'; plan = []; }
else if (lost.every(([ip, f]) => OK_F.has(f))) {
let data = await capture(lost, before);
if (!data) why = 'capture';
else {
data = order(swLost.concat(data)); plan = [];
for (const d of data) { const nip = mapIp(i, c, d.ip); const n = byIdx(c, nip); if (!n) { why = 'nomap ' + d.ip; plan = null; break; } if (d.v === null) continue; if (!(await applyOne(n, d))) { why = 'apply ' + d.f; plan = null; break; } plan.push({ nip, d }); }
if (plan) { let bad = ''; for (const p of plan) { const n = byIdx(c, p.nip); if (p.d.f === 'mainComponent' ? !(await isMain(n, p.d.v)) : !valOk(n, p.d)) { bad = p.d.f + '@' + p.d.ip; break; } } for (const x of sw) { if (!(await isMain(byIdx(c, mapIp(i, c, x.ip)), x.v))) { bad = 'swap@' + x.ip; break; } } ok = !bad && same(bT, texts(c)) && propsOk(c); why = ok ? '' : (bad || 'txt/props'); }
}
} else why = 'fields ' + [...new Set(lost.filter(([ip, f]) => !OK_F.has(f)).map(x => x[1]))].slice(0, 3).join(',');
} catch (e) { ok = false; why = 'err ' + e.message; }
if (c) T(() => c.remove());
if (!ok) { out.skipped++; const s = (m.parent && m.parent.type === 'COMPONENT_SET' ? m.parent.name : m.name).slice(0, 24) + ' (' + why.slice(0, 40) + ')'; out.skippedSets[s] = (out.skippedSets[s] || 0) + 1; continue; }
try { i.swapComponent(L); if (plan && plan.length) { let good = true; for (const p of plan) { const n = byIdx(i, p.nip); if (!n || !(await applyOne(n, p.d))) { good = false; break; } } if (good && same(bT, texts(i))) out.reapplied++; else out.errors.push('REAPPLY FAIL ' + i.id); } out.updated++; } catch (e) { if (out.errors.length < 6) out.errors.push(i.id + ': ' + e.message); }
}
}
}

out.total = g; out.ms = Date.now() - t0; out.errors = out.errors.slice(0, 6); const ks = Object.entries(out.skippedSets).sort((a, b) => b[1] - a[1]).slice(0, 12); out.skippedSets = Object.fromEntries(ks); return out;