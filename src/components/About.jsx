import React from 'react'

const About = () => {
  return (
    <div className='flex-row align-middle justify-around h-50 '>
      <div className='h-7 w-30 mt-3 '><img className='ml-auto mr-60 h-90 w-96' src='/man.png'></img></div>
      <div className="text-white w-96 ml-6 ">
        <h1 className='text-5xl font-bold ml-40'>ABOUT</h1>


        <p className='ml-32 text-wrap text-2xl w-96'>
          Mr.Arun Malhotra 
          Retired Journalist from 'Times of India'.He pursued his journalism from London and worked 40 years for 'Times of India'.<div className='italic'>He is honoured with the Padmashri for his remarkable work in journalism.
          </div> After contributing such tremendously to this field he is finally starting an ONLINE COURSES for those who want to pursue JOURNALISM!!!
         
        </p>
      </div>
    </div>
  )
}

export default About