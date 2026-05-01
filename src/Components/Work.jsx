import React from 'react'
import {motion} from 'framer-motion'
import { workData } from '../assets/assets'
import { div } from 'framer-motion/client'

function Work() {
  return (
   <motion.div
     initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.1, ease: 'easeOut' }}
    viewport={{ once: false, amount: 0.2 }}
    id='Experience'
    className='py-20 bg-dark-100'
    >

        <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold mb-4 text-center'>Work <span className='text-purple'>Experience</span></h2>
                <p className='font-semibold text-center max-w-2xl mx-auto mb-2'>My Professional journey so far</p>

                <div className='max-w-3xl mx-auto'>
                    <div className='space-y-12'>
                       {
                            workData.map((data, index) => {
                                return (
                                <div key={index} className="relative pl-12 
                                    before:content-[''] before:absolute before:left-0 
                                    before:top-0 before:w-[2px] before:h-full 
                                    before:bg-purple cursor-pointer hover:-translate-y-2 
                                    transition-all duration-300">

                                    {/* timeline */}
                                    <div className='absolute left-[-0.5rem] top-0 
                                    w-6 h-6 rounded-full bg-purple-600 border-4 border-white'>
                                    </div>

                                    {/* Box */}
                                    <div className='bg-dark-300 rounded-2xl p-6'>
                                    <div className='flex justify-between items-start mb-2'>
                                        <h2>{data.role}</h2>
                                        <span className='px-3 py-1 bg-purple/20 text-purple rounded-full text-xm md:text-sm'>{data.duration}</span>
                                    </div>
                                    <p className='text-gray-400 mb-2'>{data.company}</p>
                                    <p className='text-gray-300'>{data.description}</p>
                                    </div>

                                </div>
                                )
                            })
                            }
                    </div>

                </div>
        </div>
        </motion.div>
  )
}

export default Work