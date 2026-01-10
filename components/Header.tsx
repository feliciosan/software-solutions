import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const t = useTranslations("header");
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-slate-900 leading-tight">
              CodaCrew
            </span>
            <span className="text-xs text-slate-600 font-medium">
              {t("tagline")}
            </span>
          </div>

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
