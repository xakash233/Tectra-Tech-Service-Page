import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import { FloatingNavigator } from './components/FloatingNavigator';
import { VMLSBlog } from './pages/VMLSBlog';

function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <FloatingNavigator />
      {/* Skip to main content – screen reader / keyboard accessibility */}
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" tabIndex={-1} className="flex-1 max-w-[1230px] mx-auto w-full px-6 pt-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">
          {/* Left Main Content */}
          <div className="bg-white min-w-0">
            <Hero />
            <div id="partners"><TrustStrip /></div>
            <Testimonials />
            <div id="problem"><Problem /></div>
            <div id="solutions"><Solutions /></div>
            <div id="stats"><Stats /></div>
            <CaseStudies />
            <div id="process"><GrowthFramework /></div>
            <VideoSection />
            <Founder />
            <div id="faq"><FAQ /></div>
          </div>

          {/* Right Sticky Form */}
          <aside className="hidden lg:block sticky top-[80px] h-max z-40">
            <StickyForm />
          </aside>
        </div>

        {/* Mobile Sticky Form - only visible on small screens at the bottom or inline */}
        <div id="mobile-book-section" className="lg:hidden mt-12">
          <StickyForm />
        </div>
      </main>

      {/* Contact anchor at the very bottom */}
      <div id="contact" className="h-px w-full" />

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs/vmls" element={<VMLSBlog />} />
    </Routes>
  );
}
