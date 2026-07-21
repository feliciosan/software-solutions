# Engineering Standards

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-21
Related: [Coding Conventions](./coding-conventions.md) · [Architecture Decisions](./architecture-decisions.md) · [Definition of Done](./definition-of-done.md) · [Values](../company/values.md) · [Website Strategy](../website/website-strategy.md) · [Brand Positioning](../company/brand-positioning.md)

---

## Why this document exists

Our engineering standards are not just how we build the site; they are **proof of the authority we claim in our content.** We publish about Next.js, NestJS, Node.js, TypeScript, testing, and CI/CD. Our own codebase has to exemplify that. If our site and code examples are excellent, our content is credible. If they are sloppy, no article will convince anyone.

This document is the engineering bar. [Coding Conventions](./coding-conventions.md) is the detailed law; this is the constitution.

Core belief: **the quality of our engineering is the quality of our reputation.**

---

## 1. Principles

1. **Excellence as credibility.** The site, its code, and every published example are held to the standard we teach. See [Values](../company/values.md).
2. **Simple beats clever.** The best solution is the simplest one that fully solves the problem and the next engineer can read.
3. **Reuse before you build.** Extend existing primitives and patterns before adding new ones. Duplication is a defect.
4. **Server-first, minimal client.** Do the work on the server; ship the least JavaScript that delivers the experience.
5. **Correctness is non-negotiable.** Especially in anything we publish: code that does not run must never ship.
6. **Leave it better.** Every change leaves the codebase at least as clean as it was found.

---

## 2. The stack we champion

We standardize on the ecosystem our content is about, so our practice matches our writing. Deviations require a recorded decision (see [Architecture Decisions](./architecture-decisions.md)).

- **Frontend:** Next.js (App Router), React, TypeScript (strict), Tailwind CSS.
- **Backend:** Node.js, NestJS, Express where appropriate.
- **Databases:** PostgreSQL, MongoDB, Firebase.
- **Testing:** Playwright for end to end, plus unit and integration tests.
- **CI/CD and infra:** GitHub Actions, Docker, automated deploys, cloud platforms.
- **This site specifically:** Next.js, `next-intl` (pt-BR/en-US), PostHog, Resend, Zod, react-hook-form, `next/font`, ESLint.

New technology is adopted because it serves the reader and the content, not for novelty. Introducing a dependency is a decision with a cost.

---

## 3. Architecture defaults

- **Server Components by default.** `"use client"` only for genuine interactivity, kept at the leaves.
- **Single source of truth** for shared data (for the site, `lib/siteConfig.ts` and `lib/categories.ts`).
- **Separation of concerns:** data and helpers in `lib/`, presentation in `components/`, routing in `app/`.
- **Typed content and data:** the blog registry (`lib/blog.ts`) is typed so the compiler catches mistakes.
- **Progressive enhancement:** core content and navigation work without unnecessary client JavaScript.

Significant or non-obvious choices are recorded as ADRs.

---

## 4. Quality practices (non-negotiable)

These make "excellence as credibility" real.

- **Type safety:** TypeScript strict. `any` is a smell that needs justification.
- **Automated tests:** meaningful coverage of logic and critical paths (unit, integration, and Playwright end to end where it matters). Tests are part of the work.
- **Code review:** every non-trivial change is reviewed before it reaches production.
- **CI/CD:** automated build, typecheck, lint, and tests on every change; automated deploys. Green pipeline is a merge requirement.
- **Linting and formatting:** enforced and automated, so style is never a review topic.
- **Documentation:** readable code, ADRs for non-obvious decisions, and a current README.

---

## 5. Standards for published code examples

Because we publish code, our examples are held to an extra bar (see also [Blog Standards](../marketing/blog-standards.md) and [Editorial Guidelines](../marketing/editorial-guidelines.md)):

- **It runs.** Every published snippet is tested before publishing.
- **It is version-aware.** State the versions assumed.
- **It follows our conventions.** Published code looks like our codebase.
- **It is minimal and focused.** Show the point, not unrelated noise.
- **It is correct and idiomatic.** Examples teach the right way, not just a way.

---

## 6. Security and privacy baseline

- Never commit secrets; configuration via environment variables (`.env`, never committed). Keep `.env.example` current.
- Validate and sanitize external input (for example, contact form input validated with Zod on the server).
- Least privilege for API keys and services.
- Collect only the analytics we need; respect reader privacy.
- Keep dependencies patched; review before adding new ones.

---

## 7. Performance and accessibility

Built in, not bolted on.

- **Performance:** optimize LCP (minimal priority images, SVG/CSS over heavy assets), avoid layout shift, ship minimal client JS, static generation for content. See [SEO Checklist](../website/seo-checklist.md).
- **Accessibility:** semantic HTML, one `h1`, keyboard operability, visible focus, `aria` where needed, `prefers-reduced-motion` respected. Failures are bugs. See [UX Principles](../website/ux-principles.md).

---

## 8. Version control and delivery

- **Branching:** short-lived feature branches off `main`; no direct commits to `main` for non-trivial work.
- **Commits:** small, focused, clear intent.
- **Pull requests:** small enough to review well; must pass CI and review.
- **Main is always deployable.**
- **Automated deploys** from the pipeline; reversible releases; enough observability to catch problems in production.

---

## 9. How standards are enforced

- **Automated:** typecheck, lint, tests, and build gates in CI.
- **Human:** code review enforces judgment, clarity, and the [Definition of Done](./definition-of-done.md).
- **Cultural:** we hold this bar because our content's credibility depends on it. Under time pressure we cut scope, never quality.

---

## Maintaining this document

Review quarterly and whenever the stack or a core practice changes. Keep principles here; concrete rules in [Coding Conventions](./coding-conventions.md); specific choices in [Architecture Decisions](./architecture-decisions.md).
