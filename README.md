# CodaCrew - Strategic Development Partner

Landing page oficial da **CodaCrew**, empresa fundada por Felício Santos e Gabriel Santos especializada em desenvolvimento de produtos digitais escaláveis.

## 🚀 Stack Técnica

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next-intl** (Internacionalização)
- **React Hook Form + Zod** (Formulário de contato)
- **Resend** (Envio de emails)
- **PostHog** (Analytics)

Suporte para pt-BR e en-US com detecção automática baseada no idioma do browser.

## 📦 Instalação

```bash
npm install
```

## 🔐 Configuração de Ambiente

Copie o arquivo `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

Configure as variáveis necessárias:

```env
# Resend API Key para envio de emails
RESEND_API_KEY=re_sua_api_key_aqui

# Base URL (opcional)
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# PostHog (Analytics)
NEXT_PUBLIC_POSTHOG_KEY=sua_key_aqui
NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com
```

### Configurando o Resend

1. Crie conta em [resend.com](https://resend.com)
2. Adicione e verifique seu domínio `codacrew.com`
3. Gere uma API Key
4. Configure o email de destino em `app/api/contact/route.ts`

Veja mais detalhes em [CONTACT_FORM_SETUP.md](CONTACT_FORM_SETUP.md)

## 🛠️ Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 🌍 Internacionalização

A aplicação detecta automaticamente o idioma do browser:

- **Português Brasileiro (pt-BR)** - Idioma primário
- **Inglês Americano (en-US)** - Fallback para outros idiomas

**Sem prefixo na URL** - URLs limpas sem `/pt-BR` ou `/en-US`

Arquivos de tradução em:

- `/messages/pt-BR.json`
- `/messages/en-US.json`

## 📁 Estrutura do Projeto

```
├── app/
│   ├── [locale]/              # Páginas internacionalizadas
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # API Server-side para Resend
│   ├── layout.tsx             # Layout raiz
│   ├── globals.css            # Estilos globais
│   ├── icon.tsx               # Favicon generator
│   ├── opengraph-image.tsx    # OG Image generator
│   └── sitemap.ts             # Sitemap dinâmico
├── components/                # Componentes React
│   ├── ContactForm.tsx        # Formulário com validação
│   ├── Header.tsx             # Header com logo
│   ├── HeroSection.tsx        # Hero com intro dos fundadores
│   ├── SocialProofSection.tsx
│   ├── ProblemsSection.tsx
│   ├── SolutionSection.tsx
│   ├── IncludedSection.tsx
│   ├── AudienceSection.tsx
│   ├── AboutSection.tsx
│   ├── FinalCtaSection.tsx    # CTA com formulário
│   └── ...
├── messages/                  # i18n
├── public/                    # Assets estáticos
│   ├── logo.svg              # Logo CodaCrew
│   ├── favicon.ico
│   ├── site.webmanifest      # PWA manifest
│   └── ...
├── i18n.ts                    # Configuração next-intl
├── proxy.ts                   # Middleware (Next.js 16)
└── tailwind.config.js
```

## 🎨 Identidade Visual

### Cores

- **Primary**: Slate 900 (#0f172a) - Marca
- **Accent**: Blue 500 (#3b82f6) - Destaques
- **Background**: Slate 50 (#f8fafc)
- **Text**: Slate 900 (#0f172a)

### Logo

Logo em SVG localizada em `/public/logo.svg`

## ✨ Funcionalidades

### Seções da Landing Page

1. **Hero** - Intro humanizada dos fundadores + CTAs
2. **Social Proof** - Experiência com marcas globais (Hugo Boss, Calvin Klein, etc)
3. **Problems** - Dores do público-alvo
4. **Solution** - Diferenciais concretos (code review, CI/CD, transparência)
5. **Included** - Processo de trabalho
6. **Audience** - Para quem é/não é
7. **About** - Quem somos e tecnologias
8. **Final CTA** - Formulário de contato com orçamento

### Formulário de Contato

- 4 campos: Email, Empresa/Projeto, Orçamento (opcional), Mensagem
- Validação client-side (React Hook Form + Zod)
- Validação server-side
- API route segura (key não exposta no frontend)
- Email HTML estilizado via Resend
- Feedback visual de sucesso/erro

### Avatares Flutuantes (Hero)

Avatares decorativos que transmitem sensação de equipe maior:

- Ícones de múltiplos usuários
- Animação float suave
- Badge "+" verde
- Responsivo (ajustado para mobile)

### Analytics

PostHog configurado para tracking de:

- Pageviews
- Eventos de conversão
- Formulário de contato
- Scroll depth

## 🔗 Customização

### Email de Contato

Edite `app/api/contact/route.ts`:

```typescript
to: ["seu-email@codacrew.com"],
```

### Links Sociais

Edite `app/[locale]/page.tsx` no JSON-LD:

```typescript
sameAs: [
  "https://github.com/codacrew",
  "https://linkedin.com/company/codacrew",
],
```

### Domínio Base

Configure em `.env.local`:

```env
NEXT_PUBLIC_BASE_URL=https://codacrew.com
```

## 🚢 Deploy

### Vercel (Recomendado)

1. Push para GitHub
2. Importe projeto no Vercel
3. Configure environment variables:
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_BASE_URL`
   - `NEXT_PUBLIC_POSTHOG_KEY`
   - `NEXT_PUBLIC_POSTHOG_HOST`
4. Deploy automático

### Build Manual

```bash
npm run build
npm run start
```

## 📊 SEO & Performance

- ✅ JSON-LD Schema (Organization)
- ✅ OpenGraph tags completos
- ✅ Twitter Cards
- ✅ Sitemap dinâmico
- ✅ Robots.txt
- ✅ Favicons multi-device
- ✅ PWA Manifest
- ✅ Responsive images com Next.js Image
- ✅ CSS otimizado com Tailwind

## 🎯 Próximos Passos Sugeridos

- [ ] Adicionar seção de Cases/Portfolio
- [ ] Implementar blog técnico
- [ ] Rate limiting no formulário
- [ ] Google reCAPTCHA
- [ ] A/B testing com PostHog
- [ ] Automated email responses

---

**CodaCrew** - Do MVP à escala: Desenvolvemos produtos digitais que crescem com seu negócio.

Fundado por [Felício Santos](https://linkedin.com/in/feliciosan) e Gabriel Santos.
