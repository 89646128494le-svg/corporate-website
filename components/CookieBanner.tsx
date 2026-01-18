"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getTranslations, type Locale } from "@/lib/i18n";

const COOKIE_CONSENT_KEY = "nomad-pays-cookie-consent";
const COOKIE_EXPIRY_DAYS = 365; // Кука хранится 1 год

interface CookieBannerProps {
  locale: Locale;
}

// Функции для работы с cookies
function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  
  return null;
}

export default function CookieBanner({ locale }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, дал ли пользователь согласие (проверяем и cookie, и localStorage для совместимости)
    const cookieConsent = getCookie(COOKIE_CONSENT_KEY);
    const localConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    
    // Если согласие есть в localStorage, но нет в cookie - синхронизируем
    if (localConsent && !cookieConsent) {
      setCookie(COOKIE_CONSENT_KEY, localConsent, COOKIE_EXPIRY_DAYS);
    }
    
    if (!cookieConsent && !localConsent) {
      // Небольшая задержка для плавного появления
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    const consentValue = "accepted";
    
    // Сохраняем и в cookie, и в localStorage для совместимости
    setCookie(COOKIE_CONSENT_KEY, consentValue, COOKIE_EXPIRY_DAYS);
    localStorage.setItem(COOKIE_CONSENT_KEY, consentValue);
    
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  const t = getTranslations(locale);
  const cookieBanner = t.common?.cookieBanner;

  if (!cookieBanner) {
    return null;
  }

  return (
    <div
      className="fixed bottom-4 right-4 z-50 max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500"
      role="dialog"
      aria-label={cookieBanner.title}
    >
      <div className="rounded-lg border border-neutral-800/50 bg-neutral-900/90 p-4 shadow-2xl backdrop-blur-md md:p-6">
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-white md:text-base">
            {cookieBanner.title}
          </h3>
          <p className="text-xs leading-relaxed text-neutral-300 md:text-sm">
            {cookieBanner.description}{" "}
            <Link
              href={`/${locale}/legal/cookie-policy`}
              className="text-primary-400 underline transition-colors hover:text-primary-300"
            >
              {cookieBanner.learnMore}
            </Link>
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
            <Link
              href={`/${locale}/legal/cookie-policy`}
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-xs font-medium text-neutral-300 transition-colors hover:text-white md:text-sm"
            >
              {cookieBanner.learnMore}
            </Link>
            <button
              onClick={handleAccept}
              className="inline-flex items-center justify-center rounded-md bg-primary-500 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-900 md:text-sm"
            >
              {cookieBanner.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
