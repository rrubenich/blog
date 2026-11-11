# CLAUDE.md

Project instructions for Claude Code. The shared instructions, including the design rules (palette, typography, icons), are in AGENTS.md:

@AGENTS.md

## Design rules (summary, must follow)

- Colors: only black `#000000`, white `#ffffff` the blue scale 50–950 (`#f2f8fd`, `#e3effb`, `#c1dff6`, `#8ac6ef`, `#4ca8e4`, `#2692d9`, `#1770b2`, `#135991`, `#144c78`, `#164164`, `#0f2942`), and the neutrals `#5a6175` (light) / `#98a0ae` (dark), used only for secondary text (`--muted`). No other grays or hues. Use the semantic tokens in `src/styles/global.css`.
- Typography: Newsreader for titles and reading text, system sans for interface and secondary info (plus monospace for code); sizes from the `--text-*` scale.
- Icons: SVG icons from `Icon.astro` / `BrandIcon.astro`, never emojis.
