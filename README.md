# Bar-B-Que Wagon

Restaurant website for Bar-B-Que Wagon — Bryson City, NC BBQ.

**Live:** https://barbquewagoncom.vercel.app

Apex `barbquewagon.com` has no DNS. The homepage is the Vercel alias. Do not fight the apex.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Icons:** Phosphor Icons
- **Validation:** Zod
- **Notifications:** Sonner

## Pages

- `/` — Home / landing page
- `/menu` — Menu
- `/about` — About
- `/catering` — Catering info
- `/contact` — Contact form

## Getting Started

```bash
bun install
bun dev
```

## Deployment

Vercel project `barbquewagon.com` (team hustle-launch). Git deploys on `main` are off. Ship the prebuilt output with `bun ship` / Blacksmith `ship.yml`.
