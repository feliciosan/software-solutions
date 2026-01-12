"use client";

import { useState } from "react";

interface Feature {
  id: string;
  label: string;
  baseWeeks: number;
  minCost: number;
  maxCost: number;
}

const FEATURES_CONFIG: Feature[] = [
  {
    id: "landing",
    label: "Landing Page / Site Institucional",
    baseWeeks: 2,
    minCost: 1000,
    maxCost: 2000,
  },
  {
    id: "webapp",
    label: "Web App Completo (Frontend + Backend + DB)",
    baseWeeks: 6,
    minCost: 3500,
    maxCost: 7500,
  },
  {
    id: "auth",
    label: "Sistema de Autenticação",
    baseWeeks: 1,
    minCost: 500,
    maxCost: 1000,
  },
  {
    id: "payments",
    label: "Integração de Pagamentos",
    baseWeeks: 2,
    minCost: 850,
    maxCost: 1700,
  },
  {
    id: "admin",
    label: "Painel Administrativo",
    baseWeeks: 2,
    minCost: 1350,
    maxCost: 2500,
  },
  {
    id: "mobile",
    label: "App Mobile (iOS + Android)",
    baseWeeks: 8,
    minCost: 5000,
    maxCost: 10000,
  },
  {
    id: "ai",
    label: "Integração com IA (GPT-4, etc)",
    baseWeeks: 2,
    minCost: 1350,
    maxCost: 2500,
  },
];

export function InternalCalculator() {
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

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border-2 border-slate-200">
        <h3 className="text-2xl font-bold mb-2 text-slate-900">
          Calculadora de Estimativa
        </h3>
        <p className="text-slate-600 mb-8">
          Selecione as funcionalidades do projeto:
        </p>

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
                  {feature.label}
                </span>
                <span className="text-sm text-slate-500 font-medium">
                  {feature.baseWeeks < 2
                    ? `${Math.round(feature.baseWeeks * 7)} dias`
                    : `${feature.baseWeeks} sem`}
                </span>
              </label>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 rounded-xl border-2 border-blue-200 shadow-inner">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="text-sm text-slate-600 mb-2 font-medium">
                Investimento Estimado
              </div>
              {selectedFeatures.size > 0 ? (
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-blue-600">
                    € {minCost.toLocaleString("pt-PT")}
                  </div>
                  <div className="text-xl text-slate-600">até</div>
                  <div className="text-3xl font-bold text-blue-600">
                    € {maxCost.toLocaleString("pt-PT")}
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    Faixa de investimento base
                  </p>
                </div>
              ) : (
                <div className="text-2xl font-bold text-slate-400">
                  Selecione features
                </div>
              )}
            </div>

            <div>
              <div className="text-sm text-slate-600 mb-2 font-medium">
                Prazo Estimado
              </div>
              <div className="text-4xl font-bold text-purple-600">
                {totalWeeks > 0 ? `${totalWeeks} sem` : "-"}
              </div>
              {totalWeeks > 0 && (
                <p className="text-sm text-slate-500 mt-2">
                  ~{Math.ceil(totalWeeks / 4)}{" "}
                  {Math.ceil(totalWeeks / 4) === 1 ? "mês" : "meses"}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2 bg-white/70 p-4 rounded-lg">
            <p className="text-xs text-slate-600">
              <strong>*</strong> Valores incluem: código production-ready,
              testes, deploy, documentação e 1 mês de suporte
            </p>
            <p className="text-xs text-slate-600">
              <strong>**</strong> Ajuste conforme: complexidade real, urgência,
              stack específica, integrações extras
            </p>
            <p className="text-xs text-red-600 font-semibold">
              <strong>⚠️</strong> NÃO compartilhar estes valores com clientes -
              são apenas referência interna
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
