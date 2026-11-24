# nusuk-dl · the Nusuk plugin

Version 2026.11.250300, built 2026-11-25T03:00+03:00. Release 2026-11-18: DESIGN.md 3.7.3, tokens 3.12, NusukChat 2.9.0.

The one way the Nusuk DL reaches Claude (DL-42). The developer handoff (`nusuk-dl-developer-handoff.zip`) is the only other download.

## How every task starts (DL-43, DL-44)

1. Ask the clarifications that change the build.
2. Ask the objectives and purpose in the Notion DX Tracker's fields (Aims and Purpose, ST. and LT. Objectives, Questions and Objectives, Use Case, Action, User Pain, User Gain, Research Type), reading the task's row first.
3. Benchmark against Nusuk's own template contracts, patterns and flows.
4. Search Mobbin and Dribbble for structure only, never for visuals.
5. Build the flow, then each screen's structure from DL components.

Every prototype simulates Apple's native transitions and draws the iOS status bar with the time fixed at 02:22 and the battery percentage. Details: `nusuk-design-language` §0 and §9, DESIGN.md M13.

## Skills

| Skill | Use it for |
|---|---|
| `nusuk-design-language` | Any Nusuk concept, deck, design, prototype, copy or UI code: tokens, components, patterns, template contracts, placement, rules, ethics, the Nusuk AI chat, native handoff |
| `nusuk-dx` | The DX practice end to end: shaping, evaluating, measuring, the 3Ms, the ethical limits of nudges |
| `nusuk-ux` | Arabic and English interface copy with Nusuk's editorial conventions |
| `nusuk-content-writer` | Any Nusuk content (notifications, social, store replies, campaigns, faith content), from the official writing guide |
| `nusuk-voice-rules` | The microcopy house rules: message voice, no manufactured urgency, dignity, placeholders, Arabic grammar checks |
| `nusuk-visual-system` | Nusuk watercolour illustrations, with the 18 approved reference paintings |
| `nusuk-feature-handoff` | A feature from brief to developer handoff: canvas, prototype, gaps questionnaire, native handoff page. Worked examples: Support-in-Chat (from a brief) and Nusuk Charity (from a Figma file, `examples/nusuk-charity/`) |
| `accessibility-audit` | A full WCAG 2.2 audit (general method; the DL sets the Nusuk floor) |
| `design-critique` | Heuristic and pattern critique (general method; DESIGN.md M13 sets the Nusuk protocol) |
| `ux-writing` | General microcopy method (Nusuk wording comes from the Nusuk skills) |
| `humanizer` | Rewriting AI-sounding prose (never for Quran, hadith or approved faith text) |
| `apple-design` | Apple's fluid motion and materials for prototypes (DESIGN.md M13 values win) |
| `mobile-native` | A prototype that feels installed: safe areas, dvh, 16 px inputs, right-to-left, the 02:22 status bar |
| `break-ui` | Worst-case data behind a toggle, with Nusuk's cases (four-part Arabic names, Hijri dates, riyal amounts) |
| `review-animations` | A strict motion-code review (the DL's native values are deliberate) |

The last eight are MIT-licensed; each folder keeps its `LICENSE` and credits its source. Where a general skill and a Nusuk rule disagree, the Nusuk rule wins. Skills installed outside this plugin that set their own look (frontend-design, impeccable, the taste-skill family, brand-guidelines) never set Nusuk tokens, type, colour or motion: see `nusuk-design-language` §10 › Who wins. `LICENSE` covers the whole plugin.

## library/

The whole DL tree: `DESIGN.md`, `tokens.json` and `tokens.css`, `components/` (the bundle, its types and one folder per component with a preview page), `patterns/` and `templates/` (with the contracts), `chat/` (the Nusuk AI chat lane), `native/` (Swift and Kotlin), `migrations/`, `docs/` and the change sheets. Open `library/index.html` to browse it.

## Install

- **Organization (Owners, once):** claude.ai › Organization settings › Plugins & skills › Add › Sync from GitHub › https://github.com/ByMoha/NusukDL, with Sync automatically on.
- **Yourself:** Customize › Plugins › Add › Upload plugin, and choose `nusuk-dl.plugin` as it is; or Add › Add marketplace with https://github.com/ByMoha/NusukDL.
- **Claude Code:** `/plugin marketplace add https://github.com/ByMoha/NusukDL`, then `/plugin install nusuk-dl@nusuk-dl`.

Do not edit these files by hand: every DL release rebuilds this folder.
