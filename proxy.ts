import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";
import type { NextRequest } from "next/server";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "en-US",
  localePrefix: "never",
  localeDetection: true,
});

export function proxy(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
