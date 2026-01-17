import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getTranslations, type Locale } from "@/lib/i18n";

export default function CookiePolicyPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslations(locale);
  const content = t.legal.cookiePolicy;
  const common = t.legal.common;

  return (
    <>
      <Header locale={locale} />
      <main className="min-h-screen pt-20">
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="mb-8">
              <Link href={`/${locale}/legal`} className="text-accent-darkBlue hover:underline mb-4 inline-block">
                {common.backToLegal}
              </Link>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {content.title}
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <p className="text-neutral-700 leading-relaxed">
                  <strong>{common.lastUpdated}</strong> {new Date().toLocaleDateString(locale === 'ru' ? 'ru-RU' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.whatAre.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  {content.whatAre.text}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.howWeUse.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {content.howWeUse.text}
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• {content.howWeUse.item1}</li>
                  <li>• {content.howWeUse.item2}</li>
                  <li>• {content.howWeUse.item3}</li>
                  <li>• {content.howWeUse.item4}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.cookieConsent.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  {content.cookieConsent.text}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.thirdParty.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  {content.thirdParty.text}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
