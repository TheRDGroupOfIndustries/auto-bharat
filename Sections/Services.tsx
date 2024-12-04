
import Heading from '@/components/Heading'
import Text from '@/components/Text'
import React from 'react'
import Image from 'next/image'; // Assuming you're using Next.js for image optimization
import frame from '@/public/frame.png'
import Cards from '@/components/Cards';

const Services = () => {
    return (
        <div className='flex flex-col justify-between mt-40 py-[7rem]  items-center relative scale-125'>
            <div className='flex flex-col items-center justify-center '> {/* Added z-10 to ensure text is above the image */}
                <Heading className='text-8xl'>
                    Services
                </Heading>
                <div className=''>
                    <Text className='text-xl text-center font-medium'>
                        We are trying to make the best community of enthusiastic car lovers! <br /> where everyone car enthusiast can connect!
                    </Text>
                </div>
            </div>
            <div className='mt-40'>
                <Image
                   src={frame}
                   alt='frameImage'
                   height={600}
                   width={1000}
                />
            </div>
            <div className="absolute w-full  flex flex-row items-center scale-75 justify-center ml-[15rem] mt-20 ">
                <div className="relative top-[20%]  transform -translate-x-1/2 scale-75 mt-40">
                    <Cards />
                </div>
                <div className="relative  transform -translate-x-1/2">
                    <Cards />
                </div>
                <div className="relative top-[20%]  transform -translate-x-1/2 scale-75 mt-40">
                    <Cards />
                </div>
            </div>
        </div>
    )
}

export default Services;