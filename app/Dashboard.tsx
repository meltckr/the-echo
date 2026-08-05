"use client";

import { useMemo, useState } from "react";
import {
  audienceSignals,
  distribution,
  edition,
  implications,
  methodology,
  sources,
  themes,
  watchColumns,
  type Category,
  type Sentiment,
  type Source,
} from "@/data/edition";

const nav = [
  ["readout", "Readout"], ["signal", "Signal"], ["map", "Map"], ["voices", "Voices"],
  ["local", "Local"], ["national", "National"], ["creators", "Creators"], ["fans", "Fans"],
  ["narratives", "Narratives"], ["watch", "Watch"], ["ownership", "Ownership"], ["ledger", "Sources"],
];

const basePath = "/the-echo";

const toneClass = (value: string) => value.toLowerCase().replaceAll(" ", "-").replaceAll("/", "-");

function Brand({ compact = false }: { compact?: boolean }) {
  return <img className={compact ? "brand compact" : "brand"} src={`${basePath}/assets/brand/AVC-logo-horizontal-dark.svg`} alt="Accelerated Velocity Consulting" />;
}

function SectionHead({ n, eyebrow, title, copy }: { n: string; eyebrow: string; title: string; copy?: string }) {
  return <header className="section-head"><span>{n} · {eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</header>;
}

function SourceLink({ source, children }: { source: Source; children?: React.ReactNode }) {
  return <a className="source-link" href={source.url} target="_blank" rel="noreferrer">{children ?? source.outlet}<span aria-hidden="true">↗</span></a>;
}

function SourceCard({ source }: { source: Source }) {
  return <article className="source-card">
    <div className="source-card-top"><span>{source.category}</span><b className={toneClass(source.sentiment)}>{source.sentiment}</b></div>
    <h3>{source.source}</h3>
    <p>{source.evidence}</p>
    <div className="tags">{source.themes.slice(0, 3).map((theme) => <span key={theme}>{theme}</span>)}</div>
    <footer><small>{source.outlet} · {source.date} · {source.confidence} confidence</small><SourceLink source={source}>Open</SourceLink></footer>
  </article>;
}

function QuoteCard({ source, quiet = false }: { source: Source; quiet?: boolean }) {
  return <article className={`quote-card ${quiet ? "quiet" : ""}`}>
    <span>{source.quoteType}</span>
    <p>{source.quote}</p>
    <footer><strong>{source.source}</strong><small>{source.outlet} · {source.date}</small><SourceLink source={source}>Source</SourceLink></footer>
  </article>;
}

function SignalCard({ label, direction, score, note }: (typeof audienceSignals)[number]) {
  return <article className="signal-card">
    <div><span>{label}</span><strong>{direction}</strong></div>
    <div className="meter" aria-label={`${label}: ${score} on a directional editorial scale`}><i style={{ width: `${score}%` }} /></div>
    <small>{note}</small>
  </article>;
}

function AudienceSection({ id, n, title, category, copy }: { id: string; n: string; title: string; category: Category; copy: string }) {
  const selected = sources.filter((source) => source.category === category);
  return <section id={id} className="report-section">
    <SectionHead n={n} eyebrow={`${category} read`} title={title} copy={copy} />
    <div className="source-grid">{selected.map((source) => <SourceCard key={source.id} source={source} />)}</div>
  </section>;
}

function SourceLedger() {
  const [category, setCategory] = useState("All");
  const [sentiment, setSentiment] = useState("All");
  const categories = ["All", ...new Set(sources.map((source) => source.category))];
  const sentiments = ["All", ...new Set(sources.map((source) => source.sentiment))];
  const visible = useMemo(() => sources.filter((source) =>
    (category === "All" || source.category === category) && (sentiment === "All" || source.sentiment === sentiment)
  ), [category, sentiment]);

  return <>
    <div className="ledger-controls">
      <label>Category<select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((value) => <option key={value}>{value}</option>)}</select></label>
      <label>Sentiment<select value={sentiment} onChange={(event) => setSentiment(event.target.value)}>{sentiments.map((value) => <option key={value}>{value}</option>)}</select></label>
      <span>{visible.length} of {sources.length} records</span>
    </div>
    <div className="ledger-wrap"><table>
      <thead><tr><th>Source</th><th>Category</th><th>Date</th><th>Sentiment</th><th>Confidence</th><th>Link</th></tr></thead>
      <tbody>{visible.map((source) => <tr key={source.id}><td><strong>{source.source}</strong><small>{source.outlet}<br />{source.themes.join(" · ")}</small></td><td>{source.category}</td><td>{source.date}</td><td><span className={`ledger-tone ${toneClass(source.sentiment)}`}>{source.sentiment}</span></td><td>{source.confidence}</td><td><SourceLink source={source}>Open</SourceLink></td></tr>)}</tbody>
    </table></div>
  </>;
}

