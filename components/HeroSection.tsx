"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Container } from "./Container";
import { Button } from "./Button";
import { founders } from "@/lib/siteConfig";
import posthog from "posthog-js";

export function HeroSection() {
  const t = useTranslations("hero");
  const tTeam = useTranslations("team");
  const locale = useLocale();

  const handlePrimaryClick = () => {
    posthog.capture("cta_hero_clicked", {
      button_text: t("ctaPrimary"),
      destination: "/blog",
    });
  };

  const handleSecondaryClick = () => {
    posthog.capture("cta_learn_more_clicked", {
      button_text: t("ctaSecondary"),
      destination: "#topics",
    });
  };

  return (
    <section className="pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 font-mono text-xs text-muted border border-border bg-surface rounded-lg px-3 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {t("availableBadge")}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.12] tracking-tight text-balance">
              {t("headline")}
            </h1>

            <p className="mt-5 text-lg text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t("subheadline")}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button size="lg" href={`/${locale}/blog`} onClick={handlePrimaryClick}>
                {t("ctaPrimary")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                href="#topics"
                onClick={handleSecondaryClick}
              >
                {t("ctaSecondary")}
              </Button>
            </div>

            <p className="mt-4 font-mono text-xs text-muted text-center lg:text-left">
              {t("microcopy")}
            </p>
          </div>

          {/* Founders: the humans behind the writing */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-xl border border-border bg-surface p-6 shadow-sm">
              <p className="font-mono text-xs text-muted mb-5">
                {"// "}
                {t("authorsLabel")}
              </p>

              <div className="space-y-5">
                {founders.map((f) => (
                  <div key={f.key} className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-code flex-shrink-0 ring-1 ring-border">
                      <Image
                        src={f.photo}
                        alt={f.name}
                        width={120}
                        height={120}
                        className="object-cover w-full h-full"
                        priority
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground truncate">{f.name}</p>
                      <p className="font-mono text-xs text-muted truncate">
                        {tTeam(`members.${f.key}.role`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-border flex flex-wrap gap-1.5">
                {["React", "Node.js", "TypeScript", "AWS", "Next.js"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] text-muted bg-code rounded-md px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
