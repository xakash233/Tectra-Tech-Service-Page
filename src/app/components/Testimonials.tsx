import React from 'react';

const testimonials = [
  {
    id: 1,
    quote:
      'Tectra modified our digital presence completely. We moved from nowhere to the top rankings on Google. Their SEO expertise has significantly boosted our engagement and lead acquisition.',
    name: 'Aditya Verma',
    designation: 'Admissions Head',
    institution: 'Narayana Group of Schools',
  },
  {
    id: 2,
    quote:
      'The workflow is fantastic. The team is accessible at any time and they go above and beyond. Our enrollment inquiries tripled in just six months thanks to their strategic funnel.',
    name: 'Suresh Kumar',
    designation: 'Principal',
    institution: 'Velammal Educational Trust',
  },
  {
    id: 3,
    quote:
      'They managed our social media and ads with great precision. We saw substantial growth in our follower base and a massive improvement in our ROI on every rupee spent.',
    name: 'Meenakshi Iyer',
    designation: 'Marketing Director',
    institution: 'Chennai Institute of Technology',
  },
  {
    id: 4,
    quote:
      'Professional, data-driven, and completely committed to results. They understood what we were looking for when other vendors failed. Truly experts in education marketing.',
    name: 'Dr. Rajesh Khanna',
    designation: 'Director',
    institution: 'SRM Institute of Science and Technology',
  },
  {
    id: 5,
    quote:
      'Great experience working with Tectra. They are very collaborative and flexible. They treated every task with utmost professionalism. Highly recommended for any institution.',
    name: 'Priya Singh',
    designation: 'Academic Dean',
    institution: 'Amrita Vishwa Vidyapeetham',
  },
  {
    id: 6,
    quote:
      'Everything was handled efficiently. Their digital strategies are top-notch. Our admissions process is now much more streamlined thanks to their lead generation funnel.',
    name: 'Karthik Raja',
    designation: 'Managing Director',
    institution: 'Hindustan University',
  },
];

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-white py-12 md:py-16"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-[680px] mb-8 md:mb-12">
          <p
            className="text-[#666666] uppercase tracking-widest text-base md:text-lg mb-8"
            style={{ fontWeight: 700, letterSpacing: '0.12em' }}
          >
            What Our Clients Say
          </p>
          <h2
            id="testimonials-heading"
            className="text-[#1a1a1a]"
            style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em' }}
          >
            Results That Speak for Themselves
          </h2>
        </div>

        {/* Testimonial grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#e5e5e5]"
          role="list"
          aria-label="Client testimonials"
        >
          {testimonials.map(({ id, quote, name, designation, institution }) => (
            <blockquote
              key={id}
              role="listitem"
              className="border-b border-r border-[#e5e5e5] p-7 md:p-8 flex flex-col"
            >
              {/* Star Rating */}
              <div className="flex gap-0.5 mb-4" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#fbbc04]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              {/* Quote mark */}
              <span
                className="text-[#e0e0e0] mb-2 block leading-none"
                style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1 }}
                aria-hidden="true"
              >
                "
              </span>
              <p
                className="text-[#333333] mb-6 flex-1"
                style={{ fontSize: '0.9375rem', lineHeight: 1.75 }}
              >
                {quote}
              </p>
              <footer>
                <cite className="not-italic">
                  <p
                    className="text-[#1a1a1a] mb-0.5"
                    style={{ fontSize: '0.9375rem', fontWeight: 700 }}
                  >
                    {name}
                  </p>
                  <p
                    className="text-[#666666]"
                    style={{ fontSize: '0.8125rem', lineHeight: 1.5 }}
                  >
                    {designation}
                  </p>
                  <p
                    className="text-[#999999]"
                    style={{ fontSize: '0.8125rem', lineHeight: 1.5 }}
                  >
                    {institution}
                  </p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
