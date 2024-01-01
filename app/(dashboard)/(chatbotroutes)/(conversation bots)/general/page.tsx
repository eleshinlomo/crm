import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const GeneralPage = () => {
  return (
    <div className='flex flex-col flex-1 justify-center items-center'>

      <p className='text-lg font-extrabold'>Would you like to Text or Chat?</p>
        <div className='flex flex-1 justify-center  
        gap-3 px-4  pt-32
        '>
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

        <div className='relative h-72 w-72'>
         <Image src='/images/ai_girl2.png' alt='ai woman image' fill />
        </div>
    </div>
  )
}

export default GeneralPage