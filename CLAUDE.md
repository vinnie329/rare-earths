# Rare Earth Index

## Design System

Visual direction: contemporary gallery / product website aesthetic.

### Actionable Rules

- **Typography as texture**: Uppercase grotesque/sans-serif at large scale used as compositional element, not just information hierarchy
- **Weight over color**: Monochromatic palette — bold/regular weight contrast does the work that color normally would
- **Warm neutrals only**: Off-white (#f2f2f0), pale stone, light gray. Never pure white, never cool grays
- **Superscript numbering**: `(01)`, `(02)` patterns as typographic ornament throughout
- **Fine borders + rounded corners**: 1px borders on structural lines; rounded corners on card-like secondary content areas (pills, overlays, tags)
- **Scale contrast**: Small-scale utility text (labels, metadata, toggles) at ~0.65–0.75rem to contrast with heroic display type
- **Whitespace confidence**: Let type scale and negative space carry hierarchy. Don't fill gaps with decoration
- **List-as-layout**: Navigation/index items are the visual centerpiece, not secondary UI

### Art Direction (aspirational, not yet in code)

- Object photography treated as museum display — isolated subjects floating in space, occasionally breaking through the type layer
- Restrained luxury — confident enough to let whitespace and type scale do the heavy lifting

## Tech Stack

- Next.js (App Router) with TypeScript
- Tailwind CSS (imported but vanilla CSS handles layout/design system)
- No component library — custom components only

## Project Structure

- `src/data/elements.ts` — All 17 rare earth element records
- `src/components/Sidebar.tsx` — Index sidebar (full-screen on mobile)
- `src/components/ElementProfile.tsx` — Element detail view
- `src/app/globals.css` — All styles (CSS variables, no CSS modules)
- `src/app/page.tsx` — Root page with index/detail state management

## Design Lab (`/lab`)

Exploration environment for comparing layout and component variants side by side.

- `/lab` — Landing page
- `/lab/layouts` — Scaled iframe grid of all layout variants
  - `/lab/layouts/a` — Sidebar Index (current)
  - `/lab/layouts/b` — Horizontal Strip (full-bleed hero + scrolling element bar)
  - `/lab/layouts/c` — Editorial Grid (magazine-style, prev/next nav, symbol watermark)
- `/lab/components` — Isolated component variants rendered directly
  - Hero section (3 variants: left-aligned, centered watermark, minimal extreme)
  - Data grid (3 variants: structured columns, rounded cards, horizontal scroll)
  - Navigation (3 variants: vertical list, symbol grid, horizontal pills)

To add a new layout variant: create `/lab/layouts/[id]/page.tsx` and add it to the variants array in `/lab/layouts/page.tsx`.
To add a new component variant: add it to the relevant section in `/lab/components/page.tsx`.
