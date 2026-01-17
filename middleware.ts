import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, isValidLocale } from "./lib/i18n";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If pathname already has a locale, continue
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Get locale from Accept-Language header or use default
  const acceptLanguage = request.headers.get("accept-language");
  let locale = defaultLocale;

  if (acceptLanguage) {
    const browserLocales = acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0].trim().toLowerCase());
    
    // Check if browser prefers Russian
    const prefersRu = browserLocales.some(
      (lang) => lang.startsWith("ru") || lang === "ru"
    );

    if (prefersRu) {
      locale = "ru";
    }
  }

  // Redirect to localized pathname
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - api routes
    // - _next (Next.js internals)
    // - static files (e.g. favicon.ico)
    // - files with extension (e.g. .svg)
    "/((?!api|_next|.*\\..*).*)",
  ],
};
