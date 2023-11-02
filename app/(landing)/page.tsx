import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import { NewNavBar } from '@/components/newnavbar'
import { ChatbotTeamPage } from '@/components/chatbotteam'
import { Footer } from '@/components/footer'

const page = () => {
  return (

    <div>

    <div className=' py-4 px-4'>
    
       <div className='flex flex-col justify-center items-center'>
      <Button>
       <Link href='/dashboard'>Go to Dashboard</Link>
      </Button>
      </div>

      <ChatbotTeamPage />

    </div>
    <Footer />

    </div>
  )
}

export default page