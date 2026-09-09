import { useState, useEffect } from 'react';
import { Phone, Navigation } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickInfoCards } from './components/QuickInfoCards';
import { AboutSection } from './components/AboutSection';
import { PhotoSection } from './components/PhotoSection';
import { FuelServices } from './components/FuelServices';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { STATION_INFO } from './types';

export default function App() {
  const [showFloatingActions, setShowFloatingActions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating mobile action bar once scrolled past hero
      if (window.scrollY > 400) {
        setShowFloatingActions(true);
      } else {
        setShowFloatingActions(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col selection:bg-[#F37021] selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Quick Information Cards */}
        <QuickInfoCards />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Real Station Photographs Gallery */}
        <PhotoSection />

        {/* 5. Available Fuel Services */}
        <FuelServices />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. Customer Reviews & Ratings */}
        <ReviewsSection />

        {/* 8. Location & Highway Access */}
        <LocationSection />

        {/* 9. Contact Call-to-Action */}
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Quick-Action Bar for Drivers on the road */}
      {showFloatingActions && (
        <aside
          aria-label="Quick road actions"
          className="fixed bottom-4 inset-x-4 z-40 md:hidden animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <div className="bg-[#002855]/95 backdrop-blur-lg rounded-2xl p-2.5 shadow-2xl border border-white/20 flex items-center gap-2">
            <a
              href={STATION_INFO.phoneTel}
              id="fab-call-btn"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/15 hover:bg-white/25 active:bg-white/30 text-white font-bold rounded-xl text-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FF8C38]" />
              <span>Call Pump</span>
            </a>

            <a
              href={STATION_INFO.mapsQueryUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="fab-directions-btn"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#F37021] hover:bg-[#D95305] active:bg-[#C24500] text-white font-extrabold rounded-xl text-xs shadow-md transition-colors"
            >
              <Navigation className="w-4 h-4" />
              <span>Directions</span>
            </a>
          </div>
        </aside>
      )}
    </div>
  );
}
