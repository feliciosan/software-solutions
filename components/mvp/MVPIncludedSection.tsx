"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";

export function MVPIncludedSection() {
  const t = useTranslations("mvp.included");

  const items = [
    { icon: "💻", color: "blue" },
    { icon: "🧪", color: "purple" },
    { icon: "📱", color: "green" },
    { icon: "🚀", color: "orange" },
    { icon: "📚", color: "pink" },
    { icon: "🛡️", color: "indigo" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">
            {t("headline")}
          </h2>
          <p className="text-slate-600 text-lg">{t("subheadline")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl hover:scale-105 transition-all group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br from-${item.color}-400 to-${item.color}-600 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {t(`items.${index}.title`)}
              </h3>
              <p className="text-slate-600">
                {t(`items.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
