# The Echo

Reusable AVC perception and sentiment intelligence for Phoenix Suns ownership and Phoenix Mercury leadership.

Current edition: **The Echo: The Plum Effect** — August 3, 2026.

Production: `https://meltckr.github.io/the-echo/`

## Update the next edition

1. Replace edition-level copy, audience signals, themes, watch items, implications and source records in `data/edition.ts`.
2. Replace the share-card source photo at `public/assets/share/` and update `scripts/generate-og.mjs` if the crop needs to change.
3. Update page metadata in `app/layout.tsx`.
4. Run `npm run release:check`.
5. Commit and push to `main`. The GitHub Pages workflow builds and publishes the static `out/` directory.

The UI components and section architecture live in `app/Dashboard.tsx`; the visual system is in `app/globals.css`. Preserve those files for future editions unless a reusable functional or accessibility improvement is required.
