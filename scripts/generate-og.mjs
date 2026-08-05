import sharp from "sharp";
import { readFile } from "node:fs/promises";

const width = 1200;
const height = 630;
const photo = "public/assets/share/plum-debut-source.png";
const logo = await readFile("public/assets/brand/AVC-logo-horizontal-dark.svg");

const overlay = Buffer.from(`
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#07080d" stop-opacity=".98"/>
      <stop offset=".43" stop-color="#07080d" stop-opacity=".91"/>
      <stop offset=".7" stop-color="#07080d" stop-opacity=".25"/>
      <stop offset="1" stop-color="#07080d" stop-opacity=".04"/>
    </linearGradient>
    <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#00b4a6"/><stop offset=".52" stop-color="#ee6b2d"/><stop offset="1" stop-color="#5f42a8"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#shade)"/>
  <rect x="0" y="0" width="1200" height="8" fill="url(#edge)"/>
  <text x="70" y="124" fill="#50dfd2" font-family="Arial,Helvetica,sans-serif" font-size="20" font-weight="800" letter-spacing="5">THE ECHO · EDITION 001</text>
  <text x="70" y="225" fill="#ffffff" font-family="Arial,Helvetica,sans-serif" font-size="92" font-weight="900" letter-spacing="-4">THE PLUM</text>
  <text x="70" y="309" fill="#ffffff" font-family="Arial,Helvetica,sans-serif" font-size="92" font-weight="900" letter-spacing="-4">EFFECT</text>
  <rect x="70" y="346" width="64" height="5" fill="#ee6b2d"/>
  <text x="70" y="401" fill="#dedde2" font-family="Georgia,serif" font-size="25">How Kelsey Plum’s Mercury debut</text>
  <text x="70" y="437" fill="#dedde2" font-family="Georgia,serif" font-size="25">landed across the basketball world</text>
  <text x="70" y="502" fill="#8e8e98" font-family="Arial,Helvetica,sans-serif" font-size="15" font-weight="700" letter-spacing="2">AUGUST 3, 2026 · OWNERSHIP INTELLIGENCE</text>
  <rect x="70" y="540" rx="16" width="294" height="34" fill="#00b4a6" fill-opacity=".15" stroke="#50dfd2" stroke-opacity=".45"/>
  <text x="88" y="562" fill="#50dfd2" font-family="Arial,Helvetica,sans-serif" font-size="13" font-weight="800" letter-spacing="1.2">DIRECTIONAL READ · CLEARLY POSITIVE</text>
  <rect x="0" y="622" width="1200" height="8" fill="url(#edge)"/>
</svg>`);

await sharp(photo)
  .resize(width, height, { fit: "cover", position: "center" })
  .modulate({ saturation: 0.93, brightness: 0.82 })
  .composite([
    { input: overlay, top: 0, left: 0 },
    { input: logo, top: 49, left: 70, blend: "over" },
  ])
  .png({ quality: 96, compressionLevel: 8 })
  .toFile("public/og-image.png");

console.log("Generated public/og-image.png (1200×630)");
