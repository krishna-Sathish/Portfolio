import React from 'react'
const Resume= () => {
  const config ={
    link :''
  }
  return (
    <section className=' flex flex-col md:flex-row bg-gray-950 px-5' id='resume'>
           <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
  <img 
    className='my-3 w-[300px] ' 
    src='https://image.lexica.art/full_webp/32b18dcd-ee11-427a-9e04-24a50bb31642' 
    alt='about-img'
  />
</div>

            <div className='md:w-1/2  flex justify-center'>
                 <div className=' flex flex-col justify-center ms-3'>
                 <h1 className='text-white text-4xl border-b-4  mb-5 w-[140px] font-bold'>Resume</h1> 
                 <p className='text-white my-3'>Feel free to view my <strong>Resume</strong><a href={config.link} target='_blank' rel="noopener noreferrer" className='btn ms-2'>Download</a> </p>
                
                 </div>
                 
                
        </div> 
    </section>
  )
}

export default Resume ;
