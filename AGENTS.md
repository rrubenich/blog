## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Design rules

These rules apply to every page, component, image and generated asset (OG images, favicon, code highlighting).

### Colors: black, white, the blue scale and two neutrals

Use only these colors. No other grays or hues, no new hex values.

| Token | Hex |
| --- | --- |
| `--black` | `#000000` |
| `--white` | `#ffffff` |
| `--neutral-600` | `#5a6175` (secondary text, light theme) |
| `--neutral-400` | `#98a0ae` (secondary text, dark theme) |
| `--blue-50` | `#f2f8fd` |
| `--blue-100` | `#e3effb` |
| `--blue-200` | `#c1dff6` |
| `--blue-300` | `#8ac6ef` |
| `--blue-400` | `#4ca8e4` |
| `--blue-500` | `#2692d9` |
| `--blue-600` | `#1770b2` |
| `--blue-700` | `#135991` |
| `--blue-800` | `#144c78` |
| `--blue-900` | `#164164` |
| `--blue-950` | `#0f2942` |

- The palette and the semantic tokens (`--bg`, `--text`, `--muted`, `--line`, `--surface`, `--accent`, `--accent-strong`, `--accent-soft`) live at the top of `src/styles/global.css`, for light and dark themes.
- In CSS, use the semantic tokens, never raw hex values. Where CSS variables are unavailable (`src/utils/og.ts`, `src/utils/shiki-themes.ts`, `public/favicon.svg`, `theme-color` meta tags), use the hex values above.
- Light theme: white background, black text. Dark theme: black background, white text. Blue is for accents, lines and surfaces.
- Neutral is only for secondary text and its icons (`--muted`): location, languages, dates, meta, descriptions, captions, the footer and the inactive nav links. Light theme uses `--neutral-600`, dark uses `--neutral-400`.
- Don't create new shades with `color-mix()` or opacity. Pick the nearest step on the scale. (A black shadow with transparency is fine.)

### Typography: serif for titles and reading, sans for interface

- Two typefaces, each with a fixed role, the same on every page:
  - **Newsreader** (`--font-serif`, from `@fontsource/newsreader`): titles, section headings, ledes, card titles and post text (`--font-reading`).
  - **System sans** (`--font-sans`): everything else. That covers the header, footer, navigation, meta, dates, tags and pills, buttons, the TOC, captions and the details on About (body copy, facts, roles, bullets, projects, skills).
  - Monospace (`--font-mono`) is for code only. Don't add other font families.
  - Serif elements are listed in the "Typefaces" block at the end of `src/styles/global.css`. To make a new element serif, add it there.
- Font sizes come from the scale in `global.css`: `--text-xs`, `--text-sm`, `--text-base`, `--text-lg`, `--text-xl`, `--text-2xl`. Body text is `--text-base` on every page. Don't hard-code sizes in rem/px.
- Only posts (`.article`) follow the reader's text-size and typeface preferences (`--size-reading`, `--font-reading`); other pages use the fixed scale.

### Icons, not emojis

- Never use emojis in the UI or page copy. Use SVG icons: `src/components/Icon.astro` (Lucide, stroke icons) for UI symbols and `src/components/BrandIcon.astro` for brand marks. Add new icons to those components.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
