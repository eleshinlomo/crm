'use client'

import {useState, useEffect} from 'react'
import Hero from '@/components/hero'
import CookiePage from '@/components/cookiepage'
import ModalVideoPage from '../(publicroutes)/modalvideopage/page'
import NewsletterPage from '../(publicroutes)/newsletterpage/page'
import HomeNavbar from '@/components/homenavbar'
import Projects from '@/components/projects'
import TechStack from '@/components/techstack'
import Features from '@/components/features'





  
  const Home = () =>{

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    return (
      <div>
        <HomeNavbar isLoggedIn={isLoggedIn} />
      <div className='relative overflow-hidden flex flex-col justify-center'>
        
        <Hero isLoggedIn={isLoggedIn} />
        <ModalVideoPage />
       <Projects />
       <TechStack />
       <Features />
      
        {/* <NewsletterPage /> */}
       
        {/* <CookiePage /> */}
      </div>
      </div>
    )
  }

  export default Home