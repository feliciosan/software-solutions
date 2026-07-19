# Website Roadmap

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-19
Related: [Website Strategy](./website-strategy.md) · [SEO Checklist](./seo-checklist.md) · [Content Backlog](../marketing/content-backlog.md) · [Service Catalog](../sales/service-catalog.md) · [Engineering Standards](../engineering/engineering-standards.md)

History: this document replaced the original root-level `CODACREW_NEXT_STEPS.md` (now removed). It is the canonical roadmap for the website.

---

## Why this document exists

The initial repositioning shipped (new hero, positioning and copy in both locales, distributed CTAs, trust bar, Services, Process, Differentiators, Case Studies, Team, Footer, blog scaffold with two seed posts, and the full SEO foundation). This document tracks what comes next, in priority order, and the data/config items that must be validated for credibility. It is a living checklist, not a one-time plan.

Current state: `npm run build` passing (21 pages, `pt-BR` and `en-US`), `npm run lint` clean, message JSON valid.

---

## 0. Validation checklist (do first: data and config)

Quick but credibility-blocking. Owner action required.

- [ ] **`NEXT_PUBLIC_BASE_URL`**: confirm the real production domain (fallback is `https://codacrew.com`).
- [ ] **Founders' LinkedIn URLs**: currently point to the company page placeholder in `lib/siteConfig.ts` (`founders[].linkedin`). Replace with personal profiles.
- [ ] **Social handles**: verify `github.com/codacrew`, `linkedin.com/company/codacrew`, and Twitter `@codacrew` (used in JSON-LD and Twitter cards).
- [ ] **`NEXT_PUBLIC_GOOGLE_VERIFICATION`**: set when verifying in Google Search Console, then submit the sitemap.
- [ ] **Homepage stats `50+` and `100%`** in `components/FinalCtaSection.tsx` (hardcoded, inherited from the old site): validate or adjust so every claim is verifiable. `12+ years` is real. See the honesty rule in [Brand Positioning](../company/brand-positioning.md).
- [ ] **`/mvp` page cases** ("Acquired for EUR 350k," "EUR 8.5k MRR"): out of scope during the reposition; review for the same veracity standard.

---

## 1. High priority

### 1.1 Service landing pages (SEO plus conversion)
Dedicated, SEO-focused pages per service. Structure is ready to reuse (`lib/siteConfig.ts` services plus the homepage metadata and JSON-LD pattern). See [Service Catalog](../sales/service-catalog.md).

- [ ] `/mvp-development`
- [ ] `/saas-development`
- [ ] `/ai-development`
- [ ] `/team-augmentation`
- [ ] (optional) `/product-modernization`

Each page: unique H1 and founder-facing copy, problem and solution, process, relevant cases, FAQ, CTA, canonical, OpenGraph, and `Service` schema. Repoint the homepage Services cards to these instead of the `#services` anchor.

### 1.2 Finish the validation checklist (Section 0)
Nothing above ships as "done" until the underlying data is real.

---

## 2. Medium priority

### 2.1 Blog content
- [ ] Write the remaining articles from the backlog (two real seed posts exist in `pt-BR` and `en-US`). See [Content Backlog](../marketing/content-backlog.md).
- [ ] Category filtering UI on `/blog` (categories already modeled in `lib/siteConfig.ts` and `lib/blog.ts`).
- [ ] Related posts at the bottom of each article.

### 2.2 FAQ section plus schema
- [ ] Visible FAQ section on the home and service pages, with `FAQPage` JSON-LD.
- Note: intentionally skipped in the first pass, because FAQ schema without visible on-page content is penalized.

### 2.3 Social proof
- [ ] Real testimonials and quotes when available (name, role, company).
- [ ] Replace illustrative case studies with real write-ups using the [Case Study Template](../marketing/case-study-template.md), as clients allow.

---

## 3. Low priority / technical evolution

- [ ] **Blog to MDX**: `lib/blog.ts` is the single swap point (typed registry today, no dependency). Upgrade when authoring volume grows.
- [ ] **Calendly** as a scheduling CTA (today: contact form plus WhatsApp).
- [ ] **Exit-intent** prompt and **newsletter** capture.
- [ ] Free resources, templates, whitepapers (lead magnets).
- [ ] Analytics: confirm PostHog events for new CTAs (`sticky_cta_clicked`, `whatsapp_clicked`) and build a conversion funnel.

---

## 4. Quality gates (run before every deploy)

- [ ] `npm run build` passes (typecheck plus static params).
- [ ] `npm run lint` clean.
- [ ] Both locales render with no missing i18n keys (console clean).
- [ ] Lighthouse / axe: single `h1`, focus states, `prefers-reduced-motion` respected, alt text present.
- [ ] `sitemap.xml` and `robots.txt` include new routes.
- [ ] No em dash character in copy (house style: comma, colon, or period instead).

See the fuller gate in [Website Strategy](./website-strategy.md) and [Definition of Done](../engineering/definition-of-done.md).

---

## 5. Reference: where things live

| Concern | File(s) |
| --- | --- |
| Nav, services, founders, categories, base URL | `lib/siteConfig.ts` |
| Copy (both locales) | `messages/en-US.json`, `messages/pt-BR.json` |
| Blog content registry | `lib/blog.ts` |
| WhatsApp / anchor-scroll helpers | `lib/whatsapp.ts`, `lib/scroll.ts` |
| Homepage assembly plus JSON-LD | `app/[locale]/page.tsx` |
| SEO infra | `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`, `app/layout.tsx` |
| Reusable UI | `components/Button.tsx`, `Icon.tsx`, `NavLink.tsx`, `CtaBanner.tsx`, `Container.tsx`, `Section.tsx` |

---

## 6. How we work this roadmap

- **Priority order is deliberate.** Validation (Section 0) unblocks credibility; service pages (Section 1) unblock the highest-intent SEO and conversion surface.
- **One thing at a time, shipped and verified,** over many half-done threads. Each item passes the quality gate before the next begins.
- **Revisit** at the end of each shipped item and at least monthly. Move completed items to a short changelog rather than deleting them, so we keep a record of what shipped and when.

---

## Maintaining this document

This is the one place to look for "what is next for the site." When priorities change, change them here first, then act. Keep it honest about status: a checkbox is only checked when the thing is live and verified.
