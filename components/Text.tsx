"use client"
// components/CommunityHeader.tsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

interface I {
    children: React.ReactNode;
    className?: string;
}

const Text = ({ children, className }: I) => {
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const textElement = textRef.current;

        if (textElement) {
            // GSAP Text Split Animation
            // gsap.fromTo(
            //     textElement,
            //     {
            //         opacity: 0,
            //         y: 50,
            //         scale: 0.8
            //     },
            //     {
            //         opacity: 1,
            //         y: 0,
            //         scale: 1,
            //         duration: 1,
            //         ease: 'power3.out'
            //     }
            // );

            // // Subtle hover effect
            // textElement.addEventListener('mouseenter', () => {
            //     gsap.to(textElement, {
            //         scale: 1.05,
            //         duration: 0.3,
            //         ease: 'power1.inOut'
            //     });
            // });

            // textElement.addEventListener('mouseleave', () => {
            //     gsap.to(textElement, {
            //         scale: 1,
            //         duration: 0.3,
            //         ease: 'power1.inOut'
            //     });
            // });
        }
    }, []);

    return (
        <div className=" ">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className=" space-y-6"
            >
                <h1
                    ref={textRef}
                    className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600 leading-tight tracking-tighter cursor-pointer ${className}`}
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                    {children}
                </h1>

            </motion.div>
        </div>
    );
};

export default Text;