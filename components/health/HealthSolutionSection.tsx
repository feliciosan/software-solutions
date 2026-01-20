"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";

export function HealthSolutionSection() {
  const t = useTranslations("health.solution");

  const benefits = [
    { icon: "✨", gradient: "from-purple-400 to-pink-500" },
    { icon: "🎯", gradient: "from-blue-400 to-cyan-500" },
    { icon: "🌐", gradient: "from-teal-400 to-green-500" },
    { icon: "📞", gradient: "from-orange-400 to-red-500" },
  ];

  return (
    <section
      className="py-16 bg-gradient-to-b from-slate-50 to-white"
      aria-labelledby="solution-heading"
    >
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {t("badge")}
            </div>
            <h2
              id="solution-heading"
              className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900"
            >
              {t("headline")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("subheadline")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform shadow-md`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {t(`benefit${index + 1}.title`)}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t(`benefit${index + 1}.description`)}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-2xl text-center shadow-xl max-w-2xl mx-auto">
            <p className="text-xl font-bold mb-2">{t("emphasis")}</p>
            <p className="opacity-90">{t("emphasisSub")}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
