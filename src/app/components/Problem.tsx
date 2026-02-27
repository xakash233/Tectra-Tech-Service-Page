import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { TrendingDown, Eye, DollarSign, UserX } from 'lucide-react';

const problems = [
  {
    icon: TrendingDown,
    title: 'Low Enrollment Numbers',
    description:
      'Your institution has the quality — but the seats remain empty. Traditional outreach no longer drives the volume of admissions you need.',
  },
  {
    icon: Eye,
    title: 'Poor Digital Visibility',
    description:
      'Prospective students can\'t find you when they search. Competitors dominate Google rankings and social feeds while you remain invisible.',
  },
  {
    icon: DollarSign,
    title: 'High Spend, Low ROI',
    description:
      'Significant marketing budgets are being spent without clear attribution. You don\'t know which campaigns work and which are wasting money.',
  },
  {
    icon: UserX,
    title: 'Unqualified Leads',
    description:
      'Your admissions team is flooded with inquiries from candidates who don\'t match your courses — wasting time and lowering conversion rates.',
  },
];

export function Problem() {
  return (
    <section
      id="company"
      aria-labelledby="problem-heading"
      className="bg-white py-12 md:py-16 relative overflow-hidden"
    >
      {/* Subtle tech grid background */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

      <div className="relative z-10 w-full">
        <div className="max-w-[680px] mb-8 md:mb-12">
          <Reveal>
            <p
              className="text-[#666666] uppercase tracking-widest text-base md:text-lg mb-8"
              style={{ fontWeight: 700, letterSpacing: '0.12em' }}
            >
              The Challenge
            </p>
          </Reveal>
          <Reveal>
            <h2
              id="problem-heading"
              className="text-[#1a1a1a] mb-6"
              style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }}
            >
              Are You Struggling With Admissions?
            </h2>
          </Reveal>
          <Reveal>
            <p
              className="text-[#666666]"
              style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}
            >
              Most educational institutions face the same core problems. If any of these
              resonate, you're in the right place.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {problems.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={title}
              className="rounded-[2.5rem] border border-gray-100 p-8 md:p-10 bg-white group hover:bg-gray-50 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-100 mb-6 bg-white group-hover:bg-black group-hover:text-white transition-all transform"
                aria-hidden="true"
              >
                <Icon size={20} className="transition-colors" />
              </motion.div>
              <h3
                className="text-[#1a1a1a] mb-3"
                style={{ fontSize: '1.0625rem', fontWeight: 700, lineHeight: 1.4 }}
              >
                {title}
              </h3>
              <p
                className="text-[#666666]"
                style={{ fontSize: '0.9375rem', lineHeight: 1.75 }}
              >
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
