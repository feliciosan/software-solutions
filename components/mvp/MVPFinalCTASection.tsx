"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { useRef, useCallback } from "react";
import posthog from "posthog-js";

export function MVPFinalCTASection() {
  const t = useTranslations("mvp.finalCta");
  const hasTrackedViewRef = useRef(false);

  const sectionRef = useCallback((node: HTMLElement | null) => {
    if (node && !hasTrackedViewRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasTrackedViewRef.current) {
              hasTrackedViewRef.current = true;
              posthog.capture("mvp_contact_section_viewed", {
                timestamp: new Date().toISOString(),
              });
              observer.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(node);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-bold mb-6 shadow-xl">
              🚀 {t("badge")}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {t("headline")}
            </h2>

            <p className="text-xl sm:text-2xl text-white mb-2 font-medium">
              {t("subheadline")}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-white/30">
            {/* Header do formulário */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                💬 {t("formTitle")}
              </h3>
              <p className="text-blue-100">{t("formSubtitle")}</p>
            </div>

            {/* Formulário */}
            <div className="p-8 md:p-12 bg-white">
              <ContactForm variant="mvp" />
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white mb-6 text-lg font-medium">
              {t("responseTime")}
            </p>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-white font-medium">
                  {t("stats.satisfaction")}
                </div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-white mb-2">24h</div>
                <div className="text-sm text-white font-medium">
                  {t("stats.response")}
                </div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-white mb-2">12+</div>
                <div className="text-sm text-white font-medium">
                  {t("stats.projects")}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">📧</span>
                <span className="text-white font-medium">
                  contato@codacrew.com
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">💬</span>
                <span className="text-white font-medium">
                  {t("scheduleCall")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
