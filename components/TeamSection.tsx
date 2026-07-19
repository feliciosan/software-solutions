import { useTranslations } from "next-intl";
import Image from "next/image";
import { Container } from "./Container";
import { Section } from "./Section";
import { Icon } from "./Icon";
import { founders } from "@/lib/siteConfig";

export function TeamSection() {
  const t = useTranslations("team");

  return (
    <Section id="team" background="default">
      <Container size="narrow">
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

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {founders.map((member) => (
            <article
              key={member.key}
              className="bg-white p-6 lg:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 ring-2 ring-slate-100">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium">
                    {t(`members.${member.key}.role`)}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-slate-600 leading-relaxed">
                {t(`members.${member.key}.bio`)}
              </p>

              <div className="mt-5">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  {t("specialtiesLabel")}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <li
                      key={skill}
                      className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-medium text-slate-700"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                aria-label={`${member.name}, ${t("linkedinLabel")}`}
              >
                <Icon name="linkedin" className="w-4 h-4" />
                {t("linkedinLabel")}
              </a>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
