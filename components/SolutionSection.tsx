import { useTranslations } from "next-intl";
import { Container } from "./Container";
import { Section } from "./Section";

export function SolutionSection() {
  const t = useTranslations("solution");

  return (
    <Section background="subtle">
      <Container size="narrow">
        <div className="text-center">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            {t("title")}
          </span>

          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mt-4 mb-6">
            {t("offerName")}
          </h3>

          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-900 to-blue-900 text-white text-sm font-semibold rounded-full mb-8 shadow-lg">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            {t("offerDuration")}
          </div>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t("description")}
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
              <div className="text-sm text-slate-600">
                {t("stats.experience")}
              </div>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-slate-600">
                {t("stats.projects")}
              </div>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-slate-600">
                {t("stats.satisfaction")}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
