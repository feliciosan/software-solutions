"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";

export function HealthProblemSection() {
  const t = useTranslations("health.problem");

  const problems = [
    { icon: "📱", gradient: "from-orange-400 to-red-500" },
    { icon: "😟", gradient: "from-amber-400 to-orange-500" },
    { icon: "❌", gradient: "from-red-400 to-pink-500" },
  ];

  return (
    <section className="py-16 bg-white" aria-labelledby="problem-heading">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {t("badge")}
            </div>
            <h2
              id="problem-heading"
              className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900"
            >
              {t("headline")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("subheadline")}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-2xl hover:shadow-lg transition-all group"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${problem.gradient} rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform shadow-md`}
                >
                  {problem.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {t(`problem${index + 1}.title`)}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t(`problem${index + 1}.description`)}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50/30 border-l-4 border-blue-600 p-6 rounded-xl max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-slate-900 font-medium leading-relaxed">
                {t("emphasis")}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
