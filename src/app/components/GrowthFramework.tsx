import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { Search, Compass, Rocket, TrendingUp, CheckCircle2, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Audit',
    icon: <Search className="w-6 h-6" />,
    description:
      'We conduct a comprehensive audit of your digital footprint — website performance, rankings, and ad spend efficiency.',
    deliverable: 'Digital Audit Report',
    color: 'bg-blue-500'
  },
  {
    number: '02',
    title: 'Strategy',
    icon: <Compass className="w-6 h-6" />,
    description:
      'We build a 90-day growth roadmap specific to your institution, courses, and admissions calendar.',
    deliverable: '90-Day Roadmap',
    color: 'bg-purple-500'
  },
  {
    number: '03',
    title: 'Execution',
    icon: <Rocket className="w-6 h-6" />,
    description:
      'Our team executes every element — from campaign setup and landing pages to CRM configuration.',
    deliverable: 'Live Campaigns',
    color: 'bg-orange-500'
  },
  {
    number: '04',
    title: 'Scale',
    icon: <TrendingUp className="w-6 h-6" />,
    description:
      'We optimise, reinvest in what works, and systematically scale to maximise your enrolment intake.',
    deliverable: 'Scale Plan',
    color: 'bg-green-500'
  },
];

export function GrowthFramework() {
  return (
    <section
      id="process"
      aria-labelledby="framework-heading"
      className="bg-white py-24 px-6 relative overflow-hidden"
    >
      <div className="max-w-[1230px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <Reveal>
            <div className="flex flex-col items-center gap-3 mb-6 group cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform duration-500">
                <Rocket size={24} />
              </div>
              <p className="text-black text-[13px] font-black tracking-[0.3em] uppercase">Our Process</p>
            </div>
          </Reveal>

          <Reveal>
            <h2 id="framework-heading" className="text-[#1a1a1a] font-black text-4xl md:text-6xl tracking-tighter mb-6">
              4-Step Growth Framework
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-[#666666] text-lg max-w-2xl leading-relaxed">
              A structured, repeatable process that takes institutions from inconsistent
              leads to a predictable admissions pipeline.
            </p>
          </Reveal>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative group"
              >
                {/* Step Number Circle */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center text-black font-black text-sm shadow-xl group-hover:bg-black group-hover:text-white transition-all duration-300 relative z-20 shrink-0">
                    {step.number}
                  </div>
                  {i % 2 === 0 && (
                    <div className="hidden sm:block flex-1 h-0.5 bg-gray-200" />
                  )}
                </div>

                {/* Card */}
                <div className="bg-gray-50 rounded-[2.5rem] p-8 h-full border border-gray-100 group-hover:bg-white group-hover:shadow-2xl group-hover:border-black/5 transition-all duration-500 hover:-translate-y-2">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-50">
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-black text-black mb-4 flex items-center gap-2">
                    {step.title}
                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>

                  <p className="text-[#666666] text-sm leading-relaxed mb-8 font-medium">
                    {step.description}
                  </p>

                  <div className="mt-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm group-hover:border-black/10 transition-colors">
                      <CheckCircle2 size={14} className="text-black" />
                      <span className="text-[10px] font-black uppercase tracking-wider text-black">
                        {step.deliverable}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
