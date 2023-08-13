import React from 'react'

export default function Navlayout() {
  return (
    <div>
       <div className=' flex justify-between flex-col gap-8'>
      <div>
        <ul className=' lg:flex lg:justify-between font-[Poppins] font-normal gap-8 text-2xl hidden '>
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
