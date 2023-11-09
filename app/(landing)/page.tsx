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

const HomePage = () => {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [showButtons, setShowButtons] = useState<boolean>(true)

  useEffect(()=>{
    const loginChecker = async() =>{
        const response: any = await fetch(`${BASE_URL}/authchecker/`, {
            mode: 'cors',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
        if (!response) throw new Error("No response from server")
         const data = await response.json()
        if (data.success === true){
          console.log(data)
           setIsLoggedIn(true)
           setShowButtons(false)
        }else{
            setIsLoggedIn(false)
        }
    }
    loginChecker()
    },[])

  
  return (

    <div>

    <div className=' py-4 px-4'>

      <HomeNavBar />
    
       <div className='flex flex-col gap-4 justify-center items-center'>

        <p className='leading-10 text-3xl font-extrabold'>Welcome to Fixupe</p>
        <p className='leading-2 px-6 font-extrabold'>
          AI Tools For Faster Task Completion
          </p>

          </div>
      
      {showButtons ?
      <div className='flex flex-col justify-center items-center gap-5 py-4'>
       <a href={loginURL}>
        <div className='px-12 py-2 bg-black text-white shadow-2xl border-blue-600 rounded-lg'>
        <button>Login</button>
        </div>
       </a>


       <a href={GOOGLE_LOGIN_URL}>
        
        <div className='flex justify-center items-center bg-black
         text-white shadow-2xl border-blue-600 px-2 rounded-lg  py-2'>
        <p>Login with</p> 
        <div className='relative ml-2 w-4 h-4'>
          <Image src='/google_logo.png' alt='google logo' fill />
        </div>
        <p>oogle</p>
        </div>
        </a>
        </div>:null
         }
      
     

      <ChatbotTeamPage />

    </div>
    <Footer />

    </div>
  )
}

export default HomePage