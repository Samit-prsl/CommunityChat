import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Layout from '../Components/Info'
import About from '../Components/About'
import Newsletter from '../Components/Newsletter'

export default function Homepage() {
  return (
  <>
  <div className=' h-full bg-yellow-50'>
  <Navbar/>
  <Hero/>
  <About/>
  <Layout/>
  <Newsletter/>
  </div>
  </>
  )
}
