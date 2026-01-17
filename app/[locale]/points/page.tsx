import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getTranslations, type Locale } from "@/lib/i18n";

export default function PointsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslations(locale).points;

  return (
    <>
      <Header locale={locale} />
      <main className="min-h-screen pt-20">
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {t.title}
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  {t.critical.title}
                </h2>
                <p className="text-red-800 font-semibold mb-4">
                  {t.critical.text}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {t.whatNot.title}
                </h2>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>{t.whatNot.not1}</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>{t.whatNot.not2}</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>{t.whatNot.not3}</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>{t.whatNot.not4}</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>{t.whatNot.not5}</strong></span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {t.whatAre.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {t.whatAre.text1}
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  {t.whatAre.text2}
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <h2 className="text-xl font-bold text-yellow-900 mb-3">
                  {t.finality.title}
                </h2>
                <p className="text-yellow-800 font-semibold">
                  {t.finality.text}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {t.noGuarantees.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  Nomad Pays does not guarantee:
                </p>
                <ul className="space-y-2 text-neutral-700 mt-3">
                  <li>• {t.noGuarantees.items.item1}</li>
                  <li>• {t.noGuarantees.items.item2}</li>
                  <li>• {t.noGuarantees.items.item3}</li>
                  <li>• {t.noGuarantees.items.item4}</li>
                  <li>• {t.noGuarantees.items.item5}</li>
                </ul>
              </div>

              <div className="bg-neutral-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
                <h2 className="text-xl font-bold text-neutral-900 mb-3">
                  {t.legal.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  {t.legal.text}
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
