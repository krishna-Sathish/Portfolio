import React from 'react'
const About = () => {
  const config={
    line1:`Hi, my name is Sathish. I'm a Full Stack Web Developer with experience in building frontend-based projects.`,
    line2:`I am proficient in frontend skills like HTML, CSS, JavaScript, React, Redux Toolkit, Axios, Bootstrap, SCSS, Tailwind CSS, and many more.`,
    line3:`In backend development, I am skilled in Python.`
  }
  return (
    <section className=' flex flex-col md:flex-row bg-gray-950 px-5' id='about'>
            <div className='md:w-1/2 py-5'>
                 <img className='rounded-full my-3' src='https://image.lexica.art/full_webp/2a1295dc-c5d2-44fb-87e5-c849c4584b71' alt='about-img'/>
            </div> 
            <div className='md:w-1/2 flex justify-center'>
                 <div className=' flex flex-col justify-center ms-3'>
                 <h1 className='text-white text-4xl border-b-4  mb-5 w-[170px] font-bold'>About me</h1> 
                 <p className='text-white mt-3'>{config.line1}</p>
                 <p className='text-white mt-3'>{config.line2}</p>
                 <p className='text-white my-3'>{config.line3}</p>
                 </div>
                 
                
        </div> 
    </section>
  )
}

export default About
