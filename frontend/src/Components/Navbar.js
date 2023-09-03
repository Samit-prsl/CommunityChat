
import React, { useState } from 'react'
//import Link from 'next/link'
import {RxCross1} from 'react-icons/rx'
import {VscThreeBars} from 'react-icons/vsc'

export default function Navbar() {
  const [click,Setclick] = useState(false)
  return (
    <div className=' lg:p-8 p-5 bg-yellow-50 flex justify-between lg:h-24 h-20 top-0 sticky z-10 border-b-[1px] border-black'>
      <div>
        <div className=' lg:text-4xl text-2xl font-[Quicksand]'><a href='/'>CommunityChat</a></div>
      </div>
      <div className=' lg:hidden  '>
        {click ? 
        <>
         <RxCross1 className=' text-2xl my-1 ml-36 ' onClick={()=>{Setclick(false)}}/>
    <div className=' flex flex-col justify-center items-center  px-8 py-6 gap-8 bg-yellow-50 w-full '>
      <div>
       
        <ul className=' flex flex-col justify-between ml-3  font-[Poppins] font-normal gap-8 text-2xl '>
            <a href='/'><li >Home</li></a>
            <a href='/#about'><li>About</li></a>
            <li>Meet</li>
            <a href='/login'><li>Chat</li></a>
            <li>Contact</li>
            <a href='/login'><button className=' bg-[#a6d644]  py-0 px-6 p-2 rounded-lg shadow-xl border-2  border-black'>Login</button></a>
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
            <a href='/'><li>Home</li></a>
            <a href='/#about'><li>About</li></a>
            <li>Meet</li>
            <a href='/login'><li>Chat</li></a>
            <li>Contact</li>
        </ul>
      </div>
      <a href='/login' ><button className=' bg-[#a6d644]  py-0 px-6 p-2 rounded-lg shadow-xl border-2  border-black hidden lg:block '>Login</button></a>
      </div>
    </div>
  )
}
