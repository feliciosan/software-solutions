# UX Principles

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-21
Related: [Website Strategy](./website-strategy.md) · [UI Principles](./ui-principles.md) · [SEO Checklist](./seo-checklist.md) · [Blog Standards](../marketing/blog-standards.md) · [Engineering Standards](../engineering/engineering-standards.md)

---

## Why this document exists

We are a publication, so UX is mostly about one thing: **making excellent technical content easy to find and a pleasure to read.** These principles apply to the CodaCrew website first, and to any product we build second. They are opinionated and enforceable.

Guiding sentence: **optimize every screen for reading and discovery.**

---

## 1. Optimize for reading

The article page is the most important screen we have.

- **Typography first.** Comfortable font size (about 18px body), generous line height (around 1.6 to 1.7), and a readable measure (about 65 to 75 characters per line).
- **Calm layout.** Plenty of whitespace, clear hierarchy, no sidebars competing with the text.
- **Long-form friendly.** Headings, short paragraphs, and pacing that make a 10-minute read feel effortless.
- **Reading aids.** Reading time, publish/updated date, and author are visible without clutter.

---

## 2. Code snippets are a core UX element

Engineers judge us by our code blocks.

- **Readable:** proper syntax highlighting, adequate contrast, monospaced, comfortable padding.
- **Copyable:** a one-click copy affordance (planned) and code that is complete enough to run.
- **Language-aware:** language labels; do not wrap or truncate important lines.
- **Honest:** examples match what we claim and are version-aware.

---

## 3. Fast scanning

Engineers scan before they commit to reading.

- Lead with the point; make the value obvious in the first screen.
- Descriptive headings that tell the story on their own.
- Chips, lists, and callouts for criteria, steps, and trade-offs.
- A reader should get the gist from headings alone.

---

## 4. Discoverability and navigation

Help readers find the next thing worth reading.

- **Topic navigation:** clear entry points into clusters (see [Topic Clusters](../marketing/topic-clusters.md)).
- **Related articles:** surface relevant posts at the end of each article (planned).
- **Category and author pages:** browsable groupings that build authority and keep readers on-site.
- **Search:** fast, forgiving search (planned).
- **Internal linking:** every article links to related content naturally.

---

## 5. Respect attention and speed

Perceived speed is a feature and a trust signal.

- Optimize first paint and LCP: minimal priority images, inline SVG/CSS, server-first rendering.
- No layout shift; reserve space for media and code.
- Ship minimal client JavaScript; hydrate only what must be interactive.
- Motion is subtle and purposeful, and respects `prefers-reduced-motion`.

---

## 6. Accessibility is a requirement

We build for every engineer.

- Exactly one `h1` per page, then ordered `h2`/`h3`.
- Full keyboard operability with a visible focus ring on every interactive element.
- Real buttons and links; `aria-label` on icon-only controls; meaningful `alt`, decorative images `aria-hidden`.
- WCAG AA contrast on light and dark surfaces; never rely on color alone.
- Forms: labels tied to inputs, errors announced in text.

Accessibility failures are bugs, not polish. See [Definition of Done](../engineering/definition-of-done.md).

---

## 7. Mobile and bilingual first

- Mobile is the baseline; desktop is the enhancement.
- No horizontal scroll; wide elements (tables, code) scroll within their own bounds.
- Layouts survive Portuguese, which often runs longer than English. Test both locales.
- Comfortable touch targets; nothing important hidden behind hover on touch.

---

## 8. Content is UX

- Microcopy is part of the interface; keep it clear and honest.
- Write for the busy engineer: front-load meaning, cut filler, prefer verbs.
- Voice follows [Brand Voice](../company/brand-voice.md): direct, technical, no fluff.

---

## 9. Evaluation checklist

Before shipping a change:

- [ ] Is the article comfortable to read (size, spacing, measure)?
- [ ] Are code blocks readable and complete?
- [ ] Can I understand the page from headings alone?
- [ ] Can readers easily find related and topic content?
- [ ] Keyboard, focus, and contrast pass?
- [ ] Holds up on mobile and in Portuguese?
- [ ] Fast, with no layout shift?

If any answer is "no," it is not done.

---

## Maintaining this document

Update from real reader behavior (analytics, feedback) and when new reading or discovery patterns become standard. Keep the principles few and enforced.
