# Values

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-19
Related: [Mission](./mission.md) · [Brand Positioning](./brand-positioning.md) · [Engineering Standards](../engineering/engineering-standards.md) · [Definition of Done](../engineering/definition-of-done.md) · [Client Onboarding](../sales/client-onboarding.md)

---

## Why this document exists

Values are only real if they cost something. A value you always find convenient is not a value, it is a preference. This document lists the small set of principles CodaCrew is willing to lose money and turn down work to uphold. Each one includes what it looks like in practice and, more importantly, the trade-off it forces, because a value with no trade-off is decoration.

Use this document when a decision feels wrong but you cannot say why. Usually one of these values is being violated.

---

## How to read a value

Each value has four parts:

- **The principle:** one sentence.
- **In practice:** what it looks like on a normal day.
- **The trade-off:** what we give up to keep it. This is the part that matters.
- **Violation looks like:** the anti-pattern to catch early.

---

## 1. Founders first, output second

**Principle.** We optimize for the founder's success, not for the volume of work we produce.

**In practice.** We talk a founder out of features they do not need. We recommend the smaller MVP. We say "you do not need us for that yet" when it is true.

**The trade-off.** We bill less in the short term. A scope we honestly cut is revenue we chose not to take.

**Violation looks like.** Padding scope, building what was asked instead of what was needed, measuring a good month by hours billed rather than founder outcomes. See [Mission](./mission.md).

---

## 2. Senior by default

**Principle.** The people doing the work are experienced enough to make the right call the first time.

**In practice.** Architecture and critical decisions are made by senior engineers. We do not learn on a client's budget or hide juniors behind a senior's résumé.

**The trade-off.** We cannot compete on the rate a body-shop offers, and we cannot scale headcount carelessly. Seniority is expensive and slow to hire.

**Violation looks like.** Staffing a project with capacity we do not have, over-promising availability, or letting the sales pitch describe a team the delivery does not match. See [Brand Positioning](./brand-positioning.md), section on credibility.

---

## 3. Speed without shortcuts

**Principle.** We move fast and keep quality high at the same time, because for a startup, slow and sloppy are both fatal.

**In practice.** Weekly sprints and demos, plus tests, code review, and CI/CD from day one. Fast this week and still fast next year.

**The trade-off.** Doing it right the first time is more work up front than a quick hack. We accept the slower first commit to avoid the expensive rewrite. This is codified in the [Definition of Done](../engineering/definition-of-done.md).

**Violation looks like.** Skipping tests "to hit the date," shipping code no one reviewed, treating CI/CD as optional. Fast that creates debt is not speed, it is a loan.

---

## 4. Radical clarity

**Principle.** The founder always understands what we are doing, why, and what it costs. No black boxes.

**In practice.** We explain technical decisions in plain language. We show progress in demos, not status reports. Estimates and trade-offs are stated openly, including the uncomfortable ones.

**The trade-off.** Transparency is more work than opacity, and it removes the cover that vagueness provides when things slip. We choose to be accountable in the open.

**Violation looks like.** Jargon used to impress rather than inform, surprises at the end of a sprint, a founder who cannot explain their own product's key decisions after working with us. See [Client Onboarding](../sales/client-onboarding.md).

---

## 5. Own the outcome

**Principle.** We behave like partners with skin in the game, not contractors delivering to a spec.

**In practice.** If something is wrong for the product, we say so even when it was not our task. We do not hide behind "you did not ask for that." We stay through launch and into scale.

**The trade-off.** Caring about outcomes means taking responsibility for problems we could have technically disclaimed. It is easier to just do the ticket.

**Violation looks like.** "Not my job," delivering something we know is wrong because it matched the letter of the request, disappearing after handoff.

---

## 6. Craft is a promise, not a preference

**Principle.** Quality is not negotiable down to zero under deadline pressure. The codebase is a promise to the founder's future self.

**In practice.** Readable, documented, tested code. Decisions recorded (see [Architecture Decisions](../engineering/architecture-decisions.md)). Consistency enforced (see [Coding Conventions](../engineering/coding-conventions.md)).

**The trade-off.** Craft has a cost that is invisible until the moment it saves you. We pay it anyway, because the alternative is billed to the founder later, with interest.

**Violation looks like.** "We will clean it up later" as a permanent state, undocumented decisions, a growing pile of "temporary" workarounds.

---

## 7. Honesty over polish

**Principle.** We never manufacture credibility. Real and modest beats impressive and fake.

**In practice.** Prior experience is framed as prior experience. We do not invent client names, revenue figures, or outcome metrics. Illustrative examples are labeled as examples. See [Brand Positioning](./brand-positioning.md) and the open items in [Roadmap](../website/roadmap.md).

**The trade-off.** An honest story is sometimes less shiny than a fabricated one. We accept looking smaller today to be trusted tomorrow.

**Violation looks like.** Inflated metrics, borrowed logos implying client relationships that did not exist, testimonials that were not given.

---

## 8. Bilingual and inclusive by default

**Principle.** We serve founders in English and Portuguese with equal quality, and we build products everyone can use.

**In practice.** Full en-US and pt-BR parity in customer-facing copy. Accessibility is a requirement, not a nice-to-have (see [UX Principles](../website/ux-principles.md)).

**The trade-off.** Parity and accessibility are more work on every change. We do the work rather than treat one language or one group of users as second class.

**Violation looks like.** A feature that ships in one language first "temporarily," inaccessible components, treating translation as an afterthought.

---

## Using these values in hiring and reviews

- **Hiring:** we screen for people who already live these, especially "senior by default," "own the outcome," and "honesty over polish." Skills can be taught faster than character.
- **Decisions:** when two options are close, pick the one that upholds more values, even if it bills less.
- **Conflict:** when two values collide (for example, speed versus craft), "speed without shortcuts" and "craft is a promise" are designed to be held together, not traded off. If you are trading one away, escalate rather than quietly choosing.

---

## Maintaining this document

Values change slowly. Add one only when we have repeatedly made the same hard call and want to make it explicit. Remove one only if we honestly no longer live it, in which case removing it is more honest than pretending. Review annually alongside [Mission](./mission.md).
