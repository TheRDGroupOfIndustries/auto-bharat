// // components/Navbar.tsx
// "use client"
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { useRouter } from 'next/navigation';
// import RaceButton from './RaceButton';

// const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
//     const linkRef = useRef<HTMLAnchorElement>(null);

//     useEffect(() => {
//         const link = linkRef.current;
//         if (!link) return;

//         // Hover animation
//         gsap.set(link, { transformOrigin: 'center' });

//         const onEnter = () => {
//             gsap.to(link, {
//                 scale: 1.1,
//                 color: '#60A5FA',
//                 duration: 0.3,
//                 ease: 'power1.out'
//             });
//         };

//         const onLeave = () => {
//             gsap.to(link, {
//                 scale: 1,
//                 color: 'white',
//                 duration: 0.3,
//                 ease: 'power1.out'
//             });
//         };

//         link.addEventListener('mouseenter', onEnter);
//         link.addEventListener('mouseleave', onLeave);

//         return () => {
//             link.removeEventListener('mouseenter', onEnter);
//             link.removeEventListener('mouseleave', onLeave);
//         };
//     }, []);

//     return (
//         <a
//             ref={linkRef}
//             href={href}
//             className="relative text-white text-xl transition-colors duration-300 ease-in-out"
//         >
//             {children}
//             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
//         </a>
//     );
// };

// const Navbar: React.FC = () => {
//     const navRef = useRef<HTMLElement>(null);
//     const logoRef = useRef<HTMLDivElement>(null);
//     const router = useRouter();

//     useEffect(() => {
//         if (!navRef.current || !logoRef.current) return;
        
//         const navElements = navRef.current.children;
//         const logo = logoRef.current;

//         // Stagger animation for nav items
//         gsap.fromTo(
//             navElements,
//             {
//                 opacity: 0,
//                 y: -20
//             },
//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 0.7,
//                 stagger: 0.2,
//                 ease: 'power2.out'
//             }
//         );

//         // Logo animation
//         gsap.fromTo(
//             logo,
//             {
//                 scale: 0.5,
//                 opacity: 0
//             },
//             {
//                 scale: 1,
//                 opacity: 1,
//                 duration: 0.7,
//                 ease: 'elastic.out(1, 0.3)'
//             }
//         );

//         // Scroll-triggered subtle movement
//         const handleScroll = () => {
//             const scrollY = window.scrollY;
//             gsap.to(navRef.current, {
//                 y: scrollY * 0.1,
//                 ease: 'power1.out',
//                 duration: 0.5
//             });
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const handleLoginClick = () => {
//         // Playful login button animation
//         gsap.to('.login-button', {
//             scale: 1.1,
//             rotation: 5,
//             duration: 0.1,
//             yoyo: true,
//             repeat: 3,
//             ease: 'power1.inOut'
//         });

//         // Optional: Navigate to login page
//         router.push('/login');
//     };

//     return (
//         <nav
//             ref={navRef}
//             className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-black/70 backdrop-blur-sm"
//         >
//             <div
//                 ref={logoRef}
//                 className="text-white text-3xl font-bold tracking-wider cursor-pointer hover:text-blue-400 transition-colors"
//                 onClick={() => router.push('/')}
//             >
//                 AutoBharat
//             </div>

//             <div className="flex space-x-8 items-center">
//                 <NavLink href="#about">About us</NavLink>
//                 <NavLink href="#shop">Shop</NavLink>
//                 <NavLink href="#support">Support</NavLink>
//                 <NavLink href="#community">Community</NavLink>
//             </div>

//             <RaceButton
//                 className="login-button text-white border border-white  hover:bg-gray-800 transition-all duration-300"
//                 onClick={handleLoginClick}
//             >
//                 Login
//             </RaceButton>
//         </nav>
//     );
// };

// export default Navbar;





"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation';
import RaceButton from './RaceButton';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
    const linkRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const link = linkRef.current;
        if (!link) return;

        // Hover animation
        gsap.set(link, { transformOrigin: 'center' });

        const onEnter = () => {
            gsap.to(link, {
                scale: 1.1,
                color: '#60A5FA',
                duration: 0.3,
                ease: 'power1.out'
            });
        };

        const onLeave = () => {
            gsap.to(link, {
                scale: 1,
                color: 'white',
                duration: 0.3,
                ease: 'power1.out'
            });
        };

        link.addEventListener('mouseenter', onEnter);
        link.addEventListener('mouseleave', onLeave);

        return () => {
            link.removeEventListener('mouseenter', onEnter);
            link.removeEventListener('mouseleave', onLeave);
        };
    }, []);

    return (
        <a
            ref={linkRef}
            href={href}
            className="relative text-white text-xl transition-colors duration-300 ease-in-out"
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </a>
    );
};

const Navbar: React.FC = () => {
    const navRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (!navRef.current || !logoRef.current) return;

        const navElements = navRef.current.children;
        const logo = logoRef.current;

        // Stagger animation for nav items
        gsap.fromTo(
            navElements,
            {
                opacity: 0,
                y: -20
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.2,
                ease: 'power2.out'
            }
        );

        // Logo animation
        gsap.fromTo(
            logo,
            {
                scale: 0.5,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.7,
                ease: 'elastic.out(1, 0.3)'
            }
        );

        // Remove scroll-triggered subtle movement
        // const handleScroll = () => {
        //     const scrollY = window.scrollY;
        //     gsap.to(navRef.current, {
        //         y: scrollY * 0.1,
        //         ease: 'power1.out',
        //         duration: 0.5
        //     });
        // };

        // window.addEventListener('scroll', handleScroll);

        // return () => {
        //     window.removeEventListener('scroll', handleScroll);
        // };
    }, []);

    const handleLoginClick = () => {
        // Playful login button animation
        gsap.to('.login-button', {
            scale: 1.1,
            rotation: 5,
            duration: 0.1,
            yoyo: true,
            repeat: 3,
            ease: 'power1.inOut'
        });

        // Optional: Navigate to login page
        router.push('/login');
    };

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-black/70 backdrop-blur-sm"
        >
            <div
                ref={logoRef}
                className="text-white text-3xl font-bold tracking-wider cursor-pointer hover:text-blue-400 transition-colors"
                onClick={() => router.push('/')}
            >
                AutoBharat
            </div>

            <div className="flex space-x-8 items-center">
                <NavLink href="#about">About us</NavLink>
                <NavLink href="#shop">Shop</NavLink>
                <NavLink href="#support">Support</NavLink>
                <NavLink href="#community">Community</NavLink>
            </div>

            <RaceButton
                className="login-button text-white border border-white hover:bg-gray-800 transition-all duration-300"
                onClick={handleLoginClick}
            >
                Login
            </RaceButton>
        </nav>
    );
};

export default Navbar;