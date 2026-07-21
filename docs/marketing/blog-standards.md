# Blog Standards

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-21
Related: [Content Strategy](./content-strategy.md) · [Editorial Guidelines](./editorial-guidelines.md) · [Brand Voice](../company/brand-voice.md) · [Technical Deep Dive Template](./technical-deep-dive-template.md) · [Content Backlog](./content-backlog.md) · [SEO Checklist](../website/seo-checklist.md) · [Coding Conventions](../engineering/coding-conventions.md)

---

## Why this document exists

[Content Strategy](./content-strategy.md) decides what to write and why. This document is the operational standard for how to write and ship a single article: the bar, the structure, and the exact technical steps to publish. A weak article is not neutral; it dilutes our technical authority.

---

## 1. The editorial bar (every article clears all of these)

- **Teaches something real.** The reader finishes able to do or decide something better.
- **Demonstrates expertise.** It shows depth only an experienced engineer would have: internals, trade-offs, edge cases.
- **Technically accurate.** Code is tested, claims are verified, versions are current. See [Editorial Guidelines](./editorial-guidelines.md).
- **Practical.** Real, runnable examples, not toy snippets.
- **Opinionated with evidence.** Takes a position and backs it.
- **Only we could have written it.** Carries our experience and voice, not a rehash of docs.
- **Reads as human.** No generic AI-sounding filler.

If any is false, revise or kill it.

---

## 2. Structure

Scannable and front-loaded.

- **Title:** specific and honest, matches how an engineer would search ("How to test Next.js App Router with Playwright", not "Testing tips").
- **Opening (1 to 2 short paragraphs):** the problem and what the reader will get. No warm-up.
- **Body:** descriptive `h2` sections, one idea each, short paragraphs, lists for criteria/steps/trade-offs.
- **Code:** minimal, complete, runnable, version-aware; follows [Coding Conventions](../engineering/coding-conventions.md).
- **Diagrams:** include where they clarify architecture or flow (a diagram often beats three paragraphs).
- **Closing:** the key takeaway, plus what to read or try next.

Deep, structured pieces should use the [Technical Deep Dive Template](./technical-deep-dive-template.md). Length is whatever the topic needs and no more; depth beats word count.

---

## 3. Code and examples

- Fenced blocks with a language tag; inline code for identifiers.
- Examples must actually run; prefer complete-enough snippets over fragments.
- Pin versions or state the version assumed ("Next.js 15", "Node 22").
- Show the wrong way and the right way when it teaches.
- Keep examples focused on the point; strip unrelated noise.

---

## 4. Diagrams and images

- Use diagrams for architecture, data flow, and sequences.
- Optimize images; meaningful `alt`, or `aria-hidden` if decorative.
- Screenshots must be current and legible; annotate when helpful.
- No decorative filler images.

---

## 5. Voice and house style

Follow [Brand Voice](../company/brand-voice.md). Non-negotiables:

- Engineer to engineer, second person, active voice, direct.
- Define jargon on first use or avoid it.
- **No em dash character.** Use commas, colons, or periods.
- No hype, no fear, no clickbait, no padding.

---

## 6. Bilingual requirement

Every article ships in en-US and pt-BR with full parity. Both read natively; neither is a raw machine translation. If only one language is ready, the article waits.

---

## 7. SEO requirements per article

From [SEO Checklist](../website/seo-checklist.md): unique title/description, stable kebab-case slug, one primary intent, a topic cluster assignment, 2 to 4 internal links, author and date, accurate reading time, and correct JSON-LD.

---

## 8. How to add an article (technical steps)

Articles live in the typed registry `lib/blog.ts` (no MDX yet; the single swap point when we migrate).

1. **Add a `BlogPost` entry** with `slug` (kebab-case, stable), `category` (from the cluster taxonomy), `date` (ISO), `readingMinutes`, `author`, optional `cover` (1200x630), and `content` for both `"en-US"` and `"pt-BR"`.
2. **Author the `body`** with the supported `ContentBlock` types (`p`, `h2`, `ul`). If a needed block type is missing (for example a code block), add it to the `ContentBlock` union and render it in the post page rather than hacking markup into a paragraph.
3. **Verify locally:** `npm run build`, then open `/en-US/blog/<slug>` and `/pt-BR/blog/<slug>`; check `<title>`, canonical, and JSON-LD.
4. **Confirm** it appears on `/blog`, in the homepage preview, and in `sitemap.xml`.
5. **Run the quality gate** in [Website Strategy](../website/website-strategy.md) (build, lint, both locales, no em dash).

---

## 9. Review workflow

1. Draft against the bar (Section 1) and structure (Section 2).
2. Self-edit for accuracy, clarity, and voice; run every code sample.
3. Peer review by the other founder for technical accuracy and voice.
4. Localize to full parity.
5. Technical add (Section 8) and verify.
6. Publish, then distribute per [LinkedIn Growth Playbook](./linkedin-growth-playbook.md).
7. Update the [Content Backlog](./content-backlog.md) status.

---

## 10. Maintaining published articles

- Evergreen by intent: update rather than let posts rot; refresh code and versions and note "last updated".
- Improve an underperforming article before writing a new competing one.
- Fix inaccuracies immediately; our credibility is the asset.
- Never silently change a live slug; redirect if it must change.

---

## Maintaining this document

Update when the blog's technical model changes (for example, migrating `lib/blog.ts` to MDX or adding code-block components) or when we learn a repeatable editorial lesson. Keep it operational and checkable.
