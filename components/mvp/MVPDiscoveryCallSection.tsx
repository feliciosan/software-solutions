"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import posthog from "posthog-js";

export function MVPDiscoveryCallSection() {
  const t = useTranslations("mvp.discoveryCall");

  const handleCTAClick = (location: string) => {
    posthog.capture("mvp_discovery_call_clicked", {
      location,
      timestamp: new Date().toISOString(),
    });

    // Scroll to contact form
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "blue",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      color: "green",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "purple",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "orange",
    },
  ];

  return (
    <section
      id="discovery-call"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-bold mb-6 shadow-lg">
              📞 Discovery Call Gratuita
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {t("headline")}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t("subheadline")}
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-slate-200 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Left side - What we'll discuss */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                    💭
                  </span>
                  {t("whatWeDiscuss.title")}
                </h3>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors group"
                    >
                      <div
                        className={`flex-shrink-0 w-12 h-12 bg-${benefit.color}-100 rounded-xl flex items-center justify-center text-${benefit.color}-600 group-hover:scale-110 transition-transform`}
                      >
                        {benefit.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-1">
                          {t(`whatWeDiscuss.items.${index}.title`)}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {t(`whatWeDiscuss.items.${index}.description`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - CTA and Details */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">
                      ⚡
                    </span>
                    {t("howItWorks.title")}
                  </h3>

                  <div className="space-y-4 mb-8">
                    {[0, 1, 2].map((index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-slate-700 font-medium">
                            {t(`howItWorks.steps.${index}`)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Primary CTA */}
                  <Button
                    size="lg"
                    onClick={() => handleCTAClick("main")}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                  >
                    {t("cta.primary")}
                  </Button>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-slate-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        30min
                      </div>
                      <div className="text-xs text-slate-600">
                        {t("stats.duration")}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        Grátis
                      </div>
                      <div className="text-xs text-slate-600">
                        {t("stats.price")}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        24h
                      </div>
                      <div className="text-xs text-slate-600">
                        {t("stats.response")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Trust Bar */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-8 py-6 border-t-2 border-slate-200">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-slate-700">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">{t("trust.0")}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">{t("trust.1")}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">{t("trust.2")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
