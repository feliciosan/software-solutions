"use client";

import { useTranslations } from "next-intl";
import { Container } from "./Container";
import { ContactForm } from "./ContactForm";
import { useRef, useCallback } from "react";
import posthog from "posthog-js";

export function FinalCtaSection() {
  const t = useTranslations("finalCta");
  const hasTrackedViewRef = useRef(false);

  const sectionRef = useCallback((node: HTMLElement | null) => {
    if (node && !hasTrackedViewRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasTrackedViewRef.current) {
              hasTrackedViewRef.current = true;
              posthog.capture("contact_section_viewed", {
                timestamp: new Date().toISOString(),
              });
              observer.disconnect();
            }
          });
        },
        { threshold: 0.3 },
      );
      observer.observe(node);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-dark"
    >
      <Container size="narrow">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 font-mono text-xs text-white/60 border border-white/15 rounded-lg px-3 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {t("badge")}
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            {t("title")}
          </h2>

          <p className="text-lg text-white/70 mb-2 max-w-xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
