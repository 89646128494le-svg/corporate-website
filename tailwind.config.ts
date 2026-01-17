import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Цветовая палитра из Figma дизайна приложения
        primary: {
          50: "#E6F0FF",
          100: "#CCE1FF",
          200: "#99C3FF",
          300: "#66A5FF",
          400: "#3387FF",
          500: "#1e40af", // Основной темно-синий из приложения
          600: "#1e3a8a",
          700: "#1e3a8a",
          800: "#172554",
          900: "#0f172a",
        },
        accent: {
          // Акцентные цвета из приложения
          cyan: "#06b6d4",
          blue: "#3b82f6", // Синий для кнопок
          purple: "#8b5cf6",
          darkBlue: "#1e40af", // Темно-синий для карточек
        },
        gold: {
          // Золотой цвет для монет/Points
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        sans: ["Inter", "Montserrat", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;