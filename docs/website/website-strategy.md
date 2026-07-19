# Website Strategy

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-19
Related: [Brand Positioning](../company/brand-positioning.md) · [Ideal Customer Profile](../company/ideal-customer-profile.md) · [UX Principles](./ux-principles.md) · [UI Principles](./ui-principles.md) · [SEO Checklist](./seo-checklist.md) · [Roadmap](./roadmap.md) · [Content Strategy](../marketing/content-strategy.md) · [Engineering Standards](../engineering/engineering-standards.md)

History: this document replaced the original root-level strategy brief (`CODACREW_WEBSITE_STRATEGY.md`, now removed). The next-steps plan it shipped with was folded into [Roadmap](./roadmap.md).

---

## Why this document exists

The website is our highest-leverage marketing asset and, for most founders, the first proof of whether we practice what we preach. A studio that builds scalable products cannot ship a slow, generic, or sloppy site. This document defines what the website is for, how it is structured, and the rules it must obey. It is the bridge between [Brand Positioning](../company/brand-positioning.md) and the actual implemented code.

---

## 1. The north-star question

Every decision about the site is judged against one question:

> How do we make a founder trust CodaCrew in under thirty seconds?

If a change does not help answer that question, it is decoration. Trust, clarity, and a clear next action beat cleverness every time.

---

## 2. Goals and non-goals

**Primary goal.** Convert in-profile founders (see [ICP](../company/ideal-customer-profile.md)) into qualified conversations (contact form, WhatsApp, or a call).

**Secondary goals.**
- Communicate the positioning ("technical partner that turns ideas into scalable products") instantly.
- Build organic traffic over time through the blog and service pages (see [SEO Checklist](./seo-checklist.md)).
- Demonstrate craft: the site itself is a portfolio piece.

**Non-goals.**
- Impress other developers.
- Win design awards for their own sake.
- Serve out-of-ICP visitors (price shoppers, one-page-site buyers).

---

## 3. Positioning to page: the through-line

The site is a linear argument built to move a founder from stranger to lead. Each section does one job.

1. **Hero:** state the promise (what, for whom, why different) and the primary action, in under ten seconds. No founder photos here; the visual is a product-journey and dashboard mockup that shows what we build.
2. **Trust bar:** senior engineers, global experience, modern stack, AI ready, startup focus, plus prior-experience brand logos.
3. **Problems:** name the founder's real fears (wrong technical decisions, slow development, poor communication, no product vision), then assert we solve them.
4. **Process:** Discovery to Continuous Improvement, so the path feels concrete and low-risk.
5. **Services:** MVP, SaaS, AI Integrations, Product Modernization, Team Augmentation.
6. **Differentiators:** why founders choose CodaCrew (the five pillars from [Brand Positioning](../company/brand-positioning.md)).
7. **Case studies:** representative products, framed honestly (see Section 6).
8. **Team:** the founders, with names, roles, specialties, and LinkedIn. Trust through real people.
9. **Blog preview:** latest articles for internal linking, freshness, and softer-funnel engagement.
10. **Final CTA and contact form:** the primary conversion endpoint.

Distributed CTAs (inline banners, a sticky "Schedule a Free Call," and a floating WhatsApp button) mean conversion never depends on the visitor reaching the bottom.

---

## 4. Conversion model

- **Primary action:** the contact form (Resend-backed), for a free strategy call.
- **Fast path:** floating WhatsApp button, using `NEXT_PUBLIC_WHATSAPP_NUMBER`.
- **Persistent nudge:** dismissible sticky "Schedule a Free Call" pill after the hero.
- **CTA copy** rotates by intent: "Let's Build Your Startup," "Get a Free MVP Estimate," "Talk to an Engineer," "Schedule a Free Strategy Call."
- **Analytics:** PostHog events on hero CTA, sticky CTA, WhatsApp, and form lifecycle (started, submitted, error). Use these to find drop-off, not vanity totals.

Future conversion work (Calendly, exit intent, newsletter) is tracked in [Roadmap](./roadmap.md).

---

## 5. Information architecture and routes

