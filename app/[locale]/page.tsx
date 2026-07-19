import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";
import { locales } from "@/i18n";
import { baseUrl, services, founders, socialLinks } from "@/lib/siteConfig";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { ProblemsSection } from "@/components/ProblemsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { DifferentiatorsSection } from "@/components/DifferentiatorsSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { TeamSection } from "@/components/TeamSection";
import { AudienceSection } from "@/components/AudienceSection";
import { BlogPreviewSection } from "@/components/BlogPreviewSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
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
      "startup development",
      "MVP development",
      "SaaS development",
      "technical partner",
      "product development",
      "AI integration",
      "team augmentation",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "desenvolvimento de startups",
      "desenvolvimento de MVP",
      "parceiro técnico",
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
  const tServices = await getTranslations({ locale, namespace: "services" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CodaCrew",
    description: t("description"),
    url: `${baseUrl}/${locale}`,
    logo: `${baseUrl}/logo.svg`,
    image: `${baseUrl}/${locale}/opengraph-image`,
    sameAs: [socialLinks.github, socialLinks.linkedin],
    areaServed: "Worldwide",
    founder: founders.map((f) => ({
      "@type": "Person",
      name: f.name,
      jobTitle: "Co-founder & Senior Software Engineer",
    })),
    knowsAbout: [
      "Startup Development",
      "MVP Development",
      "SaaS Development",
      "AI Integration",
      "Software Architecture",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Cloud",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: tServices("title"),
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: tServices(`items.${s.key}.title`),
          description: tServices(`items.${s.key}.description`),
        },
      })),
    },
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
          <ProblemsSection />
          <ProcessSection />
          <ServicesSection />
          <CtaBanner variant="estimate" />
          <DifferentiatorsSection />
          <CaseStudiesSection />
          <TeamSection />
          <CtaBanner variant="build" />
          <AudienceSection />
          <BlogPreviewSection />
          <FinalCtaSection />
        </main>
        <Footer />
        <StickyCta />
        <WhatsAppButton />
      </NextIntlClientProvider>
    </>
  );
}
