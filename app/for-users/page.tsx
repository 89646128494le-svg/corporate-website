import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ForUsersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              For Users
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">How to participate</h2>
                <ol className="space-y-3 text-neutral-700 list-decimal list-inside">
                  <li>Download the Nomad Pays mobile application</li>
                  <li>Create an account and complete your profile</li>
                  <li>Browse available tasks from advertisers</li>
                  <li>Accept and complete tasks according to instructions</li>
                  <li>Wait for advertiser verification and approval</li>
                  <li>Receive Points after advertiser confirmation</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">What you can do with Points</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Points can be used voluntarily by partners who accept them. 
                  You may be able to exchange Points for goods or services offered by partners.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Nomad Pays does not guarantee that Points will be accepted by any partner 
                  or that Points can be exchanged for any specific goods or services.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <h2 className="text-xl font-bold text-yellow-900 mb-3">User risks</h2>
                <ul className="space-y-2 text-yellow-800">
                  <li>• Points have no guaranteed value</li>
                  <li>• Points may not be accepted by partners</li>
                  <li>• Task verification is at the advertiser's discretion</li>
                  <li>• Points are non-refundable</li>
                  <li>• All operations with Points are final</li>
                  <li>• Disputes are resolved outside the platform</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Responsibility disclaimers</h2>
                <p className="text-neutral-700 leading-relaxed mb-3">
                  Nomad Pays provides the technology platform only. We are not responsible for:
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Task content created by advertisers</li>
                  <li>• Verification decisions made by advertisers</li>
                  <li>• Goods or services provided by partners</li>
                  <li>• Disputes between users and advertisers or partners</li>
                  <li>• The value or acceptance of Points by partners</li>
                </ul>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Important notice</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Before using Points, please read our{" "}
                  <Link href="/legal/terms" className="text-accent-darkBlue hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/points" className="text-accent-darkBlue hover:underline">
                    Points information page
                  </Link>
                  .
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
