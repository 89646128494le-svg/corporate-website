import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getTranslations, type Locale } from "@/lib/i18n";

export default function PrivacyPolicyPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslations(locale);
  const content = t.legal.privacyPolicy;
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
                  {content.introduction.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  {content.introduction.text}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.dataProtection.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {content.dataProtection.text}
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• {content.dataProtection.item1}</li>
                  <li>• {content.dataProtection.item2}</li>
                  <li>• {content.dataProtection.item3}</li>
                  <li>• {content.dataProtection.item4}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.informationWeCollect.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {content.informationWeCollect.text}
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• {content.informationWeCollect.item1}</li>
                  <li>• {content.informationWeCollect.item2}</li>
                  <li>• {content.informationWeCollect.item3}</li>
                  <li>• {content.informationWeCollect.item4}</li>
                </ul>
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
                  <li>• {content.howWeUse.item5}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.dataSharing.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  {content.dataSharing.text}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.yourRights.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {content.yourRights.text}
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• {content.yourRights.item1}</li>
                  <li>• {content.yourRights.item2}</li>
                  <li>• {content.yourRights.item3}</li>
                  <li>• {content.yourRights.item4}</li>
                  <li>• {content.yourRights.item5}</li>
                  <li>• {content.yourRights.item6}</li>
                </ul>
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
