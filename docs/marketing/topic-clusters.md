# Topic Clusters

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-21
Related: [Content Strategy](./content-strategy.md) · [Content Backlog](./content-backlog.md) · [SEO Checklist](../website/seo-checklist.md) · [Brand Positioning](../company/brand-positioning.md)

---

## Why this document exists

Topical authority is built by covering a subject deeply and interlinking it, not by scattering one-off posts. This document defines our clusters: the subjects we own, a pillar per cluster, and the kinds of articles that belong to each. It is the backbone for the [Content Backlog](./content-backlog.md) and the internal-linking rules in the [SEO Checklist](../website/seo-checklist.md).

Model: each cluster has a **pillar** (a broad, authoritative overview) and **cluster articles** (deep, specific pieces). Cluster articles link up to the pillar and across to siblings; the pillar links down to them.

---

## 1. The clusters

### Next.js and React
- **Pillar:** a modern Next.js mental model (App Router, rendering, caching, data).
- **Articles:** Server Components in practice, caching strategies, routing, performance, React patterns, Tailwind at scale.

### NestJS and Node.js
- **Pillar:** structuring a scalable Node/Nest backend.
- **Articles:** modules and DI, guards/interceptors/pipes, background jobs and queues, event loop and streams, Node performance and profiling.

### TypeScript
- **Pillar:** TypeScript patterns that improve real codebases.
- **Articles:** advanced types used pragmatically, TS with React/Node, validation with Zod, config and DX.

### Databases
- **Pillar:** choosing and modeling your database well.
- **Articles:** PostgreSQL schema and indexing, query performance, migrations, MongoDB data modeling, Firebase in practice, Prisma vs Drizzle.

### Testing and quality
- **Pillar:** a testing strategy that pays off.
- **Articles:** Playwright end-to-end, unit vs integration vs e2e, fixtures and CI, flaky-test triage, contract testing.

### CI/CD and infrastructure
- **Pillar:** a pragmatic pipeline from commit to production.
- **Articles:** GitHub Actions pipelines, Docker for Next/Nest, preview and zero-downtime deploys, secrets, cloud platforms.

### Architecture
- **Pillar:** designing systems that scale without dogma.
- **Articles:** clean architecture in TS, monorepos, API design (REST/tRPC), observability, security, resilience.

### Performance
- **Pillar:** making JS/TS apps fast, front to back.
- **Articles:** Core Web Vitals, rendering performance, backend and query performance, profiling.

### Developer experience and tooling
- **Pillar:** a codebase that is a joy to work in.
- **Articles:** ESLint/Prettier at scale, editor and repo ergonomics, monorepo tooling, scripts and automation.

### AI for developers
- **Pillar:** using AI in the engineering workflow, honestly.
- **Articles:** AI in the dev loop, evaluating AI-generated code, practical integrations, limits and pitfalls.

### Industry trends
- **Pillar:** what is actually changing in the JS/TS ecosystem.
- **Articles:** quarterly analysis, honest takes on new tools and releases (analysis, not hype).

---

## 2. Rules for using clusters

- Every article is assigned to exactly one primary cluster (it may reference others).
- New articles link up to their pillar and across to 2 to 4 sibling articles.
- When a cluster has enough articles, build its pillar page and a category page (see [Roadmap](../website/roadmap.md)).
- Prefer deepening an existing cluster over starting a shallow new one.

---

## 3. Adding or retiring a cluster

Add a cluster only when it is squarely in the JS/TS ecosystem, we have genuine depth, and we can commit to several strong articles. Retire or merge a cluster that we cannot sustain or that drifts off our authority area.

---

## Maintaining this document

Review quarterly alongside the [Content Backlog](./content-backlog.md). Keep clusters focused; breadth without depth dilutes authority.
