import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { Target, ShieldCheck, Headphones, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

const frameworks = [
    {
        title: "Marketing Framework",
        subtitle: "DEMAND GENERATION",
        icon: <Target className="w-8 h-8" />,
        description: "The machine that identifies and attracts high-intent students through every digital touchpoint.",
        points: ["Performance SEO", "Omni-channel Ads", "Strategic Retargeting", "Admissions Funnels"],
        color: "from-blue-600 to-indigo-600",
        lightColor: "bg-blue-50"
    },
    {
        title: "Credibility Framework",
        subtitle: "TRUST & AUTHORITY",
        icon: <ShieldCheck className="w-8 h-8" />,
        description: "Establishing your institution as the primary choice by showcasing consistent excellence and proof.",
        points: ["Social Proof Systems", "Authority Branding", "Alumni Spotlights", "Reputation Mgmt"],
        color: "from-purple-600 to-violet-600",
        lightColor: "bg-purple-50"
    },
    {
        title: "Counselling Framework",
        subtitle: "ENROLMENT CONVERSION",
        icon: <Headphones className="w-8 h-8" />,
        description: "Bridging the gap between a lead and a student with systems that ensure no inquiry is lost.",
        points: ["CRM Automation", "Counsellor Training", "Nurture Playbooks", "Conversion Tracking"],
        color: "from-emerald-600 to-teal-600",
        lightColor: "bg-emerald-50"
    }
];

export function MarketingMethodology() {
    return (
        <section className="bg-white py-24 px-6 md:px-12 overflow-hidden border-y border-gray-50">
            <div className="max-w-[1230px] mx-auto">
                {/* Simplified Header for Clarity */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-gray-100 pb-12">
                    <div className="max-w-2xl">
                        <Reveal>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white shadow-lg">
                                    <Zap size={20} />
                                </div>
                                <p className="text-black font-black text-xs tracking-[0.2em] uppercase">The Admissions Ecosystem</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <h2 className="text-[#1a1a1a] font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[0.95] mb-6">
                                3 Pillars of <br />
                                <span className="text-gray-400">Predictable Growth</span>
                            </h2>
                        </Reveal>
                    </div>
                    <Reveal>
                        <p className="text-gray-500 text-lg font-medium max-w-sm md:text-right leading-relaxed italic">
                            "Most agencies only run ads. We build the entire infrastructure required to scale your institution."
                        </p>
                    </Reveal>
                </div>

                {/* 3-Pillar Interactive Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                    {frameworks.map((fw, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative flex flex-col h-full"
                        >
                            <div className={`h-full bg-gray-50 rounded-[2.5rem] p-8 md:p-10 border border-gray-100 transition-all duration-500 group-hover:bg-white group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] group-hover:border-black/5 group-hover:-translate-y-2 flex flex-col`}>

                                {/* Header Section */}
                                <div className={`w-16 h-16 rounded-[1.5rem] bg-white shadow-sm border border-gray-50 flex items-center justify-center text-black mb-8 group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-500`}>
                                    {fw.icon}
                                </div>

                                <div className="mb-8">
                                    <p className="text-gray-400 font-black text-[10px] tracking-[0.2em] uppercase mb-2">
                                        {fw.subtitle}
                                    </p>
                                    <h3 className="text-2xl font-black text-black tracking-tight leading-none">
                                        {fw.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600 text-[15px] leading-relaxed mb-10 font-medium">
                                    {fw.description}
                                </p>

                                {/* Features List */}
                                <div className="space-y-4 mt-auto">
                                    {fw.points.map((point, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-white border border-gray-100 flex items-center justify-center group-hover:border-black/10 transition-colors shadow-sm">
                                                <CheckCircle2 size={12} className="text-black" />
                                            </div>
                                            <span className="text-sm font-bold text-gray-800">
                                                {point}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Interactive Bottom Bar */}
                                <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between group-hover:border-black/5 transition-colors">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-black opacity-30 group-hover:opacity-100 transition-opacity">
                                        System 0{i + 1}
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-black transform -rotate-45 group-hover:rotate-0 group-hover:bg-black group-hover:text-white transition-all duration-500">
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative side accent visible only on hover */}
                            <div className={`absolute top-10 -left-1 w-2 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b ${fw.color}`} />
                        </motion.div>
                    ))}
                </div>

                {/* Closing Stat Bar */}
                <div className="mt-20 p-8 rounded-[2rem] bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="flex items-center gap-6 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
                            <Zap size={24} className="text-white" />
                        </div>
                        <div>
                            <p className="text-xs font-black tracking-[0.3em] uppercase opacity-50 mb-1">Total System Harmony</p>
                            <h4 className="text-2xl font-black tracking-tight">One Integrated Growth Engine</h4>
                        </div>
                    </div>
                    <a href="#mobile-book-section" className="px-8 py-4 bg-white text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-gray-100 transition-all shadow-xl relative z-10">
                        Audit Your Institution
                    </a>
                </div>
            </div>
        </section>
    );
}
