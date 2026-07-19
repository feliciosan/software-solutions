"use client";

import { useTranslations } from "next-intl";
import { Container } from "./Container";
import { Button } from "./Button";
import posthog from "posthog-js";

const journeyStages = [
  { key: "idea", captionKey: "ideaCaption", timeKey: "ideaTime" },
  { key: "mvp", captionKey: "mvpCaption", timeKey: "mvpTime" },
  { key: "scale", captionKey: "scaleCaption", timeKey: "scaleTime" },
] as const;

const techStack = ["React", "Next.js", "Node.js", "AWS"];

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
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8">
                {/* Header row */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {t("journey.title")}
                  </p>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    {t("journey.seniorTeam")}
                  </span>
                </div>

                {/* Steps */}
                <ol className="space-y-5">
                  {journeyStages.map((stage, index) => (
                    <li
                      key={stage.key}
                      className="relative flex items-start gap-4"
                    >
                      {index < journeyStages.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="absolute left-5 top-11 h-[calc(100%+4px)] w-0.5 bg-gradient-to-b from-blue-400 to-slate-200"
                        />
                      )}
                      <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-blue-900 text-white font-bold flex items-center justify-center shadow-md">
                        {index + 1}
                      </span>
                      <div className="flex-1 pt-0.5">
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-semibold text-slate-900">
                            {t(`journey.${stage.key}`)}
                          </p>
                          <span className="flex-shrink-0 px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full text-xs font-medium">
                            {t(`journey.${stage.timeKey}`)}
                          </span>
                        </div>
                        <p className="text-sm text-slate-500">
                          {t(`journey.${stage.captionKey}`)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                {/* Footer: tech stack */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <p className="text-xs text-slate-400 mb-2.5">
                    {t("journey.stackLabel")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Shipped highlight: inside the card, after the tech badges */}
                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-green-50 border border-green-100 px-4 py-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-green-100 text-green-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-900 leading-tight">
                      {t("journey.shippedTitle")}
                    </p>
                    <p className="text-xs text-slate-600">
                      {t("journey.shippedSub")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
