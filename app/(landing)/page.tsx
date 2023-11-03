import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import { ChatbotTeamPage } from '@/components/chatbotteam'
import { Footer } from '@/components/footer'

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
      
      <Button size='lg'>
       <Link href={loginURL}>Login</Link>
      </Button>
      </div>

      <ChatbotTeamPage />

    </div>
    <Footer />

    </div>
  )
}

export default HomePage