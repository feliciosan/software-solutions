# UI Principles and Design System

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-21
Related: [UI Redesign Case Study](./ui-redesign-case-study.md) · [UX Principles](./ux-principles.md) · [Website Strategy](./website-strategy.md) · [Coding Conventions](../engineering/coding-conventions.md)

---

## Why this document exists

UI is the visual proof of our craft. For the content-hub pivot, the target feel is **geeky, functional, calm, and readable**, a place developers trust (closer to PostHog than to a marketing landing page), not "polished SaaS agency." This document is the reference for the CodaCrew v2 visual language. See the rationale in [UI Redesign Case Study](./ui-redesign-case-study.md).

Principle above all: **calm and readable over flashy.** Muted colors, borders over shadows, minimal motion, and a warm stone canvas. Busy is easy; calm is hard.

---

## 1. Design tokens (v2)

### Color (semantic tokens: "Moss & Stone")
All colors are **semantic tokens**, defined once as CSS variables in `app/globals.css` (`:root`, stored as RGB channels for alpha support) and exposed as Tailwind utilities in `tailwind.config.js`. **Never hardcode a hex or a raw palette step (`stone-600`, `blue-500`) in a component; use a token.**

| Tailwind token | CSS var | Value | Use |
| --- | --- | --- | --- |
| `background` | `--color-background` | #F6F4EF | page background |
| `surface` | `--color-surface` | #FFFFFF | cards / raised surfaces |
| `primary` / `primary-hover` | `--color-primary` / `--color-primary-hover` | #667C3E / #556835 | brand green: CTAs, links, positive |
| `dark` | `--color-dark` | #322D29 | nav, footer, dark bands |
| `foreground` | `--color-text` | #23211F | primary text |
| `muted` | `--color-text-secondary` | #6B6660 | secondary / meta text |
| `border` | `--color-border` | #DDD8D0 | hairlines, dividers (`border-border`) |
| `accent` | `--color-accent` | #B89D5D | gold: badges / highlights / decorative ONLY, never a CTA |
| `code` | `--color-code` | #F2EFE9 | code + subtle fills (tags, chips) |

- **Topic chips** are restrained and identical (`bg-code text-muted` + a green icon wrap), differentiated by icon only, not by loud color. See `lib/categories.ts`.
- **On dark surfaces** (`bg-dark`), text flips to `white` / `white/70` / `white/60`; borders to `white/10`.
- **Errors:** `red-*` only for validation states.

Rules: no gradients, no pure black, no pure white except on `surface`/cards, no vibrant/saturated hues, and `accent` is never a primary action.

### Typography
- **Body:** Inter (`--font-sans`) via `next/font`. Comfortable, humanist, readable.
- **Mono accent:** JetBrains Mono (`--font-mono`, `font-mono`) for eyebrows, tags, metadata, nav, and code-y labels. Monospace is the cheapest honest "this is for devs" signal. Use it for small/label text, never for long body copy.
- **Scale:** headings `text-2xl` to `text-5xl`, `font-bold`, `tracking-tight`; body `text-base`/`text-lg`, `leading-relaxed`. `text-balance` on headings.
- **Hierarchy through weight, size, and mono/sans contrast,** not loud color.

### Spacing and radius
- **Spacing:** Tailwind scale. Sections `py-16 sm:py-20 lg:py-24`. Cards `p-5` to `p-6`.
- **Radius standard: 8 to 12px.** `rounded-lg` (8px) for controls/chips/inputs; `rounded-xl` (12px) for cards and larger surfaces. `rounded-2xl`/`rounded-3xl` are clamped to 12px in `tailwind.config.js`, so no bubbly corners. `rounded-full` for pills only.
- **Elevation:** prefer **1px borders** (`border border-border`) for structure; shadows are very light (`shadow-sm`) and rare. Borders do the work, not shadows.

### Layout
- **Container:** `Container` primitive (`max-w-7xl` default, `max-w-4xl` narrow).
- **Section:** `Section` primitive; `background` = `default` (`bg-background`) or `subtle` (`bg-surface`) for gentle alternation.
- **Header:** floating, **dark** (`bg-dark`), bordered, rounded bar with backdrop blur (light logo + nav; not a full-bleed fixed bar).

---

## 2. Core components (use these, do not reinvent)

The component library lives in `components/`. Reuse before you build. See [Coding Conventions](../engineering/coding-conventions.md).

