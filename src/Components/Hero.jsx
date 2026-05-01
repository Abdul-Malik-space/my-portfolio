import React from 'react'
import {motion} from 'framer-motion'
import {assets} from "../assets/assets.js";
import profileImg from "../assets/profile.jpeg"

export default function Hero() {
  return (
    <motion.div initial={{opacity:0, y:50}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.6, delay:0.2}}
    viewport={{once: true}}
    id='Home'
    className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-{#1a1a1a} via-{#2d2d2d} to-{1a1a1a}'
    >

        <div className='container mx-auto px-4  flex flex-col md:flex-row justify-between items-center'>
            {/* left side content */}
            <div className='md:w-1/2 mb-10 md:mb-0'>
                <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                    Hi, I'm <span className='text-purple'>Abdul Malik</span>
                </h1 >
                <h2 className='text-xl md:text-2xl font-semibold mb-4 typewriter'>Full Stack Developer</h2>
                <p className='text-lg text-gray-300 mb-8'>I build responsive and user-friendly web applications using modern technologies.</p>

                <div>
                    <a href="Projects" className='bg-purple text-white px-6 py-3 rounded-lg mr-4 hover:bg-pink transition duration-300'>View Work</a>
                    <a href="Contact" className='bg-blue text-white px-6 py-3 rounded-lg hover:bg-pink transition duration-300'>Contact Me</a>
                </div>

            </div>
            {/* right side image */}

            <div className='md:w-1/2 flex justify-center'>

               <div className='relative w-64 h-64 md:w-80 md:h-80'>
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink animate-pulse-slow opacity-70'>
                    <motion.img
                    animate={{y:[0, -20, 0]}}
                    transition={{duration: 4,
                         repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                        }}

                    className='relative rounded-full w-64 h-64 md:h-80 md:w-80 object-cover z-10 animate-float'
                    src={profileImg}/>
                </div>
               </div>
            </div>

        </div>
   
    </motion.div>
  )
}
