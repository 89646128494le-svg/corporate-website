import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              How it works
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Who does what</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Nomad Pays operates as a technology platform that connects advertisers, users, and partners. 
                  Each participant has specific roles and responsibilities.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Responsibility and roles</h2>
                <ul className="space-y-4 text-neutral-700">
                  <li>
                    <strong className="text-neutral-900">Advertisers:</strong> Create tasks, independently verify task completion, 
                    and approve or reject results. Advertisers are responsible for their tasks, content, and any payouts (if made through partners).
                  </li>
                  <li>
                    <strong className="text-neutral-900">Users:</strong> Accept and complete tasks. Points are awarded only after 
                    advertiser confirmation.
                  </li>
                  <li>
                    <strong className="text-neutral-900">Partners:</strong> Voluntarily accept Points from users. 
                    Nomad Pays has no control over partner offerings or services.
                  </li>
                  <li>
                    <strong className="text-neutral-900">Nomad Pays:</strong> Provides the technology platform. 
                    Does not verify tasks, does not guarantee payments, and does not mediate disputes.
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Important points</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>✓ Task verification is performed by advertisers, not Nomad Pays</li>
                  <li>✓ Points are awarded only after advertiser confirmation</li>
                  <li>✓ Disputes are resolved outside the platform</li>
                  <li>✓ Nomad Pays does not participate in task verification or dispute resolution</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Where the platform is not involved</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Nomad Pays does not verify task completion, does not guarantee payments, does not store user deposits, 
                  does not mediate disputes, and does not control partner services or offerings.
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
