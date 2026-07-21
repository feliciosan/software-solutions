# UI/UX Redesign Case Study: "Moss & Stone"

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-21
Related: [UI Principles](./ui-principles.md) · [UX Principles](./ux-principles.md) · [Website Strategy](./website-strategy.md) · [Brand Positioning](../company/brand-positioning.md)

---

## 1. Context: why redesign

The site pivoted from "services sales" to an **engineering content hub** for a dev community (see [Website Strategy](./website-strategy.md)). The previous UI was built to sell: one confident blue accent, big gradients, glows, animated blobs, large 16 to 24px radii, and a product-mockup hero. That reads "polished SaaS agency," which is now the wrong signal.

The new audience is developers and founders who read technical content. The UI should feel like a place devs trust: **geeky, functional, calm, and a little playful**, closer to tools like PostHog than to a marketing landing page.

## 2. Goals (from the brief)

- Less "serious/corporate," more **geeky/dev-community**.
- **Diversified colors**, but **soft and muted** (not highly saturated or "highlighted").
- Easy to read and pleasant to the eyes; **fewer heavy modern effects** (big gradients, glows, blobs).
- Reference feel: **PostHog**, geeky, highly functional, technical environment for devs.
- **Floating header.**
- **Border radius standard 8 to 12px** across the whole app.
- Hero reworked: the old product hero no longer fits; **bring the founders' photos to the top**.

## 3. Design decisions

### 3.1 Warm, paper-like base
Swap the cool white/slate canvas for a **warm paper** background (`#F6F4EF`, warm stone) with dark text (`#23211F`), a **moss-green** brand accent (`#667C3E`), and a **gold accent** (`#B89D5D`) reserved for badges/highlights. This is the biggest single shift: it instantly reads less "corporate SaaS" and more "developer notebook / docs site," like PostHog's cream canvas.

### 3.2 Diversified but muted color system, keyed by topic
Instead of one blue accent, each **content topic** gets its own **soft, low-saturation** color (background at the 100 step, text at 700 to 800). This makes the site colorful and scannable without shouting:

| Topic | Color |
| --- | --- |
| Startup | amber |
| SaaS | sky |
| AI | violet |
| Architecture | teal |
| Engineering | rose |
| Product | emerald |
| Cloud | indigo |

Defined once in `lib/categories.ts` and reused by Topics, post cards, and article pages, so a topic always looks the same everywhere.

### 3.3 A monospace accent for the dev feel
Body copy stays humanist (Inter) for readability. **Eyebrows, tags, metadata, and nav** use a **monospace** (JetBrains Mono, loaded via `next/font`). Monospace is the cheapest, most honest signal of "this is for developers," and PostHog uses the same trick.

### 3.4 Calmer surfaces, fewer effects
- Remove animated gradient blobs, heavy glows, and large blur layers.
- Replace big gradients with **flat surfaces plus defined 1px borders** and very light shadows. Borders (not shadows) do the structural work, which is the PostHog look and easier on the eyes.
- Motion stays minimal and respects `prefers-reduced-motion`.

### 3.5 Radius standard: 8 to 12px
Global standard: **8px** (`rounded-lg`) for controls, chips, inputs, small elements; **12px** (`rounded-xl`) for cards and larger surfaces. Enforced globally by clamping Tailwind's `2xl`/`3xl` to 12px, so nothing renders with the old 16 to 24px "bubbly" corners. Pills (`rounded-full`) stay for tags/badges.

### 3.6 Floating header
The header detaches from the top edge: a **floating, dark (`bg-dark`), bordered, rounded bar** with a small margin and backdrop blur (light logo and nav). It signals "app-like/tool," matches the stone canvas, and keeps navigation always in reach.

### 3.7 Hero: people over product
The product-journey/dashboard hero is gone. The new hero leads with **the humans behind the writing**: the two founders' photos at the top, plus the content pitch and two clear actions (Read the Blog, Explore the Topics). For a community brand, trust comes from real people, not a fake dashboard.

## 4. Before vs after

| Dimension | Before (v1, sales) | After (v2, dev community) |
| --- | --- | --- |
| Canvas | Cool white / slate | Warm stone (#F6F4EF) |
| Accent | One blue | Moss green + restrained neutral topic chips |
| Type | Inter only | Inter + JetBrains Mono accents |
| Effects | Gradients, glows, blobs | Flat + 1px borders, light shadow |
| Radius | 16 to 24px | 8 to 12px standard |
| Header | Fixed full-width bar | Floating rounded bar |
| Hero | Product/dashboard mockup | Founders' photos + content pitch |
| Feel | Polished SaaS agency | Geeky, functional dev hub |

## 5. What changed in code

- **Tokens:** `tailwind.config.js` (paper/ink colors, `font-sans`/`font-mono` families, radius clamp), `app/globals.css` (paper canvas), `app/[locale]/layout.tsx` (load Inter + JetBrains Mono as CSS variables).
- **New:** `lib/categories.ts` (per-topic color + icon map).
- **Primitives:** `Button`, `Section` (warm surfaces).
- **Sections:** `Header` (floating), `HeroSection` (founders), `TrustBar`, `TopicsSection` (topic colors), `TeamSection`, `Footer`, `FinalCtaSection` (calmer), `blog/PostCard` + blog pages (topic colors).

## 6. Principles going forward

The living rules live in [UI Principles](./ui-principles.md) (updated to v2). In short: warm paper base, muted topic colors, monospace accents, 8 to 12px radius, borders over shadows, minimal motion, real people over stock/mockups. Keep it calm, readable, and unmistakably for developers.
