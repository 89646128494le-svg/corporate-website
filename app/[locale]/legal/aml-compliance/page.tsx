import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getTranslations, type Locale } from "@/lib/i18n";

export default function AMLCompliancePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslations(locale);
  const content = t.legal.amlCompliance;
  const common = t.legal.common;

  return (
    <>
      <Header locale={locale} />
      <main className="min-h-screen pt-20">
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="mb-8">
              <Link href={`/${locale}/legal`} className="text-primary-600 hover:underline mb-4 inline-block">
                {common.backToLegal}
              </Link>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {content.title}
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <h2 className="text-xl font-bold text-yellow-900 mb-3">
                  {content.noLicense.title}
                </h2>
                <p className="text-yellow-800 leading-relaxed">
                  {content.noLicense.text}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.platformNature.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  {content.platformNature.text}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.antiMoneyLaundering.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {content.antiMoneyLaundering.text}
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• {content.antiMoneyLaundering.item1}</li>
                  <li>• {content.antiMoneyLaundering.item2}</li>
                  <li>• {content.antiMoneyLaundering.item3}</li>
                  <li>• {content.antiMoneyLaundering.item4}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.compliance.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {content.compliance.text}
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• {content.compliance.item1}</li>
                  <li>• {content.compliance.item2}</li>
                  <li>• {content.compliance.item3}</li>
                  <li>• {content.compliance.item4}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.noFinancialServices.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  {content.noFinancialServices.text}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.contact.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  {content.contact.text}{" "}
                  <a href={`mailto:${content.contact.email}`} className="text-accent-darkBlue hover:underline">
                    {content.contact.email}
                  </a>
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
