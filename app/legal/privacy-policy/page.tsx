import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <p className="text-neutral-700 leading-relaxed">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Introduction</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Nomad Platforms UK LTD ("we", "our", or "us") operates the Nomad Pays platform. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you use our platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Data Protection</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We comply with:
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• UK GDPR</li>
                  <li>• Data Protection Act 2018</li>
                  <li>• EU GDPR (where applicable)</li>
                  <li>• CCPA (California Consumer Privacy Act, where applicable)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Information We Collect</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Account information (email, phone number, name)</li>
                  <li>• Usage data and platform activity</li>
                  <li>• Device information</li>
                  <li>• Cookies and tracking technologies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">How We Use Your Information</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We use collected information to:
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Provide and maintain the platform</li>
                  <li>• Process transactions and award Points</li>
                  <li>• Communicate with you</li>
                  <li>• Improve our services</li>
                  <li>• Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Data Sharing</h2>
                <p className="text-neutral-700 leading-relaxed">
                  We do not sell your personal data. We may share information with service providers, 
                  legal authorities when required, or in connection with business transfers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Your Rights</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Under applicable data protection laws, you have the right to:
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Access your personal data</li>
                  <li>• Rectify inaccurate data</li>
                  <li>• Erase your data</li>
                  <li>• Restrict processing</li>
                  <li>• Data portability</li>
                  <li>• Object to processing</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact Us</h2>
                <p className="text-neutral-700 leading-relaxed">
                  For privacy-related inquiries, contact us at:{" "}
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
