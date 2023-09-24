import React from 'react'
import Typed from 'react-typed';


const Hero = () => {
  return (
    <div className='text-white text-center mx-auto my-auto'>    
    <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto'text-center flex flex-col justify-center>
        <p className='text-[#00df9a] font bold p-2 text-center '>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow With Data.</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible, financing for</p>
            
           <Typed className='md:text-5xl sm:text-4xl text-xl font-bold m:pl-4 pl-2'
           strings={['BTB', 'BTC', 'SASS']} 
           typespeed={120} 
           backspeed={140} 
           loop
           />
        </div>
        <p className='md:text-2xl font-bold text-gray-500'>Monitor your data analytics to revenue for BTB, BTC, SASS & platforms.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3 text-black'>GET STARTED</button>
    </div>
    
    
    </div>
  )
}

export default Hero

// import React from 'react'

// const Hero = () => {
//   return (
//     <div>Hero</div>
//   )
// }

// export default Hero;