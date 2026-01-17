import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="mb-8">
              <Link href="/legal" className="text-accent-darkBlue hover:underline mb-4 inline-block">
                ← Back to Legal Center
              </Link>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Cookie Policy
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <p className="text-neutral-700 leading-relaxed">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">What Are Cookies</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Cookies are small text files stored on your device when you visit our website. 
                  They help us provide and improve our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">How We Use Cookies</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  We use cookies to:
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Maintain your session and preferences</li>
                  <li>• Analyze website usage and performance</li>
                  <li>• Provide security features</li>
                  <li>• Improve user experience</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Cookie Consent</h2>
                <p className="text-neutral-700 leading-relaxed">
                  In compliance with EU/UK regulations, we obtain your consent before placing 
                  non-essential cookies. You can manage cookie preferences in your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Third-Party Cookies</h2>
                <p className="text-neutral-700 leading-relaxed">
                  We may use third-party services (analytics, etc.) that place their own cookies. 
                  Please refer to their privacy policies for more information.
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
