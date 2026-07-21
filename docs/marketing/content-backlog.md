# Content Backlog

Status: Active (living document)
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-21
Related: [Content Strategy](./content-strategy.md) · [Topic Clusters](./topic-clusters.md) · [Editorial Calendar](./editorial-calendar.md) · [Blog Standards](./blog-standards.md) · [Audience Profile](../company/ideal-customer-profile.md) · [SEO Checklist](../website/seo-checklist.md)

---

## Why this document exists

The living, prioritized queue of what we write next, centered on the JavaScript / TypeScript ecosystem. [Content Strategy](./content-strategy.md) sets the principles; this is where they become a list. Keep it current: mark articles Published, drop weak ideas, add new ones from search data and community questions.

---

## 1. How we prioritize

Score each idea on three axes (High / Medium / Low), from [Content Strategy](./content-strategy.md):

- **Audience relevance:** a real question our audience has.
- **Demand:** search volume or how often it comes up in the community.
- **Right to speak:** we have genuine, deep experience, not a doc rehash.

**Priority = impact over effort.** Prefer deep, evergreen, ecosystem-focused pieces over shallow or trend-chasing ones.

---

## 2. Published

| Title | Slug | Cluster | Notes |
| --- | --- | --- | --- |
| How Long Does It Take to Build an MVP? | `how-long-to-build-an-mvp` | Startup/Product | Legacy (founder-oriented); keep, but future focus is technical |
| MVP vs Full Product | `mvp-vs-full-product` | Product | Legacy |
| Vibe Coding vs Production Code | `vibe-coding-vs-production-code` | AI / Engineering | Bridges to the new technical direction |
| How Much Does It Cost to Build a SaaS in 2026? | `how-much-does-a-saas-cost-2026` | SaaS | Legacy |
| Vertical AI SaaS | `vertical-ai-saas-2026` | AI | Legacy |
| Beyond the Chatbot (AI agents) | `ai-agents-beyond-the-chatbot` | AI | Legacy |

Note: the existing posts skew founder/startup. The new direction is deep technical content on the JS/TS stack. Keep the old ones live, but weight the calendar toward the technical backlog below.

---

## 3. Next up (high priority)

Deep, evergreen, ecosystem-core pieces. Write these first.

| Title (working) | Cluster | Priority |
| --- | --- | --- |
| Next.js App Router: rendering, caching, and the mental model | Next.js | High |
| Structuring a NestJS backend for scale (modules, layers, DI) | NestJS | High |
| End-to-end testing Next.js apps with Playwright | Testing | High |
| TypeScript patterns that actually improve your codebase | TypeScript | High |
| Designing a PostgreSQL schema you will not regret | Databases | High |
| A pragmatic CI/CD pipeline with GitHub Actions (test, build, deploy) | CI/CD | High |

---

## 4. Backlog (medium priority)

| Title (working) | Cluster |
| --- | --- |
| Node.js performance: event loop, streams, and profiling | Node.js |
| Clean architecture in a TypeScript/Nest backend, without the dogma | Architecture |
| PostgreSQL vs MongoDB vs Firebase: choosing for the right reasons | Databases |
| API design: REST, tRPC, and when to reach for each | Architecture |
| Monorepos with Turborepo: when they help and when they hurt | DX / Tooling |
| Caching strategies for Next.js data | Next.js / Performance |
| Observability for Node services (logs, traces, metrics) | Architecture |
| Securing a Node/Nest API: authn, authz, and common mistakes | Security |
| Testing strategy: what to unit, integrate, and e2e | Testing |
| Dockerizing a Next.js + Nest app for production | Infra / CI/CD |

---

## 5. Ideas by cluster (unsorted intake)

Drop raw ideas here as they arrive from search data, comments, and community questions. Triage into sections above during review.

- **Frontend:** React Server Components in practice; Tailwind at scale; TS with React patterns.
- **Backend:** Nest interceptors/guards/pipes; background jobs and queues in Node; validation with Zod.
- **Databases:** query performance and indexes; migrations; Prisma vs Drizzle honestly.
- **Testing:** Playwright fixtures and CI; flaky-test triage; contract testing.
- **CI/CD & infra:** preview deploys; secrets management; zero-downtime deploys.
- **DX & tooling:** ESLint/Prettier setup that scales; editor and repo ergonomics.
- **AI for developers:** using AI in the dev loop responsibly; evaluating AI-generated code.
- **Trends:** what changed this quarter in the JS/TS ecosystem (analysis, not hype).

---

## 6. Production status

Each item flows: Idea -> Drafting -> In review -> Localizing -> Ready -> Published. Not Published until it clears [Blog Standards](./blog-standards.md) and the [SEO Checklist](../website/seo-checklist.md), in both locales.

---

## 7. Review cadence

Review every two to four weeks: reprioritize, add intake, retire dead ideas, pull the next high-priority item into the [Editorial Calendar](./editorial-calendar.md). Let search data and community questions drive what rises.

---

## Maintaining this document

The most frequently updated marketing doc. Keep it honest and current; an out-of-date backlog hides what actually needs writing. Titles here are working titles; the final title is set at publish time per [Blog Standards](./blog-standards.md).
