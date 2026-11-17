# nusuk-dl · the Nusuk plugin

The seven Nusuk skills packaged as one Claude plugin, under `skills/`: `nusuk-design-language` (the DL), `nusuk-visual-system` (with its 18 artworks), `nusuk-content-writer`, `nusuk-voice-rules`, `nusuk-ux`, `nusuk-dx` and `nusuk-feature-handoff`. Every DL release rewrites this folder and raises `version` in `.claude-plugin/plugin.json` (now 2026.11.171727, built 2026-11-17T17:27+03:00). `/.claude-plugin/marketplace.json` lists it, so this repository is a plugin marketplace.

- **Organization (Owners):** claude.ai › Organization settings › Plugins & skills › Add › Sync from GitHub › https://github.com/ByMoha/NusukDL, with Sync automatically on. Each push to `main` syncs; members find the plugin in Customize › Plugins.
- **Claude Code:** `/plugin marketplace add https://github.com/ByMoha/NusukDL`, then `/plugin install nusuk-dl@nusuk-dl` (uses your own GitHub access).

Do not edit these files by hand: the next release overwrites them. The DL skill is built from the DL release; the six companion skills come from the release's `skill_extra/companions/`, so change them there (or ask Claude to) and release.
