"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";

interface CaseStudyCardProps {
  company: string;
  timeline: string;
  budget: string;
  result: string;
  quote: string;
  metrics: string[];
  investmentLabel: string;
  resultLabel: string;
}

function CaseStudyCard({
  company,
  timeline,
  budget,
  result,
  quote,
  metrics,
  investmentLabel,
  resultLabel,
}: CaseStudyCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl hover:scale-[1.02] transition-all group">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">{company}</h3>
          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="flex items-center gap-1 bg-blue-100 px-3 py-1 rounded-full">
              <span>⏱️</span>
              {timeline}
            </span>
            <span className="flex items-center gap-1 bg-purple-100 px-3 py-1 rounded-full font-semibold">
              <span>💰</span>
              <span className="text-purple-700">
                {investmentLabel}: {budget}
              </span>
            </span>
          </div>
        </div>
        <div className="text-4xl group-hover:scale-110 transition-transform">
          ✨
        </div>
      </div>

      <blockquote className="text-slate-700 mb-6 italic border-l-4 border-blue-500 pl-4 text-lg leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl mb-6 border border-green-200">
        <div className="font-semibold text-green-800 mb-2 text-sm flex items-center gap-2">
          <span>📈</span>
          <span>{resultLabel}:</span>
        </div>
        <div className="text-3xl font-bold text-green-600">{result}</div>
      </div>

      <div className="flex flex-wrap gap-2">
        {metrics.map((metric, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-blue-100 text-blue-700 text-sm rounded-full font-semibold"
          >
            {metric}
          </span>
        ))}
      </div>
    </div>
  );
}

export function MVPCasesSection() {
  const t = useTranslations("mvp.cases");

  return (
    <section id="cases" className="py-20 bg-white">
      <Container>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-900">
          {t("headline")}
        </h2>
        <p className="text-center text-slate-600 mb-12 text-lg">
          {t("subheadline")}
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <CaseStudyCard
            company={t("items.0.company")}
            timeline={t("items.0.timeline")}
            budget={t("items.0.budget")}
            result={t("items.0.result")}
            quote={t("items.0.quote")}
            investmentLabel={t("investmentLabel")}
            resultLabel={t("resultLabel")}
            metrics={[
              t("items.0.metrics.0"),
              t("items.0.metrics.1"),
              t("items.0.metrics.2"),
            ]}
          />

          <CaseStudyCard
            company={t("items.1.company")}
            timeline={t("items.1.timeline")}
            budget={t("items.1.budget")}
            result={t("items.1.result")}
            quote={t("items.1.quote")}
            investmentLabel={t("investmentLabel")}
            resultLabel={t("resultLabel")}
            metrics={[
              t("items.1.metrics.0"),
              t("items.1.metrics.1"),
              t("items.1.metrics.2"),
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
