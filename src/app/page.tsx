import Link from "next/link";
import { Hero } from "@/components/ui/hero-with-image-text-and-two-buttons";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Time Audit & Allocation</h3>
              <p className="text-gray-600">
                Calculate your discretionary hours and visualize your time breakdown with intuitive dashboards.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Deep Work Integration</h3>
              <p className="text-gray-600">
                Dedicated blocks for distraction-free focus sessions to boost productivity and achieve your goals.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Customizable Templates</h3>
              <p className="text-gray-600">
                Pre-built templates for common goals like &quot;Newsletter Creator&quot; or &quot;Fitness Enthusiast.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to optimize your time?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join TimeCraft today and transform your unused hours into meaningful progress.
          </p>
          <Link 
            href="/auth" 
            className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-3 rounded-md font-medium text-lg"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">TimeCraft</h3>
              <p className="text-gray-400">Optimize your discretionary time</p>
            </div>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-indigo-400">About</Link>
              <Link href="#" className="hover:text-indigo-400">Features</Link>
              <Link href="#" className="hover:text-indigo-400">Contact</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} TimeCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
