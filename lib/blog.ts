/**
 * Dependency-free, typed blog content registry.
 *
 * Posts are authored as structured content blocks so we get full type-safety and
 * localized bodies without an MDX toolchain. When the blog grows, this module is
 * the single seam to swap for MDX/a CMS. Pages and sitemap only depend on the
 * exported helpers below.
 */
import type { BlogCategory } from "./siteConfig";

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export interface LocalizedPost {
  title: string;
  description: string;
  body: ContentBlock[];
}

export interface BlogPost {
  slug: string;
  category: BlogCategory;
  date: string; // ISO date
  readingMinutes: number;
  author: string;
  content: Record<string, LocalizedPost>;
}

const posts: BlogPost[] = [
  {
    slug: "how-long-to-build-an-mvp",
    category: "startup",
    date: "2026-06-18",
    readingMinutes: 6,
    author: "Felício Santos",
    content: {
      "en-US": {
        title: "How Long Does It Take to Build an MVP?",
        description:
          "A realistic timeline for building a validated MVP, and the factors that make it faster or slower.",
        body: [
          {
            type: "p",
            text: "The honest answer most founders never get is: it depends, but not on what you think. A focused MVP typically takes between 6 and 12 weeks. The variance comes less from the technology and more from clarity of scope.",
          },
          { type: "h2", text: "What actually drives the timeline" },
          {
            type: "ul",
            items: [
              "Scope discipline: how ruthlessly you cut to the core hypothesis",
              "Decision speed: how quickly you can answer product questions",
              "Integrations: payments, auth and third-party APIs add real time",
              "Design maturity: a clear direction avoids costly rework",
            ],
          },
          { type: "h2", text: "A typical 8-week breakdown" },
          {
            type: "p",
            text: "Weeks 1-2 go to discovery, architecture and a clickable prototype. Weeks 3-6 are development in weekly sprints with demos. Weeks 7-8 cover testing, deployment and launch. The goal is not a finished product. It's the smallest thing real users can validate.",
          },
          { type: "h2", text: "How to make it faster" },
          {
            type: "p",
            text: "Cut features, not quality. Every feature you defer buys you speed today and optionality tomorrow. A senior team that ships with tests and CI/CD from day one is faster over any horizon longer than a month, because it never stops to untangle its own mess.",
          },
        ],
      },
      "pt-BR": {
        title: "Quanto Tempo Leva para Construir um MVP?",
        description:
          "Um cronograma realista para construir um MVP validado, e os fatores que o tornam mais rápido ou mais lento.",
        body: [
          {
            type: "p",
            text: "A resposta honesta que a maioria dos fundadores nunca recebe é: depende, mas não do que você imagina. Um MVP focado normalmente leva entre 6 e 12 semanas. A variação vem menos da tecnologia e mais da clareza de escopo.",
          },
          { type: "h2", text: "O que realmente define o prazo" },
          {
            type: "ul",
            items: [
              "Disciplina de escopo: o quão implacável você é ao cortar para a hipótese central",
              "Velocidade de decisão: quão rápido você responde às dúvidas de produto",
              "Integrações: pagamentos, autenticação e APIs de terceiros somam tempo real",
              "Maturidade de design: uma direção clara evita retrabalho caro",
            ],
          },
          { type: "h2", text: "Um cronograma típico de 8 semanas" },
          {
            type: "p",
            text: "As semanas 1-2 vão para descoberta, arquitetura e um protótipo navegável. As semanas 3-6 são de desenvolvimento em sprints semanais com demos. As semanas 7-8 cobrem testes, deploy e lançamento. O objetivo não é um produto pronto. É a menor coisa que usuários reais podem validar.",
          },
          { type: "h2", text: "Como acelerar" },
          {
            type: "p",
            text: "Corte funcionalidades, não qualidade. Cada feature adiada compra velocidade hoje e opções amanhã. Um time sênior que entrega com testes e CI/CD desde o primeiro dia é mais rápido em qualquer horizonte maior que um mês, porque nunca precisa parar para desatar a própria bagunça.",
          },
        ],
      },
    },
  },
  {
    slug: "mvp-vs-full-product",
    category: "product",
    date: "2026-07-02",
    readingMinutes: 5,
    author: "Gabriel Santos",
    content: {
      "en-US": {
        title: "MVP vs Full Product: What Founders Should Build First",
        description:
          "Choosing between an MVP and a full product is a strategy decision, not a technical one. Here's how to decide.",
        body: [
          {
            type: "p",
            text: "An MVP and a full product answer two different questions. The MVP asks 'should this exist?' The full product asks 'how do we win?' Building the second before answering the first is the most expensive mistake in early-stage software.",
          },
          { type: "h2", text: "Build an MVP when" },
          {
            type: "ul",
            items: [
              "The core value proposition is still a hypothesis",
              "You need real user feedback to prioritize",
              "Budget and runway reward speed over completeness",
            ],
          },
          { type: "h2", text: "Build closer to a full product when" },
          {
            type: "ul",
            items: [
              "The problem and demand are already validated",
              "Competitors set a high baseline for quality",
              "You have committed customers or investors",
            ],
          },
          { type: "h2", text: "The trap to avoid" },
          {
            type: "p",
            text: "A well-built MVP is not throwaway code. With scalable architecture, your MVP becomes the foundation of the full product, no rewrite required. That's the difference between cutting scope and cutting corners.",
          },
        ],
      },
      "pt-BR": {
        title: "MVP vs Produto Completo: O Que Fundadores Devem Construir Primeiro",
        description:
          "Escolher entre um MVP e um produto completo é uma decisão de estratégia, não técnica. Veja como decidir.",
        body: [
          {
            type: "p",
            text: "Um MVP e um produto completo respondem a duas perguntas diferentes. O MVP pergunta 'isso deveria existir?'. O produto completo pergunta 'como vencemos?'. Construir o segundo antes de responder ao primeiro é o erro mais caro do software em estágio inicial.",
          },
          { type: "h2", text: "Construa um MVP quando" },
          {
            type: "ul",
            items: [
              "A proposta de valor central ainda é uma hipótese",
              "Você precisa de feedback real de usuários para priorizar",
              "Orçamento e caixa recompensam velocidade em vez de completude",
            ],
          },
          { type: "h2", text: "Construa mais perto de um produto completo quando" },
          {
            type: "ul",
            items: [
              "O problema e a demanda já estão validados",
              "Concorrentes definem um padrão alto de qualidade",
              "Você tem clientes ou investidores comprometidos",
            ],
          },
          { type: "h2", text: "A armadilha a evitar" },
          {
            type: "p",
            text: "Um MVP bem construído não é código descartável. Com arquitetura escalável, seu MVP se torna a base do produto completo, sem reescrita. Essa é a diferença entre cortar escopo e cortar caminho.",
          },
        ],
      },
    },
  },
];

export function getAllPosts(locale: string): BlogPost[] {
  return posts
    .filter((p) => p.content[locale])
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string, locale: string): BlogPost | undefined {
  const post = posts.find((p) => p.slug === slug);
  if (!post || !post.content[locale]) return undefined;
  return post;
}

export function getAllPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}
