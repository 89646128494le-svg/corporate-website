# Nomad Pays Official Website

Official corporate website for Nomad Pays — a mobile application and digital platform-aggregator connecting advertisers, users, and partners through a system of non-monetary bonus units (Points).

**Company:** Nomad Platforms UK LTD  
**Address:** 5 Brayford Square, London, E1 0SG, United Kingdom

## Технологии

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

## Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка для production
npm run build

# Запуск production-сборки
npm start
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере. Сайт автоматически перенаправит на `/en` или `/ru` в зависимости от языка браузера.

## Настройка аналитики

Для подключения аналитики настройте переменные окружения в `.env.local`:

```env
NEXT_PUBLIC_YANDEX_METRICA_ID=ваш_id_счетчика
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

Аналитика автоматически загружается через `AnalyticsConfig.tsx` в `app/layout.tsx`. 
В режиме разработки (`npm run dev`) аналитика отключена.

## Многоязычность

Сайт поддерживает два языка:
- **Английский** (EN) — `/en/*`
- **Русский** (RU) — `/ru/*`

Переключение языка доступно через компонент `LanguageSwitcher` в Header. Все тексты автоматически переводятся в зависимости от выбранной локали.

## Структура проекта

```
├── app/
│   ├── [locale]/                    # Локализованные страницы
│   │   ├── layout.tsx               # Layout для локализованных страниц
│   │   ├── page.tsx                 # Главная страница
│   │   ├── how-it-works/page.tsx    # How it works
│   │   ├── points/page.tsx          # Points (критически важно)
│   │   ├── for-users/page.tsx       # For Users
│   │   ├── for-advertisers/page.tsx # For Advertisers
│   │   ├── for-partners/page.tsx    # For Partners
│   │   ├── contacts/page.tsx        # Contacts
│   │   └── legal/                   # Legal Center
│   │       ├── page.tsx             # Legal Center
│   │       ├── privacy-policy/page.tsx
│   │       ├── terms-of-service/page.tsx
│   │       ├── cookie-policy/page.tsx
│   │       ├── disclaimer/page.tsx
│   │       └── aml-compliance/page.tsx
│   ├── layout.tsx                   # Корневой layout
│   ├── page.tsx                     # Редирект на локализованную страницу
│   └── globals.css                  # Глобальные стили
├── components/
│   ├── Header.tsx          # Header с навигацией и переключателем языка
│   ├── Footer.tsx          # Футер с юридическим дисклеймером
│   ├── LanguageSwitcher.tsx # Переключатель языка
│   ├── LangSetter.tsx      # Установщик lang атрибута
│   ├── MessengerWidget.tsx # Плавающий виджет мессенджеров
│   └── AnalyticsConfig.tsx # Конфигурация аналитики
├── messages/
│   ├── en.json             # Английские переводы
│   └── ru.json             # Русские переводы
├── lib/
│   └── i18n.ts             # Утилиты для интернационализации
├── middleware.ts            # Middleware для определения локали
└── tailwind.config.ts       # Конфигурация Tailwind
```

## Дизайн

- **Style**: Corporate fintech / Stripe-like minimalism
- **Colors**: Neutral colors with minimal accents
- **No gaming elements**: Professional, corporate design
- **No financial appearance**: Does not look like a bank or payment system

## Структура сайта

### Обязательные страницы:

1. **Home** — главная страница с Hero, How it works, Points disclaimer
2. **How it works** — подробное описание процесса работы
3. **Points** — критически важная страница с дисклеймерами
4. **For Users** — информация для пользователей
5. **For Advertisers** — информация для рекламодателей
6. **For Partners** — информация для партнеров
7. **Legal Center** — все юридические документы:
   - Privacy Policy
   - Terms of Service
   - Cookie Policy
   - Disclaimer
   - AML / Compliance Statement
8. **Contacts** — контактная информация

## Юридические требования

Сайт соответствует:
- UK GDPR
- Data Protection Act 2018
- CCPA (California)
- Apple App Store requirements
- Google Play requirements

## Важно

- ❌ **НЕТ** калькуляторов дохода
- ❌ **НЕТ** обещаний прибыли
- ❌ **НЕТ** форм ввода платёжных данных
- ❌ **НЕТ** личных кабинетов
- ✅ Points — немонетарные единицы
- ✅ Платформа НЕ является банком