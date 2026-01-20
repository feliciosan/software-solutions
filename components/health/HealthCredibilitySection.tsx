"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";

export function HealthCredibilitySection() {
  const t = useTranslations("health.credibility");

  const credentials = [
    { icon: "💼", gradient: "from-blue-400 to-indigo-500" },
    { icon: "🎯", gradient: "from-teal-400 to-cyan-500" },
    { icon: "⭐", gradient: "from-yellow-400 to-orange-500" },
  ];

  return (
    <section
      className="py-16 bg-slate-50"
      aria-labelledby="credibility-heading"
    >
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {t("badge")}
            </div>
            <h2
              id="credibility-heading"
              className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900"
            >
              {t("headline")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("subheadline")}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {credentials.map((cred, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border-2 border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group text-center"
              >
                <div
                  className={`w-14 h-14 mx-auto bg-gradient-to-br ${cred.gradient} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform shadow-md`}
                >
                  {cred.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {t(`item${index + 1}.title`)}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t(`item${index + 1}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
