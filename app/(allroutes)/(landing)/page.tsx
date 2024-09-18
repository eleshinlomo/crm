'use client'

import {useState, useEffect} from 'react'
import Hero from '@/components/hero'
import ModalVideoPage from '../(publicroutes)/modalvideopage/page'
import HomeNavbar from '@/components/headers/homenavbar'
import Projects from '@/components/projects'
import TechStack from '@/components/techstack'
import Features from '@/components/features'
import TopSlanted from '@/components/topslanted'
import ThreeColsTop from '@/components/threecolstop'





  
  const Home = () =>{

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    return (
      <div>
        <HomeNavbar isLoggedIn={isLoggedIn} />
      <div className='relative overflow-hidden flex flex-col justify-center bg-blue-100'>
        
        <Hero isLoggedIn={isLoggedIn} />
        <ModalVideoPage />
        <Projects />
        
        <ThreeColsTop />
        <TopSlanted />
       <Features />
      
        {/* <NewsletterPage /> */}
       
        {/* <CookiePage /> */}
      </div>
      </div>
    )
  }

  export default Home