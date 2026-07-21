# SEO Checklist

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-21
Related: [Website Strategy](./website-strategy.md) · [Content Strategy](../marketing/content-strategy.md) · [Blog Standards](../marketing/blog-standards.md) · [Topic Clusters](../marketing/topic-clusters.md) · [Roadmap](./roadmap.md)

---

## Why this document exists

Organic search is our compounding growth engine: technical articles that keep attracting engineers for years. It only compounds if the technical foundation is correct and every article follows the same rules. This is the operational checklist.

Rule of thumb: **write for engineers first, for crawlers second.** Content that genuinely helps an engineer is what ranks and earns trust.

---

## 1. Foundations (site-wide, in place)

- [ ] `metadataBase` from `NEXT_PUBLIC_BASE_URL` (via `lib/siteConfig.ts`).
- [ ] Correct root and per-locale metadata (title template, real description).
- [ ] Dynamic `app/sitemap.ts` includes home, both locales, `/blog`, every article, and (when built) topic and author pages.
- [ ] `app/robots.ts` allows crawling, disallows internal/utility routes, points to the sitemap.
- [ ] Dynamic OpenGraph image (`app/opengraph-image.tsx`).
- [ ] `next-intl` localization (pt-BR, en-US), full parity.
- [ ] `verification.google` via env when verifying in Search Console.

---

## 2. Per-article checklist

Complete all before an article is shippable.

### Metadata
- [ ] Unique, descriptive `title` (~50 to 60 chars) matching search intent.
- [ ] Unique `description` (~150 to 160 chars) written for a human.
- [ ] `alternates.canonical` set to the article's own URL.
- [ ] `alternates.languages` for pt-BR and en-US (hreflang).

### Social
- [ ] OpenGraph and Twitter card set; cover image resolves.

### Structure and content
- [ ] Exactly one `h1`, then ordered `h2`/`h3` describing the content.
- [ ] Search intent addressed in the first screen.
- [ ] Descriptive, keyword-bearing, kebab-case slug (stable once published).
- [ ] Author and publish/updated date present (feed `Article` schema and byline).
- [ ] Accurate reading time.
- [ ] Meaningful `alt` on images; `aria-hidden` on decorative ones.
- [ ] Both locales exist with parity.
- [ ] No thin content: every article earns its place by helping an engineer.

### Structured data (JSON-LD)
- [ ] Article: `BlogPosting` (or `TechArticle` where appropriate) plus `BreadcrumbList`.
- [ ] Blog listing: `Blog` with `blogPost` entries.
- [ ] Author pages (planned): `Person`.
- [ ] Validate with Google's Rich Results Test before shipping.

---

## 3. Topic clusters and internal linking

This is how we build topical authority (see [Topic Clusters](../marketing/topic-clusters.md)).

- [ ] Each article belongs to a defined cluster (Next.js, NestJS, Node.js, TypeScript, databases, testing, CI/CD, architecture, performance, DX, AI for developers).
- [ ] Pillar pages link down to cluster articles; cluster articles link up to the pillar and across to siblings.
- [ ] Every article links to 2 to 4 genuinely related articles with descriptive anchor text.
- [ ] Category pages exist and are indexable, grouping each cluster.
- [ ] Author pages (planned) link an engineer's articles together.

---

## 4. Evergreen and freshness

- [ ] Prefer evergreen, deeply useful topics over news that decays (with room for timely trend pieces).
- [ ] Keep flagship articles updated; refresh code and versions, and note "last updated".
- [ ] Improve an existing ranking article before writing a new competing one.

---

## 5. Core Web Vitals

Search and engineers both reward fast, stable pages. See [UX Principles](./ux-principles.md).

- [ ] LCP low: minimal priority images, inline SVG/CSS, server-first rendering.
- [ ] No layout shift (CLS): reserve space for media and code.
- [ ] Minimal client JavaScript; static generation for content.
- [ ] Fonts via `next/font` with `display: swap`.
- [ ] Lighthouse performance and SEO checked on changed pages.

---

## 6. Indexation hygiene

- [ ] Articles, listing, topic, and author pages: indexable and in the sitemap.
- [ ] Utility/internal routes: excluded from robots and sitemap.
- [ ] No duplicate content across locales (hreflang) or trailing-slash variants.
- [ ] Canonical always points to the preferred URL.
- [ ] Unknown slugs/locales handled with `notFound()`.

---

## 7. Off-page and discoverability

- [ ] Google Search Console verified; sitemap submitted.
- [ ] Track top queries, entrances, and landing articles; feed learnings into the [Content Backlog](../marketing/content-backlog.md).
- [ ] Earn links honestly: useful content shared in developer communities and on LinkedIn.
- [ ] LinkedIn discoverability: consistent company-page posting that links back to articles (see [LinkedIn Growth Playbook](../marketing/linkedin-growth-playbook.md)).
- [ ] Keep `sameAs` profiles accurate.

---

## 8. Common mistakes to avoid

- Duplicate or missing titles/descriptions.
- Missing hreflang (locales competing) or wrong canonical.
- Writing for crawlers instead of engineers; keyword stuffing.
- Shipping a route without adding it to the sitemap.
- Thin or inaccurate content (also a trust violation, see [Brand Positioning](../company/brand-positioning.md)).

---

## Maintaining this document

Update when Next.js SEO capabilities change, when a new page type ships (topic, author), or when Search Console reveals a recurring issue. Keep every item concrete and checkable.
