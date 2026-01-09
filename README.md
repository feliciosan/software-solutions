# Software Development Services Landing Page

Landing page premium para serviços de Frontend Engineering de alto nível.

## 🚀 Stack Técnica

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **next-intl** (Internacionalização)
- Suporte para pt-BR e en-US

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 🌍 Internacionalização

A aplicação suporta dois idiomas:

- Português Brasileiro (pt-BR) - padrão
- Inglês Americano (en-US)

Os arquivos de tradução estão em:

- `/messages/pt-BR.json`
- `/messages/en-US.json`

## 📁 Estrutura do Projeto

```
├── app/
│   ├── [locale]/        # Páginas internacionalizadas
│   ├── layout.tsx       # Layout raiz
│   └── globals.css      # Estilos globais e tema
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── SocialProofSection.tsx
│   ├── ProblemsSection.tsx
│   ├── SolutionSection.tsx
│   ├── IncludedSection.tsx
│   ├── AudienceSection.tsx
│   ├── AboutSection.tsx
│   ├── FinalCtaSection.tsx
│   ├── Button.tsx
│   ├── Container.tsx
│   ├── Section.tsx
│   └── LanguageSwitcher.tsx
├── messages/            # Arquivos de tradução
├── i18n.ts             # Configuração do next-intl
└── middleware.ts       # Middleware de roteamento
```

## 🎨 Paleta de Cores

A landing page usa uma paleta premium e minimalista:

- **Background**: Slate 50 (#f8fafc)
- **Texto Principal**: Slate 900 (#0f172a)
- **Primária**: Slate 900 (botões e CTAs)
- **Bordas**: Slate 200 (#e2e8f0)

## ✨ Seções da Landing Page

1. **Hero** - Headline principal e CTA
2. **Prova Social** - Logos das marcas (Hugo Boss, Calvin Klein, Tommy Hilfiger)
3. **Problemas** - Dores do público-alvo
4. **Solução** - Oferta do serviço (Sprint de 30 dias)
5. **O que está incluído** - 6 etapas do processo
6. **Público-alvo** - Para quem é e não é
7. **Sobre** - Apresentação profissional
8. **CTA Final** - Chamada para agendamento

## 🔗 Customização

### Alterar o Link do CTA

No componente `components/FinalCtaSection.tsx`, altere a prop `href` do botão:

```tsx
<Button variant="secondary" size="lg" href="SEU_LINK_AQUI">
  {t("cta")}
</Button>
```

### Alterar as Marcas

No componente `components/SocialProofSection.tsx`, edite o array `brands`:

```tsx
const brands = [
  { name: "Sua Marca 1", logo: "LOGO 1" },
  { name: "Sua Marca 2", logo: "LOGO 2" },
  { name: "Sua Marca 3", logo: "LOGO 3" },
];
```

### Modificar Textos

Edite os arquivos em `/messages/`:

- `pt-BR.json` - Textos em português
- `en-US.json` - Textos em inglês

## 🚢 Build para Produção

```bash
npm run build
npm run start
```

## 📝 Notas Importantes

- A landing page é 100% responsiva (mobile-first)
- SEO básico configurado com metadata dinâmica por idioma
- Componentes reutilizáveis e código limpo
- Pronto para deploy em Vercel, Netlify ou qualquer plataforma Next.js

## 🎯 Próximos Passos

1. Configure seu link de agendamento (Calendly, Cal.com, etc)
2. Personalize os textos para seu negócio
3. Adicione analytics (Google Analytics, Plausible, etc)
4. Configure domínio personalizado
5. Considere adicionar formulário de contato

---

Desenvolvido com foco em qualidade, performance e conversão.
