export type Sentiment = "Strongly Positive" | "Positive" | "Mixed" | "Neutral" | "Negative" | "Strongly Negative";
export type Category = "Official" | "Players & Coaches" | "Local Media" | "National Media" | "Creators" | "Fans";

export type Source = {
  id: string;
  source: string;
  outlet: string;
  category: Category;
  date: string;
  sentiment: Sentiment;
  themes: string[];
  confidence: "High" | "Medium";
  url: string;
  evidence: string;
  quote?: string;
  quoteType?: "Direct quote" | "Paraphrase";
  speaker?: string;
  speakerRole?: string;
  quoteContext?: string;
};

export const edition = {
  series: "THE ECHO",
  title: "The Plum Effect",
  subtitle: "How Kelsey Plum’s Phoenix Mercury debut landed across the basketball world",
  eventDate: "August 3, 2026",
  reportingWindow: "August 1–4, 2026 · through 2:30 PM Arizona",
  thesis: "The late three gave the acquisition an immediate proof point: Plum did not merely join Phoenix—she changed the ending. The available reaction leaned clearly positive, while questions about permanence and sustainability remained active.",
  sourceCount: 30,
  includedCount: 30,
  reviewedCount: 54,
  confidence: "Moderate–high",
  overallDirection: "Clearly positive",
  editorialIndex: 78,
  indexNote: "Directional editorial index from the included sample; not polling or a public approval rating.",
  readout: "Kelsey Plum’s first Mercury game produced the kind of compressed story that travels: a new star arrived, scored 20 points in roughly 20 minutes, and made the late three that put Phoenix ahead for good in a 106–101 road win. That sequence allowed official channels, media coverage and visible fan discussion to interpret the trade through performance rather than projection. The strongest recurring frame was immediate competitive fit—especially Plum’s off-ball compatibility with Alyssa Thomas and Phoenix’s new range of late-game options. A second, less purely basketball signal also surfaced: the hotel welcome, Plum’s visible energy and the emotional response from fans of her former teams expanded the conversation beyond the box score. The reaction was not uniformly celebratory. Trade-cost concerns, officiating complaints and the question of whether Plum remains in Phoenix after the season persisted. That restraint matters. The debut improved the emotional and competitive case for the acquisition; it did not resolve its long-term value. For ownership, the early signal is meaningful because one night made the intended identity easier for people to see: experienced, expressive and difficult to close out.",
  bottomLine: "This was more than a successful debut because the defining play arrived at the exact point where the acquisition needed public meaning. Plum’s corner three turned an abstract roster bet into a visible outcome, and the basketball world quickly organized its reaction around fit, closing confidence and renewed entertainment value. The evidence remains directional and early. Phoenix is still managing a difficult playoff position, the trade’s long-term value depends heavily on what follows this season, and one productive night cannot answer questions of sustainability. But perception moved. Before the game, the conversation centered on price and uncertainty. By the final buzzer, the dominant image was Plum delivering the shot Phoenix acquired her to make. That is a real shift—small in sample, but clear in direction.",
};

export const audioBrief = {
  title: "The Echo ownership brief",
  label: "Two-minute audio",
  src: "/the-echo/audio/the-echo-001-the-plum-effect.mp3",
  paragraphs: [
    "Mat, here is the two-minute ownership read from this edition of The Echo.",
    "Kelsey Plum’s Mercury debut changed the public conversation quickly because the most important moment was easy to understand. In a 106–101 road win over Chicago, she scored 20 points in limited minutes and made the late corner three that put Phoenix ahead for good. The acquisition moved from projection to visible proof.",
    "The reaction across official channels, media coverage, player comments and the visible fan sample was clearly positive. The recurring idea was not simply that Plum played well. It was that her movement, shooting and late-game confidence appeared to fit naturally beside Alyssa Thomas and Kahleah Copper. Nate Tibbetts called it a natural fit. Plum described Phoenix’s mix as a cocktail for success. Fans of Plum and her former teams also showed signs of transferring attention toward the Mercury.",
    "The broader signal is that competitive fit and personality fit reinforced each other. The team-hotel welcome created an emotional opening. The game gave that welcome basketball credibility. Together, they made Phoenix feel like a place Plum was wanted and a team she could immediately help.",
    "The restraint matters. This is a curated, directional sample, not public polling. Chicago’s frustration with officiating supplied a clear counter-frame. The trade cost remains part of the discussion, and the long-term value still depends heavily on whether Plum stays beyond this season.",
    "The ownership takeaway is straightforward: one night did not settle the acquisition, but it gave the organization a compelling proof point. The next signal is whether the fit produces more recognizable closing moments, sustained audience interest and a story that grows beyond the debut.",
    "Dominate.",
  ],
};

