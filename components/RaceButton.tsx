// import React from 'react'
// import { Button } from './ui/button'

// const RaceButton = ({className,onClick}:any) => {
//   return (
//     <Button onClick={onClick} className={`border-[.5px] rounded-tl-[2rem] bg-transparent px-7 font-bold text-lg border-white ${className}`}>Login</Button>
//   )
// }

// export default RaceButton



"use client"
import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const RaceButton = ({ className, onClick,children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" space-y-6"
    >
    <Button
      onClick={onClick}
      className={`border-[1px] rounded-tl-[2rem] bg-white/10 backdrop-blur-md px-7 font-bold text-lg border-white ${className}`}
    >
      {children}
    </Button>
    </motion.div>

  );
};

export default RaceButton;