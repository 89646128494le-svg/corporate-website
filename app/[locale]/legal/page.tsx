import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getTranslations, type Locale } from "@/lib/i18n";

export default function LegalCenterPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslations(locale);
  const common = t.common;
  const legal = t.legal.legalCenter;

  const legalDocuments = [
    { href: `/${locale}/legal/privacy-policy`, title: legal.privacyPolicy },
    { href: `/${locale}/legal/terms-of-service`, title: legal.termsOfService },
    { href: `/${locale}/legal/cookie-policy`, title: legal.cookiePolicy },
    { href: `/${locale}/legal/disclaimer`, title: legal.disclaimer },
    { href: `/${locale}/legal/aml-compliance`, title: legal.amlCompliance },
  ];

  return (
    <>
      <Header locale={locale} />
      <main className="min-h-screen pt-20">
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {common.nav.legal}
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-neutral-700 leading-relaxed">
                {legal.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {legalDocuments.map((doc) => (
                  <Link
                    key={doc.href}
                    href={doc.href}
                    className="block border border-neutral-200 rounded-lg p-6 hover:border-primary-400 hover:shadow-lg transition-all"
                  >
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{doc.title}</h3>
                    <p className="text-accent-darkBlue text-sm">{legal.viewDocument}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
