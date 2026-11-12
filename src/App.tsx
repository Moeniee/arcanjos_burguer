import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarqueeBanner } from './components/MarqueeBanner';
import { Features } from './components/Features';
import { KitchenReels } from './components/KitchenReels';
import { MenuSection } from './components/MenuSection';
import { ComboBuilder } from './components/ComboBuilder';
import { BrandStory } from './components/BrandStory';
import { Reviews } from './components/Reviews';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';
import { FloatingDelivery } from './components/FloatingDelivery';

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5F0] text-[#1E1214] font-sans selection:bg-[#D72D38] selection:text-white">
      {/* Top Bar Navigation */}
      <Header />

      <main className="flex-1">
        {/* Hero Showcase with direct iFood & 99Food CTAs */}
        <Hero onExploreMenu={() => scrollToSection('cardapio')} />

        {/* Dynamic Taste Marquee Banner */}
        <MarqueeBanner />

        {/* Differentials & Quality Pillars */}
        <Features />

        {/* Real Kitchen Video Reels */}
        <KitchenReels />

        {/* Visual Burger Menu Section */}
        <MenuSection />

        {/* Interactive Custom Combo Builder & Simulator */}
        <ComboBuilder />

        {/* Arcanjo's Brand Story & Mascot Showcase */}
        <BrandStory />

        {/* Customer Reviews & Social Proof */}
        <Reviews />

        {/* Location & Embedded Google Maps */}
        <LocationHours />
      </main>

      {/* Brand Footer */}
      <Footer />

      {/* Floating Direct Delivery Order Button (iFood & 99Food) */}
      <FloatingDelivery />
    </div>
  );
}
