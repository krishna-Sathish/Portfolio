import React from 'react'
import HeroImg from '../assets/hacker.jpg'
import { AiOutlineFacebook,AiOutlineLinkedin,AiOutlineGithub } from "react-icons/ai";
const Hero = () => {
    const config={
      subtitle :"I'm a Full-stack developer",
      social :{
        faceBook:'',
        linkedin:'',
        github:''
      }
    }
  return (
    <section className='flex flex-col md:flex-row justify-center px-5 py-32 bg-gray-800' id='hero'>
        <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>SATHISH </span>
        <p className='text-2xl'>{config.subtitle} </p></h1>
         <div className='flex py-10'>
            <a href={config.social.faceBook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
            <a href={config.social.linkedin} className='pr-5  hover:text-white'><AiOutlineLinkedin size={40}/></a>
            <a href={config.social.github} className=' hover:text-white'> <AiOutlineGithub size={40}/></a>
         </div>
        </div>

      <img className='md:w-1/3 h-56 rounded' src={HeroImg} alt='hero_img'/>
    </section>
  )
}

export default Hero
