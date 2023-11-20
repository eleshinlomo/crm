"use client"
import {useEffect, useState} from 'react'
import Image from 'next/image'
import { ArrowDown, ArrowRight, Code, CodeIcon, EyeIcon, ImageIcon, MenuIcon, MessageSquare, MusicIcon, VideoIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {useRouter} from 'next/navigation'
import { Button } from '@/components/ui/button'
import WaitlistPage from '@/components/waitlistpage'
// AI Tools
import { Tools } from '@/components/tools'
// import { ConversationTools } from '@/components/tools'
// import { MediaTools } from '@/components/tools'

// import { DocumentTools } from '@/components/tools'





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

       
      {/* Start of Tools */}
      <div>
        
       <div className='px-4 md:px-32 space-y-4'>
       {
        Tools.map((tool: any, index: any)=>
        
        <div key={index}>

       <p className='text-center text-xl px-4 py-4 font-extrabold'>{tool.category}</p>
        {tool.tools.map((tool: any, index: any)=>
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
        )}
        {/* End of tools Mapping */}
        
        </div>
  )
       }
       {/* End of Tools Mapping */}
       </div>
       </div>
       
       
       
       
       
       {/* Start of Writing Tools */}
      



       </div>

       <div className='relative w-full h-56'>
        <Image src='/images/dark-3061610_1920.jpg' alt='random image' fill />
       </div>

    </div>
 
      
  )
}

export default DashboardPage
