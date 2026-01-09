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

  return {
    title: t("title"),
    description: t("description"),
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

  return (
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
  );
}
