"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";

export function MVPTeamSection() {
  const t = useTranslations("mvp.team");

  const advantages = [
    {
      icon: "🤝",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "⚡",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "🎯",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: "🚀",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-purple-200 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-bold mb-6 shadow-lg">
              👥 {t("badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              {t("headline")}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t("subheadline")}
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Description */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    💼
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {t("experience.title")}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {t("experience.description")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {t("synergy.title")}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {t("synergy.description")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {t("efficiency.title")}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {t("efficiency.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Benefits Grid */}
            <div>
              <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  {t("benefits.title")}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {advantages.map((advantage, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all group"
                    >
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${advantage.gradient} rounded-2xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                      >
                        {advantage.icon}
                      </div>
                      <h4 className="text-white font-bold mb-2">
                        {t(`benefits.items.${index}.title`)}
                      </h4>
                      <p className="text-slate-300 text-sm">
                        {t(`benefits.items.${index}.description`)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-8 pt-8 border-t border-white/20 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">5+</div>
                    <div className="text-xs text-slate-300">
                      {t("stats.years")}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">
                      50+
                    </div>
                    <div className="text-xs text-slate-300">
                      {t("stats.projects")}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">
                      100%
                    </div>
                    <div className="text-xs text-slate-300">
                      {t("stats.success")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom highlight */}
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-blue-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                  ✅
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">
                    {t("guarantee.title")}
                  </h4>
                  <p className="text-slate-600">{t("guarantee.description")}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-slate-700 shadow-md">
                  💬 {t("guarantee.tags.0")}
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-slate-700 shadow-md">
                  📊 {t("guarantee.tags.1")}
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-slate-700 shadow-md">
                  🔄 {t("guarantee.tags.2")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
