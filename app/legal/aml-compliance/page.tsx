import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AMLCompliancePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="mb-8">
              <Link href="/legal" className="text-primary-600 hover:underline mb-4 inline-block">
                ← Back to Legal Center
              </Link>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              AML / Compliance Statement
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <h2 className="text-xl font-bold text-yellow-900 mb-3">No Financial Services License</h2>
                <p className="text-yellow-800 leading-relaxed">
                  Nomad Pays does not hold a financial services license. We are not a bank, 
                  payment institution, or regulated financial services provider.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Platform Nature</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Nomad Pays operates as a technology platform that facilitates interaction between 
                  advertisers, users, and partners through non-monetary bonus units (Points). 
                  We do not handle money, process payments, or provide financial services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Anti-Money Laundering</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  While Nomad Pays is not subject to AML regulations as a non-financial platform, 
                  we implement reasonable measures to ensure platform integrity:
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• User verification processes</li>
                  <li>• Monitoring for suspicious activity</li>
                  <li>• Compliance with applicable laws</li>
                  <li>• Cooperation with law enforcement when required</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Compliance with Regulations</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Nomad Pays complies with applicable regulations including:
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• UK GDPR and Data Protection Act 2018</li>
                  <li>• EU GDPR (where applicable)</li>
                  <li>• CCPA (where applicable)</li>
                  <li>• Platform policies (Apple App Store, Google Play)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">No Financial Services</h2>
                <p className="text-neutral-700 leading-relaxed">
                  We do not provide regulated financial services. Points are non-monetary units 
                  and do not constitute money, electronic money, or financial instruments.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact</h2>
                <p className="text-neutral-700 leading-relaxed">
                  For compliance-related inquiries, contact:{" "}
                  <a href="mailto:info@nomadpays.com" className="text-accent-darkBlue hover:underline">
                    info@nomadpays.com
                  </a>
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
