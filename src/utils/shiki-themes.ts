// Code highlighting themes built only from the site palette (black, white and the blue scale).
// See the palette in src/styles/global.css and the design rules in AGENTS.md.
import type { ThemeRegistration } from "shiki";

type Roles = { bg: string; fg: string; comment: string; keyword: string; string: string; fn: string; constant: string };

const make = (name: string, type: "light" | "dark", c: Roles): ThemeRegistration => ({
  name,
  type,
  colors: { "editor.background": c.bg, "editor.foreground": c.fg },
  tokenColors: [
    { settings: { foreground: c.fg, background: c.bg } },
    { scope: ["comment", "punctuation.definition.comment"], settings: { foreground: c.comment, fontStyle: "italic" } },
    { scope: ["keyword", "storage", "storage.type", "storage.modifier", "keyword.operator.new", "entity.name.tag"], settings: { foreground: c.keyword } },
    { scope: ["string", "string.template", "punctuation.definition.string", "markup.inline.raw"], settings: { foreground: c.string } },
    { scope: ["entity.name.function", "support.function", "meta.function-call", "entity.name.type", "entity.name.class", "support.type"], settings: { foreground: c.fn } },
    { scope: ["constant", "constant.numeric", "constant.language", "variable.other.constant", "entity.other.attribute-name", "support.constant"], settings: { foreground: c.constant } },
    { scope: ["markup.heading", "markup.bold"], settings: { foreground: c.keyword, fontStyle: "bold" } },
  ],
});

export const paletteLight = make("palette-light", "light", {
  bg: "#f2f8fd", // blue-50
  fg: "#000000",
  comment: "#2692d9", // blue-500
  keyword: "#135991", // blue-700
  string: "#1770b2", // blue-600
  fn: "#0f2942", // blue-950
  constant: "#144c78", // blue-800
});

export const paletteDark = make("palette-dark", "dark", {
  bg: "#0f2942", // blue-950
  fg: "#ffffff",
  comment: "#4ca8e4", // blue-400
  keyword: "#8ac6ef", // blue-300
  string: "#c1dff6", // blue-200
  fn: "#e3effb", // blue-100
  constant: "#8ac6ef", // blue-300
});
