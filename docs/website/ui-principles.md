# UI Principles and Design System

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-19
Related: [UX Principles](./ux-principles.md) · [Website Strategy](./website-strategy.md) · [Coding Conventions](../engineering/coding-conventions.md) · [Brand Positioning](../company/brand-positioning.md)

---

## Why this document exists

UI is the visual proof of our craft. It should feel modern, calm, and confident, the way a well-built product feels. This document is the reference for the CodaCrew visual language: tokens, components, and the rules that keep the interface coherent as it grows. It describes the system as implemented in the codebase (Tailwind CSS, the `Section`/`Container`/`Button`/`Icon` primitives, `next/font` Inter), and it is opinionated so that new work looks like it belongs.

Principle above all: **restraint.** A confident interface uses few colors, consistent spacing, and little motion. Busy is easy; calm is hard.

---

## 1. Design tokens

### Color
The palette is intentionally narrow: a slate neutral scale, a blue accent, and a small set of semantic colors.

- **Neutrals:** Tailwind `slate` scale. `slate-900` for primary text and dark surfaces, `slate-600`/`slate-500` for secondary text, `slate-200`/`slate-100` for borders and dividers, `slate-50` for subtle backgrounds.
- **Accent:** Tailwind `blue` (`blue-600` primary accent, `blue-900` in dark gradients, `blue-50` tints).
- **Semantic:** `green` for success and positive signals ("Live," "Ships to production," checks), `red` for problems and errors, `amber` sparingly.
- **Signature gradient:** `from-slate-900 to-blue-900` (and `from-slate-50 via-blue-50/30 to-slate-100` for light hero backgrounds). This is the brand's recognizable surface; use it for dark CTA bands and hero glows, not everywhere.

Rule: do not introduce new hues without a reason that ties back to [Brand Positioning](../company/brand-positioning.md). More colors is almost never the answer.

### Typography
- **Font:** Inter via `next/font` (`display: swap`), applied at the layout level.
- **Scale:** large, tight headings (`text-3xl` to `text-6xl`, `font-bold`, `tracking-tight`, `leading-[1.1]`), comfortable body (`text-base` to `text-xl`, `leading-relaxed`).
- **Balance:** use `text-balance` on hero and article headings to avoid orphan words.
- **Hierarchy through weight and size,** not color. Secondary text is `slate-600`, not a second accent color.

### Spacing and radius
- **Spacing:** the Tailwind scale, used consistently. Sections breathe (`py-16 sm:py-20 lg:py-24`). Cards use generous internal padding (`p-6` to `p-8`).
- **Radius:** rounded and soft. Cards `rounded-2xl`/`rounded-3xl`, chips and buttons `rounded-lg`/`rounded-full`. Consistent radius is a big part of the "modern product" feel.
- **Elevation:** shadows are soft and sparing (`shadow-sm`, `shadow-xl` for lifted cards). Avoid harsh or heavy shadows.

### Layout
- **Container:** use the `Container` primitive (`max-w-7xl` default, `max-w-4xl` narrow) with responsive horizontal padding. Never hardcode max-widths ad hoc.
- **Section:** use the `Section` primitive for vertical rhythm and background alternation (`default` slate-50, `subtle` white). Alternating backgrounds create visual separation without borders.

---

## 2. Core components (use these, do not reinvent)

The component library lives in `components/`. Reuse before you build. See [Coding Conventions](../engineering/coding-conventions.md).

- **`Button`** is the only button. Variants: `primary` (dark slate), `secondary` (light), `outline`. Sizes: `sm`, `md`, `lg`. It handles internal links (`next/link`), external links, hash-anchor smooth scroll, and focus rings automatically. Do not hand-roll `<a class="...">` buttons.
- **`Container`** for width and horizontal padding.
- **`Section`** for vertical spacing and background.
- **`Icon`** for all iconography: an inline SVG set (Heroicons-style), no icon dependency in the bundle. Add new glyphs to the `Icon` map rather than pasting raw SVG into components.
- **`NavLink`** for navigation links that may be hash anchors (smooth scroll on-page, navigate cross-page).
- **Section components** (`ServicesSection`, `ProcessSection`, `TeamSection`, and so on) are composed from the primitives above and driven by `lib/siteConfig.ts` plus i18n. New sections should follow the same shape.

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

- **Prefer SVG and CSS over raster.** The hero visual is a CSS/SVG dashboard-and-journey mockup, not a heavy PNG. This keeps LCP low and the look crisp at any resolution.
- **Product over people in marketing visuals:** show what we build. Founder photos belong in the Team section, not the hero (see [Website Strategy](./website-strategy.md)).
- **Logos** (prior-experience brands) are grayscale by default, color on hover, sized modestly. They are proof, not decoration.
- **Illustrative UI** (like the hero dashboard) uses sample data and must read as an example, never as a real CodaCrew metric. See the honesty rules in [Brand Positioning](../company/brand-positioning.md).

---

## 6. Dark surfaces and contrast

- Dark bands (`from-slate-900 to-blue-900`) are used for emphasis: final CTA, inline CTA banners, footer.
- On dark surfaces, text must flip to light (`slate-200`/white), including form labels and helper text. A dark label on a dark background is a bug (this was a real one we fixed).
- Always verify contrast on both light and dark surfaces before shipping.

---

## 7. Composition patterns

- **Cards** for discrete, comparable items (services, process steps, team, posts): rounded, bordered, soft hover lift.
- **Chips/pills** for tags, indicators, and metadata (tech stack, categories, timeframes).
- **Alternating section backgrounds** for rhythm instead of heavy dividers.
- **Two-column hero** (message left, visual right) collapsing to stacked on mobile.
- **Inline CTA bands** in the signature gradient to break long content and keep conversion nearby.

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
