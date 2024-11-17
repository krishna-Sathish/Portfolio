import React from 'react'
import HeroImg from '../assets/hacker.jpg'
import { AiOutlineFacebook,AiOutlineLinkedin,AiOutlineGithub } from "react-icons/ai";
const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row justify-center px-5 py-32 bg-gray-900'>
        <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>SATHISH </span>
        <p className='text-2xl'>I'm a Full-stack developer</p></h1>
         <div className='flex py-10'>
            <a href='/facebook' className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
            <a href='/likedin' className='pr-5  hover:text-white'><AiOutlineLinkedin size={40}/></a>
            <a href='/github' className=' hover:text-white'> <AiOutlineGithub size={40}/></a>
         </div>
        </div>

      <img className='md:w-1/3 h-56 rounded' src={HeroImg} alt='hero_img'/>
    </section>
  )
}

export default Hero
