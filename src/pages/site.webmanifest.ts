import { SITE } from "../config";

export function GET() {
  const manifest = {
    name: `${SITE.author}, ${SITE.tagline}`,
    short_name: SITE.title,
    description: SITE.description,
    lang: SITE.lang,
    start_url: "/",
    scope: "/",
    display: "minimal-ui",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any maskable" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" },
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
  return new Response(JSON.stringify(manifest, null, 2), { headers: { "Content-Type": "application/manifest+json" } });
}
