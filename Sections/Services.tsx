// "use client"
// import Heading from '@/components/Heading'
// import Text from '@/components/Text'
// import React, { useRef } from 'react'
// import Image from 'next/image'; // Assuming you're using Next.js for image optimization
// import frame from '@/public/frame.png'
// import Cards from '@/components/Cards';
// import useCardAnimation from '@/components/useCardAnimation';

// const Services = () => {
//     const cardsRef = useRef<HTMLDivElement>(null);

//     useCardAnimation('.card');

//     return (
//         <div className='flex flex-col justify-between mt-40 py-[7rem]  items-center relative scale-125'>
//             <div className='flex flex-col items-center justify-center '> {/* Added z-10 to ensure text is above the image */}
//                 <Heading className='text-8xl'>
//                     Services
//                 </Heading>
//                 <div className=''>
//                     <Text className='text-xl text-center font-medium'>
//                         We are trying to make the best community of enthusiastic car lovers! <br /> where everyone car enthusiast can connect!
//                     </Text>
//                 </div>
//             </div>
//             <div className='mt-40'>
//                 <Image
//                    src={frame}
//                    alt='frameImage'
//                    height={600}
//                    width={1000}
//                 />
//             </div>
//             <div ref={cardsRef} className="absolute w-full  flex flex-row items-center scale-75 justify-center ml-[15rem] mt-20 ">
//                 <div className="card relative top-[20%]  transform -translate-x-1/2 scale-75 mt-40">
//                     <Cards />
//                 </div>
//                 <div className="card relative  transform -translate-x-1/2">
//                     <Cards />
//                 </div>
//                 <div className="card relative top-[20%]  transform -translate-x-1/2 scale-75 mt-40">
//                     <Cards />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Services;

"use client"
import Heading from '@/components/Heading'
import Text from '@/components/Text'
import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image';
import frame from '@/public/frame.png'
import Cards from '@/components/Cards';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const [visibleCards] = useState(3);

    useEffect(() => {
        if (!sectionRef.current || !cardsRef.current) return;

        const cards = gsap.utils.toArray('.card') as HTMLElement[];

        // Calculate spacing and card visibility parameters
        const spacing = 0.1;
        const cardsVisible = Math.min(visibleCards, cards.length);
        const cardDuration = Math.ceil(cardsVisible / 2) * spacing;
        const startTime = cards.length * spacing + cardDuration;
        const loopTime = startTime + (cards.length * spacing) - spacing;

        // Initial setup of cards
        gsap.set(cards, { xPercent: 0, opacity: 0, scale: 0 });

        // Create raw sequence for card animations
        const rawSequence = gsap.timeline({ paused: true });
        const seamlessLoop = gsap.timeline({
            paused: true,
            repeat: -1,
            onRepeat() {
                this._time === this._dur && (this._tTime += this._dur - 0.01);
            }
        });

        // Prepare multiple instances of cards for seamless looping
        const totalCards = cards.length * 2 + cardsVisible;

        for (let i = 0; i < totalCards; i++) {
            const index = i % cards.length;
            const item = cards[index];
            const time = i * spacing;

            // Card scale and opacity animation (0-1-0)
            rawSequence.fromTo(
                item,
                { scale: 0.6, opacity: 0, marginTop:20 },
                {
                    scale: 1,
                    opacity: 1,
                    zIndex: 100,
                    duration: cardDuration,
                    repeat: 1,
                    yoyo: true,
                    ease: "power1.in",
                    immediateRender: false
                },
                time
            )
                // Horizontal movement animation
                .fromTo(
                    item,
                    { xPercent: 0 }, // Start from the same position
                    {
                        xPercent: 400, // Move to the right
                        duration: cardDuration * 2,
                        ease: "none",
                        immediateRender: false
                    },
                    time
                );
        }

        // Set initial time for raw sequence
        rawSequence.time(startTime);

        // Create seamless loop
        seamlessLoop.to(rawSequence, {
            time: loopTime,
            duration: loopTime - startTime,
            ease: "none"
        });

        // Scrubbing tween
        const scrub = gsap.to(seamlessLoop, {
            totalTime: 0,
            duration: 0.5,
            ease: "power3",
            paused: true
        });

        // ScrollTrigger configuration
        const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top top',
            end: () => '+=3000',
            pin: sectionRef.current,
            onUpdate(self) {
                if (self.progress < 1 || self.progress > 0) {
                    scrub.vars.totalTime = gsap.utils.snap(
                        spacing,
                        self.progress * seamlessLoop.duration()
                    );
                    scrub.invalidate().restart();
                }
            }
        });

        // Cleanup
        return () => {
            trigger.kill();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [visibleCards]);

    return (
        <div ref={sectionRef} className='min-h-screen w-full overflow-hidden'>
            <div className='flex flex-col items-center justify-center pt-40 pb-20'>
                <Heading className='text-8xl mb-6'>
                    Services
                </Heading>
                <Text className='text-xl font-medium max-w-2xl text-center'> We are trying to make the best community of enthusiastic car lovers! <br />
                    Where every car enthusiast can connect!
                </Text>
            </div>

            <div className='relative w-full flex justify-center mt-20'>
                <Image
                    src={frame}
                    alt='frameImage'
                    height={600}
                    width={1000}
                />
            </div>

            <div
                ref={cardsRef}
                className="flex flex-row items-center -ml-[50rem] justify-center space-x-0 w-full will-change-transform -mt-[30rem]"
                style={{ position: 'relative', height: '300px' }} // Set a height for the container
            >
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="card absolute top-0 left-1/2 transform -translate-x-1/2">
                        <Cards />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services;