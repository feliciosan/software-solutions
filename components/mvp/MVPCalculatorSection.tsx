"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

interface Feature {
  id: string;
  baseWeeks: number;
  minCost: number;
  maxCost: number;
}

const FEATURES_CONFIG: Feature[] = [
  { id: "landing", baseWeeks: 2, minCost: 6000, maxCost: 12000 },
  { id: "webapp", baseWeeks: 6, minCost: 20000, maxCost: 45000 },
  { id: "auth", baseWeeks: 1, minCost: 3000, maxCost: 6000 },
  { id: "payments", baseWeeks: 2, minCost: 5000, maxCost: 10000 },
  { id: "admin", baseWeeks: 2, minCost: 8000, maxCost: 15000 },
  { id: "mobile", baseWeeks: 8, minCost: 30000, maxCost: 60000 },
  { id: "ai", baseWeeks: 2, minCost: 8000, maxCost: 15000 },
];

export function MVPCalculatorSection() {
  const t = useTranslations("mvp.calculator");
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(
    new Set()
  );

  const toggleFeature = (id: string) => {
    const newSet = new Set(selectedFeatures);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedFeatures(newSet);
  };

  const totalWeeks = Math.ceil(
    Array.from(selectedFeatures).reduce((acc, id) => {
      const feature = FEATURES_CONFIG.find((f) => f.id === id);
      return acc + (feature?.baseWeeks || 0);
    }, 0)
  );

  const minCost = Array.from(selectedFeatures).reduce((acc, id) => {
    const feature = FEATURES_CONFIG.find((f) => f.id === id);
    return acc + (feature?.minCost || 0);
  }, 0);

  const maxCost = Array.from(selectedFeatures).reduce((acc, id) => {
    const feature = FEATURES_CONFIG.find((f) => f.id === id);
    return acc + (feature?.maxCost || 0);
  }, 0);

  const handleGetQuote = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="calculadora" className="py-20 bg-slate-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">
            {t("headline")}
          </h2>
          <p className="text-slate-600 text-lg">{t("subheadline")}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-slate-200">
            <h3 className="text-2xl font-bold mb-2 text-slate-900">
              {t("title")}
            </h3>
            <p className="text-slate-600 mb-8">{t("description")}</p>

            <div className="space-y-3 mb-8">
              {FEATURES_CONFIG.map((feature) => {
                const isSelected = selectedFeatures.has(feature.id);
                return (
                  <label
                    key={feature.id}
                    className={`flex items-center gap-4 p-5 border-2 rounded-xl cursor-pointer transition-all ${
                      isSelected
                        ? "border-blue-500 bg-blue-50 shadow-md"
                        : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleFeature(feature.id)}
                      className="w-6 h-6 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="flex-1 font-semibold text-slate-900 text-lg">
                      {t(`features.${feature.id}.label`)}
                    </span>
                    <span className="text-sm text-slate-500 font-medium">
                      {feature.baseWeeks < 2
                        ? `${Math.round(feature.baseWeeks * 7)} ${t("days")}`
                        : `${feature.baseWeeks} ${t("weeks")}`}
                    </span>
                  </label>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 rounded-xl mb-8 border-2 border-blue-200 shadow-inner">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-sm text-slate-600 mb-2 font-medium">
                    {t("estimatedCost")}
                  </div>
                  {selectedFeatures.size > 0 ? (
                    <div className="space-y-1">
                      <div className="text-4xl font-bold text-blue-600">
                        R$ {minCost.toLocaleString("pt-BR")} - R${" "}
                        {maxCost.toLocaleString("pt-BR")}
                      </div>
                      <p className="text-xs text-slate-500">
                        {t("priceRange")}
                      </p>
                    </div>
                  ) : (
                    <div className="text-3xl font-bold text-slate-400">
                      {t("selectFeatures")}
                    </div>
                  )}
                </div>

                <div className="text-right">
                  <div className="text-sm text-slate-600 mb-2 font-medium">
                    {t("timeline")}
                  </div>
                  <div className="text-4xl font-bold text-purple-600">
                    {totalWeeks > 0 ? `${totalWeeks} ${t("weeks")}` : "-"}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs text-slate-600 bg-white/70 p-3 rounded-lg">
                  * {t("disclaimer")}
                </div>
                <div className="text-xs text-slate-600 bg-white/70 p-3 rounded-lg">
                  ** {t("priceVariation")}
                </div>
              </div>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              size="lg"
              onClick={handleGetQuote}
            >
              {t("cta")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
