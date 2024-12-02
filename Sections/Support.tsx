




import Heading from '@/components/Heading'
import RaceButton from '@/components/RaceButton'
import Text from '@/components/Text'
import React from 'react'
import { Download } from 'lucide-react';
import Image from 'next/image'; // Assuming you're using Next.js for image optimization
import phoneImg from '@/public/iMockup.png'

const Support = () => {
    return (
        <div className='flex p-[13rem] relative scale-125'>
            <div className=' '> {/* Added z-10 to ensure text is above the image */}
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
                <div className='w-full hover:wobble transition-all duration-300 z-10 '>
                    <Image
                        src={phoneImg} // Replace with your image path
                        alt='Car Enthusiasts'
                        layout='fill' // Use 'fill' for absolute positioning
                        objectFit='contain' // Adjust to maintain aspect ratio
                    />
                </div>
            </div>
        </div>
    )
}

export default Support;