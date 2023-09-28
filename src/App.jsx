import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Analytics from './Components/Analytics'
import Newsletter from './Components/Newsletter'
import Cards from './Components/Cards'
import Footer from './Components/Footer'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
     <Analytics/>
     <Newsletter/>
     <Cards />
     <Footer/>
     
   
    </>
  )
}

export default App
