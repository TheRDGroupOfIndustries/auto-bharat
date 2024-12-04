// import Text from "@/components/Heading";
// import HorizontalProgressBar from "@/components/HorizontalProgressBar";
// import { Button } from "@/components/ui/button";
// import Community from "@/Sections/Community";
// import HearAndAbout from "@/Sections/HeroAndAbout";
// import Services from "@/Sections/Services";
// import Support from "@/Sections/Support";

// export default function Home() {
//   return (
//     <div className="bg-black h-full w-screen overflow-hidden">
//       <HorizontalProgressBar/>
//       <div ><HearAndAbout/></div>
//       <div id="services"><Services /></div>
//       <div id="support"><Support /></div>
//       <div id="community"><Community /></div>
//     </div>
//   );
// }



"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Text from "@/components/Heading";
import HorizontalProgressBar from "@/components/HorizontalProgressBar";
import { Button } from "@/components/ui/button";
import Community from "@/Sections/Community";
import HearAndAbout from "@/Sections/HeroAndAbout";
import Services from "@/Sections/Services";
import Support from "@/Sections/Support";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // Create refs for each section
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const supportRef = useRef(null);
  const communityRef = useRef(null);

  useEffect(() => {
    // Animation configuration for each section
    const sectionAnimations = [
      {
        ref: heroRef,
        animation: {
          opacity: 0,
          y: 100,
          initial: { opacity: 0, y: 100 },
          finalOpacity: 1,
          finalY: 0
        }
      },
      {
        ref: servicesRef,
        animation: {
          opacity: 0,
          x: -100,
          initial: { opacity: 0, x: -100 },
          finalOpacity: 1,
          finalX: 0
        }
      },
      {
        ref: supportRef,
        animation: {
          opacity: 0,
          x: 100,
          initial: { opacity: 0, x: 100 },
          finalOpacity: 1,
          finalX: 0
        }
      },
      {
        ref: communityRef,
        animation: {
          opacity: 0,
          y: 100,
          initial: { opacity: 0, y: 100 },
          finalOpacity: 1,
          finalY: 0
        }
      }
    ];

    // Create scroll animations for each section
    sectionAnimations.forEach(({ ref, animation }) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          {
            opacity: animation.initial.opacity,
            y: animation.initial.y,
            x: animation.initial.x
          },
          {
            opacity: animation.finalOpacity,
            y: animation.finalY,
            x: animation.finalX,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%', // Trigger when 80% of the section is in view
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black h-full w-screen overflow-hidden">
      <HorizontalProgressBar />
      <div  ref={heroRef}><HearAndAbout /></div>
      <div id="services"><Services /></div>
      <div id="support" ref={supportRef}><Support /></div>
      <div id="community" ref={communityRef}><Community /></div>
    </div>
  );
}