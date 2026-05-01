import React from 'react'
import {motion} from 'framer-motion'
import { skills } from '../assets/assets'

function Skills() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.1, ease: 'easeOut' }}
    viewport={{ once: false, amount: 0.2 }}
    id='skills'
    className='py-20 bg-dark-100'
    >

      <div className='container  mx-auto px-6'>
        <h2 className='text-3xl font-bold text-white text-center'>My <span className='text-purple'>Skills</span></h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Explore my technical skills and expertise in web development.</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          {/* Skill Card */}

         {
            skills.map((skill, index) => (
              <div key={index} className='bg-dark-300 rounded-lg p-6 transition duration-300 hover:bg-dark-400 cursor-pointer'> 
              <div className='flex flex-col items-center text-center'>
                <skill.icon className='text-4xl text-purple mb-4' />
                <h3 className='text-xl font-semibold text-white mb-2'>{skill.title}</h3>
              </div>
              <p className='text-gray-400 mb-4'>{skill.description}</p>
              <div>
               {skill.tags.map((tech)=> (
                <span key={tech} className='inline-block bg-white border-black-2 text-black text-xs px-2 py-1 rounded-full mt-4 mr-2 gap-0.5'>{tech}</span>
               ))}
              </div>
              </div>
            ))
         }

        </div>
      </div>

    </motion.div>
  )
}

export default Skills