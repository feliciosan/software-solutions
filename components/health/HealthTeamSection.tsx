"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";

export function HealthTeamSection() {
  const t = useTranslations("health.team");

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
              {t("headline")}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("subheadline")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            {/* Membro 1 */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-6xl shadow-lg">
                👨‍💻
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">
                {t("member1.name")}
              </h3>
              <p className="text-teal-600 font-semibold mb-4 text-center">
                {t("member1.role")}
              </p>
              <p className="text-slate-600 leading-relaxed text-center">
                {t("member1.bio")}
              </p>
            </div>

            {/* Membro 2 */}
            <div className="bg-gradient-to-br from-slate-50 to-teal-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-6xl shadow-lg">
                👨‍💼
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">
                {t("member2.name")}
              </h3>
              <p className="text-teal-600 font-semibold mb-4 text-center">
                {t("member2.role")}
              </p>
              <p className="text-slate-600 leading-relaxed text-center">
                {t("member2.bio")}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-teal-50 border-l-4 border-blue-500 p-8 rounded-lg">
            <p className="text-xl text-slate-900 text-center leading-relaxed">
              {t("closing")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
