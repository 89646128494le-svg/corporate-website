"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";

interface HowItWorksSectionProps {
  locale: Locale;
}

export default function HowItWorksSection({ locale }: HowItWorksSectionProps) {
  const t = getTranslations(locale);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
          {t.home.howItWorks.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", key: "step1", keyDesc: "step1Desc", delay: 0 },
            { step: "02", key: "step2", keyDesc: "step2Desc", delay: 0.2 },
            { step: "03", key: "step3", keyDesc: "step3Desc", delay: 0.4 },
            { step: "04", key: "step4", keyDesc: "step4Desc", delay: 0.6 },
          ].map((item) => (
            <motion.div
              key={item.step}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              {/* Цифра */}
              <motion.div
                className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-darkBlue text-white text-lg font-bold mb-4 shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: item.delay,
                }}
              >
                {item.step}
              </motion.div>
              
              {/* Анимированная линия между цифрой и заголовком */}
              <motion.div
                className="h-0.5 w-12 bg-gradient-to-r from-accent-darkBlue to-transparent mx-auto mb-4"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 48, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: item.delay + 0.3,
                  ease: "easeOut",
                }}
              />
              
              {/* Заголовок */}
              <motion.h3
                className="text-xl font-bold text-neutral-900 mb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: item.delay + 0.4,
                }}
              >
                {t.home.howItWorks[item.key as keyof typeof t.home.howItWorks]}
              </motion.h3>
              
              {/* Описание */}
              <motion.p
                className="text-neutral-600 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: item.delay + 0.6,
                }}
              >
                {t.home.howItWorks[item.keyDesc as keyof typeof t.home.howItWorks]}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/how-it-works`}
            className="text-accent-darkBlue hover:text-primary-700 font-semibold text-lg"
          >
            {t.home.howItWorks.learnMore} →
          </Link>
        </div>
      </div>
    </section>
  );
}
