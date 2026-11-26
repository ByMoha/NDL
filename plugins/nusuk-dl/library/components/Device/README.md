# Device

The iPhone frame every Nusuk prototype and mockup sits in: 402 × 874 (iPhone 16 Pro), the screen corners at `radius-ios` (54), the status bar at **02:22** with the battery percentage, the Dynamic Island and the home indicator. New in the DL on 27 November 2026.

**Rule:** the DL Advisor, 18 November 2026: every experience the DL replicates or builds includes the `_Status Bar` and is shown in an iPhone mockup (DESIGN.md › M13 › Prototypes). This component is that mockup, so no prototype hand-builds a phone, a status bar or an island again (a hand-built bar put the island off centre in right-to-left).

**Figma source:** [🧭 Navigation › `_Status Bar`](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw/) (Color Black, White) and Bars/Home Indicator. Figma boards carry no device mockup: a Figma screen is the 402 × 874 auto layout itself (M13 › Figma boards). The frame is for code prototypes, decks and handoff pages.

## Anatomy

| Part | Spec |
|---|---|
| Frame | 12 bezel in Ink `#070808`, outer corner 66, a 2 px inner rim |
| Screen | 402 × 874, corners `radius-ios` (54), `surface-screen-bk`; the content scrolls inside it with no visible scrollbar |
| Status bar | the DL `StatusBar`, 62 high, over the content: 02:22 (Western digits, left to right), signal, Wi-Fi and the battery with its percentage (default 100); white with `dark` |
| Dynamic Island | 125 × 37, black, centred 11 from the top, in every theme |
| Home indicator | 134 × 5 Ink bar, 8 from the bottom; white with `dark` |

A Toolbar or FeaturedHeader drawn with `statusBar` keeps its own status bar, and a TabBar or BottomNav keeps its own home indicator: the frame hides its layer when one is inside, so a screen never shows two. The Toolbar always keeps the 62 status-bar area above the bar either way.

## Props

| Prop | Type | Notes |
|---|---|---|
| `children` | node | The screen: Toolbar, content, TabBar |
| `dark` | `boolean` | White status bar and home indicator, for dark or photo screens |
| `time` | `string` | Default `02:22`; keep it |
| `battery` | `number` | Battery percentage, default 100 |
| `statusBar` / `homeIndicator` | `boolean` | `false` hides the layer |
| `bezel` | `boolean` | `false` draws the screen only (for a handoff page that already frames it) |
| `width` / `height` | `number` | Default 402 × 874 |
| `dir` / `lang` | | Set `rtl` / `ar` for Arabic screens |
| `label` | `string` | Names the frame for screen readers (`role="group"`) |
| `className` / `style` | | Passed to the frame |

## Use

- Wrap every prototype screen in `Device`, in Arabic and right to left unless the brief says English.
- Put the Toolbar first: its 62 safe area sits under the status bar.
- Keep native iOS transitions inside the screen (M13 › Native motion).

## Don't

- Do not draw a second status bar or island by hand.
- Do not change the time: 02:22 is the DL's prototype time.
- Do not use the frame in native apps: they use the system status bar.

## iOS and Android

Not built in the apps: the system draws the status bar, island and home indicator. Keep content inside the safe areas (`safeAreaInset`, `WindowInsets.systemBars`).
