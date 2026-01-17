import enMessages from "@/messages/en.json";
import ruMessages from "@/messages/ru.json";

export type Locale = "en" | "ru";

export const locales: Locale[] = ["en", "ru"];
export const defaultLocale: Locale = "en";

export const messages = {
  en: enMessages,
  ru: ruMessages,
};

export function getTranslations(locale: Locale) {
  return messages[locale] || messages[defaultLocale];
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
