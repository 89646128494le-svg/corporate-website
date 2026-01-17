"use client";

import Script from "next/script";

/**
 * Конфигурация аналитики для Nomad Pays
 * 
 * Инструкция по использованию:
 * 1. Для Яндекс.Метрики: замените YANDEX_METRICA_ID на ваш ID счетчика
 * 2. Для Google Analytics: замените GOOGLE_ANALYTICS_ID на ваш Measurement ID (например: G-XXXXXXXXXX)
 * 3. Добавьте этот компонент в app/layout.tsx внутри <body>
 * 
 * Пример использования в app/layout.tsx:
 * 
 * import AnalyticsConfig from "@/components/AnalyticsConfig";
 * 
 * export default function RootLayout({ children }: { children: React.ReactNode }) {
 *   return (
 *     <html lang="ru">
 *       <body>
 *         {children}
 *         <AnalyticsConfig />
 *       </body>
 *     </html>
 *   );
 * }
 */

interface AnalyticsConfigProps {
  /**
   * ID счетчика Яндекс.Метрики (например: 12345678)
   * Если не указан, Яндекс.Метрика не будет загружена
   */
  yandexMetricaId?: string;

  /**
   * Measurement ID для Google Analytics 4 (например: G-XXXXXXXXXX)
   * Если не указан, Google Analytics не будет загружен
   */
  googleAnalyticsId?: string;

  /**
   * Включить режим разработки (не отправляет события в аналитику)
   * По умолчанию: false (в production используйте process.env.NODE_ENV === 'production')
   */
  devMode?: boolean;
}

export default function AnalyticsConfig({
  yandexMetricaId = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID,
  googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  devMode = process.env.NODE_ENV !== "production",
}: AnalyticsConfigProps) {
  // В режиме разработки не загружаем аналитику
  if (devMode) {
    return null;
  }

  return (
    <>
      {/* Яндекс.Метрика */}
      {yandexMetricaId && (
        <>
          <Script
            id="yandex-metrica"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(${yandexMetricaId}, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
                });
              `,
            }}
          />
          <noscript>
            <div>
              <img
                src={`https://mc.yandex.ru/watch/${yandexMetricaId}`}
                style={{ position: "absolute", left: "-9999px" }}
                alt=""
              />
            </div>
          </noscript>
        </>
      )}

      {/* Google Analytics 4 */}
      {googleAnalyticsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
    </>
  );
}

/**
 * Хелпер для отправки событий в Google Analytics
 * 
 * Пример использования:
 * import { trackEvent } from '@/components/AnalyticsConfig';
 * 
 * trackEvent('button_click', {
 *   button_name: 'Подключиться',
 *   location: 'header'
 * });
 */
export function trackEvent(action: string, params?: Record<string, any>) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, params);
  }
}

/**
 * Хелпер для отправки целей в Яндекс.Метрику
 * 
 * Пример использования:
 * import { reachGoal } from '@/components/AnalyticsConfig';
 * 
 * reachGoal('form_submit', {
 *   form_name: 'connection_form'
 * });
 */
export function reachGoal(target: string, params?: Record<string, any>) {
  const yandexMetricaId = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID;
  if (typeof window !== "undefined" && (window as any).ym && yandexMetricaId) {
    (window as any).ym(parseInt(yandexMetricaId), "reachGoal", target, params);
  }
}