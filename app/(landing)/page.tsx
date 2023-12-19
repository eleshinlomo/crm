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
import { Col3Top } from '@/components/col3top'
import  Hero  from '@/components/hero'
import  Typewriter  from '@/components/typewriter'
import { Col3Bottom } from '@/components/cols3bottom'
import { SocialCTA } from '@/components/socialcta'


const HomePage = () => {
  const [customText, setCustomText] = useState<Array<string>>([])
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [showButtons, setShowButtons] = useState<boolean>(true)

 

  // useEffect(()=>{
  //   const loginChecker = async() =>{
  //       const response: any = await fetch(`${BASE_URL}/authchecker/`, {
  //           mode: 'cors',
  //           credentials: 'include',
  //           headers: {'Content-Type': 'application/json'}
  //       })
  //       if (!response) throw new Error("No response from server")
  //        const data = await response.json()
  //       if (data.success === true){
  //         console.log(data)
  //          setIsLoggedIn(true)
  //          setShowButtons(false)
  //       }else{
  //           setIsLoggedIn(false)
  //       }
  //   }
  //   loginChecker()
  //   },[])

  
  return (

    <div>

    <div className='    w-full h-full overflow-hidden'>
     <div className='bg-black px-2 flex flex-col justify-center'>
      <HomeNavBar />

      <Hero />
      </div>
      
      <SocialCTA />
       <Col3Top />
       
      <ChatbotTeamPage />
      <Col3Bottom />

    </div>
    <Footer />

    </div>
  )
}

export default HomePage