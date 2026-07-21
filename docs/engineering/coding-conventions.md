# Coding Conventions

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-19
Related: [Engineering Standards](./engineering-standards.md) · [Architecture Decisions](./architecture-decisions.md) · [Definition of Done](./definition-of-done.md) · [UI Principles](../website/ui-principles.md)

---

## Why this document exists

[Engineering Standards](./engineering-standards.md) sets the bar; this document is the concrete, checkable law for how we write code so that any engineer can read, extend, and trust any file. Consistency is a feature: it lowers cognitive load, makes review about substance instead of style, and makes our work look like it came from one senior hand. Conventions here reflect how the CodaCrew codebase is actually built (Next.js App Router, React, TypeScript, Tailwind, `next-intl`).

When in doubt, match the surrounding code.

---

## 1. Project structure

```
app/                     Routing, layouts, pages (App Router)
  [locale]/              Localized routes (pt-BR, en-US)
    page.tsx             Home
    blog/                Blog listing and [slug]
  layout.tsx             Root layout and base metadata
  sitemap.ts, robots.ts  SEO routes
  opengraph-image.tsx    Dynamic OG image
components/               Presentational and composed UI components
  blog/                  Blog-specific components
lib/                      Data, config, and pure helpers (no JSX)
messages/                 i18n message catalogs (en-US.json, pt-BR.json)
docs/                     Internal documentation
```

- **Routing and composition** live in `app/`.
- **UI** lives in `components/`. Group by feature folder when a set of components is specific to one area (for example `components/blog/`).
- **Data, config, and pure logic** live in `lib/` and never contain JSX (for example `lib/siteConfig.ts`, `lib/blog.ts`, `lib/whatsapp.ts`, `lib/scroll.ts`).

---

## 2. Naming

- **Components:** PascalCase, one primary component per file, file named after the component (`TopicsSection.tsx` exports `TopicsSection`).
- **Exports:** prefer named exports for components (`export function Button(...)`). Default exports only where the framework requires them (route `page.tsx`, `layout.tsx`, `sitemap.ts`, and similar).
- **Helpers and variables:** camelCase. Functions are verbs (`getWhatsAppUrl`, `scrollToHash`); booleans read as questions (`isExternal`, `isHashLink`).
- **Constants and config:** camelCase objects/arrays in `lib/` (`navItems`, `blogCategories`, `founders`). Reserve SCREAMING_CASE for true environment-level constants.
- **Types and interfaces:** PascalCase (`BlogPost`, `ContentBlock`, `BlogCategory`).
- **i18n keys:** camelCase, namespaced by feature (`hero.ctaPrimary`, `blog.categories.startup`). Keys mirror the component that consumes them.

---

## 3. TypeScript

- **Strict mode always.** No implicit `any`. An `any` needs a comment justifying it.
- **Type the boundaries:** props, function returns where non-trivial, and all data structures (`lib/blog.ts` types its content blocks and posts).
- **Prefer `type`/`interface` over inline shapes** for anything reused.
- **`as const`** for fixed config arrays so keys and values stay literal (see `siteConfig` lists).
- **Derive, do not duplicate:** union types from config (`BlogCategory`) rather than restating string literals.
- No non-null assertions (`!`) without a clear, local reason.

---

## 4. React and Next.js

- **Function components only.** No classes.
- **Server Components by default.** Add `"use client"` only when the component needs state, effects, browser APIs, event handlers, or client-only libraries (PostHog, `react-hook-form`). Keep client components small and push them to the leaves.
- **`"use client"` is the first line** of the file when present.
- **Data fetching and config reads happen on the server** where possible; pass data down as props.
- **Metadata** via the Next metadata API (`generateMetadata`), never hand-rolled `<head>` tags.
- **Links:** internal navigation uses `next/link`; the shared `Button` and `NavLink` already handle internal vs external vs hash-anchor behavior. Do not hand-roll anchors for those cases.

---

## 5. Reuse the primitives (do not reinvent)

