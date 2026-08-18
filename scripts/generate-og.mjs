import sharp from "sharp";
import { readFile } from "node:fs/promises";

const width = 1200;
const height = 630;
const photo = "public/assets/backgrounds/taurasi-ring-of-honor.jpg";
const logo = await readFile("public/assets/brand/AVC-logo-horizontal-dark.svg");
const output = "public/og-the-number-that-stayed-v1.png";

const overlay = Buffer.from(`
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="panel" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#09060e" stop-opacity=".12"/>
      <stop offset=".39" stop-color="#09060e" stop-opacity=".72"/>
      <stop offset=".52" stop-color="#09060e" stop-opacity=".96"/>
      <stop offset="1" stop-color="#09060e" stop-opacity=".99"/>
    </linearGradient>
    <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#6f42a8"/><stop offset=".5" stop-color="#d9ad5b"/><stop offset="1" stop-color="#f05a28"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#panel)"/>
  <rect x="0" y="0" width="1200" height="9" fill="url(#edge)"/>
  <rect x="595" y="42" width="2" height="546" fill="#d9ad5b" fill-opacity=".48"/>
  <text x="650" y="145" fill="#ffd166" font-family="Arial,Helvetica,sans-serif" font-size="20" font-weight="800" letter-spacing="4">THE ECHO · EDITION 002</text>
  <text x="650" y="244" fill="#ffffff" font-family="Arial,Helvetica,sans-serif" font-size="72" font-weight="900" letter-spacing="-3">THE NUMBER</text>
  <text x="650" y="316" fill="#ffffff" font-family="Arial,Helvetica,sans-serif" font-size="72" font-weight="900" letter-spacing="-3">THAT STAYED</text>
  <rect x="650" y="350" width="72" height="6" fill="#f28a1d"/>
  <text x="650" y="405" fill="#ded9e4" font-family="Georgia,serif" font-size="25">20 seasons. One city. One number.</text>
  <text x="650" y="471" fill="#9a93a1" font-family="Arial,Helvetica,sans-serif" font-size="14" font-weight="700" letter-spacing="2">DIANA TAURASI · RING OF HONOR</text>
  <rect x="650" y="511" rx="17" width="360" height="36" fill="#d9ad5b" fill-opacity=".12" stroke="#d9ad5b" stroke-opacity=".58"/>
  <text x="670" y="535" fill="#ffd166" font-family="Arial,Helvetica,sans-serif" font-size="13" font-weight="800" letter-spacing="1.1">OWNERSHIP READ · CEREMONY PRIDE</text>
  <rect x="0" y="621" width="1200" height="9" fill="url(#edge)"/>
</svg>`);

await sharp(photo)
  .resize(width, height, { fit: "cover", position: "center" })
  .modulate({ saturation: 0.88, brightness: 0.78 })
  .composite([
    { input: overlay, top: 0, left: 0 },
    { input: logo, top: 53, left: 650, blend: "over" },
  ])
  .png({ quality: 96, compressionLevel: 8 })
  .toFile(output);

console.log(`Generated ${output} (1200×630)`);
