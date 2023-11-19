"use client"
import {useEffect, useState} from 'react'
import Image from 'next/image'
import { ArrowDown, ArrowRight, Code, CodeIcon, EyeIcon, ImageIcon, MenuIcon, MessageSquare, MusicIcon, VideoIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {useRouter} from 'next/navigation'
import { Button } from '@/components/ui/button'
// AI Tools
import { WritingTools } from '@/components/tools'
import { ConversationTools } from '@/components/tools'
import { MediaTools } from '@/components/tools'
import WaitlistPage from '@/components/waitlistpage'
import { DocumentTools } from '@/components/tools'





const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

  




const DashboardPage = ()=>{

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

 

  const router = useRouter()

  
  return (

    
    <div>
      <div className='mb-10'>

        <div>
          <WaitlistPage />
        </div>
       <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>
          Do everything with AI
        </h2>

        <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
          Complete your task with AI - Ultra fast AI Solution
        </p>
       </div>

       
      {/* Start of Conversation Tools */}
      <div>
        <p className='text-center px-4 py-4 font-extrabold'>CONVERSATION TOOLS</p>
       <div className='px-4 md:px-32 space-y-4'>
       {
        ConversationTools.map((tool, index)=>
           
          <Card 
          onClick={()=>router.push(tool.href)}
          key={index}
          className='p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer'
          >

            <div className='flex items-center gap-x-4'>

             <div className={cn(`w-p-2 w-fit rounded-md`, tool.bgColor)}>
              <tool.icon className={cn('w-8 h-8', tool.color)} />
             </div>

             <div className='font-semibold'>
              {tool.label}
             </div>

            </div>
            {<ArrowRight className='w-5 h-5' />}
          </Card>
        )
       }
       </div>
       </div>
       {/* End of Conversation tools */}
       
       
       
       
       {/* Start of Writing Tools */}
       <div>
        <p className='text-center px-4 py-4 font-extrabold'>WRITING TOOLS</p>
       <div className='px-4 md:px-32 space-y-4'>
       {
        WritingTools.map((tool, index)=>
           
          <Card 
          onClick={()=>router.push(tool.href)}
          key={index}
          className='p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer'
          >

            <div className='flex items-center gap-x-4'>

             <div className={cn(`w-p-2 w-fit rounded-md`, tool.bgColor)}>
              <tool.icon className={cn('w-8 h-8', tool.color)} />
             </div>

             <div className='font-semibold'>
              {tool.label}
             </div>

            </div>
            {<ArrowRight className='w-5 h-5' />}
          </Card>
        )
       }
       </div>
       </div>
       {/* End of Writing tools */}


       
       {/* Start of Document Tools */}
       <div>
        <p className='text-center px-4 py-4 font-extrabold'>DOCUMENT TOOLS</p>
       <div className='px-4 md:px-32 space-y-4'>
       {
        DocumentTools.map((tool, index)=>
           
          <Card 
          onClick={()=>router.push(tool.href)}
          key={index}
          className='p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer'
          >

            <div className='flex items-center gap-x-4'>

             <div className={cn(`w-p-2 w-fit rounded-md`, tool.bgColor)}>
              <tool.icon className={cn('w-8 h-8', tool.color)} />
             </div>

             <div className='font-semibold'>
              {tool.label}
             </div>

            </div>
            {<ArrowRight className='w-5 h-5' />}
          </Card>
        )
       }
       </div>
       </div>
       {/* End of Document tools */}


        {/* Start of Media Tools */}
        <div>
        <p className='text-center px-4 py-4 font-extrabold'>MEDIA TOOLS</p>
       <div className='px-4 md:px-32 space-y-4'>
       {
        MediaTools.map((tool, index)=>
           
          <Card 
          onClick={()=>router.push(tool.href)}
          key={index}
          className='p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer'
          >

            <div className='flex items-center gap-x-4'>

             <div className={cn(`w-p-2 w-fit rounded-md`, tool.bgColor)}>
              <tool.icon className={cn('w-8 h-8', tool.color)} />
             </div>

             <div className='font-semibold'>
              {tool.label}
             </div>

            </div>
            {<ArrowRight className='w-5 h-5' />}
          </Card>
        )
       }
       </div>
       </div>
       {/* End of Media tools */}



       </div>

       <div className='relative w-full h-56'>
        <Image src='/images/dark-3061610_1920.jpg' alt='random image' fill />
       </div>

    </div>
 
      
  )
}

export default DashboardPage