- **Localized routes:** everything lives under `/[locale]` with `pt-BR` and `en-US`, full parity, via `next-intl`.
- **Home:** `/[locale]` (the argument in Section 3).
- **Blog:** `/[locale]/blog` (listing) and `/[locale]/blog/[slug]` (article). Content registry in `lib/blog.ts`.
- **Campaign and demo routes** (`/mvp`, `/campaigns/health`, `/demos/...`, `/calculadora-interna`) exist for specific funnels and are intentionally outside the main narrative. The internal calculator stays out of the index.
- **Planned:** dedicated service landing pages (`/mvp-development`, `/saas-development`, `/ai-development`, `/team-augmentation`). See [Roadmap](./roadmap.md).
- **Single source of truth for nav, services, founders, categories, and base URL:** `lib/siteConfig.ts`. Header, Footer, sitemap, and JSON-LD all read from it.

---

## 6. Content and honesty rules on the site

These are hard constraints, enforced in review. They inherit from [Values](../company/values.md) and [Brand Positioning](../company/brand-positioning.md).

- **Speak to founders.** Never "we build software." Prefer "we help founders build scalable businesses."
- **No invented proof.** No fabricated client names, revenue, or outcome metrics. Prior experience (Hugo Boss, Calvin Klein, Tommy Hilfiger, Globo, Carlsberg) is always framed as the team's prior work, never as CodaCrew client engagements.
- **Illustrative is labeled.** The hero dashboard mockup uses sample product numbers, clearly a product illustration, not CodaCrew metrics.
- **No em dash character** in any copy. Use commas, colons, periods, or parentheses. Enforced in the quality gate below.
- **Bilingual parity.** Every user-facing string exists in both `messages/en-US.json` and `messages/pt-BR.json`.
- Open items where legacy copy still needs verification (for example the `50+` / `100%` stats and the `/mvp` case metrics) are tracked in [Roadmap](./roadmap.md).

---

## 7. Technical guardrails

The site is built to the same standard as client work. Full detail in [Engineering Standards](../engineering/engineering-standards.md).

- **Stack:** Next.js (App Router), React, TypeScript, Tailwind, `next-intl`, PostHog, Resend, Zod, react-hook-form.
- **Server-first:** Server Components by default; `"use client"` only for genuine interactivity (header menu, sticky CTA, WhatsApp button, forms, hero CTA tracking).
- **Performance:** minimize `priority` images, prefer inline SVG and CSS over heavy assets, keep the hero LCP light. See [UI Principles](./ui-principles.md).
- **Accessibility:** one `h1` per page, ordered headings, visible focus states, `aria-label` on icon-only controls, `prefers-reduced-motion` respected. See [UX Principles](./ux-principles.md).
- **SEO infrastructure:** per-route metadata, canonical and `hreflang`, OpenGraph and Twitter cards, JSON-LD (Organization/Service, Blog, Breadcrumb), dynamic sitemap and robots. See [SEO Checklist](./seo-checklist.md).

---

## 8. Quality gate (run before every deploy)

A change is not shippable until all of these pass:

- [ ] `npm run build` succeeds (typecheck plus static params for all routes).
- [ ] `npm run lint` is clean.
- [ ] Both locales render with no missing i18n keys (console clean).
- [ ] New user-facing strings added to both `en-US` and `pt-BR`.
- [ ] No em dash character in any copy.
- [ ] Accessibility spot check: single `h1`, focus states, reduced-motion respected, alt text present.
- [ ] `sitemap.xml` and `robots.txt` reflect any new routes.
- [ ] Lighthouse sanity check on changed pages (performance and accessibility not regressed).

---

## 9. Ownership and change management

- **Owner:** founders, with engineering accountable for implementation fidelity.
- **Source of truth precedence:** [Brand Positioning](../company/brand-positioning.md) governs message; this document governs how the site expresses it; [UX Principles](./ux-principles.md) and [UI Principles](./ui-principles.md) govern how it looks and behaves.
- **When positioning changes,** the hero, differentiators, and services sections must be reviewed for alignment.
- **Review cadence:** quarterly, plus whenever a new page type is introduced.

The site is never "done." It is a living argument for why a founder should trust us, and it should keep getting sharper.
