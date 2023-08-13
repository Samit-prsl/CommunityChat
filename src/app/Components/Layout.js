import Link from 'next/link'
import React from 'react'

export default function Layout() {
  return (
    <div className=' lg:p-8 p-5 h-[90%]  lg:px-20 lg:flex lg:justify-around justify-center gap-16  bg-yellow-50'>
      <div className='  lg:h-[50vh] py-5 my-8 lg:my-0 lg:py-0  bg-[#fdddd7] lg:flex lg:justify-between lg:gap-6 rounded-3xl border-2 border-black shadow-2xl'>
        <img src="https://images.unsplash.com/photo-1631427962232-803d4f30c64f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className=' p-5 h-full w-[100%] object-cover lg:rounded-[4rem] rounded-[2rem]' />
        <div className=' flex flex-col gap-5 justify-center text-center lg:text-left'>
          <p className=' text-xl'> Chat with like-minded people and explore new boundaries with CommunityChat.</p>
          <Link className=' text-lg hover:text-yellow-50 underline' href='/'>Start texting!</Link>
        </div>
      </div>
      <div className='  lg:h-[50vh] py-5 lg:py-0 bg-[#fdf382] lg:flex lg:justify-between gap-6 rounded-3xl border-2 border-black shadow-2xl'>
        <img src="https://images.unsplash.com/photo-1585974738771-84483dd9f89f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmlkZW8lMjBjaGF0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" className=' p-5 h-full w-full lg:rounded-[4rem] rounded-[2rem] object-cover' />
        <div className=' flex flex-col gap-5 justify-center text-center lg:text-left'>
          <p className=' text-xl'>Organize a E-meetup with your vitual team and start building your  idea with CommunityChat.</p>
          <Link className=' text-lg hover:text-yellow-50 underline' href='/'> Get started with video chat!</Link>
        </div>
      
      </div>
    </div>
  )
}
