import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How can digital marketing increase student admissions?",
      answer: "Digital marketing helps your institution reach the right students through search engines, social media, and targeted advertising. By attracting high-intent leads and nurturing them effectively, we help increase qualified admissions inquiries and enrollments."
    },
    {
      question: "Do you specialize in education marketing?",
      answer: "Yes, our strategies are exclusively configured and specialized for educational institutions, ed-tech platforms, schools, and overseas consultants."
    }
  ];

  return (
    <section className="bg-white py-12 px-6 flex flex-col items-center">
      <h2 className="text-[#1a1a1a] font-extrabold text-2xl md:text-3xl lg:text-4xl mb-3 tracking-tight text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-500 font-medium text-sm md:text-base mb-8 italic opacity-80 text-center max-w-lg mx-auto">
        Everything you need to know about our education-focused digital marketing solutions.
      </p>

      <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border-b border-gray-100 transition-all ${isOpen ? 'py-6 px-0' : 'py-4 px-0 cursor-pointer'} group`}
            >
              <button
                className="w-full flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <div className="flex items-center gap-4">
                  <span className="w-6 h-6 rounded-md bg-[#1a1a1a] text-white flex items-center justify-center text-xs font-bold leading-none shrink-0 group-hover:scale-105 transition-transform">
                    {index + 1}
                  </span>
                  <span className={`font-bold transition-colors ${isOpen ? 'text-[#1a1a1a] text-lg' : 'text-gray-800 text-base group-hover:text-black'}`}>
                    {faq.question}
                  </span>
                </div>
                {isOpen ? (
                  <Minus size={20} className="text-gray-400 shrink-0" />
                ) : (
                  <Plus size={20} className="text-gray-400 shrink-0" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out pl-10 ${isOpen ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}
              >
                <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}