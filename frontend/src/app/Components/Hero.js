import React from 'react'

export default function Hero() {
  return (
    <div className=' lg:p-8 p-5 lg:flex lg:justify-between gap-10'>
    <div>
      <div className=' lg:text-6xl text-3xl font-[Quicksand] lg:py-8 '>
        Collaborating with the world!
      </div>
      <div className=' lg:text-3xl text-2xl font-[Poppins] '>
        A Intuitive Platform to connect with Similar Ideas, around the Globe, Build Yours Now...
      </div>
      <div className=' lg:py-20 py-8  '>
        <button className='lg:mr-[5rem] mr-2 py-3 font-[Quicksand] px-8 bg-gray-100 font-bold rounded-xl border-2 border-black shadow-2xl'>Get Started Today</button>
        <button className='mr-5 py-3 px-8 font-[Quicksand] bg-[#a6d644] font-bold rounded-xl border-2 border-black shadow-2xl'>Meet</button>
      </div>
    </div>
    <div className=''>
      <img src="https://cdn.dribbble.com/userupload/2740231/file/original-db0fd029bd4626adcfba7e67b0b9cf4c.png?resize=1024x768" alt="" className=' w-full h-[90%] lg:rounded-tl-[8rem] rounded-tl-[5rem]'/>
    </div>
    </div>
  )
}
