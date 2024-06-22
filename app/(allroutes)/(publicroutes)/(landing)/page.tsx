'use client'

import {useState, useEffect} from 'react'
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import HomeNavBar from '@/components/homenavbar'
import Footer  from '@/components/footer'
import CookiePage from '@/components/cookiepage'
import ModalVideoPage from '../modalvideopage/page'
import ChatBotPage from '../chatbotpage'
import NewsletterForm from '../newsletter/newsletterform'
import NewsletterPage from '../newsletter/page'




  
  export default function Home() {
    
    return (

      <div className='relative overflow-hidden flex flex-col justify-center'>
        
        <Hero />
        <ModalVideoPage />
        <Features />
        <FeaturesBlocks />
        <Testimonials />
        <NewsletterPage />
        <ChatBotPage />
        <CookiePage />
      </div>
    )
  }