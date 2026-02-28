import React, { useState } from 'react';
import { Minus, Plus, MessageSquare } from 'lucide-react';

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
      <div className="flex flex-col items-center gap-3 mb-8 group cursor-default">
        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-black group-hover:text-white transition-all duration-300 border border-gray-100 group-hover:-rotate-6">
          <MessageSquare size={20} />
        </div>
        <p
          className="text-[#666666] tracking-[0.2em] uppercase text-[12px] md:text-[13px] group-hover:text-black transition-colors duration-300"
          style={{ fontWeight: 800 }}
        >
          Common Queries
        </p>
        <h2 className="text-[#1a1a1a] font-extrabold text-[28px] md:text-[38px] tracking-tight text-center mt-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 font-medium text-[13px] md:text-sm mt-1 italic opacity-80 text-center max-w-lg mx-auto">
          Everything you need to know about our education-focused digital marketing solutions.
        </p>
      </div>

      <div className="w-full flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border border-gray-100 mb-3 transition-all ${isOpen ? 'bg-[#fafafa] shadow-md' : 'bg-white hover:bg-gray-50 cursor-pointer'} group`}
            >
              <button
                className="w-full flex items-center justify-between text-left focus:outline-none p-5"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-xl bg-[#1a1a1a] text-white flex items-center justify-center text-xs font-bold leading-none shrink-0 group-hover:scale-105 transition-transform">
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
                className={`overflow-hidden transition-all duration-300 ease-in-out pl-12 pr-6 ${isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'}`}
              >
                <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section >
  );
}