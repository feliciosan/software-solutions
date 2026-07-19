# SEO Checklist

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-19
Related: [Website Strategy](./website-strategy.md) · [Content Strategy](../marketing/content-strategy.md) · [Blog Standards](../marketing/blog-standards.md) · [Roadmap](./roadmap.md) · [Engineering Standards](../engineering/engineering-standards.md)

---

## Why this document exists

Organic search is our compounding growth channel: content written once that attracts in-profile founders for years. But SEO only compounds if the technical foundation is correct and every new page follows the same rules. This is the operational checklist that turns "we should do SEO" into "here is exactly what every page must have." It reflects how SEO is actually implemented in the codebase (Next.js metadata API, JSON-LD, dynamic sitemap and robots, `next-intl` localization).

Rule of thumb: **write for founders first, for crawlers second.** Content that genuinely helps a founder is what ranks and converts. Everything below makes sure that content is discoverable and correctly understood.

---

## 1. Foundations (site-wide, already in place)

These exist and must not regress:

- [ ] `metadataBase` set from `NEXT_PUBLIC_BASE_URL` (via `lib/siteConfig.ts` `baseUrl`), so relative URLs resolve correctly.
- [ ] Root and per-locale metadata correct (title template `%s | CodaCrew`, real brand description). No leftover placeholder titles.
- [ ] Dynamic `app/sitemap.ts` includes home, both locales, `/blog`, and every post; updated whenever routes are added.
- [ ] `app/robots.ts` allows crawling, disallows `/api/`, `/calculadora-interna`, `/demos/`, and points to the sitemap. No stale static `robots.txt`.
- [ ] Dynamic OpenGraph image (`app/opengraph-image.tsx`) reflects current positioning.
- [ ] `next-intl` localization with `pt-BR` and `en-US`, full parity.
- [ ] `verification.google` wired to `NEXT_PUBLIC_GOOGLE_VERIFICATION` (set when verifying in Search Console). See [Roadmap](./roadmap.md).

---

## 2. Per-page checklist (every new page or route)

Complete all of these before a page is considered shippable.

### Metadata
- [ ] Unique, descriptive `title` (roughly 50 to 60 characters), leads with the value, includes the brand via the template.
- [ ] Unique `description` (roughly 150 to 160 characters), written for a human, includes the primary intent naturally.
- [ ] Relevant, non-spammy `keywords` where used (do not stuff).
- [ ] `alternates.canonical` set to the page's own absolute URL.
- [ ] `alternates.languages` with `pt-BR` and `en-US` variants (hreflang).

### Social
- [ ] OpenGraph `title`, `description`, `url`, `siteName`, `locale`, `type` set.
- [ ] Twitter card (`summary_large_image`) set.
- [ ] OG image resolves (dynamic default or a page-specific image).

### Structure and content
- [ ] Exactly one `h1`, then ordered `h2`/`h3` that describe content.
- [ ] Primary intent addressed in the first screen of content.
- [ ] Internal links to relevant pages (services, related posts, home) with descriptive anchor text.
- [ ] Images have meaningful `alt`; decorative images are `aria-hidden`.
- [ ] Both `pt-BR` and `en-US` versions exist with parity.

### Structured data (JSON-LD)
- [ ] Home: `Organization` / `ProfessionalService` with founders, `hasOfferCatalog` (services), `sameAs`, `areaServed`.
- [ ] Blog listing: `Blog` with `blogPost` entries.
- [ ] Blog post: `BlogPosting` plus `BreadcrumbList`.
- [ ] Service pages (planned): `Service` schema. See [Roadmap](./roadmap.md).
- [ ] Validate with Google's Rich Results Test before shipping.

---

## 3. Content SEO (owned with Marketing)

Detail in [Content Strategy](../marketing/content-strategy.md) and [Blog Standards](../marketing/blog-standards.md).

- [ ] Each article targets one primary intent / keyword cluster mapped to an [ICP](../company/ideal-customer-profile.md) job to be done.
- [ ] Title and first paragraph make the promise and the payoff obvious.
- [ ] Scannable structure: headings, short paragraphs, lists.
- [ ] Internal links to related posts and to relevant service pages.
- [ ] Descriptive slug (kebab-case, keyword-bearing, stable once published).
- [ ] Author and publish date present (feeds `BlogPosting` schema).
- [ ] No thin content: every article earns its place by genuinely helping a founder.

---

## 4. Technical performance (Core Web Vitals)

Search rewards fast, stable pages, and so do founders. See [UI Principles](./ui-principles.md) and [Engineering Standards](../engineering/engineering-standards.md).

- [ ] LCP kept low: minimal `priority` images, inline SVG/CSS for hero visuals, server-first rendering.
- [ ] No layout shift (CLS): reserve space for media, avoid late-injected content.
- [ ] Ship minimal client JavaScript: Server Components by default, `"use client"` only where needed.
- [ ] Fonts via `next/font` with `display: swap`.
- [ ] Static generation (SSG) for content pages via `generateStaticParams`.
- [ ] Lighthouse performance and SEO checked on changed pages; no regressions.

---

## 5. Indexation hygiene

- [ ] Marketing pages: indexable, in the sitemap.
- [ ] Utility and funnel-only routes (`/calculadora-interna`, `/demos/`): excluded from robots and out of the sitemap.
- [ ] No duplicate content across locales (hreflang resolves this) or across trailing-slash variants.
- [ ] Canonical always points to the preferred URL of the page itself.
- [ ] 404s handled gracefully (`notFound()` for unknown slugs and locales).

---

## 6. Off-page and measurement

- [ ] Google Search Console verified and sitemap submitted (blocked on domain + verification token, see [Roadmap](./roadmap.md)).
- [ ] Track organic entrances, top queries, and top landing pages; feed learnings into the [Content Backlog](../marketing/content-backlog.md).
- [ ] Build backlinks honestly: useful content, guest posts, real relationships. No link schemes.
- [ ] Keep `sameAs` profiles (LinkedIn, GitHub) accurate and consistent.

---

## 7. Release gate for SEO

A page cannot ship unless:

- [ ] Metadata, canonical, and hreflang are present and correct.
- [ ] JSON-LD for the page type is present and validates.
- [ ] Sitemap and robots reflect the route.
- [ ] Both locales exist with parity.
- [ ] Core Web Vitals are not regressed.

This gate is part of the broader [Definition of Done](../engineering/definition-of-done.md) and the deploy quality gate in [Website Strategy](./website-strategy.md).

---

## 8. Common mistakes to avoid

- Duplicate or missing `title`/`description` across pages.
- Forgetting hreflang, causing the two locales to compete.
- Canonical pointing at the wrong URL (or missing entirely).
- Keyword stuffing or writing for crawlers instead of founders.
- Shipping a new route without adding it to the sitemap.
- Invented stats or claims in content (also a trust and honesty violation, see [Brand Positioning](../company/brand-positioning.md)).

---

## Maintaining this document

Update when Next.js SEO capabilities change, when we add a new page type (for example service landing pages), or when Search Console reveals a recurring issue. Keep it operational: every item should be a concrete thing someone can check.
