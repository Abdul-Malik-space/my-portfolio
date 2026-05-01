import React from 'react'
import { BiHome } from 'react-icons/bi'
import { motion } from 'framer-motion'
import AboutImage from "../assets/about.png"
import { aboutInfo } from '../assets/assets'
function About() {
  return (
    <motion.div
     animate={{opacity:1, y:0}}
    transition={{duration:0.6, delay:0.2}}
    viewport={{once: true}}
    id="about" 
    className="py-20 bg-dark-200"
    >
        <div className='mx-0 px-6'>
            <h2 className='text-3xl font-bold text-white text-center mb-4'>About
                <span className='text-purple'> Me</span></h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know about my background and passion for web development.</p>

                    {/* Image and aobut section */}
                <div className='flex flex-col md:flex-row items-center gap-12'>
                    {/* img Section */}
                        <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                            <motion.img
                             animate={{opacity:1, y:0}}
                            transition={{duration:0.9, delay:0.2}}
                             viewport={{once: false}}
                                className='w-full h-full object-cover rounded-2xl'
                            src={AboutImage} alt="Profile" />
                        </div>

                    {/* about section */}
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                     viewport={{ once: false, amount: 0.2 }}
                     className='md:w-1/2'
                    >

                        <div className='rounded-2xl p-8'>
                            <h3 className='text-2xl font-semibold text-white mb-4'>Background</h3>
                            <p className='text-gray-400 mb-6'>I am a passionate web developer with a strong background in creating dynamic and responsive web applications. With a keen eye for design and a commitment to writing clean, efficient code, I strive to deliver exceptional user experiences.</p>
                             <p className='text-gray-400 mb-6'>
                                I have experience working with a variety of technologies, including React, Node.js, and MongoDB. I enjoy collaborating with teams to bring innovative ideas to life and am always eager to learn new skills and stay up-to-date with the latest industry trends.
                             </p>

                             {/* Cards */}

                             <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {
                                    aboutInfo.map((item, index) => (
                                        <div key={index} className='bg-dark-300 rounded-lg p-6 transition duration-300 hover:bg-dark-400'>
                                           <div className='text-purple text-4xl'>
                                            <item.icon />
                                           </div>
                                           <h3 className='text-xl font-semibold text-white mb-1'>{item.title}</h3>
                                             <p className='text-gray-400'>{item.description}</p>
                                        </div>
                                    ))
                                }

                             </div>
                                                            
                        </div>

                    </motion.div>

                </div>
        </div>
    
    </motion.div>
  )
}

export default About