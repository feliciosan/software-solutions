"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";

export function MVPGuaranteesSection() {
  const t = useTranslations("mvp.guarantees");

  const guarantees = [
    { icon: "✅", gradient: "from-green-400 to-emerald-500" },
    { icon: "⚡", gradient: "from-yellow-400 to-orange-500" },
    { icon: "💬", gradient: "from-blue-400 to-indigo-500" },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">
            {t("headline")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="text-center group">
              <div
                className={`w-24 h-24 bg-gradient-to-br ${guarantee.gradient} rounded-full flex items-center justify-center text-5xl mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform`}
              >
                {guarantee.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {t(`items.${index}.title`)}
              </h3>
              <p className="text-slate-600 text-lg">
                {t(`items.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
