import Image from 'next/image'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Layout from './Components/Layout'

export default function Home() {
  return (
  <>
  <div className=' h-full bg-yellow-50'>
  <Navbar/>
  <Hero/>
  <Layout/>
  </div>
  </>
  )
}
