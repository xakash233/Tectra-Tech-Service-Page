import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { CalendlyEmbed } from './ui/CalendlyEmbed';
import { Lead101Widget } from './ui/Lead101Widget';

export function StickyForm() {
    const [step, setStep] = useState<'calendly' | 'lead101'>('calendly');

    useEffect(() => {
        function handleMessage(e: MessageEvent) {
            // Listen for Calendly success event
            if (e.data.event && e.data.event === 'calendly.event_scheduled') {
                setStep('lead101');
            }
        }
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return (
        <div className="bg-white w-full p-5 sm:p-6 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col relative overflow-hidden mt-0 lg:-ml-4 scale-[0.98]">
            {/* Trendy decorative background blobs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-gradient-to-br from-gray-100 to-transparent blur-3xl opacity-60 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-gradient-to-tr from-gray-50 to-transparent blur-3xl opacity-60 pointer-events-none"></div>

            <div className="mx-auto w-full flex flex-col relative z-10">
                <div className="mb-5 space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gray-50 border border-gray-100 mb-0 shadow-sm">
                        {step === 'calendly' ? (
                            <Calendar size={12} className="text-gray-600" />
                        ) : (
                            <CheckCircle size={12} className="text-green-600" />
                        )}
                        <span className="text-[10px] font-bold tracking-widest uppercase text-gray-600">
                            {step === 'calendly' ? 'Step 1: Pick a Time' : 'Step 2: Admission Details'}
                        </span>
                    </div>
                    <h2 className="text-[#1a1a1a] font-black text-2xl tracking-tight leading-[1.1]">
                        {step === 'calendly' ? 'Ready to Increase Admissions?' : 'Booking Confirmed!'}
                    </h2>
                    <p className="text-gray-500 text-[11px] leading-relaxed font-medium">
                        {step === 'calendly'
                            ? "Book a free strategy consultation directly below. We'll audit your digital footprint."
                            : "Awesome! Please share a few more institution details to prepare your custom audit."}
                    </p>
                </div>

                <div className="min-h-[580px] transition-all duration-500">
                    {step === 'calendly' ? (
                        <div className="animate-in fade-in duration-700">
                            <CalendlyEmbed />
                            <div className="mt-4 pt-4 border-t border-gray-50 text-center">
                                <button
                                    onClick={() => setStep('lead101')}
                                    className="text-[10px] font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest flex items-center justify-center gap-2 mx-auto"
                                >
                                    Already booked? Skip to details <ArrowRight size={10} />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <Lead101Widget />
                        </div>
                    )}
                </div>

                <p className="text-gray-400 text-center mt-4 text-[10px] font-medium flex items-center justify-center gap-1.5 leading-none">
                    <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                    100% Secure. Confidential.
                </p>
            </div>
        </div>
    );
}
