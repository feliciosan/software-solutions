# Editorial Guidelines

Status: Active
Owner: Founders (Felício Santos, Gabriel Santos)
Last updated: 2026-07-21
Related: [Brand Voice](../company/brand-voice.md) · [Values](../company/values.md) · [Blog Standards](./blog-standards.md) · [Content Strategy](./content-strategy.md) · [Technical Deep Dive Template](./technical-deep-dive-template.md)

---

## Why this document exists

These are the standards every piece of published content is measured against before it ships: voice, quality, fact-checking, sources, and consistency. [Blog Standards](./blog-standards.md) covers the mechanics of a post; this covers the editorial judgment. When in doubt about whether something is good enough, this document decides.

---

## 1. Voice

Follow [Brand Voice](../company/brand-voice.md): engineer to engineer, direct, technical, honest, and human. Opinionated with evidence. No hype, no clickbait, no gatekeeping, no generic AI-sounding prose.

---

## 2. Writing quality bar

Every article must:

- **Teach something real** and useful to a working engineer.
- **Demonstrate genuine expertise** (internals, edge cases, trade-offs).
- **Be clear and scannable**: descriptive headings, short paragraphs, lists where they help.
- **Be concise**: every sentence earns its place; cut filler and throat-clearing.
- **Include real, runnable code** and diagrams where they clarify.
- **Sound like us**, not like a content generator.

A piece a competitor could publish unchanged is too generic; send it back.

---

## 3. Technical accuracy and fact-checking

Accuracy is the brand. Before publishing:

- **Run every code sample.** If it does not run, it does not ship.
- **Verify claims** against primary sources (official docs, RFCs, source code, real benchmarks), not against other blog posts.
- **Version-pin.** State the versions assumed ("Next.js 15", "Node 22"); note when behavior is version-specific.
- **Benchmarks are real and reproducible.** Never invent numbers; describe the setup and hardware.
- **Distinguish fact from opinion.** Say when something is preference versus established fact.

---

## 4. Sources and attribution

- **Cite primary sources** with descriptive links.
- **Credit ideas and prior art.** If a technique or insight came from someone, say so.
- **No plagiarism, no uncredited paraphrasing** of another article.
- **Quote accurately** and link to the original.

---

## 5. Consistency

- **Terminology:** use the vocabulary in [Brand Voice](../company/brand-voice.md) (audience, readers, engineers; never client/customer/sale).
- **Formatting:** sentence-case headings, fenced code with language tags, consistent code style per [Coding Conventions](../engineering/coding-conventions.md).
- **House style:** no em dash character; use commas, colons, or periods.
- **Bilingual:** en-US and pt-BR with full parity; both read natively.
- **Naming:** consistent product and API names (Next.js, NestJS, PostgreSQL, TypeScript).

---

## 6. Review checklist (run before publishing)

- [ ] Teaches something real; demonstrates expertise.
- [ ] Technically accurate: code runs, claims verified, versions stated.
- [ ] Real, reproducible numbers (or none).
- [ ] Sources cited; ideas credited; no plagiarism.
- [ ] Clear structure, concise, scannable; diagrams where useful.
- [ ] Voice is ours; no generic AI filler.
- [ ] Terminology and formatting consistent; no em dash.
- [ ] en-US and pt-BR parity.
- [ ] SEO items done (see [SEO Checklist](../website/seo-checklist.md)).
- [ ] Peer-reviewed by the other founder.

If any box is unchecked, it is not ready.

---

## 7. Corrections policy

We correct mistakes quickly and openly. When we fix a technical error after publishing, update the article, note "updated on <date>", and, if the error was significant, say what changed. Credibility survives honest corrections; it does not survive pretending.

---

## Maintaining this document

Update when a recurring quality issue appears (add the check that would have caught it) or when standards evolve. Keep the review checklist tight and genuinely used.
