import { useTranslations } from "next-intl";
import { Container } from "./Container";
import { Button } from "./Button";
import { Icon } from "./Icon";

type CtaVariant = "build" | "estimate" | "talk";

/**
 * Reusable inline CTA band placed between sections so conversion isn't limited to
 * the final form. `variant` selects the copy (see the `ctaBanner` i18n namespace).
 */
export function CtaBanner({
  variant = "build",
  href = "#contact",
}: {
  variant?: CtaVariant;
  href?: string;
}) {
  const t = useTranslations(`ctaBanner.${variant}`);

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-blue-900 px-6 py-10 sm:px-12 sm:py-12">
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {t("title")}
              </h2>
              <p className="mt-2 text-slate-300 max-w-xl">{t("subtitle")}</p>
            </div>
            <Button
              size="lg"
              href={href}
              variant="secondary"
              className="flex-shrink-0 self-center bg-white text-slate-900 hover:bg-slate-100"
            >
              {t("button")}
              <Icon name="arrowRight" className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
