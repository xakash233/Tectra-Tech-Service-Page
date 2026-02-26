import { motion } from 'framer-motion';
import React from 'react';

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: RevealProps) => {
    return (
        <div style={{ position: "relative", width }}>
            <motion.div
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                {children}
            </motion.div>
        </div>
    );
};
