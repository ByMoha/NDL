# nusuk-dl · the Nusuk DL plugin

The Nusuk Design Language skill (`skills/nusuk-design-language/`) packaged as a Claude plugin. Every DL release rewrites this folder from the release's skill and raises `version` in `.claude-plugin/plugin.json` (now 2026.11.171614, built 2026-11-17T16:14+03:00). `/.claude-plugin/marketplace.json` lists it, so this repository is a plugin marketplace.

- **Organization (Owners):** claude.ai › Organization settings › Plugins & skills › Add › Sync from GitHub › `ByMoha/NusukDL`, with Sync automatically on. Each push to `main` syncs; members find the plugin in Customize › Plugins.
- **Claude Code:** `/plugin marketplace add ByMoha/NusukDL`, then `/plugin install nusuk-dl@nusuk-dl` (uses your own GitHub access).

Do not edit these files by hand: the next release overwrites them. Change the DL (Figma, then the release) instead.
