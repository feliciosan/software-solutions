"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";
import Link from "next/link";

export function HealthIncludedSection() {
  const t = useTranslations("health.included");

  const items = [
    { icon: "🌐", gradient: "from-blue-400 to-blue-600" },
    { icon: "🎨", gradient: "from-teal-400 to-teal-600" },
    { icon: "📱", gradient: "from-cyan-400 to-cyan-600" },
    { icon: "👤", gradient: "from-indigo-400 to-indigo-600" },
    { icon: "🩺", gradient: "from-green-400 to-green-600" },
  ];

  return (
    <section
      id="included"
      className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50"
      aria-labelledby="included-heading"
    >
      <Container>
        <div className="text-center mb-16">
          <h2
            id="included-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-900"
          >
            {t("headline")}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            {t("subheadline")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border-2 border-slate-100 hover:border-teal-200 hover:shadow-xl transition-all group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {t(`items.${index}.title`)}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t(`items.${index}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* CTA intermediário */}
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            {t("ctaTitle")}
          </h3>
          <p className="text-lg opacity-95 mb-6">{t("ctaSubtitle")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold">{t("ctaBadge")}</span>
            </div>
            <Link
              href={`/demos/health/psicologo`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              {t("demoButton")}
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
