import fs from "node:fs";
import path from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { SITE } from "../config";

// Fonts come from @fontsource/newsreader (Latin only), the site's only typeface. Titles in other scripts
// need a font that covers them: add one to `loadFonts()` below.
const fontDir = path.join(process.cwd(), "node_modules/@fontsource/newsreader/files");
let fonts: { name: string; data: Buffer; weight: 400 | 700; style: "normal" }[] | undefined;
function loadFonts() {
  fonts ??= [
    { name: "Newsreader", data: fs.readFileSync(path.join(fontDir, "newsreader-latin-400-normal.woff")), weight: 400, style: "normal" },
    { name: "Newsreader", data: fs.readFileSync(path.join(fontDir, "newsreader-latin-700-normal.woff")), weight: 700, style: "normal" },
  ];
  return fonts;
}

// Palette only: black, white, the blue scale and the neutrals (see AGENTS.md).
const INK = "#000000";
const PAPER = "#ffffff";
const MUTED = "#5a6175"; // neutral-600
const ACCENT = "#1770b2"; // blue-600
const TRACK = "#c1dff6"; // blue-200

type Card = { title: string; subtitle?: string; footer?: string; photo?: string }; // photo: path under public/

/** Render a 1200x630 PNG: title on paper, with the inkline drawn along the bottom edge and an optional round photo. */
export async function renderOg({ title, subtitle, footer, photo }: Card): Promise<Uint8Array> {
  const size = title.length > 90 ? 52 : title.length > 60 ? 62 : title.length > 35 ? 74 : 88;
  const el = (type: string, style: Record<string, unknown>, children?: unknown) => ({ type, props: { style, children } });

  const photoSrc = photo ? `data:image/jpeg;base64,${fs.readFileSync(path.join(process.cwd(), "public", photo)).toString("base64")}` : undefined;
  const textWidth = photoSrc ? 640 : 1000;

  const tree = el("div", { display: "flex", flexDirection: "column", justifyContent: "space-between", width: 1200, height: 630, boxSizing: "border-box", background: PAPER, color: INK, padding: "72px 80px 64px", fontFamily: "Newsreader", position: "relative" }, [
    el("div", { display: "flex", flexDirection: "column" }, [
      el("div", { display: "flex", fontSize: size, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2, maxWidth: textWidth }, title),
      subtitle ? el("div", { display: "flex", fontSize: 32, lineHeight: 1.35, color: MUTED, marginTop: 28, maxWidth: textWidth - 100 }, subtitle.length > 130 ? subtitle.slice(0, 127) + "…" : subtitle) : null,
    ].filter(Boolean)),
    el("div", { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 30, color: MUTED }, [
      el("div", { display: "flex", fontWeight: 700, color: INK }, SITE.title),
      footer ? el("div", { display: "flex" }, footer) : el("div", { display: "flex" }, ""),
    ]),
    photoSrc ? { type: "img", props: { src: photoSrc, width: 380, height: 380, style: { position: "absolute", right: 80, top: 100, borderRadius: 190 } } } : null,
    el("div", { display: "flex", position: "absolute", left: 0, bottom: 0, width: 1200, height: 14, background: TRACK }, ""),
    el("div", { display: "flex", position: "absolute", left: 0, bottom: 0, width: 720, height: 14, background: ACCENT }, ""),
  ].filter(Boolean));

  const svg = await satori(tree as any, { width: 1200, height: 630, fonts: loadFonts() });
  return new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
}
