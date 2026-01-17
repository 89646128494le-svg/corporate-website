"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getTranslations, type Locale } from "@/lib/i18n";

export default function Footer({ locale = "en" }: { locale?: Locale }) {
  const currentYear = new Date().getFullYear();
  const t = getTranslations(locale);

  const footerLinks = [
    { label: t.common.nav.howItWorks, href: `/${locale}/how-it-works` },
    { label: t.common.nav.points, href: `/${locale}/points` },
    { label: t.common.nav.forUsers, href: `/${locale}/for-users` },
    { label: t.common.nav.forAdvertisers, href: `/${locale}/for-advertisers` },
    { label: t.common.nav.forPartners, href: `/${locale}/for-partners` },
    { label: t.common.nav.contacts, href: `/${locale}/contacts` },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-neutral-200 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent-cyan rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Логотип и описание */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl md:text-3xl font-bold">
                  <span className="bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">
                    Nomad
                  </span>
                  <span className="text-white ml-1">Pays</span>
                </span>
              </div>
              <p className="text-neutral-400 mb-4 max-w-md leading-relaxed">
                {t.common.footer.companyInfo}
              </p>
            </motion.div>
          </div>

          {/* Навигация */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white font-semibold mb-4"
            >
              Навигация
            </motion.h3>
              <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Правовая информация */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white font-semibold mb-4"
            >
              Правовая информация
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <li>
                <Link
                  href={`/${locale}/legal/privacy-policy`}
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/legal/terms-of-service`}
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/legal/disclaimer`}
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  Disclaimer
                </Link>
              </li>
            </motion.ul>
          </div>
        </div>

        {/* Юридический дисклеймер */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-neutral-700 pt-8 mt-8"
        >
          <div className="bg-neutral-800/50 rounded-xl p-6 md:p-8 border border-neutral-700/50">
            <h4 className="text-white font-semibold mb-3 text-lg">{t.common.footer.importantInfo}</h4>
            <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
              <strong className="text-white">Nomad Pays</strong> {t.common.footer.companyInfo}
              <br /><br />
              <strong className="text-white">{t.common.footer.disclaimer.split('.')[0]}.</strong> {t.common.footer.disclaimer.split('.').slice(1).join('.').trim()}
            </p>
          </div>
        </motion.div>

        {/* Копирайт */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-neutral-700 text-center"
        >
          <p className="text-neutral-500 text-sm">
            © {currentYear} Nomad Platforms UK LTD. {t.common.footer.allRightsReserved}
          </p>
          <p className="text-neutral-500 text-sm mt-2">
            {t.common.footer.companyAddress}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}