import React from 'react'
import { Car, Wrench } from 'lucide-react'

const Cards: React.FC = () => {
    return (
        <div
            className="
          relative 
          w-full 
          max-w-xs 
          mx-auto 
          rounded-xl 
          overflow-hidden 
          shadow-2xl
          backdrop-blur-md
          bg-white/10
          border 
          border-white/30
        "
        >
            {/* Glassmorphism background effect */}
            <div
                className="
            absolute 
            inset-0 
            bg-gradient-to-br 
            from-white/20 
            to-white/10 
            opacity-30 
            pointer-events-none
          "
            ></div>

            <div className="relative z-10 p-8 text-center">
                <div className="text-white mb-4 flex justify-center space-x-4">
                    <Car
                        size={48}
                        className="
                text-white 
                bg-white/20 
                rounded-full 
                p-2 
                backdrop-blur-md
              "
                    />
                    <Wrench
                        size={48}
                        className="
                text-white 
                bg-white/20 
                rounded-full 
                p-2 
                backdrop-blur-md
              "
                    />
                </div>
                <h1 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
                    Car Parts
                </h1>
                <p className="text-white/80 mb-4 text-sm">
                    We sell parts for cars which are extremely rare to find.
                </p>
                <button
                    className="
              relative 
              bg-white/20 
              text-white 
              py-2 
              px-4 
              rounded-full 
              backdrop-blur-md
              border 
              border-white/30
              hover:bg-white/30
              focus:outline-none 
              focus:ring-2 
              focus:ring-white/50
              transition-all
              duration-300
              ease-in-out
              transform 
              hover:scale-105
            "
                >
                    Explore more
                </button>
            </div>
        </div>
    )
}

export default Cards