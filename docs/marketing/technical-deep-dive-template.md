# Technical Deep Dive Template

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-21
Related: [Content Strategy](./content-strategy.md) · [Blog Standards](./blog-standards.md) · [Editorial Guidelines](./editorial-guidelines.md) · [Brand Voice](../company/brand-voice.md) · [Coding Conventions](../engineering/coding-conventions.md)

---

## Why this document exists

The deep dive is our signature format: a thorough, honest, technical article that shows real engineering. This template gives every deep dive a consistent, proven shape so it teaches well and reads like it came from the same team. Use it for architecture explorations, tooling breakdowns, performance work, and lessons learned.

Rule: everything is real. Real code, real trade-offs, real numbers. No invented benchmarks, no fabricated results (see [Editorial Guidelines](./editorial-guidelines.md)).

---

## 1. The shape (why these sections)

Engineers read deep dives to understand not just *how* but *why*: the problem, the reasoning, the trade-offs, and what you would do differently. The canonical sections are: **Problem, Context, Architecture, Implementation, Trade-offs, Lessons Learned, Conclusion.**

---

## 2. The template

Copy everything below the line into a new article and fill it in. Delete the guidance in parentheses.

---

### [Specific, searchable title]

**Cluster:** (Next.js / NestJS / Node.js / TypeScript / Databases / Testing / CI/CD / Architecture / Performance / DX / AI for developers)
**Stack:** (e.g. Next.js 15, NestJS, PostgreSQL, Playwright)
**Reading time:** (estimate)

**Intro (2 to 3 sentences).**
(State the problem and what the reader will get. No warm-up.)

#### Problem
(What problem are we solving? Why does it matter to an engineer? Make it concrete. State the constraints honestly, including what makes it hard.)

#### Context
(The setting: the stack, scale, requirements, and any assumptions. Enough for the reader to map it to their own situation. Link prerequisites instead of re-explaining basics.)

#### Architecture
(The design and the key decisions. Show the shape with a diagram where it helps. Explain the reasoning, not just the result: why this structure, why these boundaries.)

#### Implementation
(The concrete work, with real, runnable, minimal code. Show the important parts, not every line. Version-aware. Highlight the non-obvious bits and gotchas.)

```ts
// Real, minimal, runnable example. Follows Coding Conventions.
```

#### Trade-offs
(What you gave up, what you would revisit, and the alternatives you considered and rejected, with reasons. This section is what separates a deep dive from a tutorial. Be honest.)

#### Lessons Learned
(What you would do differently, what surprised you, what to watch out for. Concrete and specific.)

#### Conclusion
(The one or two things to remember. Optionally point to related articles or a next step to try.)

---

## 3. Writing guidance

- **Lead with the point,** then go deep. Busy engineers scan first.
- **Show judgment, not just output.** The interesting part is the decision and the trade-off.
- **Real code and real numbers.** If you cite a benchmark, it must be real and reproducible; describe the setup.
- **Be specific.** "Cut p95 from 800ms to 210ms by adding an index on (user_id, created_at)" beats "improved performance".
- **Diagrams for architecture and flow.** A diagram often replaces three paragraphs.
- Follow [Brand Voice](../company/brand-voice.md) and [Blog Standards](./blog-standards.md): no em dash, en-US and pt-BR parity, no fluff.

---

## 4. Quality gate before publishing

- [ ] Every code sample runs and is version-aware.
- [ ] Every claim and number is real and, where relevant, reproducible.
- [ ] Trade-offs and lessons are honest and specific.
- [ ] Diagrams included where they clarify.
- [ ] Both locales, house style respected (no em dash).
- [ ] A senior engineer would learn something and respect it.

---

## Maintaining this document

Update the template as we learn which sections and formats teach best. Keep the honesty rules strict; they are why a CodaCrew deep dive is worth reading.
