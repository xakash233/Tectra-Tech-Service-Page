import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { Calendar, Building2, Target, GraduationCap, Megaphone } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: <Calendar className="w-6 h-6" />,
      value: "10+",
      suffix: "Years",
      label: "Experience in education"
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      value: "100",
      suffix: "Cr+",
      label: "Ad Media Spend"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      value: "50+",
      suffix: "",
      label: "Educational Brands"
    },
    {
      icon: <Target className="w-6 h-6" />,
      value: "2x",
      suffix: "",
      label: "Increase in qualified inquiries"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      value: "50,000+",
      suffix: "",
      label: "Leads Generated"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="stats" className="bg-white py-12 px-6 flex flex-col items-center border-t border-gray-50 mt-4 overflow-hidden">

      {/* Pill header */}
      <Reveal>
        <div className="inline-block border border-black rounded-full px-8 py-2 mb-12 shadow-sm bg-black">
          <h3 className="text-white font-bold text-base tracking-wide">Numbers that Speak</h3>
        </div>
      </Reveal>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {stats.map((stat, i) => (
          <motion.div
            variants={item}
            whileHover={{ y: -5, scale: 1.05 }}
            key={i}
            className="border border-[#e0e0e0] rounded-2xl p-6 flex flex-col bg-white hover:border-black transition-all hover:shadow-2xl group relative overflow-hidden"
          >
            <div className="mb-4 text-[#1a1a1a] group-hover:scale-110 transition-transform origin-left">
              {stat.icon}
            </div>
            <div className="flex flex-col mb-1 relative z-10">
              <span className="text-2xl md:text-xl font-extrabold text-[#1a1a1a] tracking-tight leading-none">{stat.value}</span>
              <span className="text-xs font-bold text-[#1a1a1a]">{stat.suffix}</span>
            </div>
            <p className="text-[10px] text-gray-500 font-medium leading-tight relative z-10">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
