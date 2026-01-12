"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export function MVPHeroSection() {
  const t = useTranslations("mvp.hero");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 -z-10" />

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <Container>
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold bg-green-500 rounded-full shadow-lg animate-bounce-slow">
            ✅ {t("badge")}
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t("headline")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {t("headlineHighlight")}
            </span>
          </h1>

          <p className="text-xl mb-4 text-slate-300 max-w-3xl mx-auto">
            {t("subheadline")}
          </p>

          <p className="text-lg mb-8 text-slate-400 max-w-3xl mx-auto">
            {t("description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("discovery-call")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              {t("ctaPrimary")}
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection("cases")}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 text-white"
            >
              {t("ctaSecondary")}
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8 max-w-2xl mx-auto">
            <div className="text-center backdrop-blur-sm bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mb-1 sm:mb-2">
                12+
              </div>
              <div className="text-xs sm:text-sm text-slate-400 leading-tight">
                {t("stats.mvps")}
              </div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-1 sm:mb-2">
                8-12
              </div>
              <div className="text-xs sm:text-sm text-slate-400 leading-tight">
                {t("stats.weeks")}
              </div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">
                100%
              </div>
              <div className="text-xs sm:text-sm text-slate-400 leading-tight">
                {t("stats.onTime")}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
