import { useTranslations } from "next-intl";
import { Container } from "./Container";
import { Section } from "./Section";

export function IncludedSection() {
  const t = useTranslations("included");

  const steps = [0, 1, 2, 3, 4, 5].map((index) => ({
    title: t(`steps.${index}.title`),
    description: t(`steps.${index}.description`),
  }));

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
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white p-6 lg:p-8 rounded-2xl border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-xl font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
