import { useTranslations } from "next-intl";
import { Container } from "./Container";
import { Section } from "./Section";
import { Icon, type IconName } from "./Icon";
import { differentiators } from "@/lib/siteConfig";

const iconMap: Record<string, IconName> = {
  seniorEngineers: "award",
  startupMindset: "bolt",
  fastDelivery: "clock",
  scalableArchitecture: "trending",
  productThinking: "bulb",
  partnership: "heart",
};

export function DifferentiatorsSection() {
  const t = useTranslations("differentiators");

  return (
    <Section background="default">
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {differentiators.map((key) => (
            <div key={key} className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-slate-900 to-blue-900 text-white">
                <Icon name={iconMap[key]} className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
