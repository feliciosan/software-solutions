import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales } from "@/i18n";
import { Header } from "@/components/Header";
import { MVPHeroSection } from "@/components/mvp/MVPHeroSection";
import { MVPProblemsSection } from "@/components/mvp/MVPProblemsSection";
import { MVPTimelineSection } from "@/components/mvp/MVPTimelineSection";
import { MVPTeamSection } from "@/components/mvp/MVPTeamSection";
import { MVPDiscoveryCallSection } from "@/components/mvp/MVPDiscoveryCallSection";
import { MVPCasesSection } from "@/components/mvp/MVPCasesSection";
import { MVPIncludedSection } from "@/components/mvp/MVPIncludedSection";
import { MVPGuaranteesSection } from "@/components/mvp/MVPGuaranteesSection";
import { MVPFinalCTASection } from "@/components/mvp/MVPFinalCTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "mvp.meta" });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com";
  const currentUrl = `${baseUrl}/${locale}/mvp-startup`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "MVP development",
      "desenvolvimento MVP",
      "startup MVP",
      "MVP para startups",
      "desenvolvimento rápido",
      "rapid development",
      "validação de produto",
      "product validation",
    ],
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: currentUrl,
      siteName: "CodaCrew",
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function MVPStartupPage({
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

  return (
    <NextIntlClientProvider messages={messages}>
      <Header />
      <main className="min-h-screen">
        <MVPHeroSection />
        <MVPProblemsSection />
        <MVPTimelineSection />
        <MVPTeamSection />
        <MVPDiscoveryCallSection />
        <MVPCasesSection />
        <MVPIncludedSection />
        <MVPGuaranteesSection />
        <MVPFinalCTASection />
      </main>
    </NextIntlClientProvider>
  );
}
