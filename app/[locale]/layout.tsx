import type { Metadata } from "next";
import "../globals.css";
import AnalyticsConfig from "@/components/AnalyticsConfig";
import LangSetter from "@/components/LangSetter";
import CookieBanner from "@/components/CookieBanner";
import { locales, defaultLocale, isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Nomad Pays — Мобильное приложение и цифровая платформа",
  description: "Nomad Pays — это мобильное приложение и цифровая платформа-агрегатор для взаимодействия между рекламодателями, пользователями и партнёрами через систему немонетарных бонусных единиц (Points). Платформа не является банком или финансовым учреждением.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <>
      <LangSetter locale={locale as Locale} />
      {children}
      <CookieBanner locale={locale as Locale} />
      <AnalyticsConfig />
    </>
  );
}
