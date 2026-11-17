/* NusukChat v2.0 — code port of Figma "💬 Chat UI" (file b2JRq5iuFo8rvl354ggpjR).
   Depends on: React 18, NusukDL (tokens.css, components/bundle.css, components/bundle.js).
   Every component carries data-figma="<node id>" so QA can trace it back to Figma. */
(function () {
  var h = React.createElement, F = React.Fragment, N = window.NusukDL;
  if (!N) { console.error('NusukChat: load NusukDL (components/bundle.js) first'); return; }

  /* ---------- Exact SVGs exported from the Figma file (Hugeicons via 🎨 Icons) ---------- */
  var SVG = {
    copy: '<svg viewBox="0 0 17.916 17.915" fill="none" aria-hidden="true"><path fill="currentColor" d="M11.46 0.00585994C12.7248 0.00693403 13.75 1.03294 13.75 2.29785V5.83594L15.626 5.83789C16.891 5.83878 17.916 6.8649 17.916 8.12988V15.623C17.916 16.8886 16.8905 17.9149 15.625 17.915H8.125C6.85935 17.915 5.83301 16.8887 5.83301 15.623V13.748H2.29102C1.02557 13.7479 9.97168e-05 12.7225 0 11.457V2.29102C0.000176895 1.02489 1.0268 -0.000882645 2.29297 5.69924e-07L11.46 0.00585994ZM8.125 7.08301C7.5496 7.08282 7.08301 7.54955 7.08301 8.125V15.623C7.08301 16.1983 7.5497 16.665 8.125 16.665H15.625C16.2001 16.6649 16.666 16.1982 16.666 15.623V8.12988C16.666 7.55491 16.2 7.0883 15.625 7.08789L8.125 7.08301ZM2.29199 1.25C1.71656 1.24964 1.25018 1.71561 1.25 2.29102V11.457C1.2501 12.0321 1.71593 12.4979 2.29102 12.498H5.83301V8.125C5.83301 6.85882 6.85984 5.83229 8.12598 5.83301L12.5 5.83496V2.29785C12.5 1.72292 12.0339 1.2564 11.459 1.25586L2.29199 1.25Z"/></svg>',
    up: '<svg viewBox="0 0 17.9162 15.416" fill="none" aria-hidden="true"><path fill="currentColor" d="M10.5547 0C10.7217 5.39338e-05 10.8817 0.0667434 10.999 0.185547L11.0586 0.245117C12.4439 1.64739 12.8312 3.76554 12.0371 5.57422L11.9229 5.83301H15.6436C17.2181 5.83313 18.2996 7.40068 17.7881 8.87988L16.0596 13.8799C15.7426 14.7963 14.8841 15.416 13.9141 15.416H1.45801C0.652599 15.416 7.83738e-06 14.7634 0 13.958V7.29102C0.000175916 6.48575 0.652701 5.83301 1.45801 5.83301H4.53027L10.1104 0.185547C10.2278 0.0668031 10.3877 -3.47526e-07 10.5547 0ZM1.45801 7.08301C1.34306 7.08301 1.25018 7.17611 1.25 7.29102V13.958C1.25001 14.0731 1.34295 14.166 1.45801 14.166H4.16602V7.08301H1.45801ZM5.41602 6.71484V14.166H13.9141C14.3434 14.166 14.7326 13.8911 14.8779 13.4707L16.6064 8.4707C16.8442 7.78282 16.3373 7.08313 15.6436 7.08301H10.9658C10.7549 7.0829 10.5577 6.97644 10.4424 6.7998C10.3271 6.62322 10.3089 6.40014 10.3936 6.20703L10.8926 5.07129C11.4064 3.90053 11.2516 2.55655 10.5244 1.54492L5.41602 6.71484Z"/></svg>',
    down: '<svg viewBox="0 0 17.9162 15.416" fill="none" aria-hidden="true"><path fill="currentColor" d="M13.9141 0C14.8841 0 15.7426 0.619695 16.0596 1.53613L17.7881 6.53613C18.2996 8.01534 17.2181 9.58289 15.6436 9.58301H11.9229L12.0371 9.8418C12.8312 11.6505 12.4439 13.7686 11.0586 15.1709L10.999 15.2305C10.8817 15.3493 10.7217 15.416 10.5547 15.416C10.3877 15.416 10.2278 15.3492 10.1104 15.2305L4.53027 9.58301H1.45801C0.652701 9.58301 0.000176045 8.93026 0 8.125V1.45801C7.65485e-06 0.652602 0.652599 3.22857e-06 1.45801 0H13.9141ZM5.41602 8.70117L10.5244 13.8711C11.2516 12.8595 11.4064 11.5155 10.8926 10.3447L10.3936 9.20898C10.3089 9.01587 10.3271 8.79279 10.4424 8.61621C10.5577 8.43958 10.7549 8.33311 10.9658 8.33301H15.6436C16.3373 8.33289 16.8442 7.63319 16.6064 6.94531L14.8779 1.94531C14.7326 1.52493 14.3434 1.25 13.9141 1.25H5.41602V8.70117ZM1.45801 1.25C1.34295 1.25 1.25001 1.34295 1.25 1.45801V8.125C1.25018 8.23991 1.34306 8.33301 1.45801 8.33301H4.16602V1.25H1.45801Z"/></svg>',
    edit: '<svg viewBox="0 0 14.334 14.0575" fill="none" aria-hidden="true"><path fill="currentColor" d="M13.834 13.0576C14.11 13.0578 14.334 13.2816 14.334 13.5576C14.3338 13.8335 14.1098 14.0574 13.834 14.0576H8.5C8.22414 14.0574 8.00022 13.8335 8 13.5576C8 13.2816 8.22401 13.0578 8.5 13.0576H13.834ZM9.00781 0.341797C9.46342 -0.113841 10.2026 -0.113825 10.6582 0.341797L13.7148 3.39844C14.1705 3.85405 14.1705 4.59322 13.7148 5.04883L4.85352 13.9111C4.75983 14.0048 4.63245 14.0566 4.5 14.0566H0.5C0.224007 14.0565 0 13.8327 0 13.5566V9.55664C0.000121471 9.4242 0.0528316 9.29678 0.146484 9.20313L9.00781 0.341797ZM1 9.76465V13.0566H4.29297L10.459 6.88965L7.16602 3.59668L1 9.76465ZM9.95117 1.04883C9.88608 0.983739 9.77993 0.983737 9.71484 1.04883L7.87305 2.88965L11.166 6.18262L13.0078 4.3418C13.0729 4.27671 13.0729 4.17056 13.0078 4.10547L9.95117 1.04883Z"/></svg>',
    user: '<svg viewBox="0 0 9.23633 10.292" fill="none" aria-hidden="true"><path fill="currentColor" d="M5.14648 5.80566C7.40527 5.80578 9.23615 7.63673 9.23633 9.89551C9.23633 10.1141 9.05938 10.2919 8.84082 10.292H0.396484C0.177872 10.292 0 10.1141 0 9.89551C0.000176095 7.63666 1.83193 5.80566 4.09082 5.80566H5.14648ZM4.09082 6.59766C2.40301 6.59766 1.01098 7.86485 0.81543 9.5H8.4209C8.22533 7.86495 6.83418 6.59776 5.14648 6.59766H4.09082ZM4.61816 0C6.00268 0 7.12494 1.12234 7.125 2.50684C7.125 3.89138 6.00271 5.01367 4.61816 5.01367C3.23377 5.0135 2.11133 3.89127 2.11133 2.50684C2.11139 1.12245 3.2338 0.000175909 4.61816 0ZM4.61816 0.791992C3.67103 0.792168 2.90338 1.55967 2.90332 2.50684C2.90332 3.45405 3.67099 4.22248 4.61816 4.22266C5.56549 4.22266 6.33398 3.45416 6.33398 2.50684C6.33393 1.55956 5.56545 0.791992 4.61816 0.791992Z"/></svg>',
    chipArrow: '<svg viewBox="0 0 11.667 7.66594" fill="none" aria-hidden="true"><path fill="currentColor" d="M3.47949 0.146484C3.67476 -0.048777 3.99126 -0.0487785 4.18652 0.146484C4.38172 0.341753 4.38176 0.658276 4.18652 0.853516L1.70703 3.33301H11.167C11.4429 3.33326 11.6669 3.5571 11.667 3.83301C11.667 4.109 11.4429 4.33276 11.167 4.33301H1.70703L4.18652 6.8125C4.38176 7.00774 4.3817 7.32426 4.18652 7.51953C3.99126 7.71479 3.67475 7.71479 3.47949 7.51953L0.146484 4.18652C-0.0487757 3.99126 -0.048778 3.67475 0.146484 3.47949L3.47949 0.146484Z"/></svg>',
  };
  var C_LOC = { value: 'makkah' };  /* app-wide default: set NusukChat.setLocation('madinah') when the pilgrim is in Madinah */
  function Svg(k, cls) { return h('span', { className: cls || 'nkc-svg', style: { display: 'inline-grid', placeItems: 'center' }, dangerouslySetInnerHTML: { __html: SVG[k] } }); }
  function Ic(name, size) { return h(N.Icon, { name: name, size: size }); }
  var LANG = { v: 'ar' };
  function tl(ar, en) { return LANG.v === 'en' ? en : ar; }
  function now() { return tl('02:22 م', '2:22 PM'); }

  /* ---------- Atoms ---------- */
  /* ---------- Nusuk Bot (Figma component set 80559:28819) ----------
     location: 'makkah' (gold hexagon, 80559:28820) | 'madinah' (green dome, 80559:28823)
     Eyes: _Eyes component set 80559:28826, 7 frames. Prototype (read from Figma reactions):
       frame 1 --AFTER_TIMEOUT 300ms--> 2 --ON_CLICK--> 3 --> 4 --> 5 --> 6 --> 7 (end). Transitions: instant.
     motion: 'live' (default since v2.3.0: follows the pointer, idle glances + blinks; see EyeEngine) | 'prototype' (exactly as Figma) | 'sequence' (AI Generated: auto-plays 1→7 at the same 300ms) | 'static' */
  var EYES = [
    [30, 'M4 12.0864C4 18.3976 5.99223 23.5138 8.44978 23.5138C10.9073 23.5138 12.8996 18.3976 12.8996 12.0864C12.8996 5.77518 10.9073 0.658936 8.44978 0.658936C5.99223 0.658936 4 5.77518 4 12.0864Z', 'M22.7308 17.9136C22.7308 24.2248 26.0967 29.3411 30.2488 29.3411C34.4008 29.3411 37.7667 24.2248 37.7667 17.9136C37.7667 11.6024 34.4008 6.48617 30.2488 6.48617C26.0967 6.48617 22.7308 11.6024 22.7308 17.9136Z'],
    [30, 'M4 13.6844C4 15.7192 6.68392 17.3687 9.9947 17.3687C13.3055 17.3687 15.9894 15.7192 15.9894 13.6844C15.9894 11.6495 13.3055 10 9.9947 10C6.68392 10 4 11.6495 4 13.6844Z', 'M28.7308 15.5633C28.7308 17.5981 32.0967 19.2476 36.2488 19.2476C40.4008 19.2476 43.7667 17.5981 43.7667 15.5633C43.7667 13.5285 40.4008 11.8789 36.2488 11.8789C32.0967 11.8789 28.7308 13.5285 28.7308 15.5633Z'],
    [29, 'M4 14.2757C4 14.4279 6.68392 14.5514 9.9947 14.5514C13.3055 14.5514 15.9894 14.4279 15.9894 14.2757C15.9894 14.1234 13.3055 14 9.9947 14C6.68392 14 4 14.1234 4 14.2757Z', 'M28.7308 14.4163C28.7308 14.5685 32.0967 14.692 36.2488 14.692C40.4008 14.692 43.7667 14.5685 43.7667 14.4163C43.7667 14.264 40.4008 14.1406 36.2488 14.1406C32.0967 14.1406 28.7308 14.264 28.7308 14.4163Z'],
    [29, 'M45.9459 14.4274C45.9459 20.7387 49.3118 25.8549 53.4638 25.8549C57.6159 25.8549 60.9818 20.7387 60.9818 14.4274C60.9818 8.11624 57.6159 3 53.4638 3C49.3118 3 45.9459 8.11624 45.9459 14.4274Z', 'M19.0183 14.4274C19.0183 20.7387 22.3842 25.8549 26.5363 25.8549C30.6883 25.8549 34.0542 20.7387 34.0542 14.4274C34.0542 8.11624 30.6883 3 26.5363 3C22.3842 3 19.0183 8.11624 19.0183 14.4274Z'],
    [29, 'M75.9999 14.2757C75.9999 14.4279 73.316 14.5514 70.0052 14.5514C66.6944 14.5514 64.0105 14.4279 64.0105 14.2757C64.0105 14.1234 66.6944 14 70.0052 14C73.316 14 75.9999 14.1234 75.9999 14.2757Z', 'M51.2691 14.4163C51.2691 14.5685 47.9032 14.692 43.7511 14.692C39.5991 14.692 36.2332 14.5685 36.2332 14.4163C36.2332 14.264 39.5991 14.1406 43.7511 14.1406C47.9032 14.1406 51.2691 14.264 51.2691 14.4163Z'],
    [30, 'M75.9999 13.6844C75.9999 15.7192 73.316 17.3687 70.0052 17.3687C66.6944 17.3687 64.0105 15.7192 64.0105 13.6844C64.0105 11.6495 66.6944 10 70.0052 10C73.316 10 75.9999 11.6495 75.9999 13.6844Z', 'M51.2691 15.5633C51.2691 17.5981 47.9032 19.2476 43.7511 19.2476C39.5991 19.2476 36.2332 17.5981 36.2332 15.5633C36.2332 13.5285 39.5991 11.8789 43.7511 11.8789C47.9032 11.8789 51.2691 13.5285 51.2691 15.5633Z'],
    [29, 'M76 11.4274C76 17.7387 74.0078 22.8549 71.5502 22.8549C69.0927 22.8549 67.1005 17.7387 67.1005 11.4274C67.1005 5.11624 69.0927 0 71.5502 0C74.0078 0 76 5.11624 76 11.4274Z', 'M57.2692 17.2547C57.2692 23.5659 53.9033 28.6821 49.7512 28.6821C45.5992 28.6821 42.2333 23.5659 42.2333 17.2547C42.2333 10.9435 45.5992 5.82723 49.7512 5.82723C53.9033 5.82723 57.2692 10.9435 57.2692 17.2547Z']
  ];
  var EYE_NODES = ['80559:28827', '80559:28829', '80559:28831', '80559:28833', '80559:28835', '80559:28837', '80559:28839'];
  var BODY = {
    makkah: { node: '80559:28820', vb: '0 0 80 92', box: { top: '-1.11%', height: '102.22%' }, eyes: { top: '41.11%', left: '-1.25%', w: '100%', h: '33.33%' },
      path: 'M40 0L0 23V69L40 92L80 69V23L40 0Z', grad: function (id) { return '<linearGradient id="' + id + '" x1="-18.2608" y1="10.3173" x2="39.6839" y2="92.484" gradientUnits="userSpaceOnUse"><stop offset="0.329613" style="stop-color:var(--nkc-bot-makkah-a)"/><stop offset="1" style="stop-color:var(--nkc-bot-makkah-b);stop-opacity:0"/></linearGradient>'; } },
    madinah: { node: '80559:28823', vb: '0 0 80 82', box: { top: '2.46%', height: '90.99%' }, eyes: { top: '39.6%', left: '-0.03%', w: '100%', h: '33.34%' },
      path: 'M42.9746 1.40572C41.4344 -0.468562 38.5656 -0.468561 37.0254 1.40572C34.8344 4.07201 32.0469 6.18547 28.8881 7.57531L22.0989 10.5625C8.66939 16.4714 0 29.7573 0 44.4293V65.2859L20.3896 76.755C32.5661 83.6043 47.4339 83.6043 59.6105 76.755L80 65.2859V44.4293C80 29.7573 71.3306 16.4714 57.9011 10.5625L51.1119 7.57531C47.9531 6.18547 45.1656 4.07201 42.9746 1.40572Z',
      grad: function (id) { return '<radialGradient id="' + id + '" cx="0" cy="0" r="1" gradientTransform="matrix(12.4306 85.1574 87.4055 -12.1109 27.57 2.62852)" gradientUnits="userSpaceOnUse"><stop offset="0.161435" style="stop-color:var(--nkc-bot-madinah-a)"/><stop offset="0.86903" style="stop-color:var(--nkc-bot-madinah-b);stop-opacity:0"/></radialGradient>'; } }
  };
  /* ---------- Live eyes engine (v2.3.0) ----------
     One shared requestAnimationFrame loop + one passive pointermove listener for every Bot on the page.
     Geometry is interpolated from the Figma _Eyes frames: 1 = look left, 4 = centre, 7 = look right (80×30 eye box).
     - Pointer moved in the last 1.6 s → eyes follow it (screen direction, corrected for mirrored bots).
     - Idle → random, eased glances every 1.2–3.6 s, plus natural blinks every 2.6–6 s (12% double blink).
     - Only bots on screen are animated (IntersectionObserver); the loop sleeps when nothing moves, stops when the tab is hidden.
     - prefers-reduced-motion → eyes hold the centre frame, no loop. */
  var GAZE = { // [cx, cy, rx] for eye A (screen-left) and eye B; ry = 11.43 open
    L: [[8.45, 12.09, 4.45], [30.25, 17.91, 7.52]],
    C: [[26.54, 14.43, 7.52], [53.46, 14.43, 7.52]],
    R: [[49.75, 17.25, 7.52], [71.55, 11.43, 4.45]]
  };
  var RY = 11.43;
  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function eyeAt(i, g, gy) { // g in [-1,1]
    var c = GAZE.C[i], s = g < 0 ? GAZE.L[i] : GAZE.R[i], t = Math.abs(g);
    t = t * t * (3 - 2 * t); // smoothstep: keeps the centre calm, ends match Figma frames 1 / 7 exactly
    return [lerp(c[0], s[0], t), lerp(c[1], s[1], t) + gy * 2.6, lerp(c[2], s[2], t)];
  }
  var EyeEngine = (function () {
    var all = new Set(), vis = new Set(), io = null, raf = 0, sleepT = 0, last = 0, started = false;
    var ptr = { x: 0, y: 0, t: -1e9 };
    function rnd(a, b) { return a + Math.random() * (b - a); }
    function now() { return performance.now(); }
    function newGlance(it, t) {
      var r = Math.random();
      it.tx = r < 0.35 ? rnd(-0.15, 0.15) : rnd(-1, 1);           // centre-weighted
      it.ty = rnd(-0.55, 0.45);
      it.nextGlance = t + rnd(1200, 3600);
    }
    function scheduleBlink(it, t) { it.nextBlink = t + rnd(2600, 6000); }
    function start() {
      if (started) return; started = true;
      var onP = function (e) { ptr.x = e.clientX; ptr.y = e.clientY; ptr.t = now(); kick(); };
      window.addEventListener('pointermove', onP, { passive: true }); window.addEventListener('pointerdown', onP, { passive: true });
      document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); else kick(); });
      if ('IntersectionObserver' in window) io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { var it = e.target.__nkcEye; if (!it) return; if (e.isIntersecting) vis.add(it); else vis.delete(it); });
        kick();
      }, { rootMargin: '40px' });
    }
    function stop() { if (raf) cancelAnimationFrame(raf); raf = 0; clearTimeout(sleepT); }
    function kick() { clearTimeout(sleepT); if (!raf && !document.hidden && vis.size) { last = now(); raf = requestAnimationFrame(loop); } }
    function loop(t) {
      raf = 0;
      var dt = Math.min(0.05, (t - last) / 1000); last = t;
      var following = t - ptr.t < 1600, active = false, wake = Infinity;
      // read phase (layout reads before any write)
      if (following) vis.forEach(function (it) { it.rect = it.el.getBoundingClientRect(); });
      vis.forEach(function (it) {
        if (following && it.rect) {
          var cx = it.rect.left + it.rect.width / 2, cy = it.rect.top + it.rect.height * 0.55;
          var dx = clamp((ptr.x - cx) / 240, -1, 1), dy = clamp((ptr.y - cy) / 260, -1, 1);
          it.tx = it.mirror ? -dx : dx; it.ty = dy * 0.8; it.nextGlance = t + rnd(700, 1600);
        } else if (t >= it.nextGlance) newGlance(it, t);
        var k = 1 - Math.exp(-dt * (following ? 11 : 6.5));         // critically damped ease, frame-rate independent
        it.g += (it.tx - it.g) * k; it.gy += (it.ty - it.gy) * k;
        // blink: 170 ms, sin curve
        var open = 1;
        if (it.blinkT0 >= 0) {
          var p = (t - it.blinkT0) / 170;
          if (p >= 1) { it.blinkT0 = -1; if (it.dbl) { it.dbl = false; it.nextBlink = t + 120; } else scheduleBlink(it, t); }
          else open = 1 - 0.94 * Math.sin(Math.PI * p);
        } else if (t >= it.nextBlink) { it.blinkT0 = t; it.dbl = Math.random() < 0.12; }
        var moving = Math.abs(it.tx - it.g) > 0.002 || Math.abs(it.ty - it.gy) > 0.002 || it.blinkT0 >= 0;
        if (moving) active = true; else wake = Math.min(wake, it.nextGlance, it.nextBlink);
        it.open = open;
      });
      // write phase
      vis.forEach(function (it) {
        for (var i = 0; i < 2; i++) {
          var e = eyeAt(i, it.g, it.gy), el = it.ell[i], ry = Math.max(0.35, RY * it.open);
          var key = e[0].toFixed(2) + e[1].toFixed(2) + e[2].toFixed(2) + ry.toFixed(2);
          if (el.__k !== key) { el.__k = key; el.setAttribute('cx', e[0].toFixed(2)); el.setAttribute('cy', e[1].toFixed(2)); el.setAttribute('rx', e[2].toFixed(2)); el.setAttribute('ry', ry.toFixed(2)); }
        }
      });
      if (active || following) raf = requestAnimationFrame(loop);
      else if (wake < Infinity) sleepT = setTimeout(kick, Math.max(16, wake - now()));
    }
    return {
      add: function (el, mirror) {
        start();
        var t = now(), it = { el: el, ell: el.querySelectorAll('ellipse'), mirror: !!mirror, g: 0, gy: 0, tx: 0, ty: 0, open: 1, blinkT0: -1, dbl: false };
        it.nextGlance = t + rnd(300, 1400); it.nextBlink = t + rnd(800, 4000);
        el.__nkcEye = it; all.add(it);
        if (io) io.observe(el); else vis.add(it);
        kick();
        return function () { all.delete(it); vis.delete(it); if (io) io.unobserve(el); el.__nkcEye = null; };
      },
      blink: function (el) { var it = el && el.__nkcEye; if (it && it.blinkT0 < 0) { it.blinkT0 = now(); kick(); } },
      size: function () { return { total: all.size, visible: vis.size, running: !!raf }; }
    };
  })();
  var botSeq = 0;
  function reduced() { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  function Bot(p) {
    p = p || {};
    var loc = (p.location || 'makkah').toLowerCase() === 'madinah' || (p.location || '').toLowerCase() === 'madina' ? 'madinah' : 'makkah';
    var b = BODY[loc], size = p.size || 24, motion = p.motion || 'live';
    var idRef = React.useRef(null); if (!idRef.current) idRef.current = 'nkcBot' + (++botSeq);
    var elRef = React.useRef(null);
    var f = React.useState(p.frame || 0), frame = f[0], setFrame = f[1];
    var rm = reduced(), still = motion === 'static' || (rm && motion !== 'live');
    var live = motion === 'live';
    React.useEffect(function () {
      if (!live || rm || !elRef.current) return;
      return EyeEngine.add(elRef.current, !!p.mirror);
    }, [live, rm, p.mirror, loc]);
    React.useEffect(function () {
      if (still || live) return;
      if (motion === 'prototype' && frame === 0) { var t = setTimeout(function () { setFrame(1); }, 300); return function () { clearTimeout(t); }; }
      if (motion === 'sequence') { var u = setTimeout(function () { setFrame(frame >= 6 ? 0 : frame + 1); }, frame >= 6 ? 2400 : 300); return function () { clearTimeout(u); }; }
    }, [frame, motion, still]);
    var tap = motion === 'prototype' && frame >= 1 && frame < 6 && !still ? function () { setFrame(frame + 1); } : null;
    var svgBody = '<svg class="nkc-bot-body" viewBox="' + b.vb + '" preserveAspectRatio="none" fill="none" aria-hidden="true" style="position:absolute;left:0;width:100%;top:' + b.box.top + ';height:' + b.box.height + '"><defs>' + b.grad(idRef.current) + '</defs><path d="' + b.path + '" fill="url(#' + idRef.current + ')"/></svg>';
    var eyeStyle = 'position:absolute;top:' + b.eyes.top + ';left:' + b.eyes.left + ';width:' + b.eyes.w + ';height:' + b.eyes.h;
    var svgEyes, fi;
    if (live) {
      fi = 3; var a = eyeAt(0, 0, 0), c = eyeAt(1, 0, 0);
      svgEyes = '<svg class="nkc-bot-eyes" viewBox="0 0 80 30" preserveAspectRatio="none" fill="none" aria-hidden="true" data-figma="80559:28826" style="' + eyeStyle + '"><ellipse fill="white" cx="' + a[0] + '" cy="' + a[1] + '" rx="' + a[2] + '" ry="' + RY + '"/><ellipse fill="white" cx="' + c[0] + '" cy="' + c[1] + '" rx="' + c[2] + '" ry="' + RY + '"/></svg>';
    } else {
      fi = still ? (p.frame || 0) : frame; var e = EYES[fi];
      svgEyes = '<svg class="nkc-bot-eyes" viewBox="0 0 80 ' + e[0] + '" preserveAspectRatio="none" fill="none" aria-hidden="true" data-figma="' + EYE_NODES[fi] + '" style="' + eyeStyle + '"><path fill="white" d="' + e[1] + '"/><path fill="white" d="' + e[2] + '"/></svg>';
    }
    var props = { ref: elRef, className: 'nkc-bot ' + loc + (p.mirror ? ' mirror' : '') + (tap ? ' tappable' : '') + (live ? ' live' : ''), style: { width: size, height: size * 90 / 80, '--nkc-bot-blur': (size >= 48 ? (2 * size / 80).toFixed(2) : '0') + 'px', '--nkc-bot-glow': (11 * size / 80).toFixed(2) + 'px' }, role: 'img', 'aria-label': p.label || tl('نسك AI', 'Nusuk AI'), 'data-figma': b.node, 'data-motion': motion, 'data-eyes': live ? 'live' : fi + 1, dangerouslySetInnerHTML: { __html: svgBody + svgEyes } };
    if (live) props.onClick = function () { EyeEngine.blink(elRef.current); };
    if (tap) { props.onClick = tap; props.tabIndex = 0; props.onKeyDown = function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); tap(); } }; props.role = 'button'; }
    return h('span', props);
  }
  function Avatar() { return h('span', { className: 'nkc-avatar', role: 'img', 'aria-label': tl('أنت', 'You'), 'data-figma': '_Avatar_Master', dangerouslySetInnerHTML: { __html: SVG.user } }); }
  function Trail(p) { return h('button', { type: 'button', className: 'nkc-trail' + (p.iconOnly ? ' icon' : ''), onClick: p.onClick, 'aria-label': p.ariaLabel, 'data-figma': '66401:290' }, p.icon ? Svg(p.icon) : (p.dlIcon ? Ic(p.dlIcon, 'sm') : null), p.iconOnly ? null : p.children); }
  function EditAnswer(p) { return h('div', { className: 'nkc-edit' }, h(Trail, { icon: 'edit', onClick: p.onEdit }, tl('تعديل الإجابة', 'Edit answer'))); }

  function Actions(p) {
    var s = React.useState(null), vote = s[0], setVote = s[1];
    var c = React.useState(false), copied = c[0], setCopied = c[1];
    function copy() { try { navigator.clipboard && navigator.clipboard.writeText(p.text || ''); } catch (e) {} setCopied(true); setTimeout(function () { setCopied(false); }, 1600); if (p.onCopy) p.onCopy(); }
    return h('div', { className: 'nkc-acts', 'data-figma': 'I80601:9159;80481:3848;80576:3367' },
      h('button', { type: 'button', className: 'nkc-ib', 'aria-label': copied ? tl('نُسخت الإجابة', 'Answer copied') : tl('نسخ الإجابة', 'Copy answer'), onClick: copy, 'aria-pressed': copied }, copied ? Ic('tick-02', 'nr') : Svg('copy')),
      h('button', { type: 'button', className: 'nkc-ib', 'aria-label': tl('إجابة مفيدة', 'Helpful'), 'aria-pressed': vote === 'up', onClick: function () { setVote(vote === 'up' ? null : 'up'); if (p.onVote) p.onVote('up'); } }, Svg('up')),
      h('button', { type: 'button', className: 'nkc-ib', 'aria-label': tl('إجابة غير مفيدة', 'Not helpful'), 'aria-pressed': vote === 'down', onClick: function () { setVote(vote === 'down' ? null : 'down'); if (p.onVote) p.onVote('down'); } }, Svg('down')),
      h('span', { className: 'nkc-sr', 'aria-live': 'polite' }, copied ? tl('نُسخت الإجابة', 'Answer copied') : ''));
  }

  /* ---------- _Chat Container Master ----------
     from: 'nusuk' | 'user'; bg: true (Body) | false (Content No BG); question: header line above the bubble */
  function Message(p) {
    var from = p.from || 'nusuk', bg = p.bg !== false;
    var figma = p.figma || (from === 'user' ? (bg ? '80451:18765' : '80578:5289') : (bg ? '80451:18764' : '80578:5431'));
    return h('div', { className: 'nkc-msg', 'data-figma': figma, 'data-from': from },
      p.question ? h('div', { className: 'nkc-q' }, h(Bot, { location: p.location || C_LOC.value, mirror: true }), h('p', { className: 'nkc-q-text', style: { margin: 0 } }, p.question)) : null,
      h('div', { className: 'nkc-row ' + from },
        from === 'nusuk' ? (p.question ? h('span', { style: { width: 24, flex: 'none' } }) : h(Bot, { location: p.location || C_LOC.value, mirror: true })) : h(Avatar),
        h('div', { className: 'nkc-col' },
          h('div', { className: 'nkc-body' + (bg ? '' : ' nobg') }, p.children),
          p.footer === false ? null : h('div', { className: 'nkc-foot' },
            h('span', { className: 'nkc-time', dir: 'ltr' }, p.time || now()),
            p.actions ? h(Actions, { text: p.copyText }) : null))));
  }

  /* Nusuk Bot Messages (80559:28806): variant 'insight' (Default=Makkah 80559:28807, Variant3=Madinah 80559:28810)
     and 'pill' (Variant2=Makkah 80559:28813, Variant4=Madinah 80559:28816). */
  var NOTE_NODES = { makkah: { insight: '80559:28807', pill: '80559:28813' }, madinah: { insight: '80559:28810', pill: '80559:28816' } };
  function BotNote(p) {
    var loc = (p.location || C_LOC.value) === 'madinah' ? 'madinah' : 'makkah', v = p.variant === 'pill' ? 'pill' : 'insight';
    return h('div', { className: 'nkc-note ' + v + ' ' + loc, 'data-figma': NOTE_NODES[loc][v] },
      h(Bot, { location: loc, size: v === 'pill' ? 20 : 38, mirror: true, motion: p.motion }),
      h('p', { className: 'nkc-note-text' }, p.text));
  }

  /* ---------- AI Chat Messages variants ---------- */
  function Text(p) { // User=User|Nusuk, Style=Text
    return h(Message, { from: p.from, question: p.question, actions: p.from === 'nusuk', copyText: p.text, time: p.time, figma: p.from === 'user' ? '80392:4524' : '80601:9158' },
      h('p', { className: 'nkc-answer', style: { margin: 0 } }, p.text),
      p.children || null,
      p.from === 'user' && p.editable !== false ? h(EditAnswer, { onEdit: p.onEdit }) : null);
  }

  function Wave(p) {
    var bars = p.bars || [10, 16, 22, 14, 26, 18, 12, 20, 24, 14, 10, 18, 26, 16, 12, 22, 18, 10, 14, 24, 20, 12, 16, 26, 18, 14, 10, 20, 24, 16, 12, 18];
    var lit = Math.round((p.progress || 0) * bars.length);
    return h('div', { className: 'nkc-wave', 'aria-hidden': true }, bars.map(function (v, i) { return h('i', { key: i, className: i < lit ? 'on' : '', style: { height: v + 'px' } }); }));
  }
  function Voice(p) { // Style=Voice
    var s = React.useState(false), playing = s[0], setPlaying = s[1];
    var g = React.useState(p.progress || 0.35), prog = g[0], setProg = g[1];
    React.useEffect(function () { if (!playing) return; var t = setInterval(function () { setProg(function (x) { if (x >= 1) { setPlaying(false); return 0; } return Math.min(1, x + 0.04); }); }, 120); return function () { clearInterval(t); }; }, [playing]);
    return h(Message, { from: p.from, question: p.question, actions: p.from === 'nusuk', figma: p.from === 'user' ? '80392:4534' : '80601:9269' },
      h('div', { className: 'nkc-voice' },
        h('button', { type: 'button', className: 'nkc-play', onClick: function () { setPlaying(!playing); }, 'aria-label': playing ? 'إيقاف مؤقت' : 'تشغيل الرسالة الصوتية' }, Ic(playing ? 'pause' : 'play', 'sm')),
        h(Wave, { progress: prog }),
        h('span', { className: 'nkc-timer' }, p.duration || '0:13')));
  }

  function Chips(p) { // Style=Default — follow-up chips, no background
    var s = React.useState(null), picked = s[0], setPicked = s[1];
    return h(Message, { from: 'nusuk', bg: false, question: p.question, figma: p.figma || '80392:4581', time: p.time },
      p.lead || null,
      h('div', { className: 'nkc-chips' + (p.buttons ? ' btns' : ''), role: 'group', 'aria-label': p.label || tl('اقتراحات', 'Suggestions') }, (p.items || []).map(function (t, i) {
        if (p.buttons) return h(N.Button, { key: i, kind: p.kind || 'primary', size: 'md', icon: 'left', iconName: p.iconName || (LANG.v === 'en' ? 'arrow-right-02' : 'arrow-left-02'), onClick: function () { setPicked(i); if (p.onPick) p.onPick(t, i); } }, t);
        return h('button', { key: i, type: 'button', className: 'nkc-chip', 'aria-pressed': picked === i, onClick: function () { setPicked(i); if (p.onPick) p.onPick(t, i); } }, t, Svg('chipArrow'));
      })));
  }

  function Alert(p) { return h('div', { className: 'nkc-alert ' + (p.tone || 'error'), role: p.tone === 'error' || !p.tone ? 'alert' : 'status', 'data-figma': '68392:32025' }, h('span', { className: 'tx' }, p.children), h('span', { className: 'ic' }, Ic(p.icon || 'alert-02', 'nr'))); }
  function ErrorMsg(p) { // Style=Error
    return h(Chips, { figma: '80392:4595', buttons: p.buttons, kind: p.kind, items: p.items || [tl('أعد المحاولة', 'Try again')], onPick: p.onPick, question: p.question, lead: h(Alert, { tone: 'error' }, p.text) });
  }

  function Loading(p) { // Status=Loading, Type=Nusuk|User
    return h('div', { className: 'nkc-row ' + (p.from || 'nusuk'), 'data-figma': p.from === 'user' ? '80501:2248' : '80451:18763', role: 'status', 'aria-label': p.from === 'user' ? tl('يُرسل', 'Sending') : tl('نسك AI يكتب', 'Nusuk AI is typing') },
      p.from === 'user' ? h(Avatar) : h(Bot, { location: p.location || C_LOC.value, mirror: true }), h('span', { className: 'nkc-dots' }, h('i'), h('i'), h('i')), h('span', { style: { flex: 1 } }));
  }

  /* _Chat Container with Question (80453:2664) */
  function Question(p) {
    return h(Message, { from: 'nusuk', figma: p.figma || '80453:2664', time: p.time, footer: p.footer },
      h('div', { className: 'nkc-qb' },
        h('div', { className: 'nkc-type' }, p.typeFig ? FigIcon(p.typeFig, 16) : Ic(p.typeIcon || 'mail-validation-01', 'sm'), h('span', null, p.type || tl('عنوان مختصر', 'Short title')), h('span', { className: 'grow' }), p.help ? Ic('info', 'nr') : null),
        h('div', { className: 'nkc-title' }, p.title),
        p.desc ? h('div', { className: 'nkc-desc' }, p.desc) : null,
        p.onBack ? h('div', { className: 'nkc-back' }, h(Trail, { iconOnly: true, dlIcon: 'arrow-back', ariaLabel: tl('السؤال السابق', 'Previous question'), onClick: p.onBack })) : null),
      p.children ? h('div', { className: 'nkc-slot' }, p.children) : null,
      p.cta === false ? null : h('div', { className: 'nkc-cta' }, h(N.Button, { kind: 'primary', size: 'md', icon: 'right', iconName: 'tick-02', state: p.ctaState, onClick: p.onConfirm }, p.cta || tl('التأكيد والمتابعة', 'Confirm and continue'))));
  }

  /* Style=Days — Months_Interaction + DL Day Picker grid (80587:9465) */
  var WD = ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'];
  function Days(p) {
    var s = React.useState(p.selected || 22), sel = s[0], setSel = s[1];
    var first = p.firstWeekday == null ? 0 : p.firstWeekday, days = p.days || 30, today = p.today || 15;
    var avail = function (d) { return d < today ? 'none' : (d % 7 === 0 ? 'almost' : d % 5 === 0 ? 'filling' : 'available'); };
    var cells = []; for (var i = 0; i < first; i++) cells.push(h('span', { key: 'e' + i }));
    for (var d = 1; d <= days; d++) (function (d) {
      var disabled = d < today, a = avail(d);
      cells.push(h('button', { key: d, type: 'button', className: 'nkc-day', disabled: disabled, onClick: function () { setSel(d); }, 'aria-pressed': sel === d, 'aria-label': d + ' ' + (p.monthLabel || 'يونيو') },
        p.moons && p.moons.indexOf(d) > -1 ? h('span', { className: 'moon' }, Ic('moon', 'sm')) : null,
        h(N.DayPicker, { day: String(d), state: disabled ? 'disabled' : sel === d ? 'selected' : d === today ? 'current' : 'unselected', availability: disabled ? 'none' : a })));
    })(d);
    return h(Question, { figma: '80587:9465', type: p.type || 'حجز الروضة الشريفة', typeIcon: 'rawdah', title: p.title || 'اختر يوم الزيارة', onConfirm: function () { if (p.onConfirm) p.onConfirm(sel); } },
      h('div', { className: 'nkc-month', 'data-figma': 'Months_Interaction' },
        h('span', { className: 'lbl' }, Ic('calendar-04', 'nr'), (p.monthLabel || 'يونيو') + ' ' + (p.year || '2026')),
        h('span', { className: 'nav' }, h('button', { type: 'button', 'aria-label': 'الشهر السابق', disabled: true }, Ic('arrow-right-01', 'sm')), h('button', { type: 'button', 'aria-label': 'الشهر التالي' }, Ic('arrow-back', 'sm')))),
      h('div', { className: 'nkc-cal', role: 'group', 'aria-label': 'أيام الشهر' }, WD.map(function (w, i) { return h('span', { key: 'w' + i, className: 'nkc-wd', 'aria-hidden': true }, w); }), cells));
  }
  function DaysAnswer(p) { // User=User, Style=Days (80601:3360)
    return h(Message, { from: 'user', question: p.question, figma: '80601:3360' }, h('div', { className: 'nkc-mid' }, p.date || 'الأحد، 22 يونيو 2026'), h(EditAnswer, { onEdit: p.onEdit }));
  }

  /* Style=Slots — DL Pray Card list + DL Time slot cards (80593:6839) */
  var PRAYERS = [{ t: 'منتصف الليل', i: 'moon' }, { t: 'الفجر', i: 'moon' }, { t: 'الظهر', i: 'stars' }, { t: 'العصر', i: 'stars' }];
  var SLOTS = [['07:40 ص', 'default'], ['06:10 ص', 'disabled'], ['06:50 ص', 'default'], ['07:00 ص', 'default'], ['06:50 ص', 'disabled'], ['07:10 ص', 'disabled'], ['07:00 ص', 'disabled'], ['07:20 ص', 'disabled'], ['07:20 ص', 'default'], ['07:10 ص', 'default']];
  function Slots(p) {
    var a = React.useState(p.prayer == null ? 1 : p.prayer), pr = a[0], setPr = a[1];
    var b = React.useState(p.slot == null ? 0 : p.slot), sl = b[0], setSl = b[1];
    return h(Question, { figma: '80593:6839', type: p.type || 'حجز الروضة الشريفة', typeIcon: 'rawdah', title: p.title || 'اختر وقت الزيارة', onConfirm: function () { if (p.onConfirm) p.onConfirm(SLOTS[sl][0]); } },
      h('div', { className: 'nkc-prays', role: 'radiogroup', 'aria-label': 'الفترة' }, PRAYERS.map(function (x, i) {
        return h('button', { key: i, type: 'button', className: 'nkc-slotbtn', role: 'radio', 'aria-checked': pr === i, onClick: function () { setPr(i); } }, h(N.PrayCard, { selected: pr === i, title: x.t, iconName: x.i }));
      })),
      h('div', { className: 'nkc-sub' }, Ic('user', 'sm'), 'مواعيد مخصصة للرجال.'),
      h('div', { className: 'nkc-slots', role: 'radiogroup', 'aria-label': 'الأوقات المتاحة' }, SLOTS.map(function (x, i) {
        var dis = x[1] === 'disabled';
        return h('button', { key: i, type: 'button', className: 'nkc-slotbtn', role: 'radio', disabled: dis, 'aria-checked': sl === i, onClick: function () { setSl(i); } }, h(N.TimeSlot, { time: x[0], status: dis ? 'disabled' : sl === i ? 'selected' : 'default' }));
      })));
  }
  function SlotsAnswer(p) { // User=User, Style=Slots (80601:5538 / 80601:9567)
    return h(Message, { from: 'user', question: p.question, figma: '80601:5538' }, h('div', { className: 'nkc-answer' }, p.date || 'الأحد، 22 يونيو 2026'), h('div', { className: 'nkc-big', dir: 'auto' }, p.time || '07:40 ص'), h(EditAnswer, { onEdit: p.onEdit }));
  }

  /* ---------- AI Tab Bar (80392:4168 master; statuses 80392:4482…4494) ---------- */
  var TAB_NODES = { 'default': '80392:4482', 'limit': '80392:4484', 'recording': '80392:4486', 'recorded': '80392:4488', 'text': '80392:4490', 'responding': '80392:4492', 'typing': '80392:4494' };
  function RecBars(p) { var b = [6, 10, 16, 22, 30, 18, 12, 24, 14, 20, 28, 16, 10, 22, 26, 14, 18, 12, 24, 30, 16, 20, 10, 14, 26, 18]; return h('div', { className: 'nkc-rec' + (p.live ? ' live' : ''), 'aria-hidden': true }, b.map(function (v, i) { return h('i', { key: i, style: { height: v + 'px', animationDelay: (i * 37 % 500) + 'ms' } }); })); }
  function TabBar(p) {
    var st = React.useState(p.status || 'text'), status = st[0], setStatus = st[1];
    var vv = React.useState(p.value || ''), val = vv[0], setVal = vv[1];
    var tt = React.useState(29), secs = tt[0], setSecs = tt[1];
    React.useEffect(function () { setStatus(p.status || 'text'); }, [p.status]);
    React.useEffect(function () { if (status !== 'recording') return; var t = setInterval(function () { setSecs(function (s) { return s + 1; }); }, 1000); return function () { clearInterval(t); }; }, [status]);
    var mmss = '00:' + String(secs % 60).padStart(2, '0');
    function send() { var v = val.trim(); if (!v) return; if (p.onSend) p.onSend({ type: 'text', text: v }); setVal(''); setStatus(p.respondOnSend === false ? 'text' : 'responding'); }
    var node = TAB_NODES[status];
    var body;
    if (status === 'default') body = null;
    else if (status === 'limit') body = h('div', { className: 'nkc-limit', role: 'status' }, h('span', { className: 'ic' }, Ic('alert-02', 'nr')), h('span', null, p.limitText || tl('وصلت إلى حدّ اليوم وهو 20 سؤالًا مع نسك AI. يمكنك المتابعة غدًا.', 'You\'ve reached today\'s limit of 20 questions with Nusuk AI. You can continue tomorrow.')));
    else if (status === 'recording') body = h('div', { className: 'nkc-tabrow' }, h('div', { className: 'nkc-input' }, h('span', { className: 'nkc-timer' }, mmss), h('button', { type: 'button', className: 'nkc-tabbtn', 'aria-label': tl('إيقاف التسجيل', 'Stop recording'), onClick: function () { setStatus('recorded'); } }, Ic('pause')), h(RecBars, { live: true })));
    else if (status === 'recorded') body = h('div', { className: 'nkc-tabrow' },
      h('div', { className: 'nkc-input' }, h(RecBars, {}), h('button', { type: 'button', className: 'nkc-tabbtn', 'aria-label': tl('إرسال الرسالة الصوتية', 'Send voice message'), onClick: function () { if (p.onSend) p.onSend({ type: 'voice', duration: mmss }); setSecs(0); setStatus(p.respondOnSend === false ? 'text' : 'responding'); } }, h('span', { style: { transform: 'scaleX(-1)', display: 'inline-flex' } }, Ic('send')))),
      h('button', { type: 'button', className: 'nkc-tabbtn round fate', 'aria-label': tl('حذف التسجيل', 'Delete recording'), onClick: function () { setSecs(0); setStatus('text'); } }, Ic('delete-03')));
    else body = h('div', { className: 'nkc-tabrow' }, h('label', { className: 'nkc-input' },
      h('span', { className: 'nkc-sr' }, tl('اسأل نسك AI', 'Ask Nusuk AI')),
      h('input', { value: val, placeholder: p.placeholder || tl('اسأل نُسك AI..', 'Ask Nusuk AI…'), disabled: status === 'responding' || p.disabled, onChange: function (e) { setVal(e.target.value); setStatus(e.target.value ? 'typing' : 'text'); }, onKeyDown: function (e) { if (e.key === 'Enter') send(); } }),
      status === 'responding' ? h('button', { type: 'button', className: 'nkc-tabbtn', 'aria-label': tl('إيقاف الإجابة', 'Stop answer'), onClick: function () { if (p.onStop) p.onStop(); setStatus('text'); } }, Ic('pause'))
        : status === 'typing' ? h('button', { type: 'button', className: 'nkc-tabbtn', 'aria-label': tl('إرسال', 'Send'), onClick: send }, h('span', { style: { transform: 'scaleX(-1)', display: 'inline-flex' } }, Ic('send')))
          : h('button', { type: 'button', className: 'nkc-tabbtn', 'aria-label': tl('تسجيل رسالة صوتية', 'Record a voice message'), onClick: function () { setSecs(0); setStatus('recording'); } }, Ic('mic'))));
    return h('div', { className: 'nkc-tab' + (status === 'text' || status === 'responding' ? ' fade' : ''), 'data-figma': node, 'data-status': status },
      body, p.homeIndicator === false ? null : h('span', { className: 'nkc-home', 'aria-hidden': true }));
  }

  /* =================== Registration (loose items on the 💬 Chat UI canvas) =================== */
  var FLAGS = {
    sa: { ar: 'السعودية', img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAnxJREFUeAHtVT1oU1EU/qKVGkt+TCoqSTDVttopEdGmg6SixSGCaUGQglin6mCJkwhCq9TBrSLoaOKotqaDoCTYiqLN1DyHpiqaBF+GYFKTKNagEM85UnDIi2aQLDnwuPe+c+79vvudc97T4dyuChpo69BgaxJoEmjRcvhdAyisluC02lD49pWeIlL5DHbQWkd+8yYDvN0euO09SOdVhF9HYdYbKO4LwkoEUycuU1QFc29jMLeZEHo5XR8BBns4egvBhRl4O+1IfVbRDzmTwI0IxyMyDytRjHiGkFzJYDMRcFocmCdQ9jmtDgQO9UDJJBDSwFmP/ZaJao7bw1exkFZwcp9P1nF1GbEPChFTsdW4RRRikp4OF648uon+7l5kSzl8/1GGqc0A/YZWimvH48QLUWz+XawqAc0auHDvGtKfVARjM3hGmwddh+F3HxFgln1qLojUCqnS5ZF4fpciFZJEMP4xIYqwdVhslBqjFoy2Ai46MFvKw9luI5BeOfzJ0nPJ9caWVlw6OoqzB4fxJvsey9mk3J7JKOoS9mzrRPlnGWVSY/f2naIAp6ouBRQ1gZG+QblBmsBZbi6yO6eugxO8SP7Ag0kZ177lUhcEx3FOq10KNrwYodGuBaNNYPzYGExUbE7ZXJFbHCf5i9QZvO3G0xDcjt+pSOcykuPTfUPSBTqdDsFX05iNR1EscweVNAno/vYz4vwVVkua6z/fs7FvLYZH7hgmUG3PPxH439ZSyyk3qFHBWubfOyC5Z+NOqWU1FeD8j/vOSxfUY2a9iSQvynyWuiZwf1IztqYC/NE5c/ci6rUJ3xi8XQdknsxlasY2vAaav+MmgYYT+AVJmwEUXD4ZkgAAAABJRU5ErkJggg==' },
    ma: { ar: 'المغرب', svg: '<svg viewBox="0 0 16 12" aria-hidden="true"><rect width="16" height="12" fill="#E31D1C"/><path d="M11.2413 9.81323L8.0636 7.91089L4.89758 9.81323L7.94543 1.35034H8.08313L11.2413 9.81323ZM7.73352 4.11108L6.7179 6.94897L6.14075 8.34644L7.39075 7.44019L8.06262 7.03589L8.74622 7.44507L10.0255 8.34644L9.43274 6.97729L8.42297 4.14917L8.07141 2.79175L7.73352 4.11108Z" fill="#579D20"/><path d="M9.71021 6.73645L8.07935 7.89856L6.3313 6.73645L3.19263 4.11829H12.8079L9.71021 6.73645ZM6.36743 5.73743L8.07153 6.94446L9.76978 5.65637L10.7903 5.00989H5.17896L6.36743 5.73743Z" fill="#579D20"/></svg>' },
    fr: { ar: 'فرنسا', svg: '<svg viewBox="0 0 16 12" aria-hidden="true"><rect width="16" height="12" fill="#F7FCFF"/><path d="M11 0H16V12H11V0Z" fill="#F50100"/><path d="M0 0H6V12H0V0Z" fill="#2E42A5"/></svg>' }
  };
  function Flag(p) { var f = FLAGS[p.code]; if (!f) return null; return h('span', { className: 'nkc-flag', role: 'img', 'aria-label': f.ar, dangerouslySetInnerHTML: { __html: f.svg || '<img alt="" src="' + f.img + '">' } }); }
  var NAFATH = '<svg viewBox="0 0 39 20" fill="none" aria-hidden="true"><path d="M27.2074 15.3655C27.3054 15.3786 27.3643 15.3917 27.4231 15.3917C28.815 15.3917 30.2134 15.3983 31.6053 15.3851C32.4352 15.3786 32.9123 14.939 32.9384 14.1122C32.9776 12.7343 32.9776 11.3564 32.9776 9.97847C32.9776 9.72257 33.0495 9.57822 33.2848 9.46011C33.997 9.10579 34.6897 8.72523 35.3955 8.35778C35.4804 8.31185 35.5719 8.27248 35.6896 8.21999C35.6961 8.31185 35.7092 8.37747 35.7092 8.44964C35.7092 10.359 35.7418 12.2684 35.6961 14.1778C35.6634 15.6082 35.0818 16.7827 33.7945 17.5242C33.1345 17.9047 32.4026 18.0425 31.6576 18.0425C29.5599 18.0557 27.4688 18.0557 25.3712 18.0425C24.8353 18.036 24.2995 17.9244 23.7636 17.9047C23.4042 17.8916 23.0448 17.9769 22.6788 17.9966C22.0711 18.0229 21.4568 18.0425 20.8491 18.0491C19.1305 18.0557 17.4118 18.0688 15.6932 18.0425C15.1835 18.036 14.6541 17.9638 14.164 17.8194C12.6806 17.3601 11.8834 16.2906 11.6285 14.788C11.5763 14.4665 11.5632 14.1385 11.5632 13.8104C11.5567 11.0217 11.5632 8.23312 11.5567 5.44448C11.5567 5.20827 11.6155 5.07704 11.8311 4.97206C12.5499 4.61118 13.2557 4.23061 13.968 3.86317C14.0529 3.81724 14.1444 3.77787 14.2817 3.71225C14.2817 3.87629 14.2817 3.9944 14.2817 4.1125C14.2817 7.23577 14.2817 10.3656 14.2817 13.4889C14.2817 13.7316 14.2947 13.981 14.3274 14.2238C14.4254 14.9521 14.824 15.372 15.5494 15.3851C17.0263 15.4114 18.4966 15.3917 19.9734 15.3917C19.9996 15.3917 20.0323 15.372 20.0976 15.3523C20.0323 15.2211 19.9734 15.0964 19.9081 14.9783C18.8625 13.1542 19.1566 10.7002 20.3655 9.25671C21.0843 8.39059 22.0188 7.91816 23.1297 7.81974C24.2602 7.72132 25.345 7.8788 26.273 8.61368C27.2793 9.40762 27.7956 10.4706 27.9589 11.7304C28.1288 12.9836 27.9001 14.145 27.2532 15.2277C27.2466 15.2473 27.2401 15.2867 27.2074 15.3655ZM25.4169 12.2094C25.3646 11.9994 25.3189 11.6057 25.162 11.2645C24.8418 10.569 24.2537 10.2869 23.4957 10.3262C22.8161 10.3656 22.326 10.7134 22.0907 11.3564C21.6071 12.649 22.1887 14.2894 23.3584 14.998C23.5676 15.1227 23.7375 15.1292 23.94 14.9914C24.868 14.3747 25.3712 13.5151 25.4169 12.2094Z" fill="#0A9A8F"/><path d="M4.50603 10.1974C4.9504 9.42967 5.39476 8.6751 5.84566 7.90084C6.72786 8.43232 7.51203 9.04254 8.13937 9.82992C9.32216 11.2997 9.72731 12.9926 9.53127 14.8495C9.48553 15.3022 9.38751 15.7615 9.23067 16.188C8.83858 17.2772 8.00213 17.9137 6.89122 17.9662C4.89159 18.058 2.89195 18.0187 0.885774 18.0383C0.879239 18.0383 0.86617 18.0318 0.833496 18.0121C0.859635 17.9465 0.87924 17.8677 0.911913 17.8021C1.2844 17.0804 1.66995 16.3586 2.03589 15.6303C2.12738 15.4531 2.23194 15.3875 2.43451 15.3875C3.44087 15.4006 4.44722 15.3613 5.45358 15.4006C6.63637 15.4466 6.86509 14.7379 6.83895 13.8915C6.7932 12.343 6.04824 11.2078 4.77396 10.3876C4.70208 10.3286 4.61713 10.2695 4.50603 10.1974Z" fill="#0A9A8F"/><path d="M34.4024 2.94165C35.278 2.94165 35.8335 3.49281 35.8335 4.36549C35.8335 5.31035 35.3499 5.81558 34.4285 5.8287C33.5529 5.84183 32.9909 5.27754 32.9843 4.37862C32.9843 3.50594 33.5333 2.94165 34.4024 2.94165Z" fill="#0A9A8F"/><path d="M7.27717 4.37862C7.27717 5.34972 6.80014 5.84183 5.8722 5.8287C4.99001 5.81558 4.43455 5.23817 4.44109 4.35237C4.45415 3.48625 5.01614 2.94165 5.89834 2.94165C6.76093 2.94821 7.27717 3.48625 7.27717 4.37862Z" fill="#0A9A8F"/><path d="M25.0438 4.68975C25.0373 5.65429 24.5994 6.10703 23.6519 6.10703C22.7436 6.10703 22.2208 5.57555 22.2208 4.65694C22.2208 3.75802 22.7632 3.23966 23.6846 3.24622C24.5537 3.25279 25.0438 3.78427 25.0438 4.68975Z" fill="#0A9A8F"/></svg>';

  /* Answers / Property 1=Nafath (80473:2443) */
  function NafathAnswer(p) { return h('button', { type: 'button', className: 'nkc-ans nafath', onClick: p.onClick, 'data-figma': '80473:2443', 'aria-label': 'نعم، توثيق البيانات عبر نفاذ' }, h('span', null, p.label || 'نعم، توثيق البيانات عبر'), h('span', { className: 'nkc-nafath', dangerouslySetInnerHTML: { __html: NAFATH } })); }
  /* CTA Kind=Ghost Size=SM (80476:1823) */
  function SkipNafath(p) { return h('div', { className: 'nkc-skip', 'data-figma': '80476:1823' }, h(N.Button, { kind: 'ghost', size: 'sm', full: true, onClick: p.onClick }, p.label || 'لا، لست مواطنًا أو مقيمًا. المتابعة بدون نفاذ')); }
  /* Answers / Property 1=Nationality Search (80473:2457) */
  function NationalitySearch(p) {
    var o = React.useState(false), open = o[0], setOpen = o[1];
    var q = React.useState(''), query = q[0], setQuery = q[1];
    var opts = Object.keys(FLAGS).filter(function (k) { return (p.exclude || []).indexOf(k) < 0 && FLAGS[k].ar.indexOf(query) > -1; });
    return h('div', { className: 'nkc-natsearch', 'data-figma': '80473:2457' },
      open ? h('label', { className: 'nkc-ans search open' }, Ic('global', 'nr'), h('input', { autoFocus: true, value: query, placeholder: 'ابحث عن الجنسية', onChange: function (e) { setQuery(e.target.value); }, 'aria-label': 'ابحث عن الجنسية' }), Ic('search-01', 'nr'))
        : h('button', { type: 'button', className: 'nkc-ans search', onClick: function () { setOpen(true); } }, h('span', { className: 'lead' }, Ic('global', 'nr'), h('span', { className: 'ph' }, p.placeholder || 'اختر الجنسية')), Ic('search-01', 'nr')),
      open ? h('div', { className: 'nkc-natlist', role: 'listbox', 'aria-label': 'الجنسيات' }, opts.length ? opts.map(function (k) { return h('button', { key: k, type: 'button', role: 'option', className: 'nkc-natopt', onClick: function () { setOpen(false); setQuery(''); if (p.onPick) p.onPick(k); } }, h(Flag, { code: k }), h('span', null, FLAGS[k].ar)); }) : h('div', { className: 'nkc-natempty' }, 'لا توجد نتائج')) : null);
  }
  /* "جنسياتك المضافة" + Nationalities chips (80470:16139 · 80470:16140) */
  function AddedNationalities(p) {
    if (!p.items || !p.items.length) return null;
    return h('div', { className: 'nkc-added', 'data-figma': '80470:16140' }, h('div', { className: 'nkc-added-lbl' }, p.label || 'جنسياتك المضافة'),
      h('div', { className: 'nkc-added-row' }, p.items.map(function (k) { return h('span', { key: k, className: 'nkc-natchip' }, h('button', { type: 'button', className: 'x', 'aria-label': 'إزالة ' + FLAGS[k].ar, onClick: function () { if (p.onRemove) p.onRemove(k); } }, Ic('cancel-circle', 'sm')), h('span', null, FLAGS[k].ar), h(Flag, { code: k })); })));
  }
  /* CTA Kind=Secondary Size=MD Icon=Left (80473:1614 / 80474:1433): a chosen nationality row */
  function NationalityRow(p) { return h('div', { className: 'nkc-natrow-wrap', 'data-figma': '80473:1614' }, h(N.Button, { kind: 'secondary', size: 'md', full: true, className: 'nkc-btn-fig', onClick: p.onClick }, h(F, null, h('span', null, p.label || 'الجنسية'), h(Flag, { code: p.code })))); }

  /* OTP question (Figma 80607:11146, named "User=User, Style=Slots") */
  function Otp(p) {
    var len = p.length || 4;
    var v = React.useState(Array(len).fill('')), val = v[0], setVal = v[1];
    var s = React.useState(p.seconds || 59), secs = s[0], setSecs = s[1];
    var refs = React.useRef([]);
    React.useEffect(function () { if (secs <= 0) return; var t = setTimeout(function () { setSecs(secs - 1); }, 1000); return function () { clearTimeout(t); }; }, [secs]);
    function set(i, x) { var d = x.replace(/[^0-9٠-٩]/g, '').slice(-1).replace(/[٠-٩]/g, function (c) { return String('٠١٢٣٤٥٦٧٨٩'.indexOf(c)); }); var n = val.slice(); n[i] = d; setVal(n); if (d && refs.current[i + 1]) refs.current[i + 1].focus(); }
    var full = val.every(Boolean);
    return h(Question, { figma: '80607:11146', type: p.type || 'التحقق من البريد الإلكتروني', typeFig: p.type ? null : 'mail-at-sign-01', typeIcon: 'rawdah', onBack: p.onBack, title: p.title || 'تم إرسال رمز التحقق عبر البريد الإلكتروني إلى', cta: 'التأكيد والمتابعة', ctaState: full ? 'default' : 'disabled', onConfirm: function () { if (full && p.onConfirm) p.onConfirm(val.join('')); } },
      h('div', { className: 'nkc-otp-to' }, h('span', { className: 'email', dir: 'ltr' }, p.email || 'moha@example.com'), h(Trail, { icon: 'edit', onClick: p.onEditEmail }, 'تعديل')),
      h('div', { className: 'nkc-otp' }, h('label', { className: 'nkc-otp-lbl', id: 'otpl' }, 'أدخل رمز التحقق'),
        h('div', { className: 'nkc-otp-fields', dir: 'ltr', role: 'group', 'aria-labelledby': 'otpl' }, val.map(function (x, i) { return h('input', { key: i, ref: function (el) { refs.current[i] = el; }, className: 'nkc-otp-box', inputMode: 'numeric', autoComplete: i === 0 ? 'one-time-code' : 'off', maxLength: 1, value: x, 'aria-label': 'الرقم ' + (i + 1), onChange: function (e) { set(i, e.target.value); }, onKeyDown: function (e) { if (e.key === 'Backspace' && !val[i] && refs.current[i - 1]) refs.current[i - 1].focus(); } }); })),
        h('div', { className: 'nkc-resend', 'aria-live': 'polite' }, secs > 0 ? h(F, null, Ic('time-02', 'nr'), h('span', null, 'يمكنك طلب رمز جديد بعد'), h('span', { className: 'nkc-timer' }, '00:' + String(secs).padStart(2, '0'))) : h(Trail, { dlIcon: 'return-request', onClick: function () { setSecs(p.seconds || 59); setVal(Array(len).fill('')); } }, 'أرسل رمزًا جديدًا'))));
  }

  /* Media Cards / Type=Flight, chat package card (80477:4939 …) — image comes from the CMS */
  /* Package card = DL MediaCard (Nusuk DL "Media Cards", kind hajj, fade surface, price + cart). Replaces the earlier hand-built card (Figma 80477:4939). */
  function PackageCard(p) {
    return h('div', { className: 'nkc-pkgwrap', style: { width: p.width || 300 }, 'data-figma': p.figma || '80477:4939', 'data-dl': 'MediaCard' },
      h(N.MediaCard, { kind: 'hajj', kindLabel: p.from, surface: 'fade', image: p.image, imageAlt: p.title, title: p.title, tags: p.desc ? [p.desc] : null, selected: !!p.best, selectedLabel: 'خيارك الأفضل', priceLabel: 'ابتداءً من', price: p.price || '8,000', cart: true, cartProps: { onClick: p.onAdd }, width: '100%' }));
  }

  var PACKAGES = [
    { flag: 'sa', best: true, from: 'الحج من داخل المملكة', title: 'باقات الحج للمواطنين والمقيمين', desc: 'للمواطنين والمقيمين إقامة نظامية داخل المملكة، عبر باقات الحج المحلية.', figma: '80477:4939' },
    { flag: 'ma', from: 'الحج من دولة المغرب', title: 'باقات الحج من المغرب', desc: 'للحجاج من المغرب عبر شركات الحج والعمرة المعتمدة، وفق الأنظمة المعمول بها.', figma: '80477:4940' },
    { flag: 'fr', from: 'الحج من دولة فرنسا', title: 'باقات الحج من فرنسا', desc: 'للمواطنين الفرنسيين والمقيمين حاملي الإقامة النظامية، بعد استيفاء المتطلبات، مباشرةً عبر نسك.', figma: '80477:4941' }
  ];
  /* Hajj Packgaes carousel (80477:11127) + DL Pagination (80478:12232) */
  function Packages(p) {
    var items = p.items || PACKAGES, ref = React.useRef(null);
    var a = React.useState(0), active = a[0], setActive = a[1];
    function onScroll() { var el = ref.current; if (!el) return; var w = el.firstChild ? el.firstChild.getBoundingClientRect().width + 8 : 308; setActive(Math.min(items.length - 1, Math.round(Math.abs(el.scrollLeft) / w))); }
    return h('div', { className: 'nkc-pkgs', 'data-figma': '80477:11127' },
      h('div', { className: 'nkc-pkgs-track', ref: ref, onScroll: onScroll, role: 'list', 'aria-label': 'باقات الحج' }, items.map(function (x, i) { return h('div', { key: i, role: 'listitem' }, h(PackageCard, Object.assign({ width: 300, onAdd: p.onAdd }, x))); })),
      items.length > 1 ? h('div', { className: 'nkc-pkgs-dots', 'data-figma': '80478:12232' }, h(N.Pagination, { count: items.length, active: active })) : null);
  }

  /* ---------- Registry: Figma ↔ code map (drives the handoff page and future syncs) ---------- */
  var FILE = 'b2JRq5iuFo8rvl354ggpjR';
  /* Icons used by the 80607:* registration variants that are NOT in the DL bundle (components/bundle.js HI map, 8 Nov 2026).
     Exported from Figma with exportAsync(SVG_STRING) on 11 Nov 2026; fills switched to currentColor (rajhi keeps its brand blue).
     Handoff: request these from the DL Manager so they ship in 🎨 Icons / the DL bundle; then delete this map. */
  var FIG_ICONS = {
    'mail-at-sign-01': ['0 0 16 16', 'M12 8.167C13.749 8.167 15.167 9.584 15.167 11.333V11.63C15.167 12.397 14.544 13.019 13.777 13.019C13.351 13.018 12.97 12.827 12.715 12.524C12.506 12.65 12.261 12.723 12 12.723C11.233 12.723 10.611 12.1 10.611 11.333C10.612 10.566 11.233 9.944 12 9.944C12.767 9.944 13.389 10.566 13.389 11.333V11.63C13.389 11.844 13.563 12.018 13.777 12.019C13.992 12.019 14.167 11.845 14.167 11.63V11.333C14.167 10.137 13.197 9.167 12 9.167C10.804 9.167 9.833 10.137 9.833 11.333C9.833 12.53 10.803 13.5 12 13.5C12.276 13.5 12.5 13.724 12.5 14C12.5 14.276 12.276 14.5 12 14.5C10.251 14.5 8.833 13.082 8.833 11.333C8.833 9.584 10.251 8.167 12 8.167ZM13.333 1.5C14.345 1.5 15.167 2.321 15.167 3.333V6.667C15.167 6.943 14.943 7.167 14.667 7.167C14.391 7.167 14.167 6.943 14.167 6.667V4.809L8.82 7.482C8.304 7.74 7.697 7.74 7.181 7.482L1.833 4.809V11.333C1.833 11.793 2.207 12.167 2.667 12.167H7.333C7.609 12.167 7.833 12.391 7.833 12.667C7.833 12.943 7.609 13.167 7.333 13.167H2.667C1.654 13.167 0.833 12.346 0.833 11.333V3.333C0.833 2.321 1.655 1.5 2.667 1.5H13.333ZM12 10.944C11.785 10.944 11.612 11.118 11.611 11.333C11.611 11.548 11.785 11.723 12 11.723C12.215 11.723 12.389 11.548 12.389 11.333C12.389 11.118 12.215 10.944 12 10.944ZM2.667 2.5C2.207 2.5 1.833 2.873 1.833 3.333V3.69L7.628 6.588C7.862 6.705 8.139 6.705 8.373 6.588L14.167 3.69V3.333C14.167 2.873 13.793 2.5 13.333 2.5H2.667Z'],
    'security-password': ['0 0 16 16', 'M12.62 10.405C12.764 10.17 13.072 10.096 13.308 10.24C13.543 10.384 13.618 10.692 13.474 10.928C12.035 13.277 9.49 14.612 8.564 15.041C8.204 15.208 7.796 15.208 7.436 15.041C6.51 14.612 3.965 13.277 2.526 10.928C2.382 10.692 2.457 10.384 2.692 10.24C2.928 10.096 3.236 10.17 3.38 10.405C4.657 12.491 6.969 13.722 7.856 14.134C7.95 14.177 8.05 14.177 8.144 14.134C9.031 13.722 11.343 12.491 12.62 10.405ZM3 7.293L3.313 6.98C3.509 6.785 3.825 6.784 4.021 6.979C4.216 7.174 4.215 7.491 4.021 7.686L3.707 8L4.021 8.313C4.216 8.509 4.216 8.825 4.021 9.02C3.825 9.215 3.509 9.215 3.313 9.02L3 8.707L2.687 9.02C2.491 9.215 2.175 9.216 1.979 9.02C1.784 8.825 1.785 8.509 1.979 8.313L2.293 8L1.979 7.687C1.784 7.492 1.785 7.176 1.979 6.98C2.175 6.785 2.491 6.784 2.687 6.979L3 7.293ZM6.334 7.293L6.646 6.98C6.842 6.785 7.158 6.784 7.354 6.979C7.549 7.174 7.549 7.491 7.354 7.686L7.041 8L7.354 8.313C7.549 8.509 7.549 8.825 7.354 9.02C7.158 9.215 6.842 9.215 6.646 9.02L6.334 8.707L6.02 9.02C5.824 9.215 5.508 9.216 5.313 9.02C5.117 8.825 5.118 8.507 5.313 8.312L5.627 8L5.313 7.687C5.118 7.492 5.118 7.176 5.313 6.98C5.508 6.785 5.824 6.785 6.02 6.979L6.334 7.293ZM9.668 7.293L9.979 6.98C10.175 6.785 10.491 6.784 10.687 6.979C10.882 7.174 10.882 7.491 10.688 7.686L10.375 8L10.688 8.313C10.882 8.509 10.882 8.825 10.687 9.02C10.491 9.215 10.174 9.215 9.979 9.019L9.668 8.707L9.353 9.02C9.157 9.215 8.84 9.215 8.646 9.019C8.451 8.824 8.452 8.507 8.647 8.312L8.961 8L8.647 7.687C8.452 7.492 8.451 7.176 8.646 6.98C8.84 6.785 9.157 6.785 9.353 6.979L9.668 7.293ZM13.001 7.293L13.313 6.98C13.507 6.785 13.824 6.785 14.02 6.979C14.215 7.174 14.216 7.491 14.022 7.686L13.709 8L14.022 8.314C14.216 8.51 14.215 8.827 14.02 9.021C13.824 9.216 13.507 9.215 13.313 9.019L13.001 8.707L12.687 9.021C12.491 9.216 12.173 9.215 11.979 9.019C11.784 8.824 11.785 8.507 11.981 8.312L12.294 8L11.981 7.687C11.785 7.493 11.784 7.176 11.979 6.98C12.173 6.785 12.491 6.785 12.687 6.979L13.001 7.293ZM7.223 1.026C7.707 0.77 8.293 0.77 8.777 1.026C9.579 1.45 11.221 2.214 13.19 2.556C13.916 2.683 14.5 3.303 14.5 4.082V5.333C14.5 5.609 14.276 5.833 14 5.833C13.724 5.833 13.5 5.609 13.5 5.333V4.082C13.5 3.828 13.304 3.591 13.018 3.541C10.907 3.174 9.161 2.361 8.31 1.91C8.118 1.808 7.882 1.808 7.69 1.91C6.839 2.361 5.094 3.174 2.982 3.541C2.696 3.591 2.5 3.828 2.5 4.082V5.333C2.5 5.609 2.276 5.833 2 5.833C1.724 5.833 1.5 5.609 1.5 5.333V4.082C1.5 3.303 2.085 2.683 2.811 2.556C4.779 2.214 6.421 1.45 7.223 1.026Z'],
    'view': ['0 0 24 24', 'M12 4.25C14.328 4.25 16.43 5.363 18.097 6.658C19.772 7.96 21.085 9.505 21.852 10.506C22.532 11.394 22.532 12.606 21.852 13.494C21.085 14.495 19.772 16.04 18.097 17.342C16.43 18.637 14.328 19.75 12 19.75C9.671 19.75 7.569 18.637 5.903 17.342C4.227 16.04 2.914 14.495 2.147 13.494C1.466 12.606 1.466 11.394 2.147 10.506C2.914 9.505 4.227 7.96 5.903 6.658C7.569 5.363 9.671 4.25 12 4.25ZM12 5.75C10.146 5.75 8.365 6.644 6.822 7.843C5.288 9.035 4.064 10.47 3.338 11.418C3.07 11.768 3.07 12.232 3.338 12.582C4.064 13.53 5.288 14.965 6.822 16.157C8.365 17.356 10.146 18.25 12 18.25C13.853 18.25 15.633 17.356 17.176 16.157C18.71 14.965 19.935 13.53 20.661 12.582C20.929 12.232 20.929 11.768 20.661 11.418C19.935 10.47 18.71 9.035 17.176 7.843C15.633 6.644 13.853 5.75 12 5.75ZM12 8.25C14.071 8.25 15.75 9.929 15.75 12C15.75 14.071 14.071 15.75 12 15.75C9.929 15.75 8.25 14.071 8.25 12C8.25 9.929 9.929 8.25 12 8.25ZM12 9.75C10.758 9.75 9.75 10.757 9.75 12C9.75 13.243 10.758 14.25 12 14.25C13.243 14.25 14.25 13.243 14.25 12C14.25 10.757 13.243 9.75 12 9.75Z'],
    'hijab': ['0 0 24 24', 'M12 1.25C13.835 1.25 15.52 2.093 16.736 3.331C17.951 4.568 18.75 6.25 18.75 8C18.75 8.837 19.055 10.304 19.642 11.97C20.223 13.619 21.051 15.382 22.043 16.808C22.541 17.523 22.507 18.588 21.735 19.202C15.799 23.932 8.201 23.932 2.265 19.202C1.494 18.588 1.46 17.523 1.957 16.808C2.949 15.382 3.778 13.619 4.358 11.97C4.945 10.304 5.25 8.837 5.25 8C5.25 6.25 6.049 4.568 7.264 3.331C8.481 2.093 10.166 1.25 12 1.25ZM12 2.75C10.63 2.75 9.315 3.383 8.333 4.383C7.349 5.384 6.75 6.702 6.75 8C6.75 9.089 6.381 10.745 5.774 12.469C5.161 14.209 4.276 16.1 3.188 17.664C3.137 17.737 3.12 17.82 3.127 17.889C3.134 17.954 3.161 17.998 3.199 18.029C4.215 18.838 5.281 19.495 6.379 19.999C6.712 18.611 7.791 16.676 10.682 15.321C11.909 14.746 12.697 14.154 13.213 13.548C12.832 13.678 12.425 13.75 12 13.75C9.929 13.75 8.25 12.071 8.25 10V8C8.25 5.929 9.929 4.25 12 4.25C14.071 4.25 15.75 5.929 15.75 8V10L15.742 10.485C15.704 11.613 15.516 12.702 14.929 13.714C14.254 14.876 13.111 15.838 11.318 16.679C8.681 17.915 7.957 19.616 7.793 20.556C12.148 22.011 16.857 21.171 20.801 18.029C20.84 17.998 20.866 17.954 20.873 17.889C20.88 17.82 20.862 17.737 20.812 17.664C19.724 16.1 18.84 14.208 18.227 12.469C17.62 10.745 17.25 9.089 17.25 8C17.25 6.702 16.651 5.384 15.667 4.383C14.685 3.383 13.37 2.75 12 2.75ZM9.75 10C9.75 11.243 10.757 12.25 12 12.25C13.243 12.25 14.25 11.243 14.25 10V8.75H9.75V10ZM12 5.75C11.021 5.75 10.19 6.377 9.881 7.25H14.119C13.81 6.377 12.979 5.75 12 5.75Z'],
    'camera-02': ['0 0 24 24', 'M14.779 2.25C15.532 2.25 16.201 2.732 16.44 3.446L17.041 5.25H20C21.519 5.25 22.75 6.481 22.75 8V19C22.75 20.519 21.519 21.75 20 21.75H4C2.481 21.75 1.25 20.519 1.25 19V8C1.25 6.481 2.481 5.25 4 5.25H6.959L7.561 3.446C7.799 2.732 8.468 2.25 9.221 2.25H14.779ZM9.221 3.75C9.113 3.75 9.017 3.819 8.983 3.921L8.212 6.237C8.11 6.544 7.823 6.75 7.5 6.75H4C3.31 6.75 2.75 7.31 2.75 8V19C2.75 19.69 3.31 20.25 4 20.25H20C20.69 20.25 21.25 19.69 21.25 19V8C21.25 7.31 20.69 6.75 20 6.75H16.5C16.177 6.75 15.89 6.544 15.788 6.237L15.017 3.921C14.983 3.819 14.887 3.75 14.779 3.75H9.221ZM12.002 9.75C14.35 9.75 16.253 11.653 16.253 14C16.253 16.347 14.35 18.25 12.002 18.25C9.654 18.25 7.75 16.348 7.75 14C7.75 11.653 9.654 9.75 12.002 9.75ZM12.002 11.25C10.482 11.25 9.25 12.482 9.25 14C9.25 15.519 10.482 16.75 12.002 16.75C13.522 16.75 14.753 15.518 14.753 14C14.753 12.482 13.522 11.25 12.002 11.25ZM12 5C12.552 5 13 5.448 13 6C13 6.552 12.552 7 12 7C11.448 7 11 6.552 11 6C11 5.448 11.448 5 12 5Z'],
    'audit-01': ['0 0 24 24', 'M17 1.25C18.519 1.25 19.75 2.481 19.75 4V10C19.75 10.414 19.414 10.75 19 10.75C18.586 10.75 18.25 10.414 18.25 10V4C18.25 3.31 17.69 2.75 17 2.75H5C4.31 2.75 3.75 3.31 3.75 4V20C3.75 20.69 4.31 21.25 5 21.25H8.5C8.914 21.25 9.25 21.586 9.25 22C9.25 22.414 8.914 22.75 8.5 22.75H5C3.481 22.75 2.25 21.519 2.25 20V4C2.25 2.481 3.481 1.25 5 1.25H17ZM16.5 12.25C17.42 12.25 18.246 12.56 18.843 13.157C19.44 13.754 19.75 14.58 19.75 15.5C19.75 16.129 19.484 16.746 19.273 17.233L19.214 17.371C19.04 17.781 18.888 18.164 18.809 18.565L20.782 19.553C21.375 19.849 21.75 20.455 21.75 21.118V22C21.75 22.414 21.414 22.75 21 22.75H12C11.586 22.75 11.25 22.414 11.25 22V21.118C11.25 20.455 11.625 19.849 12.218 19.553L14.191 18.565C14.112 18.164 13.961 17.781 13.786 17.371L13.727 17.233C13.517 16.746 13.25 16.129 13.25 15.5C13.25 14.58 13.56 13.754 14.157 13.157C14.754 12.56 15.58 12.25 16.5 12.25ZM12.889 20.895C12.804 20.937 12.75 21.024 12.75 21.118V21.25H20.25V21.118C20.25 21.024 20.196 20.937 20.111 20.895L17.823 19.75H15.177L12.889 20.895ZM16.5 13.75C15.92 13.75 15.496 13.94 15.218 14.218C14.94 14.496 14.75 14.92 14.75 15.5C14.75 15.807 14.895 16.147 15.158 16.766L15.166 16.783C15.34 17.191 15.543 17.682 15.658 18.25H17.342C17.457 17.682 17.661 17.191 17.834 16.783L17.842 16.766C18.105 16.147 18.25 15.807 18.25 15.5C18.25 14.92 18.06 14.496 17.782 14.218C17.504 13.94 17.08 13.75 16.5 13.75ZM10.5 10.25C10.914 10.25 11.25 10.586 11.25 11C11.25 11.414 10.914 11.75 10.5 11.75H7.5C7.086 11.75 6.75 11.414 6.75 11C6.75 10.586 7.086 10.25 7.5 10.25H10.5ZM14.5 6.25C14.914 6.25 15.25 6.586 15.25 7C15.25 7.414 14.914 7.75 14.5 7.75H7.5C7.086 7.75 6.75 7.414 6.75 7C6.75 6.586 7.086 6.25 7.5 6.25H14.5Z'],
    'image-02': ['0 0 24 24', 'M19.5 1.75C21.019 1.75 22.25 2.981 22.25 4.5V19.5C22.25 21.019 21.019 22.25 19.5 22.25H4.5C2.981 22.25 1.75 21.019 1.75 19.5V4.5C1.75 2.981 2.981 1.75 4.5 1.75H19.5ZM3.25 19.5C3.25 20.19 3.81 20.75 4.5 20.75H14.039C13.449 18.798 12.263 17.092 10.739 15.931C8.745 14.411 6.322 13.837 3.25 13.76V19.5ZM18.568 16.75C17.23 16.744 15.871 17.198 14.555 18.135C15.005 18.95 15.358 19.829 15.596 20.75H19.5C20.19 20.75 20.75 20.19 20.75 19.5V17.16C20.026 16.886 19.298 16.749 18.572 16.75H18.568ZM4.5 3.25C3.81 3.25 3.25 3.81 3.25 4.5V12.259C6.497 12.336 9.293 12.942 11.648 14.737C12.436 15.337 13.142 16.06 13.744 16.872C15.257 15.81 16.892 15.243 18.572 15.25C19.307 15.249 20.035 15.362 20.75 15.578V4.5C20.75 3.81 20.19 3.25 19.5 3.25H4.5ZM16 5.75C17.243 5.75 18.25 6.757 18.25 8C18.25 9.243 17.243 10.25 16 10.25C14.757 10.25 13.75 9.243 13.75 8C13.75 6.757 14.757 5.75 16 5.75ZM16 7.25C15.586 7.25 15.25 7.586 15.25 8C15.25 8.414 15.586 8.75 16 8.75C16.414 8.75 16.75 8.414 16.75 8C16.75 7.586 16.414 7.25 16 7.25Z'],
    'identification': ['0 0 20 20', 'M2.083 12.292C2.428 12.292 2.708 12.572 2.708 12.917V16.25C2.708 16.825 3.175 17.292 3.75 17.292H7.083C7.428 17.292 7.708 17.572 7.708 17.917C7.708 18.262 7.428 18.542 7.083 18.542H3.75C2.484 18.542 1.458 17.516 1.458 16.25V12.917C1.458 12.572 1.738 12.292 2.083 12.292ZM17.917 12.292C18.262 12.292 18.542 12.572 18.542 12.917V16.25C18.542 17.516 17.516 18.542 16.25 18.542H12.917C12.572 18.542 12.292 18.262 12.292 17.917C12.292 17.572 12.572 17.292 12.917 17.292H16.25C16.825 17.292 17.292 16.825 17.292 16.25V12.917C17.292 12.572 17.572 12.292 17.917 12.292ZM6.156 13.806C7.924 11.31 12.02 11.151 13.849 13.813C14.044 14.097 13.972 14.486 13.688 14.682C13.403 14.877 13.014 14.805 12.818 14.521C11.512 12.62 8.473 12.698 7.177 14.528C6.977 14.81 6.587 14.876 6.306 14.677C6.024 14.477 5.957 14.087 6.156 13.806ZM10 5.208C11.496 5.208 12.708 6.421 12.708 7.917C12.708 9.413 11.496 10.625 10 10.625C8.504 10.625 7.292 9.413 7.292 7.917C7.292 6.421 8.504 5.208 10 5.208ZM10 6.458C9.195 6.458 8.542 7.112 8.542 7.917C8.542 8.722 9.195 9.375 10 9.375C10.805 9.375 11.458 8.722 11.458 7.917C11.458 7.112 10.805 6.458 10 6.458ZM7.083 1.458C7.428 1.458 7.708 1.738 7.708 2.083C7.708 2.428 7.428 2.708 7.083 2.708H3.75C3.175 2.708 2.708 3.175 2.708 3.75V7.083C2.708 7.428 2.428 7.708 2.083 7.708C1.738 7.708 1.458 7.428 1.458 7.083V3.75C1.458 2.484 2.484 1.458 3.75 1.458H7.083ZM16.25 1.458C17.516 1.458 18.542 2.484 18.542 3.75V7.083C18.542 7.428 18.262 7.708 17.917 7.708C17.572 7.708 17.292 7.428 17.292 7.083V3.75C17.292 3.175 16.825 2.708 16.25 2.708H12.917C12.572 2.708 12.292 2.428 12.292 2.083C12.292 1.738 12.572 1.458 12.917 1.458H16.25Z'],
    'rajhi': ['0 0 24 24', 'M18.482 9.797C19.223 10.234 19.946 10.66 20.668 11.087C21.2 11.402 21.735 11.712 22.264 12.033C23.23 12.618 23.791 13.49 23.976 14.619C23.997 14.742 23.997 14.87 23.997 14.995C23.999 16.257 24.003 17.519 23.997 18.781C23.992 19.636 23.677 20.373 23.14 21.018C22.852 21.363 22.496 21.618 22.113 21.842C21.176 22.391 20.241 22.944 19.308 23.5C18.694 23.866 18.034 24.033 17.327 23.994C16.81 23.966 16.314 23.829 15.863 23.565C14.659 22.859 13.458 22.149 12.261 21.432C12.085 21.327 11.955 21.306 11.764 21.421C10.593 22.128 9.41 22.815 8.233 23.512C7.624 23.873 6.968 24.032 6.269 23.995C5.664 23.962 5.111 23.755 4.59 23.442C3.641 22.873 2.678 22.326 1.737 21.744C0.623 21.057 0.023 20.04 0.007 18.698C-0.007 17.492 0.005 16.286 0.004 15.081C0.004 14.218 0.295 13.467 0.829 12.808C1.108 12.465 1.45 12.203 1.827 11.981C3.006 11.288 4.18 10.586 5.361 9.896C5.488 9.821 5.523 9.738 5.523 9.598C5.519 8.168 5.502 6.738 5.526 5.308C5.548 4.02 6.097 2.997 7.168 2.315C8.026 1.768 8.915 1.272 9.792 0.755C10.023 0.619 10.254 0.482 10.49 0.358C10.865 0.161 11.266 0.06 11.686 0.017C12.464 -0.062 13.172 0.136 13.84 0.532C14.774 1.087 15.706 1.645 16.646 2.188C17.416 2.633 17.958 3.272 18.272 4.117C18.41 4.486 18.479 4.871 18.48 5.265C18.485 6.695 18.482 8.125 18.482 9.555V9.797ZM11.99 19.039L12.031 19.028C13.214 18.329 14.406 17.645 15.577 16.925C16.223 16.529 16.565 15.917 16.566 15.129C16.567 13.791 16.564 12.453 16.569 11.114C16.569 10.979 16.531 10.903 16.413 10.834C15.28 10.171 14.157 9.492 13.02 8.837C12.336 8.442 11.632 8.458 10.95 8.856C9.834 9.506 8.726 10.17 7.61 10.821C7.481 10.896 7.432 10.977 7.433 11.131C7.439 12.449 7.437 13.766 7.436 15.083C7.435 15.931 7.813 16.553 8.511 16.982C8.821 17.173 9.137 17.353 9.451 17.539C10.297 18.038 11.143 18.538 11.99 19.039ZM5.52 12.056C5.429 12.105 5.374 12.133 5.322 12.164C4.47 12.668 3.622 13.179 2.766 13.675C2.196 14.006 1.902 14.501 1.896 15.163C1.885 16.319 1.887 17.476 1.895 18.632C1.9 19.271 2.183 19.76 2.724 20.082C3.716 20.672 4.708 21.265 5.707 21.844C6.199 22.129 6.719 22.141 7.213 21.859C8.132 21.333 9.038 20.785 9.948 20.245L10.059 20.158L9.925 20.066C9.149 19.608 8.375 19.149 7.597 18.696C6.972 18.331 6.466 17.842 6.094 17.211C5.703 16.548 5.521 15.825 5.52 15.053C5.52 14.142 5.52 13.23 5.52 12.319V12.056ZM13.931 20.159C14.003 20.208 14.056 20.249 14.113 20.283C14.983 20.797 15.853 21.31 16.724 21.822C17.254 22.134 17.793 22.138 18.32 21.831C19.324 21.247 20.321 20.653 21.317 20.056C21.837 19.744 22.102 19.263 22.107 18.651C22.116 17.481 22.118 16.311 22.106 15.141C22.1 14.506 21.821 14.019 21.274 13.698C20.503 13.246 19.737 12.787 18.968 12.332C18.817 12.243 18.663 12.158 18.482 12.055V12.315C18.482 13.254 18.484 14.193 18.48 15.132C18.48 15.32 18.469 15.51 18.439 15.695C18.234 16.969 17.604 17.955 16.518 18.623C16.044 18.915 15.562 19.192 15.083 19.476C14.705 19.7 14.328 19.924 13.931 20.159ZM7.436 8.663L7.624 8.566C8.417 8.099 9.205 7.623 10.005 7.167C11.329 6.413 12.668 6.421 13.992 7.158C14.801 7.609 15.589 8.1 16.388 8.572C16.438 8.602 16.492 8.624 16.556 8.655C16.561 8.595 16.566 8.561 16.566 8.526C16.566 7.419 16.567 6.312 16.565 5.206C16.564 5.13 16.552 5.052 16.535 4.978C16.43 4.499 16.156 4.149 15.745 3.906C14.769 3.33 13.794 2.752 12.815 2.18C12.271 1.862 11.723 1.869 11.179 2.185C10.888 2.354 10.599 2.527 10.309 2.698C9.606 3.114 8.897 3.523 8.2 3.95C7.701 4.256 7.437 4.717 7.436 5.322V8.663Z', '#221AFB']
  };
  function FigIcon(name, px) {
    var d = FIG_ICONS[name]; if (!d) return Ic(name, 'nr');
    return h('svg', { className: 'nkc-fic', viewBox: d[0], width: px || 24, height: px || 24, fill: 'none', 'aria-hidden': true, 'data-icon': name, dangerouslySetInnerHTML: { __html: (Array.isArray(d[1]) ? d[1] : [[d[1], d[2]]]).map(function (q) { return '<path d="' + q[0] + '" fill="' + (q[1] || 'currentColor') + '"/>'; }).join('') } });
  }
  /* Scan Photo (80607:20843, Status=00) — corners + face + scan line from the Figma export; glow moved to CSS, scan line animated (AI Generated motion). */
  var SCAN_SVG = '<svg viewBox="16 16 99 99" fill="none" aria-hidden="true">' +
    '<g class="nkc-scan-c" style="stroke:var(--surface-longing)" stroke-width="3" stroke-linecap="round"><path d="M40.5 22.5C34.9 22.5 32.1 22.5 29.9 23.4C27 24.6 24.6 27 23.4 29.9C22.5 32.1 22.5 34.9 22.5 40.5"/><path d="M89.6 22.5C95.2 22.5 98 22.5 100.2 23.4C103.1 24.6 105.5 27 106.7 29.9C107.6 32.1 107.6 34.9 107.6 40.5"/><path d="M40.5 108.5C34.9 108.5 32.1 108.5 29.9 107.6C27 106.4 24.6 104 23.4 101.1C22.5 98.9 22.5 96.1 22.5 90.5"/><path d="M89.6 108.5C95.2 108.5 98 108.5 100.2 107.6C103.1 106.4 105.5 104 106.7 101.1C107.6 98.9 107.6 96.1 107.6 90.5"/></g>' +
    '<defs><linearGradient id="nkcScanFace" x1="65" y1="33.4" x2="80.8" y2="134.2" gradientUnits="userSpaceOnUse"><stop style="stop-color:var(--nkc-scan-face)"/><stop offset="0.9" style="stop-color:var(--surface-screen-bk);stop-opacity:0"/></linearGradient></defs>' +
    '<path fill="url(#nkcScanFace)" d="M74.3 80.6C74.3 80.6 81.3 82.4 88.3 86.8C92.8 89.6 95.4 93.2 98 97.3C98.8 98.7 97.9 100.4 96.3 100.4H33.7C32.1 100.4 31.2 98.7 32 97.3C34.6 93.2 37.2 89.6 41.7 86.8C48.7 82.4 55.7 80.6 55.7 80.6C55.9 79.8 56.2 77.3 56.3 74.7C55.4 73.8 54.6 72.8 53.6 71.9C51.9 70.2 51.7 67.7 51 64.5C49.9 64.8 49.5 64.3 49.2 63.8C49 63.5 48.9 63.1 48.8 62.7L48 58.7C47.8 57.7 47.6 56.7 47.7 55.6C47.8 55.2 48 54.7 48.4 54.4C48.8 54.1 49.4 54.2 49.6 54.6L49 48.8C48.4 48.2 48 46.9 48.2 45.9C48.4 44.9 48.7 43.9 48.8 42.9C49 41.8 49 40.7 49.3 39.6C49.8 38.1 50.8 36.8 51.9 35.7C52.7 34.9 53.5 34.1 54.4 33.4C56.1 32 58.2 30.9 60.4 30.7C61.1 30.6 61.9 30.6 62.6 30.6H67.4C68.1 30.6 68.9 30.6 69.6 30.7C71.8 30.9 73.9 32 75.6 33.4C76.5 34.1 77.3 34.9 78.1 35.7C79.2 36.8 80.2 38.1 80.7 39.6C81 40.7 81 41.8 81.2 42.9C81.3 43.9 81.6 44.9 81.8 45.9C82 46.9 81.6 48.2 81 48.8L80.4 54.6C80.6 54.2 81.2 54.1 81.6 54.4C82 54.7 82.2 55.2 82.3 55.6C82.4 56.7 82.2 57.7 82 58.7L81.2 62.7C81.1 63.1 81 63.5 80.8 63.8C80.5 64.3 79.9 64.9 79 64.5C78.3 67.7 78.1 70.2 76.4 71.9C75.4 72.9 74.5 73.9 73.7 74.8C73.8 77.4 74.1 79.8 74.3 80.6Z"/>' +
    '<rect class="nkc-scan-line" x="31.5" y="43.5" width="68" height="4" rx="2" style="fill:var(--surface-longing)"/></svg>';
  var ASSET_BASE = { v: '' };
  /* ---------- Registration fields, Figma update 11 Nov 2026 (80607:*) ----------
     All share the Question shell (80453:2664). Inputs are composed from DL classes (nk-field / nk-field-box, nk-selcard,
     DL Checkbox, DL Hint, DL Button) because the DL TextField has no slot for the Figma trailing icons (view, camera-02, rajhi). */
  var BASIC = { type: 'المعلومات الأساسية', typeIcon: 'student-card' };
  function toLatin(s) { return String(s || '').replace(/[٠-٩]/g, function (c) { return String('٠١٢٣٤٥٦٧٨٩'.indexOf(c)); }); }
  function Fld(p) {
    var f = React.useState(false), focus = f[0], setFocus = f[1];
    var st = p.state || (focus ? 'focused' : 'default');
    var id = React.useRef('nkcf' + Math.random().toString(36).slice(2, 7)).current;
    var filled = p.value != null && String(p.value) !== '';
    var showLbl = p.floating && (filled || st === 'disabled');
    return h('div', { className: 'nk nk-field nkc-fld ' + (st !== 'default' ? st : ''), 'data-figma': p.figma },
      h('label', { className: 'nk-field-box' + (showLbl ? ' nkc-float' : ''), htmlFor: id },
        p.lead || null,
        h('span', { className: 'nkc-fld-col' },
          showLbl ? h('span', { className: 'nkc-fld-lbl notes-1-regular' }, p.label) : null,
          h('input', { id: id, className: 'body-2-regular', type: p.type || 'text', inputMode: p.inputMode, autoComplete: p.autoComplete || 'off', dir: p.dir, value: p.value || '', placeholder: showLbl ? '' : (p.placeholder || p.label), disabled: st === 'disabled', readOnly: p.readOnly, 'aria-label': p.label || p.placeholder, 'aria-invalid': st === 'error' || undefined, 'aria-describedby': p.hint ? id + 'h' : undefined,
            onFocus: function () { setFocus(true); }, onBlur: function () { setFocus(false); if (p.onBlur) p.onBlur(); }, onChange: function (e) { if (p.onChange) p.onChange(e.target.value); } })),
        p.trail || null),
      p.hint ? h(N.Hint, { type: st === 'error' ? 'error' : 'hint', id: id + 'h' }, p.hint) : null);
  }
  function SelCard(p) { // DL 3.10 Select Card (nk-selcard): icon alone in the top row, title 14 + description 16, no radio (Figma 16 Nov)
    var sel = !!p.selected;
    return h('button', { type: 'button', className: 'nk nk-selcard nkc-selcard ' + (sel ? 'selected' : '') + (p.disabled ? ' disabled' : ''), role: p.selected === undefined ? undefined : 'radio', 'aria-checked': p.selected === undefined ? undefined : sel, disabled: !!p.disabled, onClick: p.onClick, 'data-figma': p.figma },
      h('div', { className: 'top' }, FigIcon(p.icon, 24)),
      h('div', { className: 'cnt' }, p.desc ? h('span', { className: 'ttl notes-1-regular' }, p.title) : null, h('span', { className: 'dsc body-2-regular' }, p.desc || p.title)));
  }
  function useAnswer(p) { var a = React.useState(p.value || ''), v = a[0], set = a[1]; var e = React.useState(false), err = e[0], setErr = e[1]; return { v: v, set: function (x) { set(x); setErr(false); }, err: err, setErr: setErr }; }

  /* Password — 80607:16432 */
  var PW_RULES = [['8 أحرف على الأقل.', function (s) { return s.length >= 8; }], ['حرف صغير واحد على الأقل.', function (s) { return /[a-z]/.test(s); }], ['حرف كبير واحد على الأقل.', function (s) { return /[A-Z]/.test(s); }], ['رقم واحد على الأقل.', function (s) { return /[0-9]/.test(s); }], ['رمز واحد على الأقل دون وجود مسافات.', function (s) { return /[^A-Za-z0-9\s]/.test(s) && !/\s/.test(s); }]];
  function PasswordField(p) {
    var a = useAnswer(p), sh = React.useState(false), show = sh[0], setShow = sh[1];
    var ok = PW_RULES.map(function (r) { return r[1](a.v); }), all = ok.every(Boolean);
    return h(Question, { figma: '80607:16432', type: 'تغيير كلمة المرور', typeIcon: null, typeFig: 'security-password', title: 'يمكنك إدخال كلمة المرور الجديدة هنا لتستعملها لاحقًا', onBack: p.onBack,
      onConfirm: function () { if (all) { if (p.onConfirm) p.onConfirm(a.v); } else a.setErr(true); } },
      h('div', { className: 'nk nk-field nkc-pw ' + (a.err ? 'error' : ''), 'data-figma': '80607:16851' },
        h('div', { className: 'nk-field-box nkc-pwbox' },
          h('div', { className: 'nkc-pwrow' },
            h('input', { className: 'body-2-regular', type: show ? 'text' : 'password', dir: a.v ? 'ltr' : undefined, autoComplete: 'new-password', placeholder: 'كلمة المرور', 'aria-label': 'كلمة المرور', 'aria-describedby': 'nkcpwr', 'aria-invalid': a.err || undefined, value: a.v, onChange: function (e) { a.set(e.target.value); } }),
            h('button', { type: 'button', className: 'nkc-ib', 'aria-label': show ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور', 'aria-pressed': show, onClick: function () { setShow(!show); } }, FigIcon('view', 24))),
          h('ul', { className: 'nkc-pwrules', id: 'nkcpwr', 'aria-live': 'polite' }, PW_RULES.map(function (r, i) {
            return h('li', { key: i, className: 'notes-1-regular' + (ok[i] ? ' ok' : a.err ? ' bad' : '') }, h('span', { className: 'nk-check' + (ok[i] ? ' on' : '') + (!ok[i] && a.err ? ' error' : ''), 'aria-hidden': true }, ok[i] ? Ic('tick-02', 'sm') : null), h('span', null, r[0]), h('span', { className: 'nkc-sr' }, ok[i] ? ' (مستوفى)' : ' (غير مستوفى)'));
          })))));
  }

  /* Mobile — 80607:17062 (variant is misnamed "Password" in Figma) */
  var DIAL = [['sa', '+966'], ['ae', '+971'], ['eg', '+20'], ['pk', '+92'], ['id', '+62']];
  function MobileField(p) {
    var a = useAnswer(p), c = React.useState(0), ci = c[0], setCi = c[1], o = React.useState(false), open = o[0], setOpen = o[1];
    var digits = toLatin(a.v).replace(/\D/g, ''), valid = ci === 0 ? /^05\d{8}$/.test(digits) : digits.length >= 7;
    return h(Question, { figma: '80607:17062', type: 'رقم الجوال', typeIcon: 'student-card', title: 'يرجى تزويدنا برقم الجوال', desc: 'سيتم إرسال رمز تحقق عبر رسالة نصية', onBack: p.onBack,
      onConfirm: function () { if (valid) { if (p.onConfirm) p.onConfirm('\u2066' + DIAL[ci][1] + ' ' + digits + '\u2069'); } else a.setErr(true); } },
      h('div', { className: 'nkc-mobile', 'data-figma': '80607:17346' },
        h('div', { className: 'nk nk-field nkc-dial' },
          h('button', { type: 'button', className: 'nk-field-box', 'aria-haspopup': 'listbox', 'aria-expanded': open, 'aria-label': 'رمز الدولة ' + DIAL[ci][1], onClick: function () { setOpen(!open); } }, h('span', { className: 'body-2-regular', dir: 'ltr' }, DIAL[ci][1]), Ic('chevron-down', 'nr')),
          open ? h('ul', { className: 'nkc-dial-list', role: 'listbox' }, DIAL.map(function (d, i) { return h('li', { key: d[0], role: 'option', 'aria-selected': i === ci, tabIndex: 0, onClick: function () { setCi(i); setOpen(false); }, onKeyDown: function (e) { if (e.key === 'Enter') { setCi(i); setOpen(false); } } }, h(Flag, { code: d[0] }), h('span', { dir: 'ltr' }, d[1])); })) : null),
        h(Fld, { label: 'رقم الجوال', placeholder: 'مثل \u206605xxxxxxx\u2069', type: 'tel', inputMode: 'numeric', autoComplete: 'tel-national', dir: a.v ? 'ltr' : undefined, value: a.v, onChange: function (x) { a.set(toLatin(x).replace(/[^\d ]/g, '').slice(0, 12)); }, state: a.err ? 'error' : undefined, hint: a.err ? 'أدخل رقم جوال سعودي يبدأ بـ 05 ويتكوّن من 10 أرقام.' : null })));
  }

  /* Gender — 80607:17682 */
  function GenderField(p) {
    var s = React.useState(p.value || null), v = s[0], set = s[1], e = React.useState(false), err = e[0], setErr = e[1];
    return h(Question, Object.assign({ figma: '80607:17682', title: 'يُرجى تحديد النوع', onBack: p.onBack, onConfirm: function () { if (v) { if (p.onConfirm) p.onConfirm(v); } else setErr(true); } }, BASIC),
      h('div', { className: 'nkc-cards2', role: 'radiogroup', 'aria-label': 'النوع' },
        h(SelCard, { figma: '80607:18051', icon: 'haji', title: 'ذكر', selected: v === 'ذكر', onClick: function () { set('ذكر'); setErr(false); } }),
        h(SelCard, { figma: '80607:18050', icon: 'hijab', title: 'أنثى', selected: v === 'أنثى', onClick: function () { set('أنثى'); setErr(false); } })),
      err ? h(N.Hint, { type: 'error' }, 'اختر النوع للمتابعة.') : null);
  }

  /* Passport number — 80607:18228 (Style=Passport; "Pasport" until 14 Nov 2026) */
  function PassportNumber(p) {
    var a = useAnswer(p), valid = /^[A-Z0-9]{6,9}$/.test(a.v);
    return h(Question, Object.assign({ figma: '80607:18228', title: 'زودنا برقم جواز السفر', onBack: p.onBack, onConfirm: function () { if (valid) { if (p.onConfirm) p.onConfirm(a.v); } else a.setErr(true); } }, BASIC),
      h(Fld, { figma: '80607:18418', label: 'رقم جواز السفر', dir: a.v ? 'ltr' : undefined, autoComplete: 'off', value: a.v, onChange: function (x) { a.set(toLatin(x).toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 9)); }, state: a.err ? 'error' : undefined, hint: a.err ? 'رقم الجواز من 6 إلى 9 أحرف وأرقام إنجليزية.' : null,
        trail: h('button', { type: 'button', className: 'nkc-ib', 'aria-label': 'امسح الجواز بالكاميرا', onClick: p.onScan }, FigIcon('camera-02', 24)) }));
  }

  /* Border / Visa number — 80607:18463 */
  function BorderNumber(p) {
    var k = React.useState(p.kind || null), kind = k[0], setKind = k[1], a = useAnswer(p);
    var label = kind ? 'رقم ' + (kind === 'border' ? 'الحدود' : 'التأشيرة') : 'رقم %s';
    var valid = kind && /^\d{10}$/.test(a.v);
    return h(Question, Object.assign({ figma: '80607:18463', title: 'زودنا برقم الحدود أو رقم التأشيرة', onBack: p.onBack, onConfirm: function () { if (valid) { if (p.onConfirm) p.onConfirm(label + ': ' + a.v); } else a.setErr(true); } }, BASIC),
      h('div', { className: 'nkc-cards2', role: 'radiogroup', 'aria-label': 'نوع الرقم' },
        h(SelCard, { figma: '80607:18656', icon: 'airplane-landing-02', title: 'رقم الحدود', selected: kind === 'border', onClick: function () { setKind('border'); a.setErr(false); } }),
        h(SelCard, { figma: '80607:18655', icon: 'audit-01', title: 'رقم التأشيرة', selected: kind === 'visa', onClick: function () { setKind('visa'); a.setErr(false); } })),
      h(Fld, { figma: '80607:18657', label: kind ? label : 'اختر نوع الرقم أولًا', placeholder: kind ? label : 'اختر نوع الرقم أولًا', inputMode: 'numeric', dir: a.v ? 'ltr' : undefined, value: a.v, state: !kind ? 'disabled' : a.err ? 'error' : undefined, onChange: function (x) { a.set(toLatin(x).replace(/\D/g, '').slice(0, 10)); }, hint: a.err ? (kind ? label + ' مكوّن من 10 أرقام.' : 'اختر رقم الحدود أو رقم التأشيرة.') : null }));
  }

  /* IBAN — 80607:18703. Bank name comes from the backend IBAN lookup; the demo resolves any valid SA IBAN to the Figma sample bank. */
  function IbanField(p) {
    var n = React.useState(p.name || ''), name = n[0], setName = n[1];
    var a = useAnswer({ value: p.iban || '' }), s = React.useState(p.verified ? 'ok' : 'idle'), st = s[0], setSt = s[1];
    var clean = a.v.replace(/\s/g, ''), valid = /^SA\d{22}$/.test(clean);
    function verify() { if (!valid) { a.setErr(true); return; } setSt('busy'); setTimeout(function () { setSt('ok'); }, 700); }
    return h(Question, { figma: '80607:18703', type: 'المعلومات البنكية', typeIcon: 'bank', title: 'أكمل معلوماتك البنكية', desc: 'سيتم استرداد قيمة الحجز في حال الإلغاء.', onBack: p.onBack, ctaState: st === 'ok' && name.trim() ? 'default' : undefined,
      onConfirm: function () { if (st === 'ok' && name.trim()) { if (p.onConfirm) p.onConfirm(name + ' · \u2066' + clean.slice(0, 4) + '…' + clean.slice(-4) + '\u2069'); } else if (st !== 'ok') verify(); } },
      h(Fld, { figma: '80607:19076', label: 'اسم صاحب الحساب', floating: true, autoComplete: 'name', value: name, onChange: setName }),
      h(Fld, { figma: '80607:19077', label: 'رقم الآيبان', floating: true, dir: 'ltr', autoComplete: 'off', value: a.v, state: a.err ? 'error' : st === 'ok' ? 'success' : undefined, hint: a.err ? 'يبدأ الآيبان السعودي بـ SA ويتبعه 22 رقمًا.' : null,
        onChange: function (x) { a.set(toLatin(x).toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 24)); setSt('idle'); },
        trail: st === 'ok' ? h('span', { className: 'nkc-verified notes-1-regular', role: 'status', 'aria-label': 'تحقّقنا من الآيبان', title: 'تحقّقنا من الآيبان' }, Ic('tick-02', 'nr')) : h(N.Button, { kind: 'secondary', size: 'sm', state: st === 'busy' ? 'loading' : 'default', onClick: function (e) { e.preventDefault(); verify(); } }, 'تحقّق') }),
      st === 'ok' ? h(Fld, { figma: '80607:19078', label: 'البنك', floating: true, value: 'مصرف الراجحي', state: 'disabled', trail: FigIcon('rajhi', 24) }) : null);
  }

  /* Passport attach — 80607:19234 (no CTA: picking a card is the answer) */
  function PassportAttach(p) {
    var ref = React.useRef(null);
    function pick(mode) { if (mode === 'file' && ref.current && p.realPicker) ref.current.click(); else if (p.onPick) p.onPick(mode, null); }
    return h(Question, Object.assign({ figma: '80607:19234', title: 'زودنا بصورة من جواز السفر', onBack: p.onBack, cta: false }, BASIC),
      h('div', { className: 'nkc-cards2' },
        h(SelCard, { figma: '80607:19466', icon: 'camera-02', title: 'التقاط صورة', onClick: function () { pick('camera'); } }),
        h(SelCard, { figma: '80607:19465', icon: 'image-02', title: 'إرفاق الصورة', onClick: function () { pick('file'); } })),
      h('input', { ref: ref, type: 'file', accept: 'image/*', hidden: true, onChange: function (e) { var f = e.target.files && e.target.files[0]; if (f && p.onPick) p.onPick('file', URL.createObjectURL(f)); } }));
  }

  /* Passport preview — 80607:19494 */
  function PassportPreview(p) {
    return h(Question, Object.assign({ figma: '80607:19494', title: 'زودنا بصورة من جواز السفر', onBack: p.onBack, cta: false }, BASIC),
      h('figure', { className: 'nkc-passport', 'data-figma': '80607:19720' }, h('img', { src: p.src || (ASSET_BASE.v + 'assets/passport-sample.jpg'), alt: 'معاينة صورة جواز السفر', width: 480, height: 335 })),
      h('div', { className: 'nkc-cta2' },
        h(N.Button, { kind: 'secondary', size: 'sm', onClick: p.onEdit }, 'تعديل'),
        h(N.Button, { kind: 'primary', size: 'sm', icon: 'right', iconName: 'tick-02', onClick: p.onConfirm }, 'التأكيد والمتابعة')));
  }

  /* Liveness — 80607:20622 (variant also named "Passport Preview" in Figma) */
  function Liveness(p) {
    var s = React.useState(p.status || 'idle'), st = s[0], setSt = s[1];
    function start() { if (st !== 'idle') return; setSt('scanning'); setTimeout(function () { setSt('done'); if (p.onDone) setTimeout(p.onDone, 600); }, 2600); }
    return h(Question, Object.assign({ figma: '80607:20622', title: 'زودنا بصورة من جواز السفر', onBack: p.onBack, cta: false }, BASIC),
      h('div', { className: 'nkc-scan ' + st, 'data-figma': '80607:20843', role: 'img', 'aria-label': st === 'done' ? 'اكتمل المسح' : 'إطار مسح الوجه', dangerouslySetInnerHTML: { __html: SCAN_SVG } }),
      h('p', { className: 'nkc-live-copy body-1-regular' }, 'تتطلب الخطوة تصوير واضح للوجه في إضاءة واضحة باستخدام كاميرا الجوال.'),
      h(N.Hint, { type: 'warning' }, 'الهدف: حماية حسابك وتصريحك - لا نستخدم هذا للإعلانات إطلاقاً.'),
      h('div', { className: 'nkc-cta', 'aria-live': 'polite' }, st === 'done' ? h('span', { className: 'nkc-verified body-2-regular' }, Ic('tick-02', 'nr'), 'اكتمل المسح الحيّ') :
        h(N.Button, { kind: 'primary', size: 'md', state: st === 'scanning' ? 'loading' : 'default', className: 'nkc-btn-fig', onClick: start }, h(F, null, h('span', null, 'ابدأ المسح الحيّ'), FigIcon('identification', 20)))));
  }
  /* ---------- Figma pull 11 Nov 2026 (evening): Location Guide, Hotel Choose, Flights Selection, Booking_Ticket ---------- */
  Object.assign(FIG_ICONS, {
    'maps': ['0 0 24 24', 'M7.3 2.5C7.7 2.3 8.2 2.3 8.7 2.5L15.2 5.2H21C22 5.2 22.8 6 22.8 7V20C22.7 21 22 21.8 21 21.8H15C14.9 21.8 14.9 21.7 14.8 21.7L8 18.8L3.6 20.3C2.4 20.7 1.3 19.8 1.3 18.6V6.6C1.3 6 1.6 5.3 2.2 5.1L7.3 2.5ZM15.8 20.3H21C21.1 20.3 21.2 20.1 21.3 20V7C21.3 6.9 21.1 6.7 21 6.7H15.8V20.3ZM8.8 17.5L14.3 19.9V6.5L8.8 4.1V17.5ZM2.9 6.4C2.8 6.4 2.8 6.5 2.8 6.6V18.6C2.8 18.8 2.9 18.9 3.1 18.8L7.3 17.5V4.2L2.9 6.4Z'],
    'google-maps': ['0 0 24 26', [['M20 8.8V9C20 12.3 17.4 15.3 15.7 17.2C15.2 17.8 14.7 18.3 14.4 18.7C13.5 20.1 13 21.6 12.8 22.2C12.8 22.6 12.5 23 12 23C11.5 23 11.2 22.6 11.2 22.2C11 21.6 10.5 20.1 9.6 18.7C9.3 18.3 8.8 17.8 8.3 17.2C6.6 15.3 4 12.3 4 9V8.8C4 4.5 7.6 1 12 1C16.4 1 20 4.5 20 8.8ZM12 11.7C13.7 11.7 15.1 10.3 15.1 8.7C15.1 7 13.7 5.6 12 5.6C10.3 5.6 8.9 7 8.9 8.7C8.9 10.3 10.3 11.7 12 11.7Z', '#34A851'], ['M19.1 5.2C18.1 3.4 16.4 2 14.3 1.3L9.8 6.6C10.3 6 11.1 5.6 12 5.6C13.7 5.6 15.1 7 15.1 8.7C15.1 9.3 14.9 10 14.5 10.5L19.1 5.2Z', '#4285F5'], ['M8.4 17.3L8.3 17.2C7.2 15.9 5.7 14.2 4.8 12.2L9.5 6.8C9.1 7.3 8.9 8 8.9 8.7C8.9 10.3 10.3 11.7 12 11.7C12.9 11.7 13.7 11.3 14.2 10.8L8.4 17.3Z', '#F9BB0E'], ['M5.9 3.8C4.7 5.1 4 6.9 4 8.8V9C4 10.1 4.3 11.2 4.8 12.2L9.5 6.8L5.9 3.8Z', '#E74335'], ['M14.4 1.3C13.6 1.1 12.8 1 12 1C9.6 1 7.4 2.1 5.9 3.8L9.5 6.8C9.6 6.7 9.7 6.6 9.8 6.6L14.4 1.3Z', '#1A73E6']]],
    'user-group-02': ['0 0 24 24', 'M12 15.2C13.6 15.2 15.2 15.8 16.4 16.9C17 17.3 17.3 18 17.3 18.8V19.5C17.3 19.9 16.9 20.3 16.5 20.3C16.1 20.3 15.8 19.9 15.8 19.5V18.8C15.8 18.6 15.7 18.3 15.5 18C13.6 16.4 10.5 16.4 8.5 18C8.3 18.2 8.3 18.6 8.3 18.8V19.5C8.3 19.9 7.9 20.2 7.5 20.2C7.1 20.2 6.8 19.9 6.8 19.5V18.8C6.8 18 7 17.3 7.5 16.9C8.8 15.8 10.4 15.2 12 15.2ZM6.5 10.3C6.9 10.3 7.3 10.6 7.3 11C7.3 11.4 6.9 11.8 6.5 11.8C5.4 11.8 4.3 12.2 3.5 13C3.3 13.2 3.3 13.5 3.3 13.7V14.5C3.3 14.9 2.9 15.3 2.5 15.3C2.1 15.3 1.8 14.9 1.8 14.5V13.7C1.8 13 2 12.4 2.5 12C3.6 10.9 5 10.3 6.5 10.3ZM17.5 10.3C19 10.3 20.4 10.9 21.5 11.9C22 12.4 22.3 13 22.3 13.7V14.5C22.3 14.9 21.9 15.3 21.5 15.3C21.1 15.3 20.8 14.9 20.8 14.5V13.7C20.8 13.5 20.7 13.2 20.5 13C19.7 12.2 18.6 11.8 17.5 11.8C17.1 11.8 16.8 11.4 16.8 11C16.8 10.6 17.1 10.3 17.5 10.3ZM12 7.8C13.8 7.8 15.3 9.2 15.3 11C15.3 12.8 13.8 14.3 12 14.3C10.2 14.3 8.8 12.8 8.8 11C8.8 9.2 10.2 7.8 12 7.8ZM12 9.3C11 9.3 10.3 10 10.3 11C10.3 12 11 12.8 12 12.8C13 12.8 13.8 12 13.8 11C13.8 10 13 9.3 12 9.3ZM6.5 3.8C8 3.8 9.3 5 9.3 6.5C9.3 8 8 9.3 6.5 9.3C5 9.3 3.8 8 3.8 6.5C3.8 5 5 3.8 6.5 3.8ZM17.5 3.8C19 3.8 20.3 5 20.3 6.5C20.3 8 19 9.3 17.5 9.3C16 9.3 14.8 8 14.8 6.5C14.8 5 16 3.8 17.5 3.8ZM6.5 5.3C5.8 5.3 5.3 5.8 5.3 6.5C5.3 7.2 5.8 7.8 6.5 7.8C7.2 7.8 7.8 7.2 7.8 6.5C7.8 5.8 7.2 5.3 6.5 5.3ZM17.5 5.3C16.8 5.3 16.3 5.8 16.3 6.5C16.3 7.2 16.8 7.8 17.5 7.8C18.2 7.8 18.8 7.2 18.8 6.5C18.8 5.8 18.2 5.3 17.5 5.3Z'],
    'favourite': ['0 0 24 24', 'M16.3 2.3C20.4 2.3 22.7 5.6 22.8 9.2C22.8 12.4 21.3 14.9 19.3 17C17.3 19 14.7 20.5 12.3 21.7C12.1 21.8 11.9 21.8 11.7 21.7C9.3 20.5 6.7 19 4.7 17C2.7 14.9 1.3 12.4 1.3 9.2C1.3 5.6 3.6 2.3 7.7 2.3C9.6 2.3 11 3.1 12 4.3C13 3.1 14.4 2.3 16.3 2.3Z'],
    'man-woman': ['0 0 16 16', 'M5.3 5.2C6.3 5.2 7.2 6 7.2 7V10.7C7.2 10.9 6.9 11.2 6.7 11.2H5.8V14.7C5.8 14.9 5.6 15.2 5.3 15.2H2.7C2.4 15.2 2.2 14.9 2.2 14.7V11.2H1.3C1.1 11.2 0.8 10.9 0.8 10.7V7C0.8 6 1.7 5.2 2.7 5.2H5.3ZM11.7 5.2C12.5 5.2 13.2 5.6 13.5 6.4L15.1 9.8C15.2 9.9 15.2 9.9 15.2 10V10.7C15.2 10.9 14.9 11.2 14.7 11.2H13.5V14.7C13.5 14.9 13.3 15.2 13 15.2H10.3C10.1 15.2 9.8 14.9 9.8 14.7V11.2H8.7C8.4 11.2 8.2 10.9 8.2 10.7V10C8.2 9.9 8.2 9.9 8.2 9.8L9.8 6.4C10.1 5.6 10.9 5.2 11.7 5.2ZM2.7 6.2C2.2 6.2 1.8 6.5 1.8 7V10.2H2.7C2.9 10.2 3.2 10.4 3.2 10.7V14.2H4.8V10.7C4.8 10.4 5.1 10.2 5.3 10.2H6.2V7C6.2 6.5 5.8 6.2 5.3 6.2H2.7ZM11.7 6.2C11.3 6.2 10.9 6.4 10.7 6.8L9.2 10.2H10.3C10.6 10.2 10.8 10.4 10.8 10.7V14.2H12.5V10.7C12.5 10.4 12.7 10.2 13 10.2H14.2V10.1L12.6 6.8C12.5 6.4 12.1 6.2 11.7 6.2ZM4 0.8C5 0.8 5.8 1.7 5.8 2.7C5.8 3.7 5 4.5 4 4.5C3 4.5 2.2 3.7 2.2 2.7C2.2 1.7 3 0.8 4 0.8ZM11.7 0.8C12.7 0.8 13.5 1.7 13.5 2.7C13.5 3.7 12.7 4.5 11.7 4.5C10.7 4.5 9.8 3.7 9.8 2.7C9.8 1.7 10.7 0.8 11.7 0.8ZM4 1.8C3.5 1.8 3.2 2.2 3.2 2.7C3.2 3.1 3.5 3.5 4 3.5C4.5 3.5 4.8 3.1 4.8 2.7C4.8 2.2 4.5 1.8 4 1.8ZM11.7 1.8C11.2 1.8 10.8 2.2 10.8 2.7C10.8 3.1 11.2 3.5 11.7 3.5C12.1 3.5 12.5 3.1 12.5 2.7C12.5 2.2 12.1 1.8 11.7 1.8Z'],
    'door-02': ['0 0 16 16', 'M11.3 0.8C12.3 0.8 13.2 1.7 13.2 2.7V14.2H14C14.3 14.2 14.5 14.4 14.5 14.7C14.5 14.9 14.3 15.2 14 15.2H2C1.7 15.2 1.5 14.9 1.5 14.7C1.5 14.4 1.7 14.2 2 14.2H2.8V2.7C2.8 1.7 3.7 0.8 4.7 0.8H11.3ZM4.7 1.8C4.2 1.8 3.8 2.2 3.8 2.7V14.2H12.2V2.7C12.2 2.2 11.8 1.8 11.3 1.8H4.7ZM10.7 6.8C10.9 6.8 11.2 7.1 11.2 7.3V8.7C11.2 8.9 10.9 9.2 10.7 9.2C10.4 9.2 10.2 8.9 10.2 8.7V7.3C10.2 7.1 10.4 6.8 10.7 6.8Z'],
    'arrow-expand-02': ['0 0 20 20', 'M11.2 11.2C11.5 11 11.9 11 12.1 11.2L16.9 16V13.3C16.9 13 17.2 12.7 17.5 12.7C17.8 12.7 18.1 13 18.1 13.3V17.5C18.1 17.8 17.8 18.1 17.5 18.1H13.3C13 18.1 12.7 17.8 12.7 17.5C12.7 17.2 13 16.9 13.3 16.9H16L11.2 12.1C11 11.9 11 11.5 11.2 11.2ZM6.7 1.9C7 1.9 7.3 2.2 7.3 2.5C7.3 2.8 7 3.1 6.7 3.1H4L8.8 7.9C9 8.1 9 8.5 8.8 8.8C8.5 9 8.1 9 7.9 8.8L3.1 4V6.7C3.1 7 2.8 7.3 2.5 7.3C2.2 7.3 1.9 7 1.9 6.7V2.5C1.9 2.2 2.2 1.9 2.5 1.9H6.7Z'],
    'fire-03': ['0 0 20 20', 'M9.24 1.7C9.04 1.43 8.66 1.38 8.38 1.57C6.86 2.67 5.44 4.21 4.42 5.9C3.38 7.58 2.71 9.47 2.71 11.25C2.71 15.27 5.98 18.54 10 18.54C14.03 18.54 17.29 15.27 17.29 11.25C17.29 8.61 15.88 5.17 13.77 3.16C13.63 3.03 13.46 2.97 13.28 2.99C13.1 3.01 12.94 3.1 12.83 3.24L11.66 4.81L9.24 1.7ZM9.25 7.54C9.14 7.4 8.98 7.31 8.79 7.29C8.62 7.27 8.43 7.34 8.31 7.47C7.88 7.9 7.33 8.47 6.88 9.17C6.42 9.87 6.04 10.72 6.04 11.67C6.04 14.01 7.75 16.04 10 16.04C12.25 16.04 13.96 14.01 13.96 11.67C13.96 10.91 13.78 10.2 13.48 9.57C13.39 9.4 13.23 9.27 13.04 9.24C12.86 9.2 12.66 9.25 12.52 9.37L11.35 10.35L9.25 7.54Z'],
    'nusuk-mark': ['0 0 14 14', 'M12.5 7.4L12.8 7.3V7.2C12.8 6.7 12.6 6.3 12.4 5.9L12.8 5.8V5C12.8 4.6 12.3 4.3 11.4 3.9L12.7 3.5C12.8 3.5 12.8 3.4 12.8 3.4C12.8 3.3 12.8 3.2 12.7 3.2L7 1.3L1.3 3.2C1.2 3.2 1.2 3.3 1.2 3.4C1.2 3.4 1.2 3.5 1.3 3.5L2.4 3.9C1.6 4.2 1.2 4.5 1.2 4.8V5.8L1.6 5.9C1.3 6.2 1.2 6.6 1.2 7.1V7.3L1.4 7.4C1.3 7.8 1.2 8.3 1.2 8.9V9.1L1.3 9.1C1.2 9.6 1.2 10.1 1.2 10.6V10.8L7 12.7L12.8 10.8V10.7C12.8 10.1 12.8 9.6 12.6 9.2L12.8 9.1V9C12.8 8.4 12.7 7.9 12.5 7.5ZM7 7.7L10.1 6.7C10.5 6.9 10.8 7.1 11.2 7.4L6.7 8.8L2.7 7.5C3 7.2 3.5 6.9 3.9 6.7L7 7.7ZM7.6 5.1C8 5.5 8.4 5.8 8.9 6L7 6.7L5 6C5.5 5.8 6 5.5 6.4 5.1L7 5.3L7.6 5.1ZM2.5 7.8L7 9.2L11.5 7.8C11.8 8.1 12 8.4 12.2 8.8L6.7 10.6L1.7 9C1.9 8.5 2.2 8.1 2.5 7.8ZM7.1 1.6L11.9 3.2L10.7 3.7C10.6 3.6 10.5 3.6 10.3 3.5C9.3 3.1 8.1 2.7 7.4 2.2C7.2 2.1 7.1 1.9 7.1 1.7ZM1.8 3.4L6.8 1.6V1.7C6.8 1.8 6.8 1.9 6.7 2C6.1 2.5 4.8 3 3.6 3.4C3.4 3.5 3.1 3.6 2.8 3.7ZM6.7 12.3L1.5 10.6C1.5 10.1 1.5 9.6 1.6 9.2L7 11L12.3 9.3C12.4 9.6 12.5 10 12.5 10.5Z', 'var(--surface-illumination)']
  });
  function A(path) { return ASSET_BASE.v + 'assets/' + path; }


  /* Logo Icons + Logos Group (Figma 637:23*) rebuilt as code: gradient circles in CSS, vector marks inline,
     raster brand marks (Saudia, Marriott, Egyptair) as 4x PNG exports of the Figma originals. */
  var LOGO = {
    saudia: { bg: 'linear-gradient(0deg, rgba(2,103,51,.63), rgba(2,103,51,.81))', img: 'logos/saudia.png', box: [8, 8, 16, 16], label: 'الخطوط السعودية' },
    marriott: { bg: 'linear-gradient(0deg, rgba(251,53,96,.63), rgba(204,30,68,.72) 51%, rgba(159,7,40,.81))', img: 'logos/marriott.png', box: [6, 8.7, 20, 15], label: 'ماريوت' },
    egyptair: { bg: 'linear-gradient(0deg, rgba(4,41,90,.63), rgba(4,41,90,.81))', img: 'logos/egyptair.png', box: [6.4, 6, 15, 16], label: 'مصر للطيران', size: 28 },
    riyadhair: { bg: 'linear-gradient(0deg, rgba(35,7,81,.63), rgba(35,7,81,.81))', svg: '<svg viewBox="13.33 20 32 32" width="100%" height="100%" aria-hidden="true"><path d="M30.01 42.72C29.66 42.77 29.31 42.79 28.96 42.78C27.35 42.77 25.74 41.93 24.91 40.52C24.57 39.95 24.38 39.29 24.33 38.63C24.32 38.33 24.31 38.03 24.30 37.73C24.28 37.03 24.29 36.04 24.28 35.33C24.28 34.63 24.24 33.62 24.25 32.94C24.26 32.67 24.27 32.39 24.33 32.12H24.30C24.22 32.38 24.16 32.65 24.13 32.93C24.02 33.61 24.04 34.63 24.03 35.33C24.03 36.04 23.97 38.53 23.98 38.95C24.02 40.44 24.70 41.930 25.86 42.89C27.05 43.89 28.78 44.29 30.27 43.78C31.38 43.38 32.26 42.50 32.83 41.48L32.79 41.47C32.09 42.25 31.02 42.61 30.01 42.72" fill="#fff"/><path d="M30.93 38.49C29.99 37.53 29.16 37.13 28.46 36.95L28.48 36.95C29.84 36.75 30.97 35.47 30.97 34.07C30.97 32.55 29.69 31.19 28.17 31.19H24.75C24.84 31.02 25.23 30.57 25.54 30.32C26.15 29.83 26.86 29.53 27.61 29.36C29.02 29.03 30.54 29.26 31.73 30.10C32.67 30.75 33.37 31.78 33.54 32.92C33.63 33.47 33.62 34.18 33.64 34.74C33.64 35.33 33.65 35.99 33.65 36.58C33.64 37.40 33.69 38.22 33.67 39.03C33.66 39.29 33.64 39.56 33.59 39.82L33.63 39.84C33.71 39.58 33.75 39.31 33.79 39.05C33.87 38.23 33.89 37.40 33.90 36.58C33.90 35.79 33.97 33.24 33.94 32.87C33.84 31.10 32.85 29.40 31.25 28.56C30.44 28.12 29.51 27.94 28.59 28.02C26.73 28.18 25.41 29.55 24.67 31.18L24.64 31.24H26.32C27.84 31.33 29.84 31.77 29.84 34.07C29.84 36.37 27.81 36.84 26.29 36.93H25.27V36.98H26.31C26.62 36.99 28 37.16 29.70 39.03C31 40.47 32.81 41.21 34.69 40.48C32.79 41 32.29 39.89 30.93 38.49" fill="#fff"/></svg>', label: 'طيران الرياض' },
    madinah: { bg: 'linear-gradient(0deg, var(--nkc-city-madinah-b), var(--nkc-city-madinah))', svg: '<svg viewBox="20 30 48 48" width="100%" height="100%" aria-hidden="true"><path d="M52.39 57.38V52.39C52.39 49.09 50.45 46.11 47.45 44.82L43.98 43.32L40.53 44.81C37.55 46.11 35.61 49.08 35.61 52.37V57.33L34 59.41V64.32H54V59.41L52.39 57.38Z" fill="#fff"/></svg>', label: 'المدينة المنورة', size: 48 }
  };
  var CITY = {
    madinah: '<svg viewBox="0 0 14.67 14.67" width="15" height="15" aria-hidden="true"><rect width="14.67" height="14.67" rx="7.33" style="fill:var(--nkc-city-madinah)"/><path d="M10.13 8.05V6.41C10.13 5.32 9.48 4.34 8.48 3.92L7.33 3.42L6.18 3.91C5.18 4.34 4.54 5.32 4.54 6.40V8.03L4 8.72V10.33H10.67V8.72L10.13 8.05Z" fill="#fff"/></svg>',
    makkah: '<svg viewBox="0 0 14.67 14.67" width="15" height="15" aria-hidden="true"><rect width="14.67" height="14.67" rx="7.33" style="fill:var(--brand-kiswah-reverence)"/><path d="M2.55 5.01V10.61L8.30 12.81L12.05 9.81V4.01L6.34 1.81L2.55 5.01Z" fill="#fff"/></svg>'
  };
  function LogoIcon(p) {
    var L = LOGO[p.entity], sz = p.size || L.size || 32, k = sz / 32;
    var mark = L.img ? h('img', { src: A(L.img), alt: '', style: { position: 'absolute', left: L.box[0] * k, top: L.box[1] * k, width: L.box[2] * k, height: L.box[3] * k } })
      : h('span', { style: { position: 'absolute', inset: 0 }, dangerouslySetInnerHTML: { __html: L.svg } });
    return h('span', { className: 'nkc-logo', role: 'img', 'aria-label': L.label, title: L.label, style: { width: sz, height: sz, background: L.bg } }, mark,
      p.city ? h('span', { className: 'nkc-logo-city', dangerouslySetInnerHTML: { __html: CITY[p.city] } }) : null);
  }
  function LogosGroup(p) { // items: [{ entity, city? }]
    return h('span', { className: 'nkc-logos', dir: 'ltr', 'data-figma': 'Logos Group' }, p.items.map(function (x, i) { return h(LogoIcon, Object.assign({ key: i, size: p.size }, x)); }));
  }

  /* Location Guide — 80622:21047 */
  function LocationGuide(p) {
    var q = encodeURIComponent(p.query || 'Ajyad electric carts, Makkah');
    return h(Message, { from: 'nusuk', figma: '80622:21047' },
      h('p', { className: 'nkc-lg-title body-1-regular' }, p.title || 'إتبع الإرشادات التالية للوصول لموقع العربات الكهربائية في منطقة أجياد.'),
      h('figure', { className: 'nkc-lg-img' }, h('img', { src: p.image || A('ajyad-guide.jpg'), alt: p.imageAlt || 'منطقة العربات الكهربائية في أجياد', loading: 'lazy' })),
      h('p', { className: 'nkc-lg-steps notes-1-regular' }, p.steps || 'توجه إلى (باب 3) أمام فندق الصفوة ← واصل السير حتى مفترق الطريق ← اتجه يمينًا نحو منطقة الفرز والانتظار حتى تصل'),
      h('div', { className: 'nkc-cards2' },
        h(SelCard, { icon: 'maps', title: 'فتح خرائط نسك', onClick: p.onNusukMaps }),
        h(SelCard, { icon: 'google-maps', title: 'فتح خرائط Google', onClick: function () { if (p.onGoogleMaps) p.onGoogleMaps(); else window.open('https://www.google.com/maps/search/?api=1&query=' + q, '_blank', 'noopener'); } })));
  }

  /* Shared filter strip (Input/Type=Select × 3, Filled) used by Hotel Choose and Flights Selection */
  function Filters(p) {
    return h('div', { className: 'nkc-filters' }, (p.items || []).map(function (f, i) {
      return h('button', { key: i, type: 'button', className: 'nk nk-field nkc-filter', onClick: function () { if (p.onEdit) p.onEdit(f.key || i); }, 'aria-label': f.label + ': ' + f.value },
        h('span', { className: 'nk-field-box' }, f.icon && FIG_ICONS[f.icon] ? FigIcon(f.icon, 24) : Ic(f.icon, 'nr'),
          h('span', { className: 'nkc-fld-col' }, h('span', { className: 'nkc-fld-lbl notes-1-regular' }, f.label), h('span', { className: 'body-2-regular nkc-ellipsis' }, f.value))));
    }));
  }
  var HOTEL_FILTERS = [{ key: 'area', label: 'المنطقة', value: 'جدة', icon: 'location-01' }, { key: 'guests', label: 'النزلاء', value: '4 بالغون', icon: 'user-group-02' }, { key: 'date', label: 'التاريخ', value: '12 يناير إلى 18 يناير', icon: 'calendar-04' }];
  var HOTELS = [{ id: 'h1', name: 'دار التوحيد انتركونتيننتال', rating: 5, reviews: 234, dist: '400 متر من الحرم المكي', rooms: 3, beds: 3, baths: 'دورة مياه واحدة', nights: 3, price: '1,000', was: '1,000', off: 'خصم 25%', urgency: '20 حجز في الساعة الأخيرة', nusuk: true, freeCancel: true },
    { id: 'h2', name: 'دار التوحيد انتركونتيننتال', rating: 5, reviews: 234, dist: '400 متر من الحرم المكي', rooms: 3, beds: 3, baths: 'دورة مياه واحدة', nights: 3, price: '1,000', was: '1,000', off: 'خصم 25%', urgency: '20 حجز في الساعة الأخيرة', nusuk: true, freeCancel: false },
    { id: 'h3', name: 'دار التوحيد انتركونتيننتال', rating: 5, reviews: 234, dist: '400 متر من الحرم المكي', rooms: 3, beds: 3, baths: 'دورة مياه واحدة', nights: 3, price: '1,000', was: '1,000', off: 'خصم 25%', urgency: '20 حجز في الساعة الأخيرة', nusuk: true, freeCancel: true },
    { id: 'h4', name: 'دار التوحيد انتركونتيننتال', rating: 5, reviews: 234, dist: '400 متر من الحرم المكي', rooms: 3, beds: 3, baths: 'دورة مياه واحدة', nights: 3, price: '1,000', was: '1,000', off: 'خصم 25%', urgency: '20 حجز في الساعة الأخيرة', nusuk: false, freeCancel: true }];
  /* Hotel Offer card (Figma "Hotel Offer"). `urgency` renders the Figma fire line — see QA F29 before shipping. */
  function HotelCard(p) {
    var x = p.hotel, f = React.useState(false), fav = f[0], setFav = f[1];
    return h('article', { className: 'nkc-hotel' + (p.selected ? ' selected' : ''), 'data-figma': 'Hotel Offer' },
      h('button', { type: 'button', className: 'nkc-hotel-hit', 'aria-pressed': !!p.selected, 'aria-label': 'اختر ' + x.name + '، ' + x.price + ' ريال لـ ' + x.nights + ' ليالٍ', onClick: p.onSelect }),
      h('div', { className: 'nkc-hotel-img' }, h('img', { src: x.image || A('hotel-1.jpg'), alt: '', loading: 'lazy' }),
        h('div', { className: 'nkc-hotel-tags' }, x.nusuk ? h(N.Chip, { state: 'gold', size: 'md' }, FigIcon('nusuk-mark', 14), 'إختيارات نسك') : null, x.freeCancel ? h(N.Chip, { state: 'white', size: 'md' }, 'إلغاء حجز مجاني') : null),
        h('button', { type: 'button', className: 'nkc-fav' + (fav ? ' on' : ''), 'aria-pressed': fav, 'aria-label': fav ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة', onClick: function () { setFav(!fav); } }, FigIcon('favourite', 24))),
      h('div', { className: 'nkc-hotel-body' },
        h('div', { className: 'nkc-hotel-head' },
          h('div', null, h('h3', { className: 'body-1-regular' }, x.name), h('div', { className: 'nkc-hotel-dist notes-1-regular' }, Ic('hajj-service-solid', 'sm'), x.dist)),
          h('div', { className: 'nkc-hotel-rate' }, h('span', { className: 'notes-1-regular' }, Ic('star', 'sm'), h('bdi', null, x.rating)), h('span', { className: 'notes-2-regular' }, x.reviews + ' تقييم'))),
        h('div', { className: 'nkc-hotel-specs notes-2-regular' }, h('span', null, FigIcon('door-02', 16), x.rooms + ' غرف'), h('i', null, '·'), h('span', null, Ic('bed-double', 'sm'), x.beds + ' أسرّة'), h('i', null, '·'), h('span', null, FigIcon('man-woman', 16), x.baths))),
      h('div', { className: 'nkc-hotel-foot' },
        h('div', { className: 'nkc-hotel-price' }, h('span', { className: 'notes-1-regular nkc-muted' }, x.nights + ' ليالي'), h('span', { className: 'nkc-amt', dir: 'ltr' }, Ic('riyal', 'nr'), h('span', { className: 'display-2-light' }, x.price))),
        h('div', { className: 'nkc-hotel-promo' }, p.urgency === true && x.urgency ? h('span', { className: 'nkc-urg notes-2-regular' }, FigIcon('fire-03', 16), x.urgency) : null,
          x.off ? h('span', { className: 'nkc-was' }, h('s', { dir: 'ltr', className: 'notes-1-regular' }, x.was), h(N.Chip, { state: 'error', size: 'xs' }, x.off)) : null)));
  }
  function HotelChoose(p) {
    var s = React.useState(p.selected || null), sel = s[0], setSel = s[1], e = React.useState(false), err = e[0], setErr = e[1];
    var list = p.hotels || HOTELS;
    return h(Message, { from: 'nusuk', bg: false, actions: true, figma: '80625:21403', copyText: 'حجز الفنادق' },
      h('div', { className: 'nkc-qcard' }, h('div', { className: 'nkc-qb' }, h('div', { className: 'nkc-type' }, Ic('bed-double', 'sm'), h('span', null, 'حجز الفنادق'), h('span', { className: 'grow' })), h('div', { className: 'nkc-title' }, p.title || 'إختر من بين الفنادق المتنوعة في جدة.')), h(Filters, { items: p.filters || HOTEL_FILTERS, onEdit: p.onEditFilter })),
      h('div', { className: 'nkc-rail', role: 'listbox', 'aria-label': 'الفنادق المتاحة' }, list.map(function (x) { return h(HotelCard, { key: x.id, hotel: x, urgency: p.urgency, selected: sel === x.id, onSelect: function () { setSel(x.id); setErr(false); } }); })),
      err ? h(N.Hint, { type: 'error' }, 'اختر فندقًا للمتابعة.') : null,
      h('div', { className: 'nkc-cta' }, h(N.Button, { kind: 'primary', size: 'md', icon: 'right', iconName: 'tick-02', onClick: function () { var x = list.filter(function (y) { return y.id === sel; })[0]; if (x) { if (p.onConfirm) p.onConfirm(x); } else setErr(true); } }, 'التأكيد والمتابعة')));
  }

  /* Flights Selection — 80626:36740, Flight Ticket (Selected=Off, Version=Full) */
  var FLIGHTS = [{ id: 'f1', from: { country: 'السعودية', flag: '🇸🇦', time: '10:30', code: 'JED' }, to: { country: 'بريطانيا', flag: '🇬🇧', time: '02:22', code: 'LCY' }, dur: '1 ساعة 22 دقيقة', stops: 'رحلة مباشرة', tags: ['اقتصادية', 'حقيبتين - 23 كجم', 'الاقتصادية'], ribbon: 'الارخص', seats: '3 مقاعد', price: '3600', airline: 'الخطوط السعودية', operator: 'تدار بواسطة فلاى ناس' },
    { id: 'f2', from: { country: 'السعودية', flag: '🇸🇦', time: '10:30', code: 'JED' }, to: { country: 'بريطانيا', flag: '🇬🇧', time: '02:22', code: 'LCY' }, dur: '1 ساعة 22 دقيقة', stops: 'رحلة مباشرة', tags: ['اقتصادية', 'حقيبتين - 23 كجم', 'الاقتصادية'], ribbon: 'الارخص', seats: '3 مقاعد', price: '3600', airline: 'الخطوط السعودية', operator: 'تدار بواسطة فلاى ناس' },
    { id: 'f3', from: { country: 'السعودية', flag: '🇸🇦', time: '10:30', code: 'JED' }, to: { country: 'بريطانيا', flag: '🇬🇧', time: '02:22', code: 'LCY' }, dur: '1 ساعة 22 دقيقة', stops: 'رحلة مباشرة', tags: ['اقتصادية', 'حقيبتين - 23 كجم', 'الاقتصادية'], seats: '3 مقاعد', price: '3600', airline: 'الخطوط السعودية', operator: 'تدار بواسطة فلاى ناس' }];
  function FlightTicketFull(p) {
    var x = p.flight;
    function end(e, cls) { return h('div', { className: 'nkc-ft-end ' + cls }, h('span', { className: 'notes-1-regular' }, h('span', { 'aria-hidden': true }, e.flag + ' '), e.country), h('span', { className: 'headline-1-regular', dir: 'ltr' }, e.time), h('span', { className: 'notes-1-regular nkc-muted', dir: 'ltr' }, e.code)); }
    return h('article', { className: 'nkc-ft' + (p.selected ? ' selected' : ''), 'data-figma': 'Flight Ticket/Selected=' + (p.selected ? 'On' : 'Off') + ', Version=Full' },
      h('button', { type: 'button', className: 'nkc-hotel-hit', 'aria-pressed': !!p.selected, 'aria-label': 'اختر رحلة ' + x.airline + ' من ' + x.from.code + ' ' + x.from.time + ' إلى ' + x.to.code + ' ' + x.to.time + '، ' + x.price + ' ريال لكل مسافر', onClick: p.onSelect }),
      x.ribbon ? h('span', { className: 'nkc-ft-ribbon notes-2-regular' }, x.ribbon) : null,
      h('div', { className: 'nkc-ft-top' },
        h('div', { className: 'nkc-ft-route' }, end(x.from, 'from'),
          h('div', { className: 'nkc-ft-mid' }, h('span', { className: 'notes-2-regular' }, x.dur), h('span', { className: 'nkc-ft-arc', 'aria-hidden': true }, h('i'), h('b', null, Ic('airplane-02', 'sm')), h('i')), h('span', { className: 'notes-2-regular' }, x.stops)),
          end(x.to, 'to')),
        h('div', { className: 'nkc-ft-tags' }, x.tags.map(function (t, i) { return h(N.Chip, { key: i, state: 'default', size: 'xs' }, t); }))),
      h('div', { className: 'nkc-ft-bottom' },
        h('div', { className: 'nkc-ft-air' }, h(LogosGroup, { size: 28, items: x.logos || [{ entity: 'egyptair' }, { entity: 'riyadhair' }, { entity: 'saudia' }] }), h('span', { className: 'body-2-regular' }, x.airline), h('span', { className: 'notes-2-regular nkc-muted' }, x.operator)),
        h('div', { className: 'nkc-ft-price' }, p.urgency === true && x.seats ? h('span', { className: 'nkc-urg notes-2-regular' }, x.seats) : null, h('span', { className: 'nkc-amt', dir: 'ltr' }, Ic('riyal', 'nr'), h('span', { className: 'headline-1-regular' }, x.price)), h('span', { className: 'notes-2-regular nkc-muted' }, 'لكل مسافر'))));
  }
  function FlightsSelection(p) {
    var s = React.useState(p.selected || null), sel = s[0], setSel = s[1], a = React.useState(false), all = a[0], setAll = a[1], e = React.useState(false), err = e[0], setErr = e[1];
    var list = p.flights || FLIGHTS, shown = all ? list.concat(list.map(function (x) { return Object.assign({}, x, { id: x.id + 'b', ribbon: null }); })) : list;
    return h(Message, { from: 'nusuk', bg: false, actions: true, figma: '80652:10299', copyText: 'حجز الطيران' },
      h('div', { className: 'nkc-qcard' }, h('div', { className: 'nkc-qb' }, h('div', { className: 'nkc-type' }, Ic('airplane-01', 'sm'), h('span', null, 'حجز الطيران'), h('span', { className: 'grow' })), h('div', { className: 'nkc-title' }, p.title || 'اختر رحلتك من بين الرحلات المتاحة.')), h(Filters, { items: p.filters || HOTEL_FILTERS, onEdit: p.onEditFilter })),
      h('div', { className: 'nkc-ftlist', role: 'listbox', 'aria-label': 'الرحلات المتاحة' }, shown.map(function (x) { return h(FlightTicketFull, { key: x.id, flight: x, urgency: p.urgency, selected: sel === x.id, onSelect: function () { setSel(x.id); setErr(false); } }); })),
      all ? null : h('div', { className: 'nkc-showall' }, h(N.Button, { kind: 'ghost', size: 'md', icon: 'none', onClick: function () { setAll(true); }, className: 'nkc-btn-fig' }, h(F, null, h('span', null, 'عرض كافة الرحلات المتاحة'), FigIcon('arrow-expand-02', 20)))),
      err ? h(N.Hint, { type: 'error' }, 'اختر رحلة للمتابعة.') : null,
      h('div', { className: 'nkc-cta' }, h(N.Button, { kind: 'primary', size: 'md', icon: 'right', iconName: 'tick-02', onClick: function () { var x = shown.filter(function (y) { return y.id === sel; })[0]; if (x) { if (p.onConfirm) p.onConfirm(x); } else setErr(true); } }, 'التأكيد والمتابعة')));
  }

  /* Style=Single Choose — 80626:36740 (12 November 2026): one answer from a list of DL Option Cards (Icon with Action). The chosen card turns success. */
  var CHOICES = [{ icon: 'alert-circle', title: 'الحجوزات' }, { icon: 'alert-circle', title: 'المدفوعات والاسترداد' }, { icon: 'alert-circle', title: 'تصريح الحج' }, { icon: 'alert-circle', title: 'الحساب والبيانات' }]; // as written in Figma; lead icon alert-circle (DL) since 15 Nov 2026
  function SingleChoose(p) {
    var s = React.useState(p.selected == null ? null : p.selected), sel = s[0], setSel = s[1], e = React.useState(false), err = e[0], setErr = e[1];
    var list = p.options || CHOICES;
    return h(Question, { figma: '80626:36740', type: p.type || 'المساعدة والدعم', typeIcon: p.typeIcon || 'support', title: p.title || 'استفسارك بخصوص أي موضوع من التالي:', onConfirm: function () { if (sel == null) setErr(true); else if (p.onConfirm) p.onConfirm(list[sel], sel); } },
      h('div', { className: 'nkc-choices', role: 'radiogroup', 'aria-label': p.title || 'استفسارك بخصوص أي موضوع من التالي:' }, list.map(function (o, i) {
        var on = sel === i;
        return h('button', { key: i, type: 'button', role: 'radio', 'aria-checked': on, className: 'nk nk-shell nk-opt nkc-choice' + (on ? ' on' : ''), onClick: function () { setSel(i); setErr(false); } },
          h('span', { className: 'lead' }, FIG_ICONS[o.icon] ? FigIcon(o.icon, 24) : Ic(o.icon)), h('span', { className: 'txt body-2-regular' }, o.title),
          h('span', { className: 'act', 'aria-hidden': true }, h('span', { className: 'nkc-choice-go' }, Ic(on ? 'check' : 'arrow-back', 'sm'))));
      })),
      err ? h(N.Hint, { type: 'error' }, 'اختر موضوعًا للمتابعة.') : null);
  }

  /* Booking_Ticket — 80632:38114 (4 statuses; master 80632:38068) */
  var BOOKING = {
    umrah: { node: '80632:38115', title: 'استكمل إجراءات إصدار التأشيرة لعمرتك ✈️', chips: [['pending', 'التأشيرة'], ['default', 'الفنادق'], ['default', 'الطيران']], logos: [{ entity: 'saudia' }, { entity: 'marriott', city: 'madinah' }], from: { label: 'الذهاب', value: '22 يونيو' }, to: { label: 'العودة', value: '30 يونيو' }, cta: true, aria: 'متابعة إصدار التأشيرة' },
    flight: { node: '80632:38117', title: 'رحلتك من 🇯🇵 طوكيو\nإلى 🇸🇦 جدة', chips: [['default', 'SV1051'], ['pending', 'بدء تسجيل الرحلة']], logos: [{ entity: 'riyadhair' }, { entity: 'marriott', city: 'makkah' }], from: { value: '02:22', meta: 'اليوم · بعد صلاة العصر', ltr: true }, to: { value: '22:02', meta: 'اليوم · بعد صلاة العصر', ltr: true }, cta: false },
    rawdah: { node: '80632:38119', title: 'اليوم زيارتك للروضة الشريفة 🙏', chips: [['default', 'موعد رجال'], ['success', 'حجز مؤكد']], logos: [{ entity: 'madinah' }], bot: 'madinah', from: { value: '04:20', meta: 'اليوم · بعد صلاة العصر', ltr: true }, to: null, cta: true, aria: 'عرض حجز الروضة الشريفة' },
    train: { node: '80632:38121', title: 'رحلة من ✈️ مطار جدة إلى 🕋 مكة', chips: [['default', 'قطار الحرمين']], bg: 'train-bg.jpg', from: { value: '02:22', meta: 'اليوم', ltr: true }, to: { value: '22:02', meta: 'اليوم', ltr: true }, cta: true, aria: 'عرض تذكرة القطار' }
  };
  function BookingTicket(p) {
    var k = p.status || 'umrah', b = BOOKING[k];
    function pt(x, cls) { return x ? h('div', { className: 'nkc-bt-pt ' + cls }, x.label ? h('span', { className: 'notes-2-regular nkc-muted' }, x.label) : null, h('span', { className: x.ltr ? 'body-1-regular' : 'body-2-regular', dir: x.ltr ? 'ltr' : undefined }, x.value), x.meta ? h('span', { className: 'notes-2-regular nkc-muted' }, x.meta) : null) : null; }
    return h('article', { className: 'nkc-bt ' + k, 'data-figma': b.node },
      h('div', { className: 'nkc-bt-top' }, b.bg ? h('img', { className: 'nkc-bt-bg', src: A(b.bg), alt: '', 'aria-hidden': true }) : null,
        h(Bot, { location: b.bot || 'makkah', size: 36 }),
        h('div', { className: 'nkc-bt-main' }, h('h3', { className: 'body-1-regular' }, b.title), h('div', { className: 'nkc-bt-chips' }, b.chips.map(function (c, i) { return h(N.Chip, { key: i, state: c[0], size: 'md' }, c[1]); }))),
        b.logos ? h('span', { className: 'nkc-bt-logos' }, h(LogosGroup, { items: b.logos })) : null),
      h('div', { className: 'nkc-bt-bottom' }, pt(b.from, 'from'), b.to ? h('span', { className: 'nkc-bt-line', 'aria-hidden': true }, h('i')) : h('span', { style: { flex: 1 } }), pt(b.to, 'to'),
        b.cta ? h(N.Button, { kind: 'primary', size: 'sm', icon: 'only', iconName: 'arrow-left-02', ariaLabel: b.aria, onClick: p.onOpen }) : null));
  }
  var registry = [
    { code: 'NusukChat.Message', figma: '_Chat Container Master', nodes: { 'Status=Chat, Type=Nusuk/BG': '80451:18764', 'Status=Chat, Type=Nusuk/Transprent': '80578:5431', 'Status=Chat, Type=User/BG': '80451:18765', 'Status=Chat, Type=User/Transprent': '80578:5289' }, props: 'from: "nusuk"|"user" · bg: boolean · question?: string · actions?: boolean · time?: string · footer?: false', dl: 'tokens: surface-01-white, radius-md, radius-xs (tail), glass-full, space-md/nr/sm · DL Avatar (XS, Ink)' },
    { code: 'NusukChat.Question', figma: '_Chat Container', nodes: { '_Chat Container': '80453:2664' }, props: 'type · typeIcon · title · desc? · onBack? · children (Content slot) · cta · ctaState · onConfirm', dl: 'DL Button (Primary, MD, icon right tick-02) · _Button Trail (back) · DL TextField in slot' },
    { code: 'NusukChat.Text', figma: 'AI Chat Messages › Style=Text', nodes: { 'User=User': '80392:4524', 'User=Nusuk': '80601:9158' }, props: 'from · text · question? · editable? · onEdit?', dl: 'Light/Body/One · _Button Trail + edit-02 · Footer actions copy-01 / thumbs-up / thumbs-down' },
    { code: 'NusukChat.Voice', figma: 'AI Chat Messages › Style=Voice', nodes: { 'User=User': '80392:4534', 'User=Nusuk': '80601:9269' }, props: 'from · duration · progress · question?', dl: 'surface-illumination waveform · surface-10-ink play' },
    { code: 'NusukChat.Chips', figma: 'AI Chat Messages › Style=Default', nodes: { 'User=Nusuk': '80392:4581' }, props: 'items: string[] · onPick(text, i) · question? · buttons? (render each as DL Button MD, 15 Nov 2026) · kind? (primary | secondary, with buttons)', dl: 'DL Chips (State=White, Size=LR, Icon=Right, arrow-left-02) · Content No BG; with buttons: DL Button MD, leading arrow-left-02 (Arabic) / arrow-right-02 (English)' },
    { code: 'NusukChat.ErrorMsg', figma: 'AI Chat Messages › Style=Error', nodes: { 'User=Nusuk': '80392:4595' }, props: 'text · items (recovery chips) · onPick · buttons? · kind?', dl: 'DL _Alert (Error, alert-02) + DL Chips (or DL Button MD with buttons)' },
    { code: 'NusukChat.Days', figma: 'AI Chat Messages › Style=Days', nodes: { 'User=Nusuk': '80587:9465' }, props: 'monthLabel · year · today · selected · moons[] · onConfirm(day)', dl: 'DL Day Picker (state × availability) · Months_Interaction · DL Button' },
    { code: 'NusukChat.DaysAnswer', figma: 'AI Chat Messages › Style=Days', nodes: { 'User=User': '80601:3360' }, props: 'date · question? · onEdit', dl: 'Light/Display/Two' },
    { code: 'NusukChat.Slots', figma: 'AI Chat Messages › Style=Slots', nodes: { 'User=Nusuk': '80593:6839' }, props: 'prayer · slot · onConfirm(time)', dl: 'DL Pray Card · DL Time slot card · muslim icon' },
    { code: 'NusukChat.SlotsAnswer', figma: 'AI Chat Messages › Style=Slots', nodes: { 'User=User': '80601:5538' }, props: 'date · time · question? · onEdit', dl: 'Light/Display/One for time' },
    { code: 'NusukChat.Loading', figma: '_Chat Container Master › Status=Loading', nodes: { 'Type=Nusuk': '80451:18763', 'Type=User': '80501:2248' }, props: 'from', dl: 'icons-black dots' },
    { code: 'NusukChat.TabBar', figma: 'AI Tab Bar', nodes: Object.assign({ '_AI Tab Bar Master': '80392:4168' }, TAB_NODES), props: 'status · value · placeholder · limitText · onSend({type,text|duration}) · onStop · respondOnSend', dl: 'glass-full · radius-full · DL Icon mic / send / pause / delete-03' },
    { code: 'NusukChat.NafathAnswer', figma: 'Answers / Property 1=Nafath', nodes: { 'Instance on canvas': '80473:2474', 'Component': '80473:2443' }, props: 'label · onClick', dl: 'buttons/surface/reject (ivory) pill 48 · Regular/Body/Two · Nafath logo (exact SVG)' },
    { code: 'NusukChat.SkipNafath', figma: 'CTA Kind=Ghost Size=SM', nodes: { 'Instance': '80476:1823' }, props: 'label · onClick', dl: 'DL Button ghost SM (full width)' },
    { code: 'NusukChat.NationalitySearch', figma: 'Answers / Property 1=Nationality Search', nodes: { 'Instance': '80473:2515', 'Component': '80473:2457' }, props: 'placeholder · exclude[] · onPick(code)', dl: 'ivory pill 48 · DL Icon global / search-01 · flag list' },
    { code: 'NusukChat.AddedNationalities', figma: 'Name + Nationalities', nodes: { 'Label': '80470:16139', 'Chips': '80470:16140' }, props: 'items: code[] · onRemove(code)', dl: 'CTA Secondary XS Icon=Left (cancel-circle) · _Button Trail Leading · Flags Small' },
    { code: 'NusukChat.NationalityRow', figma: 'CTA Kind=Secondary Size=MD Icon=Left', nodes: { 'Instance A': '80473:1614', 'Instance B': '80474:1433' }, props: 'code · label · onClick', dl: 'Secondary MD 44 full width + flag' },
    { code: 'NusukChat.Otp', figma: 'AI Chat Messages › User=Nusuk, Style=Confirmation (OTP · email)', nodes: { 'Variant': '80607:11146' }, props: 'email · length (4) · seconds (59) · onConfirm(code) · onEditEmail', dl: 'Question card · _Button Trail “تعديل” · OTP fields 62h radius-s · time-04 timer · DL Button Primary' },
    { code: 'NusukChat.PackageCard', figma: 'Media Cards / Type=Flight (chat)', nodes: { 'Saudi': '80477:4939', 'Morocco': '80477:4940', 'France': '80477:4941' }, props: 'image (CMS) · flag · best · from · title · desc · price · onAdd', dl: 'DL MediaCard (kind hajj, surface fade, selected = خيارك الأفضل, price + AddToCart). Swapped in on Moha’s request (comment, 11 Nov) to follow the new DL Media Cards' },
    { code: 'NusukChat.Packages', figma: 'Hajj Packgaes + Pagination', nodes: { 'Carousel': '80477:11127', 'Pagination': '80478:12232' }, props: 'items · onAdd', dl: '300-wide cards, 8 gap, scroll-snap · DL Pagination' },
    { code: 'NusukChat.BotNote', figma: 'Nusuk Bot Messages', nodes: { 'Default (Makkah insight)': '80559:28807', 'Variant3 (Madinah insight)': '80559:28810', 'Variant2 (Makkah pill)': '80559:28813', 'Variant4 (Madinah pill)': '80559:28816' }, props: 'location · variant: "insight"|"pill" · text · motion', dl: 'Light/Body/Two gradient text (black → text-link | alerts-text-success → #666) · Regular/Notes/One · pill tint shade-5 gold / #E4FBEA green' },
    { code: 'NusukChat.Bot', figma: 'Nusuk Bot · _Eyes', nodes: { 'Location=Makkah': '80559:28820', 'Location=Madina': '80559:28823', '_Eyes (7 frames)': '80559:28826' }, props: 'location: \"makkah\"|\"madinah\" · size (24) · motion: \"live\" (default: follows pointer, idle glances + blinks) | \"prototype\" | \"sequence\" | \"static\" · frame (static) · mirror · label', dl: 'Gold body = surface-longing → surface-shade-4 (gold) · green body #288A42 → #E0FAD1 (not DL tokens) · glow + 4px layer blur · ⚠ section "Beta – Do Not Use"' },
    { code: 'NusukChat.PasswordField', figma: 'AI Chat Messages › Style=Password', nodes: { 'Variant': '80607:16432', 'Input/Type=Password': '80607:16851' }, props: 'onConfirm(password) · onBack', dl: 'nk-field-box (192h) · view (Figma icon) · 5 rules with DL check · DL Button Primary MD' },
    { code: 'NusukChat.MobileField', figma: 'AI Chat Messages › Style=Mobile', nodes: { 'Variant': '80607:17062', 'Input/Type=Mobile': '80607:17346' }, props: 'onConfirm("+966 05…") · onBack', dl: 'country code select 115 + input 357 · DL Flag · arrow-down-01' },
    { code: 'NusukChat.GenderField', figma: 'AI Chat Messages › Style=Gender', nodes: { 'Variant': '80607:17682', 'أنثى': '80607:18050', 'ذكر': '80607:18051' }, props: 'value · onConfirm(value)', dl: 'DL Select Card (Active / Selected) · hijab, haji' },
    { code: 'NusukChat.PassportNumber', figma: 'AI Chat Messages › Style=Passport (renamed from Pasport on 14 November 2026)', nodes: { 'Variant': '80607:18228', 'Input': '80607:18418' }, props: 'onConfirm(number) · onScan', dl: 'nk-field-box · camera-02 trailing' },
    { code: 'NusukChat.BorderNumber', figma: 'AI Chat Messages › Style=Border Number', nodes: { 'Variant': '80607:18463', 'رقم التأشيرة': '80607:18655', 'رقم الحدود': '80607:18656', 'Input': '80607:18657' }, props: 'kind: "border"|"visa" · onConfirm', dl: 'DL Select Card (no radio) · audit-01 · airplane-landing-02 · input label “رقم %s”' },
    { code: 'NusukChat.IbanField', figma: 'AI Chat Messages › Style=IBAN', nodes: { 'Variant': '80607:18703', 'Name': '80607:19076', 'IBAN (Action)': '80607:19077', 'Bank (Disabled)': '80607:19078' }, props: 'name · iban · verified · onConfirm', dl: 'Input Filled · Input Action + Secondary SM “تحقّق” · Input Filled Disabled + rajhi' },
    { code: 'NusukChat.PassportAttach', figma: 'AI Chat Messages › Style=Passport Attach', nodes: { 'Variant': '80607:19234', 'إرفاق الصورة': '80607:19465', 'التقاط صورة': '80607:19466' }, props: 'onPick(mode, url) · realPicker', dl: 'DL Select Card × 2 · image-02 · camera-02 · no CTA' },
    { code: 'NusukChat.PassportPreview', figma: 'AI Chat Messages › Style=Passport Preview', nodes: { 'Variant': '80607:19494', 'Image': '80607:19720' }, props: 'src · onEdit · onConfirm', dl: 'image radius-xs · DL Button Secondary SM + Primary SM (tick-02)' },
    { code: 'NusukChat.Liveness', figma: 'AI Chat Messages › Style=FaceScan', nodes: { 'Variant': '80607:20622', 'Scan Photo/Status=00': '80607:20843', 'Hint Warning': '80607:20846' }, props: 'status: "idle"|"scanning"|"done" · onDone', dl: 'Scan Photo · Body 1 · DL Hint Warning · DL Button Primary MD + identification' },
    { code: 'NusukChat.LocationGuide', figma: 'AI Chat Messages › Style=Location Guide', nodes: { 'Variant': '80622:21047' }, props: 'title · image · steps · query · onNusukMaps · onGoogleMaps', dl: 'Nusuk/BG container · image radius-md · Notes 1 steps · DL Select Card × 2 (maps, google maps)' },
    { code: 'NusukChat.HotelChoose', figma: 'AI Chat Messages › Style=Hotel Choose', nodes: { 'Variant': '80625:21403' }, props: 'title · filters[] · hotels[] · urgency (bool) · onEditFilter · onConfirm(hotel)', dl: 'Nusuk/Transparent · Input Select × 3 (Filled) · Hotel Offer cards on scroll-snap rail · DL Chips gold/white/error · footer actions' },
    { code: 'NusukChat.HotelCard', figma: 'Hotel Offer', nodes: { 'In variant': '80625:21403' }, props: 'hotel · selected · urgency · onSelect', dl: 'Media Cards/Image=01 · Like Icon · star · Hajj Service · door-02 · bed-double · man-woman · fire-03 · riyal' },
    { code: 'NusukChat.FlightsSelection', figma: 'AI Chat Messages › Style=Flights Selection', nodes: { 'Variant': '80652:10299' }, props: 'title · filters[] · flights[] · urgency · onConfirm(flight)', dl: 'Flight Ticket (Version=Full) × 3 · Ribbon · CTA Ghost MD (arrow-expand-02) · Primary MD' },
    { code: 'NusukChat.FlightTicketFull', lib: '🏖️ Travel', file: 'ozi4A2gUbVXbzbUJ3MF4uU', figma: 'Flight Ticket › Version=Full (Selected Off, On, Skeleton)', nodes: { 'Flight Ticket': '70393:18670', 'Selected=Off, Version=Full': '70393:18671', 'Selected=On, Version=Full': '70393:18673', 'Selected=Skeleton, Version=Full': '70393:18675', '_Master_Flight Ticket': '70393:18605' }, props: 'flight · selected · urgency · onSelect', dl: 'DL FlightTicket is the compact version; this is the Full version, as the chat file uses it' },
    { code: 'NusukChat.BookingTicket', figma: 'Booking_Ticket', nodes: { 'Umrah Packages': '80632:38115', 'Flight Ticket': '80632:38117', 'Rawdah Permit': '80632:38119', 'Train': '80632:38121', 'Master': '80632:38068' }, props: 'status: "umrah"|"flight"|"rawdah"|"train" · onOpen', dl: 'Nusuk Bot 36 · DL Chips (pending/success/default) · NusukChat.LogosGroup (code) · CTA Primary SM icon-only arrow-left-02' }
  ];

  /* ---------- DL status of every NusukChat export (v2.5.0) ----------
     dl       = renders DL components only (composition zone: allowed, no review needed)
     variant  = Proposed as a new variant / prop of an existing DL component (target named)
     new      = Proposed as a new DL component
     Source of truth for dl-contribution/manifest.proposed.json and the gallery badges. */
  var DL_STATUS = {
    'Message': ['variant', 'ChatMessage', 'Adds Nusuk/User × BG/Transparent, question echo, footer actions and the Nusuk Bot avatar.'],
    'Question': ['new', null, 'Chat question card: type row, title, description, back, content slot, one Primary CTA.'],
    'Text': ['variant', 'ChatMessage', 'Answer text with question echo and “تعديل الإجابة”.'],
    'Voice': ['variant', 'ChatMessage', 'Voice message (waveform + duration).'],
    'Chips': ['variant', 'Chip', 'Answer chips: Chip White LR with arrow-left-02, as a group.'],
    'ErrorMsg': ['variant', 'ChatMessage', 'Error message = DL Alert (error) + recovery chips.'],
    'Days': ['new', null, 'Question card + DL DayPicker month grid.'],
    'DaysAnswer': ['variant', 'ChatMessage', 'Date answer.'],
    'Slots': ['new', null, 'Question card + DL PrayCard + DL TimeSlot groups.'],
    'SlotsAnswer': ['variant', 'ChatMessage', 'Date + time answer.'],
    'Loading': ['variant', 'ChatMessage', 'Typing / loading state.'],
    'TabBar': ['variant', 'TabBar', 'AI Tab Bar: 7 statuses (default, limit, recording, recorded, text, responding, typing).'],
    'NafathAnswer': ['new', null, 'Nafath sign-in answer pill with the Nafath logo.'],
    'SkipNafath': ['dl', 'Button', 'DL Button Ghost SM, full width.'],
    'NationalitySearch': ['variant', 'TextField', 'Search with flag result list (TextField Search + DropdownItem flag).'],
    'AddedNationalities': ['variant', 'Chip', 'Removable chips with flags (Button Secondary XS icon-left today).'],
    'NationalityRow': ['dl', 'Button', 'DL Button Secondary MD, full width, flag in the label.'],
    'Otp': ['variant', 'TextField', 'TextField OTP + ResendTimer inside the Question card.'],
    'PackageCard': ['dl', 'MediaCard', 'DL MediaCard kind hajj, fade, price + AddToCart.'],
    'Packages': ['dl', 'MediaCard', 'DL MediaCard rail + DL Pagination.'],
    'BotNote': ['new', null, 'Nusuk Bot message (insight / pill) with gradient text.'],
    'Bot': ['new', null, 'Nusuk Bot avatar, Makkah / Madinah, live eyes. Figma section is “Beta – Do Not Use” (F1).'],
    'PasswordField': ['variant', 'TextField', 'Password with rules inside the field and the view toggle (F24).'],
    'MobileField': ['variant', 'TextField', 'Mobile: country code 115 + number (TextField Mobile).'],
    'GenderField': ['variant', 'SelectCard', 'Select Card with custom icon (hijab / haji).'],
    'PassportNumber': ['variant', 'TextField', 'TextField Input with a trailing camera action.'],
    'BorderNumber': ['variant', 'SelectCard', 'Select Card without radio + dependent input.'],
    'IbanField': ['variant', 'TextField', 'TextField Action (verify) + Filled-Disabled bank row with logo.'],
    'PassportAttach': ['variant', 'SelectCard', 'Select Card without radio as the answer (no CTA).'],
    'PassportPreview': ['new', null, 'Document preview + Secondary SM / Primary SM.'],
    'Liveness': ['new', null, 'Scan Photo + copy + DL Hint warning + CTA.'],
    'LocationGuide': ['new', null, 'Photo + steps + open-maps select cards.'],
    'HotelChoose': ['new', null, 'Filters + Hotel Offer rail + CTA.'],
    'HotelCard': ['new', null, '“Hotel Offer”: no DL equivalent (MediaCard has no specs row or nights).'],
    'FlightsSelection': ['new', null, 'Filters + Flight Ticket (Full) list + show all.'],
    'SingleChoose': ['variant', 'OptionCard', 'Option Cards (Icon with Action) as one radio group; the chosen card takes Alerts/Surface/Success and a green action (12 Nov 2026).'],
    'FlightTicketFull': ['variant', 'FlightTicket', 'Version=Full: countries, flags, duration arc, tags, ribbon, airline group, seats, per-traveller price.'],
    'BookingTicket': ['new', null, 'Booking_Ticket (4 statuses).'],
    'LogosGroup': ['new', null, 'Logos Group + Logo Icons + City Logo badge as code.'],
    'Fld': ['variant', 'TextField', 'Trailing slot (icon button / action button / logo) and floating label.'],
    'SelCard': ['variant', 'SelectCard', 'Figma icon via FigIcon; one label renders as the 16 description line.']
  };
  registry.push(
    { code: 'NusukChat.LogosGroup', lib: '🃏 Cards', file: 'mg7egvNbr2ciMP04Ig2XDl', figma: 'Logos Group · Logo Icons (7 entities) · City Logo (Madinah, Mekkah)', nodes: { 'Logos Group': '70306:7320', 'Logo Icons': '70306:7326', 'City Logo': '70306:7355' }, props: 'items: [{ entity, city? }] · size (32 | 28 | 48)', dl: 'Gradient circles from the Figma fills · inline SVG marks · 4x PNG for raster brand marks' },
    { code: 'NusukChat.Fld', lib: '⌨️ Inputs', file: 'DATayAnynnSQqdJQLAi7DR', figma: 'Input (Type Input, Action · Status Default, Error, Disabled · Filled Off, On)', nodes: { 'Input': '68394:7766', 'Type=Input, Status=Default': '68394:7797', 'Type=Action, Status=Default': '68394:7857' }, props: 'label · placeholder · value · onChange · state · hint · lead · trail · floating · type · inputMode · dir', dl: 'DL classes nk-field / nk-field-box + DL Hint' },
    { code: 'NusukChat.SelCard', lib: '📻 Switches, Checkbox, and Radio', file: 'zhcTb4a0XbF3YeYF9XI6zw', figma: 'Select Card (Active, Selected, Disabled)', nodes: { 'Select Card': '70416:652', 'Status=Active': '70416:655', 'Status=Selected': '70416:657' }, props: 'icon · title · desc · selected · disabled · onClick', dl: 'DL class nk-selcard (3.10: .cnt .ttl .dsc)' },
    { code: 'NusukChat.SingleChoose', figma: 'AI Chat Messages › Style=Single Choose', nodes: { 'Variant': '80626:36740' }, props: 'type · typeIcon · title · options: [{icon, title}] · selected · onConfirm(option, i)', dl: 'Question card · DL Option Cards (Icon with Action) · Alerts/Surface/Success · Buttons Green · DL Button Primary MD' });
  registry.forEach(function (r) { var k = r.code.replace('NusukChat.', ''), d = DL_STATUS[k] || ['new', null, '']; r.status = d[0]; r.dlTarget = d[1]; r.dlNote = d[2]; });

  window.NusukChat = { version: '2.8.0', setLang: function (l) { LANG.v = l === 'en' ? 'en' : 'ar'; }, lang: function () { return LANG.v; }, DL_STATUS: DL_STATUS, LocationGuide: LocationGuide, HotelChoose: HotelChoose, HotelCard: HotelCard, FlightsSelection: FlightsSelection, SingleChoose: SingleChoose, CHOICES: CHOICES, FlightTicketFull: FlightTicketFull, BookingTicket: BookingTicket, LogoIcon: LogoIcon, LogosGroup: LogosGroup, LOGO: LOGO, Filters: Filters, HOTELS: HOTELS, FLIGHTS: FLIGHTS, BOOKING: BOOKING, setAssetBase: function (b) { ASSET_BASE.v = b || ''; }, PasswordField: PasswordField, MobileField: MobileField, GenderField: GenderField, PassportNumber: PassportNumber, BorderNumber: BorderNumber, IbanField: IbanField, PassportAttach: PassportAttach, PassportPreview: PassportPreview, Liveness: Liveness, Fld: Fld, SelCard: SelCard, FigIcon: FigIcon, FIG_ICONS: FIG_ICONS, setLocation: function (l) { C_LOC.value = l; }, BotNote: BotNote, Flag: Flag, NafathAnswer: NafathAnswer, SkipNafath: SkipNafath, NationalitySearch: NationalitySearch, AddedNationalities: AddedNationalities, NationalityRow: NationalityRow, Otp: Otp, PackageCard: PackageCard, Packages: Packages, PACKAGES: PACKAGES, FLAGS: FLAGS, EYE_NODES: EYE_NODES, EyeEngine: EyeEngine, file: FILE, Bot: Bot, Avatar: Avatar, Trail: Trail, Actions: Actions, Message: Message, Text: Text, Voice: Voice, Chips: Chips, Alert: Alert, ErrorMsg: ErrorMsg, Loading: Loading, Question: Question, Days: Days, DaysAnswer: DaysAnswer, Slots: Slots, SlotsAnswer: SlotsAnswer, TabBar: TabBar, Svg: Svg, registry: registry, TAB_NODES: TAB_NODES };
})();
