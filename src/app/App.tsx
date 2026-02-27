import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Problem } from './components/Problem';
import { Solutions } from './components/Solutions';
import { Stats } from './components/Stats';
import { CaseStudies } from './components/CaseStudies';
import { GrowthFramework } from './components/GrowthFramework';
import { Testimonials } from './components/Testimonials';
import { VideoSection } from './components/VideoSection';
import { Founder } from './components/Founder';
import { FAQ } from './components/FAQ';
import { StickyForm } from './components/StickyForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip to main content – screen reader / keyboard accessibility */}
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" tabIndex={-1} className="flex-1 max-w-[1230px] mx-auto w-full px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">
          {/* Left Main Content */}
          <div className="bg-white min-w-0">
            <Hero />
            <TrustStrip />
            <Problem />
            <Solutions />
            <Stats />
            <CaseStudies />
            <GrowthFramework />
            <Testimonials />
            <VideoSection />
            <Founder />
            <FAQ />
          </div>

          {/* Right Sticky Form */}
          <aside className="hidden lg:block sticky top-[80px] h-max z-40">
            <StickyForm />
          </aside>
        </div>

        {/* Mobile Sticky Form - only visible on small screens at the bottom or inline */}
        <div className="lg:hidden mt-12">
          <StickyForm />
        </div>
      </main>

      {/* Contact anchor at the very bottom */}
      <div id="contact" className="h-px w-full" />

      <Footer />
    </div>
  );
}
