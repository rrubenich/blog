import { renderIcon, toIco } from "../utils/icons";

// For Google Search and older browsers, which don't use the SVG favicon.
export function GET() {
  const ico = toIco([16, 32, 48].map((size) => ({ size, png: renderIcon(size) })));
  return new Response(ico, { headers: { "Content-Type": "image/x-icon" } });
}
