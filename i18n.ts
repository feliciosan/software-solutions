import { getRequestConfig } from "next-intl/server";

export const locales = ["pt-BR", "en-US"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Se não houver locale ou não for pt-BR/en-US, usa en-US como fallback
  if (!locale || !locales.includes(locale as Locale)) {
    locale = "en-US";
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
