import { useTranslations } from "next-intl";
import { Container } from "./Container";
import { Button } from "./Button";

export function FinalCtaSection() {
  const t = useTranslations("finalCta");

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-32 overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <Container size="narrow" className="relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            {t("badge")}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t("title")}
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="secondary"
              size="lg"
              href="https://cal.com"
              className="bg-white text-slate-900 hover:bg-blue-50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              {t("cta")}
            </Button>
            <p className="text-sm text-slate-400">{t("disclaimer")}</p>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <p className="text-3xl font-bold text-white">12+</p>
              <p className="text-sm text-slate-400 mt-1">
                {t("stats.experience")}
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-sm text-slate-400 mt-1">
                {t("stats.projects")}
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-sm text-slate-400 mt-1">
                {t("stats.satisfaction")}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