- **`Button`** is the only button. Variants: `primary` (green `bg-primary`), `secondary` (soft `bg-code`), `outline`. Sizes: `sm`, `md`, `lg`. It handles internal links (`next/link`), external links, hash-anchor smooth scroll, and focus rings automatically. Do not hand-roll `<a class="...">` buttons.
- **`Container`** for width and horizontal padding.
- **`Section`** for vertical spacing and background.
- **`Icon`** for all iconography: an inline SVG set (Heroicons-style), no icon dependency in the bundle. Add new glyphs to the `Icon` map rather than pasting raw SVG into components.
- **`NavLink`** for navigation links that may be hash anchors (smooth scroll on-page, navigate cross-page).
- **Section components** (`TopicsSection`, `TeamSection`, `TrustBar`, `BlogPreviewSection`, and so on) are composed from the primitives above and driven by `lib/siteConfig.ts` / `lib/categories.ts` plus i18n. New sections should follow the same shape.

Consistency rule: if a pattern exists, extend it. A second, slightly different button is a design system regression.

---

## 3. Iconography

- One visual style: outline, `strokeWidth` around 1.8, `currentColor` so icons inherit text color.
- Decorative icons are `aria-hidden`. Icons that carry meaning have an accessible label on their control.
- Keep the set small and coherent. Do not mix icon styles (outline with filled, thin with thick).

---

## 4. Motion

Motion is seasoning, not the meal.

- **Purpose only:** motion should clarify a state change (hover, appearance, pulse on a "live" indicator), never decorate.
- **Subtle and quick:** short durations, gentle easing. No bouncing, no attention-seeking loops beyond a small pulse.
- **Reduced motion:** all animation collapses to near-instant under `prefers-reduced-motion` (enforced globally in `globals.css`). Never ship motion that ignores this.
- **Scroll:** smooth in-page anchor scrolling, with `scroll-padding-top` to clear the fixed header. Route transitions do not animate scroll (`data-scroll-behavior="smooth"` opt-in).

---

## 5. Imagery and illustration

- **Prefer SVG and CSS over raster** to keep LCP low. Use optimized images (blog covers, founder photos) where a real image adds value.
- **People over product:** for a community brand, show the real engineers. The founders' photos lead the hero and appear in the Team section.
- **Logos** (prior-experience brands) are grayscale by default, color on hover, sized modestly. They are proof, not decoration.
- **Illustrative UI/data** must read as an example, never as a real CodaCrew metric. See the honesty rules in [Brand Positioning](../company/brand-positioning.md).

---

## 6. Dark surfaces and contrast

- Dark bands are flat `bg-dark` (#322D29), used for the contact band, header, and footer. No gradients.
- On dark surfaces, text flips to light (`white`/`white/70`), including form labels and helper text. A dark label on a dark background is a bug (this was a real one we fixed).
- Always verify contrast on both light and dark surfaces before shipping.

---

## 7. Composition patterns

- **Cards** for discrete, comparable items (topics, team, blog posts): rounded, bordered, soft hover lift.
- **Chips/pills** for tags, indicators, and metadata (tech stack, categories, timeframes).
- **Alternating section backgrounds** for rhythm instead of heavy dividers.
- **Two-column hero** (message left, visual right) collapsing to stacked on mobile.
- **Flat `bg-dark` bands** (header, contact, footer) for emphasis, not gradients.

---

## 8. Anti-patterns

- More than one accent color competing for attention.
- Inconsistent radius or spacing between similar components.
- Heavy drop shadows, gradients on everything, or decorative motion.
- Raw SVG or one-off buttons pasted inline instead of using `Icon`/`Button`.
- Fixed pixel widths that break in Portuguese or on small screens.
- New tokens invented per-page instead of reusing the scale.

---

## 9. Definition of visually done

- [ ] Uses the shared primitives (`Button`, `Container`, `Section`, `Icon`).
- [ ] Colors, radius, and spacing come from the token system, not ad hoc values.
- [ ] Looks correct on mobile and desktop, in both languages.
- [ ] Contrast passes on its background (including dark surfaces).
- [ ] Motion is subtle and reduced for `prefers-reduced-motion`.
- [ ] No new colors, fonts, or shadow styles introduced without justification.

This complements the behavioral checklist in [UX Principles](./ux-principles.md) and feeds the [Definition of Done](../engineering/definition-of-done.md).

---

## Maintaining this document

When a genuinely new pattern is needed, add it here and implement it as a reusable primitive in the same change, so the system and the docs never drift. Prune patterns that fall out of use. The measure of success: a new page built by any engineer looks like it was designed by the same hand.
