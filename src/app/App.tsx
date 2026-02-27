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
import { CustomCursor } from './components/ui/CustomCursor';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen md:cursor-none">
      <CustomCursor />
      {/* Skip to main content – screen reader / keyboard accessibility */}
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col lg:flex-row relative max-w-[1920px] mx-auto w-full">
        {/* Left Main Content - 70% */}
        <div className="w-full lg:w-[70%] flex-1 bg-white">
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
          {/* Note: FinalCTA is removed to avoid duplicating the form at the bottom */}
        </div>

        {/* Right Sticky Form - 30% floating */}
        <aside className="w-full lg:w-[30%] lg:sticky lg:top-[72px] h-max bg-transparent flex-shrink-0 z-40 p-5 lg:p-0 lg:pr-2 mb-2">
          <StickyForm />
        </aside>
      </main>

      {/* Contact anchor at the very bottom */}
      <div id="contact" className="h-px w-full" />

      <Footer />
    </div>
  );
}
