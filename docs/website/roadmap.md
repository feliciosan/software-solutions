# Website Roadmap

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-21
Related: [Website Strategy](./website-strategy.md) · [SEO Checklist](./seo-checklist.md) · [Content Backlog](../marketing/content-backlog.md) · [Editorial Calendar](../marketing/editorial-calendar.md) · [Engineering Standards](../engineering/engineering-standards.md)

---

## Why this document exists

The canonical roadmap for the website as an engineering publication. It tracks what to build next to help engineers discover and read great JS/TS content, and to grow our audience. It is a living checklist.

Current state: content-first site live (hero with the engineers, topics, latest articles, contact), Moss & Stone design system, SEO foundation, blog scaffold with real articles. `npm run build` passing, `npm run lint` clean, both locales.

---

## 0. Validation checklist (data and config)

- [ ] Confirm the real production domain in `NEXT_PUBLIC_BASE_URL`.
- [ ] Founders' LinkedIn URLs in `lib/siteConfig.ts` (personal profiles are not the primary channel; the company page leads).
- [ ] Verify social handles used in JSON-LD (`github.com/codacrew`, `linkedin.com/company/codacrew`).
- [ ] Set `NEXT_PUBLIC_GOOGLE_VERIFICATION` and submit the sitemap.

---

## 1. High priority (reading and discovery)

- [ ] **Related articles** at the end of each post (topic-based). Biggest lever for time-on-site.
- [ ] **Category / topic pages** (indexable) for each cluster in [Topic Clusters](../marketing/topic-clusters.md); repoint homepage Topics to them.
- [ ] **Code block upgrades:** copy button, language label, better highlighting.
- [ ] **Author pages** with byline, bio, and the engineer's articles (`Person` schema).

---

## 2. Medium priority (audience and content)

- [ ] **Newsletter capture** to convert readers into returning ones (future channel in [Website Strategy](./website-strategy.md)).
- [ ] **On-site search** (fast, forgiving).
- [ ] **RSS/Atom feed** for the blog.
- [ ] Publish the backlog consistently against the [Editorial Calendar](../marketing/editorial-calendar.md).
- [ ] Series / multi-part article support for deep topics.

---

## 3. Low priority / technical evolution

- [ ] **Blog to MDX:** `lib/blog.ts` is the single swap point (typed registry today). Upgrade when authoring volume grows, to allow embedded components and richer code samples.
- [ ] Diagrams support (e.g. Mermaid) for architecture posts.
- [ ] Reading progress indicator and "updated on" badges.
- [ ] Dark mode (optional; keep calm Moss & Stone tones).

---

## 4. Quality gates (before every deploy)

- [ ] `npm run build` passes; `npm run lint` clean.
- [ ] Both locales render, no missing i18n keys.
- [ ] New strings in en-US and pt-BR.
- [ ] No em dash character in copy.
- [ ] Accessibility: single `h1`, focus states, reduced motion, alt text.
- [ ] `sitemap.xml` and `robots.txt` include new routes.

See the fuller gate in [Website Strategy](./website-strategy.md) and [Definition of Done](../engineering/definition-of-done.md).

---

## 5. Reference: where things live

| Concern | File(s) |
| --- | --- |
| Nav, topics, config, base URL | `lib/siteConfig.ts` |
| Topic color/icon map | `lib/categories.ts` |
| Copy (both locales) | `messages/en-US.json`, `messages/pt-BR.json` |
| Blog content registry | `lib/blog.ts` |
| Homepage assembly + JSON-LD | `app/[locale]/page.tsx` |
| SEO infra | `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`, `app/layout.tsx` |
| Design tokens | `app/globals.css` (`:root`), `tailwind.config.js` |
| Reusable UI | `components/Button.tsx`, `Icon.tsx`, `NavLink.tsx`, `Container.tsx`, `Section.tsx` |

---

## 6. How we work this roadmap

Priority order is deliberate: discovery/reading features first (they make existing content work harder), then audience capture, then technical evolution. One item at a time, shipped and verified, over many half-done threads.

---

## Maintaining this document

The one place to look for "what is next for the site." Change priorities here first, then act. A checkbox is only checked when the thing is live and verified. Move completed items to a short changelog over time.
