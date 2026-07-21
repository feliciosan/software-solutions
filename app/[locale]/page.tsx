import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";
import { locales } from "@/i18n";
import { baseUrl, founders, socialLinks } from "@/lib/siteConfig";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { TopicsSection } from "@/components/TopicsSection";
import { BlogPreviewSection } from "@/components/BlogPreviewSection";
import { TeamSection } from "@/components/TeamSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const currentUrl = `${baseUrl}/${locale}`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "software engineering blog",
      "tech stacks",
      "software architecture",
      "MVP",
      "SaaS",
      "AI",
      "scalability",
      "web development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "cloud",
      "engenharia de software",
      "arquitetura de software",
    ],
    authors: [{ name: "CodaCrew" }],
    creator: "CodaCrew",
    publisher: "CodaCrew",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: {
        "pt-BR": `${baseUrl}/pt-BR`,
        "en-US": `${baseUrl}/en-US`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: currentUrl,
      siteName: "CodaCrew",
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      creator: "@codacrew",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION }
      : undefined,
  };
}

export default async function HomePage({
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
  const t = await getTranslations({ locale, namespace: "metadata" });

  // Content publisher: Organization + Blog. No service offers (content-first).
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CodaCrew",
    description: t("description"),
    url: `${baseUrl}/${locale}`,
    logo: `${baseUrl}/logo.svg`,
    image: `${baseUrl}/${locale}/opengraph-image`,
    sameAs: [socialLinks.github, socialLinks.linkedin],
    founder: founders.map((f) => ({
      "@type": "Person",
      name: f.name,
      jobTitle: "Senior Software Engineer",
    })),
    knowsAbout: [
      "Software Engineering",
      "Software Architecture",
      "MVP",
      "SaaS",
      "AI",
      "Scalability",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Cloud",
    ],
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NextIntlClientProvider messages={messages}>
        <Header />
        <main>
          <HeroSection />
          <TrustBar />
          <TopicsSection />
          <BlogPreviewSection />
          <TeamSection />
          <FinalCtaSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </NextIntlClientProvider>
    </>
  );
}
