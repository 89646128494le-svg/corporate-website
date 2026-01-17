import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getTranslations, type Locale } from "@/lib/i18n";

export default function ForUsersPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslations(locale);
  const content = t.forUsers;

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
                  {content.howToParticipate.title}
                </h2>
                <ol className="space-y-3 text-neutral-700 list-decimal list-inside">
                  <li>{content.howToParticipate.step1}</li>
                  <li>{content.howToParticipate.step2}</li>
                  <li>{content.howToParticipate.step3}</li>
                  <li>{content.howToParticipate.step4}</li>
                  <li>{content.howToParticipate.step5}</li>
                  <li>{content.howToParticipate.step6}</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.whatYouCanDo.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {content.whatYouCanDo.text1}{" "}
                  {content.whatYouCanDo.text2}
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  {content.whatYouCanDo.text3}{" "}
                  {content.whatYouCanDo.text4}
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <h2 className="text-xl font-bold text-yellow-900 mb-3">
                  {content.userRisks.title}
                </h2>
                <ul className="space-y-2 text-yellow-800">
                  <li>• {content.userRisks.item1}</li>
                  <li>• {content.userRisks.item2}</li>
                  <li>• {content.userRisks.item3}</li>
                  <li>• {content.userRisks.item4}</li>
                  <li>• {content.userRisks.item5}</li>
                  <li>• {content.userRisks.item6}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.responsibility.title}
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-3">
                  {content.responsibility.text}
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• {content.responsibility.item1}</li>
                  <li>• {content.responsibility.item2}</li>
                  <li>• {content.responsibility.item3}</li>
                  <li>• {content.responsibility.item4}</li>
                  <li>• {content.responsibility.item5}</li>
                </ul>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {content.importantNotice.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {content.importantNotice.text}{" "}
                  <Link href={`/${locale}/legal/terms-of-service`} className="text-accent-darkBlue hover:underline">
                    {content.importantNotice.termsLink}
                  </Link>{" "}
                  {content.importantNotice.and}{" "}
                  <Link href={`/${locale}/points`} className="text-accent-darkBlue hover:underline">
                    {content.importantNotice.pointsLink}
                  </Link>
                  .
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
