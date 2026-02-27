import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-white py-12 md:py-20 relative overflow-hidden"
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
            <p
              className="text-[#666666] tracking-widest uppercase text-base md:text-lg mb-8"
              style={{ fontWeight: 700, letterSpacing: '0.12em' }}
            >
              Education-Focused Digital Marketing
            </p>
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
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://calendly.com/d/ctnd-5kd-yzk/1-1-scale-your-business"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-black text-white px-8 min-h-[52px] hover:bg-[#1a1a1a] transition-colors duration-150 gap-2 font-bold"
              style={{ fontSize: '1rem' }}
            >
              Book Free Consultation
              <ArrowRight size={18} aria-hidden="true" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#case-studies"
              className="inline-flex items-center justify-center border border-black text-black px-8 min-h-[52px] hover:bg-black hover:text-white transition-colors duration-150 gap-2 font-bold"
              style={{ fontSize: '1rem' }}
            >
              View Case Studies
            </motion.a>
          </div>


        </div>
      </div>
    </section>
  );
}
