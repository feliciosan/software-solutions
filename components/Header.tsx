import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

export function Header() {
  const t = useTranslations("header");
  const locale = useLocale();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href={`/${locale}`}
            className="flex flex-col items-start justify-center gap-1 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.svg"
              alt="CodaCrew Logo"
              width={140}
              height={36}
              className="h-5 sm:h-7 w-auto"
            />
            <span className="text-xs text-slate-600 font-medium pl-1">
              {t("tagline")}
            </span>
          </Link>

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
