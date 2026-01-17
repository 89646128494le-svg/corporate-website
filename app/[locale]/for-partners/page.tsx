import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getTranslations, type Locale } from "@/lib/i18n";

export default function ForPartnersPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslations(locale);
  const content = t.forPartners;

  return (
    <>
      <Header locale={locale} />
      <main className="min-h-screen pt-20">
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {content.title}
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.voluntaryAcceptance.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {content.voluntaryAcceptance.text1}{" "}
                  {content.voluntaryAcceptance.text2}
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  {content.voluntaryAcceptance.text3}
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <h2 className="text-xl font-bold text-yellow-900 mb-3">
                  {content.noControl.title}
                </h2>
                <p className="text-yellow-800 leading-relaxed">
                  {content.noControl.text}
                </p>
                <ul className="space-y-2 text-yellow-800 mt-3">
                  <li>• {content.noControl.item1}</li>
                  <li>• {content.noControl.item2}</li>
                  <li>• {content.noControl.item3}</li>
                  <li>• {content.noControl.item4}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.noResponsibility.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {content.noResponsibility.text}
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• {content.noResponsibility.item1}</li>
                  <li>• {content.noResponsibility.item2}</li>
                  <li>• {content.noResponsibility.item3}</li>
                  <li>• {content.noResponsibility.item4}</li>
                  <li>• {content.noResponsibility.item5}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.legalRelationship.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {content.legalRelationship.text1}
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  {content.legalRelationship.text2}
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {content.becomePartner.title}
                </h3>
                <p className="text-neutral-700 mb-2">
                  {content.becomePartner.text}
                </p>
                <p className="text-accent-darkBlue font-semibold">{content.becomePartner.email}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
