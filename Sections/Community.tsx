
import Heading from '@/components/Heading'
import RaceButton from '@/components/RaceButton'
import Text from '@/components/Text'
import React from 'react'
import { Download } from 'lucide-react';
import Image from 'next/image'; // Assuming you're using Next.js for image optimization
import phoneImg from '@/public/iMockup.png'
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Community = () => {
    return (
        <div className='flex p-[13rem] relative scale-125'>
            <div className=' '> {/* Added z-10 to ensure text is above the image */}
                <Heading className='text-8xl'>
                    Any Queries?
                </Heading>
                <div className='space-y-8'>
                    <Text className='text-2xl font-medium'>
                        Get solved all your  queries by <br /> experts
                    </Text>
                    <div className="bg-[#D9D9D933] text-white p-6 rounded-lg shadow-lg border border-white max-w-sm">
                        <h2 className="text-lg font-bold mb-2">Want quick response?<br />Try these!</h2>
                        <div className="flex items-center mb-2">
                            <Mail className="mr-2" />
                            <span>info@xyz.com</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <Phone className="mr-2" />
                            <span>+91 908634xxx2</span>
                        </div>
                        <div className="flex space-x-4">
                            <Button  className="bg-white text-gray-800 p-2  rounded-full">
                                <Facebook className='h-2 w-2' />
                            </Button>
                            <Button  className="bg-white text-gray-800 p-2 rounded-full">
                                <Instagram />
                            </Button>
                            <Button  className="bg-white text-gray-800 p-2 rounded-full">
                                <Youtube />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative flex-1 flex justify-end'>
                <ContactForm/>
            </div>
        </div>
    )
}

export default Community;