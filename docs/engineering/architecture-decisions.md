# Architecture Decisions

Status: Active (living log)
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-19
Related: [Engineering Standards](./engineering-standards.md) · [Coding Conventions](./coding-conventions.md) · [Definition of Done](./definition-of-done.md) · [Website Strategy](../website/website-strategy.md)

---

## Why this document exists

An Architecture Decision Record (ADR) captures a significant technical decision, the context that forced it, and the consequences we accept. We keep this log so that six months from now nobody has to reverse-engineer "why is it built this way?" from the code, and so that reversing a decision is a deliberate act rather than an accident. Decisions are cheap to make and expensive to forget.

This log covers the CodaCrew website. Client projects keep their own ADR log in their repository, following this same format.

---

## When to write an ADR

Write one when a decision is:

- Hard or expensive to reverse (framework, data model, i18n approach).
- Non-obvious or likely to be questioned later.
- A deliberate trade-off with real downsides.
- A deviation from our standard stack in [Engineering Standards](./engineering-standards.md).

Do not write one for routine choices with an obvious answer. Not every commit needs an ADR; every surprising one does.

---

## Format

Each ADR uses this shape. ADRs are immutable once Accepted: to change a decision, add a new ADR that supersedes the old one, and mark the old one Superseded.

```
## ADR-NNN: Title
- Status: Proposed | Accepted | Superseded by ADR-XXX
- Date: YYYY-MM-DD
- Context: the forces and constraints at play
- Decision: what we chose
- Consequences: what we gain, what we give up, what to watch
```

---

## Decision log

### ADR-001: Next.js App Router as the framework
- **Status:** Accepted
- **Date:** 2026-01-01
- **Context:** We need a modern React framework with first-class SSR/SSG, file-based routing, built-in metadata and image handling, and strong performance defaults. It is also our recommended client stack, so our own site should exemplify it.
- **Decision:** Build on Next.js with the App Router and React Server Components.
- **Consequences:** Excellent performance and SEO defaults, server-first rendering, and a single mental model shared with client projects. Cost: the App Router and RSC model has a learning curve and some ecosystem libraries assume client components. We accept a server-first discipline as the default.

### ADR-002: `next-intl` for localization with full parity
- **Status:** Accepted
- **Date:** 2026-01-01
- **Context:** CodaCrew serves founders in Portuguese and English. Both languages must be first-class, not a machine-translated afterthought (a value from [Values](../company/values.md)).
- **Decision:** Use `next-intl` with locale-prefixed routes (`/[locale]`) and message catalogs in `messages/en-US.json` and `messages/pt-BR.json`, kept at full parity.
- **Consequences:** Clean localized routing, server and client translation access, and correct `hreflang`. Cost: every user-facing string must be added to both catalogs in the same change, and layouts must tolerate longer Portuguese text. Enforced in review.

### ADR-003: Server Components by default, client only at the leaves
- **Status:** Accepted
- **Date:** 2026-01-01
- **Context:** Shipping unnecessary client JavaScript hurts performance and, by extension, SEO and conversion.
- **Decision:** Author components as Server Components by default. Add `"use client"` only for genuine interactivity (header menu, sticky CTA, WhatsApp button, forms, hero CTA analytics), keeping those components small.
- **Consequences:** Low client JS, fast first paint. Cost: engineers must be deliberate about the server/client boundary, and some patterns require passing data down rather than fetching in a client component.

### ADR-004: Centralized site config as a single source of truth
- **Status:** Accepted
- **Date:** 2026-07-17
- **Context:** Navigation, services, founders, blog categories, and the base URL were needed by the Header, Footer, sitemap, and JSON-LD. Duplicating them invites drift.
- **Decision:** Keep all such config in `lib/siteConfig.ts` and have every consumer read from it.
- **Consequences:** Consistency across navigation, SEO, and structured data; one place to change. Cost: a small indirection. Well worth it.

### ADR-005: Typed blog registry now, MDX later
- **Status:** Accepted
- **Date:** 2026-07-17
- **Context:** The blog needs to launch with a scaffold and a couple of real posts, in both locales, without adding build complexity prematurely. A full MDX pipeline is more than the current volume justifies.
- **Decision:** Store posts in a typed registry (`lib/blog.ts`) as structured, localized `ContentBlock` arrays, with no MDX dependency. Design the module as the single swap point for a future MDX or CMS migration.
- **Consequences:** Full type safety, no new build tooling, trivial static generation. Cost: authoring long-form content in TypeScript is less ergonomic than Markdown. Accepted until authoring volume justifies the migration (tracked in [Roadmap](../website/roadmap.md)).

### ADR-006: Tailwind with a constrained token system
- **Status:** Accepted
- **Date:** 2026-01-01
- **Context:** We want a modern, consistent UI that is fast to build and hard to make inconsistent.
- **Decision:** Use Tailwind with a deliberately narrow palette (`slate` plus `blue` and a few semantic colors), shared spacing and radius scale, and reusable primitives (`Button`, `Container`, `Section`, `Icon`). See [UI Principles](../website/ui-principles.md).
- **Consequences:** Rapid, coherent UI and reviews that focus on substance. Cost: discipline required to not introduce ad hoc values; enforced in review.

### ADR-007: Native anchors plus a scroll helper for in-page navigation
- **Status:** Accepted
- **Date:** 2026-07-17
- **Context:** Locale-prefixed hash links (`/en-US#process`) rendered via `next/link` were treated as navigations, causing a jump to the top followed by a scroll. We also need those same links to work when clicked from another page (for example the blog).
- **Decision:** Route hash links through native anchors and a `scrollToHash` helper (`lib/scroll.ts`) that smooth-scrolls in place when the target exists and otherwise lets the browser navigate. `scroll-padding-top` offsets the fixed header; `data-scroll-behavior="smooth"` opts in without animating route-transition scroll.
- **Consequences:** Correct, smooth section navigation everywhere, with real crawlable URLs. Cost: a small shared helper and the discipline to use `NavLink`/`Button` for anchors rather than raw links.

### ADR-008: Resend for transactional email, PostHog for analytics
- **Status:** Accepted
- **Date:** 2026-01-01
- **Context:** The contact form must reliably deliver email, and we need product and conversion analytics to improve the funnel.
- **Decision:** Use Resend for transactional email (contact form via a server route, input validated with `zod`) and PostHog for events (hero CTA, sticky CTA, WhatsApp, form lifecycle).
- **Consequences:** Reliable delivery and actionable funnel data. Cost: two third-party dependencies and their keys, managed via environment variables.

### ADR-009: Dynamic `sitemap.ts` and `robots.ts` over static files
- **Status:** Accepted
- **Date:** 2026-07-17
- **Context:** A static `robots.txt` had a placeholder domain and could drift from reality; the sitemap needs to include locales and every blog post automatically.
- **Decision:** Generate `sitemap.xml` and `robots.txt` from code (`app/sitemap.ts`, `app/robots.ts`), driven by `siteConfig` and the blog registry. Remove the static `robots.txt`.
- **Consequences:** SEO artifacts stay correct as routes change, with no manual upkeep. Cost: none meaningful.

---

## Maintaining this log

- Add an ADR when a decision meets the bar in "When to write an ADR."
- Never edit an Accepted ADR to change its decision; supersede it with a new one and cross-link both.
- Review during major changes and at least twice a year: confirm decisions still hold, mark any that reality has superseded.
- Keep numbering monotonic. Dates are the decision date, not the last edit.
