"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export function HealthFinalCTASection() {
  const t = useTranslations("health.finalCta");

  const openWhatsApp = () => {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const message = encodeURIComponent(t("whatsappMessage"));
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section
      className="py-24 relative overflow-hidden bg-white"
      aria-labelledby="final-cta-heading"
    >
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge de destaque */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {t("badge")}
          </div>

          <h2
            id="final-cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight"
          >
            {t("headline")}
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("subheadline")}
          </p>

          {/* Benefícios clean */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-green-50/30 p-6 rounded-2xl border-2 border-blue-100">
              <div className="text-3xl mb-3">⚡</div>
              <p className="font-semibold text-slate-900">{t("benefit1")}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl border-2 border-green-100">
              <div className="text-3xl mb-3">💰</div>
              <p className="font-semibold text-slate-900">{t("benefit2")}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50/30 p-6 rounded-2xl border-2 border-blue-100">
              <div className="text-3xl mb-3">🤝</div>
              <p className="font-semibold text-slate-900">{t("benefit3")}</p>
            </div>
          </div>

          <Button
            size="lg"
            onClick={openWhatsApp}
            className="bg-green-600 hover:bg-green-700 shadow-xl shadow-green-600/20 hover:shadow-2xl hover:shadow-green-600/30 transition-all text-lg px-12 py-4"
            aria-label="Iniciar conversa no WhatsApp para orçamento"
          >
            💬 {t("cta")}
          </Button>

          <p className="mt-6 text-slate-500 text-sm flex items-center justify-center gap-2">
            <svg
              className="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {t("guarantee")}
          </p>
        </div>
      </Container>
    </section>
  );
}
