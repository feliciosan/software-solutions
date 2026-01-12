"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";

export function MVPTimelineSection() {
  const t = useTranslations("mvp.timeline");

  const phases = [
    {
      weeks: "1-2",
      icon: "📋",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      weeks: "3-8",
      icon: "⚙️",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      weeks: "9-12",
      icon: "🚀",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">
            {t("headline")}
          </h2>
          <p className="text-slate-600 text-lg">{t("subheadline")}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line - Desktop */}
            <div className="absolute left-10 top-10 bottom-10 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden md:block rounded-full" />

            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-8">
                    {/* Icon circle - Fixed position */}
                    <div className="hidden md:block flex-shrink-0">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center text-4xl shadow-lg border-4 border-white z-10 transform group-hover:scale-110 transition-transform`}
                      >
                        {phase.icon}
                      </div>
                    </div>

                    {/* Content card */}
                    <div
                      className={`flex-1 bg-white p-8 rounded-2xl shadow-lg border-2 ${phase.borderColor} hover:shadow-2xl transition-all group`}
                    >
                      {/* Mobile icon */}
                      <div className="md:hidden mb-6">
                        <div
                          className={`inline-flex w-16 h-16 bg-gradient-to-br ${phase.color} rounded-full items-center justify-center text-3xl shadow-lg border-4 border-white`}
                        >
                          {phase.icon}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-full">
                          {t("weeksLabel")} {phase.weeks}
                        </span>
                        <h3 className="text-2xl font-bold text-slate-900">
                          {t(`phases.${index}.title`)}
                        </h3>
                      </div>

                      <ul className="space-y-3">
                        {[0, 1, 2, 3].map((itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3 text-slate-700"
                          >
                            <span className="text-green-500 mt-1 text-xl flex-shrink-0">
                              ✓
                            </span>
                            <span className="text-lg">
                              {t(`phases.${index}.items.${itemIndex}`)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
