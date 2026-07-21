import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Container } from "./Container";
import { Section } from "./Section";
import { Icon } from "./Icon";
import { blogCategories } from "@/lib/siteConfig";
import { categoryStyles } from "@/lib/categories";

export function TopicsSection() {
  const t = useTranslations("topics");
  const tBlog = useTranslations("blog");
  const locale = useLocale();

  return (
    <Section id="topics" background="default">
      <Container>
        <div className="text-center mb-12 lg:mb-14">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {blogCategories.map((cat) => {
            const style = categoryStyles[cat];
            return (
              <Link
                key={cat}
                href={`/${locale}/blog`}
                className="group bg-surface p-6 rounded-xl border border-border hover:border-primary/40 hover:shadow-sm transition-all"
              >
                <div
                  className={`flex items-center justify-center w-11 h-11 rounded-lg mb-4 ${style.iconWrap}`}
                >
                  <Icon name={style.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {tBlog(`categories.${cat}`)}
                </h3>
                <p className="text-muted leading-relaxed text-[15px]">
                  {t(`descriptions.${cat}`)}
                </p>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
