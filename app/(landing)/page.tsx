import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import { ChatbotTeamPage } from '@/components/chatbotteam'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { GOOGLE_LOGIN_URL } from '@/components/urls'

const HomePage = () => {

  const loginURL: any = process.env.NEXT_PUBLIC_SSO_DJANGO_LOGIN_URL

  return (

    <div>

    <div className=' py-4 px-4'>
    
       <div className='flex flex-col gap-4 justify-center items-center'>

        <p className='leading-10 text-3xl font-extrabold'>Welcome to Fixupe</p>
        <p className='leading-2 px-4 font-extrabold'>
          AI Tools For Faster Task Completion
          </p>
      
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
      
      </div>

      <ChatbotTeamPage />

    </div>
    <Footer />

    </div>
  )
}

export default HomePage