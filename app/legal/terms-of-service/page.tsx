import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <p className="text-neutral-700 leading-relaxed">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Acceptance of Terms</h2>
                <p className="text-neutral-700 leading-relaxed">
                  By accessing and using the Nomad Pays platform, you accept and agree to be bound 
                  by these Terms of Service. If you do not agree, do not use the platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Platform Description</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Nomad Pays is a technology platform-aggregator that connects advertisers, users, 
                  and partners through a system of non-monetary bonus units (Points). Nomad Pays is 
                  not a bank, payment system, or financial institution.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Points</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Points are non-monetary bonus units. They are NOT money, electronic money, or cryptocurrency. 
                  Points have no guaranteed value and are non-refundable. All operations with Points are final.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Please review our{" "}
                  <Link href="/points" className="text-accent-darkBlue hover:underline">
                    Points page
                  </Link>{" "}
                  for detailed information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">User Responsibilities</h2>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Provide accurate information</li>
                  <li>• Comply with all applicable laws</li>
                  <li>• Accept Points at your own risk</li>
                  <li>• Understand that Points have no guaranteed value</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Advertiser Responsibilities</h2>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Create lawful and accurate tasks</li>
                  <li>• Independently verify task completion</li>
                  <li>• Bear full responsibility for task content</li>
                  <li>• Handle any payouts to users independently</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Limitation of Liability</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Nomad Pays provides the technology platform only. We are not responsible for task content, 
                  verification decisions, partner services, or disputes between users and advertisers or partners.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Dispute Resolution</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Disputes are resolved outside the platform. Nomad Pays does not mediate disputes.
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
