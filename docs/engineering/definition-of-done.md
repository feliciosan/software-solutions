# Definition of Done

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-21
Related: [Engineering Standards](./engineering-standards.md) · [Coding Conventions](./coding-conventions.md) · [UX Principles](../website/ux-principles.md) · [SEO Checklist](../website/seo-checklist.md) · [Editorial Guidelines](../marketing/editorial-guidelines.md) · [Blog Standards](../marketing/blog-standards.md)

---

## Why this document exists

"Done" is the most abused word in software. Without a shared definition, "done" means "it worked once on my machine," and the gap becomes a public bug or an inaccurate article. This document defines what Done means at CodaCrew for both **code** and **content**, because we are a publication built on engineering credibility: sloppy either way costs us trust.

A task is Done when a teammate could ship it without asking you anything.

---

## 1. Universal Definition of Done (code)

Every code change must satisfy all of these before merge:

### Functionality
- [ ] Does what it should, verified against the requirement, not just "it compiles".
- [ ] Happy path and important edge cases handled.
- [ ] Empty, loading, and error states implemented, not just the success path.
- [ ] No known regressions in related areas.

### Code quality
- [ ] Follows [Coding Conventions](./coding-conventions.md) (naming, structure, server/client boundary, semantic tokens).
- [ ] Reuses existing primitives; no duplicated component or constant.
- [ ] TypeScript strict passes; no unjustified `any`.
- [ ] Dead code removed; no stray `console.log` or commented-out blocks.
- [ ] Non-obvious decisions explained in a comment or an ADR.

### Automated checks
- [ ] `npm run build` passes (typecheck plus static generation).
- [ ] `npm run lint` is clean.
- [ ] Tests for logic and critical paths added or updated, and passing.
- [ ] CI is green.

### Accessibility
- [ ] One `h1`, ordered headings; keyboard operable; visible focus.
- [ ] `aria-label` on icon-only controls; meaningful `alt`; decorative images `aria-hidden`.
- [ ] WCAG AA contrast on light and dark surfaces.
- [ ] `prefers-reduced-motion` respected.

### Localization and content
- [ ] All user-facing strings from `messages/`, none hardcoded.
- [ ] en-US and pt-BR updated with parity; JSON valid.
- [ ] No em dash character in copy.
- [ ] Copy matches [Brand Voice](../company/brand-voice.md); no selling or "customer" framing.

### Responsive and performance
- [ ] Correct on mobile and desktop; holds up in Portuguese.
- [ ] No horizontal overflow; wide elements scroll within bounds.
- [ ] No unnecessary client JS; no layout shift; LCP not regressed.

### SEO (for user-facing routes)
- [ ] Metadata, canonical, and hreflang correct.
- [ ] JSON-LD for the page type present and valid.
- [ ] Sitemap and robots updated for new routes.

### Review and delivery
- [ ] Reviewed by another engineer (no self-merge for non-trivial work).
- [ ] Verified in a real environment (preview/staging), not only locally.
- [ ] `main` stays green and deployable.

---

## 2. Definition of Done (published article)

Content is a first-class deliverable. An article is Done only when:

- [ ] Meets the editorial bar and structure in [Blog Standards](./blog-standards.md).
- [ ] **Technical accuracy reviewed:** every code sample runs, claims are verified against primary sources, versions are stated (see [Editorial Guidelines](../marketing/editorial-guidelines.md)).
- [ ] **Code examples** are minimal, runnable, and follow [Coding Conventions](./coding-conventions.md).
- [ ] **Diagrams** included where they clarify architecture or flow.
- [ ] **Screenshots** (if used) are current, legible, and have meaningful `alt`.
- [ ] Documentation quality: clear structure, scannable, concise, no generic AI-sounding prose.
- [ ] en-US and pt-BR parity; no em dash.
- [ ] SEO items complete (see [SEO Checklist](../website/seo-checklist.md)): metadata, slug, cluster, internal links, author, date, JSON-LD.
- [ ] Peer-reviewed by the other founder for accuracy and voice.
- [ ] Distribution planned (see [LinkedIn Growth Playbook](../marketing/linkedin-growth-playbook.md)).

---

## 3. What Done does NOT mean

- Not "it works on my machine." It works in a real environment.
- Not "the happy path works." Error and empty states work too.
- Not "I will add tests later." Tests are part of the work.
- Not "the code sample looks right." It was actually run.
- Not "English is done, Portuguese later." Parity or it waits.

---

## 4. Handling time pressure

When time is short, we cut scope, never the Definition of Done. Ship a smaller thing that is truly done over a larger thing half done. For articles, publish fewer pieces rather than inaccurate ones. If Done genuinely cannot be met, that is a conversation, not a silent lowering of the bar.

---

## 5. Enforcement

- **Automated:** build, lint, typecheck, and tests gate every merge.
- **Human:** the reviewer checks what a machine cannot: judgment, accessibility, localization, voice, and (for articles) technical accuracy.
- **Cultural:** our credibility depends on this. We hold the bar because inaccurate content or a broken site undermines everything we publish.

---

## Maintaining this document

Update when the stack or standards change, or when a class of bug or content error repeatedly slips through (add the check that would have caught it). Keep it a practical checklist that is genuinely run.
