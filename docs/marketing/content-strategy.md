# Content Strategy

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-19
Related: [Brand Positioning](../company/brand-positioning.md) · [Ideal Customer Profile](../company/ideal-customer-profile.md) · [Blog Standards](./blog-standards.md) · [Content Backlog](./content-backlog.md) · [SEO Checklist](../website/seo-checklist.md) · [Case Study Template](./case-study-template.md)

---

## Why this document exists

Content is how CodaCrew earns trust at scale before a founder ever contacts us. It is the mission ("help founders turn ideas into scalable products," see [Mission](../company/mission.md)) expressed as generosity: we give away the thinking so that the founders who need a partner recognize us as the obvious one. This document defines what we publish, for whom, in what voice, and why. It governs the blog first, and by extension every word we put in public.

The strategic bet: **be the most useful voice for early-stage founders on the technical decisions that make or break a product.** Useful compounds. Clever does not.

---

## 1. Goals

Content serves three goals, in order:

1. **Trust and authority.** Demonstrate that we understand founders' real problems better than a generic agency ever could.
2. **Organic growth.** Rank for the questions founders actually search, and turn readers into qualified conversations. See [SEO Checklist](../website/seo-checklist.md).
3. **Sales enablement.** Give the sales conversation a library to point to ("we wrote about exactly this").

Content is not for impressing other engineers, chasing traffic that never converts, or publishing on a schedule for its own sake.

---

## 2. Audience

We write for the [Ideal Customer Profile](../company/ideal-customer-profile.md): early-stage founders and small product teams. Concretely, the reader is often:

- A non-technical or semi-technical founder trying to make a technical decision.
- A founder deciding how to build (freelancer vs agency vs hire vs partner).
- A founder worried about cost, speed, scale, or being taken advantage of.

We are not writing for senior engineers looking for deep implementation tutorials. When we go technical, we translate it into founder consequences (cost, speed, risk, scalability).

---

## 3. Voice and tone

Our voice is the same everywhere: the website, the blog, proposals, social. It follows directly from [Brand Positioning](../company/brand-positioning.md).

**We sound like:** a senior technical co-founder giving a straight, generous answer over coffee. Confident, direct, warm, and honest, including about trade-offs.

**Principles:**
- **Plain over clever.** If a smart founder without a CS degree cannot follow it, rewrite it.
- **Opinionated.** We take positions. "It depends" is only acceptable when we then say what it depends on.
- **Founder-framed.** Translate technology into business consequences.
- **Honest.** We name trade-offs and limits. We never oversell or invent proof (see [Values](../company/values.md)).
- **Concise.** Respect the reader's time. Cut throat-clearing and filler.

**We avoid:** hype, buzzword soup, fear-mongering, "we build software" commodity framing, and anything that reads as AI-generated boilerplate.

**House style (hard rules):**
- No em dash character. Use commas, colons, periods, or parentheses.
- American English for `en-US`, Brazilian Portuguese for `pt-BR`, full parity, neither a machine-translation afterthought.
- Active voice, second person ("you"), verbs over nouns.

---

## 4. Content pillars

Everything we publish maps to one of these pillars, which mirror the positioning pillars and the [Service Catalog](../sales/service-catalog.md):

1. **Startup and MVP.** Validation, scope, cost, timelines, first users. (Category: Startup, Product.)
2. **SaaS and scale.** Architecture, growth, avoiding rewrites, technical debt. (Category: SaaS, Architecture, Cloud.)
3. **AI applied to business.** Practical AI and automation for real products, not hype. (Category: AI.)
4. **Building well.** Engineering practices translated for founders: why tests, CI/CD, and code review protect their investment. (Category: Software Engineering.)
5. **Hiring and partnership.** Freelancer vs agency vs hire vs partner, working with a technical team, when to bring in help. (Category: Product, Startup.)

The blog category taxonomy (Startup, SaaS, AI, Architecture, Software Engineering, Product, Cloud) is defined in `lib/siteConfig.ts` and must stay in sync.

---

## 5. Content types

- **Founder guides (primary).** Answer a real question a founder searches ("How long does it take to build an MVP?"). Practical, opinionated, evergreen. This is the core of the blog.
- **Decision frameworks.** Help a founder choose (MVP vs full product, when to hire a technical partner). High sales value.
- **Case studies.** Real project stories using the [Case Study Template](./case-study-template.md). Strongest proof asset; gated by having real results to share honestly.
- **Perspective pieces.** Our opinion on a shift that matters to founders (how AI changes building products). Builds authority.
- **Service pages.** SEO-and-conversion landing pages per service, owned jointly with the website (see [Roadmap](../website/roadmap.md)).

---

## 6. Topic selection and prioritization

A topic earns a place when it satisfies all three:

1. **ICP relevance:** it answers a question an in-profile founder actually has.
2. **Search or sales demand:** people search for it, or it recurs in sales conversations.
3. **Right to speak:** we have genuine, senior experience to offer, not a rehash.

Prioritize with a simple lens: **impact (does it serve an ICP job to be done and rank) over effort.** The living, ranked list lives in [Content Backlog](./content-backlog.md).

---

## 7. Distribution

Publishing is not the finish line.

- **Blog** is the home base (owned, indexable, evergreen).
- **LinkedIn** (founders' and company) for reach into the founder network. Repackage the article's core argument, link back.
- **Sales** reuses articles directly in conversations and proposals.
- **SEO** is the long game: internal linking, service-page links, and the home page blog preview all drive discovery.

Every piece of content should be reusable across at least two of these.

---

## 8. Cadence and quality bar

- **Quality over frequency, always.** One genuinely useful article beats four thin ones. A thin post is a net negative: it dilutes authority and SEO.
- Start with a sustainable cadence the founders can actually hold, and never sacrifice the quality bar to hit a date.
- Every article meets [Blog Standards](./blog-standards.md) before publishing, and the SEO items in [SEO Checklist](../website/seo-checklist.md).

---

## 9. Measurement

Track what maps to the goals in Section 1, not vanity:

- **Authority and growth:** organic entrances, keyword rankings, returning readers, articles that rank on page one.
- **Conversion:** blog-to-contact and blog-to-WhatsApp actions (PostHog).
- **Sales enablement:** how often content is used in deals, and whether prospects reference it.

Feed every learning back into the [Content Backlog](./content-backlog.md). Low performers get improved or retired, not left to rot.

---

## 10. Guardrails

- Never invent statistics, client names, or outcomes. Honesty is a competitive advantage. See [Brand Positioning](../company/brand-positioning.md).
- Never publish content a competitor could have written with their logo swapped in. If it is not distinctly ours, it is not ready.
- Never write for crawlers at the expense of founders.
- Always ship both language versions, or hold the piece until both are ready.

---

## Maintaining this document

Review quarterly, and whenever positioning, ICP, or the service mix changes. The strategy is stable; the backlog is where fast-moving decisions live. Keep this document about principles and let [Content Backlog](./content-backlog.md) carry the specifics.
