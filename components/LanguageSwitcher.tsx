"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { locales, Locale } from "@/i18n";
import posthog from "posthog-js";

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

    // Track language switch event
    posthog.capture("language_switched", {
      previous_locale: locale,
      new_locale: newLocale,
      current_path: pathname,
    });

    router.push("/" + segments.join("/"));
  };

  return (
    <div className="flex items-center gap-2">
      {locales.toSorted().map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-2.5 py-1 font-mono text-xs rounded-md transition-colors ${
            locale === loc
              ? "bg-white text-dark"
              : "text-white/60 hover:text-white hover:bg-white/10"
          }`}
        >
          {loc === "pt-BR" ? "PT" : "EN"}
        </button>
      ))}
    </div>
  );
}
