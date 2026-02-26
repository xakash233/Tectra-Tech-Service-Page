import React from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight, Sparkles } from 'lucide-react';

type FormData = {
    fullName: string;
    institutionName: string;
    email: string;
    phone: string;
    message: string;
};

export function StickyForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm<FormData>({ mode: 'onBlur' });

    const onSubmit = async (data: FormData) => {
        // Simulate async submission
        await new Promise((resolve) => setTimeout(resolve, 800));
        console.log('Form submitted:', data);

        // Redirect to Calendly
        window.open('https://calendly.com/heyswuu/new-meeting', '_blank');
        reset();
    };

    return (
        <div className="bg-white w-full p-5 sm:p-6 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col relative overflow-hidden mt-0 lg:-ml-4 scale-[0.98]">
            {/* Trendy decorative background blobs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-gradient-to-br from-gray-100 to-transparent blur-3xl opacity-60 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-gradient-to-tr from-gray-50 to-transparent blur-3xl opacity-60 pointer-events-none"></div>

            <div className="mx-auto w-full flex flex-col relative z-10">
                <div className="mb-5 space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gray-50 border border-gray-100 mb-0 shadow-sm">
                        <Sparkles size={12} className="text-gray-600" />
                        <span className="text-[10px] font-bold tracking-widest uppercase text-gray-600">Get Started</span>
                    </div>
                    <h2 className="text-[#1a1a1a] font-black text-2xl tracking-tight leading-[1.1]">
                        Ready to Increase Admissions?
                    </h2>
                    <p className="text-gray-500 text-[11px] leading-relaxed font-medium">
                        Book a free strategy consultation. We'll audit your current digital presence at no cost.
                    </p>
                </div>

                {isSubmitSuccessful ? (
                    <div className="text-center py-10 bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                        <div className="w-14 h-14 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                            <span className="text-xl font-bold">✓</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Consultation Booked</h3>
                        <p className="text-gray-500 text-xs px-6 leading-relaxed font-medium">
                            Thank you. Our senior strategist will be in touch within 24 hours.
                        </p>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        className="flex flex-col gap-3.5 bg-white p-5 sm:p-6 rounded-[1.5rem] border border-gray-100/80 shadow-[0_12px_40px_rgb(0,0,0,0.05)] relative"
                    >
                        <div className="space-y-3">
                            <div className="relative group">
                                <label htmlFor="fullName" className="block text-[10px] font-bold text-gray-600 mb-1 transition-colors group-focus-within:text-black uppercase tracking-tight">Full Name</label>
                                <input
                                    id="fullName"
                                    type="text"
                                    placeholder="e.g. Dr. Rajesh Sharma"
                                    className={`w-full h-10 px-4 rounded-xl bg-gray-50/50 border-2 transition-all duration-300 outline-none focus:bg-white text-xs ${errors.fullName ? 'border-red-200 focus:border-red-400 ring-2 ring-red-50' : 'border-transparent focus:border-gray-900 ring-2 ring-transparent focus:ring-gray-100 text-gray-900 placeholder:text-gray-400'}`}
                                    {...register('fullName', { required: 'Name is required' })}
                                />
                                {errors.fullName && <p className="text-red-500 text-[10px] font-medium mt-1 ml-1">{errors.fullName.message}</p>}
                            </div>

                            <div className="relative group">
                                <label htmlFor="institutionName" className="block text-[10px] font-bold text-gray-600 mb-1 transition-colors group-focus-within:text-black uppercase tracking-tight">Institution Name</label>
                                <input
                                    id="institutionName"
                                    type="text"
                                    placeholder="e.g. Stanford University"
                                    className={`w-full h-10 px-4 rounded-xl bg-gray-50/50 border-2 transition-all duration-300 outline-none focus:bg-white text-xs ${errors.institutionName ? 'border-red-200 focus:border-red-400 ring-2 ring-red-50' : 'border-transparent focus:border-gray-900 ring-2 ring-transparent focus:ring-gray-100 text-gray-900 placeholder:text-gray-400'}`}
                                    {...register('institutionName', { required: 'Institution is required' })}
                                />
                                {errors.institutionName && <p className="text-red-500 text-[10px] font-medium mt-1 ml-1">{errors.institutionName.message}</p>}
                            </div>

                            <div className="relative group">
                                <label htmlFor="email" className="block text-[10px] font-bold text-gray-600 mb-1 transition-colors group-focus-within:text-black uppercase tracking-tight">Work Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="you@institution.edu"
                                    className={`w-full h-10 px-4 rounded-xl bg-gray-50/50 border-2 transition-all duration-300 outline-none focus:bg-white text-xs ${errors.email ? 'border-red-200 focus:border-red-400 ring-2 ring-red-50' : 'border-transparent focus:border-gray-900 ring-2 ring-transparent focus:ring-gray-100 text-gray-900 placeholder:text-gray-400'}`}
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Valid email required' }
                                    })}
                                />
                                {errors.email && <p className="text-red-500 text-[10px] font-medium mt-1 ml-1">{errors.email.message}</p>}
                            </div>

                            <div className="relative group">
                                <label htmlFor="phone" className="block text-[10px] font-bold text-gray-600 mb-1 transition-colors group-focus-within:text-black uppercase tracking-tight">Phone Number</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    className={`w-full h-10 px-4 rounded-xl bg-gray-50/50 border-2 transition-all duration-300 outline-none focus:bg-white text-xs ${errors.phone ? 'border-red-200 focus:border-red-400 ring-2 ring-red-50' : 'border-transparent focus:border-gray-900 ring-2 ring-transparent focus:ring-gray-100 text-gray-900 placeholder:text-gray-400'}`}
                                    {...register('phone', { required: 'Phone is required' })}
                                />
                                {errors.phone && <p className="text-red-500 text-[10px] font-medium mt-1 ml-1">{errors.phone.message}</p>}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-12 mt-2 rounded-[1rem] flex items-center justify-center gap-2 bg-gradient-to-r from-gray-900 to-black text-white hover:from-black hover:to-gray-800 disabled:opacity-70 transition-all duration-300 shadow-lg shadow-gray-900/10 hover:shadow-xl hover:-translate-y-0.5"
                        >
                            <span className="font-bold text-xs tracking-wide">Secure Strategy Call</span>
                            {isSubmitting ? (
                                <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <ArrowRight size={14} />
                            )}
                        </button>
                        <p className="text-gray-400 text-center mt-1 text-[10px] font-medium flex items-center justify-center gap-1.5 leading-none">
                            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                            100% Secure. Confidential.
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}
