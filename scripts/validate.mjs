import { readFile, access } from "node:fs/promises";
import { sources, edition } from "../data/edition.ts";

const dashboard = await readFile("app/Dashboard.tsx", "utf8");
const layout = await readFile("app/layout.tsx", "utf8");
const required = ["THE ECHO", "The Plum Effect", "Ownership readout", "Source ledger", "#DOMINATE", "Mat"];
const forbidden = ["Matt Ishbia", "placeholder", "scientific public approval"];
const failures = [];

for (const token of required) if (!dashboard.includes(token) && !layout.includes(token)) failures.push(`Missing token: ${token}`);
for (const token of forbidden) if (dashboard.includes(token) || layout.includes(token)) failures.push(`Forbidden token: ${token}`);
if (sources.length !== edition.sourceCount) failures.push(`Source count mismatch: data=${sources.length}, edition=${edition.sourceCount}`);
if (new Set(sources.map((source) => source.id)).size !== sources.length) failures.push("Duplicate source ids detected");
for (const source of sources) {
  if (!source.url.startsWith("https://")) failures.push(`Non-HTTPS source: ${source.id}`);
  if (source.quote && source.quoteType !== "Direct quote") failures.push(`Quote not labeled direct: ${source.id}`);
}
await access("public/og-image.png");
await access("public/assets/brand/AVC-logo-horizontal-dark.svg");
await access("public/assets/teams/mercury-logo.png");
await access("public/assets/share/plum-debut-source.png");
if (!layout.includes("https://meltckr.github.io") || !layout.includes("/the-echo/og-image.png")) failures.push("GitHub Pages metadata is not current");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`Validated The Echo: ${sources.length} sources, metadata, assets and stale-content tokens.`);
