import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getTranslations, type Locale } from "@/lib/i18n";

export default function TermsOfServicePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslations(locale);
  const content = t.legal.termsOfService;
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
              <div>
                <p className="text-neutral-700 leading-relaxed">
                  <strong>{common.lastUpdated}</strong> {new Date().toLocaleDateString(locale === 'ru' ? 'ru-RU' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.acceptance.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  {content.acceptance.text}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.platformDescription.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  {content.platformDescription.text}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.points.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {content.points.text1}
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  {content.points.text2}{" "}
                  <Link href={`/${locale}/points`} className="text-accent-darkBlue hover:underline">
                    {content.points.pointsPage}
                  </Link>{" "}
                  {content.points.text3}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.userResponsibilities.title}
                </h2>
                <ul className="space-y-2 text-neutral-700">
                  <li>• {content.userResponsibilities.item1}</li>
                  <li>• {content.userResponsibilities.item2}</li>
                  <li>• {content.userResponsibilities.item3}</li>
                  <li>• {content.userResponsibilities.item4}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.advertiserResponsibilities.title}
                </h2>
                <ul className="space-y-2 text-neutral-700">
                  <li>• {content.advertiserResponsibilities.item1}</li>
                  <li>• {content.advertiserResponsibilities.item2}</li>
                  <li>• {content.advertiserResponsibilities.item3}</li>
                  <li>• {content.advertiserResponsibilities.item4}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.limitationOfLiability.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  {content.limitationOfLiability.text}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.disputeResolution.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  {content.disputeResolution.text}
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
