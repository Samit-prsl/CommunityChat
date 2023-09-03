import React from 'react'
import {ImQuotesLeft,ImQuotesRight} from 'react-icons/im'
export default function Layout() {
  return (
   <>
    <div className=' px-8 py-16 text-center h-1/2 flex flex-col justify-center items-center '>
      <ImQuotesLeft className=' text-5xl my-3 '/>
      <p className=' text-2xl font-[Quicksand] my-3 '>Welcome to our innovative platform where ideas come to life through conversation and collaboration. We believe in the power of connection and shared vision, which is why we have created a space where individuals from all walks of life can converge, chat, and engage in video calls to collectively build upon the same ideas. Our project is a testament to the boundless potential that emerges when diverse minds unite, transcending geographical boundaries to create something greater together. Whether you are an entrepreneur, an artist, a scientist, or a dreamer, this is where your concepts find resonance and evolve into impactful realities. Join us in shaping the future through meaningful conversations and collaborative video calls. Let us build, innovate, and inspire as a connected community!</p>
      <ImQuotesRight className=' text-5xl my-3'/>
    </div>
   </>
  )
}
