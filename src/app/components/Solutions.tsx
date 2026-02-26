import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import {
  Cpu,
  Globe,
  Smartphone,
  Layout,
  CheckCircle2,
  Cloud,
  Settings,
  Trophy
} from 'lucide-react';

export function Solutions() {
  const solutions = [
    {
      id: 'blockchain',
      icon: <Cpu className="w-6 h-6" />,
      title: "Blockchain Solutions",
      description: "Secure, decentralized systems tailored for educational verification and smart contracts."
    },
    {
      id: 'web-development',
      icon: <Globe className="w-6 h-6" />,
      title: "Web Development",
      description: "Premium, responsive portals and recruitment platforms with high conversion rates."
    },
    {
      id: 'mobile-app-development',
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Development",
      description: "Fast, intuitive iOS and Android applications for student engagement and learning."
    },
    {
      id: 'ui-ux',
      icon: <Layout className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "User-centric design that simplifies complex educational journeys for parents and students."
    },
    {
      id: 'qa-automation',
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "QA Automation",
      description: "Rigorous automated testing to ensure your institutional platforms are always flawless."
    },
    {
      id: 'cloud-computing',
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Computing",
      description: "Scalable, secure cloud infrastructure to handle high traffic during admission peaks."
    },
    {
      id: 'devops',
      icon: <Settings className="w-6 h-6" />,
      title: "DevOps",
      description: "Streamlined deployment pipelines for rapid updates and 99.9% system uptime."
    },
    {
      id: 'digital-360',
      icon: <Trophy className="w-6 h-6" />,
      title: "Digital 360",
      description: "Complete end-to-end digital transformation for modern educational brands."
    }
  ];

  return (
    <section id="services" className="bg-[#fafafa] py-12 px-6 flex flex-col items-center relative overflow-hidden">
      {/* Background tech mesh */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <Reveal>
        <h2 className="text-[#1a1a1a] font-extrabold text-3xl md:text-4xl mb-12 tracking-tight text-center relative z-10">
          Solutions That Drive Results
        </h2>
      </Reveal>

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10">
        {solutions.map((sol) => (
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            key={sol.id}
            id={sol.id}
            className="flex flex-row items-start p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="w-12 h-12 bg-gray-50 text-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 mr-5 border border-gray-100 group-hover:bg-black group-hover:text-white transition-colors">
              {sol.icon}
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-[#1a1a1a] text-lg mb-2">{sol.title}</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed">
                {sol.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
