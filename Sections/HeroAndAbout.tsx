// "use client"
// import Heading from '@/components/Heading'
// import RaceButton from '@/components/RaceButton'
// import Text from '@/components/Text'
// import React, { useEffect, useRef } from 'react'
// import { Download, Scale } from 'lucide-react';
// import Image from 'next/image'; // Assuming you're using Next.js for image optimization
// import carImg from '@/public/car.png'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const HearAndAbout = () => {
//     const carImageRef = useRef(null);

//     useEffect(() => {
//         const carImage = carImageRef.current;

//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".my-element",
//                 start: "top bottom",
//                 end: "top top",
//                 scrub: true,
//                 markers: false // Set to true for debugging
//             }
//         });

//         // Sticky and scaling animation
//         tl.to(carImage, {
//             position: 'fixed',
//             top: '60%',
//             right: '3rem',
//             transform: 'translateY(-50%)',
//             scale: 0.5, // Reduce size
//             duration: 1
//         });

//         // Cleanup function
//         return () => {
//             ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         };
//     }, []);

//     return (
//         <div>
//             <div id="hero" className='flex p-[7rem] pt-[9rem] pl-[13rem] relative scale-125 h-screen overflow-hidden'>
//                 <div className=' '> {/* Added z-10 to ensure text is above the image */}
//                     <div className='flex flex-row'>
//                         <Heading className='text-8xl'>
//                             Passion Meets <br />
//                             <span className='text-center pl-60'>Experience</span>
//                         </Heading>
//                         <Text className='text-2xl font-normal'>
//                             Meet enthusiast <br />
//                             Car Lovers
//                         </Text>
//                     </div>

//                     <div className='pl-4 -mt-10 space-y-8'>
//                         <Text className='text-2xl font-normal'>
//                             Unleash your <br />
//                             Luxury Experience
//                         </Text>
//                         <RaceButton>Download Now <Download /></RaceButton>
//                     </div>
//                 </div>

//             </div>

//             {/* <div className="text-center flex items-center justify-center scale-50  ">
//                 <div className='absolute'>
//                      <div className="flex items-center justify-center mb-4">
//                     <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
//                         <div className="w-8 h-8 rounded-full bg-gradient-to-b from-white to-black"></div>
//                     </div>
//                 </div>
//                 <p className="text-white text-lg">Scroll down</p>
//                 </div>
//             </div> */}
//             <div className='absolute my-element -mt-[33rem]  right-[3rem]' ref={carImageRef}>
//                 <Image
//                     src={carImg}
//                     alt='carImage'
//                     height={900}
//                     width={900}
//                 />
//             </div>
//             <div id="about" className='flex p-[7rem] pt-[9rem] pl-[13rem] relative scale-125 h-screen overflow-hidden'>
//                 <div className=' '> {/* Added z-10 to ensure text is above the image */}
//                     <div className='flex flex-row'>
//                         <Heading className='text-8xl'>
//                             About us
//                         </Heading>
//                     </div>

//                     <div className='pl-4  space-y-8'>
//                         <Text className='text-2xl font-normal w-1/2'>
//                             Figma ipsum component variant main layer. Main share group list shadow arrow inspect. Object follower flatten strikethrough slice component duplicate. Pencil image figjam device export outline. Community align union effect component arrow content. Ipsum clip background hand vector fill object library overflow connection. Draft bold pen hand ipsum editor follower.
//                         </Text>
//                     </div>
//                 </div>

//             </div>

//         </div>


//     )
// }

// export default HearAndAbout;



"use client"
import Heading from '@/components/Heading'
import RaceButton from '@/components/RaceButton'
import Text from '@/components/Text'
import React, { useEffect, useRef } from 'react'
import { Download } from 'lucide-react';
import Image from 'next/image';
import carImg from '@/public/car.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import wheel from "@/public/wheel.png"

gsap.registerPlugin(ScrollTrigger)

const HearAndAbout = () => {
    const carImageRef = useRef(null);
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const carImage = carImageRef.current;
        const heroSection = heroRef.current;
        const aboutSection = aboutRef.current;
        const container = containerRef.current;

        // Create a comprehensive ScrollTrigger animation
        gsap.to(carImage, {
            scrollTrigger: {
                trigger: container,
                start: "top top", // When the top of the container hits the top of viewport
                end: "bottom bottom", // When the bottom of the container reaches the bottom of viewport
                scrub: 1, // Smooth scrubbing with 1 second lag
                pin: carImage, // Pin the car image
                markers: false, // Set to true for debugging
                onUpdate: (self: any) => {
                    // Calculate progress through the scroll
                    const progress = self.progress;

                    // Define scale and position based on scroll progress
                    const scale = 1 - (progress * 0.3); // Scales from 1 to 0.5
                    const yPosition = progress * 800; // Moves down 500px

                    // Apply transformations
                    gsap.set(carImage, {
                        scale: scale,
                        y: yPosition,
                        transformOrigin: 'bottom right'
                    });
                }
            }
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={containerRef}>
            <div
                id="hero"
                ref={heroRef}
                className='flex p-[7rem] pt-[9rem] pl-[13rem] relative scale-125 h-screen overflow-hidden'
            >
                <div>
                    <div className='flex flex-row'>
                        <Heading className='text-8xl'>
                            Passion Meets <br />
                            <span className='text-center pl-60'>Experience</span>
                        </Heading>
                        <Text className='text-2xl font-normal'>
                            Meet enthusiast <br />
                            Car Lovers
                        </Text>
                    </div>

                    <div className='pl-4 -mt-10 space-y-8'>
                        <Text className='text-2xl font-normal'>
                            Unleash your <br />
                            Luxury Experience
                        </Text>
                        <RaceButton>Download Now <Download /></RaceButton>
                    </div>
                </div>
            </div>

            <div
                className='absolute my-element -mt-[33rem] right-[3rem] z-10'
                ref={carImageRef}
            >
                <Image
                    src={carImg}
                    alt='carImage'
                    height={900}
                    width={900}
                />
            </div>

            <div
                id="about"
                ref={aboutRef}
                className='flex p-[7rem] pt-[9rem] pl-[13rem] relative scale-125 h-screen overflow-hidden'
            >
                <div>
                    <div className='flex flex-row'>
                        <Heading className='text-8xl'>
                            About us
                        </Heading>
                    </div>

                    <div className='pl-4 space-y-8 flex justify-around items-center'>
                        <Text className='text-2xl font-normal w-1/2'>
                            Figma ipsum component variant main layer. Main share group list shadow arrow inspect. Object follower flatten strikethrough slice component duplicate. Pencil image figjam device export outline. Community align union effect component arrow content. Ipsum clip background hand vector fill object library overflow connection. Draft bold pen hand ipsum editor follower.
                        </Text>
                        <div className='relative'>
                            <Image
                                src={wheel}
                                alt='wheelImage'
                                width={150}
                                height={150}
                                className='mr-[20rem] -mt-[15rem] '
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HearAndAbout;