

// "use client";

// import { useEffect, useState } from 'react';
// import { gsap } from 'gsap';

// const sections = ['Hero', 'Features', 'Gallery', 'Testimonials', 'Contact'];

// const HorizontalProgressBar = () => {
//     const [activeSection, setActiveSection] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             const sectionElements = sections.map((id) =>
//                 document.getElementById(id.toLowerCase())
//             );
//             const scrollPosition = window.scrollY + window.innerHeight / 2;
//             const current = sectionElements.findIndex(
//                 (section) =>
//                     section &&
//                     section.offsetTop <= scrollPosition &&
//                     section.offsetTop + section.offsetHeight > scrollPosition
//             );
//             setActiveSection(current);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     useEffect(() => {
//         gsap.to('.progress-dot', {
//             scale: 1,
//             duration: 0.3,
//             ease: 'power2.out',
//             stagger: {
//                 amount: 0.2,
//             },
//         });
//     }, [activeSection]);

//     return (
//         <div className="fixed bottom-0 left-0 flex flex-col items-center mb-4 ml-4">
//             {sections.map((_, index) => (
//                 <div key={index} className="relative mb-8">
//                     <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="w-px h-full bg-gray-300"></div>
//                     </div>
//                     <div
//                         className={`progress-dot relative flex items-center justify-center w-8 h-8 transition-all duration-300 ${index === activeSection ? 'bg-white scale-125' : 'bg-black scale-100'} border border-white rounded-full`}
//                     />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default HorizontalProgressBar;






"use client";

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const sections = ['Hero', 'about', 'shop', 'support', 'community'];

const HorizontalProgressBar = () => {
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map((id) =>
                document.getElementById(id.toLowerCase())
            );
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            const current = sectionElements.findIndex(
                (section) =>
                    section &&
                    section.offsetTop <= scrollPosition &&
                    section.offsetTop + section.offsetHeight > scrollPosition
            );
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        gsap.to('.progress-dot', {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
            stagger: {
                amount: 0.2,
            },
        });
    }, [activeSection]);

    return (
        <div className="fixed bottom-0 left-0 flex flex-col items-center mb-4 ml-4">
            <div className="absolute inset-y-0 left-4 w-px bg-white/50"></div>
            {sections.map((_, index) => (
                <div key={index} className="relative mb-8 z-10">
                    <div
                        className={`progress-dot relative flex items-center justify-center w-8 h-8 transition-all duration-300 ${index === activeSection ? 'bg-white scale-125' : 'bg-black scale-100'} border border-white/50 rounded-full`}
                    />
                </div>
            ))}
        </div>
    );
};

export default HorizontalProgressBar;