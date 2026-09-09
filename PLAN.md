# PLAN.md — barbquewagon.com

**Project:** Barbque Wagon — Bryson City, NC BBQ & Catering Website  
**Stack at HEAD:** Next.js 16, TypeScript, Tailwind CSS 4, Convex, Resend, Zod, react-hook-form, Sentry, PostHog, Vercel  
**Status:** Live marketing site on the Vercel alias; forms wired to Convex

**Live homepage:** https://barbquewagoncom.vercel.app  
Apex `barbquewagon.com` has no DNS. Canonical, JSON-LD, and Open Graph point at the alias.

## Pages (present)

- `/` — Homepage with hero, menu highlights, CTA
- `/menu` — Full menu
- `/about` — Story
- `/catering` — Catering services & inquiry form (Bryson City, NC)
- `/contact` — Contact form

## Current State (aligned to HEAD)

### Shipped / present
- ✅ Marketing pages above
- ✅ Contact + catering client forms (`app/contact/contact-form.tsx`, `app/catering/catering-form.tsx`)
- ✅ API routes `POST /api/contact` and `POST /api/catering` with Zod validation
- ✅ **Convex** `leads` schema + `leads:create` mutation; `lib/lead-store.ts` persists when Convex accepts writes
- ✅ **Resend** code path exists; production has no `RESEND_API_KEY` / `FROM_EMAIL`
- ✅ Form routes never 500 on Convex/Resend failure — they return 503 and tell the visitor to call
- ✅ JSON-LD structured data; logo/public assets; Bryson City copy (Lexington corrected)
- ✅ Footer Facebook URL is real; Instagram pound-sign control removed (no real profile)
- ✅ Vercel deploy path on `main` (git deploys off; Blacksmith prebuilt ship)

### Honesty gaps
- ⬜ Convex production (`prod:clean-goldfinch-839`) is over the free plan — mutations return Server Error until the plan is upgraded
- ⬜ Production mail: add `RESEND_API_KEY` + `FROM_EMAIL` on a verified domain (not `barbquewagon.com` — apex is dark)
- ⬜ ROADMAP still lists UI/SEO polish (Sheet nav, sitemap/robots, OG images, etc.)

## Next Steps (real remaining)

- [ ] Upgrade Convex or add Resend on a verified sending domain so form submits actually land
- [ ] SEO: `robots.ts` / `sitemap.ts` / stronger OG (see ROADMAP)
- [ ] Optional: Google Maps embed, photo gallery

### Explicitly done (do not re-open)
- Wire catering/contact forms to backend
- Convex schema for form submissions
- Stop form 500s when Resend is unset
- Footer Instagram `href="#"` (removed)
- Point homepage / schema / canonical at the Vercel alias

*PLAN parity sync: 2026-09-09 — live URL is the Vercel alias; Instagram stub gone; forms return 503 with the phone number when Convex/Resend cannot accept a lead.*
