import { useTranslations } from "next-intl";
import { Container } from "./Container";
import { Section } from "./Section";

export function AudienceSection() {
  const t = useTranslations("audience");

  const isForList = [0, 1, 2, 3, 4].map((index) => t(`isFor.list.${index}`));

  const isNotForList = [0, 1, 2, 3, 4].map((index) =>
    t(`isNotFor.list.${index}`)
  );

  return (
    <Section background="subtle">
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-slate-600 font-semibold text-sm uppercase tracking-wider">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
            {t("title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white p-8 lg:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-3xl">✓</span>
              {t("isFor.title")}
            </h3>

            <ul className="space-y-4">
              {isForList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-100 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border-2 border-slate-200 p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">✗</span>
              {t("isNotFor.title")}
            </h3>

            <ul className="space-y-4">
              {isNotForList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-slate-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-slate-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
