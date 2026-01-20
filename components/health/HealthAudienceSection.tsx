"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";

export function HealthAudienceSection() {
  const t = useTranslations("health.audience");

  const professionals = [
    { icon: "🧠", name: t("prof1"), gradient: "from-purple-400 to-purple-600" },
    { icon: "🦷", name: t("prof2"), gradient: "from-blue-400 to-blue-600" },
    { icon: "🥗", name: t("prof3"), gradient: "from-green-400 to-green-600" },
    { icon: "💪", name: t("prof4"), gradient: "from-orange-400 to-orange-600" },
    { icon: "🩺", name: t("prof5"), gradient: "from-teal-400 to-teal-600" },
  ];

  return (
    <section className="py-16 bg-white" aria-labelledby="audience-heading">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              {t("badge")}
            </div>
            <h2
              id="audience-heading"
              className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900"
            >
              {t("headline")}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {professionals.map((prof, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-2xl hover:shadow-lg transition-all group text-center"
              >
                <div
                  className={`w-16 h-16 mx-auto bg-gradient-to-br ${prof.gradient} rounded-2xl flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform shadow-md`}
                >
                  {prof.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  {prof.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xl font-semibold text-slate-900 mb-2">
              {t("closing")}
            </p>
            <p className="text-slate-600">{t("closingSub")}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
