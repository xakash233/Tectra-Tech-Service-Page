import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { Calendar, Building2, Target, GraduationCap, Megaphone, BarChart3 } from 'lucide-react';

function CountUp({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 50,
    damping: 15,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );

  useEffect(() => {
    if (isInView) {
      spring.set(to);
    }
  }, [isInView, spring, to]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function Stats() {
  const stats = [
    {
      icon: <Calendar className="w-6 h-6" />,
      target: 10,
      suffix: "+",
      unit: "Years",
      label: "Experience in education"
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      target: 100,
      suffix: " Cr+",
      unit: "",
      label: "Ad Media Spend"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      target: 50,
      suffix: "+",
      unit: "",
      label: "Educational Brands"
    },
    {
      icon: <Target className="w-6 h-6" />,
      target: 2,
      suffix: "x",
      unit: "",
      label: "Increase in qualified inquiries"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      target: 50000,
      suffix: "+",
      unit: "",
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
    <section id="stats" className="bg-white py-16 px-6 flex flex-col items-center border-t border-gray-50 mt-4 overflow-hidden">

      {/* Pill header */}
      <Reveal>
        <div className="flex flex-col items-center gap-3 mb-12 group cursor-default">
          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-black group-hover:text-white transition-all duration-300 border border-gray-100 group-hover:scale-110">
            <BarChart3 size={20} />
          </div>
          <div className="inline-block border border-black rounded-full px-8 py-2 shadow-sm bg-black group-hover:shadow-lg transition-all duration-300">
            <h3 className="text-white font-bold text-base tracking-wide uppercase">Numbers that Speak</h3>
          </div>
        </div>
      </Reveal>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-[1230px] w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {stats.map((stat, i) => (
          <motion.div
            variants={item}
            whileHover={{ y: -8, scale: 1.02 }}
            key={i}
            className="border border-gray-100 rounded-[1.5rem] p-5 flex flex-col bg-white hover:border-black transition-all hover:shadow-xl group relative overflow-hidden"
          >
            <div className="mb-4 text-black group-hover:scale-110 transition-transform origin-left">
              {stat.icon}
            </div>

            <div className="flex flex-col mb-2 relative z-10">
              <div className="flex flex-wrap items-baseline gap-1 text-black">
                <span className="text-xl md:text-lg font-black tracking-tight leading-none">
                  <CountUp to={stat.target} />
                  {stat.suffix}
                </span>
                {stat.unit && <span className="text-[10px] font-bold uppercase tracking-wider">{stat.unit}</span>}
              </div>
            </div>

            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight leading-tight relative z-10 mt-1">
              {stat.label}
            </p>

            {/* Subtle background decoration */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gray-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
