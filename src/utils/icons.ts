import fs from "node:fs";
import path from "node:path";
import { Resvg } from "@resvg/resvg-js";

// Raster icons are rendered from public/favicon.svg, so the SVG stays the single source.
const source = fs.readFileSync(path.join(process.cwd(), "public/favicon.svg"), "utf8");

/**
 * Render the favicon as a PNG of `size` pixels.
 * `square` drops the rounded corners: iOS and Android apply their own mask to home-screen icons.
 */
export function renderIcon(size: number, square = false): Buffer {
  const svg = square ? source.replace(/\srx="[^"]*"/, "") : source;
  return new Resvg(svg, { fitTo: { mode: "width", value: size } }).render().asPng();
}

/** Wrap PNG images in an ICO container (PNG-compressed entries, supported by every current browser). */
export function toIco(images: { size: number; png: Buffer }[]): Buffer {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);
  let offset = 6 + 16 * images.length;
  const entries = images.map(({ size, png }) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt8(0, 2); // palette
    e.writeUInt8(0, 3); // reserved
    e.writeUInt16LE(1, 4); // color planes
    e.writeUInt16LE(32, 6); // bits per pixel
    e.writeUInt32LE(png.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += png.length;
    return e;
  });
  return Buffer.concat([header, ...entries, ...images.map((i) => i.png)]);
}
