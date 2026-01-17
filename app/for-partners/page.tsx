import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ForPartnersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              For Partners
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Voluntary acceptance of Points</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Partners voluntarily choose to accept Points from users in exchange for their 
                  goods or services. Acceptance of Points is entirely at the partner's discretion.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Nomad Pays does not require, mandate, or control the acceptance of Points by partners.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <h2 className="text-xl font-bold text-yellow-900 mb-3">No control by Nomad Pays</h2>
                <p className="text-yellow-800 leading-relaxed">
                  Nomad Pays exercises no control over:
                </p>
                <ul className="space-y-2 text-yellow-800 mt-3">
                  <li>• Which partners accept Points</li>
                  <li>• What goods or services partners offer in exchange for Points</li>
                  <li>• The exchange rate between Points and goods/services</li>
                  <li>• Partner business practices or policies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">No responsibility for partner offerings</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Nomad Pays is not responsible for:
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• The quality of goods or services provided by partners</li>
                  <li>• Partner business practices, policies, or terms</li>
                  <li>• Disputes between users and partners</li>
                  <li>• Partner compliance with laws or regulations</li>
                  <li>• The value or acceptability of partner offerings</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Legal relationship</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Partners are not part of Nomad Pays legally. They are independent entities 
                  that voluntarily participate in the platform's ecosystem.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Any transaction between a user and a partner is a direct relationship between 
                  those parties. Nomad Pays is not a party to such transactions.
                </p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Become a partner</h3>
                <p className="text-neutral-700 mb-2">
                  Interested in accepting Points from users? Contact us at:
                </p>
                <p className="text-accent-darkBlue font-semibold">partners@nomadpays.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
