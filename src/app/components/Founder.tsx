import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Quote, Instagram, Linkedin } from 'lucide-react';

const employees = [
  {
    name: "Nikita",
    designation: "Senior Marketing Consultant",
    quote: "Helping Educational Institutions Succeed is my Passion and Mission.",
    bio: "Nikita is a dynamic marketing strategist specializing in the education sector, driving student enrollment growth through custom digital campaigns.",
    image: "/employee/Nikita senior marketing consulting.png",
    profileUrl: "https://www.linkedin.com/in/nikitakharche/",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/in/nikitakharche/" }
    ]
  },
  {
    name: "Harikaran",
    designation: "Video Editor",
    quote: "Storytelling through visuals that capture the heart of every campus.",
    bio: "Harikaran transforms raw footage into compelling cinematic stories that help parents and students connect emotionally with your institution.",
    image: "/employee/Harikaran_video_editor.png"
  },
  {
    name: "Sabeetha",
    designation: "Social Media Marketing",
    quote: "Creating digital communities where education and engagement meet.",
    bio: "Sabeetha manages vibrant social channels, turning student curiosity into community and prospective inquiries into actual admissions.",
    image: "/employee/sabeetha social media marketing.png"
  },
  {
    name: "Vijay Kumar",
    designation: "Senior Full Stack Developer",
    quote: "Engineering complex solutions for modern educational challenges.",
    bio: "Vijay oversees advanced technical implementations, from high-performance web systems to data-driven enrollment management tools.",
    image: "/employee/vijay_kumar senior_full_stack_developer.png"
  },
  {
    name: "Vishwa",
    designation: "SEO Specialist",
    quote: "Making sure your institution is always first in line for discovery.",
    bio: "Vishwa masters search algorithms to ensure your website remains at the top of results, capturing organic traffic where it matters most.",
    image: "/employee/vishwa seo.png"
  },
  {
    name: "Jane",
    designation: "Graphic Designer",
    quote: "Visualizing excellence through clean, modern, and impactful design.",
    bio: "Jane brings your brand to life with stunning visuals, ensuring every marketing touchpoint reflects the premium quality of your institution.",
    image: "/employee/jane graphic designer.png"
  },
  {
    name: "Meena",
    designation: "UI/UX Designer",
    quote: "Crafting intuitive digital experiences that guide students effortlessly.",
    bio: "Meena designs beautiful, user-centric interfaces that make navigating your institution's digital platforms a joy for prospective students.",
    image: "/employee/Meena Ui:Ux Designer.png"
  },
  {
    name: "Nishanth",
    designation: "Creative Director",
    quote: "Defining the visual language of modern education.",
    bio: "Nishanth leads our creative vision, ensuring every campaign and asset speaks with a unique, powerful voice that resonates with your audience.",
    image: "/employee/Nishanth Creative director.png"
  },
  {
    name: "Shaffna",
    designation: "Mobile App Developer",
    quote: "Ensuring every digital touchpoint is flawless and reliable.",
    bio: "Shaffna meticulously tests our platforms to guarantee a seamless, bug-free experience for every student and parent visiting your site.",
    image: "/employee/Shaffna QA.png"
  },
  {
    name: "Akash",
    designation: "Full Stack Developer",
    quote: "Building robust digital foundations for seamless educational experiences.",
    bio: "Akash focuses on the technical excellence of our platforms, ensuring every institution's digital presence is fast, secure, and user-friendly.",
    image: "/employee/Akash FULL STACK DEVELOPER .png"
  }
];

export function Founder() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    })
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % employees.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + employees.length) % employees.length);
  };

  const setIndex = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const current = employees[currentIndex];

  return (
    <section className="bg-white py-12 px-6 overflow-hidden relative">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-gray-400 uppercase tracking-[0.2em] text-xs font-bold mb-2">Core Team</p>
          <h2 className="text-[#1a1a1a] font-black text-3xl md:text-4xl tracking-tighter">The Minds Behind Your Growth</h2>
        </motion.div>

        <div className="relative min-h-[400px] md:min-h-[480px] flex items-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              className="w-full flex flex-col md:flex-row items-center bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden"
            >
              {/* Image Section with Hover Reveal */}
              <div className="w-full md:w-[40%] relative group/img overflow-hidden bg-gray-50 h-[300px] md:h-[480px]">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="flex-1 p-6 md:p-10 flex flex-col justify-center relative">
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3"
                  >
                    <div className="h-0.5 w-6 bg-black"></div>
                    <span className="text-black font-black text-[10px] uppercase tracking-widest">{current.designation}</span>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[#1a1a1a] font-black text-4xl md:text-5xl tracking-tighter mb-2"
                  >
                    {current.name}
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative py-4"
                  >
                    <Quote size={32} className="absolute -left-4 -top-1 opacity-5 text-black" />
                    <p className="text-[#1a1a1a] font-extrabold text-xl md:text-2xl italic leading-tight">
                      "{current.quote}"
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-500 font-medium text-sm max-w-lg leading-relaxed"
                  >
                    {current.bio}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-4 flex flex-col sm:flex-row items-center gap-4"
                  >
                    <a
                      href={current.profileUrl || "#contact"}
                      target={current.profileUrl ? "_blank" : undefined}
                      rel={current.profileUrl ? "noopener noreferrer" : undefined}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#1a1a1a] text-white px-8 py-3.5 rounded-xl font-black text-xs hover:bg-black transition-all hover:shadow-lg hover:-translate-y-1 group"
                    >
                      Connect with {current.name}
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>

                    {current.socials && (
                      <div className="flex items-center gap-3">
                        {current.socials.map((social, idx) => (
                          <a
                            key={idx}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-all hover:scale-110"
                          >
                            {social.platform === 'instagram' ? <Instagram size={18} /> : <Linkedin size={18} />}
                          </a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Floating Controls */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:-left-6 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:bottom-auto flex md:flex-col gap-3 z-20">
            <button
              onClick={handlePrev}
              className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Thumbnail Progress Bar - More compact */}
        <div className="flex flex-wrap justify-center gap-2 mt-12 max-w-xl mx-auto px-4">
          {employees.map((emp, i) => (
            <button
              key={emp.name}
              onClick={() => setIndex(i)}
              className={`relative overflow-hidden group h-10 rounded-lg transition-all duration-500 ${currentIndex === i ? 'w-20' : 'w-10 opacity-40 hover:opacity-100'}`}
            >
              <img src={emp.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className={`absolute inset-0 border-2 rounded-lg transition-colors ${currentIndex === i ? 'border-black' : 'border-transparent'}`}></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

