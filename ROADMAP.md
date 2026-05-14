# ROADMAP

## UI Primitives

- [ ] Replace the manual mobile nav menu in `components/layout/navbar.tsx` with a Radix/shadcn `Sheet`.
- [ ] Replace CTA-styled raw `Link` and `a` elements with `Button asChild` variants.
- [ ] Add `Card`, `CardHeader`, `CardTitle`, `CardContent`, and `CardFooter` primitives for repeated content blocks.
- [ ] Replace the hours table in `app/contact/page.tsx` with shadcn `Table` primitives and an accessible caption or label.
- [ ] Replace the local lightweight form primitives with full shadcn-compatible `Form`, `Field`, `Label`, `Select`, and error-message primitives.
- [ ] Add `Badge` for menu tags, catering package flags, and similar metadata chips.
- [ ] Add `Separator` for footer/nav/section dividers instead of one-off border markup.
- [ ] Add `Skeleton` for future loading states and route-level fallbacks.

## Navigation And Prefetching

- [ ] Add a local `components/link.tsx` wrapper modeled after `test-create-next-app`.
- [ ] Use the link wrapper for all internal navigation instead of importing `next/link` directly.
- [ ] Add hover and viewport route prefetching with safe external-link handling.
- [ ] Add `app/api/prefetch-images/[...rest]/route.ts` to discover and prefetch route images.
- [ ] Add `linkedom` if the image-prefetch route is implemented.
- [ ] Keep `tel:`, `mailto:`, fragment, and external links on native anchors with correct `rel` behavior.

## Images And Media

- [ ] Add `sizes` to every `next/image` usage with `fill`.
- [ ] Keep `priority` only on the true LCP hero image.
- [ ] Remove `priority` from the navbar logo unless field data shows it helps.
- [ ] Add blur or dominant-color placeholders for large food and exterior photos.
- [ ] Audit rendered image dimensions so gallery/menu cards do not request oversized assets.
- [ ] Remove unused starter SVG assets from `public/` if no longer referenced.

## SEO And PWA

- [ ] Add `app/manifest.ts` using the Bar-B-Que Wagon name, theme colors, and generated icons.
- [ ] Add `app/robots.ts` with a sitemap reference.
- [ ] Add `app/sitemap.ts` for public routes.
- [ ] Add a small project metadata module so URLs, title, description, and route policy do not drift.
- [ ] Add `metadataBase` to root metadata.
- [ ] Add stronger OpenGraph and Twitter image metadata.
- [ ] Add `app/not-found.tsx`.
- [ ] Add `app/error.tsx`.
- [ ] Add `app/global-error.tsx`.

## Accessibility

- [ ] Ensure the mobile nav traps focus, closes on Escape, restores focus, and exposes title/description semantics.
- [ ] Add consistent `focus-visible` rings to all buttons, links, inputs, selects, and textareas.
- [ ] Replace the footer Instagram `href="#"` with a real URL or remove it.
- [ ] Add an accessible label or caption to the contact hours table.
- [ ] Ensure form fields set `aria-invalid` and connect errors with `aria-describedby`.
- [ ] Add `prefers-reduced-motion` handling for decorative ember/smoke animations.
- [ ] Check contrast for muted warm-gray text on smoky backgrounds.
- [ ] Confirm icon-only links and buttons have stable accessible names.

## Performance And Operations

- [ ] Keep React Compiler opt-in only; benchmarks showed preflight does not help this project by default.
- [ ] Preserve Turbopack as the default build path.
- [ ] Keep the protected `bun lint` push gate as the source of truth for lint/type failures.
- [ ] Add Vercel Speed Insights or equivalent production performance feedback if desired.
- [ ] Add route-level loading states once there are dynamic pages worth streaming.
- [ ] Add smoke tests for contact and catering route handlers once Convex production env vars are available.
- [ ] Configure `CONVEX_DEPLOYMENT` and `CONVEX_DEPLOY_KEY` secrets before expecting CI to deploy Convex functions.
