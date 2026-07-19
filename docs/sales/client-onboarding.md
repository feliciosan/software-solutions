# Client Onboarding

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-19
Related: [Proposal Guidelines](./proposal-guidelines.md) · [Service Catalog](./service-catalog.md) · [Values](../company/values.md) · [Engineering Standards](../engineering/engineering-standards.md) · [Definition of Done](../engineering/definition-of-done.md) · [Case Study Template](../marketing/case-study-template.md)

---

## Why this document exists

The first two weeks set the tone for the entire relationship. A confident, organized onboarding proves the "senior partner" promise immediately; a chaotic one undermines it before we write a line of code. This document is the repeatable process for turning a signed client into a running engagement, and for keeping the partnership healthy after that. It exists so that onboarding does not depend on memory, and so every client gets the same excellent start.

Governing value, from [Values](../company/values.md): **radical clarity.** From day one, the founder always knows what is happening, why, and what comes next.

---

## 1. Onboarding goals

By the end of onboarding, all of these are true:

- The client feels confident they chose the right partner.
- Scope, timeline, and expectations are shared and written down.
- Communication channels and cadence are set.
- We have the access and information to start building.
- The first sprint is planned and the first demo is scheduled.

---

## 2. The onboarding sequence

### Step 0: Handoff from sales (day 0)
- The winning proposal, agreed scope, assumptions, and any commercial notes are captured (see [Proposal Guidelines](./proposal-guidelines.md)).
- Contract and payment terms confirmed.
- Nothing important lives only in someone's memory or inbox.

### Step 1: Kickoff (week 1)
A single, well-run kickoff call sets the tone.
- Align on the goal and definition of success, in the founder's words.
- Confirm scope, phases, and what is explicitly out of scope.
- Agree communication channels and cadence (Section 3).
- Set the sprint rhythm and schedule the first demo.
- Name the point people on both sides.

### Step 2: Access and setup (week 1)
- Collect access: repositories, cloud accounts, domains, design assets, third-party services, credentials.
- Handle secrets securely (never over email or chat in plain text; use a proper secret channel). See [Engineering Standards](../engineering/engineering-standards.md).
- Stand up project infrastructure: repository, environments, CI/CD, project board.
- Confirm the client owns their accounts and code from the start.

### Step 3: Discovery and planning (week 1 to 2)
- Refine the backlog and cut to the core (for an MVP, ruthlessly).
- Produce a shared, lightweight plan: sprint goals and the first milestones.
- Surface risks and unknowns early and honestly.
- Record key technical decisions as they are made (ADRs, see [Architecture Decisions](../engineering/architecture-decisions.md)).

### Step 4: First sprint and first demo (week 2 onward)
- Ship real, visible progress in the first sprint. Momentum builds trust.
- Run the first demo on schedule. Demos, not status reports, are how we show progress.
- Adjust based on feedback and set the rhythm for the engagement.

---

## 3. Communication and cadence

Clarity is a deliverable. Defaults, adjustable per client:

- **Direct access.** The founder talks to the engineers building their product, not through a layer. This is a differentiator; protect it.
- **A shared channel** (for example Slack) for day-to-day, with a reasonable response expectation stated up front.
- **Weekly demo** of working software.
- **Weekly written update** summarizing progress, next steps, risks, and any decisions needed.
- **Decisions in writing.** Anything that affects scope, timeline, or budget is confirmed in text, not left verbal.

Set expectations explicitly at kickoff: response times, meeting cadence, and how change requests are handled.

---

## 4. Expectation setting (say these out loud)

Misalignment is the root of most engagement pain. State plainly at the start:

- **How we work:** weekly sprints, demos, tests, code review, and CI/CD included from day one (see [Definition of Done](../engineering/definition-of-done.md)).
- **What "done" means** for the work, so quality is not a surprise.
- **How change is handled:** new scope is welcome and is a conversation about trade-offs, not a silent addition.
- **Ownership:** the client owns their code and accounts throughout.
- **Honesty:** we will tell them the truth about trade-offs, risks, and timelines, including the uncomfortable ones (see [Values](../company/values.md)).

---

## 5. Information to collect at onboarding

- Business context: goal, users, what success looks like, key deadlines.
- Product context: existing assets, designs, brand, prior code or systems.
- Technical access: repos, cloud, domains, third-party services, secrets (handled securely).
- Stakeholders: who decides, who to talk to, who reviews.
- **Consent for future case study material:** agree up front what may be shared publicly (name, logo, metrics, quote), so a real [case study](../marketing/case-study-template.md) is possible later without scrambling.

---

## 6. Onboarding checklist

- [ ] Sales handoff captured (scope, assumptions, commercial notes).
- [ ] Contract and payment terms confirmed.
- [ ] Kickoff call held; goal and success defined.
- [ ] Scope, phases, and exclusions written and shared.
- [ ] Communication channel and cadence agreed.
- [ ] Access and secrets collected securely.
- [ ] Repository, environments, and CI/CD set up.
- [ ] Backlog refined; first sprint planned.
- [ ] First demo scheduled.
- [ ] Case study consent discussed.
- [ ] Client knows exactly what happens next.

---

## 7. Keeping the partnership healthy (post-onboarding)

Onboarding never really ends; it becomes the operating rhythm.

- Keep demos and written updates consistent, even when things are going well.
- Raise risks early. Bad news early is a gift; bad news late is a betrayal of trust.
- Revisit scope and priorities as the product and its users teach us things.
- Behave like a partner: if something is wrong for the product, say so, even when it was not the assigned task (own the outcome, see [Values](../company/values.md)).
- Plan the next stage. The relationship is the product; MVP leads to SaaS leads to scale.

---

## 8. Offboarding and handoff (when a phase ends)

Even our exits reflect the brand.

- The client has full ownership and access to code, infrastructure, and documentation.
- Documentation is sufficient for their team (or the next partner) to maintain and extend.
- A clean handoff or a clear plan for ongoing support.
- Gather feedback and, with consent, the material for a case study.
- Leave the door open. A great ending is the best setup for the next engagement and the best referral source.

---

## Maintaining this document

Update when we learn a repeatable onboarding lesson (something that went wrong once should become a checklist item). Keep it practical and current. A smooth, confident onboarding is one of the cheapest, highest-leverage ways to prove we are the senior partner we claim to be.
