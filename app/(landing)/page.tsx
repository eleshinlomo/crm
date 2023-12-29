"use client"
import { Button } from '@/components/ui/button'
import  { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChatbotTeamPage } from '@/components/chatbotteam'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { BASE_URL } from '@/components/auth'
import { GOOGLE_LOGIN_URL } from '@/components/urls'
import { loginURL } from '@/components/urls'
import  HomeNavBar  from '@/components/homenavbar'
import { Services } from '@/components/services'
import  Hero  from '@/components/hero'
import  Typewriter  from '@/components/typewriter'
import { Col3Bottom } from '@/components/cols3bottom'
import { SocialCTA } from '@/components/socialcta'
import Ctawithrightpic from '@/components/ctawithrightpic'



const HomePage = () => {
  const [customText, setCustomText] = useState<Array<string>>([])
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [showButtons, setShowButtons] = useState<boolean>(true)

 
  

  
  return (

    <div>
    
    <HomeNavBar />

    <div className='    w-full  h-full overflow-hidden flex flex-col '>
     <div className='bg-black '>
      
      <Hero />
      </div>
      
      <SocialCTA />
       <Services />
       
      <ChatbotTeamPage />
      <Col3Bottom />
      
      

    </div>
    <Footer />

    </div>
  )
}

export default HomePage