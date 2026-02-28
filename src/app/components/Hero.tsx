import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-white pt-0 pb-12 md:pt-2 md:pb-20 relative overflow-hidden"
    >
      {/* Background Tech Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-black/10 blur-[100px] rounded-full pointer-events-none"
      ></motion.div>

      <div className="relative z-10 w-full">
        <div className="max-w-[780px]">
          {/* Eyebrow */}
          <Reveal>
            <div className="flex items-center gap-3 mb-6 group cursor-default">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-black group-hover:text-white transition-all duration-300 border border-gray-100 group-hover:rotate-12">
                <ArrowRight size={20} className="-rotate-45" />
              </div>
              <p
                className="text-[#666666] tracking-[0.2em] uppercase text-[12px] md:text-[13px] group-hover:text-black transition-colors duration-300"
                style={{ fontWeight: 800 }}
              >
                Education-Focused Digital Marketing
              </p>
            </div>
          </Reveal>

          {/* H1 */}
          <Reveal>
            <h1
              id="hero-heading"
              className="text-[#1a1a1a] mb-8"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Drive Admissions Beyond Marketing
            </h1>
          </Reveal>

          {/* Subheadline */}
          <Reveal>
            <p
              className="text-[#333333] mb-12 max-w-[620px]"
              style={{ fontSize: '1.125rem', lineHeight: 1.75, fontWeight: 400 }}
            >
              We help educational institutions achieve sustainable growth through strategic digital marketing solutions. Our passion for the education sector drives us to create impactful campaigns that attract and engage students.
            </p>
          </Reveal>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8 relative z-20">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://calendly.com/d/ctnd-5kd-yzk/1-1-scale-your-business"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-black text-white px-6 py-3.5 md:px-8 md:py-4 rounded-full text-sm md:text-base font-bold shadow-lg hover:shadow-black/20 transition-all gap-2"
            >
              Book Free Consultation
              <ArrowRight size={18} aria-hidden="true" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#case-studies"
              className="inline-flex items-center justify-center border border-black/10 text-black px-6 py-3.5 md:px-8 md:py-4 rounded-full text-sm md:text-base font-bold hover:bg-black hover:text-white transition-all gap-2"
            >
              View Case Studies
            </motion.a>
          </div>


        </div>
      </div>
    </section>
  );
}
