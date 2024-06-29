'use client'

import {useState, useEffect} from 'react'
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import CookiePage from '@/components/cookiepage'
import ModalVideoPage from '../modalvideopage/page'
import NewsletterPage from '../newsletterpage/page'
import ChatbotPage from '../chatbot/page'




  
  export default function Home() {
    
    return (

      <div className='relative overflow-hidden flex flex-col justify-center'>
        
        <Hero />
        <ModalVideoPage />
        <Features />
        <FeaturesBlocks />
        <Testimonials />
        <NewsletterPage />
        <CookiePage />
      </div>
    )
  }