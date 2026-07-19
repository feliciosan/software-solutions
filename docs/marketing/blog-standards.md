# Blog Standards

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-19
Related: [Content Strategy](./content-strategy.md) · [Content Backlog](./content-backlog.md) · [SEO Checklist](../website/seo-checklist.md) · [Brand Positioning](../company/brand-positioning.md) · [Coding Conventions](../engineering/coding-conventions.md)

---

## Why this document exists

[Content Strategy](./content-strategy.md) decides what to write and why. This document is the operational standard for how to write and ship a single post: the editorial bar, the structure, the SEO requirements, and the exact technical steps to add it to the site. If a post does not meet this bar, it does not publish. A weak post is not neutral; it dilutes authority and SEO.

---

## 1. The editorial bar (every post must clear all of these)

- **Serves an ICP founder.** It answers a real question an in-profile founder has. See [Ideal Customer Profile](../company/ideal-customer-profile.md).
- **Has a point of view.** It takes a position, not a neutral survey. We are a senior partner, not Wikipedia.
- **Is genuinely useful.** A founder finishes it able to make a better decision.
- **Only we could have written it.** It carries our experience and opinion, not generic advice.
- **Is honest.** No invented stats, no fabricated outcomes, trade-offs stated plainly. See [Values](../company/values.md).
- **Reads as human.** Not AI boilerplate, not buzzword soup.

If any of these is false, revise or kill the piece.

---

## 2. Structure

A CodaCrew post is scannable and front-loaded.

- **Title:** clear and specific, promises a payoff, matches search intent. Prefer the founder's own phrasing ("How Long Does It Take to Build an MVP?").
- **Opening (1 to 2 short paragraphs):** state the question and the honest answer up front. Do not bury the lede or warm up slowly.
- **Body:** organized under descriptive `h2` headings. One idea per section. Short paragraphs. Use lists for criteria, steps, and trade-offs.
- **Closing:** a crisp takeaway or the one thing to remember. No filler conclusion.
- **CTA:** the post page already appends a founder CTA; the writing should lead naturally toward "talk to us," never with a hard sell.

Length is whatever the topic needs and no more. Depth beats word count. If it can be said in 800 useful words, do not pad it to 1500.

---

## 3. Voice and house style

Follow [Content Strategy](./content-strategy.md) section 3. The non-negotiables:

- Plain, direct, opinionated, founder-framed. Translate technical points into business consequences.
- Second person ("you"), active voice, verbs over nouns.
- **No em dash character.** Use commas, colons, periods, or parentheses.
- No hype, no fear-mongering, no "we build software" commodity framing.
- Define jargon on first use, or avoid it.

---

## 4. Bilingual requirement

Every post ships in both `en-US` and `pt-BR` with full parity. Neither is a raw machine translation; both read natively. If only one language is ready, the post waits. This mirrors the parity rule across the whole site (see [Website Strategy](../website/website-strategy.md)).

---

## 5. SEO requirements per post

From [SEO Checklist](../website/seo-checklist.md), the post-specific items:

- Unique `title` and `description` targeting one primary intent.
- Descriptive, keyword-bearing, kebab-case `slug` that is stable once published (never change a live slug without a redirect).
- One primary keyword cluster mapped to an ICP job to be done.
- Internal links to related posts and to relevant service pages, with descriptive anchor text.
- `author` and `date` set (they feed the `BlogPosting` schema and the byline).
- Accurate `readingMinutes`.
- Category chosen from the fixed taxonomy (Startup, SaaS, AI, Architecture, Software Engineering, Product, Cloud).

---

## 6. How to add a post (technical steps)

Posts live in the typed registry `lib/blog.ts` (no MDX dependency yet; this is the single swap point when we migrate). To publish:

1. **Add a `BlogPost` entry** to the `posts` array in `lib/blog.ts` with:
   - `slug` (kebab-case, stable), `category` (from `BlogCategory`), `date` (ISO `YYYY-MM-DD`), `readingMinutes`, `author`.
   - `content` with both `"en-US"` and `"pt-BR"` `LocalizedPost` objects: `title`, `description`, and a `body` array of `ContentBlock`s.
2. **Author the `body`** using the supported block types:
   - `{ type: "p", text: "..." }` for paragraphs.
   - `{ type: "h2", text: "..." }` for section headings.
   - `{ type: "ul", items: ["...", "..."] }` for lists.
   (If a post needs a block type we do not have yet, add it to the `ContentBlock` union and render it in the post page, rather than hacking markup into a paragraph.)
3. **Verify locally:** `npm run build` (the post is statically generated via `generateStaticParams`), then open `/en-US/blog/<slug>` and `/pt-BR/blog/<slug>`. Confirm the `<title>`, canonical, and JSON-LD (Article plus Breadcrumb).
4. **Confirm it appears** on `/blog` and in the homepage blog preview (latest three), and that `sitemap.xml` includes it.
5. **Run the quality gate** in [Website Strategy](../website/website-strategy.md) (build, lint, both locales, no em dash).

Coding conventions for the registry and rendering follow [Coding Conventions](../engineering/coding-conventions.md).

---

## 7. Images and media

- Prefer none over decorative filler. An image must add information.
- If used: optimized, with meaningful `alt` (or `aria-hidden` if decorative), no layout shift. See [UI Principles](../website/ui-principles.md).
- Illustrative product screenshots must be clearly illustrative, never implying a false client or metric.

---

## 8. Review and publishing workflow

1. **Draft** against the editorial bar (Section 1) and structure (Section 2).
2. **Self-edit** for clarity, honesty, and house style. Read it aloud; cut anything that does not earn its place.
3. **Peer review** by the other founder for accuracy and voice.
4. **Localize** to full parity.
5. **Technical add** (Section 6) and verify.
6. **Publish,** then distribute per [Content Strategy](./content-strategy.md) section 7.
7. **Update** the [Content Backlog](./content-backlog.md) status.

---

## 9. Maintenance of published posts

- Evergreen by intent: revisit periodically and update rather than let posts go stale.
- If a post underperforms, improve it (better title, intro, depth, internal links) before writing something new. Improving an existing ranking page often beats a new one.
- Fix inaccuracies immediately; our credibility is the asset.
- Never silently change a published slug; redirect if it must change.

---

## Maintaining this document

Update when the blog's technical model changes (for example, migrating `lib/blog.ts` to MDX), when the category taxonomy changes, or when we learn a repeatable editorial lesson worth encoding. Keep it operational: every rule should be checkable.
