import React from 'react'
import HeroImg from '../assets/Sathish.jpg'
import { AiOutlineLinkedin,AiOutlineGithub } from "react-icons/ai";
const Hero = () => {
    const config={
      subtitle :"I'm a Full-stack developer",
      social :{
        
        linkedin:'https://www.linkedin.com/in/krishnasathish3773',
        github:'https://github.com/krishna-Sathish'
      }
    }
  return (
    <section className='flex flex-col md:flex-row justify-center px-5 py-32 bg-gray-800' id='hero'>
        <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> I'm <span className='name_design'>SATHISH </span>
        <p className='text-2xl'>{config.subtitle} </p></h1>
         <div className='flex py-10 text-gray-400'>
            <a href={config.social.linkedin} target='_blank' rel="noopener noreferrer" className='pr-5  hover:text-white'><AiOutlineLinkedin size={40}/></a>
            <a href={config.social.github} target='_blank'  rel="noopener noreferrer" className=' hover:text-white'> <AiOutlineGithub size={40}/></a>
         </div>
        </div>

      <img className='md:w-1/3 h-56 hero-img' src={HeroImg} alt='hero_img'/>
    </section>
  )
}

export default Hero
