import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import AreasSection from "./AreasSection";
import ProcessSection from "./ProcessSection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import FinalCTASection from "./FinalCTASection";
import Footer from "./Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "psychologist.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function PsicologoDemoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* Areas de Atuação Section */}
        <AreasSection />

        {/* Process Section */}
        <ProcessSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Final CTA Section */}
        <FinalCTASection />

        {/* Footer */}
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
