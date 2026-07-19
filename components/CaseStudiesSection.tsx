import { useTranslations } from "next-intl";
import { Container } from "./Container";
import { Section } from "./Section";
import { caseStudies } from "@/lib/siteConfig";

export function CaseStudiesSection() {
  const t = useTranslations("cases");

  return (
    <Section id="cases" background="subtle">
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

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {caseStudies.map((item) => (
            <article
              key={item.key}
              className="group bg-gradient-to-br from-slate-50 to-blue-50 p-6 lg:p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {t(`items.${item.key}.title`)}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-5">
                {t(`items.${item.key}.description`)}
              </p>
              <ul className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-700"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500 max-w-3xl mx-auto">
          {t("experienceNote")}
        </p>
      </Container>
    </Section>
  );
}
