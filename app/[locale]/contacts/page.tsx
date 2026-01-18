import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getTranslations, type Locale } from "@/lib/i18n";

export default function ContactsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getTranslations(locale);
  const content = t.contacts;
  const common = t.common;

  const contacts = [
    { label: content.contactEmails.advertising, email: "ads@nomadplatforms.co.uk" },
    { label: content.contactEmails.partnership, email: "partners@nomadpays.com" },
    { label: content.contactEmails.general, email: "info@nomadpays.com" },
    { label: content.contactEmails.press, email: "pr@nomadpays.com" },
    { label: content.contactEmails.cooperation, email: "cooperation@nomadpays.com" },
  ];

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
                  {content.companyInfo.title}
                </h2>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <p className="text-neutral-900 font-semibold mb-2">
                    {content.companyInfo.name}
                  </p>
                  <p className="text-neutral-700">{common.footer.companyAddress}</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {content.contactEmails.title}
                </h2>
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <div key={contact.email} className="border border-neutral-200 rounded-lg p-5 hover:border-primary-300 transition-colors">
                      <p className="text-neutral-900 font-semibold mb-1">{contact.label}</p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-accent-darkBlue hover:text-primary-700 hover:underline"
                      >
                        {contact.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg">
                <p className="text-neutral-700 text-sm">
                  {content.note}
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
