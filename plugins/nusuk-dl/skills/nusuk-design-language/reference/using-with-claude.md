# Using DL with Claude

Your team can make concepts, decks, prototypes and documents with Claude that follow DL.

## In decks and designs

When you ask Claude for a deck (Slides) or a design (Design), choose **Nusuk Design Language** as the design system. Claude reads this system's README, tokens, components and assets and builds with them: the gold, Ink and white palette, IBM Plex Sans Arabic, the pill buttons and 18px cards, the logo files and the illustration pages.

Good asks:

- "Make a 10-slide deck for the Rawdah booking redesign using the Nusuk Design Language. Arabic first, English on the same slide."
- "Design three concepts for the Umrah journey home screen with Nusuk DL components: Toolbar, StartJourney, RequestCard, TabBar."
- "Prototype the payment-failed flow with the StatusSheet and NoticeBar, in Dome of the Prophet dark."
- "Build a Madinah landing from the `rawdah-landing` template: keep the section order, swap the content, drop the playlist."

## Starting from a template

Ask for the kind of screen, not for a copy of another product's screen. Claude picks the template contract by job, fills its spaces from the allowed lists and covers the states.

- "Design the booking details page for museum tickets from the `booking-details` contract, all five states, Arabic and English."
- "Which template fits a screen where people choose a visit day and an exact time? Build it for the Quba mosque visit."
- "Review this cart against the `cart` contract and list what breaks a forbidden line."

If nothing fits, Claude says so and returns the screen as *Proposed* with a draft contract.

## With the skill

Install the **nusuk-design-language** skill (shared by the DL team). It carries the DESIGN.md (root plus modules, also in this system as `DESIGN.md`): the rules, tokens, component map, patterns and templates, writing rules, ethics and quality gates, and tells Claude to read this system first. With it installed, Claude:

- classifies the feature (intent or desire, which realm) before drawing;
- uses only DL tokens and components, in Arabic and English, RTL;
- refuses dark patterns, fake scarcity, streaks and worship scoring;
- names the KPI pillar and the guardrail metric;
- starts a known kind of screen from its template contract and checks the forbidden lines;
- runs the eight quality gates before it calls something done.

## In code

Load `tokens.css`, `components/bundle.css`, React 18 and `components/bundle.js`, then use `window.NusukDL.Button`, `NusukDL.TextField` and the rest. Set `data-theme` on `<html>` (`gold-light`, `gold-dark`, `green-light`, `green-dark`, `lavender-light`, `lavender-dark`) and `dir="rtl"` for Arabic.

## What Claude must not do

Change DL itself, invent components and present them as official, restyle components to fit copy, or reproduce the logo by hand. Anything new is labelled *Proposed* and goes through the contribution flow.

## Skills that work with the DL skill (14 November 2026)

When they are installed, these skills cover what the DL does not; the DL still decides tokens, components, placement and the never-ship list.

| Task | Use with this skill | What it adds |
|---|---|---|
| Heuristic evaluation, research plan, behavioural model, metrics | `nusuk-dx` | The DX team's method: S0–S4 and E0–E4, Nielsen and Rams lenses, report template, 3Ms. The DL's WCAG floor (2.2 AA, 48 targets) overrides its older 2.1 / 44 line |
| Arabic or English copy, notifications, store replies | `nusuk-ux`, `nusuk-voice-rules`, `nusuk-content-writer` | The writing guide in full. M6 › House rules records where they disagreed: adverse outcomes are agentless and never use تم («أُلغي حجزك») |
| Illustrations and campaign art | `reference/visual-system.md` and `reference/visual-system/` (the full `nusuk-visual-system` skill with its selected artworks, included here) | The watercolour painting language, colour discipline and the create, refine and QA steps (M7) |
| Any change in Figma | `figma-use` (with `figma-generate-library` for library work) | The Plugin API rules; never run two Figma calls at once |
| A full accessibility audit | `accessibility-audit` | The five-layer audit (automated, keyboard, screen reader, visual, flow) behind the M10 floor |

*Mirrors the skill’s SKILL.md › §9.*
