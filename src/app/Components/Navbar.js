"use client"

import React, { useState } from 'react'
import {RxCross1} from 'react-icons/rx'
import {VscThreeBars} from 'react-icons/vsc'

export default function Navbar() {
  const [click,Setclick] = useState(false)
  return (
    <div className=' lg:p-8 p-5 bg-yellow-50 flex justify-between h-24 top-0 sticky z-10 '>
      <div>
        <div className=' lg:text-4xl text-2xl font-[Quicksand]'>CommunityChat</div>
      </div>
      <div className=' lg:hidden  '>
        {click ? 
        <>
         <RxCross1 className=' text-2xl my-1 ml-36 ' onClick={()=>{Setclick(false)}}/>
    <div className=' flex flex-col justify-center items-center  px-8 py-6 gap-8 bg-yellow-50 w-full '>
      <div>
       
        <ul className=' flex flex-col justify-between ml-3  font-[Poppins] font-normal gap-8 text-2xl '>
            <li>Home</li>
            <li>About</li>
            <li>Meet</li>
            <li>Chat</li>
            <li>Contact</li>
            <button className=' bg-[#a6d644]  py-0 px-6 p-2 rounded-lg shadow-xl border-2  border-black'>Login</button>
        </ul>
      </div>
    </div>
        </> 
        :
        <>
        <VscThreeBars className=' text-3xl' onClick={()=>{Setclick(true)}}/>
        </>}
      </div>
      <div className=' lg:flex justify-between gap-8 hidden'>
      <div>
        <ul className=' lg:flex lg:justify-between font-[Poppins] font-normal gap-8 text-2xl  '>
            <li>Home</li>
            <li>About</li>
            <li>Meet</li>
            <li>Chat</li>
            <li>Contact</li>
        </ul>
      </div>
      <button className=' bg-[#a6d644]  py-0 px-6 p-2 rounded-lg shadow-xl border-2  border-black hidden lg:block '>Login</button>
      </div>
    </div>
  )
}