export const audienceSignals = [
  { label: "Overall", direction: "Clearly positive", score: 78, note: "Broad alignment around debut impact" },
  { label: "Local media", direction: "Positive", score: 80, note: "Shot, fit and comeback led framing" },
  { label: "National media", direction: "Positive", score: 76, note: "Breakthrough beyond routine recap" },
  { label: "Players & staff", direction: "Strongly positive", score: 88, note: "Natural-fit language; team welcome" },
  { label: "Creators", direction: "Positive / limited", score: 71, note: "Thin accessible sample" },
  { label: "Fans", direction: "Positive with friction", score: 69, note: "Excitement plus stay/cost questions" },
];

export const distribution = [
  { category: "Official", count: 4 },
  { category: "Players & coaches", count: 5 },
  { category: "Local media", count: 4 },
  { category: "National media", count: 5 },
  { category: "Creators", count: 3 },
  { category: "Fans", count: 9 },
];

export const themes = [
  { name: "The closer arrived immediately", momentum: "Rising", strength: "High", groups: "Official · media · fans", evidence: "Plum’s corner three with 53.2 seconds left put Phoenix ahead for good; it became the dominant headline and replay frame.", relevance: "The acquisition gained a simple, repeatable public meaning after one night." },
  { name: "The fit looked intuitive", momentum: "Rising", strength: "High", groups: "Players · coaches · analysts · fans", evidence: "Nate Tibbetts called the fit natural; visible discussion repeatedly focused on Thomas creating advantages and Plum finishing them.", relevance: "The roster story is beginning to sound coherent outside the organization." },
  { name: "Phoenix gained another reason to watch", momentum: "Rising", strength: "Medium", groups: "National media · creators · fans", evidence: "Visible comments included new intent to tune in or attend, while highlight clips centered Plum’s first bucket and late shot.", relevance: "Attention can compound if the team continues producing recognizable late-game moments." },
  { name: "The welcome mattered", momentum: "Stable", strength: "Medium", groups: "Official · player fans · team fans", evidence: "The team-hotel greeting drew distinctly emotional reaction before the game and framed Phoenix as a place Plum was wanted.", relevance: "Organizational warmth became part of the public fit narrative, not a separate side story." },
  { name: "The price still follows the promise", momentum: "Stable", strength: "High", groups: "Local fans · league fans · trade coverage", evidence: "The most persistent skeptical question was whether the cost makes sense if Plum does not remain beyond 2026.", relevance: "Long-term sentiment will be shaped by continuity as much as the current playoff push." },
  { name: "One game raised expectations faster than certainty", momentum: "Rising", strength: "Medium", groups: "Fans · specialist discussion", evidence: "Optimistic playoff and future-fit claims appeared immediately, often alongside acknowledgments that the team remains 12–19.", relevance: "The opportunity and the risk are linked: visible upside can quickly become a higher public standard." },
];

export const watchColumns = {
  positive: [
    "The decisive play matched Plum’s established public identity as a pressure scorer.",
    "Player and coach language aligned around fit rather than adjustment difficulty.",
    "Visible fans of Plum—not only existing Mercury fans—expressed intent to follow Phoenix.",
  ],
  questions: [
    "The accessible creator sample was narrow and did not support a broad creator-economy conclusion.",
    "Trade value remains connected to whether Plum stays beyond this season.",
    "Some opponent-side discussion attributed the finish partly to officiating and Chicago execution.",
  ],
  watch: [
    "Whether the ‘multiple closers’ frame survives the next three close games.",
    "Whether Plum-centered attention converts into repeat viewership, ticket interest or merchandise signals.",
    "Whether discussion shifts from the late shot to sustainable team identity and long-term commitment.",
  ],
};

export const implications = [
  { n: "01", title: "The acquisition now has a public proof point", body: "The late shot shortened the distance between organizational intent and audience understanding. People can explain the move through a moment, not only a transaction." },
  { n: "02", title: "Competitive fit and personality fit are reinforcing each other", body: "The hotel welcome, Plum’s energy and the closing performance landed as one story. That combination is more durable than either basketball or branding alone." },
  { n: "03", title: "The audience appears expandable", body: "A visible subset of Plum-first and former-team fans said they would watch Phoenix. The signal is not representative, but it points to incremental attention beyond the existing Mercury base." },
  { n: "04", title: "The long-term question is already part of the narrative", body: "Positive debut coverage did not erase concern about trade cost or 2027. Those questions will continue to sit beside every short-term success." },
  { n: "05", title: "Expectation management becomes part of the opportunity", body: "A strong first impression accelerates belief. The next useful read is whether the conversation stays grounded in repeatable team behavior rather than one dramatic ending." },
];

