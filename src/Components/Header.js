import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    
    // Close menu when a link is clicked
    const handleLinkClick = () => {
      setToggleMenu(false);
    };

  return (
    
       <header className=' flex justify-between px-5 py-3 bg-gray-700 text-white'>
         <a href='/' className='font-bold '>
              PORTFOLIO
         </a>

         <nav className='hidden md:block'>
            <ul className='flex destop_nav'>
               <li><a href='/'>Home</a></li>
               <li><a href='#about'>About</a></li>
               <li><a href='#project'>Project</a></li>
               <li><a href='#resume'>Resume</a></li>
               <li><a href='#contact'>Contact</a></li>

            </ul>
         </nav>
        {
         toggleMenu && <nav className='block md:hidden'>
            <ul className='flex flex-col mobile_nav'>
               <li><a href='/' onClick={handleLinkClick}>Home</a></li>
               <li><a href='#about' onClick={handleLinkClick}>About</a></li>
               <li><a href='#project' onClick={handleLinkClick}>Project</a></li>
               <li><a href='#resume' onClick={handleLinkClick}>Resume</a></li>
               <li><a href='#contact' onClick={handleLinkClick}>Contact</a></li>

            </ul>
         </nav>  
         }
           <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden' aria-label="Toggle menu"><Bars3Icon className='text-white h-8'/></button>
       </header>
  )
}

export default Header
