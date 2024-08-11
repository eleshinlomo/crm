'use client'

import {useState, useEffect} from 'react'
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import CookiePage from '@/components/cookiepage'
import ModalVideoPage from '../(publicroutes)/modalvideopage/page'
import NewsletterPage from '../(publicroutes)/newsletterpage/page'



// interface HomeProps {
//   isLoggedIn: boolean | any
// }

  
  const Home = (isLoggedIn: any) =>{
    
    return (

      <div className='relative overflow-hidden flex flex-col justify-center'>
        
        <Hero isLoggedIn={isLoggedIn} />
        <ModalVideoPage />
        <Features />
        <FeaturesBlocks />
        <Testimonials />
        <NewsletterPage />
        <CookiePage />
      </div>
    )
  }

  export default Home