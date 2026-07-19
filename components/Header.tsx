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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex flex-col items-start justify-center gap-0.5 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.svg"
              alt="CodaCrew"
              width={140}
              height={36}
              className="h-5 sm:h-7 w-auto"
              priority
            />
            <span className="hidden sm:block text-xs text-slate-600 font-medium pl-1">
              {t("tagline")}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main"
            className="hidden lg:flex items-center gap-8"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                href={localizedHref(locale, item.href)}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
              >
                {tNav(item.key)}
              </NavLink>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Button size="sm" href={localizedHref(locale, "#contact")}>
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
              className="flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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
          className="lg:hidden border-t border-slate-200 bg-white"
        >
          <div className="px-4 sm:px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                href={localizedHref(locale, item.href)}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {tNav(item.key)}
              </NavLink>
            ))}
            <Button
              href={localizedHref(locale, "#contact")}
              onClick={() => setMenuOpen(false)}
              className="w-full mt-2"
            >
              {tNav("cta")}
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
