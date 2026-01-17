import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function LegalCenterPage() {
  const legalDocuments = [
    { href: "/legal/privacy-policy", title: "Privacy Policy" },
    { href: "/legal/terms-of-service", title: "Terms of Service" },
    { href: "/legal/cookie-policy", title: "Cookie Policy" },
    { href: "/legal/disclaimer", title: "Disclaimer" },
    { href: "/legal/aml-compliance", title: "AML / Compliance Statement" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Legal Center
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-neutral-700 leading-relaxed">
                This section contains all legal documents and policies governing the use of 
                the Nomad Pays platform.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {legalDocuments.map((doc) => (
                  <Link
                    key={doc.href}
                    href={doc.href}
                    className="block border border-neutral-200 rounded-lg p-6 hover:border-primary-400 hover:shadow-lg transition-all"
                  >
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{doc.title}</h3>
                    <p className="text-accent-darkBlue text-sm">View document →</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
