"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import Image from "next/image";

export function HealthHeroSection() {
  const t = useTranslations("health.hero");

  const openWhatsApp = () => {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const message = encodeURIComponent(t("whatsappMessage"));
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section
      className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden"
      aria-label="Seção principal"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 -z-10" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Conteúdo à esquerda */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
              {t("badge")}
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              {t("headline")}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {t("headlineHighlight")}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              {t("subheadline")}
            </p>

            <Button
              size="lg"
              onClick={openWhatsApp}
              className="!bg-green-600 hover:!bg-green-700 shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 transition-all"
              aria-label="Falar com especialista no WhatsApp"
            >
              💬 {t("cta")}
            </Button>

            {/* Trust badges minimalistas */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{t("trustBadge1")}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{t("trustBadge2")}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{t("trustBadge3")}</span>
              </div>
            </div>
          </div>

          {/* Imagem de profissionais à direita */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decoração de fundo com cores */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-green-200/20 rounded-3xl blur-3xl"></div>

              {/* Container da imagem */}
              <div className="relative bg-white rounded-3xl p-3 shadow-2xl">
                <div className="bg-gradient-to-br from-blue-50 to-green-50/30 rounded-2xl w-80 h-80 sm:w-[28rem] sm:h-[28rem] lg:w-[32rem] lg:h-[32rem] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/woman-nutri.png"
                    alt="Profissional de saúde - Nutricionista"
                    width={512}
                    height={512}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Badge flutuante com destaque - posicionado abaixo */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-3 border-2 border-blue-200 z-10">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <div className="whitespace-nowrap">
                    <p className="text-xs font-bold text-slate-900">
                      {t("priceText")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