Before creating a component, check whether one of these already does the job. Extending them keeps the system coherent (see [UI Principles](../website/ui-principles.md)):

- **`Button`** for all buttons and button-styled links (variants, sizes, link handling, focus rings).
- **`Container`** for width and horizontal padding.
- **`Section`** for vertical rhythm and background.
- **`Icon`** for all icons (add new glyphs to its map; never paste raw SVG into feature components).
- **`NavLink`** for nav links that may be hash anchors.

A second, slightly different version of any of these is a regression. If a primitive is missing a capability, extend the primitive.

---

## 6. Styling (Tailwind)

- **Tailwind utilities in JSX**; no ad hoc CSS files except the global `globals.css` (base, keyframes, reduced-motion, scroll behavior).
- **Use the semantic token system:** the Moss & Stone tokens (`background`, `surface`, `primary`, `foreground`, `muted`, `border`, `accent`, `code`), the spacing scale, and the standard radii. No hardcoded hex or raw palette steps (`stone-600`, `blue-500`) in components. See [UI Principles](../website/ui-principles.md).
- **Order classes** roughly layout, then spacing, then color, then state, for readability. Keep long class strings on the element, not abstracted prematurely.
- **Responsive and state variants** (`sm:`, `lg:`, `hover:`, `focus-visible:`) rather than JavaScript for styling.
- **Dark surfaces flip text to light.** Never leave dark text on a dark background.

---

## 7. Internationalization

- **Every user-facing string comes from `messages/`,** never hardcoded in a component.
- **Full parity:** any key added to `en-US.json` is added to `pt-BR.json` in the same change.
- **Access** via `useTranslations(namespace)` (client or server) or `getTranslations` (server), scoped to the component's namespace.
- **Keys mirror structure** and are grouped by feature. Reuse existing namespaces before inventing new ones.
- Validate JSON after edits; a malformed catalog breaks the build.

---

## 8. Content and data (lib)

- **Config is centralized** in `lib/siteConfig.ts` (nav, topics/categories, founders, base URL). Consume it; do not duplicate it.
- **The blog registry** (`lib/blog.ts`) is typed. Add posts as `BlogPost` entries with both locales; author bodies with the supported `ContentBlock` types. Extend the union rather than smuggling markup into text. See [Blog Standards](../marketing/blog-standards.md).
- **Pure helpers** in `lib/` are framework-light and easily testable (`getWhatsAppUrl`, `scrollToHash`).

---

## 9. Comments and documentation

- Comment the **why**, not the **what**. Well-named code does not need narration; non-obvious decisions do.
- Keep comments truthful and current; a stale comment is worse than none.
- Record significant or surprising choices as an ADR in [Architecture Decisions](./architecture-decisions.md), and link to it from the code when helpful.
- **No em dash character** in comments or any copy. Use commas, colons, periods, or parentheses. This matches the house style enforced across content.

---

## 10. Git and pull requests

- **Branches:** short-lived, off `main`, descriptively named (`feature/...`, `fix/...`).
- **Commits:** small and focused; imperative subject that states intent ("Add sticky CTA", not "changes").
- **Pull requests:** small enough to review well; describe what changed and why; must pass CI (build, lint, typecheck, tests) and review before merge.
- **Never commit** secrets, `.env`, or generated artifacts. Keep `.env.example` current.
- **Main stays green and deployable.**

---

## 11. Quality checks before opening a PR

- [ ] `npm run build` passes (typecheck plus static generation).
- [ ] `npm run lint` is clean.
- [ ] New strings added to both locales; JSON valid.
- [ ] Reused existing primitives; no duplicated component or constant.
- [ ] No em dash character introduced.
- [ ] Accessibility basics intact (semantics, focus, alt text).

This feeds directly into the [Definition of Done](./definition-of-done.md).

---

## Maintaining this document

Update when a convention genuinely changes or a new recurring pattern deserves a rule. Prefer few, enforced conventions over many aspirational ones. If code and this document disagree, fix one of them in the same week, never let them drift.
