import React from 'react'

const Hero = () => {
  return (
   <div className="flex justify-between">
  <div className="h-110 w-100  ml-6 mt-6"><img src='/bg.png'></img></div>
  < div className="">
  <div className='text-white '>
  <h1 className='text-7xl italic mt-20 mr-24 ml-40 text-bold'>Dive into Journalism</h1>
  <h2 className='text-[#67e8f9] text-3xl ml-20 mr-7'>DISCOVER THE JOURNALIST IN YOU!! Learn with EXPERTS</h2>
  <p className='text-2xl ml-8 mr-7'>Unlock the secrets of effective storytelling with our comprehensive online journalism courses, designed to fit your pace and enhance your media prowess.</p>
  </div>
  <div className="flex space-x-4">
  <button className='text-[#03e9f4] uppercase tracking-[4px] text-[16px] border-2 border-[#03e9f4] px-[22px] py-[7px] rounded ml-60 mt-4 hover:text-black hover:bg-[#03e9f4] hover:boxshadow '>SIGN IN</button>
  <button className='text-[#03e9f4] uppercase tracking-[4px] text-[16px] border-2 border-[#03e9f4] px-[22px] py-[7px] rounded ml-60 mt-4 hover:text-black hover:bg-[#03e9f4] hover:boxshadow '>LOG IN</button>
  </div>
  </div>
  
  </div>

  )  
}

export default Hero