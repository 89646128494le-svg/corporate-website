import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function DisclaimerPage() {
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
              Disclaimer
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h2 className="text-2xl font-bold text-red-900 mb-4">IMPORTANT DISCLAIMER</h2>
                <p className="text-red-800 font-semibold leading-relaxed">
                  Nomad Pays is NOT a bank, payment system, or financial institution. 
                  We do NOT store user deposits, do NOT provide financial services, 
                  and do NOT guarantee payments.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">What Nomad Pays Is</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Nomad Pays is a technology platform-aggregator that provides infrastructure 
                  for connecting advertisers, users, and partners through a system of 
                  non-monetary bonus units (Points).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">What Nomad Pays Is NOT</h2>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>Not a bank</strong> — We do not provide banking services or store deposits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>Not a payment system</strong> — We do not process payments or handle money</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>Not a financial institution</strong> — We do not provide financial services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>Not a payment interface</strong> — We do not accept user money</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">No Guarantees</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Nomad Pays does NOT guarantee:
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• The value of Points</li>
                  <li>• That Points will be accepted by partners</li>
                  <li>• Task completion or verification</li>
                  <li>• Payment processing</li>
                  <li>• Returns or refunds of Points</li>
                  <li>• Any specific outcomes or benefits</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Points Disclaimer</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Points are non-monetary bonus units with no guaranteed value. 
                  They cannot be exchanged for money and all operations with Points are final. 
                  Please review our{" "}
                  <Link href="/points" className="text-accent-darkBlue hover:underline">
                    Points page
                  </Link>{" "}
                  for complete information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Use at Your Own Risk</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Use of the Nomad Pays platform and Points is at your own risk. 
                  Nomad Pays is not responsible for losses or damages arising from 
                  platform use or Points transactions.
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
