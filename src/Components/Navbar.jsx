import React from 'react'

export default function () {

    const [showMenu, setShowMenu] = React.useState(false);
  return (
    
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
        <div>
            <a href="#" className='text-3xl font-bold text-white'>
                Abdul 
                <span className='text-purple'>Malik </span>
                <div className='w-4 h-4 rounded-full bg-purple'></div>
            </a>
        </div>
        <div className='hidden md:flex space-x-10'>
            <a href="#Home" className='text-white/80 relative transition duration-300 hover:text-purple group'>
                <span>Home</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>


             <a href="#About Us" className='text-white/80 relative transition duration-300 hover:text-purple group'>
                <span>About Us</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>


             <a href="#Skills" className='text-white/80 relative transition duration-300 hover:text-purple group'>
                <span>Skills</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>

             <a href="#Projects" className='text-white/80 relative transition duration-300 hover:text-purple group'>
                <span>Projects</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>

             <a href="#Experience" className='text-white/80 relative transition duration-300 hover:text-purple group'>
                <span>Experience</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>

             <a href="#Contact" className='text-white/80 relative transition duration-300 hover:text-purple group'>
                <span>Contact</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            
        </div>
        <div className='md:hidden'>
            {
                showMenu ? 
                <button onClick={() => setShowMenu(false)} className='text-white text-2xl focus:outline-none'>
                    &#10005;
                </button>   
                :
                <button onClick={() => setShowMenu(true)} className='text-white text-2xl focus:outline-none'>
                    &#9776;
                </button>
            }
            
        </div>
        </div>


        {
            showMenu && (
                <div className='absolute top-16 right-8 bg-dark-100/90 backdrop-blur-sm rounded-lg shadow-lg py-4 px-6 flex flex-col space-y-4 mt-6 cursor-pointer'>
                    <a href="#Home" className='text-white/80 hover:text-purple transition duration-300'>Home</a>
                    <a href="#About" className='text-white/80 hover:text-purple transition duration-300'>About Us</a>
                    <a href="#Skills" className='text-white/80 hover:text-purple transition duration-300'>Skills</a>
                    <a href="#Projects" className='text-white/80 hover:text-purple transition duration-300'>Projects</a>
                    <a href="#Experience" className='text-white/80 hover:text-purple transition duration-300'>Experience</a>
                    <a href="#Contact" className='text-white/80 hover:text-purple transition duration-300'>Contact</a>
                </div>
            )
        }
    </nav>
  )
}
