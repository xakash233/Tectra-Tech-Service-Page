import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      'Tectra modified our digital presence completely. We moved from nowhere to the top rankings on Google. Their SEO expertise has significantly boosted our engagement and lead acquisition.',
    name: 'Aditya Verma',
    designation: 'Admissions Head',
    institution: 'Narayana Group of Schools',
  },
  {
    id: 2,
    quote:
      'The workflow is fantastic. The team is accessible at any time and they go above and beyond. Our enrollment inquiries tripled in just six months thanks to their strategic funnel.',
    name: 'Suresh Kumar',
    designation: 'Principal',
    institution: 'Velammal Educational Trust',
  },
  {
    id: 3,
    quote:
      'They managed our social media and ads with great precision. We saw substantial growth in our follower base and a massive improvement in our ROI on every rupee spent.',
    name: 'Meenakshi Iyer',
    designation: 'Marketing Director',
    institution: 'Chennai Institute of Technology',
  },
  {
    id: 4,
    quote:
      'Professional, data-driven, and completely committed to results. They understood what we were looking for when other vendors failed. Truly experts in education marketing.',
    name: 'Dr. Rajesh Khanna',
    designation: 'Director',
    institution: 'SRM Institute of Science and Technology',
  },
  {
    id: 5,
    quote:
      'Great experience working with Tectra. They are very collaborative and flexible. They treated every task with utmost professionalism. Highly recommended for any institution.',
    name: 'Priya Singh',
    designation: 'Academic Dean',
    institution: 'Amrita Vishwa Vidyapeetham',
  },
  {
    id: 6,
    quote:
      'Everything was handled efficiently. Their digital strategies are top-notch. Our admissions process is now much more streamlined thanks to their lead generation funnel.',
    name: 'Karthik Raja',
    designation: 'Managing Director',
    institution: 'Hindustan University',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Group testimonials by 2 for desktop
  const pairs = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    pairs.push(testimonials.slice(i, i + 2));
  }

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % pairs.length);
  }, [pairs.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + pairs.length) % pairs.length);
  }, [pairs.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 10000); // 10 seconds
    return () => clearInterval(timer);
  }, [handleNext, isPaused]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-white py-16 px-4 md:px-0 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[#666666] uppercase tracking-[0.2em] text-[13px] font-bold mb-4">Success Stories</p>
            <h2 id="testimonials-heading" className="text-[#1a1a1a] font-black text-3xl md:text-5xl tracking-tighter">
              Results That Speak<br />for Themselves
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative min-h-[420px] md:min-h-[380px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
              }}
              className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {pairs[currentIndex].map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-50/50 p-8 md:p-10 rounded-[2.5rem] border border-gray-100 flex flex-col h-full relative group hover:bg-white hover:shadow-2xl transition-all duration-500"
                >
                  <Quote size={40} className="text-black/5 absolute right-8 top-8" />

                  <div className="flex gap-0.5 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-[#333333] font-medium text-lg md:text-xl leading-relaxed mb-8 flex-1 italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center font-bold text-black border border-black/5">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-black font-black text-sm uppercase tracking-wider">{testimonial.name}</p>
                      <p className="text-gray-500 font-bold text-xs uppercase mt-0.5">{testimonial.designation}, {testimonial.institution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {pairs.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-8 bg-black' : 'w-2 bg-gray-200'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
