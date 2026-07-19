# Definition of Done

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-19
Related: [Engineering Standards](./engineering-standards.md) · [Coding Conventions](./coding-conventions.md) · [UX Principles](../website/ux-principles.md) · [SEO Checklist](../website/seo-checklist.md) · [Values](../company/values.md)

---

## Why this document exists

"Done" is the most abused word in software. Without a shared definition, "done" means "it worked on my machine once," and the gap becomes the client's problem later. This document defines what Done actually means at CodaCrew, so that finished work is genuinely finished: correct, tested, accessible, localized, reviewed, and shippable. It is the same standard for our own site and for client work, because "speed without shortcuts" (see [Values](../company/values.md)) only means something if Done is non-negotiable.

A task is Done when a teammate could ship it without asking you anything.

---

## 1. The universal Definition of Done

Every change (feature, fix, or content) must satisfy all of these before it is considered done and merged:

### Functionality
- [ ] Does what it should, verified against the actual requirement, not just "it compiles."
- [ ] Happy path and the important edge cases handled.
- [ ] Empty, loading, and error states designed and implemented, not just the success path.
- [ ] No known regressions in related areas.

### Code quality
- [ ] Follows [Coding Conventions](./coding-conventions.md) (naming, structure, server/client boundary).
- [ ] Reuses existing primitives; no duplicated component or constant.
- [ ] TypeScript strict passes; no unjustified `any`.
- [ ] Dead code removed; no commented-out blocks or stray `console.log`.
- [ ] Non-obvious decisions explained in a comment or an ADR (see [Architecture Decisions](./architecture-decisions.md)).

### Automated checks
- [ ] `npm run build` passes (typecheck plus static generation).
- [ ] `npm run lint` is clean.
- [ ] Tests for the logic and critical paths added or updated, and passing.
- [ ] CI is green.

### Accessibility (a requirement, not polish)
- [ ] Exactly one `h1`, ordered headings.
- [ ] Keyboard operable, with visible focus on every interactive element.
- [ ] `aria-label` on icon-only controls; meaningful `alt`, decorative images `aria-hidden`.
- [ ] Contrast passes on its background, including dark surfaces.
- [ ] `prefers-reduced-motion` respected.
See [UX Principles](../website/ux-principles.md).

### Localization and content
- [ ] All user-facing strings come from `messages/`, none hardcoded.
- [ ] Both `en-US` and `pt-BR` updated with parity; JSON valid.
- [ ] No em dash character in any copy (house style).
- [ ] Copy speaks to founders and matches [Brand Positioning](../company/brand-positioning.md); no invented claims.

### Responsive and cross-device
- [ ] Correct on mobile and desktop.
- [ ] Holds up with longer Portuguese text.
- [ ] No horizontal overflow; wide elements scroll within their own bounds.

### SEO (for anything user-facing or a new route)
- [ ] Metadata, canonical, and hreflang correct.
- [ ] JSON-LD for the page type present and valid.
- [ ] Sitemap and robots updated for new routes.
See [SEO Checklist](../website/seo-checklist.md).

### Performance
- [ ] No unnecessary client JavaScript added.
- [ ] No layout shift; media has reserved space.
- [ ] LCP not regressed on changed pages.

### Review and delivery
- [ ] Reviewed by another engineer (not self-merged for non-trivial work).
- [ ] PR describes what and why; small enough to review well.
- [ ] Verified in a real environment (preview/staging), not only locally.
- [ ] `main` stays green and deployable.

---

## 2. Definition of Done by work type

Not every item applies to every change. Use the relevant subset.

- **Content-only (blog post, copy):** editorial bar and structure ([Blog Standards](../marketing/blog-standards.md)), both locales, SEO per-page items, no em dash, build and lint green. Accessibility of any new markup still applies.
- **UI feature:** the full universal list.
- **Bug fix:** reproduce first, fix, add a test that would have caught it, verify no regression, then the universal quality and review items.
- **Refactor:** behavior unchanged (tests prove it), code measurably cleaner, no scope creep, ADR if the structure changed meaningfully.
- **Config or infra:** verified in a real environment, secrets via env vars, reversible, documented.

---

## 3. What Done does NOT mean

To keep the bar honest:

- Not "it works on my machine." It works in a real environment.
- Not "the happy path works." The error and empty states work too.
- Not "I will add tests later." Tests are part of the work.
- Not "English is done, Portuguese later." Parity or it waits.
- Not "it looks fine to me." It passed review and the accessibility checks.

"I will do it later" is how debt enters. Later rarely comes, and the founder pays for it.

---

## 4. Handling deadline pressure

When time is short, we cut scope, never the Definition of Done. The correct move is to ship a smaller thing that is truly done, not a larger thing that is half done. If Done genuinely cannot be met, that is an escalation and a conversation with the client (radical clarity, from [Values](../company/values.md)), not a silent lowering of the bar.

---

## 5. How this is enforced

- **Automated:** build, lint, typecheck, and tests gate every merge.
- **Human:** the reviewer checks the parts a machine cannot (judgment, accessibility, localization, copy, UX).
- **Cultural:** "senior by default" means engineers hold this without being told, and call out when a change is not actually done.

Treat this document as the checklist you run before saying the word "done." If you cannot check the relevant boxes, it is not.

---

## Maintaining this document

Update when our stack or standards change, or when a class of bug repeatedly slips through (add the check that would have caught it). Keep it a practical checklist, not a philosophy essay. Its value is that it is concrete enough to run.