export const sources: Source[] = [
  { id:"wnba-game", source:"Phoenix at Chicago game center", outlet:"WNBA", category:"Official", date:"Aug. 3", sentiment:"Neutral", themes:["Game facts","Clutch performance"], confidence:"High", url:"https://www.wnba.com/game/phx-vs-chi-1022600224", evidence:"Official game identity and game record." },
  { id:"game-book", source:"Official scorer’s report", outlet:"WNBA / NBA Properties", category:"Official", date:"Aug. 3", sentiment:"Neutral", themes:["Game facts","Immediate impact"], confidence:"High", url:"https://statsdmz.nba.com/pdfs/20260803/20260803_PHXCHI_book.pdf", evidence:"106–101 final, player lines and closing sequence." },
  { id:"mercury-welcome", source:"Team-hotel welcome carousel", outlet:"Phoenix Mercury / Instagram", category:"Official", date:"Aug. 3", sentiment:"Strongly Positive", themes:["Chemistry","Personality","Organizational welcome"], confidence:"Medium", url:"https://www.reddit.com/r/WNBA365/comments/1verxca/the_mercury_surprised_kelsey_plum_as_she_arrived/", evidence:"Publicly indexed repost of the Mercury’s Instagram carousel; direct Instagram access was limited." },
  { id:"mercury-schedule", source:"2026 national broadcast schedule", outlet:"Phoenix Mercury", category:"Official", date:"May 7", sentiment:"Neutral", themes:["Visibility","Broadcast"], confidence:"High", url:"https://mercury.wnba.com/news/phoenix-mercury-2026-national-broadcast-schedule", evidence:"Confirms the Aug. 3 national USA Network window." },
  { id:"plum-athletic", source:"Kelsey Plum hits game winner in Mercury debut", outlet:"The Athletic", category:"Players & Coaches", date:"Aug. 3", sentiment:"Strongly Positive", themes:["Clutch performance","Fit","Competitive impact"], confidence:"High", url:"https://www.nytimes.com/athletic/7491006/2026/08/03/kelsey-plum-hits-game-winner-in-debut-with-phoenix-mercury/", evidence:"Postgame player framing and game-winner context.", quote:"It’s a cocktail for success, as far as I’m concerned.", quoteType:"Direct quote", speaker:"Kelsey Plum", speakerRole:"Phoenix Mercury guard", quoteContext:"On Phoenix’s combination of talent and competitive fit" },
  { id:"tibbetts", source:"Nate Tibbetts postgame at Chicago", outlet:"Phoenix Mercury / YouTube", category:"Players & Coaches", date:"Aug. 3", sentiment:"Positive", themes:["Fit","Basketball intelligence"], confidence:"High", url:"https://www.youtube.com/watch?v=5P5UqyveAOU&t=272s", evidence:"Official postgame availability at 4:32.", quote:"It’s just a natural fit. She’s super smart. She loves the game.", quoteType:"Direct quote", speaker:"Nate Tibbetts", speakerRole:"Phoenix Mercury head coach", quoteContext:"On Plum’s early fit with Phoenix" },
  { id:"copper-thomas", source:"Alyssa Thomas and Kahleah Copper postgame", outlet:"Phoenix Mercury / YouTube", category:"Players & Coaches", date:"Aug. 3", sentiment:"Positive", themes:["Closing defense","Resilience"], confidence:"High", url:"https://www.youtube.com/watch?v=2K4RDcfkItk&t=105s", evidence:"Official postgame availability at 1:45.", quote:"It was just important for us to string together some stops.", quoteType:"Direct quote", speaker:"Kahleah Copper", speakerRole:"Phoenix Mercury guard", quoteContext:"On the closing defensive stretch" },
  { id:"bonner-copper", source:"Copper and Bonner postgame availability", outlet:"Phoenix Mercury / YouTube", category:"Players & Coaches", date:"Aug. 3", sentiment:"Positive", themes:["Resilience","Team response"], confidence:"Medium", url:"https://www.youtube.com/watch?v=pTk6gNpUclQ", evidence:"Official availability; Bonner emphasized pride in the group’s fight.", quote:"I’m super proud of us and super proud of the way we fought.", quoteType:"Direct quote", speaker:"DeWanna Bonner", speakerRole:"Phoenix Mercury forward", quoteContext:"On the group’s response and finish" },
  { id:"sky-presser", source:"Chicago Sky postgame vs. Phoenix", outlet:"Chicago Sky / YouTube", category:"Players & Coaches", date:"Aug. 3", sentiment:"Mixed", themes:["Opponent reaction","Closing execution"], confidence:"High", url:"https://www.youtube.com/watch?v=WumO-h0RNAc&t=377s", evidence:"Official opponent availability at 6:17.", quote:"You score 101 points on your home floor, you’re supposed to win. This one hurts.", quoteType:"Direct quote", speaker:"Courtney Vandersloot", speakerRole:"Chicago Sky guard", quoteContext:"On Chicago’s 106–101 home loss" },
  { id:"azcentral-debut", source:"Kelsey Plum’s Mercury debut", outlet:"The Arizona Republic", category:"Local Media", date:"Aug. 3", sentiment:"Positive", themes:["Immediate impact","Clutch performance"], confidence:"Medium", url:"https://www.azcentral.com/story/sports/wnba/mercury/2026/08/03/kelsey-plum-mercury-debut/91152018007/", evidence:"Phoenix-market coverage centered the minutes-restricted 20 points and late shot." },
  { id:"azcentral-reaction", source:"Mercury reaction to Kelsey Plum trade", outlet:"The Arizona Republic", category:"Local Media", date:"Aug. 3", sentiment:"Positive", themes:["Trade validation","Team reaction"], confidence:"Medium", url:"https://www.azcentral.com/story/sports/wnba/mercury/2026/08/03/kelsey-plum-trade-reaction/91158433007/", evidence:"Local framing connected rapid arrival, locker-room reception and debut impact." },
  { id:"burn-city", source:"Plum debut and Thomas triple-double lift Phoenix", outlet:"Burn City Sports", category:"Local Media", date:"Aug. 3", sentiment:"Positive", themes:["Clutch performance","Star collective"], confidence:"Medium", url:"https://burncitysports.com/2026/08/03/kelsey-plum-phoenix-mercury-debut-ch/", evidence:"Phoenix specialist coverage paired Plum’s debut with Thomas’s 27th career triple-double.", quote:"It’s been a crazy 48 hours. But to be received like that from teammates, from the staff, from the organization, I’m just super grateful.", quoteType:"Direct quote", speaker:"Kelsey Plum", speakerRole:"Phoenix Mercury guard", quoteContext:"On her welcome to Phoenix" },
  { id:"phnx-podcast", source:"PHNX Mercury podcast channel", outlet:"PHNX Sports / Apple Podcasts", category:"Local Media", date:"Aug. 4", sentiment:"Positive", themes:["Local excitement","Trade debate"], confidence:"Medium", url:"https://podcasts.apple.com/us/podcast/phnx-mercury/id1620567993", evidence:"Accessible channel page; episode-level reaction was not fully indexed during the window." },
  { id:"espn-recap", source:"Copper scores 31; Plum adds 20 in Phoenix debut", outlet:"ESPN / AP", category:"National Media", date:"Aug. 3", sentiment:"Positive", themes:["Immediate impact","Game result"], confidence:"High", url:"https://www.espn.com/wnba/recap/_/gameId/401857113", evidence:"National recap led with Copper and Plum’s combined scoring impact." },
  { id:"espn-trade", source:"Sparks trade All-Star guard Kelsey Plum to Mercury", outlet:"ESPN", category:"National Media", date:"Aug. 2", sentiment:"Mixed", themes:["Trade cost","Future commitment"], confidence:"High", url:"https://www.espn.com/wnba/story/_/id/49510767/sparks-trade-all-star-guard-kelsey-plum-mercury", evidence:"Transaction details and the unresolved 2027 free-agency context." },
  { id:"usa-today", source:"Plum trade, arrival and first game", outlet:"USA Today", category:"National Media", date:"Aug. 3", sentiment:"Positive", themes:["Professionalism","Clutch performance"], confidence:"Medium", url:"https://www.usatoday.com/story/sports/wnba/mercury/2026/08/03/kelsey-plum-mercury-trade-sparks-playing/91158922007/", evidence:"National vertical followed Plum’s rapid transition and decisive final shot.", quote:"But that’s why I’m a professional. I’m paid to play basketball at the highest level, and that’s what I’m going to do tonight.", quoteType:"Direct quote", speaker:"Kelsey Plum", speakerRole:"Phoenix Mercury guard", quoteContext:"Pregame, on making a rapid transition after the trade" },
  { id:"sun-times-plum", source:"Plum lands in a new dimension; Sky pay for it", outlet:"Chicago Sun-Times", category:"National Media", date:"Aug. 3", sentiment:"Positive", themes:["Offensive fit","Opponent view"], confidence:"High", url:"https://chicago.suntimes.com/chicago-sky/2026/08/03/all-star-kelsey-plum-lands-in-a-new-dimension-and-the-sky-had-to-pay-for-it", evidence:"Opponent-market framing emphasized Phoenix’s added dimensions and 12-point fourth-quarter swing.", quote:"This isn’t just a 14- or 15-game rental in our mind; this is something we want to build upon.", quoteType:"Direct quote", speaker:"Nate Tibbetts", speakerRole:"Phoenix Mercury head coach", quoteContext:"On the organization’s longer-term view of Plum" },
  { id:"sun-times-officiating", source:"Sky coach criticizes Cardoso officiating", outlet:"Chicago Sun-Times", category:"National Media", date:"Aug. 3", sentiment:"Negative", themes:["Officiating","Opponent frustration"], confidence:"High", url:"https://chicago.suntimes.com/chicago-sky/2026/08/03/after-mercury-loss-sky-coach-tyler-marsh-rips-officiating-of-kamilla-cardoso-its-a-joke", evidence:"Material counter-frame: Chicago’s coach criticized the whistle while also acknowledging his team fouled too often.", quote:"It was a joke. It’s a [expletive] joke. How many more games does she need to go without getting a free throw?", quoteType:"Direct quote", speaker:"Tyler Marsh", speakerRole:"Chicago Sky head coach", quoteContext:"On the officiating of Kamilla Cardoso" },
  { id:"yahoo-first", source:"Plum’s first Mercury basket", outlet:"Yahoo Sports Video", category:"Creators", date:"Aug. 3", sentiment:"Positive", themes:["Highlight circulation","First impression"], confidence:"Medium", url:"https://sports.yahoo.com/articles/watch-kelsey-plum-first-bucket-015854138.html", evidence:"First-bucket clip packaged the immediate-arrival moment for replay audiences." },
  { id:"yahoo-top", source:"Plum’s top points vs. Chicago", outlet:"Yahoo Sports Video", category:"Creators", date:"Aug. 3", sentiment:"Positive", themes:["Highlight circulation","Clutch performance"], confidence:"Medium", url:"https://sports.yahoo.com/videos/kelsey-plum-top-points-vs-032636015.html", evidence:"Highlight package centered her 20-point debut and late three." },
  { id:"wnba-vibes", source:"20 points in Plum’s Mercury debut", outlet:"r/WNBAVibes", category:"Creators", date:"Aug. 4", sentiment:"Positive", themes:["Visual culture","Fan creator"], confidence:"Medium", url:"https://www.reddit.com/r/WNBAVibes/comments/1vf01jl/20_points_in_kelsey_plums_phoenix_mercury_debut/", evidence:"Public creator-style community post; limited accessible comments at capture time." },
  { id:"reddit-wnba-post", source:"Post-match thread: Mercury 106, Sky 101", outlet:"r/wnba", category:"Fans", date:"Aug. 4", sentiment:"Positive", themes:["Fit","Tune-in intent","Clutch performance"], confidence:"Medium", url:"https://www.reddit.com/r/wnba/comments/1veyoii/post_match_thread_wnba_the_mercury_defeat_the_sky/", evidence:"Broad league community sample; praise for fit and late-game play mixed with officiating criticism.", quote:"This is very fun for the Mercury. I will be tuning in for sure.", quoteType:"Direct quote" },
  { id:"reddit-wnba-live", source:"Live game thread: Chicago vs. Phoenix", outlet:"r/wnba", category:"Fans", date:"Aug. 3–4", sentiment:"Positive", themes:["Real-time excitement","Fit","Humor"], confidence:"Medium", url:"https://www.reddit.com/r/wnba/comments/1veml0p/match_thread_chicago_sky_vs_phoenix_mercury_live/", evidence:"Real-time comments moved from curiosity to fit and closer language after the late three.", quote:"And that’s why you trade for KP lol.", quoteType:"Direct quote" },
  { id:"reddit-phx-post", source:"Mercury post-match thread", outlet:"r/PHXMercury", category:"Fans", date:"Aug. 4", sentiment:"Positive", themes:["Team excitement","Long-term stay"], confidence:"Medium", url:"https://www.reddit.com/r/PHXMercury/comments/1veyofd/post_match_thread_wnba_the_mercury_defeat_the_sky/", evidence:"Home-community sample was strongly positive but repeatedly returned to re-signing.", quote:"I KNEW this was going to be great. KP is a natural Mercury.", quoteType:"Direct quote" },
  { id:"reddit-sky-post", source:"Sky postgame thread", outlet:"r/ChicagoSky", category:"Fans", date:"Aug. 4", sentiment:"Mixed", themes:["Opponent reaction","Closing execution"], confidence:"Medium", url:"https://www.reddit.com/r/ChicagoSky/comments/1veyohp/post_game_thread_wnba_the_mercury_defeat_the_sky/", evidence:"Opponent fans credited Plum down the stretch while focusing on Chicago’s collapse and the whistle.", quote:"Honestly not too upset about this one. Plum was great down the stretch.", quoteType:"Direct quote" },
  { id:"reddit-welcome", source:"Mercury hotel welcome reaction", outlet:"r/WNBA365", category:"Fans", date:"Aug. 3", sentiment:"Strongly Positive", themes:["Welcome","Player affinity","Brand transfer"], confidence:"Medium", url:"https://www.reddit.com/r/WNBA365/comments/1verxca/the_mercury_surprised_kelsey_plum_as_she_arrived/", evidence:"Fans responded emotionally to the welcome; one visible commenter said the moment made them a Mercury fan.", quote:"And just like that, I’m a Merc fan.", quoteType:"Direct quote" },
  { id:"reddit-trade-official", source:"Official trade announcement discussion", outlet:"r/wnba", category:"Fans", date:"Aug. 2", sentiment:"Mixed", themes:["Trade cost","Future commitment","Identity"], confidence:"Medium", url:"https://www.reddit.com/r/wnba/comments/1vdry6g/the_mercury_officially_announce_the_kelsey_plum/", evidence:"Large visible thread paired excitement with sharp rental-cost skepticism." },
  { id:"reddit-phoenix", source:"Phoenix community trade discussion", outlet:"r/phoenix", category:"Fans", date:"Aug. 2", sentiment:"Mixed", themes:["Local awareness","Draft capital","Re-signing"], confidence:"Medium", url:"https://www.reddit.com/r/phoenix/comments/1vdaihq/the_mercury_just_acquired_kelsey_plum/", evidence:"Local general-interest community showed awareness and optimism but worried about draft cost and permanence." },
  { id:"reddit-sparks", source:"Sparks community trade reaction", outlet:"r/LASparks", category:"Fans", date:"Aug. 2", sentiment:"Mixed", themes:["Former-team reaction","Loss","Trade value"], confidence:"Medium", url:"https://www.reddit.com/r/LASparks/comments/1vda7hn/kelsey_plum_traded_to_phoenix_mercury/", evidence:"Former-team reaction was emotionally mixed: organizational approval, player sadness and relief coexisted." },
  { id:"reddit-trade-mega", source:"2026 trade deadline megathread", outlet:"r/wnba", category:"Fans", date:"Aug. 2", sentiment:"Negative", themes:["Trade skepticism","Timing"], confidence:"Medium", url:"https://www.reddit.com/r/wnba/comments/1vdjfsk/2026_wnba_trade_deadline_megathread_general_talk/", evidence:"Representative skeptical frame questioned Phoenix’s timing and why Plum accepted the move." },
];

export const methodology = {
  searched: "Official WNBA and Mercury properties; official postgame video; ESPN/AP, The Athletic, USA Today, Arizona Republic, Chicago Sun-Times and Phoenix specialist coverage; Yahoo video; podcast indexes; Reddit communities; public search results for Instagram, TikTok, X and YouTube.",
  selection: "Items were included when they added a distinct verified fact, quotation, framing or audience signal. Duplicates, unattributed reposts and inaccessible claims without a stable source trail were removed.",
  sentiment: "Each item was classified by its expressed evaluation of Plum’s debut, the acquisition or the emerging Mercury story—not by whether Phoenix won. Mixed items contain meaningful positive and negative signals.",
  limitations: "The sample is curated and nonrepresentative. Direct access to X, Instagram and TikTok was limited; public indexes, embedded material and linked reposts were used where traceable. Creator coverage was still developing within the short reporting window. Engagement counts were not used unless publicly visible and stable.",
};
