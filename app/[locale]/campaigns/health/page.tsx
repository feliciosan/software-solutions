import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales } from "@/i18n";
import { Header } from "@/components/Header";
import { HealthHeroSection } from "@/components/health/HealthHeroSection";
import { HealthMissionSection } from "@/components/health/HealthMissionSection";
import { HealthProblemSection } from "@/components/health/HealthProblemSection";
import { HealthSolutionSection } from "@/components/health/HealthSolutionSection";
import { HealthIncludedSection } from "@/components/health/HealthIncludedSection";
import { HealthAudienceSection } from "@/components/health/HealthAudienceSection";
import { HealthCredibilitySection } from "@/components/health/HealthCredibilitySection";
import { HealthFinalCTASection } from "@/components/health/HealthFinalCTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "health.meta" });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com";
  const currentUrl = `${baseUrl}/${locale}/saude`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "website para psicólogo",
      "website para dentista",
      "website para nutricionista",
      "website para fisioterapeuta",
      "site profissional saúde",
      "site para profissionais de saúde",
      "landing page saúde",
      "presença digital saúde",
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

export default async function HealthProfessionalsPage({
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
        <HealthHeroSection />
        <HealthProblemSection />
        <HealthSolutionSection />
        <HealthCredibilitySection />
        <HealthIncludedSection />
        <HealthAudienceSection />
        <HealthMissionSection />
        <HealthFinalCTASection />
      </main>
    </NextIntlClientProvider>
  );
}
