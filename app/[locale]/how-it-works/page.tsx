import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getTranslations, type Locale } from "@/lib/i18n";

export default function HowItWorksPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslations(locale).howItWorks;

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
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {t.whoDoesWhat.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  {t.whoDoesWhat.text}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {t.responsibilities.title}
                </h2>
                <ul className="space-y-4 text-neutral-700">
                  <li>
                    <strong className="text-neutral-900">Advertisers:</strong> {t.responsibilities.advertisers}
                  </li>
                  <li>
                    <strong className="text-neutral-900">Users:</strong> {t.responsibilities.users}
                  </li>
                  <li>
                    <strong className="text-neutral-900">Partners:</strong> {t.responsibilities.partners}
                  </li>
                  <li>
                    <strong className="text-neutral-900">Nomad Pays:</strong> {t.responsibilities.nomadPays}
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {t.important.title}
                </h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>✓ {t.important.item1}</li>
                  <li>✓ {t.important.item2}</li>
                  <li>✓ {t.important.item3}</li>
                  <li>✓ {t.important.item4}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {t.notInvolved.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  {t.notInvolved.text}
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
