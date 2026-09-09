# TODO.md — barbquewagon.com

## Active

- [ ] Add production `RESEND_API_KEY` + `FROM_EMAIL` on a verified domain (Convex is already set; mail is skipped until then)
- [ ] Add `robots.ts` / `sitemap.ts` + stronger OpenGraph (see ROADMAP)

## Done (do not re-open)

- [x] Wire catering/contact forms to API + Resend
- [x] Convex `leads` schema + `saveLead` persistence when configured
- [x] Zod validation + error handling on contact/catering forms
- [x] Bryson City copy correction
- [x] Remove footer Instagram `href="#"` (no real profile; Facebook stays)
- [x] Point homepage / JSON-LD / canonical at https://barbquewagoncom.vercel.app
- [x] Stop form 500s when Resend env is missing

## Backlog

- [ ] Google Maps embed for location
- [ ] Photo gallery section
- [ ] shadcn Sheet mobile nav / Button-asChild CTAs (ROADMAP UI primitives)
