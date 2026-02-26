import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';

export function CaseStudies() {
  const cases = [
    {
      title: "VMLS",
      description: "Generated Over 20,000 Leads for Career Courses",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=100&q=80",
      metric: "+20,000 Leads",
      color: "text-purple-600 border-purple-200"
    },
    {
      title: "VSEP",
      description: "Achieved 2.5x Qualified Admissions in 1 year.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      logo: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=100&q=80",
      metric: "2.5x Inquiries",
      color: "text-blue-600 border-blue-200"
    },
    {
      title: "TSA College",
      description: "4,000+ Enrollments in Engineering Programs.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=100&q=80",
      metric: "4,000+ Enrollments",
      color: "text-purple-600 border-purple-200"
    }
  ];

  return (
    <section id="case-studies" className="bg-white py-12 px-6 flex flex-col items-center relative overflow-hidden">
      {/* Background tech mesh */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

      <Reveal>
        <h2 className="text-[#1a1a1a] font-extrabold text-3xl md:text-4xl mb-4 tracking-tight text-center relative z-10">
          Case Studies
        </h2>
      </Reveal>
      <Reveal>
        <p className="text-gray-500 font-medium text-sm md:text-base max-w-2xl mx-auto mb-12 italic opacity-80 text-center relative z-10">
          Check out our proven success stories with top educational institutions.
        </p>
      </Reveal>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {cases.map((cs, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            key={i}
            className="flex flex-col rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:shadow-black/5 transition-all bg-white pb-6 h-full p-4 group"
          >
            {/* Image section */}
            <div className="w-full h-[220px] overflow-hidden rounded-[1.5rem] relative">
              <img src={cs.image} alt={cs.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
            </div>

            {/* Content section */}
            <div className="pt-6 px-6 flex-1 flex flex-col items-start text-left">
              <h3 className="font-bold text-[#1a1a1a] text-lg lg:text-xl mb-3 tracking-tight group-hover:text-black transition-colors">{cs.title}</h3>
              <p className="text-gray-600 text-[15px] font-medium leading-snug mb-8 flex-1">
                {cs.description}
              </p>

              {/* Bottom tag section */}
              <div className="flex items-center justify-between w-full mt-auto">
                {/* Logo placeholder */}
                <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0 mr-4 border border-gray-200 p-0.5">
                  <img src={cs.logo} className="w-full h-full object-cover rounded-md grayscale group-hover:grayscale-0 transition-all" alt="logo" />
                </div>
                {/* Metric pill */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`px-4 py-1.5 rounded-full border-2 ${cs.color} bg-white flex items-center justify-center font-bold text-sm ml-auto whitespace-nowrap shadow-sm`}
                >
                  {cs.metric}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
