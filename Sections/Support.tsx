




// import Heading from '@/components/Heading'
// import RaceButton from '@/components/RaceButton'
// import Text from '@/components/Text'
// import React from 'react'
// import { Download } from 'lucide-react';
// import Image from 'next/image'; // Assuming you're using Next.js for image optimization
// import phoneImg from '@/public/iMockup.png'

// const Support = () => {
//     return (
//         <div className='flex p-[13rem] relative scale-125'>
//             <div className=' '> {/* Added z-10 to ensure text is above the image */}
//                 <Heading className='text-8xl'>
//                     Join our <br /> Community!
//                 </Heading>
//                 <div className='pl-8 space-y-8'>
//                     <Text className='text-5xl font-medium'>
//                         Download our App! <br />
//                         to join the community of biggest <br />
//                         car enthusiasts.
//                     </Text>
//                     <RaceButton>Download Now <Download /></RaceButton>
//                 </div>
//             </div>
//             <div className='relative flex-1 flex justify-end'>
//                 <div className='w-full hover:wobble transition-all duration-300 z-10 '>
//                     <Image
//                         src={phoneImg} // Replace with your image path
//                         alt='Car Enthusiasts'
//                         layout='fill' // Use 'fill' for absolute positioning
//                         objectFit='contain' // Adjust to maintain aspect ratio
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Support;


"use client"
import Heading from '@/components/Heading'
import RaceButton from '@/components/RaceButton'
import Text from '@/components/Text'
import React, { useEffect, useRef } from 'react'
import { Download } from 'lucide-react';
import Image from 'next/image';
import { gsap } from 'gsap';
import phoneImg from '@/public/iMockup.png'

const Support = () => {
    const imageRef = useRef(null);

    useEffect(() => {
        // Create a GSAP timeline for the image animation
        const tl = gsap.timeline({ repeat: -1, yoyo: true });

        tl.to(imageRef.current, {
            rotation: 5, // Slight rotation
            scale: 1.05, // Slight scale up
            y: -20, // Slight vertical movement
            duration: 1.5,
            ease: 'power1.inOut'
        });
    }, []);

    return (
        <div className='flex p-[13rem] relative scale-125'>
            <div>
                <Heading className='text-8xl'>
                    Join our <br /> Community!
                </Heading>
                <div className='pl-8 space-y-8'>
                    <Text className='text-5xl font-medium'>
                        Download our App! <br />
                        to join the community of biggest <br />
                        car enthusiasts.
                    </Text>
                    <RaceButton>Download Now <Download /></RaceButton>
                </div>
            </div>
            <div className='relative flex-1 flex justify-end'>
                <div
                    ref={imageRef}
                    className='w-full hover:wobble transition-all duration-300 z-10'
                >
                    <Image
                        src={phoneImg}
                        alt='Car Enthusiasts'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
            </div>
        </div>
    )
}

export default Support;