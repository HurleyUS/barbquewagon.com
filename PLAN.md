# PLAN.md — barbquewagon.com

**Project:** Barbque Wagon — Bryson City, NC BBQ & Catering Website  
**Stack at HEAD:** Next.js 16, TypeScript, Tailwind CSS 4, Convex, Resend, Zod, react-hook-form, Sentry, PostHog, Vercel  
**Status:** Live marketing site; forms wired

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
- ✅ **Resend** email notifications to owner on submit
- ✅ **Convex** `leads` schema + `leads:create` mutation; `lib/lead-store.ts` persists when `NEXT_PUBLIC_CONVEX_URL` is set
- ✅ JSON-LD structured data; logo/public assets; Bryson City copy (Lexington corrected)
- ✅ Vercel deploy path on `main`

### Honesty gaps
- ⬜ Footer Instagram still `href="#"` (Facebook URL is real) — replace or remove
- ⬜ Lead persist is no-op if Convex URL unset — confirm production env has Convex + `RESEND_API_KEY` / `OWNER_EMAIL`
- ⬜ ROADMAP still lists UI/SEO polish (Sheet nav, sitemap/robots, OG, etc.)

## Next Steps (real remaining)

- [ ] Replace footer Instagram `href="#"` with real profile URL (or drop the control)
- [ ] Verify production Convex + Resend env so `saveLead` + email both fire
- [ ] SEO: `robots.ts` / `sitemap.ts` / stronger OG (see ROADMAP)
- [ ] Optional: Google Maps embed, photo gallery

### Explicitly done (do not re-open)
- Wire catering/contact forms to backend
- Convex schema for form submissions
- Resend notifications on form submit

*PLAN parity sync: 2026-09-08 — forms/Resend/Convex leads are shipped; Instagram stub and env verification remain.*
