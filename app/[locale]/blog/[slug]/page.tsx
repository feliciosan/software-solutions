import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { locales } from "@/i18n";
import { baseUrl } from "@/lib/siteConfig";
import { getPost, getAllPostSlugs } from "@/lib/blog";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllPostSlugs().map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(slug, locale);
  if (!post) return {};
  const localized = post.content[locale];
  const url = `${baseUrl}/${locale}/blog/${slug}`;
  // Use the post cover as the social image when present; otherwise Next falls
  // back to the site-wide dynamic OpenGraph image.
  const ogImages = post.cover
    ? [{ url: `${baseUrl}${post.cover}`, width: 1200, height: 630, alt: localized.title }]
    : undefined;

  return {
    title: localized.title,
    description: localized.description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: {
        "pt-BR": `${baseUrl}/pt-BR/blog/${slug}`,
        "en-US": `${baseUrl}/en-US/blog/${slug}`,
      },
    },
    openGraph: {
      title: localized.title,
      description: localized.description,
      url,
      siteName: "CodaCrew",
      locale,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      ...(ogImages ? { images: ogImages } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: localized.title,
      description: localized.description,
      ...(ogImages ? { images: ogImages.map((i) => i.url) } : {}),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const post = getPost(slug, locale);
  if (!post) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "blog" });
  const localized = post.content[locale];
  const url = `${baseUrl}/${locale}/blog/${slug}`;
  const dateLabel = new Date(post.date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: localized.title,
      description: localized.description,
      datePublished: post.date,
      author: { "@type": "Person", name: post.author },
      publisher: {
        "@type": "Organization",
        name: "CodaCrew",
        logo: { "@type": "ImageObject", url: `${baseUrl}/logo.svg` },
      },
      mainEntityOfPage: url,
      url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: t("title"),
          item: `${baseUrl}/${locale}/blog`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: localized.title,
          item: url,
        },
      ],
    },
  ];

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pt-28 pb-20 sm:pt-32 bg-white">
        <Container size="narrow">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <Icon name="arrowRight" className="w-4 h-4 rotate-180" />
            {t("backToBlog")}
          </Link>

          <article className="mt-6">
            <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
              <span className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
                {t(`categories.${post.category}`)}
              </span>
              <time dateTime={post.date}>{dateLabel}</time>
              <span aria-hidden="true">·</span>
              <span>
                {post.readingMinutes} {t("minRead")}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight text-balance">
              {localized.title}
            </h1>
            <p className="mt-4 text-lg text-slate-600">{localized.description}</p>
            <p className="mt-4 text-sm text-slate-500">{post.author}</p>

            {post.cover && (
              <div className="relative mt-8 aspect-[1200/630] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <Image
                  src={post.cover}
                  alt={localized.title}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  priority
                  className="object-cover"
                />
              </div>
            )}

            <div className="mt-10 space-y-6">
              {localized.body.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2
                      key={i}
                      className="text-2xl font-bold text-slate-900 pt-2"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={i} className="space-y-2 pl-1">
                      {block.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-700">
                          <Icon
                            name="check"
                            className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1"
                          />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-lg text-slate-700 leading-relaxed">
                    {block.text}
                  </p>
                );
              })}
            </div>
          </article>

          {/* Post-article CTA */}
          <div className="mt-14 rounded-3xl bg-gradient-to-br from-slate-900 to-blue-900 p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-bold text-white">
              {t("postCta.title")}
            </h2>
            <p className="mt-2 text-slate-300">{t("postCta.subtitle")}</p>
            <div className="mt-6">
              <Button
                href={`/${locale}#contact`}
                variant="secondary"
                className="bg-white text-slate-900 hover:bg-slate-100"
              >
                {t("postCta.button")}
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}
