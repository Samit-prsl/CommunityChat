"use client"
import React, { useEffect, useState } from 'react'
import  io  from 'socket.io-client'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import ScrollToBottom from 'react-scroll-to-bottom'
import {IoMdContacts} from 'react-icons/io'
import Link from 'next/link';
import GetProfile from '../Components/GetProfile';
//import { data } from 'autoprefixer'
const socket = io.connect('https://commchat-socket.onrender.com/')

export default function page() {

    const [loading,Setloading] = useState(false)
    const [pincode,Setpincode] = useState('')
    const [username,Setusername] = useState('')
    //const [Profile,SetProfile] = useState(false)
    const [chat,Setchat] = useState([])
    const [chatUI,SetchatUI] = useState(false)
    const [message,Setmessage] = useState('')

    const getProfile = async ()=>{
        try {
          
          const token = localStorage.getItem('token')
          const res = await axios.get('https://commchat-api.onrender.com/api/neighbour/profile/',{
            headers : {
              Authorization : `Bearer ${token}`
            }
          })
          Setusername(res.data.username)
          Setpincode(res.data.pincode)
          //SetProfile(res.data)
          //console.log(res.data)
        } catch (err) {
          console.log(err)
        }
      }

    const joinRoom = ()=>{
        Setloading(true)
        if((username !=='')&&(pincode !==''))
        {
            socket.emit("joinRoom",pincode)
            toast('You are now in your locality', {
              style: {
                  border: '1px solid #713200',
                  padding: '16px',
                  color: '#d4af37',
                  background :'#040D12'
                },
              icon: '🙋‍♂️',
            })
        SetchatUI(true)
        }
    }

    const sendMessage = async (e)=>{
      console.log(`jdjdjd`);
        if(message !=="")
        {
          e.preventDefault()
            const data = {
                room : pincode,
                author : username,
                message : message,
                time : new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            }
            await socket.emit('send',data)
            Setchat((chat)=>[...chat,data])
            Setmessage(' ') 
        }
         
    }

    useEffect(()=>{
        getProfile()

        socket.on('receive',(data)=>{
            Setchat((chat)=>[...chat,data])
        })
    },[socket])

    const url = "https://commchat-api.onrender.com/api/neighbour/room/"+pincode 

    let profile = false

  return (
  <div>
    {chatUI ? (
      <div className=' min-h-screen lg:flex'>
      <div className=' lg:flex-1 lg:block hidden bg-[#2E8A99] min-h-screen border-r-[1px] border-black'>
        <GetProfile url={url}/>
      </div>
 
 
         <div className=' lg:flex-[2] bg-[#84A7A1] min-h-screen flex flex-col justify-between'>
         <div className=' lg:text-4xl text-2xl font-[Quicksand] lg:text-center flex justify-between bg-[#2E8A99] h-20 p-5 border-b-[1px] border-black sticky top-0 z-10 py-5'>
          <Link href='/' className=' text-left'>CommunityChat</Link>
          <IoMdContacts onClick={()=>{profile = true}} className=' lg:hidden text-3xl text-gray-900 cursor-pointer'/>
          </div>
         {/* <ScrollToBottom> */}
         <div className=' min-h-screen w-full flex flex-col p-5 overflow-y-auto'>
            {chat ? chat.map((Chat,index)=>{
                return (
                  <>
                   {/* <ScrollToBottom> */}
                  {Chat.author === username ?
                   <div key={index} className=' bg-[#0E2954] min-h-[60px] w-[50%] my-2 lg:p-6 p-3 rounded-2xl lg:ml-[420px] ml-44 flex flex-col justify-between'>
                   <h1 className='lg:text-2xl text-xl font-[Poppins] text-gray-300'>{Chat.message}   <span className='lg:text-2xl text-xl font-[Quicksand] text-gray-100 text-right'>by me</span></h1>
                   <h1 className='lg:text-2xl text-xl font-[Poppins] text-right text-gray-400'>{Chat.time}</h1>
               </div> : 
                 <div key={index} className=' bg-[#1F6E8C] min-h-[60px] w-[50%] my-2 lg:p-6 p-3 rounded-2xl flex flex-col justify-between'>
                  <h1 className='lg:text-2xl text-xl font-[Poppins] text-gray-300'>{Chat.message}  <span className='lg:text-2xl text-xl font-[Quicksand] text-gray-100 text-right'>by {Chat.author}</span> </h1>
                   <h1 className='lg:text-2xl text-xl font-[Poppins] text-right text-gray-400'>{Chat.time}</h1>
             </div>}
              {/* </ScrollToBottom> */}
                  </>
                )
            }):"Loading"}
         </div>
         {/* </ScrollToBottom> */}
         <div className=' lg:text-4xl text-2xl font-[Quicksand] text-center bg-[#2E8A99] h-20 p-3 border-t-[1px] border-black sticky bottom-0 z-10 flex justify-between'>
         <input type="text" value={message} placeholder='send a yo!' className=' p-3 lg:text-2xl text-xl outline-none bg-gray-500  text-black placeholder:text-white rounded-xl lg:w-[75%] w-[70%]' onChange={(e)=>{Setmessage(e.target.value)}} />
         <button className=' bg-[#183D3D] text-white px-5 lg:px-10 py-1 lg:py-2 text-lg rounded-2xl hover:bg-[#112e2e]' onClick={sendMessage}>Send</button>
      </div>
      </div>
     </div>
    )
  :( <div className=' min-h-screen bg-yellow-200 flex justify-center items-center'>
      <div className='h-[500px] lg:w-96 w-80 bg-[#9ace32] rounded-2xl p-5 flex flex-col justify-center items-center gap-10 py-5'>
    <h1 className='text-3xl lg:text-4xl font-[Poppins] text-black text-center'>Confirm your identity!</h1>
    <p className=' font-[Quicksand] lg:text-xl text-lg outline-none p-3 bg-[#a18527] text-black rounded-xl'>
    Username : {username}
    </p>
    <p className=' font-[Quicksand] lg:text-xl text-lg outline-none p-3 bg-[#a18527] text-black rounded-xl'>Pincode : {pincode}</p>
    <div>
    <button className={` lg:px-10 px-5 mx-2 py-3 bg-[#183D3D] text-[#d4af37] font-[Poppins] rounded-xl hover:bg-[#112e2e] ${loading ? 'cursor-not-allowed':'cursor-pointer'} `} onClick={joinRoom}>Confirm</button>
    <button className={` lg:px-10 px-5 py-3 mx-2 bg-[#183D3D] text-[#d4af37] font-[Poppins] rounded-xl hover:bg-[#112e2e] ${loading ? 'cursor-not-allowed':'cursor-pointer'} `} >Change</button>
    </div>
    </div>
    <Toaster  position="top-center"/>
    </div>)}
    </div>
  )
}
