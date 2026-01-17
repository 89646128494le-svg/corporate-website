"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { getTranslations, type Locale } from "@/lib/i18n";

export default function Header({ locale = "en" }: { locale?: Locale }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = getTranslations(locale);

  const menuItems = [
    { label: t.common.nav.howItWorks, href: `/${locale}/how-it-works` },
    { label: t.common.nav.points, href: `/${locale}/points` },
    { label: t.common.nav.forUsers, href: `/${locale}/for-users` },
    { label: t.common.nav.forAdvertisers, href: `/${locale}/for-advertisers` },
    { label: t.common.nav.forPartners, href: `/${locale}/for-partners` },
    { label: t.common.nav.legal, href: `/${locale}/legal` },
    { label: t.common.nav.contacts, href: `/${locale}/contacts` },
  ];

  const handleNavigation = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Otherwise, Next.js Link will handle navigation
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <Link href={`/${locale}`} className="text-2xl md:text-3xl font-bold">
              <span className="bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                Nomad
              </span>
              <span className="text-neutral-900 ml-1">Pays</span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-neutral-700 hover:text-accent-darkBlue font-medium transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Language Switcher & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
            <Link
              href={`/${locale}/for-advertisers`}
              className="px-6 py-2.5 bg-accent-darkBlue text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {t.common.nav.getStarted}
            </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-accent-darkBlue"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            <div className="pb-4 border-b border-neutral-200">
              <LanguageSwitcher />
            </div>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-neutral-700 hover:text-accent-darkBlue font-medium py-2 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}