# Blog cover images

Drop each post's cover image in this folder, then it appears automatically on the
blog listing, the homepage "From the blog" section, the top of the post, and as the
social (OpenGraph / Twitter) share image.

## File requirements

- **Dimensions:** 1200 x 630 px (this is the OpenGraph standard; the cards crop it).
- **Format:** JPEG (optimized, ~1200x630). Keep each file under ~300 KB if possible.
- **Filename:** must match the post slug exactly, lowercase, with `.jpg`:

| Post | Filename |
| --- | --- |
| How Long Does It Take to Build an MVP? | `how-long-to-build-an-mvp.jpg` |
| MVP vs Full Product | `mvp-vs-full-product.jpg` |
| Vibe Coding vs Production Code | `vibe-coding-vs-production-code.jpg` |
| How Much Does It Cost to Build a SaaS in 2026? | `how-much-does-a-saas-cost-2026.jpg` |
| Vertical AI SaaS | `vertical-ai-saas-2026.jpg` |
| Beyond the Chatbot (AI agents) | `ai-agents-beyond-the-chatbot.jpg` |

## After adding images

For each post that now has an image, add one line to its entry in `lib/blog.ts`:

```ts
cover: "/blog/<slug>.jpg",
```

(Ask the team / Claude to wire these in; the field is already supported and renders only when present, so nothing breaks before the files exist.)

## Brand style (keep all covers consistent)

Use the same visual system on every cover so the blog reads as one brand:

- **Palette:** deep navy to blue gradient (`#0F172A`, `#1E3A8A`, `#2563EB`) with a light `#60A5FA` accent and calm negative space. Same family as the site.
- **Style:** modern, minimal, conceptual/editorial tech illustration. Abstract shapes, soft depth, subtle glow. Flat-vector feel with a little dimension.
- **Do NOT include:** any text or words, real UI screenshots, brand logos, human faces, or stocky clichés. No fake dashboards implying a real product (honesty rule).
- **Composition:** one clear central concept, landscape 1200x630, leaves breathing room.

## Nano Banana prompts (one per post)

Base style suffix to append to every prompt:

> Minimal conceptual tech illustration, deep navy to blue gradient background (#0F172A to #1E3A8A) with a bright blue accent (#60A5FA), abstract geometric shapes with soft depth and subtle glow, flat modern vector style, generous negative space, no text, no logos, no human faces, no real UI screenshots, 1200x630 landscape, high quality.

1. **how-long-to-build-an-mvp.jpg**
   > A stylized rocket or upward arrow accelerating along a short timeline of abstract milestone dots, conveying speed from idea to launch in weeks. [base style suffix]

2. **mvp-vs-full-product.jpg**
   > Two diverging abstract paths, one a small glowing seed or sprout and the other a fuller structured form, side by side to convey a strategic choice between an MVP and a full product. [base style suffix]

3. **vibe-coding-vs-production-code.jpg**
   > Glowing fragments of abstract AI-generated code on one side transforming into solid, structured architectural pillars on the other, conveying AI speed made durable by real engineering. [base style suffix]

4. **how-much-does-a-saas-cost-2026.jpg**
   > Abstract stacked blocks or coins beside a rising line chart and a subtle dial, conveying budgeting and value for building a SaaS. [base style suffix]

5. **vertical-ai-saas-2026.jpg**
   > A single deep, narrow luminous column drilling down into one focused layer among broad flat layers, with a small AI spark at its core, conveying a deep vertical AI product beating broad horizontal tools. [base style suffix]

6. **ai-agents-beyond-the-chatbot.jpg**
   > An abstract network of connected nodes and gears autonomously moving a task through a multi-step flow, with a small faded chat bubble set aside, conveying AI doing real delegated work rather than just chatting. [base style suffix]
