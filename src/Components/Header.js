import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
const Header = () => {
    const [toggleMenu,setToogleMenu]=useState(false)
  return (
    
       <header className=' flex justify-between px-5 py-3 bg-gray-700 text-white'>
         <a href='/' className='font-bold '>
              PORTFOLIO
         </a>

         <nav className='hidden md:block'>
            <ul className='flex'>
               <li><a href='/'>Home</a></li>
               <li><a href='#about'>About</a></li>
               <li><a href='#project'>Project</a></li>
               <li><a href='#resume'>Resume</a></li>
               <li><a href='#contact'>Contact</a></li>

            </ul>
         </nav>
        {
         toggleMenu && <nav className='block md:hidden'>
            <ul onClick={()=>setToogleMenu(!toggleMenu)} className='flex flex-col  mobile_nav'>
               <li><a href='/'>Home</a></li>
               <li><a href='#about'>About</a></li>
               <li><a href='#project'>Project</a></li>
               <li><a href='#resume'>Resume</a></li>
               <li><a href='#contact'>Contact</a></li>

            </ul>
         </nav>  
         }
           <button onClick={()=>setToogleMenu(!toggleMenu) } className='block md:hidden'><Bars3Icon className='text-white h-8'/></button>
       </header>
  )
}

export default Header
