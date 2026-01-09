import { useTranslations } from "next-intl";
import { Container } from "./Container";
import { Section } from "./Section";

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <Section background="default">
      <Container size="narrow">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-slate-600 font-semibold text-sm uppercase tracking-wider">
              {t("badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-6">
              {t("title")}
            </h2>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 lg:p-12 rounded-2xl border border-slate-200">
            <p className="text-lg text-slate-600 leading-relaxed">
              {t("description")}
            </p>

            <div className="mt-8 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
              <div>
                <div className="text-xl font-bold text-slate-900">React</div>
                <div className="text-xs text-slate-500 mt-1">
                  {t("skills.react")}
                </div>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900">Next.js</div>
                <div className="text-xs text-slate-500 mt-1">
                  {t("skills.nextjs")}
                </div>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900">Node.js</div>
                <div className="text-xs text-slate-500 mt-1">
                  {t("skills.nodejs")}
                </div>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900">
                  TypeScript
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {t("skills.typescript")}
                </div>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900">
                  Databases
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {t("skills.databases")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
