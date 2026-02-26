import React from 'react';
import { Play } from 'lucide-react';

export function VideoSection() {
    return (
        <section id="blogs" className="bg-white py-12 px-6 flex flex-col items-center">
            <h2 className="text-[#1a1a1a] font-extrabold text-3xl md:text-4xl mb-8 tracking-tight text-center">
                We are Recognized
            </h2>

            <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative aspect-video border-[6px] border-[#1a1a1a]/5 bg-black group transition-transform duration-500 hover:scale-[1.01]">

                {/* Background Image / Thumb */}
                <img
                    src="https://images.unsplash.com/photo-1541888002-39c8789504af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                />

                {/* Play Button */}
                <button className="absolute inset-0 m-auto w-20 h-20 bg-[#ff0000] rounded-full flex items-center justify-center pl-2 text-white shadow-lg hover:bg-red-700 transition-colors z-10 group-hover:scale-110 duration-300">
                    <Play size={40} fill="currentColor" />
                </button>

                {/* Video Player Mockup Top & Bottom overlay */}
                <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-black/60 to-transparent flex p-4 items-start">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 p-2 flex items-center justify-center">
                            <span className="text-white font-bold text-xs">T</span>
                        </div>
                        <div>
                            <p className="text-white font-semibold text-lg drop-shadow-md">Tectra Technologies</p>
                            <p className="text-white/80 text-sm">Drive Admissions Beyond Marketing</p>
                        </div>
                    </div>
                </div>

                {/* Bottom mock player bar */}
                <div className="absolute bottom-4 left-4 right-4 h-16 bg-black/40 backdrop-blur-md rounded-2xl flex items-center px-6 gap-4 border border-white/10 hidden md:flex">
                    <Play size={24} className="text-white/80 cursor-pointer hover:text-white" fill="currentColor" />
                    <div className="flex-1 h-1.5 bg-white/30 rounded-full relative overflow-hidden group/bar cursor-pointer">
                        <div className="absolute left-0 top-0 h-full w-[45%] bg-[#ff0000]"></div>
                    </div>
                    <span className="text-white/80 text-xs font-medium">1:23 / 3:45</span>
                    <button className="px-4 py-1.5 bg-[#ff0000] text-white text-xs font-bold rounded-lg hover:bg-red-700 transition-colors uppercase tracking-wider">
                        Subscribe
                    </button>
                </div>

            </div>

            <div className="mt-12 mb-4 relative w-full max-w-sm mx-auto flex justify-center items-center">
                <div className="absolute w-full h-px bg-gray-200"></div>
                <div className="inline-flex rounded-full border border-gray-200 p-1 shadow-sm bg-white relative z-10">
                    <button className="px-8 py-2 rounded-full text-sm font-semibold bg-[#1a1a1a] text-white shadow-sm">
                        Our Media
                    </button>
                    <button className="px-8 py-2 rounded-full text-sm font-semibold bg-white text-gray-700 hover:text-black">
                        Blogs
                    </button>
                </div>
            </div>

        </section>
    );
}
