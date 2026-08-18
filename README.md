# The Echo

Reusable AVC perception and sentiment intelligence for Phoenix Suns ownership and Phoenix Mercury leadership.

Current edition: **The Echo: The Number That Stayed** — August 16, 2026.

Production: `https://meltckr.github.io/the-echo/`

## Update the next edition

1. Replace edition-level copy, audience signals, themes, watch items, implications and source records in `data/edition.ts`.
2. Add a visibly edition-specific source photo and generate a new 1200×630 professional share card under a new filename; update both Open Graph and Twitter metadata to that exact file.
3. Update page metadata in `app/layout.tsx`.
4. Run `npm run release:check`.
5. Commit and push to `main`. The GitHub Pages workflow builds and publishes the static `out/` directory.

The UI components and section architecture live in `app/Dashboard.tsx`; the visual system is in `app/globals.css`. Preserve those files for future editions unless a reusable functional or accessibility improvement is required. The audio console must retain a finger-draggable progress track, visible played-progress fill, 15-second back/forward controls, and pitch-preserving 1×, 1.25×, 1.5× and 2× playback; a modest 1.1× default is acceptable when the natural render needs slightly more momentum. Keep the published narration clean: do not use phase-vocoder time stretching, heavy compression, hard limiting or pitch shifting to manufacture pace or loudness. At 1×, the source narration should sound conversational rather than slow, generally landing near 155–165 spoken words per minute. Preview the opening before a full render, rewrite pronunciation-ambiguous homographs, and version replacement audio filenames so mobile browsers cannot serve a stale recording.
