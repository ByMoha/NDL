# Nusuk visual system (illustration)

The full account skill `nusuk-visual-system`, included in the Nusuk DL on 14 November 2026 so the illustration rules travel with the DL. It governs watercolour illustrations; product UI stays with the DL tokens and components.

**Files:** `visual-system/approved-set.md` (the 17 selected artworks and the scene guide), `visual-system/colour.md` (colour matching), `visual-system/manifest.json` (exact files and hashes) and `visual-system/images/` (17 artworks and the colour reference, unaltered originals). The images ship only in `nusuk-design-language-with-artworks.zip`; the small zip embedded in the DL guide leaves them out. If `visual-system/images/` is missing in your copy, say that the reference set was not inspected. The helper `scripts/match_blue_tone.py` named in `colour.md` was not supplied with the references and is not in this skill.

## Reference standard

Use the [selected artworks and scene guide](visual-system/approved-set.md). **Makkah City (SEL-09)** defines the general painting language and default blue. The closest selected scene defines its own composition and construction. Use a supplied colour reference when explicitly requested; **Asset 39 (COL-01)** is bundled for the selected Umrah Journey palette. Exact files are recorded in the [reference manifest](visual-system/manifest.json).

Inspect the actual images before creating or editing. Transfer their painting language without importing unrelated subjects. Preserve selected originals unchanged and keep new versions separate. Later explicit instructions take precedence.

## Painting language

- **One focal subject or connected passage.** Broad joined deep-blue shadows often approach a silhouette. Sparse, soft gold planes reveal volume. Maintain convincing anatomy and identifying geometry.
- **Minimal construction.** Build forms with a few purposeful watercolor planes and reserved paper. Reduce modeled muscles, repeated folds and tiny mechanisms. Minimality comes from economical brushwork, not merely removing objects, fading a detailed render or applying texture.
- **Selective sharpness.** Keep identifying focal contours confident. Let peripheral cloth, wool or architecture merge into compatible atmosphere or shadow. Avoid outlines, uniform blur and all-over sharpening.
- **Quiet support.** Background architecture, plants and people remain smooth, pale suggestions. Dense crowds can stay dense while losing individual faces, garments and anatomy. A focal person or group remains coherent.
- **Connected washes.** Luminous near-white upper passages, broad blue dilutions and restrained warm light. Grounded scenes use a solid, continuous floor wash and natural contact shadow rather than scattered reflections or repeated stripes. Preserve selected green in Madinah and Rawdah.
- **Natural surface.** Fine paper grain and wet pigment transitions. Avoid repeated cellular or floral patterns, wrinkles, glossy CGI and decorative wisps. Accepted reference texture is not permission to amplify it in new work.

## Colour discipline

Match the actual reference blue across dark cores, midtones and pale washes; never invent a single brand hex. Keep gold soft and whites neutral. Avoid electric blue, cyan drift and neutral black as substitutes for the painted blue.

A blue-tone-only correction changes hue/chroma while preserving light/dark values, white balance, composition and detail. Preserve an accepted palette through unrelated edits. Use the [colour procedure](visual-system/colour.md) for a requested numerical blue match; painting, spatial changes and value edits require the image tool.

## Creation and refinement

Use built-in Imagegen for raster painting. Assign references clear roles: painting/palette, exact edit target and necessary subject geometry. For a continuation, preserve the selected crop, pose, scale and layout unless a change is requested. Reconstructing from scratch changes the painting rather than the agreed composition.

Keep bounded edits local. In a colour-only step, do not darken shadows; in a position-only step, move the subject and its grounding shadow without redesigning the scene. A blank folded map remains unmarked unless information is requested.

Inspect the actual output for reference resemblance, one focus, economical construction, intact geometry, soft supporting forms, natural lost edges and correct colour. Refine observed mismatches, normally within two focused passes. Report remaining limitations accurately. Save the final artwork separately with its prompt and concise QA record; add new references only when requested.
