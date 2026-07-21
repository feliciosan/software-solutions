import { useTranslations } from "next-intl";
import Image from "next/image";
import { Container } from "./Container";
import { Section } from "./Section";
import { Icon } from "./Icon";

const brands = [
  { name: "Hugo Boss", logo: "/hugoboss-logo.png", width: 140, height: 40 },
  { name: "Calvin Klein", logo: "/calvin-klein-logo.webp", width: 200, height: 60 },
  { name: "Tommy Hilfiger", logo: "/tommy-hilfiger-logo.webp", width: 200, height: 60 },
  { name: "Globo", logo: "/globo-com-seeklogo.png", width: 100, height: 30 },
  { name: "Carlsberg", logo: "/carlsberg-seeklogo.png", width: 100, height: 30 },
];

const indicators = [
  "seniorEngineers",
  "globalExperience",
  "modernStack",
  "aiReady",
  "startupFocus",
] as const;

export function TrustBar() {
  const t = useTranslations("trustBar");
  const s = useTranslations("social");

  return (
    <Section id="trust" background="subtle" className="py-12 sm:py-16">
      <Container>
        <div className="text-center">
          {/* Indicator chips */}
          <ul className="flex flex-wrap items-center justify-center gap-2.5">
            {indicators.map((key) => (
              <li
                key={key}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background border border-border rounded-lg font-mono text-xs text-foreground"
              >
                <Icon name="check" className="w-3.5 h-3.5 text-primary" />
                {t(`indicators.${key}`)}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-mono text-xs text-muted uppercase tracking-wider">
            {s("title")}
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={brand.width}
                  height={brand.height}
                  className="max-h-9 sm:max-h-11 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <p className="mt-6 text-base text-muted max-w-2xl mx-auto">
            {s("description")}
          </p>
        </div>
      </Container>
    </Section>
  );
}
