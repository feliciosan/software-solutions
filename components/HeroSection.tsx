"use client";

import { useTranslations } from "next-intl";
import { Container } from "./Container";
import { Button } from "./Button";
import posthog from "posthog-js";

const journeyStages = [
  { key: "idea", timeKey: "ideaTime" },
  { key: "mvp", timeKey: "mvpTime" },
  { key: "scale", timeKey: "scaleTime" },
] as const;

const techStack = ["React", "Next.js", "Node.js", "AWS"];

// Illustrative KPIs for the product dashboard mockup (a sample product UI,
// not CodaCrew business metrics).
const dashboardKpis = [
  { key: "revenue", value: "€12.4k", delta: "+12%" },
  { key: "users", value: "3,201", delta: "+8%" },
  { key: "growth", value: "18%", delta: "+3%" },
] as const;

export function HeroSection() {
  const t = useTranslations("hero");

  const handlePrimaryClick = () => {
    posthog.capture("cta_hero_clicked", {
      button_text: t("ctaPrimary"),
      destination: "#contact",
    });
  };

  const handleSecondaryClick = () => {
    posthog.capture("cta_learn_more_clicked", {
      button_text: t("ctaSecondary"),
      destination: "#process",
    });
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background gradient (preserves existing brand identity) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 -z-10" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              {t("availableBadge")}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight text-balance">
              {t("headline")}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t("subheadline")}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                href="#contact"
                onClick={handlePrimaryClick}
                className="shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20"
              >
                {t("ctaPrimary")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                href="#process"
                onClick={handleSecondaryClick}
              >
                {t("ctaSecondary")}
              </Button>
            </div>

            <p className="mt-4 text-sm text-slate-500 text-center lg:text-left">
              {t("microcopy")}
            </p>
          </div>

          {/* Visual: product journey (Idea to MVP to Scale). No photos, fast LCP. */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-slate-900/10 rounded-3xl blur-2xl" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-slate-200 shadow-xl p-4 sm:p-5">
                {/* Product dashboard mockup — a sample of what we build */}
                <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                  {/* Window chrome */}
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 bg-slate-50">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <span className="ml-3 text-xs font-medium text-slate-500">
                        {t("dashboard.label")}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      {t("dashboard.live")}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-4">
                    <p className="text-[11px] text-slate-400 mb-3">
                      {t("dashboard.period")}
                    </p>

                    {/* KPI cards */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {dashboardKpis.map((kpi) => (
                        <div
                          key={kpi.key}
                          className="rounded-xl border border-slate-100 bg-slate-50/70 p-2.5"
                        >
                          <p className="text-[10px] text-slate-400 truncate">
                            {t(`dashboard.${kpi.key}`)}
                          </p>
                          <p className="text-sm font-bold text-slate-900">
                            {kpi.value}
                          </p>
                          <p className="text-[10px] font-medium text-green-600">
                            {kpi.delta}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Trend chart (decorative, SVG) */}
                    <div className="rounded-xl border border-slate-100 bg-gradient-to-b from-blue-50/60 to-white p-3">
                      <svg
                        viewBox="0 0 320 90"
                        className="w-full h-20"
                        fill="none"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <defs>
                          <linearGradient
                            id="heroChartFill"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="#3b82f6"
                              stopOpacity="0.25"
                            />
                            <stop
                              offset="100%"
                              stopColor="#3b82f6"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,72 L40,62 L80,66 L120,46 L160,52 L200,32 L240,38 L280,20 L320,12 L320,90 L0,90 Z"
                          fill="url(#heroChartFill)"
                        />
                        <path
                          d="M0,72 L40,62 L80,66 L120,46 L160,52 L200,32 L240,38 L280,20 L320,12"
                          stroke="#2563eb"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Compact product journey: Idea -> MVP -> Scale */}
                <div className="mt-4 flex items-center justify-between gap-1">
                  {journeyStages.map((stage, index) => (
                    <div key={stage.key} className="flex items-center gap-1">
                      <div className="flex items-center gap-2">
                        <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-slate-900 to-blue-900 text-white text-xs font-bold flex items-center justify-center">
                          {index + 1}
                        </span>
                        <div className="leading-tight">
                          <p className="text-xs font-semibold text-slate-900">
                            {t(`journey.${stage.key}`)}
                          </p>
                          <p className="text-[10px] text-slate-400">
                            {t(`journey.${stage.timeKey}`)}
                          </p>
                        </div>
                      </div>
                      {index < journeyStages.length - 1 && (
                        <svg
                          className="w-4 h-4 text-slate-300 mx-0.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>

                {/* Thin stack line */}
                <p className="mt-3 text-[11px] text-slate-400 text-center">
                  {t("journey.stackLabel")}: {techStack.join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
