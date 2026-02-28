import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, TrendingUp, Users, Target, ChevronDown, Search, Link as LinkIcon, Image as ImageIcon, ExternalLink, HelpCircle, MoreVertical, Calendar, Info, Phone, MessageSquare, MapPin, MousePointer2 } from 'lucide-react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    Area,
    AreaChart
} from 'recharts';

function BusinessProfilePerformance() {
    const data = [
        { month: 'Mar 2025', interactions: 410 },
        { month: 'Apr 2025', interactions: 620 },
        { month: 'May 2025', interactions: 953 },
        { month: 'Jun 2025', interactions: 820 },
        { month: 'Jul 2025', interactions: 940 },
        { month: 'Aug 2025', interactions: 1170 },
    ];

    const tabs = [
        { id: 'overview', label: 'Overview', icon: null },
        { id: 'calls', label: 'Calls', icon: <Phone size={14} /> },
        { id: 'chat', label: 'Chat clicks', icon: <MessageSquare size={14} /> },
        { id: 'bookings', label: 'Bookings', icon: <Calendar size={14} /> },
        { id: 'directions', label: 'Directions', icon: <MapPin size={14} /> },
        { id: 'website', label: 'Website clicks', icon: <MousePointer2 size={14} /> },
    ];

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden font-sans max-w-4xl mx-auto mt-12 mb-16">
            {/* Header */}
            <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-4">
                    <button className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
                        <ArrowLeft size={20} />
                    </button>
                    <h2 className="text-base font-medium text-gray-800">Performance</h2>
                </div>
                <button className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                    <MoreVertical size={20} />
                </button>
            </div>

            {/* Time Period Select */}
            <div className="p-4 flex justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 cursor-pointer shadow-sm">
                    <Calendar size={16} className="text-gray-500" />
                    <span>Mar 2025–Aug 2025</span>
                    <ChevronDown size={16} className="text-gray-400 ml-2" />
                </div>
            </div>

            {/* Tabs */}
            <div className="px-2 overflow-x-auto no-scrollbar border-b border-gray-100">
                <div className="flex gap-4 min-w-max px-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`py-3 px-2 text-xs font-medium border-b-2 transition-all flex items-center gap-2 ${tab.id === 'overview' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Interaction Card */}
            <div className="p-6 md:p-8">
                <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-normal text-gray-900 leading-tight">4,913</span>
                        <Info size={16} className="text-gray-400 cursor-help" />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Business Profile interactions</p>
                </div>

                {/* Main Interaction Graph */}
                <div className="h-[250px] md:h-[350px] w-full mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorInteractions" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#4285f4" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#4285f4" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={false} stroke="#f0f0f0" />
                            <XAxis
                                dataKey="month"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 10, fill: '#9ca3af' }}
                                dy={10}
                            />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} dx={-10} ticks={[300, 600, 900, 1200]} domain={[0, 1400]} />
                            <Tooltip
                                content={({ active, payload, label }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className="relative">
                                                <div className="bg-[#4285f4] text-white px-3 py-2 rounded-lg shadow-lg flex flex-col items-center min-w-[80px]">
                                                    <span className="text-lg font-bold">{payload[0].value}</span>
                                                    <span className="text-[10px] font-medium">{label}</span>
                                                </div>
                                                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#4285f4] mx-auto"></div>
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                                position={{ y: 50 }}
                            />
                            <Area
                                type="monotone"
                                dataKey="interactions"
                                stroke="#4285f4"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorInteractions)"
                                dot={{ r: 5, fill: '#fff', stroke: '#4285f4', strokeWidth: 2 }}
                                activeDot={{ r: 7, fill: '#4285f4', stroke: '#fff', strokeWidth: 2 }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="p-4 bg-gray-50/50 text-[10px] text-gray-400 text-center uppercase tracking-widest font-bold">
                * Based on actual Google Business Profile Performance Data
            </div>
        </div>
    );
}

