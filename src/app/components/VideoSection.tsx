import React from 'react';


export function VideoSection() {
    return (
        <section id="blogs" className="bg-white py-12 px-6 flex flex-col items-center">
            <h2 className="text-[#1a1a1a] font-extrabold text-3xl md:text-4xl mb-8 tracking-tight text-center">
                We are Recognized
            </h2>

            <div className="w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl relative aspect-video border-[6px] border-[#1a1a1a]/5 bg-black">
                <iframe
                    src="https://www.youtube.com/embed/J70S-3Eg0lE?autoplay=0&rel=0"
                    title="Tectra Technologies Recognition"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
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
