import { useTranslations } from "next-intl";
import { Container } from "./Container";
import { Section } from "./Section";

export function ProblemsSection() {
  const t = useTranslations("problems");

  const problems = [0, 1, 2, 3].map((index) => ({
    title: t(`list.${index}.title`),
    description: t(`list.${index}.description`),
  }));

  return (
    <Section background="default">
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
            {t("title")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 lg:p-8 rounded-2xl border-2 border-slate-200 hover:border-red-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm group-hover:bg-red-600 group-hover:text-white transition-colors">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                {problem.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
