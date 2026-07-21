import { useTranslations } from "next-intl";
import Image from "next/image";
import { Container } from "./Container";
import { Section } from "./Section";
import { Icon } from "./Icon";
import { founders } from "@/lib/siteConfig";

export function TeamSection() {
  const t = useTranslations("team");

  return (
    <Section id="team" background="subtle">
      <Container size="narrow">
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-primary uppercase tracking-wider">
            {t("badge")}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-3">
            {t("title")}
          </h2>
          <p className="mt-3 text-lg text-muted max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {founders.map((member) => (
            <article
              key={member.key}
              className="bg-background p-6 rounded-xl border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-code flex-shrink-0 ring-1 ring-border">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="font-mono text-xs text-muted">
                    {t(`members.${member.key}.role`)}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-muted leading-relaxed text-[15px]">
                {t(`members.${member.key}.bio`)}
              </p>

              <div className="mt-4">
                <p className="font-mono text-[11px] text-muted uppercase tracking-wider mb-2">
                  {t("specialtiesLabel")}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <li
                      key={skill}
                      className="font-mono text-[11px] text-muted bg-surface border border-border rounded-md px-2 py-0.5"
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
                className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
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
