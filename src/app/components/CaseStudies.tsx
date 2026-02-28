import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const cases = [
    {
      title: "VMLS",
      description: "Generated Over 20,000 Leads for Career Courses",
      image: "/images/vmls-2.jpg.jpeg",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=100&q=80",
      metric: "+20,000 Leads",
      color: "text-purple-600 border-purple-200",
      pdfLink: "/blogs/vmls"
    },
    {
      title: "VSEP",
      description: "Achieved 2.5x Qualified Admissions in 1 year.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      logo: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=100&q=80",
      metric: "2.5x Inquiries",
      color: "text-blue-600 border-blue-200"
    },
    {
      title: "TSA College",
      description: "4,000+ Enrollments in Engineering Programs.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=100&q=80",
      metric: "4,000+ Enrollments",
      color: "text-purple-600 border-purple-200"
    }
  ];


  const handleNext = React.useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  }, [cases.length]);

  const handlePrev = React.useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  }, [cases.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 15000); // 15 seconds

    return () => clearInterval(timer);
  }, [handleNext]);

  const cs = cases[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 30 : -30,
      opacity: 0
    })
  };

  return (
    <section id="case-studies" className="bg-white py-12 px-6 flex flex-col items-center relative overflow-hidden">
      {/* Background tech mesh */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

      <Reveal>
        <h2 className="text-[#1a1a1a] font-extrabold text-3xl md:text-4xl mb-4 tracking-tight text-center relative z-10">
          Case Studies
        </h2>
      </Reveal>
      <Reveal>
        <p className="text-gray-500 font-medium text-sm md:text-base max-w-2xl mx-auto mb-6 italic opacity-80 text-center relative z-10">
          Check out our proven success stories with top educational institutions.
        </p>
      </Reveal>

      <div className="w-full max-w-3xl mx-auto relative z-10">
        <div className="relative overflow-hidden min-h-[440px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="w-full"
            >
              <div className="flex flex-col rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-[0_4px_32px_-12px_rgba(0,0,0,0.1)] transition-all bg-white pb-6 h-full p-4 group">
                {/* Image section - Optimized Height */}
                <Link
                  to={cs.pdfLink || '#'}
                  target={cs.pdfLink?.startsWith('/') ? undefined : "_blank"}
                  rel={cs.pdfLink?.startsWith('/') ? undefined : "noopener noreferrer"}
                  className={`w-full h-[240px] sm:h-[300px] overflow-hidden rounded-[1.5rem] relative ${cs.pdfLink ? 'cursor-pointer hover:opacity-90 transition-opacity' : 'cursor-default'}`}
                >
                  <img src={cs.image} alt={cs.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/5"></div>
                  {cs.pdfLink && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-black shadow-sm flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                      <ChevronRight size={12} />
                      Read Case Study
                    </div>
                  )}
                </Link>

                {/* Content section */}
                <div className="pt-5 px-6 flex-1 flex flex-col items-start text-left">
                  <div className="flex items-center justify-between w-full mb-3">
                    <Link
                      to={cs.pdfLink || '#'}
                      target={cs.pdfLink?.startsWith('/') ? undefined : "_blank"}
                      rel={cs.pdfLink?.startsWith('/') ? undefined : "noopener noreferrer"}
                      className={`font-bold text-[#1a1a1a] text-xl tracking-tight leading-none hover:text-black transition-colors ${cs.pdfLink ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                      {cs.title}
                    </Link>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1 rounded-full border ${cs.color} bg-white flex items-center justify-center font-bold text-[10px] sm:text-xs shadow-sm`}
                    >
                      {cs.metric}
                    </motion.div>
                  </div>

                  <p className="text-gray-600 text-[14px] sm:text-base font-medium leading-normal mb-5">
                    {cs.description}
                  </p>

                  {/* Read More / PDF Link Action */}
                  {cs.pdfLink && (
                    <Link
                      to={cs.pdfLink}
                      target={cs.pdfLink?.startsWith('/') ? undefined : "_blank"}
                      rel={cs.pdfLink?.startsWith('/') ? undefined : "noopener noreferrer"}
                      className="inline-flex items-center gap-2 text-black font-black text-[12px] uppercase tracking-widest hover:gap-3 transition-all mb-6 group/btn"
                    >
                      Read Full Case Study
                      <ChevronRight size={14} className="text-black transition-transform group-hover/btn:translate-x-0.5" />
                    </Link>
                  )}

                  {/* Bottom tag section */}
                  <div className="flex items-center gap-3 w-full mt-auto">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 overflow-hidden flex-shrink-0 border border-gray-100 p-0.5 shadow-inner">
                      <img src={cs.logo} className="w-full h-full object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500" alt="logo" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[#1a1a1a] font-bold text-xs tracking-tight">Institutional Success</p>
                      <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-widest">Profile {currentIndex + 1} / {cases.length}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls - Moved Closer and More Compact */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 bg-white border border-gray-100 text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm group"
              aria-label="Previous case study"
            >
              <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 bg-white border border-gray-100 text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm group"
              aria-label="Next case study"
            >
              <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-1.5">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`h-1 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-6 bg-black' : 'w-1.5 bg-gray-200'}`}
                aria-label={`Go to case study ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
