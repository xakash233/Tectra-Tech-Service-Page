import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';

interface Institution {
  name: string;
  logo: string;
  scale?: number;
}

const institutions: Institution[] = [
  { name: 'Manipal', logo: '/logo/Manipal SMALL.png' },
  { name: 'SAS', logo: '/logo/SAS SMALL.png' },
  { name: 'The Schram Academy', logo: '/logo/The Schram Academy SMALL.png' },
  { name: 'The Sun Smart', logo: '/logo/The Sun Smart SMALL.png' },
  { name: 'VMLS', logo: '/logo/VMLS SMALL.png' },
  { name: 'VSEP', logo: '/logo/VSEP SMALL.png' },
  { name: 'AVMC', logo: '/logo/AVMC SMALL.png', scale: 1.4 },
  { name: 'National Institute', logo: '/logo/National Institute SMALL.png', scale: 1.5 },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Trusted by leading institutions"
      className="border-y border-[#e5e5e5] bg-[#F5F5F5] py-16"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <Reveal>
          <p
            className="text-center text-[#666666] text-base md:text-lg tracking-widest uppercase mb-12"
            style={{ fontWeight: 700, letterSpacing: '0.12em' }}
          >
            Trusted by Leading Institutions
          </p>
        </Reveal>

        <div
          className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 md:gap-20 lg:gap-24"
          role="list"
          aria-label="Client institutions"
        >
          {institutions.map((inst, i) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              key={inst.name}
              role="listitem"
              className="group flex items-center justify-center cursor-pointer perspective-1000"
            >
              <img
                src={inst.logo}
                alt={inst.name}
                style={{ transform: inst.scale ? `scale(${inst.scale})` : undefined }}
                className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-16 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:!scale-[1.1] drop-shadow-sm"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
