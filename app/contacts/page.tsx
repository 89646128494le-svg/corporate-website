import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactsPage() {
  const contacts = [
    { label: "Advertising inquiries", email: "ads@nomadpays.com" },
    { label: "Partnership inquiries", email: "partners@nomadpays.com" },
    { label: "General information", email: "info@nomadpays.com" },
    { label: "Press and media", email: "pr@nomadpays.com" },
    { label: "Cooperation", email: "cooperation@nomadpays.com" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Contacts
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Company information</h2>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <p className="text-neutral-900 font-semibold mb-2">Nomad Platforms UK LTD</p>
                  <p className="text-neutral-700">5 Brayford Square</p>
                  <p className="text-neutral-700">London, E1 0SG</p>
                  <p className="text-neutral-700">United Kingdom</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact emails</h2>
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
                  Please note: We do not provide phone support. All inquiries should be sent via email 
                  to the appropriate address listed above.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
