# nusuk-dl · the Nusuk plugin

Version 2026.11.172116, built 2026-11-17T21:16+03:00. Release 2026-11-17: DESIGN.md 3.5.0, tokens 3.11, NusukChat 2.8.5.

The one way the Nusuk DL reaches Claude (DL-42). The developer handoff (`nusuk-dl-developer-handoff.zip`) is the only other download.

## Skills

| Skill | Use it for |
|---|---|
| `nusuk-design-language` | Any Nusuk concept, deck, design, prototype, copy or UI code: tokens, components, patterns, template contracts, placement, rules, ethics, the Nusuk AI chat, native handoff |
| `nusuk-dx` | The DX practice end to end: shaping, evaluating, measuring, the 3Ms, the ethical limits of nudges |
| `nusuk-ux` | Arabic and English interface copy with Nusuk's editorial conventions |
| `nusuk-content-writer` | Any Nusuk content (notifications, social, store replies, campaigns, faith content), from the official writing guide |
| `nusuk-voice-rules` | The microcopy house rules: message voice, no manufactured urgency, dignity, placeholders, Arabic grammar checks |
| `nusuk-visual-system` | Nusuk watercolour illustrations, with the 18 approved reference paintings |
| `nusuk-feature-handoff` | A feature from brief to developer handoff: canvas, prototype, gaps questionnaire, native handoff page |
| `accessibility-audit` | A full WCAG 2.2 audit (general method; the DL sets the Nusuk floor) |
| `design-critique` | Heuristic and pattern critique (general method; DESIGN.md M13 sets the Nusuk protocol) |
| `ux-writing` | General microcopy method (Nusuk wording comes from the Nusuk skills) |
| `humanizer` | Rewriting AI-sounding prose (never for Quran, hadith or approved faith text) |

The last four are MIT-licensed; each folder keeps its `LICENSE` and credits its source. Where a general skill and a Nusuk rule disagree, the Nusuk rule wins.

## library/

The whole DL tree: `DESIGN.md`, `tokens.json` and `tokens.css`, `components/` (the bundle, its types and one folder per component with a preview page), `patterns/` and `templates/` (with the contracts), `chat/` (the Nusuk AI chat lane), `native/` (Swift and Kotlin), `migrations/`, `docs/` and the change sheets. Open `library/index.html` to browse it.

## Install

- **Organization (Owners, once):** claude.ai › Organization settings › Plugins & skills › Add › Sync from GitHub › https://github.com/ByMoha/NusukDL, with Sync automatically on.
- **Yourself:** Customize › Plugins › Add › Upload plugin, and choose `nusuk-dl.plugin` as it is; or Add › Add marketplace with https://github.com/ByMoha/NusukDL.
- **Claude Code:** `/plugin marketplace add https://github.com/ByMoha/NusukDL`, then `/plugin install nusuk-dl@nusuk-dl`.

Do not edit these files by hand: every DL release rebuilds this folder.
