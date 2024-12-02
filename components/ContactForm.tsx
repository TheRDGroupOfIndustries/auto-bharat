import React from 'react';
import { Button } from '@/components/ui/button'; // Import Shadcn Button component
import { Input } from '@/components/ui/input'; // Import Shadcn Button component
import { Textarea } from '@/components/ui/textarea'; // Import Shadcn Button component

const ContactForm: React.FC = () => {
    return (
        <div className="bg-[#D9D9D933] p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-white text-2xl font-bold mb-4 relative">
                Get in Touch
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-white">.</span>
            </h2>
            <form className="space-y-4">
                <Input
                    type="text"
                    placeholder="Full name"
                    className="w-full p-3 rounded-full bg-[#D9D9D933] text-white placeholder-white/30 focus:outline-none"
                />
                <Input
                    type="email"
                    placeholder="Your email"
                    className="w-full p-3 rounded-full bg-[#D9D9D933] text-white placeholder-white/30 focus:outline-none"
                />
                <Input
                    type="tel"
                    placeholder="Your phone"
                    className="w-full p-3 rounded-full bg-[#D9D9D933] text-white placeholder-white/30 focus:outline-none"
                />
                <Textarea
                    placeholder="Your message"
                    className="w-full p-3 rounded-lg bg-[#D9D9D933] text-white placeholder-white/30 focus:outline-none h-32"
                />
                <div className="flex justify-end">
                    <Button
                        type="submit"
                        className="  p-4 px-10 rounded-full bg-[#D9D9D933] text-white hover:bg-white/30 focus:outline-none"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;