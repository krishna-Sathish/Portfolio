import React from 'react'
const Contact= () => {
  const config ={
    email:'romansathish3337@gmail.com',
    phone:'9025464168'
  }
  return (
    <section className=' flex flex-col  bg-gray-800 px-5 py-32 ' id='contact'>
             
            <div className=' flex flex-col items-center text-white'>
                 <h1 className='text-white text-4xl border-b-4  mb-5 w-[140px] font-bold'>Contact</h1> 
                <p className='py-2' >Feel free to contact me for a more detailed discussion.</p>
                 <p className='py-2'><span className='font-bold'><span></span> Email : </span>{config.email}</p>
                 <p className='py-2'><span className='font-bold'>Phone : </span>{config.phone}</p>
                
        </div> 
    </section>
  )
}

export default Contact ;
