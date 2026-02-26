import React, { useEffect, useState } from 'react';

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);

            const target = e.target as HTMLElement;
            setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
        };

        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] transition-transform duration-150 ease-out mix-blend-difference bg-white hidden md:block ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            style={{
                transform: `translate(${position.x - 8}px, ${position.y - 8}px) scale(${isPointer ? 2.5 : 1})`,
            }}
        />
    );
}
