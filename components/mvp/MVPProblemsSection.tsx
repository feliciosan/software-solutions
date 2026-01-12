"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";

export function MVPProblemsSection() {
  const t = useTranslations("mvp.problems");

  const problems = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 to-orange-50",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      gradient: "from-orange-500 to-yellow-500",
      bgGradient: "from-orange-50 to-yellow-50",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      gradient: "from-yellow-500 to-green-500",
      bgGradient: "from-yellow-50 to-green-50",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      gradient: "from-green-500 to-blue-500",
      bgGradient: "from-green-50 to-blue-50",
    },
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-bold mb-6 shadow-lg">
              ⚠️ Evite Estes Erros Fatais
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              {t("headline")}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t("subheadline")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((item, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl border-2 border-slate-200 hover:border-slate-300 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
                style={{
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {/* Top gradient accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${item.gradient} z-10 rounded-t-3xl`}
                />

                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                />

                <div className="relative p-8 z-10">
                  {/* Icon with gradient background */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    {item.icon}
                  </div>

                  {/* Problem */}
                  <div className="mb-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors">
                          <svg
                            className="w-5 h-5 text-red-600 group-hover:text-white transition-colors"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </div>
                      <p className="text-slate-700 leading-relaxed font-medium text-lg">
                        {t(`items.${index}.problem`)}
                      </p>
                    </div>
                  </div>

                  {/* Elegant divider */}
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div
                        className={`w-full h-px bg-gradient-to-r ${item.gradient} opacity-30`}
                      />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-4 py-1 text-sm text-slate-600 font-semibold rounded-full border-2 border-slate-200 group-hover:border-green-500 group-hover:text-green-700 transition-colors">
                        ✨ Nossa Solução
                      </span>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:scale-110 transition-all">
                        <svg
                          className="w-5 h-5 text-green-600 group-hover:text-white transition-colors"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-slate-900 leading-relaxed font-bold text-lg">
                      {t(`items.${index}.solution`)}
                    </p>
                  </div>
                </div>

                {/* Ring effect on hover - respects rounded corners */}
                <div
                  className={`absolute inset-0 rounded-3xl ring-4 ring-transparent group-hover:ring-blue-400/30 transition-all duration-500 pointer-events-none`}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
