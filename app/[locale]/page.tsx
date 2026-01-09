import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales } from "@/i18n";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { ProblemsSection } from "@/components/ProblemsSection";
import { SolutionSection } from "@/components/SolutionSection";
import { IncludedSection } from "@/components/IncludedSection";
import { AudienceSection } from "@/components/AudienceSection";
import { AboutSection } from "@/components/AboutSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com";
  const currentUrl = `${baseUrl}/${locale}`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "software development",
      "desenvolvimento de software",
      "web development",
      "mobile development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "full stack development",
      "desenvolvimento full stack",
      "consultoria técnica",
      "technical consulting",
    ],
    authors: [{ name: "Felicio Santos" }],
    creator: "Felicio Santos",
    publisher: "Software Development Services",
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
      siteName: "Software Development Services",
      locale: locale,
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      creator: "@feliciosan",
      images: [`${baseUrl}/og-image.jpg`],
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
    verification: {
      google: "your-google-verification-code",
    },
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Software Development Services",
    description:
      locale === "pt-BR"
        ? "Time especializado em construir aplicações web e mobile de alta qualidade"
        : "Specialized team building high-quality web and mobile applications",
    url: `${
      process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com"
    }/${locale}`,
    logo: `${
      process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com"
    }/logo.png`,
    sameAs: [
      "https://github.com/feliciosan",
      "https://linkedin.com/in/feliciosan",
    ],
    founder: {
      "@type": "Person",
      name: "Felicio Santos",
    },
    offers: {
      "@type": "Offer",
      name:
        locale === "pt-BR"
          ? "Desenvolvimento de Software"
          : "Software Development",
      description:
        locale === "pt-BR"
          ? "Desenvolvimento completo de aplicações web e mobile"
          : "Complete web and mobile application development",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "React Native",
      "Web Development",
      "Mobile Development",
      "Full Stack Development",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NextIntlClientProvider messages={messages}>
        <Header />
        <main>
          <HeroSection />
          <SocialProofSection />
          <ProblemsSection />
          <SolutionSection />
          <IncludedSection />
          <AudienceSection />
          <AboutSection />
          <FinalCtaSection />
        </main>
      </NextIntlClientProvider>
    </>
  );
}
