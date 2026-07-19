import { useTranslations } from "next-intl";
import { Container } from "./Container";
import { Section } from "./Section";
import { Icon, type IconName } from "./Icon";
import { services } from "@/lib/siteConfig";

const iconMap: Record<string, IconName> = {
  rocket: "rocket",
  layers: "layers",
  sparkles: "sparkles",
  refresh: "refresh",
  users: "users",
};

export function ServicesSection() {
  const t = useTranslations("services");

  return (
    <Section id="services" background="subtle">
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
          {services.map((service) => (
            <article
              key={service.key}
              className="group bg-white p-6 lg:p-8 rounded-2xl border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Icon name={iconMap[service.icon]} className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {t(`items.${service.key}.title`)}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t(`items.${service.key}.description`)}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
