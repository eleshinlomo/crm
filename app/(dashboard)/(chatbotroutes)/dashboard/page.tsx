"use client"
import {useEffect, useState} from 'react'
import Image from 'next/image'
import { ArrowRight, Code, CodeIcon, EyeIcon, ImageIcon, MenuIcon, MessageSquare, MusicIcon, VideoIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {useRouter} from 'next/navigation'





const tools = [
  {
    label: "General Conversation",
    icon: MessageSquare,
    color: "text-pink-500",
    bgColor: "bg-violet-500/10",
    href: "/general"
  },

  {
    label: "AI Boyfriend",
    icon: MenuIcon,
    href: "/boyfriend",
    color: "text-grey-500"
    },

  {
    label: "AI Girlfriend",
    icon: EyeIcon,
    href: "/girlfriend",
    color: "text-grey-500"
    },
   
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/image"
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-blue-500",
    bgColor: "bg-pink-500/10",
    href: "/video"
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    color: "text-purple-500",
    bgColor: "bg-violet-500/10",
    href: "/music"
  },
  
  {
    label: "Code Generation",
    icon: CodeIcon,
    href: "/code",
    color: "text-grey-500"
    },
]

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

  




const DashboardPage = ()=>{

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

 

  const router = useRouter()

  
  return (

    
    <div>
       <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>
          Do everything with AI
        </h2>

        <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
          Complete your task with AI - Ultra fast AI Solution
        </p>
       </div>

       <div className='px-4 md:px-32 space-y-4'>
       {
        tools.map((tool, index)=>
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
            <ArrowRight className='w-5 h-5' />
          </Card>
        )
       }
       </div>

    </div>
 
      
  )
}

export default DashboardPage
