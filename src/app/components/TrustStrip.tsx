import React, { useState } from 'react';
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
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate logos for seamless scrolling
  const allLogos = [...institutions, ...institutions];

  return (
    <section
      aria-label="Trusted by leading institutions"
      className="bg-white py-12 overflow-hidden"
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .marquee-paused {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative z-10 max-w-[1230px] mx-auto px-6 mb-8">
        <Reveal>
          <p
            className="text-center text-black text-[14px] md:text-[15px] tracking-[0.3em] uppercase"
            style={{ fontWeight: 900 }}
          >
            Our Trusted Institutional Partners
          </p>
        </Reveal>
      </div>

      <div
        className="relative flex overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`marquee-container ${isPaused ? 'marquee-paused' : ''} flex flex-nowrap items-center gap-12 md:gap-20 px-10`}
        >
          {allLogos.map((inst, i) => (
            <div
              key={`${inst.name}-${i}`}
              className="flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 flex-shrink-0"
            >
              <img
                src={inst.logo}
                alt={inst.name}
                style={{ transform: inst.scale ? `scale(${inst.scale * 1.1})` : 'scale(1.1)' }}
                className="h-10 md:h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
