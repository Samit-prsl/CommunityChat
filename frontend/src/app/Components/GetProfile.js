import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function GetProfile({url}) {

    const [data,Setdata] = useState()

    const getNeighbours = async ()=>{
      try {
        
        const token = localStorage.getItem('token')
        const res = await axios.get(url,{
          headers : {
            Authorization : `Bearer ${token}`
          }
        })
        Setdata(res.data)
        console.log(data)

      } catch (err) {
        console.log(err)
      }
    }

      useEffect(()=>{
        getNeighbours()
        //console.log(url)
      },[])

  return (
    <div className=' p-5 font-[Quicksand] '>
        <h1 className=' lg:text-4xl text-2xl font-[Poppins] pb-5  border-b-2 border-black '>Find People Nearby!</h1>
        {data ? data.map((items,index)=>{
            return (
              <>
              <div key={index} className=' overflow-y-auto border-b-2 border-black'>
                
                <h1 className=' lg:text-2xl py-3 text-2xl text-left'>Name : {items.username}</h1>
                <h1 className=' lg:text-2xl py-3 text-2xl text-right'>Stays at : "{items.address}"</h1>
                
              </div>
              </>
            )
        }):<>
        <div className=' h-screen flex justify-center items-center font-[Quicksand]'>
            <h1 className=' lg:text-2xl py-3 text-2xl'>You're Lonely here 🥲</h1>
        </div>
        </>}
    </div>
  )
}
