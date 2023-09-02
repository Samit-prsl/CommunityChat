"use client"
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
export default function Register() {

    const [username,Setusername] = useState()
    const [password,Setpassword] = useState()
    const [email,Setemail] = useState()
    const [profession,Setprofession] = useState() 
    const [address,Setaddress] = useState()
    const [pincode,Setpincode] = useState(0)
    const [loading,Setloading] = useState(false)

    const handlesubmit = async(e)=>{

        e.preventDefault()
        try {
            
          Setloading(true)
          toast('Registering....', {
            style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#d4af37',
                background :'#040D12'
              },
            icon: '🙏',
          });
            const res = await axios.post('http://localhost:5000/api/neighbour/register',{
                username,password,email,address,profession,pincode
            })
            console.log(res.data)
            window.location.replace('/login')

        } catch (err) {
          Setloading(false)
            toast('Please fill in the details carefully.', {
                duration: 1000,
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#d4af37',
                    background :'#040D12'
                  },
                icon: '🙏',
              });
        }
    }

  return (
    <div className=' min-h-screen bg-yellow-200 flex justify-center items-center py-10'>
      <div className=' h-[650px] lg:w-96 w-80 bg-[#9ace32] rounded-2xl p-5 flex flex-col justify-between items-center gap-5 py-5'>
        <h1 className='text-3xl lg:text-4xl font-[Poppins] text-black text-center'>Register</h1>
        <input type="text" placeholder=' Enter username' className=' font-[Quicksand] lg:text-xl text-lg outline-none p-3 bg-[#a18527] text-black rounded-xl placeholder:text-blue-50' 
        onChange={(e)=>{Setusername(e.target.value)}} />
        <input type="password" placeholder=' Enter Password' className=' font-[Quicksand] lg:text-xl text-lg outline-none p-3 bg-[#a18527] text-black rounded-xl placeholder:text-blue-50'
        onChange={(e)=>{Setpassword(e.target.value)}} />
        <input type="text" placeholder=' Enter email' className=' font-[Quicksand] lg:text-xl text-lg outline-none p-3 bg-[#a18527] text-black rounded-xl placeholder:text-blue-50' 
        onChange={(e)=>{
           Setemail(e.target.value)}} />
        <input type="text" placeholder=' Enter your Profession' className=' font-[Quicksand] lg:text-xl text-lg outline-none p-3 bg-[#a18527] text-black rounded-xl placeholder:text-blue-50' 
         onChange={(e)=>{
           Setprofession(e.target.value) }} />
             <input type="text" placeholder=' Enter your Address' className=' font-[Quicksand] lg:text-xl text-lg outline-none p-3 bg-[#a18527] text-black rounded-xl placeholder:text-blue-50' 
         onChange={(e)=>{
           Setaddress(e.target.value) }} />
        <input type="text" placeholder=' Enter your Pincode' className=' font-[Quicksand] lg:text-xl text-lg outline-none p-3 bg-[#a18527] text-black rounded-xl placeholder:text-blue-50' 
        onChange={(e)=>{
            const check = e.target.value
            if(/^\d+$/.test(check))
            {
                if(check.length === 6)
                Setpincode(parseInt(check))
                //console.log(true)
                else
                toast('Pincode should be of 6 digits', {
                    duration: 750,
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: '#d4af37',
                        background :'#040D12'
                      },
                    icon: '🙏',
                  });
            }
            else
            toast('Enter a valid pincode', {
                duration: 750,
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#d4af37',
                    background :'#040D12'
                  },
                icon: '🤔',
              });
        }}/>
         <button className={` px-10 py-3 bg-[#183D3D] text-[#d4af37] font-[Poppins] rounded-xl hover:bg-[#112e2e] ${loading ? 'cursor-not-allowed':'cursor-pointer'} `} onClick={handlesubmit}>Register</button>
         <a className='text-lg lg:text-xl font-[Cinzel] text-[#362e12] hover:text-[#534823]' href='/login'>Already Registered? Login!</a>
        <Toaster  position="top-center"/>
      </div>
    </div>
  )
}
