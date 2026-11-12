import type { APIContext } from "astro";
import { renderIcon } from "../utils/icons";

// PNG icons for search results, the iOS home screen and the web app manifest.
const ICONS = {
  "favicon-32x32": { size: 32, square: false },
  "apple-touch-icon": { size: 180, square: true },
  "icon-192": { size: 192, square: true },
  "icon-512": { size: 512, square: true },
};

export function getStaticPaths() {
  return Object.entries(ICONS).map(([icon, props]) => ({ params: { icon }, props }));
}

export function GET({ props }: APIContext) {
  const { size, square } = props as { size: number; square: boolean };
  return new Response(renderIcon(size, square), { headers: { "Content-Type": "image/png" } });
}
