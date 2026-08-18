import { readFile, access } from "node:fs/promises";
import { sources, edition, audioBrief } from "../data/edition.ts";

const dashboard = await readFile("app/Dashboard.tsx", "utf8");
const layout = await readFile("app/layout.tsx", "utf8");
const styles = await readFile("app/globals.css", "utf8");
const audioTranscript = (await readFile("content/audio-brief-transcript.txt", "utf8")).trim();
const dataText = JSON.stringify({ edition, audioBrief, sources });
const required = ["THE ECHO", "The Number That Stayed", "Ownership readout", "Source ledger", "#DOMINATE", "Mat"];
const forbidden = ["Matt Ishbia", "The Plum Effect", "Kelsey Plum’s Mercury debut", "placeholder", "scientific public approval"];
const failures = [];

for (const token of required) if (!dashboard.includes(token) && !layout.includes(token) && !dataText.includes(token)) failures.push(`Missing token: ${token}`);
for (const token of forbidden) if (dashboard.includes(token) || layout.includes(token) || dataText.includes(token)) failures.push(`Forbidden token: ${token}`);
for (const token of ["echo-audio-glow", "echo-audio-flow", "prefers-reduced-motion"]) if (!styles.includes(token)) failures.push(`Missing reusable audio treatment: ${token}`);
for (const token of ["−15", "+15", "1.25×", "1.5×", "2×", "--audio-progress", "preservesPitch"]) if (!dashboard.includes(token) && !styles.includes(token)) failures.push(`Missing audio control: ${token}`);
if (sources.length !== edition.sourceCount) failures.push(`Source count mismatch: data=${sources.length}, edition=${edition.sourceCount}`);
if (new Set(sources.map((source) => source.id)).size !== sources.length) failures.push("Duplicate source ids detected");
for (const source of sources) {
  if (!source.url.startsWith("https://")) failures.push(`Non-HTTPS source: ${source.id}`);
  if (source.quote && source.quoteType !== "Direct quote") failures.push(`Quote not labeled direct: ${source.id}`);
  if (source.quote && source.quote.includes("…")) failures.push(`Quote contains an omission ellipsis: ${source.id}`);
  if (source.quote && source.category !== "Fans" && (!source.speaker || !source.quoteContext)) failures.push(`Quote lacks speaker/context: ${source.id}`);
}
if (audioTranscript !== audioBrief.paragraphs.join("\n\n")) failures.push("Visible audio transcript does not match generation transcript");
if (audioTranscript.toLowerCase().includes("ownership read")) failures.push("Audio transcript contains the pronunciation-ambiguous phrase: ownership read");
if (audioBrief.paragraphs.at(-1) !== "Dominate!") failures.push("Audio brief must end with an emphatic Dominate!");
await access("public/og-the-number-that-stayed-v1.png");
await access("public/audio/the-echo-002-the-number-that-stayed-v2.mp3");
await access("public/assets/brand/AVC-logo-horizontal-dark.svg");
await access("public/assets/teams/mercury-logo.png");
await access("public/assets/backgrounds/taurasi-ring-of-honor.jpg");
if (!layout.includes("https://meltckr.github.io") || !layout.includes("/the-echo/og-the-number-that-stayed-v1.png")) failures.push("GitHub Pages metadata is not current");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`Validated The Echo: ${sources.length} sources, metadata, assets and stale-content tokens.`);
