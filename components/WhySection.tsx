"use client";

import { motion } from "framer-motion";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import {
  AnimatedMagnifyingGlass,
  AnimatedChart,
  AnimatedGlobe,
} from "@/components/AnimatedIcons";

interface WhySectionProps {
  locale: Locale;
}

export default function WhySection({ locale }: WhySectionProps) {
  const t = getTranslations(locale);

  return (
    <section className="py-20 md:py-32 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
          {t.home.why.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <AnimatedMagnifyingGlass />
            <h3 className="text-xl font-bold text-neutral-900 mb-3">
              {t.home.why.transparency}
            </h3>
            <p className="text-neutral-600">
              {t.home.why.transparencyDesc}
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatedGlobe />
            <h3 className="text-xl font-bold text-neutral-900 mb-3">
              {t.home.why.international}
            </h3>
            <p className="text-neutral-600">
              {t.home.why.internationalDesc}
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatedChart />
            <h3 className="text-xl font-bold text-neutral-900 mb-3">
              {t.home.why.scalability}
            </h3>
            <p className="text-neutral-600">
              {t.home.why.scalabilityDesc}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
