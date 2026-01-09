import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";

export default createMiddleware({
  locales,
  defaultLocale: "pt-BR",
  localePrefix: "as-needed",
});

export const config = {
  matcher: ["/", "/(pt-BR|en-US)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
