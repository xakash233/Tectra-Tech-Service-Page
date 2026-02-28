import React from 'react';
import { motion } from 'framer-motion';
import {
    Home,
    Users,
    Target,
    Lightbulb,
    BarChart3,
    Briefcase,
    TrendingUp,
    MessageSquare,
    ChevronRight,
} from 'lucide-react';

const navItems = [
    { icon: <Home size={20} />, label: 'Home', href: '#main-content' },
    { icon: <Users size={20} />, label: 'Partners', href: '#partners' },
    { icon: <Target size={20} />, label: 'Challenges', href: '#problem' },
    { icon: <Lightbulb size={20} />, label: 'Solutions', href: '#solutions' },
    { icon: <BarChart3 size={20} />, label: 'Stats', href: '#stats' },
    { icon: <Briefcase size={20} />, label: 'Studies', href: '#case-studies' },
    { icon: <TrendingUp size={20} />, label: 'Process', href: '#process' },
    { icon: <MessageSquare size={20} />, label: 'FAQ', href: '#faq' },
];

export function FloatingNavigator() {
    return (
        <>
            {/* Desktop Side Rail */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[60] hidden xl:flex flex-col gap-3">
                {navItems.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.href}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ x: -10 }}
                        className="group relative flex items-center justify-end"
                    >
                        <span className="absolute right-12 px-3 py-1.5 rounded-lg bg-black text-white text-[11px] font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl flex items-center gap-2">
                            {item.label}
                            <ChevronRight size={12} className="text-gray-400" />
                        </span>
                        <div className="w-11 h-11 rounded-full bg-white border border-gray-100 shadow-lg flex items-center justify-center text-gray-400 group-hover:text-black group-hover:border-black transition-all duration-300 group-hover:shadow-2xl overflow-hidden relative">
                            <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                                {item.icon}
                            </div>
                            <div className="absolute inset-0 bg-gray-50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </div>
                    </motion.a>
                ))}
            </div>

        </>
    );
}