export default function Dashboard() {
  const quoteSources = sources.filter((source) => source.quote);
  const playerSources = sources.filter((source) => source.category === "Players & Coaches");
  const fanQuotes = sources.filter((source) => source.category === "Fans" && source.quote);

  async function share() {
    const payload = { title: `${edition.series}: ${edition.title}`, text: edition.subtitle, url: window.location.href };
    if (navigator.share) await navigator.share(payload);
    else await navigator.clipboard.writeText(window.location.href);
  }

  return <main>
    <header className="topbar"><Brand compact /><span>Ownership Intelligence · Perception Monitor</span><div><button onClick={() => window.print()}>Print</button><button onClick={share}>Share</button></div></header>

    <section className="hero">
      <div className="hero-art" aria-hidden="true"><span>THE</span><strong>ECHO</strong><i /></div>
      <div className="hero-copy">
        <div className="hero-marks"><img src={`${basePath}/assets/teams/mercury-logo.png`} alt="Phoenix Mercury" /><span>AVC · OWNERSHIP INTELLIGENCE</span></div>
        <p className="eyebrow">{edition.series} · EDITION 001</p>
        <h1>{edition.title}</h1>
        <p className="subtitle">{edition.subtitle}</p>
        <div className="hero-meta"><span>Event<br /><strong>{edition.eventDate}</strong></span><span>Reporting window<br /><strong>{edition.reportingWindow}</strong></span><span>Confidence<br /><strong>{edition.confidence}</strong></span></div>
        <p className="hero-thesis">{edition.thesis}</p>
        <p className="hero-note">Directional evidence sample · not scientific polling</p>
      </div>
    </section>

    <nav className="section-nav" aria-label="Report sections">{nav.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>

    <section id="readout" className="report-section lead-section">
      <SectionHead n="01" eyebrow="Executive interpretation" title="Ownership readout" />
      <div className="readout"><p>{edition.readout}</p><aside><span>Dominant signal</span><strong>{edition.overallDirection}</strong><p>The shot made the acquisition legible. The stay question keeps the read grounded.</p></aside></div>
    </section>

    <section id="signal" className="report-section dark-section">
      <SectionHead n="02" eyebrow="Directional index" title="Signal at a glance" copy="A transparent editorial read of the collected sample—not a claim about the entire public." />
      <div className="index-row"><div className="index-number"><strong>{edition.editorialIndex}</strong><span>/ 100</span></div><div><h3>{edition.overallDirection}</h3><p>{edition.indexNote}</p></div><div className="index-facts"><span>{edition.includedCount}<small>items included</small></span><span>{edition.reviewedCount}<small>items reviewed</small></span><span>{edition.confidence}<small>confidence</small></span></div></div>
      <div className="signal-grid">{audienceSignals.map((signal) => <SignalCard key={signal.label} {...signal} />)}</div>
    </section>

    <section id="map" className="report-section">
      <SectionHead n="03" eyebrow="Evidence mix" title="The conversation map" copy="Relative distribution of the collected evidence, not the internet at large." />
      <div className="conversation-map">{distribution.map((item, index) => <article key={item.category}><div className="map-ring" style={{ "--size": `${76 + item.count * 10}px`, "--delay": `${index * .06}s` } as React.CSSProperties}><strong>{item.count}</strong></div><span>{item.category}</span></article>)}</div>
      <p className="method-note">The sample intentionally weights direct and established sources more heavily than raw volume.</p>
    </section>

    <section id="voices" className="report-section dark-section">
      <SectionHead n="04" eyebrow="Direct evidence" title="What players and coaches are saying" copy="Quoted language is separated from AVC interpretation. Each item links to its source." />
      <div className="quote-grid">{playerSources.filter((source) => source.quote).map((source) => <QuoteCard key={source.id} source={source} />)}</div>
      <div className="interpretation"><span>Interpretation</span><p>The public player-and-coach language converged on fit, intelligence and collective response. The most important restraint: the available public sample did not include a broad set of direct teammate reactions to Plum, so chemistry claims remain early.</p></div>
    </section>

    <AudienceSection id="local" n="05" title="The Valley saw arrival and validation" category="Local Media" copy="Phoenix coverage treated the game as a debut story first, then widened the frame to the comeback, Thomas’s creation and the trade’s larger meaning." />
    <AudienceSection id="national" n="06" title="The game broke beyond routine recap" category="National Media" copy="National framing centered the shot and the instant fit. Opponent-market coverage supplied the clearest counterweight through officiating and closing-execution concerns." />
    <AudienceSection id="creators" n="07" title="The highlight traveled faster than analysis" category="Creators" copy="Accessible creator evidence was limited during the short window. What did circulate centered the first basket, the late three and Plum’s return to the floor." />

    <section id="fans" className="report-section dark-section">
      <SectionHead n="08" eyebrow="Indicative fan pulse" title="Excitement, transfer of affinity—and a live stay question" copy="Visible fan responses are sampled, nonrepresentative and selected to preserve both enthusiasm and friction." />
      <div className="fan-themes"><article><span>01</span><h3>The shot</h3><p>Immediate validation language followed the corner three.</p></article><article><span>02</span><h3>Natural Mercury</h3><p>Personality and competitive identity were repeatedly linked.</p></article><article><span>03</span><h3>New attention</h3><p>Several visible commenters said they would tune in or attend.</p></article><article><span>04</span><h3>Price and permanence</h3><p>The trade’s value remained conditional on Plum staying.</p></article></div>
      <div className="quote-grid fan-quotes">{fanQuotes.map((source) => <QuoteCard key={source.id} source={source} quiet />)}</div>
      <p className="method-note">Ordinary fan handles are omitted in the presentation. Original comments remain available at the linked public threads.</p>
    </section>

    <section id="narratives" className="report-section">
      <SectionHead n="09" eyebrow="Narrative leaders" title="Six ideas are organizing the conversation" />
      <div className="narrative-grid">{themes.map((theme, index) => <article key={theme.name}><header><span>{String(index + 1).padStart(2, "0")}</span><div><b>{theme.momentum}</b><small>{theme.strength} evidence</small></div></header><h3>{theme.name}</h3><p>{theme.evidence}</p><dl><div><dt>Advanced by</dt><dd>{theme.groups}</dd></div><div><dt>Ownership relevance</dt><dd>{theme.relevance}</dd></div></dl></article>)}</div>
    </section>

    <section className="report-section quote-board">
      <SectionHead n="10" eyebrow="Verified language" title="Quote board" />
      <div className="quote-board-grid">{quoteSources.slice(0, 8).map((source) => <QuoteCard key={source.id} source={source} />)}</div>
    </section>

    <section id="watch" className="report-section dark-section">
      <SectionHead n="11" eyebrow="Perception monitor" title="Positive signals, open questions and watch items" />
      <div className="watch-grid"><article className="positive"><span>Positive signals</span>{watchColumns.positive.map((item) => <p key={item}>{item}</p>)}</article><article className="question"><span>Open questions</span>{watchColumns.questions.map((item) => <p key={item}>{item}</p>)}</article><article className="watch"><span>Watch items</span>{watchColumns.watch.map((item) => <p key={item}>{item}</p>)}</article></div>
    </section>

    <section id="ownership" className="report-section">
      <SectionHead n="12" eyebrow="Ownership implications" title="Five observations to keep in view" />
      <div className="implication-list">{implications.map((item) => <article key={item.n}><span>{item.n}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}</div>
    </section>

    <section className="report-section bottom-line"><SectionHead n="13" eyebrow="Synthesis" title="Bottom line" /><p>{edition.bottomLine}</p></section>

    <section className="report-section methodology">
      <details open><summary><span>14 · Methodology</span><strong>How to read this report</strong><i>+</i></summary><div className="method-grid"><article><span>Window</span><p>{edition.reportingWindow}</p></article><article><span>Search</span><p>{methodology.searched}</p></article><article><span>Selection</span><p>{methodology.selection}</p></article><article><span>Classification</span><p>{methodology.sentiment}</p></article><article><span>Access limitations</span><p>{methodology.limitations}</p></article></div></details>
    </section>

    <section id="ledger" className="report-section ledger-section">
      <SectionHead n="15" eyebrow="Traceable evidence" title="Source ledger" copy="Filter the included sample by audience category or sentiment classification." />
      <SourceLedger />
    </section>

    <footer className="site-footer"><div><Brand /><p>Prepared for Mat and Phoenix Mercury leadership.<br />Evidence first. Direction without overstatement.</p></div><div><span>THE ECHO · EDITION 001</span><strong>#DOMINATE</strong><small>Generated August 4, 2026 · America/Phoenix</small></div><i /></footer>
  </main>;
}
