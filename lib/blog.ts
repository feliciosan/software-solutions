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
  {
    slug: "vibe-coding-vs-production-code",
    category: "ai",
    date: "2026-07-08",
    readingMinutes: 6,
    author: "Felício Santos",
    content: {
      "en-US": {
        title: "Vibe Coding vs Production Code: What an AI-Built MVP Still Needs",
        description:
          "AI can generate a working prototype in a weekend. Turning it into a product that scales is a different job. Here is the gap founders need to close.",
        body: [
          {
            type: "p",
            text: "In 2026 you can describe an app and watch AI write it in front of you. That is real, and it is genuinely useful. But there is a dangerous gap between a demo that runs on your laptop and a product that survives real users, and most founders discover it at the worst possible moment: right after traction.",
          },
          { type: "h2", text: "What AI is genuinely great at" },
          {
            type: "ul",
            items: [
              "Scaffolding a working prototype in hours instead of weeks",
              "Generating boilerplate and repetitive code",
              "Letting you explore an idea before you commit money to it",
              "Unblocking a non-technical founder who just wants to see something real",
            ],
          },
          {
            type: "p",
            text: "Used this way, AI builders are a gift. They collapse the distance between an idea and something you can click, and that is worth a lot when all you need to do is validate.",
          },
          { type: "h2", text: "Where the gap opens" },
          {
            type: "p",
            text: "The problem is not the code AI writes. It is the decisions AI does not make for you.",
          },
          {
            type: "ul",
            items: [
              "Architecture that holds up when traffic, data, and features grow",
              "Security and the responsible handling of real user data",
              "Tests and CI/CD so a change does not silently break what already worked",
              "The hard product trade-offs about what to build and what to cut",
            ],
          },
          {
            type: "p",
            text: "These are judgment calls, and judgment is exactly what a generated codebase lacks. An AI will happily produce ten thousand lines that work today and cannot be safely changed tomorrow.",
          },
          { type: "h2", text: "The rewrite tax" },
          {
            type: "p",
            text: "When an AI-built MVP gets traction, the founder often faces a bill they did not budget for: keep patching a codebase nobody fully understands, or rewrite it. Both are expensive. That is the rewrite tax, the real cost of skipping engineering judgment up front, and it tends to land exactly when momentum matters most.",
          },
          { type: "h2", text: "The model that actually works" },
          {
            type: "p",
            text: "The winning pattern in 2026 is not 'AI instead of engineers' or 'engineers instead of AI'. It is senior engineers using AI to move faster while owning the decisions AI cannot make.",
          },
          {
            type: "ul",
            items: [
              "AI accelerates the typing, senior engineers own the architecture",
              "Quality practices (tests, review, CI/CD) are in place from day one",
              "The MVP is built to become the product, not to be thrown away",
            ],
          },
          {
            type: "p",
            text: "AI changed how fast you can start. It did not change what it takes to build something that lasts. If your MVP is a throwaway experiment, let AI build it cheaply. If it is the foundation of a company, make sure someone senior owns the decisions underneath it.",
          },
        ],
      },
      "pt-BR": {
        title: "Vibe Coding vs Código de Produção: O Que um MVP Feito com IA Ainda Precisa",
        description:
          "A IA gera um protótipo funcional em um fim de semana. Transformá-lo em um produto que escala é outra história. Veja a lacuna que os fundadores precisam fechar.",
        body: [
          {
            type: "p",
            text: "Em 2026 você descreve um app e vê a IA escrevê-lo na sua frente. Isso é real e genuinamente útil. Mas existe uma lacuna perigosa entre uma demo que roda no seu notebook e um produto que sobrevive a usuários reais, e a maioria dos fundadores descobre isso no pior momento possível: logo depois da tração.",
          },
          { type: "h2", text: "No que a IA é realmente boa" },
          {
            type: "ul",
            items: [
              "Montar um protótipo funcional em horas, não semanas",
              "Gerar código repetitivo e boilerplate",
              "Deixar você explorar uma ideia antes de investir dinheiro nela",
              "Destravar um fundador não técnico que só quer ver algo real",
            ],
          },
          {
            type: "p",
            text: "Usados assim, os construtores com IA são um presente. Eles encurtam a distância entre uma ideia e algo em que você pode clicar, e isso vale muito quando tudo que você precisa é validar.",
          },
          { type: "h2", text: "Onde a lacuna se abre" },
          {
            type: "p",
            text: "O problema não é o código que a IA escreve. São as decisões que a IA não toma por você.",
          },
          {
            type: "ul",
            items: [
              "Arquitetura que aguenta quando tráfego, dados e features crescem",
              "Segurança e o tratamento responsável de dados reais de usuários",
              "Testes e CI/CD para que uma mudança não quebre em silêncio o que já funcionava",
              "As decisões difíceis de produto sobre o que construir e o que cortar",
            ],
          },
          {
            type: "p",
            text: "São decisões de julgamento, e julgamento é justamente o que falta a um código gerado. A IA vai felizmente produzir dez mil linhas que funcionam hoje e não podem ser alteradas com segurança amanhã.",
          },
          { type: "h2", text: "O imposto da reescrita" },
          {
            type: "p",
            text: "Quando um MVP feito com IA ganha tração, o fundador costuma encontrar uma conta que não orçou: continuar remendando um código que ninguém entende por completo, ou reescrever. Os dois são caros. Esse é o imposto da reescrita, o custo real de pular o julgamento de engenharia no início, e ele chega exatamente quando o momentum mais importa.",
          },
          { type: "h2", text: "O modelo que realmente funciona" },
          {
            type: "p",
            text: "O padrão vencedor em 2026 não é 'IA no lugar de engenheiros' nem 'engenheiros no lugar da IA'. É engenheiros seniores usando IA para ir mais rápido, enquanto donos das decisões que a IA não pode tomar.",
          },
          {
            type: "ul",
            items: [
              "A IA acelera a digitação, engenheiros seniores são donos da arquitetura",
              "Práticas de qualidade (testes, review, CI/CD) desde o primeiro dia",
              "O MVP é construído para virar o produto, não para ser descartado",
            ],
          },
          {
            type: "p",
            text: "A IA mudou a velocidade com que você começa. Não mudou o que é preciso para construir algo que dura. Se o seu MVP é um experimento descartável, deixe a IA construí-lo barato. Se é a base de uma empresa, garanta que alguém sênior seja dono das decisões por baixo dele.",
          },
        ],
      },
    },
  },
  {
    slug: "how-much-does-a-saas-cost-2026",
    category: "saas",
    date: "2026-07-11",
    readingMinutes: 7,
    author: "Gabriel Santos",
    content: {
      "en-US": {
        title: "How Much Does It Cost to Build a SaaS in 2026?",
        description:
          "The honest answer is a range, and the range depends on choices you control. Here is how to think about the cost of building a SaaS this year.",
        body: [
          {
            type: "p",
            text: "'How much will it cost?' is the first question every founder asks and the hardest to answer well. Anyone who gives you a single number without asking about your product is guessing. The useful answer is a range, plus the levers that move it, most of which you control.",
          },
          { type: "h2", text: "The four ways to build, and what they really cost" },
          {
            type: "p",
            text: "In 2026 a founder has roughly four paths, each with a different price and a different risk.",
          },
          {
            type: "ul",
            items: [
              "AI builders: cheapest and fastest, good for a throwaway validation prototype, not for a product you intend to grow",
              "Freelancers: low cost, high variance, and a single point of failure",
              "Agencies: high cost and slower, plenty of capacity but often no product opinion",
              "A senior product partner: built for speed and scale, priced on outcome, designed so the MVP becomes the product",
            ],
          },
          {
            type: "p",
            text: "The cheapest option is rarely the cheapest outcome. A prototype you have to rebuild is the most expensive way to save money.",
          },
          { type: "h2", text: "What actually drives the cost" },
          {
            type: "ul",
            items: [
              "Scope: how ruthlessly you cut to the core hypothesis",
              "Complexity of the one feature that makes the product worth using",
              "Integrations: payments, authentication, third-party APIs",
              "Whether it must scale from day one or can scale later",
              "Design maturity: a clear direction avoids expensive rework",
            ],
          },
          {
            type: "p",
            text: "Notice what is not on that list: the programming language. Founders often fixate on the stack. The stack rarely moves the budget. Scope and clarity move the budget.",
          },
          { type: "h2", text: "How AI changed the math" },
          {
            type: "p",
            text: "AI has genuinely lowered the cost of the first version. It has not lowered the cost of the decisions that make a SaaS scalable, secure, and maintainable. The floor dropped, but the part that protects your investment did not get cheaper. The smart move is to spend the savings on getting the foundations right, not on cramming in more features.",
          },
          { type: "h2", text: "A sensible way to budget" },
          {
            type: "ul",
            items: [
              "Budget for a focused first version, not the full vision",
              "Keep a reserve for iteration after real users show up",
              "Treat tests, code review, and CI/CD as included, not optional extras",
              "Price the outcome you want, not a pile of hours",
            ],
          },
          {
            type: "p",
            text: "The right question is not 'what is the cheapest way to build this?' It is 'what is the smallest investment that gets me a validated product on a foundation I can grow?' Answer that, and the cost takes care of itself.",
          },
        ],
      },
      "pt-BR": {
        title: "Quanto Custa Construir um SaaS em 2026?",
        description:
          "A resposta honesta é uma faixa, e a faixa depende de escolhas que você controla. Veja como pensar no custo de construir um SaaS neste ano.",
        body: [
          {
            type: "p",
            text: "'Quanto vai custar?' é a primeira pergunta de todo fundador e a mais difícil de responder bem. Quem te dá um número único sem perguntar sobre o seu produto está chutando. A resposta útil é uma faixa, mais as alavancas que a movem, e a maioria delas está sob o seu controle.",
          },
          { type: "h2", text: "Os quatro caminhos para construir, e o que custam de verdade" },
          {
            type: "p",
            text: "Em 2026 um fundador tem basicamente quatro caminhos, cada um com um preço e um risco diferentes.",
          },
          {
            type: "ul",
            items: [
              "Construtores com IA: mais baratos e rápidos, bons para um protótipo de validação descartável, não para um produto que você pretende crescer",
              "Freelancers: baixo custo, alta variação e um ponto único de falha",
              "Agências: custo alto e mais lentas, muita capacidade mas frequentemente sem opinião de produto",
              "Um parceiro sênior de produto: feito para velocidade e escala, precificado por resultado, desenhado para que o MVP vire o produto",
            ],
          },
          {
            type: "p",
            text: "A opção mais barata raramente é o resultado mais barato. Um protótipo que você precisa reconstruir é a forma mais cara de economizar dinheiro.",
          },
          { type: "h2", text: "O que realmente define o custo" },
          {
            type: "ul",
            items: [
              "Escopo: o quão implacável você é ao cortar para a hipótese central",
              "Complexidade da única feature que faz o produto valer a pena",
              "Integrações: pagamentos, autenticação, APIs de terceiros",
              "Se precisa escalar desde o primeiro dia ou pode escalar depois",
              "Maturidade de design: uma direção clara evita retrabalho caro",
            ],
          },
          {
            type: "p",
            text: "Repare no que não está na lista: a linguagem de programação. Fundadores costumam fixar na stack. A stack raramente move o orçamento. Escopo e clareza movem o orçamento.",
          },
          { type: "h2", text: "Como a IA mudou a conta" },
          {
            type: "p",
            text: "A IA baixou de verdade o custo da primeira versão. Ela não baixou o custo das decisões que tornam um SaaS escalável, seguro e sustentável. O piso caiu, mas a parte que protege o seu investimento não ficou mais barata. O movimento inteligente é gastar a economia acertando as fundações, não empilhando mais features.",
          },
          { type: "h2", text: "Uma forma sensata de orçar" },
          {
            type: "ul",
            items: [
              "Orce para uma primeira versão focada, não para a visão completa",
              "Guarde uma reserva para iterar depois que os usuários reais aparecerem",
              "Trate testes, code review e CI/CD como incluídos, não como extras opcionais",
              "Precifique o resultado que você quer, não uma pilha de horas",
            ],
          },
          {
            type: "p",
            text: "A pergunta certa não é 'qual a forma mais barata de construir isso?'. É 'qual o menor investimento que me dá um produto validado sobre uma base que eu consigo crescer?'. Responda isso, e o custo se resolve.",
          },
        ],
      },
    },
  },
  {
    slug: "vertical-ai-saas-2026",
    category: "saas",
    date: "2026-07-15",
    readingMinutes: 6,
    author: "Felício Santos",
    content: {
      "en-US": {
        title: "Vertical AI SaaS: Why Niche Beats Broad in 2026",
        description:
          "The biggest SaaS opportunity in 2026 is not a better horizontal tool. It is a deep, AI-native product for one industry. Here is why, and how to approach it.",
        body: [
          {
            type: "p",
            text: "For years the SaaS playbook was to build a broad, horizontal tool and sell it to everyone. In 2026 the momentum has flipped. The products growing fastest are vertical: narrow, deep, and built around one industry's real workflow, with AI at the core rather than bolted on.",
          },
          { type: "h2", text: "Why vertical is winning" },
          {
            type: "ul",
            items: [
              "You solve one industry's problem completely, instead of a generic problem partially",
              "You own the data and workflow a horizontal tool never sees",
              "AI makes a deep, industry-specific product feasible for a small team",
              "Buyers pay more for something that fits exactly, and they churn less",
            ],
          },
          {
            type: "p",
            text: "A horizontal tool competes with everyone. A vertical product competes with spreadsheets and manual work, which is a much easier fight to win.",
          },
          { type: "h2", text: "What 'AI-native' actually means" },
          {
            type: "p",
            text: "AI-native is not a chatbot in the corner of an existing app. It means the product could not exist without AI doing real work at its core: automating a workflow, making a decision, or producing an output the user used to create by hand. If you removed the AI and the product still basically worked, it is not AI-native, it is AI-flavored.",
          },
          { type: "h2", text: "The advantage founders underrate" },
          {
            type: "p",
            text: "In a vertical, domain knowledge beats scale. A founder who deeply understands one industry can out-build a giant that treats that industry as a rounding error. AI closes the engineering gap. Your understanding of the niche is the moat.",
          },
          { type: "h2", text: "How to approach it without overbuilding" },
          {
            type: "ul",
            items: [
              "Pick a vertical you understand, or can learn deeply",
              "Find the one painful workflow AI can genuinely automate",
              "Build the smallest version that does that one thing well",
              "Price to the outcome the buyer already measures",
              "Make reliability a feature, because vertical buyers do not tolerate flakiness",
            ],
          },
          {
            type: "p",
            text: "The opportunity in 2026 is not to build a slightly better version of a broad tool. It is to go deep in one place, let AI do the heavy lifting, and become the product an industry cannot work without. Narrow is the new big.",
          },
        ],
      },
      "pt-BR": {
        title: "SaaS Vertical com IA: Por Que o Nicho Vence o Amplo em 2026",
        description:
          "A maior oportunidade de SaaS em 2026 não é uma ferramenta horizontal melhor. É um produto profundo e nativo de IA para um único setor. Veja por quê, e como abordar.",
        body: [
          {
            type: "p",
            text: "Por anos o manual do SaaS foi construir uma ferramenta ampla e horizontal e vender para todo mundo. Em 2026 o movimento se inverteu. Os produtos que mais crescem são verticais: estreitos, profundos e construídos em torno do fluxo real de um único setor, com IA no centro e não apenas anexada.",
          },
          { type: "h2", text: "Por que o vertical está vencendo" },
          {
            type: "ul",
            items: [
              "Você resolve por completo o problema de um setor, em vez de resolver parcialmente um problema genérico",
              "Você é dono dos dados e do fluxo que uma ferramenta horizontal nunca vê",
              "A IA torna viável, para um time pequeno, um produto profundo e específico de setor",
              "Os compradores pagam mais por algo que encaixa exatamente, e cancelam menos",
            ],
          },
          {
            type: "p",
            text: "Uma ferramenta horizontal compete com todo mundo. Um produto vertical compete com planilhas e trabalho manual, uma briga muito mais fácil de vencer.",
          },
          { type: "h2", text: "O que 'nativo de IA' realmente significa" },
          {
            type: "p",
            text: "Nativo de IA não é um chatbot no canto de um app existente. Significa que o produto não poderia existir sem a IA fazendo trabalho real no seu núcleo: automatizando um fluxo, tomando uma decisão ou produzindo um resultado que o usuário fazia à mão. Se você remove a IA e o produto ainda funciona basicamente igual, ele não é nativo de IA, é apenas com sabor de IA.",
          },
          { type: "h2", text: "A vantagem que fundadores subestimam" },
          {
            type: "p",
            text: "Num vertical, conhecimento de domínio vence escala. Um fundador que entende profundamente um setor consegue superar um gigante que trata aquele setor como um detalhe. A IA fecha a lacuna de engenharia. O seu entendimento do nicho é o fosso.",
          },
          { type: "h2", text: "Como abordar sem construir demais" },
          {
            type: "ul",
            items: [
              "Escolha um vertical que você entende, ou consegue aprender a fundo",
              "Encontre o único fluxo doloroso que a IA pode realmente automatizar",
              "Construa a menor versão que faça essa única coisa bem",
              "Precifique pelo resultado que o comprador já mede",
              "Faça da confiabilidade uma feature, porque comprador de vertical não tolera instabilidade",
            ],
          },
          {
            type: "p",
            text: "A oportunidade em 2026 não é construir uma versão um pouco melhor de uma ferramenta ampla. É ir fundo em um só lugar, deixar a IA fazer o trabalho pesado e virar o produto sem o qual um setor não consegue trabalhar. Estreito é o novo grande.",
          },
        ],
      },
    },
  },
  {
    slug: "ai-agents-beyond-the-chatbot",
    category: "ai",
    date: "2026-07-18",
    readingMinutes: 6,
    author: "Gabriel Santos",
    content: {
      "en-US": {
        title: "Beyond the Chatbot: How Founders Should Actually Use AI in Their Product",
        description:
          "Adding a chat box is the least interesting thing you can do with AI. The real value is delegated work. Here is how to think about it.",
        body: [
          {
            type: "p",
            text: "The first instinct when adding AI to a product is to bolt a chat box onto it. It demos well and adds almost no value. The products that win with AI in 2026 use it to do work, not to talk about work.",
          },
          { type: "h2", text: "The thin-wrapper trap" },
          {
            type: "p",
            text: "A thin wrapper is a feature that just passes the user's text to a model and shows the reply. It is easy to build, easy to copy, and easy to leave. If your only AI feature is a chat box, a competitor can add the same thing in an afternoon, and so can the model provider.",
          },
          { type: "h2", text: "What 'delegated work' looks like" },
          {
            type: "p",
            text: "The valuable pattern is AI that completes a task the user used to do by hand, end to end, with a result you can measure.",
          },
          {
            type: "ul",
            items: [
              "Turning messy input into clean, structured data",
              "Drafting, triaging, or routing so a human only has to approve",
              "Running a multi-step workflow and reporting the outcome",
              "Making a routine decision within clear, safe rules",
            ],
          },
          {
            type: "p",
            text: "The test: does the feature save the user real time or produce a real output, or does it just chat? Delegated work is defensible because it is wired into your product's data and workflow, which a generic tool does not have.",
          },
          { type: "h2", text: "Where founders go wrong" },
          {
            type: "ul",
            items: [
              "Adding AI because investors expect it, not because users need it",
              "Using AI where a simple rule or form would be better and cheaper",
              "Ignoring cost, latency, and failure modes until they hurt",
              "Trusting AI output blindly instead of designing for human review",
            ],
          },
          {
            type: "p",
            text: "AI is a tool, not a strategy. 'We use AI' is not a value proposition. 'We do the thing you hated doing, automatically' is.",
          },
          { type: "h2", text: "How to start" },
          {
            type: "ul",
            items: [
              "Find one task your users dread and repeat often",
              "Check whether AI can do it reliably enough to be trusted",
              "Design the human checkpoint before you ship",
              "Measure whether it actually saves time or improves the output",
            ],
          },
          {
            type: "p",
            text: "The founders getting real value from AI are not the ones with the flashiest demo. They are the ones who picked one painful task and let AI quietly do it, every day, reliably. Start there.",
          },
        ],
      },
      "pt-BR": {
        title: "Além do Chatbot: Como Fundadores Deveriam Realmente Usar IA no Produto",
        description:
          "Adicionar uma caixa de chat é a coisa menos interessante que você pode fazer com IA. O valor real está no trabalho delegado. Veja como pensar nisso.",
        body: [
          {
            type: "p",
            text: "O primeiro instinto ao adicionar IA a um produto é grudar uma caixa de chat nele. Demonstra bem e agrega quase nada. Os produtos que vencem com IA em 2026 usam a IA para fazer trabalho, não para falar sobre o trabalho.",
          },
          { type: "h2", text: "A armadilha do wrapper raso" },
          {
            type: "p",
            text: "Um wrapper raso é uma feature que só passa o texto do usuário para um modelo e mostra a resposta. É fácil de construir, fácil de copiar e fácil de abandonar. Se a sua única feature de IA é uma caixa de chat, um concorrente adiciona o mesmo em uma tarde, e o provedor do modelo também.",
          },
          { type: "h2", text: "Como é o 'trabalho delegado'" },
          {
            type: "p",
            text: "O padrão valioso é uma IA que completa, de ponta a ponta, uma tarefa que o usuário fazia à mão, com um resultado que você consegue medir.",
          },
          {
            type: "ul",
            items: [
              "Transformar entrada bagunçada em dados limpos e estruturados",
              "Rascunhar, triar ou rotear para que um humano só precise aprovar",
              "Executar um fluxo de vários passos e reportar o resultado",
              "Tomar uma decisão rotineira dentro de regras claras e seguras",
            ],
          },
          {
            type: "p",
            text: "O teste: a feature economiza tempo real do usuário ou gera um resultado real, ou apenas conversa? Trabalho delegado é defensável porque está ligado aos dados e ao fluxo do seu produto, algo que uma ferramenta genérica não tem.",
          },
          { type: "h2", text: "Onde os fundadores erram" },
          {
            type: "ul",
            items: [
              "Adicionar IA porque investidores esperam, não porque usuários precisam",
              "Usar IA onde uma regra simples ou um formulário seria melhor e mais barato",
              "Ignorar custo, latência e modos de falha até que doam",
              "Confiar cegamente na saída da IA em vez de desenhar para revisão humana",
            ],
          },
          {
            type: "p",
            text: "IA é uma ferramenta, não uma estratégia. 'Nós usamos IA' não é uma proposta de valor. 'Nós fazemos automaticamente aquilo que você odiava fazer' é.",
          },
          { type: "h2", text: "Como começar" },
          {
            type: "ul",
            items: [
              "Encontre uma tarefa que seus usuários detestam e repetem com frequência",
              "Verifique se a IA consegue fazê-la de forma confiável o suficiente para ter confiança",
              "Desenhe o ponto de revisão humana antes de lançar",
              "Meça se ela realmente economiza tempo ou melhora o resultado",
            ],
          },
          {
            type: "p",
            text: "Os fundadores que tiram valor real da IA não são os da demo mais chamativa. São os que escolheram uma tarefa dolorosa e deixaram a IA fazê-la, todos os dias, de forma confiável. Comece por aí.",
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
