import React from 'react';

const institutions = [
  { name: 'Sunrise Academy', abbr: 'SA' },
  { name: 'EduTech Institute', abbr: 'ETI' },
  { name: 'Global Learning Hub', abbr: 'GLH' },
  { name: 'Apex University', abbr: 'AU' },
  { name: 'BrightPath College', abbr: 'BPC' },
  { name: 'MindCraft School', abbr: 'MCS' },
  { name: 'Pinnacle Institute', abbr: 'PI' },
  { name: 'Horizon Academy', abbr: 'HA' },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Trusted by leading institutions"
      className="border-y border-[#e5e5e5] bg-[#F5F5F5] py-12"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <p
          className="text-center text-[#666666] text-base md:text-lg tracking-widest uppercase mb-10"
          style={{ fontWeight: 700, letterSpacing: '0.12em' }}
        >
          Trusted by 50+ Leading Institutions
        </p>

        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8"
          role="list"
          aria-label="Client institutions"
        >
          {institutions.map((inst) => (
            <div
              key={inst.name}
              role="listitem"
              className="flex flex-col items-center justify-center py-5 px-4 bg-white border border-[#e5e5e5] min-h-[72px] rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <span
                className="text-[#1a1a1a] text-sm md:text-base tracking-widest uppercase block text-center"
                style={{ fontWeight: 800, letterSpacing: '0.1em' }}
                aria-label={inst.name}
              >
                {inst.abbr}
              </span>
              <span
                className="text-[#999999] text-[13px] block text-center mt-1 hidden sm:block"
                style={{ fontWeight: 400 }}
              >
                {inst.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
