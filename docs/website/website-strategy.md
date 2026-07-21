# Website Strategy

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-21
Related: [Brand Positioning](../company/brand-positioning.md) · [Audience Profile](../company/ideal-customer-profile.md) · [UX Principles](./ux-principles.md) · [UI Principles](./ui-principles.md) · [SEO Checklist](./seo-checklist.md) · [Roadmap](./roadmap.md) · [Content Strategy](../marketing/content-strategy.md)

---

## Why this document exists

The website is the home of our content and the proof that we are serious engineers. A brand claiming JS/TS authority cannot ship a slow, generic, or sloppy site. This document defines what the website is for, how it is structured, and the rules it must obey.

---

## 1. Purpose

> Become the best destination for modern JavaScript and TypeScript engineering content.

The site exists to publish excellent technical articles, help engineers find and read them, and grow our audience. It is a publication, not a funnel. There is no service to sell and no lead to capture; success is engineers reading, learning, returning, and following us on LinkedIn.

---

## 2. North-star question

Every decision is judged against:

> Would an engineer bookmark this, read to the end, and come back for the next article?

If a change does not help discovery, reading, or trust, it is decoration.

---

## 3. Goals and non-goals

**Goals**
- Publish and showcase high-quality technical content.
- Make articles easy to discover (search, topics, internal linking) and a pleasure to read.
- Grow the LinkedIn audience by feeding it genuinely shareable content.
- Demonstrate craft: the site itself is evidence of our engineering standards.

**Non-goals**
- Selling anything. No services, no pricing, no proposals.
- Treating readers as leads. No aggressive capture, no dark patterns.
- Chasing traffic that does not serve engineers.

---

## 4. Information architecture

The site is organized around **reading and discovery**:

- **Home:** what CodaCrew is, the topics we cover, the latest articles, and the people behind them.
- **Blog:** `/[locale]/blog` (listing) and `/[locale]/blog/[slug]` (article). Content lives in `lib/blog.ts` (typed registry; MDX is the future upgrade).
- **Topics / categories:** entry points into clusters (Next.js, NestJS, Node.js, TypeScript, databases, testing, CI/CD, architecture, performance, DX, AI for developers). See [Topic Clusters](../marketing/topic-clusters.md).
- **Authors:** engineer bylines that build individual and brand credibility (planned; see [Roadmap](./roadmap.md)).
- **Newsletter:** future capture for return readership (planned).
- **Search:** find content fast (planned).
- **Contact:** a simple, general way to reach us (questions, feedback, collaboration), never a sales form.

Localized under `/[locale]` with `pt-BR` and `en-US`, full parity. Single source of truth for nav, topics, and config: `lib/siteConfig.ts`.

---

## 5. The reading experience is the product

Because we are a publication, the article experience matters most:

- Fast load, excellent typography, comfortable measure and line height.
- First-class code blocks (readable, copyable, language-aware).
- Clear structure, headings, and scannability.
- Related articles and topic navigation to keep readers reading.
- Covers and author bylines for credibility and shareability.

Detailed rules in [UX Principles](./ux-principles.md) and [UI Principles](./ui-principles.md).

---

## 6. Growth model

- **SEO** is the compounding engine: technical articles ranking for real engineering questions (see [SEO Checklist](./seo-checklist.md)).
- **LinkedIn** is the primary distribution channel: every article is repurposed for the company page (see [LinkedIn Growth Playbook](../marketing/linkedin-growth-playbook.md)).
- **Internal linking and topic clusters** keep readers on-site and build topical authority.
- **Newsletter** (future) converts one-time readers into returning ones.

---

## 7. Content and honesty rules

- **Write for engineers**, in the JS/TS ecosystem, with depth and accuracy.
- **No selling language** anywhere; readers are audience, not customers.
- **No em dash character**; en-US and pt-BR parity on all published copy.
- **No invented claims or metrics.** Technical accuracy is the brand (see [Values](../company/values.md)).

---

## 8. Technical guardrails

Built to the standard we champion. Full detail in [Engineering Standards](../engineering/engineering-standards.md).

- **Stack:** Next.js (App Router), React, TypeScript, Tailwind, `next-intl`, PostHog, Resend, Zod, react-hook-form.
- **Server-first:** Server Components by default; client only where needed.
- **Performance:** minimize priority images, prefer SVG/CSS, keep LCP low, static generation for content.
- **Accessibility:** one `h1`, ordered headings, visible focus, `aria` on icon-only controls, `prefers-reduced-motion` respected.
- **SEO infra:** per-route metadata, canonical + hreflang, OpenGraph/Twitter, JSON-LD (Organization/Blog/Article/Breadcrumb), dynamic sitemap and robots.
- **Design system:** "Moss & Stone" semantic tokens (see [UI Principles](./ui-principles.md)).

---

## 9. Quality gate (before every deploy)

- [ ] `npm run build` passes; `npm run lint` clean.
- [ ] Both locales render with no missing i18n keys.
- [ ] New strings added to `en-US` and `pt-BR`.
- [ ] No em dash character in copy.
- [ ] Accessibility spot check (single `h1`, focus, alt text, reduced motion).
- [ ] `sitemap.xml` and `robots.txt` reflect new routes.
- [ ] Lighthouse: performance and accessibility not regressed.

---

## 10. Maintaining this document

Review quarterly and whenever a new content or growth surface is added. The site is never "done"; it should keep getting better at helping engineers discover and read great content.
