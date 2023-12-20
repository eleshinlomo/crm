import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'

const GeneralPage = () => {
  return (
    <div>
        <div className='h-screen  flex flex-1 justify-center  
        gap-3 px-4  pt-32
        bg-gradient-to-r from-blue-700 via-blue-200 to-neutral-400'>
        <Button className=''>
        <Link href='/textchat'>
            TextChatbot
            </Link>
            </Button>
        

            <Button className=''>
        <Link href='/audiochat'>
            VoiceChatbot
            </Link>
            </Button>
        </div>
    </div>
  )
}

export default GeneralPage