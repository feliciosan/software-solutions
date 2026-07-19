import { useTranslations } from "next-intl";
import { Container } from "./Container";
import { Section } from "./Section";
import { processSteps } from "@/lib/siteConfig";

export function ProcessSection() {
  const t = useTranslations("process");

  return (
    <Section id="process" background="default">
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

        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <li
              key={step}
              className="group relative bg-white p-6 lg:p-8 rounded-2xl border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-xl font-bold text-lg group-hover:scale-110 transition-transform">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {t(`steps.${step}.title`)}
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {t(`steps.${step}.description`)}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
