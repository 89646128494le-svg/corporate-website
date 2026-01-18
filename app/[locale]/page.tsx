import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getTranslations, type Locale } from "@/lib/i18n";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhySection from "@/components/WhySection";

export default function Home({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslations(locale);
  const prefix = (key: string) => `home.${key}`;

  return (
    <>
      <Header locale={locale} />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 pt-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {t.home.hero.title}
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {t.home.hero.subtitle}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                {t.home.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href={`/${locale}/for-users`}
                  className="px-8 py-4 bg-white text-neutral-900 font-semibold text-lg rounded-xl hover:bg-neutral-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t.home.hero.forUsers}
                </Link>
                <Link
                  href={`/${locale}/for-advertisers`}
                  className="px-8 py-4 bg-accent-darkBlue text-white font-semibold text-lg rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t.home.hero.forAdvertisers}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How Nomad Pays Works */}
        <HowItWorksSection locale={locale} />

        {/* What are Points */}
        <section className="py-20 md:py-32 bg-neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              {t.home.points.title}
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-200">
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-6">
                <p className="text-red-900 font-semibold text-lg">
                  {t.home.points.warning}
                </p>
              </div>

              <ul className="space-y-3 text-neutral-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>{t.home.points.not1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>{t.home.points.not2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>{t.home.points.not3}</span>
                </li>
              </ul>

              <div className="text-center">
                <Link
                  href={`/${locale}/points`}
                  className="text-accent-darkBlue hover:text-primary-700 font-semibold text-lg"
                >
                  {t.home.points.readMore} →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* For Users, Advertisers, Partners */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl hover:border-accent-darkBlue/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {t.home.sections.forUsersTitle}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {t.home.sections.forUsersDesc}
                </p>
                <Link
                  href={`/${locale}/for-users`}
                  className="text-accent-darkBlue hover:text-primary-700 font-semibold inline-flex items-center gap-2"
                >
                  {t.home.sections.learnMore} →
                </Link>
              </div>

              <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl hover:border-accent-darkBlue/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {t.home.sections.forAdvertisersTitle}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {t.home.sections.forAdvertisersDesc}
                </p>
                <Link
                  href={`/${locale}/for-advertisers`}
                  className="text-accent-darkBlue hover:text-primary-700 font-semibold inline-flex items-center gap-2"
                >
                  {t.home.sections.learnMore} →
                </Link>
              </div>

              <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-xl hover:border-accent-darkBlue/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {t.home.sections.forPartnersTitle}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {t.home.sections.forPartnersDesc}
                </p>
                <Link
                  href={`/${locale}/for-partners`}
                  className="text-accent-darkBlue hover:text-primary-700 font-semibold inline-flex items-center gap-2"
                >
                  {t.home.sections.learnMore} →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Nomad Pays */}
        <WhySection locale={locale} />

        {/* Legal Disclaimer */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-neutral-50 border-l-4 border-neutral-900 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {t.home.legal.title}
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                {t.home.legal.text}
              </p>
              <Link
                href={`/${locale}/legal/disclaimer`}
                className="text-accent-darkBlue hover:text-primary-700 font-semibold"
              >
                {t.home.legal.readMore} →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
