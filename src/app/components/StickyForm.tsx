import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
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
        <div className="bg-white w-full p-4 sm:p-5 rounded-[1.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col relative overflow-hidden mt-0 lg:ml-2 scale-[0.96]">
            {/* Trendy decorative background blobs */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-gradient-to-br from-gray-100 to-transparent blur-3xl opacity-60 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-gradient-to-tr from-gray-50 to-transparent blur-3xl opacity-60 pointer-events-none"></div>

            <div className="mx-auto w-full flex flex-col relative z-10">
                <div className="mb-4 space-y-1.5">
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gray-50 border border-gray-100 mb-0 shadow-sm">
                        {step === 'calendly' ? (
                            <Calendar size={10} className="text-gray-600" />
                        ) : (
                            <CheckCircle size={10} className="text-green-600" />
                        )}
                        <span className="text-[9px] font-bold tracking-widest uppercase text-gray-600">
                            {step === 'calendly' ? 'Step 1: Pick a Time' : 'Step 2: Admission Details'}
                        </span>
                    </div>
                    <h2 className="text-[#1a1a1a] font-black text-xl tracking-tight leading-[1.1]">
                        {step === 'calendly' ? 'Ready to Increase Admissions?' : 'Booking Confirmed!'}
                    </h2>
                    <p className="text-gray-500 text-[10px] leading-relaxed font-medium">
                        {step === 'calendly'
                            ? "Book a free strategy consultation directly below. We'll audit your digital footprint."
                            : "Awesome! Please share a few more institution details to prepare your custom audit."}
                    </p>
                </div>

                <div className="min-h-[500px] transition-all duration-500">
                    {step === 'calendly' ? (
                        <div className="animate-in fade-in duration-700">
                            <CalendlyEmbed />
                            <div className="mt-2 pt-2 border-t border-gray-50 text-center">
                                <button
                                    onClick={() => setStep('lead101')}
                                    className="text-[9px] font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest flex items-center justify-center gap-1.5 mx-auto"
                                >
                                    Already booked? Skip to details <ArrowRight size={9} />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col h-full">
                            <Lead101Widget />
                            <div className="mt-auto pt-2 border-t border-gray-50 text-center">
                                <button
                                    onClick={() => setStep('calendly')}
                                    className="text-[9px] font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest flex items-center justify-center gap-1.5 mx-auto -mt-2"
                                >
                                    <ArrowLeft size={9} /> Go back to booking
                                </button>
                            </div>
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
