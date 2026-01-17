"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  // Extract current locale from pathname
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLocale = pathSegments[0] && locales.includes(pathSegments[0] as Locale)
    ? (pathSegments[0] as Locale)
    : "en";

  // Remove locale from pathname
  let pathWithoutLocale = "/";
  if (pathSegments.length > 1 && locales.includes(pathSegments[0] as Locale)) {
    pathWithoutLocale = "/" + pathSegments.slice(1).join("/");
  } else if (pathSegments.length > 0 && !locales.includes(pathSegments[0] as Locale)) {
    pathWithoutLocale = pathname;
  }

  const switchLanguage = (newLocale: Locale) => {
    if (pathWithoutLocale === "/") {
      router.push(`/${newLocale}`);
    } else {
      router.push(`/${newLocale}${pathWithoutLocale}`);
    }
    router.refresh();
  };

  return (
    <div className="flex items-center gap-2">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLanguage(locale)}
          className={`px-3 py-1 text-sm font-medium rounded-lg transition-all ${
            currentLocale === locale
              ? "bg-accent-darkBlue text-white shadow-md"
              : "text-neutral-700 hover:bg-neutral-100"
          }`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
