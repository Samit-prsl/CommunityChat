"use client"
import React, { useEffect, useState } from 'react'
import  io  from 'socket.io-client'
import { nanoid } from 'nanoid'

const socket = io.connect("http://localhost:8000")
const username = nanoid(4)
export default function Page() {

    const [message,Setmessage] = useState('')
    const [chat,Setchat] = useState([])
    const sendChat = (e)=>{
        e.preventDefault()
        socket.emit("chat",{message,username})
        Setmessage('')
    }
    useEffect(()=>{
        socket.on('chat',(payload)=>{
            Setchat([...chat,payload])
        })
    })

  return (
    <div className=' min-h-screen flex justify-center items-center bg-gray-700'>
     <div className=' h-96 w-96 bg-white rounded-lg flex flex-col justify-center gap-5 p-3'>
        <h1 className=' text-center text-2xl'>Meet</h1>
        {chat.map((payload,index)=>{
            return (
              <div key={index}>
                 {payload.message} : <span>{payload.username}</span>
              </div>
            )
        })}
        <input type="text" placeholder='Enter' className=' outline-none bg-gray-500 p-4' value={message} onChange={(e)=>{Setmessage(e.target.value)}} />
        <button className=' px-5 py-2 bg-slate-500 hover:bg-slate-600 rounded-lg' onClick={sendChat}>Send</button>
     </div>
    </div>
  )
}
