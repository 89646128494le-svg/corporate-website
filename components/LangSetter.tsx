"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { type Locale, isValidLocale } from "@/lib/i18n";

export default function LangSetter({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  
  useEffect(() => {
    // Update html lang attribute
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale, pathname]);

  return null;
}