function ProfessionalKeywordTable() {
    return (
        <div className="mt-16 bg-white rounded-[2rem] p-6 md:p-10 border border-gray-100 shadow-sm overflow-hidden">
            <div className="mb-8 text-center md:text-left">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">KEYWORD PERFORMANCE SPOTLIGHT</h3>
                <h2 className="text-xl md:text-2xl font-black text-black">Organic Ranking & SERP Ownership Breakdown</h2>
            </div>

            <div className="overflow-x-auto no-scrollbar -mx-6 md:mx-0">
                <table className="w-full min-w-[1000px] border-collapse">
                    <thead>
                        <tr className="border-b border-gray-100">
                            <th className="text-left py-4 px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest sticky left-0 bg-white z-10">Keyword</th>
                            <th className="text-center py-4 px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Intent</th>
                            <th className="text-center py-4 px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Pos.</th>
                            <th className="text-left py-4 px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">SERP Features</th>
                            <th className="text-right py-4 px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Traffic</th>
                            <th className="text-right py-4 px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Traffic %</th>
                            <th className="text-right py-4 px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Volume</th>
                            <th className="text-center py-4 px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">KD %</th>
                            <th className="text-left py-4 px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Target URL</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {[
                            { kw: "clat exam syllabus", intent: "I", pos: 1, traffic: 135, tPerc: "0.55", vol: "8.1K", kd: 26, url: "vmls.edu.in/blogs/clat-exam-importance-eligibility", kdColor: "bg-emerald-400" },
                            { kw: "best law university in india", intent: "C", pos: 1, traffic: 126, tPerc: "0.51", vol: "3.6K", kd: 31, url: "vmls.edu.in/blogs/top-law-colleges-india", kdColor: "bg-amber-400" },
                            { kw: "clat exam eligibility", intent: "I", pos: 1, traffic: 324, tPerc: "1.32", vol: "2.9K", kd: 24, url: "vmls.edu.in/blogs/clat-exam-importance-eligibility", kdColor: "bg-emerald-400" },
                            { kw: "law subjects", intent: "I", pos: 1, traffic: 66, tPerc: "0.26", vol: "2.9K", kd: 12, url: "vmls.edu.in/blogs/subjects-in-law-courses", kdColor: "bg-emerald-400" },
                            { kw: "what is llb", intent: "I", pos: 1, traffic: 4, tPerc: "0.01", vol: "2.4K", kd: 30, url: "vmls.edu.in/blogs/what-is-llb-degree", kdColor: "bg-amber-400" }
                        ].map((row, i) => (
                            <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group text-xs md:text-sm">
                                <td className="py-4 px-4 font-bold text-gray-900 sticky left-0 bg-white group-hover:bg-gray-50 z-10">{row.kw}</td>
                                <td className="py-4 px-4 text-center">
                                    <span className={`w-5 h-5 flex items-center justify-center rounded-sm text-[10px] font-black mx-auto shadow-sm ${row.intent === 'C' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'}`}>
                                        {row.intent}
                                    </span>
                                </td>
                                <td className="py-4 px-4 text-center font-black text-gray-900">{row.pos}</td>
                                <td className="py-4 px-4">
                                    <div className="flex gap-2 text-gray-300">
                                        <Search size={14} className="group-hover:text-blue-500" />
                                        <LinkIcon size={14} className="group-hover:text-[#8E1E1D]" />
                                        <ImageIcon size={14} className="group-hover:text-green-500" />
                                    </div>
                                </td>
                                <td className="py-4 px-4 text-right font-bold text-gray-900">{row.traffic}</td>
                                <td className="py-4 px-4 text-right text-gray-500 font-medium">{row.tPerc}%</td>
                                <td className="py-4 px-4 text-right text-gray-900 font-bold">{row.vol}</td>
                                <td className="py-4 px-4 text-center">
                                    <div className="flex items-center justify-center gap-2 font-bold text-gray-900">
                                        {row.kd}
                                        <div className={`w-2 h-2 rounded-full ${row.kdColor}`} />
                                    </div>
                                </td>
                                <td className="py-4 px-4">
                                    <div className="max-w-[150px] truncate text-[11px] text-gray-400 font-medium">{row.url}</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-8 flex justify-between items-center text-[10px] font-black text-gray-400 uppercase tracking-widest border-t border-gray-50 pt-8 no-italic">
                <span className="flex items-center gap-2 italic">Source: SEMrush Organic Research Dashboard</span>
                <span className="text-green-500 flex items-center gap-1.5 font-bold">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Verified Performance: Stable Q3 2025
                </span>
            </div>
        </div>
    );
}

function SemrushKeywordTable() {
    const data = [
        { kw: "clat exam syllabus", intent: "I", traffic: 135, tPerc: "0.55", vol: "8.1K", kd: 26, kdColor: "bg-emerald-400", url: "vmls.edu.in/blogs/clat-exam-importance-eligibility", serpPlus: "+3" },
        { kw: "best law university in india", intent: "C", traffic: 0, tPerc: "< 0.01", vol: "3.6K", kd: 31, kdColor: "bg-amber-400", url: "vmls.edu.in/blogs/top-law-colleges-india", serpPlus: "+3" },
        { kw: "best law university in india", intent: "C", traffic: 126, tPerc: "0.51", vol: "3.6K", kd: 31, kdColor: "bg-amber-400", url: "vmls.edu.in/blogs/top-law-colleges-india", serpPlus: "+3" },
        { kw: "best law university in india", intent: "C", traffic: 35, tPerc: "0.14", vol: "3.6K", kd: 31, kdColor: "bg-amber-400", url: "vmls.edu.in/blogs/top-law-colleges-india", serpPlus: "+3" },
        { kw: "top law universities in india", intent: "CI", traffic: 0, tPerc: "< 0.01", vol: "3.6K", kd: 34, kdColor: "bg-amber-400", url: "vmls.edu.in/blogs/top-law-colleges-india", serpPlus: "+2" },
        { kw: "clat exam eligibility", intent: "I", traffic: 9, tPerc: "0.03", vol: "2.9K", kd: 24, kdColor: "bg-emerald-400", url: "vmls.edu.in/blogs/clat-exam-importance-eligibility" },
        { kw: "clat exam eligibility", intent: "I", traffic: 48, tPerc: "0.19", vol: "2.9K", kd: 24, kdColor: "bg-emerald-400", url: "vmls.edu.in/blogs/clat-exam-importance-eligibility" },
        { kw: "clat exam eligibility", intent: "I", traffic: 324, tPerc: "1.32", vol: "2.9K", kd: 24, kdColor: "bg-emerald-400", url: "vmls.edu.in/blogs/clat-exam-importance-eligibility" },
        { kw: "law subjects", intent: "I", traffic: 38, tPerc: "0.15", vol: "2.9K", kd: 12, kdColor: "bg-emerald-400", url: "vmls.edu.in/blogs/subjects-in-law-courses" },
        { kw: "law subjects", intent: "I", traffic: 66, tPerc: "0.26", vol: "2.9K", kd: 12, kdColor: "bg-emerald-400", url: "vmls.edu.in/blogs/subjects-in-law-courses" },
        { kw: "what is llb", intent: "I", traffic: 4, tPerc: "0.01", vol: "2.4K", kd: 30, kdColor: "bg-amber-400", url: "vmls.edu.in/blogs/what-is-llb-degree", serpPlus: "+2" },
    ];

    return (
        <div className="mt-20 bg-white rounded-[2rem] p-4 md:p-12 border border-blue-50 shadow-[0_30px_60px_rgba(0,0,0,0.08)] overflow-hidden font-sans relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 opacity-10 rounded-bl-[100px] pointer-events-none"></div>
            <div className="mb-10 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">New Insights</span>
                    <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">DETAILED KEYWORD PERFORMANCE DATA</h3>
                </div>
                <h2 className="text-xl md:text-3xl font-black text-black leading-tight">SEMrush Organic <span className="text-blue-600">Growth Spotlight</span></h2>
            </div>

            <div className="relative border border-gray-100 rounded-3xl overflow-hidden bg-gray-50/20">
                <div className="overflow-x-auto no-scrollbar scroll-smooth">
                    <table className="w-full min-w-[1100px] border-collapse text-left">
                        <thead className="bg-[#f8fafc]">
                            <tr className="border-b border-gray-100">
                                <th className="sticky left-0 bg-[#f8fafc] py-6 px-8 text-[10px] font-black text-gray-500 uppercase tracking-widest z-20 shadow-[8px_0_15px_rgba(0,0,0,0.03)] border-r border-gray-100">Keyword</th>
                                <th className="py-6 px-4 text-center text-[10px] font-black text-gray-500 uppercase tracking-widest">Intent</th>
                                <th className="py-6 px-4 text-center text-[10px] font-black text-gray-500 uppercase tracking-widest">Position</th>
                                <th className="py-6 px-4 text-left text-[10px] font-black text-gray-500 uppercase tracking-widest">SERP Features</th>
                                <th className="py-6 px-4 text-right text-[10px] font-black text-gray-500 uppercase tracking-widest">Traffic</th>
                                <th className="py-6 px-4 text-right text-[10px] font-black text-gray-500 uppercase tracking-widest">Traffic %</th>
                                <th className="py-6 px-4 text-right text-[10px] font-black text-gray-500 uppercase tracking-widest">Volume (SV)</th>
                                <th className="py-6 px-4 text-center text-[10px] font-black text-gray-500 uppercase tracking-widest">KD %</th>
                                <th className="py-6 px-4 text-left text-[10px] font-black text-gray-500 uppercase tracking-widest">Target URL</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 bg-white text-[13px]">
                            {data.map((row, i) => (
                                <tr key={i} className="hover:bg-blue-50/30 transition-all duration-300 group">
                                    <td className="sticky left-0 bg-white group-hover:bg-blue-50/50 py-5 px-8 font-bold text-gray-900 border-r border-gray-100 z-10 shadow-[8px_0_15px_rgba(0,0,0,0.03)]">
                                        <div className="flex items-center gap-4">
                                            <div className="w-5 h-5 rounded-md border border-gray-200 flex items-center justify-center text-xs text-gray-300 font-bold bg-white group-hover:border-blue-200 group-hover:text-blue-500 transition-colors">+</div>
                                            {row.kw}
                                        </div>
                                    </td>
                                    <td className="py-5 px-4 text-center">
                                        <div className="flex justify-center gap-1.5">
                                            {row.intent.split('').map((char, idx) => (
                                                <span key={idx} className={`w-5 h-5 flex items-center justify-center rounded-sm text-[10px] font-black shadow-sm ${char === 'C' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'}`}>
                                                    {char}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="py-5 px-4 text-center">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
                                            <Target size={16} className="text-blue-600" />
                                        </div>
                                    </td>
                                    <td className="py-5 px-4">
                                        <div className="flex gap-3 items-center text-gray-400">
                                            <Search size={16} className="group-hover:text-blue-500 transition-colors" />
                                            <LinkIcon size={16} className="group-hover:text-[#8E1E1D] transition-colors" />
                                            <ImageIcon size={16} className="group-hover:text-green-500 transition-colors" />
                                            {row.serpPlus && <span className="text-[10px] font-black text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full ml-1">{row.serpPlus}</span>}
                                        </div>
                                    </td>
                                    <td className="py-5 px-4 text-right font-black text-gray-900">{row.traffic}</td>
                                    <td className="py-5 px-4 text-right text-gray-600 font-bold">{row.tPerc}%</td>
                                    <td className="py-5 px-4 text-right text-black font-black">{row.vol}</td>
                                    <td className="py-5 px-4 text-center">
                                        <div className="flex items-center justify-center gap-2 font-black text-gray-900">
                                            {row.kd}
                                            <div className={`w-2.5 h-2.5 rounded-full ${row.kdColor} shadow-sm`} />
                                        </div>
                                    </td>
                                    <td className="py-5 px-4">
                                        <div className="flex items-center gap-3 group/url bg-gray-50/50 hover:bg-white px-3 py-2 rounded-lg border border-transparent hover:border-blue-100 transition-all cursor-pointer">
                                            <span className="max-w-[200px] truncate text-[11px] font-bold text-gray-400 group-hover/url:text-blue-600">
                                                {row.url}
                                            </span>
                                            <ExternalLink size={12} className="text-gray-300 group-hover/url:text-blue-400 shrink-0" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-4 border-t border-gray-50 pt-10">
                <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start">
                    <div className="flex items-center gap-2">Search Logic: <span className="text-gray-900 font-black">SEMrush API v3.2</span></div>
                    <div className="flex items-center gap-2">Data Integrity: <span className="text-gray-900 font-black">Stable Rank Tracking</span></div>
                </div>
                <div className="flex items-center gap-3 text-green-600 bg-green-50 px-4 py-2 rounded-full border border-green-100 shadow-sm animate-pulse">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                    Live SERP Verification ACTIVE
                </div>
            </div>
        </div>
    );
}

function SearchPerformanceDashboard() {
    type MetricKey = 'clicks' | 'impressions' | 'ctr' | 'position';
    const [activeMetrics, setActiveMetrics] = useState<Record<MetricKey, boolean>>({
        clicks: true,
        impressions: true,
        ctr: false,
        position: false
    });

    const performanceData = [
        { date: '29/08/2024', clicks: 40, impressions: 1500, ctr: 0.8, pos: 14.2 },
        { date: '12/09/2024', clicks: 60, impressions: 2100, ctr: 0.9, pos: 13.5 },
        { date: '25/09/2024', clicks: 45, impressions: 1800, ctr: 0.8, pos: 13.8 },
        { date: '10/10/2024', clicks: 70, impressions: 2500, ctr: 1.0, pos: 13.2 },
        { date: '22/10/2024', clicks: 55, impressions: 2200, ctr: 0.9, pos: 14.5 },
        { date: '05/11/2024', clicks: 65, impressions: 2800, ctr: 1.1, pos: 13.8 },
        { date: '18/11/2024', clicks: 80, impressions: 3400, ctr: 1.2, pos: 13.2 },
        { date: '02/12/2024', clicks: 75, impressions: 3100, ctr: 1.0, pos: 12.8 },
        { date: '15/12/2024', clicks: 90, impressions: 4200, ctr: 1.3, pos: 12.5 },
        { date: '29/12/2024', clicks: 80, impressions: 3800, ctr: 1.1, pos: 12.8 },
        { date: '11/01/2025', clicks: 105, impressions: 5500, ctr: 1.4, pos: 12.1 },
        { date: '24/01/2025', clicks: 120, impressions: 6200, ctr: 1.5, pos: 11.8 },
        { date: '07/02/2025', clicks: 140, impressions: 8800, ctr: 1.6, pos: 11.2 },
        { date: '21/02/2025', clicks: 175, impressions: 10500, ctr: 1.8, pos: 10.8 },
        { date: '06/03/2025', clicks: 210, impressions: 15000, ctr: 2.1, pos: 10.2 },
        { date: '20/03/2025', clicks: 290, impressions: 22000, ctr: 2.4, pos: 9.8 },
        { date: '02/04/2025', clicks: 375, impressions: 28000, ctr: 2.8, pos: 9.4 },
        { date: '16/04/2025', clicks: 410, impressions: 32000, ctr: 3.1, pos: 9.1 },
        { date: '29/04/2025', clicks: 475, impressions: 45000, ctr: 3.5, pos: 8.8 },
        { date: '13/05/2025', clicks: 550, impressions: 38000, ctr: 3.8, pos: 8.5 },
        { date: '26/05/2025', clicks: 525, impressions: 42000, ctr: 4.2, pos: 8.2 },
        { date: '09/06/2025', clicks: 480, impressions: 35000, ctr: 4.1, pos: 8.4 },
        { date: '22/06/2025', clicks: 420, impressions: 31000, ctr: 4.5, pos: 8.1 },
        { date: '06/07/2025', clicks: 410, impressions: 28000, ctr: 4.8, pos: 7.8 },
        { date: '19/07/2025', clicks: 380, impressions: 32000, ctr: 5.2, pos: 7.5 },
        { date: '03/08/2025', clicks: 420, impressions: 35000, ctr: 5.5, pos: 7.9 },
        { date: '15/08/2025', clicks: 390, impressions: 33000, ctr: 5.8, pos: 8.1 },
    ];

    const metrics: { id: MetricKey; label: string; value: string; color: string }[] = [
        { id: 'clicks', label: 'Total clicks', value: '53.4K', color: '#4285F4' },
        { id: 'impressions', label: 'Total impressions', value: '5.09M', color: '#7E57C2' },
        { id: 'ctr', label: 'Average CTR', value: '1.04%', color: '#00897B' },
        { id: 'position', label: 'Average position', value: '9.9', color: '#F9A825' },
    ];

    return (
        <div className="bg-white rounded-[1.5rem] border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden font-sans mt-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-gray-100">
                {metrics.map((m) => (
                    <button
                        key={m.id}
                        onClick={() => setActiveMetrics(prev => ({ ...prev, [m.id]: !prev[m.id] }))}
                        className={`p-6 text-left transition-all duration-300 relative group border-r border-gray-100 last:border-r-0 ${activeMetrics[m.id] ? 'bg-gray-50/80' : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-70'}`}
                    >
                        <div className="flex items-center justify-between mb-3 text-[10px] font-black text-gray-400 uppercase tracking-[0.15em]">
                            <div className="flex items-center gap-2">
                                <div
                                    className={`w-4 h-4 rounded-[4px] shadow-sm transition-all duration-300 group-hover:scale-110 flex items-center justify-center`}
                                    style={{ backgroundColor: activeMetrics[m.id] ? m.color : '#e2e8f0' }}
                                >
                                    {activeMetrics[m.id] && <div className="w-1.5 h-1.5 rounded-full bg-white/40" />}
                                </div>
                                {m.label}
                            </div>
                            <HelpCircle size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-1">{m.value}</div>

                        {activeMetrics[m.id] && (
                            <motion.div
                                layoutId="active-indicator"
                                className="absolute bottom-0 left-0 right-0 h-1 z-10"
                                style={{ backgroundColor: m.color }}
                            />
                        )}
                    </button>
                ))}
            </div>

            <div className="p-4 md:p-8 h-[350px] md:h-[450px] relative bg-gradient-to-b from-transparent to-gray-50/30">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                        <defs>
                            <filter id="shadow" height="200%">
                                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                                <feOffset dx="0" dy="4" result="offsetblur" />
                                <feComponentTransfer>
                                    <feFuncA type="linear" slope="0.3" />
                                </feComponentTransfer>
                                <feMerge>
                                    <feMergeNode />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f0f0f0" />
                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: '#9ca3af', fontWeight: 800 }}
                            dy={20}
                            interval={Math.ceil(performanceData.length / 6)}
                        />
                        <YAxis yAxisId="left" hide />
                        <YAxis yAxisId="right" hide />

                        <Tooltip
                            content={({ active, payload, label }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-gray-100 min-w-[200px]">
                                            <p className="text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">{label}</p>
                                            <div className="space-y-2">
                                                {payload.map((entry, index) => (
                                                    <div key={index} className="flex items-center justify-between gap-4">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                                                            <span className="text-xs font-bold text-gray-600 uppercase">{entry.name}:</span>
                                                        </div>
                                                        <span className="text-sm font-black text-gray-900">{entry.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />

                        {activeMetrics.clicks && (
                            <Line
                                yAxisId="left"
                                type="monotone"
                                dataKey="clicks"
                                name="Clicks"
                                stroke="#4285F4"
                                strokeWidth={4}
                                dot={false}
                                activeDot={{ r: 8, strokeWidth: 0, fill: '#4285F4' }}
                                animationDuration={1500}
                                filter="url(#shadow)"
                            />
                        )}
                        {activeMetrics.impressions && (
                            <Line
                                yAxisId="right"
                                type="monotone"
                                dataKey="impressions"
                                name="Impressions"
                                stroke="#7E57C2"
                                strokeWidth={4}
                                dot={false}
                                activeDot={{ r: 8, strokeWidth: 0, fill: '#7E57C2' }}
                                animationDuration={1500}
                                filter="url(#shadow)"
                            />
                        )}
                        {activeMetrics.ctr && (
                            <Line
                                yAxisId="left"
                                type="monotone"
                                dataKey="ctr"
                                name="CTR"
                                stroke="#00897B"
                                strokeWidth={3}
                                strokeDasharray="8 8"
                                dot={false}
                                animationDuration={2000}
                            />
                        )}
                        {activeMetrics.position && (
                            <Line
                                yAxisId="right"
                                type="monotone"
                                dataKey="pos"
                                name="Position"
                                stroke="#F9A825"
                                strokeWidth={3}
                                strokeDasharray="3 3"
                                dot={false}
                                animationDuration={2000}
                            />
                        )}
                    </LineChart>
                </ResponsiveContainer>

                <div className="absolute top-8 left-12 flex items-center gap-6 opacity-40 pointer-events-none">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Search Performance Trends</div>
                </div>
            </div>

            <div className="bg-gray-50/50 p-4 border-t border-gray-100 flex justify-between items-center text-[9px] font-black text-gray-400 uppercase tracking-widest px-8">
                <div className="flex items-center gap-4">
                    <span>Source: GSC Actual Data</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>Range: Aug 2024 - Aug 2025</span>
                </div>
                <div className="flex items-center gap-2 text-green-500">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Verified Performance
                </div>
            </div>
        </div>
    );
}

export function VMLSBlog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#fcfcfc] min-h-screen relative font-sans">
            {/* Floating Back Button */}
            <div className="fixed top-24 left-6 z-40">
                <Link to="/" className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-black hover:scale-110 transition-transform hidden xl:flex">
                    <ArrowLeft size={20} />
                </Link>
            </div>

            {/* Print-Style Logo Header */}
            <div className="bg-white pt-2 pb-1 px-6 relative">
                <div className="max-w-[1230px] mx-auto">
                    <div className="flex items-center justify-between mb-3 h-12 md:h-16">
                        <img src="/case-study/Tectra Serve Logo (1).png" alt="Tectra Serve" className="h-full object-contain origin-left scale-125 md:scale-150" />
                        <a href="https://vmls.edu.in/" target="_blank" rel="noopener noreferrer" className="h-full block">
                            <img src="/case-study/VMLS LOGO - Maroon.png" alt="VMLS Logo" className="h-full object-contain origin-right scale-150 md:scale-350" />
                        </a>
                    </div>
                    {/* Dark underline spanning the exact width of the logos */}
                    <div className="w-full h-[3px] bg-[#1a1a1a] rounded-full"></div>
                </div>
            </div>

            <div className="max-w-[1230px] mx-auto px-6 py-16 md:py-24">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20 flex flex-col md:flex-row items-center gap-10 md:gap-16"
                >
                    {/* Hero Sidebar Image */}
                    <div className="w-full md:w-1/3 shrink-0">
                        <img
                            src="/images/vmls hero.png"
                            alt="VMLS Hero"
                            className="w-full h-auto rounded-[2rem] shadow-xl border border-gray-100"
                        />
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        {/* Mobile Back Button */}
                        <Link to="/" className="inline-flex items-center gap-2 text-black hover:opacity-70 transition-opacity font-bold text-sm uppercase tracking-widest mb-12 xl:hidden">
                            <ArrowLeft size={16} /> Back to Home
                        </Link>

                        <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-black tracking-tight leading-[1.1] mb-6">
                            How did we build <br className="hidden md:block" /> visibility for a Law School <br className="hidden md:block" /> from scratch?
                        </h1>
                        <p className="text-xl md:text-2xl text-[#8E1E1D] font-black uppercase tracking-widest">
                            Case Study
                        </p>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden mb-20 shadow-2xl relative"
                >
                    <img src="/images/vmls-2.jpg.jpeg" alt="Vinayaka Mission's Law School" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
                        <div className="text-white">
                            <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">Education Marketing</span>
                            <h2 className="text-3xl font-bold">Vinayaka Mission's Law School</h2>
                        </div>
                    </div>
                </motion.div>

                {/* Content Sections */}
                <div className="space-y-20">

                    {/* About Client */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-lg max-w-none text-gray-600"
                    >
                        <h2 className="text-3xl font-bold text-[#8E1E1D] mb-6 text-center md:text-left">About the Client</h2>
                        <p className="leading-relaxed">
                            Vinayaka Mission's Law School (VMLS), under Vinayaka Missions Research Foundation – Deemed to be University (VMRF-DU), offers quality legal education through a range of undergraduate programmes like LL.B. (Hons.), B.A. LL.B. (Hons.), B.B.A. LL.B. (Hons.), and B.Com. LL.B. (Hons.), along with postgraduate specializations including Corporate and Financial Laws, Commercial Dispute Resolution, Criminal Law and Practice, and Artificial Intelligence, Emerging Technologies & Intellectual Property. VMLS is dedicated to shaping skilled and ethical legal professionals for the modern world.
                        </p>
                    </motion.section>

                    {/* Challenges */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-lg max-w-none text-gray-600 bg-gray-50 p-10 rounded-3xl border border-gray-100"
                    >
                        <h2 className="text-3xl font-bold text-[#8E1E1D] mb-6 text-center md:text-left">Client's Challenges and Goals</h2>
                        <p className="leading-relaxed">
                            Although the law school offered trusted and wide-ranging programmes, its online presence was almost nonexistent. The website included only basic details such as the admission page, about section, and a general programmes list. However, the absence of dedicated programme-specific pages made it difficult for the site to rank well on Google.
                        </p>
                        <p className="leading-relaxed font-medium text-black">
                            Keywords like "LLB College," "Law College," and "Law Course" were assigned to the homepage or blog pages, which neither matched user intent nor met search engine requirements.
                        </p>
                        <p className="leading-relaxed">
                            As a result, many keywords were either not indexed or ranked poorly, leading to a loss of visibility and potential students. Our objective was to build comprehensive online visibility from the ground up, positioning the law school as a leading destination for students actively searching for top law colleges.
                        </p>
                    </motion.section>

                    {/* Our Strategy (Cards) */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-[#8E1E1D] mb-12 text-center md:text-left">Our Strategy</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Programme Pages", text: "Creating dedicated programme pages for both undergraduate and postgraduate courses." },
                                { title: "Local SEO", text: "Optimizing the website with local search keywords to improve visibility in target regions." },
                                { title: "Organic Traffic", text: "Driving organic traffic through informative and SEO-friendly blogs." },
                                { title: "Business Outcomes", text: "Converting SEO activities into measurable business outcomes, including more inquiries, registrations, and campus visits." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-50 flex flex-col items-center text-center relative group overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#8E1E1D] opacity-0 group-hover:opacity-5 rounded-bl-[100px] transition-all duration-300"></div>
                                    <div className="w-12 h-12 bg-red-50 text-[#8E1E1D] rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <p className="text-sm text-gray-700 font-medium leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Actions Timeline */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-[#8E1E1D] mb-10 text-center md:text-left">Our Actions</h2>

                        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#8E1E1D] before:to-transparent">

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#8E1E1D] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="font-bold text-sm">1</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow border border-gray-100">
                                    <h3 className="font-bold text-[#8E1E1D] text-xl mb-3">Initial Audit and Strategy</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        We began with a full SEO audit and identified key issues: no dedicated programme pages, incorrect header structure, weak internal linking, and many important keywords not indexed by Google. The analysis confirmed that, in its existing form, the website had little to no chance of generating organic traffic or attracting prospective students.
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#8E1E1D] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="font-bold text-sm">2</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow border border-gray-100">
                                    <h3 className="font-bold text-[#8E1E1D] text-xl mb-3">Building the Programme Architecture</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        To address this, we developed a plan to expand the website with dedicated pages for each undergraduate and postgraduate programme. Each page was given its own URL, unique content, optimized headers (H1, H2, etc.), meta tags, and SEO-driven copy. This allowed Google to clearly recognize that the site matched specific student search queries such as "Top Law College" or "LLB Course."
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#8E1E1D] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="font-bold text-sm">3</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow border border-gray-100">
                                    <h3 className="font-bold text-[#8E1E1D] text-xl mb-4">Comprehensive On-Site Optimization</h3>
                                    <ul className="space-y-3">
                                        <li className="text-sm text-gray-600"><strong className="text-black">Homepage optimization:</strong> Redesigned to highlight core programmes and direct visitors to relevant subpages.</li>
                                        <li className="text-sm text-gray-600"><strong className="text-black">Faculty profiles:</strong> We optimized faculty pages by adding details about their expertise, research, and subjects taught, helping capture long-tail keyword traffic.</li>
                                        <li className="text-sm text-gray-600"><strong className="text-black">Header structure:</strong> Implemented a logical hierarchy of headers across all pages for better readability and search engine evaluation.</li>
                                        <li className="text-sm text-gray-600"><strong className="text-black">Internal linking:</strong> Built a network of internal links to speed up indexing.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#8E1E1D] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="font-bold text-sm">4</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow border border-gray-100">
                                    <h3 className="font-bold text-[#8E1E1D] text-xl mb-3">Blog Launch and Content Marketing</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        We introduced a blog with regular educational articles addressing students' common queries—such as career opportunities after law, tips for law entrance exams, and insights into different specializations. This not only attracted a wider student audience at the research stage but also positioned the Law College as a thought leader in legal education.
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#8E1E1D] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <span className="font-bold text-sm">5</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow border border-gray-100">
                                    <h3 className="font-bold text-[#8E1E1D] text-xl mb-3">Monitoring and Ongoing Improvements</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Post-implementation, we continuously tracked keyword rankings and organic traffic. Based on performance insights, we refined our strategy, created fresh content, and optimized existing pages to ensure consistent visibility, more inquiries, higher registrations, and increased campus visits.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </motion.section>

                    {/* Results Highlight Reel */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 border-2 border-gray-100 shadow-[0_40px_100px_rgba(0,0,0,0.05)] mt-24 -mx-2 md:mx-0"
                    >
                        <div className="text-center mb-12">
                            <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 inline-block">Impact & Results</span>
                            <h2 className="text-4xl md:text-5xl font-black text-[#8E1E1D] tracking-tight">The Growth Outcomes</h2>
                            <p className="text-gray-500 font-medium mt-4">Results were achieved faster than expected, just weeks after SEO changes.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {[
                                { icon: <Users size={24} />, metric: "317%", label: "Total Users Grew", desc: "with new users up by 326.5%" },
                                { icon: <TrendingUp size={24} />, metric: "429%", label: "Organic Search Traffic", desc: "reflecting improved keyword rankings" },
                                { icon: <ArrowLeft size={24} className="rotate-180" />, metric: "164%", label: "Direct Traffic Rose", desc: "indicating stronger brand awareness" },
                                { icon: <Target size={24} />, metric: "174%", label: "Event Count Jumped", desc: "proving more meaningful actions" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-gray-50 rounded-3xl p-6 text-center border border-gray-100">
                                    <div className="w-12 h-12 mx-auto bg-white rounded-xl shadow-sm flex items-center justify-center text-[#8E1E1D] mb-4">
                                        {stat.icon}
                                    </div>
                                    <h3 className="text-4xl font-black text-black mb-2">{stat.metric}</h3>
                                    <p className="text-sm font-bold text-gray-800 mb-1">{stat.label}</p>
                                    <p className="text-xs text-gray-500 font-medium">{stat.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* GA4 Style Interactive Chart */}
                        <div className="mb-16 bg-white rounded-[2rem] p-6 md:p-10 border border-gray-100 shadow-sm overflow-hidden">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                                <div>
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">AUDIENCE GROWTH</h3>
                                    <h2 className="text-xl md:text-2xl font-black text-black">Total users by Primary channel group</h2>
                                </div>
                                <div className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold text-gray-600 flex items-center gap-2">
                                    Day <ChevronDown size={14} className="text-gray-400" />
                                </div>
                            </div>

                            <div className="h-[280px] md:h-[400px] w-full mt-4">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart
                                        data={[
                                            { date: '02 Feb', Total: 140, Organic: 40, Direct: 30, Paid: 20, Social: 10, Ref: 5 },
                                            { date: '09 Feb', Total: 160, Organic: 60, Direct: 45, Paid: 25, Social: 12, Ref: 6 },
                                            { date: '16 Feb', Total: 120, Organic: 50, Direct: 25, Paid: 30, Social: 10, Ref: 5 },
                                            { date: '23 Feb', Total: 210, Organic: 100, Direct: 40, Paid: 20, Social: 15, Ref: 8 },
                                            { date: '02 Mar', Total: 240, Organic: 130, Direct: 30, Paid: 45, Social: 20, Ref: 10 },
                                            { date: '09 Mar', Total: 220, Organic: 110, Direct: 35, Paid: 30, Social: 15, Ref: 7 },
                                            { date: '16 Mar', Total: 280, Organic: 160, Direct: 40, Paid: 35, Social: 18, Ref: 9 },
                                            { date: '23 Mar', Total: 310, Organic: 210, Direct: 50, Paid: 40, Social: 22, Ref: 12 },
                                            { date: '30 Mar', Total: 230, Organic: 140, Direct: 30, Paid: 25, Social: 14, Ref: 6 },
                                            { date: '06 Apr', Total: 290, Organic: 200, Direct: 60, Paid: 40, Social: 20, Ref: 10 },
                                            { date: '13 Apr', Total: 330, Organic: 240, Direct: 40, Paid: 35, Social: 18, Ref: 8 },
                                            { date: '20 Apr', Total: 310, Organic: 190, Direct: 45, Paid: 42, Social: 21, Ref: 11 },
                                            { date: '27 Apr', Total: 360, Organic: 280, Direct: 55, Paid: 48, Social: 25, Ref: 13 },
                                        ]}
                                        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                                    >
                                        <defs>
                                            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                        <XAxis
                                            dataKey="date"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fontSize: 10, fontWeight: 600, fill: '#9ca3af' }}
                                            dy={10}
                                            interval={window.innerWidth < 768 ? 2 : 0}
                                        />
                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fontSize: 10, fontWeight: 600, fill: '#9ca3af' }}
                                            dx={-10}
                                            hide={window.innerWidth < 640}
                                        />
                                        <Tooltip
                                            contentStyle={{
                                                borderRadius: '16px',
                                                border: 'none',
                                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                                fontWeight: 800,
                                                fontSize: '11px'
                                            }}
                                        />
                                        <Legend
                                            verticalAlign="bottom"
                                            height={70}
                                            iconType="circle"
                                            wrapperStyle={{
                                                paddingTop: '20px',
                                                fontWeight: 700,
                                                fontSize: '11px',
                                                lineHeight: '18px'
                                            }}
                                        />
                                        <Area type="monotone" dataKey="Total" stroke="#3b82f6" strokeWidth={2} strokeDasharray="5 5" fillOpacity={1} fill="url(#colorTotal)" />
                                        <Area type="monotone" dataKey="Organic" name="Organic Search" stroke="#1e40af" strokeWidth={3} fill="transparent" />
                                        <Area type="monotone" dataKey="Direct" stroke="#22c55e" strokeWidth={2} fill="transparent" />
                                        <Area type="monotone" dataKey="Paid" name="Paid Social" stroke="#f59e0b" strokeWidth={2} fill="transparent" />
                                        <Area type="monotone" dataKey="Social" name="Organic Social" stroke="#1e3a8a" strokeWidth={2} fill="transparent" />
                                        <Area type="monotone" dataKey="Ref" name="Referral" stroke="#db2777" strokeWidth={2} fill="transparent" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-[2rem] p-8 md:p-12 border border-gray-100 mt-12 mb-12">
                            <h3 className="text-xl font-black text-black mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#8E1E1D]">
                                    <TrendingUp size={18} />
                                </span>
                                Strategy Impact & Execution
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Organic keyword rankings improved after creating dedicated programme pages and publishing regular blog content.",
                                    "Each page was aligned with specific search intents, boosting relevance for prospective students.",
                                    "Informative blog articles enhanced the website’s authority and expanded its keyword reach.",
                                    "As a result, more keywords entered Google’s index and rankings improved across multiple queries.",
                                    "The law college began attracting higher volumes of qualified traffic, leading to more student inquiries."
                                ].map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-gray-700 font-medium text-lg leading-relaxed">
                                        <CheckCircle2 size={24} className="text-[#8E1E1D] flex-shrink-0 mt-0.5" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-12 bg-white rounded-[2rem] p-6 md:p-10 border border-gray-100 shadow-sm overflow-hidden">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                                <div>
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">DETAILED METRICS</h3>
                                    <h2 className="text-xl md:text-2xl font-black text-black">Acquisition Channel Performance</h2>
                                </div>
                            </div>

                            <div className="overflow-x-auto no-scrollbar rounded-2xl border border-gray-100 bg-white">
                                <table className="w-full min-w-[900px] border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50/50">
                                            <th className="sticky left-0 bg-gray-50 py-5 px-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest z-10">Channel Group</th>
                                            <th className="py-5 px-4 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Users</th>
                                            <th className="py-5 px-4 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest">New Users</th>
                                            <th className="py-5 px-4 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest whitespace-nowrap">Returning</th>
                                            <th className="py-5 px-4 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest whitespace-nowrap">Avg. Engagement</th>
                                            <th className="py-5 px-4 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest whitespace-nowrap">Event Count</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="sticky left-0 bg-white hover:bg-gray-50 py-4 px-6 font-bold text-blue-900 border-r border-gray-50/50 z-10">Organic Search</td>
                                            <td className="py-4 px-4 text-right font-black text-gray-900">11,485</td>
                                            <td className="py-4 px-4 text-right font-black text-gray-900">11,166</td>
                                            <td className="py-4 px-4 text-right font-black text-gray-900">1,142</td>
                                            <td className="py-4 px-4 text-right font-black text-gray-900">54s</td>
                                            <td className="py-4 px-4 text-right text-green-600 font-bold">↑ 429.0%</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="sticky left-0 bg-white hover:bg-gray-50 py-4 px-6 font-bold text-green-800 border-r border-gray-50/50 z-10">Direct Traffic</td>
                                            <td className="py-4 px-4 text-right font-black text-gray-900">3,046</td>
                                            <td className="py-4 px-4 text-right font-black text-gray-900">2,786</td>
                                            <td className="py-4 px-4 text-right font-black text-gray-900">415</td>
                                            <td className="py-4 px-4 text-right font-black text-gray-900">46s</td>
                                            <td className="py-4 px-4 text-right text-green-600 font-bold">↑ 164.4%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-[#8E1E1D] text-white rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                            <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                            <div className="max-w-2xl relative z-10">
                                <h3 className="text-3xl font-black mb-4">Core Business Goals Achieved</h3>
                                <p className="text-white/80 font-medium text-lg leading-relaxed">
                                    Most importantly, these comprehensive SEO improvements drove massive volumes of higher inquiries, registrations, and confirmed campus visits, fundamentally transforming the law college's digital admission flow.
                                </p>
                                <ul className="mt-6 space-y-2 text-white/90">
                                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-400" /> Organic keyword rankings skyrocketed</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-400" /> Pages aligned with specific search intents</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-400" /> High volumes of qualified traffic</li>
                                </ul>
                            </div>
                            <a href="/#mobile-book-section" className="bg-white text-[#8E1E1D] hover:bg-gray-100 transition-colors px-8 py-4 rounded-full font-black text-sm tracking-widest uppercase flex-shrink-0 z-10 shadow-xl">
                                Work With Us
                            </a>
                        </div>
                    </motion.section>

                    {/* Keyword Rankings */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-24"
                    >
                        <h2 className="text-3xl font-bold text-[#8E1E1D] mb-10 text-center md:text-left">Keyword Mastery & SERP Ownership</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Card 1 */}
                            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-gray-50 flex flex-col h-full">
                                <div className="w-12 h-12 bg-red-50 text-[#8E1E1D] rounded-xl flex items-center justify-center mb-6">
                                    <Target size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-black mb-6">Position 1 Rankings</h3>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-[#8E1E1D] shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-600 leading-relaxed">Multiple high-intent keywords such as <strong>"law courses after 12th," "law subjects," "LLB after 12th," "LLB course details after 12th,"</strong> and <strong>"law career options"</strong> are now ranking at <strong>Position 1 on Google</strong>.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-[#8E1E1D] shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-600 leading-relaxed">These keywords also appear in <strong>SERP features</strong> (featured snippets, FAQs, and “People Also Ask”), further boosting visibility.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-[#8E1E1D] shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-600 leading-relaxed">These rankings are aligned with <strong>student search intent</strong>, ensuring the college reaches prospective applicants at the right decision-making stage.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-[#8E1E1D] shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-600 leading-relaxed">Overall, the keyword strategy not only improved visibility but also drove <strong>qualified traffic</strong> directly translating into inquiries and admissions interest.</p>
                                    </li>
                                </ul>
                                <div className="mt-auto p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                    <h4 className="text-sm font-bold text-black mb-4 uppercase tracking-widest cursor-default">Top Traffic Drivers</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                                            <span>Law courses after 12th</span>
                                            <div className="text-right">
                                                <strong className="text-[#8E1E1D] bg-white px-3 py-1 rounded-full shadow-sm">572 visits</strong>
                                                <span className="block text-[10px] text-gray-400 mt-1 font-bold">4.4K SV</span>
                                            </div>
                                        </li>
                                        <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                                            <span>Law subjects</span>
                                            <div className="text-right">
                                                <strong className="text-[#8E1E1D] bg-white px-3 py-1 rounded-full shadow-sm">377 visits</strong>
                                                <span className="block text-[10px] text-gray-400 mt-1 font-bold">2.9K SV</span>
                                            </div>
                                        </li>
                                        <li className="flex justify-between items-center">
                                            <span>LLB after 12th</span>
                                            <div className="text-right">
                                                <strong className="text-[#8E1E1D] bg-white px-3 py-1 rounded-full shadow-sm">247 visits</strong>
                                                <span className="block text-[10px] text-gray-400 mt-1 font-bold">1.9K SV</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-gray-50 flex flex-col h-full">
                                <div className="w-12 h-12 bg-red-50 text-[#8E1E1D] rounded-xl flex items-center justify-center mb-6">
                                    <TrendingUp size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-black mb-6">SERP Feature Domination</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-[#8E1E1D] shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-600 leading-relaxed">Many target keywords are now appearing in Google SERP features such as <strong>featured snippets, People Also Ask (PAA), knowledge panels, and FAQs</strong>.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-[#8E1E1D] shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-600 leading-relaxed">High-intent queries like <strong>"CLAT exam syllabus," "CLAT exam eligibility," "best law university in India,"</strong> are consistently showing in PAA and snippet results, boosting visibility.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-[#8E1E1D] shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-600 leading-relaxed">This captures greater <strong>search real estate</strong>, increasing click-through rates (CTR).</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-[#8E1E1D] shrink-0 mt-0.5" />
                                        <p className="text-sm text-gray-600 leading-relaxed">By owning these SERP features, the law college is positioned as an <strong>authoritative and trusted source</strong>, which helps attract more qualified students.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <ProfessionalKeywordTable />
                    </motion.section>

                    {/* Local SEO & Overall Search Impact */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-lg max-w-none text-gray-600 mt-24"
                    >
                        <h2 className="text-3xl font-bold text-[#8E1E1D] mb-6 text-center md:text-left">Local SEO Effects</h2>
                        <p className="leading-relaxed">
                            We could describe our SEO process for hours, but the best way to show its impact is through real results. Below, you'll find the outcome of our SEO strategy for Vinayaka Mission's Law School (VMLS) – vmls.edu.in.
                        </p>
                        <p className="leading-relaxed">
                            After implementing a complete SEO architecture, content optimization, and keyword-focused blog strategy, the results came faster than expected. In just a few months, the law school's website reached <strong className="text-black">5.09 million impressions</strong> and <strong className="text-black">53.4K clicks</strong>, with an average position of <strong className="text-black">9.9</strong> in Google search results.
                        </p>
                        <p className="leading-relaxed">
                            This dramatic growth in visibility translated into a steady rise in inquiries, registrations, and campus visits, firmly positioning VMLS among the top-ranked law schools actively searched by students across India.
                        </p>

                        {/* Interactive Search Console Dashboard */}
                        <div className="mt-12 not-prose">
                            <SearchPerformanceDashboard />
                        </div>

                        {/* Interactive Google Business Profile Dashboard */}
                        <div className="mt-20 not-prose">
                            <h3 className="text-2xl font-black text-black mb-6 text-center">Localized Search Impact</h3>
                            <BusinessProfilePerformance />
                        </div>
                        {/* Full SEMrush Performance Spotlight (Added as New Section) */}
                        <div className="mt-24 not-prose">
                            <SemrushKeywordTable />
                        </div>
                    </motion.section>

                    {/* Conclusion */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#1a1a1a] text-white rounded-[3rem] p-10 md:p-16 mt-24 text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#8E1E1D] opacity-20 blur-[120px] pointer-events-none rounded-full"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Conclusion</h2>
                            <p className="text-lg text-gray-200 leading-relaxed mb-6 font-medium">
                                The results clearly demonstrate how a structured SEO strategy can transform the digital visibility of an educational institution. Within just 8 months, VMLS Law School went from limited online presence to consistently appearing on Page 1 of Google for high-value keywords like "CLAT exam syllabus," "CLAT exam eligibility," and "best law university in India."
                            </p>
                            <p className="text-lg text-gray-200 leading-relaxed mb-6 font-medium">
                                With 5M+ impressions, 53K+ clicks, and an average position of 9.9, the law school has established a strong foundation for organic growth and student acquisition. The combination of technical SEO, content optimization, and SERP feature targeting not only improved rankings but also built long-term authority in the legal education niche.
                            </p>
                            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl mt-10 backdrop-blur-sm relative">
                                <div className="absolute -top-4 -left-2 text-6xl text-[#8E1E1D] opacity-50 font-serif">"</div>
                                <p className="text-xl md:text-2xl font-bold text-white leading-relaxed relative z-10">
                                    This case study proves that with the right SEO approach, even highly competitive industries like education can achieve measurable and scalable results.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                </div>
            </div>
        </div>
    );
}
