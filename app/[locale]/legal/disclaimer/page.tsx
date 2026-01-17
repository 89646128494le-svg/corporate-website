import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getTranslations, type Locale } from "@/lib/i18n";

export default function DisclaimerPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslations(locale);
  const content = t.legal.disclaimer;
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
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  {content.important.title}
                </h2>
                <p className="text-red-800 font-semibold leading-relaxed">
                  {content.important.text}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.whatIs.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  {content.whatIs.text}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.whatIsNot.title}
                </h2>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>{content.whatIsNot.notBank}</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>{content.whatIsNot.notPaymentSystem}</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>{content.whatIsNot.notFinancialInstitution}</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>{content.whatIsNot.notPaymentInterface}</strong></span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.noGuarantees.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {content.noGuarantees.text}
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• {content.noGuarantees.item1}</li>
                  <li>• {content.noGuarantees.item2}</li>
                  <li>• {content.noGuarantees.item3}</li>
                  <li>• {content.noGuarantees.item4}</li>
                  <li>• {content.noGuarantees.item5}</li>
                  <li>• {content.noGuarantees.item6}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.pointsDisclaimer.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  {content.pointsDisclaimer.text1}{" "}
                  <Link href={`/${locale}/points`} className="text-accent-darkBlue hover:underline">
                    {content.pointsDisclaimer.pointsPage}
                  </Link>{" "}
                  {content.pointsDisclaimer.text2}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.useAtOwnRisk.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  {content.useAtOwnRisk.text}
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
