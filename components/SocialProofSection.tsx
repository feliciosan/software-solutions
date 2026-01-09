import { useTranslations } from "next-intl";
import { Container } from "./Container";
import { Section } from "./Section";
import Image from "next/image";

const brands = [
  { name: "Hugo Boss", logo: "/hugoboss-logo.png", width: 140, height: 40 },
  {
    name: "Calvin Klein",
    logo: "/calvin-klein-logo.webp",
    width: 280,
    height: 80,
  },
  {
    name: "Tommy Hilfiger",
    logo: "/tommy-hilfiger-logo.webp",
    width: 280,
    height: 80,
  },
  { name: "Globo", logo: "/globo-com-seeklogo.png", width: 100, height: 30 },
  {
    name: "Carlsberg",
    logo: "/carlsberg-seeklogo.png",
    width: 100,
    height: 30,
  },
];

export function SocialProofSection() {
  const t = useTranslations("social");

  return (
    <Section background="subtle" className="py-12 sm:py-16">
      <Container>
        <div className="text-center">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            {t("title")}
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                  className="max-h-20 sm:max-h-32 w-auto"
                />
              </div>
            ))}
          </div>

          <p className="mt-6 text-base text-slate-600 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>
      </Container>
    </Section>
  );
}
