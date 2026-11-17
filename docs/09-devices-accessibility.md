# Devices, accessibility and rulings

## Accessibility floor: WCAG 2.2 AA

- **Contrast:** 4.5:1 for body text, 3:1 for text 24px+ (or 19px+ bold), icons, borders and focus rings that carry meaning, in every theme. Check light and dark separately; check all three themes.
- **Targets:** 48dp effective target for every interactive element on phones; 44dp only for secondary icon buttons in the top app bar; nothing under 24dp, with spacing. No exception on rite, permit, payment or departure-time actions; anything else below 48dp goes in the trade-off register. Controls drawn smaller carry invisible tap padding; it is built into the coded components. Measured on 9 November 2026: 293 of 296 controls in the previews meet the rule (89 before the padding was built in).
- **Colour is never the only signal.** Status chips carry an icon or word; availability dots have a legend; crowding is never colour-only.
- **Focus** is visible on every control: a 2px ring in `surface-10-ink`, offset 2px; white on Ink fills and dark glass. The earlier gold ring was 1.87:1 on white.
- **Text scales** to 200% without loss (WCAG 2.2 › 1.4.4, AA); long copy wraps, it is never shrunk; every release is tested at 150% and the largest size. UX answered on 14 November that the 150% scaling doesn't apply to iOS; that conflicts with this rule and is open (Q-D18).
- **Motion** respects reduced-motion settings; nothing flashes. Motion that starts by itself stops within 5 s (WCAG 2.2.2); only a wait in progress loops.
- **Screen readers:** every icon-only button has a name that says the outcome, in the current language (Arabic and English are built in); a visible label names its field and the hint describes it; every status change is announced; dialogs trap focus and return it. Measured on 9 November 2026: 306 controls in the previews, none without a name.
- **Where the system stands:** text contrast passes for 87–89% of text in the light themes and 96–97% in the dark ones, where the Primary CTA label is still invisible. The causes are token values in Figma; *Known issues › Fix first* lists them in order.
- **Don't disable the main action** to hide validation; let people submit and show what to fix.

## Language and script

- Arabic first; full design QA in Arabic and English. The other 33 store languages get automated checks: pseudo-localisation expansion, truncation, script-fallback render, and an RTL smoke test for Urdu, Persian, Pashto and Kurdish.
- **Digits are 0–9 in every language and locale** (dates, prices, phone numbers). Never Eastern Arabic-Indic digits, never mixed. Engineering forces `nu=latn`; isolate numbers in RTL text.
- Mirror layouts and directional icons in RTL; keep media controls, phone numbers, routes and times left to right.

## Devices

- **iPhone first.** Design at 402 × 874 pt; verify at 375 × 667 (SE floor) and 440 × 956 (largest). Classes in between: 375 × 812, 390 × 844 / 393 × 852, 414 × 896, 420 × 912, 428 × 926, 430 × 932. Apple Watch: glanceables only. iOS 18+, watchOS 10+.
- **Android by window size class:** compact floor 360dp, compact standard 384–412dp, flip cover screens (glanceables only), medium 600–839dp (foldable inner: list-detail, rail, hinge-aware), expanded 840dp+, dual screen (a pane per screen, nothing spans the hinge). Target API 36.
- **Each OS keeps its own navigation cues** (back, tab bar vs bottom nav or rail, sheets, dialogs, snackbars, pickers, permissions, haptics, wallet, live status). The brand lives in type, colour, iconography, motion and copy, not in ported chrome.
- **Test set per release** at 150% text and in RTL: iPhone SE 3, 16e, 17, 17 Pro Max, Apple Watch; a 360dp floor phone, Pixel 9, Galaxy S25, Z Fold 6, Z Flip 6, a tablet emulator.

## Standing rulings

- Hold timers are a standard booking element: shown only when inventory is truly held, lenient, with the reason stated, and no ticking-clock pressure.
- Ratings on guide services follow the review-summary standard (average, count, distribution, reviewer context, dates, specific criteria) inside survey governance: one ask per journey phase, at most two per pilgrimage, CES for logistics, never survey the ibadah.
- Ritual counts (Tawaf, Sa'i) are confirmed by the person; location is assistive, never authoritative. No timed or celebratory completion of worship.
- The DX space data is the service truth; missing descriptions are clarified first, never invented.
- AI has amendment rights only; humans override, in writing.

## Field conditions and feedback timing (14 November 2026)

- **Design for the field, not the office.** One hand, bright sun, a weak or foreign network, a low battery, ihram, a crowd in Mina or the Haram (the DX team's evaluation checklist, account skill `nusuk-dx`). On a weak network a core step keeps what the person entered, says what is pending and retries without retyping (WCAG 3.3.7).
- **Nothing to compute under pressure.** Permit windows, departures and prayer times appear as times and countdowns the app has worked out; the person reads them, never adds them up.
- **Companions by default.** Most pilgrims travel with others; no flow assumes one person.
- **Feedback timing** (Nielsen's three response-time limits, NN/g 1993, after Miller 1968): under 0.1 s needs no indicator; 0.1–1 s a quiet cue (the button's busy state starts at 300 ms so quick actions don't flicker); 1–10 s a progress bar or skeleton that names what is loading; over 10 s it runs in the background and the person is told when it is done, never held on a blocked screen.

*Mirrors DESIGN.md › M10 › Field conditions and feedback timing.*
