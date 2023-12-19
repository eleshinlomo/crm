import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'

const GeneralPage = () => {
  return (
    <div>
        <div className='h-screen  flex flex-1 justify-center  
        gap-3 px-4  
        bg-gradient-to-r from-blue-700 via-blue-200 to-neutral-400'>
        <Button className='w-1/2'>
        <Link href='/textchat'>
            TextChat
            </Link>
            </Button>
        

            <Button className='w-1/2'>
        <Link href='/audiochat'>
            VoiceChat
            </Link>
            </Button>
        </div>
    </div>
  )
}

export default GeneralPage