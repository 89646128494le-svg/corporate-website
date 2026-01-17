import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ForAdvertisersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              For Advertisers
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">How to post tasks</h2>
                <ol className="space-y-3 text-neutral-700 list-decimal list-inside">
                  <li>Register as an advertiser on the Nomad Pays platform</li>
                  <li>Create task descriptions with clear requirements</li>
                  <li>Set the number of Points to be awarded upon completion</li>
                  <li>Publish tasks to make them available to users</li>
                  <li>Review submitted task completions</li>
                  <li>Approve or reject completed tasks</li>
                  <li>Points are awarded automatically upon your approval</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">What you pay for</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Advertisers pay for advertising and technical services provided by Nomad Pays. 
                  This includes:
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Access to the platform and task management tools</li>
                  <li>• User reach and task distribution</li>
                  <li>• Technical infrastructure and support</li>
                  <li>• Points issuance and tracking system</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <h2 className="text-xl font-bold text-yellow-900 mb-3">What Nomad Pays does NOT guarantee</h2>
                <ul className="space-y-2 text-yellow-800">
                  <li>• Task completion by users</li>
                  <li>• Quality of task completion</li>
                  <li>• Number of users who will complete your tasks</li>
                  <li>• Effectiveness of advertising campaigns</li>
                  <li>• Return on investment</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Advertiser responsibilities</h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  As an advertiser, you are fully responsible for:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-neutral-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">Tasks</h3>
                    <p className="text-neutral-700">
                      You are responsible for the content, legality, and accuracy of all tasks you create.
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">Verification</h3>
                    <p className="text-neutral-700">
                      You are responsible for independently verifying task completion. 
                      Nomad Pays does not verify tasks on your behalf.
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">Content</h3>
                    <p className="text-neutral-700">
                      You are responsible for ensuring all task content complies with applicable laws 
                      and platform policies.
                    </p>
                  </div>

                  <div className="bg-neutral-50 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">Payouts (if applicable)</h3>
                    <p className="text-neutral-700">
                      If you make payouts to users through partners, you are solely responsible 
                      for these transactions. Nomad Pays is not involved in payouts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">Contact us</h3>
                <p className="text-neutral-700 mb-2">
                  Interested in becoming an advertiser? Contact us at:
                </p>
                <p className="text-accent-darkBlue font-semibold">ads@nomadpays.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
