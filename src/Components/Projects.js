import React from 'react'
const Projects = () => {
  return (
    <section className='flex flex-col px-5 py-10 md:py-20 justify-center text-white bg-gray-800'>
     <div className='w-full'>
       <div className='flex flex-col px-10 py-5'>
       <h1 className='text-4xl border-b-4  mb-5 w-[140px] font-bold'>Projects</h1>
       <p className='text-white'>These are some of my projects. I have built them using frontend technologies. Check them out!</p>
       </div>
     </div>
     <div className='w-full'>
           <div className='flex flex-col md:flex-row px-10 gap-5'>
            <div className='relative'>
            <img className='h-[170px] w-[500px]' src='https://image.lexica.art/full_webp/b9136dcd-c698-4f0e-a5f8-7e45ea4e8222' alt='e-commerce' />
             <div className='project-ani'>
                <p className='text-center py-5 px-5'>A Ecommerce Website.Build with HTML,CSS</p>
             </div>
            </div>
            <div className='relative'>
            <img className='h-[170px] w-[500px]' src='https://image.lexica.art/full_webp/f3719158-4904-4312-a9ad-5b09a48d4f07' alt='meal-finder' />
             <div className='project-ani'>
                <p className='text-center py-5 px-5'>A Ecommerce Website.Build with HTML,CSS</p>
             </div>
            </div>
            <div className='relative'>
            <img className='h-[170px] w-[500px]' src='https://image.lexica.art/full_webp/e2d5a108-72a1-46c8-912a-38eb4a7d0a7a' alt='e-commerce-API' />
             <div className='project-ani'>
                <p className='text-center py-5 px-5'>A Ecommerce Website.Build with HTML,CSS</p>
             </div>
            </div>
            <div className='relative'>
            <img className='h-[170px] w-[500px]' src='https://image.lexica.art/full_webp/4b5755f1-b9f3-477b-86ec-34ce7df68565' alt='react-project' />
             <div className='project-ani'>
                <p className='text-center py-5 px-5'>A Ecommerce Website.Build with HTML,CSS</p>
             </div>
            </div>
           
           </div>
          
     </div>

    </section>
  )
}

export default Projects
