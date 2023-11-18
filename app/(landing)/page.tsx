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
import { Hero } from '@/components/hero'
import  Typewriter  from '@/components/typewriter'
import { Col3Bottom } from '@/components/cols3bottom'
import { SocialCTA } from '@/components/socialcta'

const HomePage = () => {
  const [customText, setCustomText] = useState<Array<string>>([])
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [showButtons, setShowButtons] = useState<boolean>(true)

  useEffect(()=>{
    setCustomText([
         "Welcome to Fixupe",
         "Top AI Tools",
         "Complete task faster"
    ])
  },[])

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

    <div className=' py-4 px-4 text-center'>

      <HomeNavBar />
    
       <div className='flex flex-col gap-4 justify-center items-center'>

       
          
        <Typewriter customText={customText} />

          </div>

      {/* <Hero /> */}
      
      {showButtons ?
      <div className='flex flex-col justify-center items-center gap-5 py-4'>
     <a href='/dashboard'>
      
        <Button>Get Started</Button>
        
       </a> 

       

       {/* <a href={GOOGLE_LOGIN_URL}>
        
        <div className='flex justify-center items-center bg-black
         text-white shadow-2xl border-blue-600 px-2 rounded-lg  py-2'>
        <p>Register with</p> 
        <div className='relative ml-2 w-4 h-4'>
          <Image src='/google_logo.png' alt='google logo' fill />
        </div>
        <p>oogle</p>
        </div>
        </a> */}

        </div>:null
         }
      
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