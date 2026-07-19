# UX Principles

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-19
Related: [Website Strategy](./website-strategy.md) · [UI Principles](./ui-principles.md) · [SEO Checklist](./seo-checklist.md) · [Brand Positioning](../company/brand-positioning.md) · [Engineering Standards](../engineering/engineering-standards.md) · [Definition of Done](../engineering/definition-of-done.md)

---

## Why this document exists

UX is where our positioning is either proven or exposed. We tell founders we build clear, fast, scalable products. If our own site is confusing, slow, or inaccessible, the pitch dies on contact. These principles apply first to the CodaCrew website and second to every product we build for clients. They are opinionated and enforceable, not aspirational.

The guiding sentence: **every screen should make the next action obvious and the current state clear.**

---

## 1. Clarity beats cleverness

The visitor is a busy founder, not an audience for our creativity.

- Say the obvious thing plainly. A headline the reader understands beats a headline they admire.
- One primary action per view. Secondary actions are visibly secondary.
- Remove anything that does not help the user decide or act. Empty cleverness is a cost, not a feature.
- If a section needs a caption to explain what it is, redesign the section.

---

## 2. Respect attention and speed

Perceived speed is a feature and a trust signal.

- Optimize the first meaningful paint. Keep the hero light: minimal `priority` images, inline SVG and CSS over heavy assets. See [UI Principles](./ui-principles.md).
- Do not block content on JavaScript that is not needed. Server-render by default; hydrate only what must be interactive.
- No layout shift. Reserve space for media. Content should not jump as it loads.
- Motion is subtle and purposeful. No animation for its own sake, and never animation that delays comprehension.

---

## 3. Guide, do not dump

Structure information as a path, not a pile.

- Progressive disclosure: lead with the outcome, reveal detail on demand.
- One idea per section, in a deliberate order that builds an argument (see the home page narrative in [Website Strategy](./website-strategy.md)).
- Scannable by default: meaningful headings, short paragraphs, chips and lists over walls of text.
- The reader should be able to skim the headings alone and still get the story.

---

## 4. Conversion is a courtesy, not a trap

We help the visitor take the next step; we never manipulate them into it.

- CTAs are honest about what happens next ("Schedule a Free Call," "No commitment").
- Provide multiple low-friction paths: form, WhatsApp, sticky CTA. Let the user choose.
- Never use fake scarcity, dark patterns, or forced steps. Trust is the whole game.
- The contact form asks only for what we need. Every extra field is friction and a reason to leave.

---

## 5. Accessibility is a requirement, not a setting

We build for everyone, and this is non-negotiable per [Values](../company/values.md).

- **Structure:** exactly one `h1` per page, then ordered `h2`/`h3`. Headings describe content, not style.
- **Keyboard:** everything operable by keyboard, with a visible focus ring on every interactive element.
- **Semantics:** real buttons and links, `aria-label` on icon-only controls, `alt` text on meaningful images, `aria-hidden` on decorative ones.
- **Color and contrast:** meet WCAG AA. Never rely on color alone to convey meaning.
- **Motion:** honor `prefers-reduced-motion`; animations reduce to near-instant.
- **Forms:** labels tied to inputs, errors announced in text (not color alone), readable on their background (light labels on dark sections).

Accessibility failures are treated as bugs, not polish. See [Definition of Done](../engineering/definition-of-done.md).

---

## 6. Design for mobile and both languages first

- **Mobile-first:** the primary experience is a phone. The desktop is the enhancement, not the baseline.
- **Responsive containers:** content reflows and never causes horizontal scroll. Wide elements scroll within their own bounds.
- **Bilingual layouts:** designs must survive Portuguese, which often runs longer than English. Never hardcode widths that assume English length. Test both locales.
- Touch targets are comfortable (at least 44px), spacing is generous, and nothing important hides behind hover on touch devices.

---

## 7. Feedback and system state

The user should never wonder what is happening.

- Every action gets immediate feedback (loading, success, error states on forms and buttons).
- Errors are human and specific ("Please enter a valid email"), never a raw code or a dead end.
- Success is confirmed clearly. Destructive or irreversible actions ask first (relevant for client products).
- Anchor navigation scrolls smoothly to the target and accounts for the fixed header, so users are never dropped into a section hidden under the nav.

---

## 8. Consistency lowers cognitive load

- Reuse shared primitives (`Button`, `Container`, `Section`, `Icon`) rather than one-off components. Consistency is a UX feature, not just an engineering one. See [Coding Conventions](../engineering/coding-conventions.md).
- The same action looks the same everywhere. The same concept uses the same word everywhere (see the terminology table in [Brand Positioning](../company/brand-positioning.md)).
- Predictable patterns let users transfer what they learned on one screen to the next.

---

## 9. Content is UX

- Microcopy is part of the interface. "No commitment, free 30-min call" does real UX work.
- Write for the anxious skimmer: front-load meaning, cut filler, prefer verbs.
- Voice follows [Content Strategy](../marketing/content-strategy.md): direct, founder-facing, confident, no jargon-for-jargon's-sake.

---

## 10. How we evaluate UX

Before shipping, review a change against this checklist:

- [ ] Is the primary action on this view obvious within a few seconds?
- [ ] Can I understand the page from the headings alone?
- [ ] Does it work by keyboard, with visible focus, and pass a contrast check?
- [ ] Does it hold up on a small screen and in Portuguese?
- [ ] Are loading, empty, and error states designed, not just the happy path?
- [ ] Did I remove everything that does not help the user decide or act?
- [ ] Is motion subtle and reduced for `prefers-reduced-motion`?

If any answer is "no," it is not done. This checklist is part of the [Definition of Done](../engineering/definition-of-done.md).

---

## Maintaining this document

Update when we learn something from real user behavior (analytics, session recordings, sales feedback) or when a new pattern becomes common enough to standardize. UX principles should be few, sharp, and enforced, not a growing wish list.
