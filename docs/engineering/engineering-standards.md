# Engineering Standards

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-19
Related: [Coding Conventions](./coding-conventions.md) · [Architecture Decisions](./architecture-decisions.md) · [Definition of Done](./definition-of-done.md) · [Values](../company/values.md) · [Website Strategy](../website/website-strategy.md) · [UX Principles](../website/ux-principles.md)

---

## Why this document exists

Our engineering is the product we actually sell. "Senior engineering" and "speed without shortcuts" are positioning pillars (see [Brand Positioning](../company/brand-positioning.md)), which means the codebase is a promise to every founder that their product is built to last. This document defines the engineering bar that applies to client work and to our own site, which is itself a portfolio piece. It is the constitution; [Coding Conventions](./coding-conventions.md) is the detailed law.

Core belief: **the fastest way to move fast for a long time is to keep quality high from the first commit.** Debt is a loan billed to the founder later, with interest.

---

## 1. Principles

1. **Quality is not negotiable to zero.** Under deadline pressure we cut scope, never the practices that keep code correct and maintainable. See [Values](../company/values.md).
2. **Simple beats clever.** The best solution is the simplest one that fully solves the problem and the next person can understand. Reserve cleverness for when it is genuinely required.
3. **Reuse before you build.** Extend existing primitives and patterns before introducing new ones. Duplication is a defect. See [Coding Conventions](./coding-conventions.md).
4. **Server-first, minimal client.** Do the work on the server; ship the least JavaScript that delivers the experience.
5. **Own the outcome.** If something is wrong for the product, fix it or raise it, even if it was not your ticket.
6. **Leave it better.** Every change leaves the codebase at least as clean as it was found.

---

## 2. The standard stack

We standardize so that any engineer can move between projects fast and so that our judgment compounds. Deviations require a recorded decision (see [Architecture Decisions](./architecture-decisions.md)).

- **Framework:** Next.js (App Router), React, TypeScript in strict mode.
- **Styling:** Tailwind CSS with a shared token system (see [UI Principles](../website/ui-principles.md)).
- **i18n:** `next-intl`, full `pt-BR` / `en-US` parity.
- **Forms and validation:** `react-hook-form` with `zod` schemas.
- **Email:** Resend for transactional messages.
- **Analytics:** PostHog for product and conversion events.
- **Fonts:** `next/font`.
- **Tooling:** ESLint (Next config), the framework's build and type checks.

New technology is adopted because it serves the founder and the product, never for novelty (a value from [Mission](../company/mission.md)). Introducing a dependency is a decision with a cost; prefer the platform and what we already have.

---

## 3. Architecture defaults

- **Server Components by default.** Reach for `"use client"` only for genuine interactivity (menus, forms, scroll or analytics behavior). Keep client components small and at the leaves.
- **Single source of truth for shared data.** Navigation, services, and similar config live in one module (for the site, `lib/siteConfig.ts`), consumed everywhere. No copy-pasted constants.
- **Separation of concerns.** Data and helpers in `lib/`, presentation in `components/`, routing and composition in `app/`.
- **Typed content and data.** Content (for example the blog registry) is typed so the compiler catches mistakes. See [Coding Conventions](./coding-conventions.md).
- **Progressive enhancement.** Core content and navigation work without client JavaScript wherever feasible.

Significant or non-obvious choices are recorded as ADRs in [Architecture Decisions](./architecture-decisions.md).

---

## 4. Quality practices (non-negotiable from day one)

These are the practices that make "speed without shortcuts" real. They are included in every engagement, not sold as extras.

- **Type safety:** TypeScript strict. `any` is a smell that needs justification.
- **Automated tests:** meaningful coverage of business logic and critical paths (unit, integration, and end-to-end where it matters). Tests are part of the work, not a later phase. See [Definition of Done](./definition-of-done.md).
- **Code review:** every change is reviewed before it reaches production. No direct-to-main for anything non-trivial.
- **CI/CD:** automated build, typecheck, lint, and tests on every change; automated deploys. Green pipeline is a merge requirement.
- **Linting and formatting:** enforced and automated, so style is never a review topic.
- **Documentation:** the code is readable, and non-obvious decisions are written down (ADRs, READMEs, and comments that explain "why," not "what").

---

## 5. Security and privacy baseline

- Never commit secrets. Configuration comes from environment variables (`.env`, never checked in). Provide a `.env.example`.
- Validate and sanitize all external input (for example, contact form input validated with `zod` on the server).
- Least privilege for API keys and services.
- Handle personal data responsibly; collect only what is needed. Respect analytics and privacy expectations.
- Keep dependencies patched; review before adding new ones.

---

## 6. Performance and accessibility as engineering requirements

These are not design afterthoughts; they are built in.

- **Performance:** optimize LCP (minimal priority images, SVG/CSS over heavy assets), avoid layout shift, ship minimal client JS, use static generation for content. Targets and details in [SEO Checklist](../website/seo-checklist.md) and [UI Principles](../website/ui-principles.md).
- **Accessibility:** semantic HTML, one `h1` per page, keyboard operability, visible focus, `aria` where needed, `prefers-reduced-motion` respected. Accessibility failures are bugs. See [UX Principles](../website/ux-principles.md).

---

## 7. Version control and collaboration

- **Branching:** short-lived feature branches off `main`; never commit directly to `main` for non-trivial work.
- **Commits:** small, focused, with clear messages that explain intent.
- **Pull requests:** small enough to review well; describe what and why; must pass CI and review.
- **Main is always deployable.** If it is red, fixing it is the priority.

Specifics of message format and branch naming live in [Coding Conventions](./coding-conventions.md).

---

## 8. Environments and delivery

- **Local, staging, production** with parity as close as practical.
- **Automated deploys** from the pipeline; no manual production deploys from a laptop.
- **Reversible releases:** prefer changes that can be rolled back quickly.
- **Observability:** enough logging, error tracking, and analytics to know when something is wrong in production before the client tells us.

---

## 9. Working with clients (engineering-facing)

Our engineering standards are also a communication promise (radical clarity, from [Values](../company/values.md)):

- Weekly sprints with demos; progress is shown, not just reported.
- Technical decisions explained in founder-friendly language.
- Estimates given with honest ranges and stated assumptions.
- The client owns their code, documented enough to maintain or hand off. See [Client Onboarding](../sales/client-onboarding.md).

---

## 10. How standards are enforced

- **Automated:** typecheck, lint, tests, and build gates in CI. The machine enforces what it can.
- **Human:** code review enforces judgment, clarity, and the [Definition of Done](./definition-of-done.md).
- **Cultural:** "senior by default" means engineers hold this bar without being told. When trade-offs are needed, we cut scope and escalate, we do not quietly lower the bar.

---

## Maintaining this document

Review quarterly and whenever the stack or a core practice changes. Keep this document at the level of principles and standards; put concrete rules in [Coding Conventions](./coding-conventions.md) and specific choices in [Architecture Decisions](./architecture-decisions.md), so each document stays sharp.
