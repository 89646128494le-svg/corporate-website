import { getTranslations, type Locale } from "@/lib/i18n";

export function useTranslations(locale: Locale) {
  const t = getTranslations(locale);
  
  function translate(key: string, defaultValue?: string): string {
    const keys = key.split(".");
    let value: any = t;
    
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return defaultValue || key;
      }
    }
    
    return typeof value === "string" ? value : (defaultValue || key);
  }
  
  return translate;
}
