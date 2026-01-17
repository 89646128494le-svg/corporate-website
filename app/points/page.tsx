import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PointsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Points
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                <h2 className="text-2xl font-bold text-red-900 mb-4">CRITICALLY IMPORTANT</h2>
                <p className="text-red-800 font-semibold mb-4">
                  Points are non-monetary bonus units. They are NOT money, NOT electronic money, 
                  and NOT cryptocurrency.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">What Points are NOT</h2>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>Points are NOT money</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>Points are NOT electronic money</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>Points are NOT cryptocurrency</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>Points do NOT have guaranteed value</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>Points are NOT refundable</strong></span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">What Points are</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Points are non-monetary bonus units used within the Nomad Pays platform. 
                  They represent a digital reward mechanism for completing tasks created by advertisers.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Points can be used voluntarily by partners who accept them in exchange for 
                  their goods or services. Nomad Pays does not control or guarantee the value 
                  of Points or their acceptance by partners.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <h2 className="text-xl font-bold text-yellow-900 mb-3">Finality of operations</h2>
                <p className="text-yellow-800 font-semibold">
                  All operations with Points are final. Once Points are awarded, transferred, 
                  or used, these actions cannot be reversed.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">No guarantees</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Nomad Pays does not guarantee:
                </p>
                <ul className="space-y-2 text-neutral-700 mt-3">
                  <li>• The value of Points</li>
                  <li>• That Points will be accepted by any partner</li>
                  <li>• That Points can be exchanged for goods or services</li>
                  <li>• Any specific benefits from using Points</li>
                  <li>• Refunds or returns of Points</li>
                </ul>
              </div>

              <div className="bg-neutral-50 border-l-4 border-primary-600 p-6 rounded-r-lg">
                <h2 className="text-xl font-bold text-neutral-900 mb-3">Legal status</h2>
                <p className="text-neutral-700 leading-relaxed">
                  Points are internal accounting units of the Nomad Pays platform. 
                  They have no monetary equivalent and cannot be exchanged for money. 
                  Nomad Pays is not a bank, payment system, or financial institution.
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
