import React from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight } from 'lucide-react';

type FormData = {
  fullName: string;
  institutionName: string;
  email: string;
  phone: string;
  message: string;
};

function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-white"
        style={{ fontSize: '0.875rem', fontWeight: 600 }}
      >
        {label}{' '}
        <span className="text-[#aaaaaa]" aria-hidden="true">
          *
        </span>
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          aria-live="polite"
          className="text-[#ff6b6b]"
          style={{ fontSize: '0.8125rem', fontWeight: 500 }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

export function FinalCTA() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({ mode: 'onBlur' });

  const onSubmit = async (data: FormData) => {
    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log('Form submitted:', data);
    reset();
  };

  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="bg-black py-24 md:py-32"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: CTA copy */}
          <div>
            <p
              className="text-[#666666] uppercase tracking-widest text-sm mb-5"
              style={{ fontWeight: 600, letterSpacing: '0.12em' }}
            >
              Get Started
            </p>
            <h2
              id="cta-heading"
              className="text-white mb-8"
              style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em' }}
            >
              Ready to Increase Admissions This Year?
            </h2>
            <p
              className="text-[#999999] mb-10"
              style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}
            >
              Book a free 30-minute strategy consultation. We'll audit your current 
              digital presence, identify the biggest gaps, and walk you through a 
              tailored growth plan — at no cost, no obligation.
            </p>

            {/* What to expect */}
            <div className="mb-10">
              <p
                className="text-[#666666] uppercase tracking-widest text-xs mb-4"
                style={{ fontWeight: 600, letterSpacing: '0.1em' }}
              >
                What happens next
              </p>
              <ul className="flex flex-col gap-4" aria-label="Consultation process">
                {[
                  { step: '1', text: 'Fill in your details on this form' },
                  { step: '2', text: 'We\'ll review your institution\'s current digital presence' },
                  { step: '3', text: 'A strategist calls you within 24 business hours' },
                  { step: '4', text: 'Receive your free audit + growth recommendations' },
                ].map(({ step, text }) => (
                  <li key={step} className="flex items-start gap-4">
                    <span
                      className="w-7 h-7 flex items-center justify-center border border-[#333333] shrink-0 text-[#666666]"
                      style={{ fontSize: '0.75rem', fontWeight: 700 }}
                      aria-label={`Step ${step}`}
                    >
                      {step}
                    </span>
                    <span
                      className="text-[#999999] pt-0.5"
                      style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}
                    >
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Alternative contact */}
            <div className="border-t border-[#1a1a1a] pt-8">
              <p
                className="text-[#666666] text-sm mb-3"
                style={{ fontWeight: 500 }}
              >
                Prefer to reach out directly?
              </p>
              <a
                href="mailto:strategy@edugrowth.in"
                className="text-white hover:text-[#cccccc] transition-colors inline-flex items-center gap-2"
                style={{ fontSize: '1rem', fontWeight: 600 }}
              >
                strategy@edugrowth.in
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="border border-[#1a1a1a]" role="complementary" aria-label="Consultation request form">
            <div className="border-b border-[#1a1a1a] px-7 py-5">
              <p
                className="text-white"
                style={{ fontSize: '1rem', fontWeight: 700 }}
              >
                Book Your Free Strategy Consultation
              </p>
              <p
                className="text-[#666666]"
                style={{ fontSize: '0.8125rem' }}
              >
                Free audit included. Response within 24 hours.
              </p>
            </div>

            <div className="px-7 py-7">
              {isSubmitSuccessful ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="text-center py-12"
                >
                  <div
                    className="w-12 h-12 border-2 border-white flex items-center justify-center mx-auto mb-5"
                    aria-hidden="true"
                  >
                    <span className="text-white" style={{ fontSize: '1.25rem' }}>✓</span>
                  </div>
                  <p
                    className="text-white mb-2"
                    style={{ fontSize: '1.0625rem', fontWeight: 700 }}
                  >
                    Submission Received
                  </p>
                  <p
                    className="text-[#666666]"
                    style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}
                  >
                    Thank you. A strategist will contact you within 24 business hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  aria-label="Strategy consultation request"
                  className="flex flex-col gap-5"
                >
                  <FormField
                    id="fullName"
                    label="Full Name"
                    error={errors.fullName?.message}
                  >
                    <input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      aria-required="true"
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      aria-invalid={!!errors.fullName}
                      placeholder="Dr. Rajesh Sharma"
                      className={`form-input ${errors.fullName ? 'error' : ''}`}
                      {...register('fullName', {
                        required: 'Full name is required.',
                        minLength: { value: 2, message: 'Name must be at least 2 characters.' },
                      })}
                    />
                  </FormField>

                  <FormField
                    id="institutionName"
                    label="Institution Name"
                    error={errors.institutionName?.message}
                  >
                    <input
                      id="institutionName"
                      type="text"
                      autoComplete="organization"
                      aria-required="true"
                      aria-describedby={errors.institutionName ? 'institutionName-error' : undefined}
                      aria-invalid={!!errors.institutionName}
                      placeholder="Sunrise University"
                      className={`form-input ${errors.institutionName ? 'error' : ''}`}
                      {...register('institutionName', {
                        required: 'Institution name is required.',
                      })}
                    />
                  </FormField>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      id="email"
                      label="Email Address"
                      error={errors.email?.message}
                    >
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        aria-required="true"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-invalid={!!errors.email}
                        placeholder="you@institution.edu"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        {...register('email', {
                          required: 'Email address is required.',
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Please enter a valid email address.',
                          },
                        })}
                      />
                    </FormField>

                    <FormField
                      id="phone"
                      label="Phone Number"
                      error={errors.phone?.message}
                    >
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        aria-required="true"
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        aria-invalid={!!errors.phone}
                        placeholder="+91 98765 43210"
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                        {...register('phone', {
                          required: 'Phone number is required.',
                          pattern: {
                            value: /^[+\d\s\-()]{8,15}$/,
                            message: 'Please enter a valid phone number.',
                          },
                        })}
                      />
                    </FormField>
                  </div>

                  <FormField
                    id="message"
                    label="Tell Us About Your Goals"
                    error={errors.message?.message}
                  >
                    <textarea
                      id="message"
                      rows={4}
                      aria-required="true"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-invalid={!!errors.message}
                      placeholder="Which programmes do you want to grow? What's your current monthly admissions target?"
                      className={`form-input resize-none ${errors.message ? 'error' : ''}`}
                      {...register('message', {
                        required: 'Please tell us about your admissions goals.',
                        minLength: { value: 20, message: 'Please provide at least 20 characters.' },
                      })}
                    />
                  </FormField>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-disabled={isSubmitting}
                    className="w-full min-h-[52px] flex items-center justify-center gap-2 bg-white text-black hover:bg-[#f0f0f0] disabled:opacity-60 disabled:cursor-not-allowed transition-colors mt-1"
                    style={{ fontWeight: 700, fontSize: '1rem' }}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"
                          aria-hidden="true"
                        />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Book Free Consultation
                        <ArrowRight size={17} aria-hidden="true" />
                      </>
                    )}
                  </button>

                  <p
                    className="text-[#555555] text-center"
                    style={{ fontSize: '0.75rem', lineHeight: 1.6 }}
                  >
                    No spam. No commitment. We respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
