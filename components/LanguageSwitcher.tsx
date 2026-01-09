"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { locales, Locale } from "@/i18n";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split("/").filter(Boolean);
    const isLocaleInPath = locales.includes(segments[0] as Locale);

    if (isLocaleInPath) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    router.push("/" + segments.join("/"));
  };

  return (
    <div className="flex items-center gap-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
            locale === loc
              ? "bg-slate-900 text-white"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          {loc === "pt-BR" ? "PT" : "EN"}
        </button>
      ))}
    </div>
  );
}
