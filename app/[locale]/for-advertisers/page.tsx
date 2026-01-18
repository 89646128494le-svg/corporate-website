import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getTranslations, type Locale } from "@/lib/i18n";
import AdvertiserForm from "@/components/AdvertiserForm";

export default function ForAdvertisersPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslations(locale);
  const content = t.forAdvertisers;

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
                  {content.howToPost.title}
                </h2>
                <ol className="space-y-3 text-neutral-700 list-decimal list-inside">
                  <li>{content.howToPost.step1}</li>
                  <li>{content.howToPost.step2}</li>
                  <li>{content.howToPost.step3}</li>
                  <li>{content.howToPost.step4}</li>
                  <li>{content.howToPost.step5}</li>
                  <li>{content.howToPost.step6}</li>
                  <li>{content.howToPost.step7}</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.whatYouPayFor.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {content.whatYouPayFor.text}
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• {content.whatYouPayFor.item1}</li>
                  <li>• {content.whatYouPayFor.item2}</li>
                  <li>• {content.whatYouPayFor.item3}</li>
                  <li>• {content.whatYouPayFor.item4}</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <h2 className="text-xl font-bold text-yellow-900 mb-3">
                  {content.noGuarantees.title}
                </h2>
                <ul className="space-y-2 text-yellow-800">
                  <li>• {content.noGuarantees.item1}</li>
                  <li>• {content.noGuarantees.item2}</li>
                  <li>• {content.noGuarantees.item3}</li>
                  <li>• {content.noGuarantees.item4}</li>
                  <li>• {content.noGuarantees.item5}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.responsibilities.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {content.responsibilities.text}
                </p>
                
                <div className="space-y-4">
                  <div className="bg-neutral-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      {content.responsibilities.tasks.title}
                    </h3>
                    <p className="text-neutral-700">
                      {content.responsibilities.tasks.text}
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      {content.responsibilities.verification.title}
                    </h3>
                    <p className="text-neutral-700">
                      {content.responsibilities.verification.text}
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      {content.responsibilities.content.title}
                    </h3>
                    <p className="text-neutral-700">
                      {content.responsibilities.content.text}
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      {content.responsibilities.payouts.title}
                    </h3>
                    <p className="text-neutral-700">
                      {content.responsibilities.payouts.text}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {content.contact.title}
                </h3>
                <p className="text-neutral-700 mb-2">
                  {content.contact.text}
                </p>
                <p className="text-accent-darkBlue font-semibold">{content.contact.email}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-12">
              <AdvertiserForm locale={locale} />
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
