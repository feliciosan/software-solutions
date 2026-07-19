# Service Catalog

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-19
Related: [Brand Positioning](../company/brand-positioning.md) · [Ideal Customer Profile](../company/ideal-customer-profile.md) · [Proposal Guidelines](./proposal-guidelines.md) · [Client Onboarding](./client-onboarding.md) · [Website Strategy](../website/website-strategy.md) · [Engineering Standards](../engineering/engineering-standards.md)

---

## Why this document exists

This is the internal definition of what CodaCrew sells: the scope of each service, who it is for, what is and is not included, and the outcome it delivers. It keeps sales conversations, proposals, and the website's Services section consistent, and it prevents scope ambiguity that hurts both the client and the team. The five services here match `lib/siteConfig.ts` and the website; keep them in sync.

Framing rule, from [Brand Positioning](../company/brand-positioning.md): **we sell outcomes and partnership, never hours.** Every service is described by the result it produces for a founder, not by a rate card.

---

## How to read a service

Each entry has: what it is, who it is for (mapped to an [ICP](../company/ideal-customer-profile.md) segment), what is included, deliverables, typical shape and timeline, what is not included, and the outcome. Pricing posture is defined once in Section 6 and detailed in [Proposal Guidelines](./proposal-guidelines.md); we do not publish a rate card.

---

## 1. MVP Development

**What it is.** We take a founder's idea to a validated MVP running in production with real users, fast and without throwaway code.

**Who it is for.** ICP Segment A (the idea-stage founder). The most common entry point.

**Included.**
- Discovery and scoping to the core hypothesis (cut to what validates the idea).
- Scalable architecture and the right stack for the product's future.
- Full-stack build in weekly sprints with demos.
- Tests, code review, and CI/CD from day one.
- Deployment to production and basic monitoring.
- Documentation sufficient to maintain and extend.

**Deliverables.** A live, tested MVP; the codebase (owned by the client); documentation; a deployment pipeline.

**Typical shape.** A defined engagement, commonly in the range of 8 to 12 weeks depending on scope. Weekly sprints, weekly demos.

**Not included.** Endless feature expansion (that is the next engagement), pixel-perfect brand design work beyond product UI, or "just build my exact spec, no questions" (out of ICP).

**Outcome.** The founder gets to real users fast, on a foundation that becomes the full product rather than a rewrite. This is the flagship expression of "from idea to scalable product."

---

## 2. SaaS Development

**What it is.** We build and grow scalable, multi-tenant SaaS products, from a maturing MVP to a production system that handles real load.

**Who it is for.** ICP Segment B (the scaling startup) and Segment A graduating from an MVP.

**Included.**
- Scalable, multi-tenant architecture.
- Core SaaS concerns: authentication, roles and permissions, billing/payments integration, dashboards.
- Performance, reliability, and observability built in.
- The full quality baseline (tests, review, CI/CD).

**Deliverables.** A production SaaS product, documented and instrumented, built to grow.

**Typical shape.** Ongoing or milestone-based, sized to the product. Continues past launch into iteration.

**Not included.** Guaranteed business outcomes (we build the product; traction is a shared effort), or scope with no product discovery.

**Outcome.** A SaaS that scales with the business instead of forcing an emergency rewrite. Directly serves the "scalable architecture" pillar.

---

## 3. AI Integrations

**What it is.** We apply AI and automation to real business problems inside a product: practical, shipped features, not hype.

**Who it is for.** Segments B and C with a concrete problem where AI or automation creates value (support, content, search, workflow automation, data extraction).

**Included.**
- Discovery to identify where AI genuinely helps (and where it does not).
- Integration of appropriate AI capabilities into the product.
- The same engineering quality baseline.
- Honest guidance on cost, limits, and trade-offs of the approach.

**Deliverables.** Working AI-powered features in production, with the reasoning documented.

**Typical shape.** Scoped feature engagements, or a workstream within a larger build.

**Not included.** "Add AI" with no defined problem, or research projects with no product target. We solve business problems, not chase the technology.

**Outcome.** Real automation or intelligence that moves a business metric, delivered responsibly.

---

## 4. Product Modernization

**What it is.** We rescue and modernize existing software that is slowing a business down: legacy code, fragile architecture, mounting technical debt, all without stopping the operation.

**Who it is for.** Segment C and companies with a live product that is buckling under growth or age.

**Included.**
- Assessment of the current system, risks, and priorities.
- Incremental modernization (architecture, stack, performance, reliability) that keeps the product running.
- Debt paydown tied to business impact.
- Quality practices introduced where they were missing.

**Deliverables.** A modernized, more maintainable and scalable system, with a documented path and decisions.

**Typical shape.** Milestone-based, incremental. Rewrites are a last resort, not a default.

**Not included.** Reckless big-bang rewrites, or cosmetic changes that do not address the underlying problem.

**Outcome.** The product regains velocity and reliability; the team stops fighting the codebase.

---

## 5. Team Augmentation

**What it is.** We embed senior engineers into a client's team to add capacity, seniority, or a specific expertise, raising the bar rather than just filling seats.

**Who it is for.** Segment C: teams with an in-house group and a senior gap or a specialized need.

**Included.**
- Senior engineers who integrate quickly and work to our [Engineering Standards](../engineering/engineering-standards.md).
- Real contribution to architecture and quality, not just ticket execution.
- Knowledge transfer that leaves the client's team stronger.

**Deliverables.** Shipped work inside the client's product, plus a lifted engineering bar.

**Typical shape.** Ongoing, time-boxed to the need.

**Not included.** Body-shop staffing (juniors billed as seniors), or seats with no accountability for outcomes. That is explicitly not who we are (see [Values](../company/values.md)).

**Outcome.** The client's team moves faster and builds better, with senior reinforcement that would take months to hire.

---

## 6. Pricing and engagement posture

- **Value-based, never hourly.** We price the outcome and the engagement, not a rate card. Framing us by hourly rate recategorizes us as a commodity (see [Competitors](../company/competitors.md)).
- **Every engagement includes the quality baseline** (tests, code review, CI/CD, documentation). These are not upsells; they are how we work.
- **Engagements often start with discovery** when the product vision is not yet sharp, then flow into build.
- **Concrete numbers, ranges, and proposal mechanics** live in [Proposal Guidelines](./proposal-guidelines.md). The website's contact form captures a budget band to help qualify and scope early.

---

## 7. Cross-service principles

- **We recommend the right service, even if it is smaller.** Talking a founder into a bigger engagement than they need is off-mission (see [Values](../company/values.md)).
- **Services compose.** A typical journey is Discovery, then MVP Development, then SaaS Development, with AI Integrations or Team Augmentation layered in as needed. Continuity is the point.
- **Out-of-ICP requests** (simple institutional sites, one-page landing pages, cheapest-bid work) are politely declined or redirected. See [Ideal Customer Profile](../company/ideal-customer-profile.md).

---

## Maintaining this document

Keep this catalog in exact sync with `lib/siteConfig.ts` and the website Services section; if one changes, change the others in the same update. Review when we add, retire, or reshape a service. Add a new service only when we can deliver it at our senior bar and it serves the ICP.
