import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales } from "@/i18n";
import { baseUrl } from "@/lib/siteConfig";
import { getAllPosts } from "@/lib/blog";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { PostCard } from "@/components/blog/PostCard";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const url = `${baseUrl}/${locale}/blog`;

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: {
        "pt-BR": `${baseUrl}/pt-BR/blog`,
        "en-US": `${baseUrl}/en-US/blog`,
      },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url,
      siteName: "CodaCrew",
      locale,
      type: "website",
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "blog" });
  const posts = getAllPosts(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "CodaCrew Blog",
    url: `${baseUrl}/${locale}/blog`,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.content[locale].title,
      datePublished: p.date,
      url: `${baseUrl}/${locale}/blog/${p.slug}`,
    })),
  };

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pt-28 pb-20 sm:pt-32 bg-slate-50 min-h-screen">
        <Container>
          <header className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
              {t("title")}
            </h1>
            <p className="mt-4 text-lg text-slate-600">{t("subtitle")}</p>
          </header>

          {posts.length === 0 ? (
            <p className="text-center text-slate-500">{t("empty")}</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}
