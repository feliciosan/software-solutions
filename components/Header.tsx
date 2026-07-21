"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { NavLink } from "./NavLink";
import { navItems, localizedHref } from "@/lib/siteConfig";

export function Header() {
  const t = useTranslations("header");
  const tNav = useTranslations("nav");
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3">
      <div className="max-w-7xl mx-auto rounded-xl border border-white/10 bg-dark/90 backdrop-blur-md shadow-sm">
        <div className="px-4 sm:px-5">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className="flex flex-col items-start justify-center gap-0.5 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/logo.svg"
                alt="CodaCrew"
                width={130}
                height={32}
                className="h-5 sm:h-6 w-auto brightness-0 invert"
                priority
              />
              <span className="hidden sm:block font-mono text-[10px] text-white/50 pl-0.5">
                {t("tagline")}
              </span>
            </Link>

            {/* Desktop nav */}
            <nav
              aria-label="Main"
              className="hidden lg:flex items-center gap-7"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.key}
                  href={localizedHref(locale, item.href)}
                  className="font-mono text-sm text-white/80 hover:text-white transition-colors"
                >
                  {tNav(item.key)}
                </NavLink>
              ))}
            </nav>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher />
              <Button size="sm" href={localizedHref(locale, "/blog")}>
                {tNav("cta")}
              </Button>
            </div>

            {/* Mobile toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageSwitcher />
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? tNav("closeMenu") : tNav("openMenu")}
                aria-expanded={menuOpen}
                className="flex items-center justify-center w-10 h-10 rounded-lg text-white/80 hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Icon name={menuOpen ? "close" : "menu"} className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav
            aria-label="Mobile"
            className="lg:hidden border-t border-white/10 px-4 sm:px-5 py-4 space-y-1"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                href={localizedHref(locale, item.href)}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded-lg font-mono text-base text-white/80 hover:bg-white/10 transition-colors"
              >
                {tNav(item.key)}
              </NavLink>
            ))}
            <Button
              href={localizedHref(locale, "/blog")}
              onClick={() => setMenuOpen(false)}
              className="w-full mt-2"
            >
              {tNav("cta")}
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
