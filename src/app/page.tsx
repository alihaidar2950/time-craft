import Link from "next/link";
import { Hero } from "@/components/ui/hero-with-image-text-and-two-buttons";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why TimeCraft?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-green-600 mr-2">✅</span> Time Audit & Allocation
              </h3>
              <p className="text-gray-600">
                Calculate your discretionary hours in seconds. Visualize where time slips away and reallocate it to what truly matters (learning, relationships, passions).
              </p>
            </div>
            
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-green-600 mr-2">✅</span> Deep Focus Sessions
              </h3>
              <p className="text-gray-600">
                Block distractions and dive into high-value work. Pomodoro-style timers + science-backed focus strategies keep you in the zone.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-green-600 mr-2">✅</span> Habit Stacking Made Simple
              </h3>
              <p className="text-gray-600">
                Build streaks for workouts, learning, or chores. No more guilt—just progress.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-green-600 mr-2">✅</span> Flex Time Buffer
              </h3>
              <p className="text-gray-600">
                Life happens. Reserve hours for emergencies or spontaneous fun—without derailing your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <blockquote className="text-2xl italic text-gray-700 mb-8 max-w-3xl mx-auto">
            &quot;TimeCraft changed how I see free time. I launched a newsletter and fixed my sleep—all in 6 weeks.&quot;
          </blockquote>
          <p className="text-lg text-gray-600">— Beta User</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Join 5,000+ Productivity Enthusiasts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="p-8 border rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Free Tier</h3>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span> Time audit dashboard
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span> 1 pre-built template
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span> Basic habit tracking
                </li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </div>
            
            <div className="p-8 border rounded-lg shadow-sm border-blue-200 bg-blue-50">
              <h3 className="text-2xl font-bold mb-2">Pro Tier</h3>
              <p className="text-xl mb-4">$12/month</p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span> Unlimited templates
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span> Deep Focus analytics
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span> Priority support
                </li>
              </ul>
              <Button className="w-full" variant="outline">Upgrade to Pro</Button>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-600">No credit card required to get started.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Still scrolling?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your future self will thank you.
          </p>
          <Button 
            size="lg"
            variant="outline" 
            className="bg-transparent hover:bg-white hover:text-indigo-600 text-white border-white"
          >
            Start optimizing your time
          </Button>
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
