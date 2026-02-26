import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';

const steps = [
  {
    number: '01',
    title: 'Audit',
    description:
      'We conduct a comprehensive audit of your current digital footprint — website performance, keyword rankings, competitor positioning, ad spend efficiency, and lead quality. You get a clear picture of where you stand.',
    deliverable: 'Digital Audit Report',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'Based on audit findings, we build a 90-day growth roadmap specific to your institution, target courses, and admissions calendar. Every channel, budget, and KPI is defined before a single campaign launches.',
    deliverable: '90-Day Growth Roadmap',
  },
  {
    number: '03',
    title: 'Execution',
    description:
      'Our dedicated education marketing team executes every element of the strategy — from campaign setup and landing page builds to content calendars and CRM configuration — with weekly reporting throughout.',
    deliverable: 'Live Campaigns + Weekly Reports',
  },
  {
    number: '04',
    title: 'Scale',
    description:
      'As campaigns generate data and leads begin converting, we optimise, reinvest in what works, and systematically scale to maximise your enrolment intake across every admission cycle.',
    deliverable: 'Ongoing Optimisation + Scale Plan',
  },
];

export function GrowthFramework() {
  return (
    <section
      id="process"
      aria-labelledby="framework-heading"
      className="bg-[#F5F5F5] py-12 md:py-16 relative overflow-hidden"
    >
      {/* tech grid background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-[680px] mb-8 md:mb-12">
          <Reveal>
            <p
              className="text-[#666666] uppercase tracking-widest text-base md:text-lg mb-8"
              style={{ fontWeight: 700, letterSpacing: '0.12em' }}
            >
              Our Process
            </p>
          </Reveal>
          <Reveal>
            <h2
              id="framework-heading"
              className="text-[#1a1a1a] mb-6"
              style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }}
            >
              4-Step Growth Framework
            </h2>
          </Reveal>
          <Reveal>
            <p
              className="text-[#666666]"
              style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}
            >
              A structured, repeatable process that takes institutions from inconsistent
              leads to a predictable admissions pipeline.
            </p>
          </Reveal>
        </div>

        {/* Steps */}
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-[#d0d0d0]" aria-label="Growth framework steps">
          {steps.map(({ number, title, description, deliverable }, i) => (
            <motion.li
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={number}
              className="border-b border-r border-[#d0d0d0] bg-white p-8 md:p-10 group hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <span
                  className="text-[#e0e0e0] group-hover:text-black/5 transition-colors"
                  style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.04em' }}
                  aria-hidden="true"
                >
                  {number}
                </span>
                <span
                  className="text-[#1a1a1a] text-right"
                  style={{ fontSize: '1.375rem', fontWeight: 800, letterSpacing: '-0.02em' }}
                >
                  {title}
                </span>
              </div>

              <p
                className="text-[#666666] mb-6"
                style={{ fontSize: '0.9375rem', lineHeight: 1.75 }}
              >
                {description}
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center border border-[#e5e5e5] px-3 py-1.5 bg-white shadow-sm"
              >
                <span
                  className="text-[#333333]"
                  style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}
                >
                  ✓ {deliverable}
                </span>
              </motion.div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
