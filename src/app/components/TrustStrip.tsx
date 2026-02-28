import React from 'react';
import { Users } from 'lucide-react';
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
      className="bg-white py-16"
    >
      <div className="max-w-[1230px] mx-auto px-6">
        <div className="mb-16 space-y-10">
          <Reveal>
            <div className="flex flex-col items-center justify-center gap-3 group cursor-default w-full">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-black group-hover:text-white transition-all duration-300 border border-gray-100 group-hover:rotate-12">
                <Users size={20} />
              </div>
              <p className="text-center text-black text-[12px] md:text-[13px] tracking-[0.3em] uppercase transition-colors duration-300"
                style={{ fontWeight: 900 }}
              >
                OUR CLIENTS
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="text-left w-full">
              <h2 className="text-[#666666] font-medium text-[24px] md:text-[20px] tracking-tight leading-tight max-w-xl">
                Trusted Institutional Partners
              </h2>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 items-center">
          {institutions.map((inst, i) => (
            <Reveal key={`${inst.name}-${i}`}>
              <div className="flex items-center justify-center grayscale opacity-95 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105">
                <img
                  src={inst.logo}
                  alt={inst.name}
                  style={{
                    transform: inst.scale ? `scale(${inst.scale * 1.15})` : 'scale(1.70)',
                    filter: 'contrast(1.2) brightness(1.1)'
                  }}
                  className="h-14 md:h-20 w-auto object-contain"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
