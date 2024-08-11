'use client'

import {useState, useEffect} from 'react'
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import CookiePage from '@/components/cookiepage'
import ModalVideoPage from '../(publicroutes)/modalvideopage/page'
import NewsletterPage from '../(publicroutes)/newsletterpage/page'
import HomeNavbar from '@/components/homenavbar'



interface HomeProps {
  isLoggedIn: boolean
}

  
  const Home = ({isLoggedIn}: HomeProps) =>{
    
    return (
      <div>
        <HomeNavbar isLoggedIn={isLoggedIn} />
      <div className='relative overflow-hidden flex flex-col justify-center'>
        
        <Hero isLoggedIn={isLoggedIn} />
        <ModalVideoPage />
        <Features />
        <FeaturesBlocks />
        <Testimonials />
        <NewsletterPage />
        <CookiePage />
      </div>
      </div>
    )
  }

  export default Home