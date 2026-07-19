import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { NavLink } from "./NavLink";
import {
  navItems,
  services,
  socialLinks,
  localizedHref,
} from "@/lib/siteConfig";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tServices = useTranslations("services");
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.svg"
              alt="CodaCrew"
              width={140}
              height={36}
              className="h-7 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
          </div>

          {/* Navigate */}
          <nav aria-label={t("navigate")}>
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t("navigate")}
            </h2>
            <ul className="space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.key}>
                  <NavLink
                    href={localizedHref(locale, item.href)}
                    className="hover:text-white transition-colors"
                  >
                    {tNav(item.key)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t("servicesTitle")}
            </h2>
            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.key}>
                  <NavLink
                    href={localizedHref(locale, "#services")}
                    className="hover:text-white transition-colors"
                  >
                    {tServices(`items.${service.key}.title`)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t("connect")}
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Icon name="linkedin" className="w-4 h-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Icon name="github" className="w-4 h-4" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl(t("whatsappMessage"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Icon name="whatsapp" className="w-4 h-4" /> {t("whatsapp")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-slate-400">
          © {year} CodaCrew. {t("rights")}
        </div>
      </Container>
    </footer>
  );
}
