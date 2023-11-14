"use client";
import {useState, useEffect} from 'react'
import Link from "next/link";
import Image from 'next/image'
import { Montserrat} from "next/font/google";
import { cn } from "@/lib/utils";
import { ArrowBigRight, ArrowDown, Code, CodeIcon, EyeIcon,
   ImageIcon, LayoutDashboard, LogOutIcon, MenuIcon, 
   MessageSquare, Music2Icon, Settings, VideoIcon } from "lucide-react";
import {usePathname, useRouter} from 'next/navigation'
import { AvatarImage } from "./ui/avatar";
import { DIRTY } from "zod";
import { GOOGLE_LOGOUT_URL } from "./urls";
import CreditPage from "@/components/creditpage";
import { DashboardSideItem } from "@/components/tools";
import { Button } from "./ui/button";
// AI Tools
import { WritingTools} from '@/components/tools'
import { ConversationTools} from '@/components/tools'
import { MediaTools} from '@/components/tools'



const montserrat = Montserrat({
    weight: "600",
    subsets:["latin"]
})



const DashSidebar = () => {
  
  const [isOpenConversation, setIsOpenConversation] = useState<boolean>(false)
  const [isOpenWriting, setIsOpenWriting] = useState<boolean>(false)
  const [isOpenMedia, setIsOpenMedia] = useState<boolean>(false)
  const [isOpenDashboard, setIsOpenDashboard] = useState<boolean>(false)
  const [isOpenSettings, setIsOpenSettings] = useState<boolean>(false)

  const router = useRouter()

  const closeDashboard = ()=>{
    setIsOpenDashboard(false)
  }

  const openDashboard = ()=>{
    
    setIsOpenDashboard(true)
    setIsOpenSettings(false)
    router.push('/dashboard')
    setIsOpenConversation(false)
    setIsOpenWriting(false)
    setIsOpenMedia(false)
  }

  const closeSettings = ()=>{
    setIsOpenSettings(false)
  }

  const openSettings = ()=>{
    setIsOpenSettings(true)
    setIsOpenDashboard(false)
    router.push('/settings')
    setIsOpenConversation(false)
    setIsOpenWriting(false)
    setIsOpenMedia(false)
  }

  const closeConversation = ()=>{
    setIsOpenConversation(false)
  }

  const openConversation = ()=>{
    setIsOpenConversation(true)
    setIsOpenSettings(false)
    setIsOpenWriting(false)
    setIsOpenMedia(false)
    setIsOpenDashboard(false)
  }

  const closeWriting = ()=>{
    setIsOpenWriting(false)
  }

  const openWriting = ()=>{
    setIsOpenWriting(true)
    setIsOpenSettings(false)
    setIsOpenMedia(false)
    setIsOpenConversation(false)
    setIsOpenDashboard(false)
  }

  const closeMedia = ()=>{
    setIsOpenMedia(false)
  }

  const openMedia = ()=>{
    setIsOpenMedia(true)
    setIsOpenSettings(false)
    setIsOpenWriting(false)
    setIsOpenConversation(false)
    setIsOpenDashboard(false)
  }

  const pathname = usePathname()
  return (
    <div>
     
     <div className='h-full w-full flex  flex-col space-y-4 text-white'>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
     <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center 
        pl-3 mb-14">
        <div className="relative w-8 h-8 mr-4">
         <Image
         fill
         alt="logo"
         src="/logo.png"
          />
        </div>

          <h1 className={cn("text-2xl font-bold", montserrat.className)}>Fixupe</h1>
        </Link>

        <div className="space-y-1 w-full">
          
        {/* Dashboard */}
        <Button className="w-full"
        onClick={isOpenDashboard ? closeDashboard: openDashboard}
        >
          <div className="flex flex-1 gap-7 justify-center items-center">
          <p className="text-md">
          {isOpenDashboard ? 'Viewing Dashboard': 'Dashboard'}
          </p>
            {isOpenDashboard ? <ArrowDown className="" />: <ArrowBigRight />}
            </div>
          </Button>
          

        {/* Start of Conversation tools */}
        <div>
         <Button className="w-full"
         onClick={isOpenConversation ? closeConversation : openConversation}
         >
          <div className="flex flex-1 gap-3  justify-center items-center w-full">
            <p className="text-md">{isOpenConversation ? 'Close Conversation': 'Conversation'}</p>
            <div className="">
            {isOpenConversation ? <ArrowDown className="" />: <ArrowBigRight />}
            </div>
          </div>
         </Button>
         {/* If Open */}
         {isOpenConversation ?
         <div>
         {ConversationTools.map((tool:any, index:any)=>(
         <Link
          href = {tool.href}
          key={index}
          className={cn(`text-sm group flex p-3 w-full justify-start
          font-medium cursor-pointer hover:text-white hover:bg-white/10
          rounded-lg transition
          `, 
          pathname === tool.href ? "text-white bg-white/10": "text-zinc-400" 
          )}
          >
            <div className="flex items-center flex-1">
             <tool.icon className={cn("h-5 w-5 mr-3", tool.color)} />
             {tool.label}
            </div>
         </Link>
         ))}
         </div>:null
         }
        {/* //  End of Conversation tools */}
         </div>

        
        {/* Start of Writing tools */}
        <div>
         <Button className="w-full"
         onClick={isOpenWriting ? closeWriting : openWriting}
         >
          <div className="flex flex-1 gap-3  justify-center items-center w-full">
            <p className="text-md">{isOpenWriting ? 'Close Writing': 'Writing Tools'}</p>
            <div className="">
            {isOpenWriting ? <ArrowDown className="" />: <ArrowBigRight />}
            </div>
          </div>
         </Button>
         {/* If Open */}
         {isOpenWriting ?
         <div>
         {WritingTools.map((tool:any, index:any)=>(
         <Link
          href = {tool.href}
          key={index}
          className={cn(`text-sm group flex p-3 w-full justify-start
          font-medium cursor-pointer hover:text-white hover:bg-white/10
          rounded-lg transition
          `, 
          pathname === tool.href ? "text-white bg-white/10": "text-zinc-400" 
          )}
          >
            <div className="flex items-center mt-2 flex-1">
             <tool.icon className={cn("h-5 w-5 mr-3", tool.color)} />
             {tool.label}
            </div>
         </Link>
         ))}
         </div>:null
         }
        {/* //  End of Writing tools */}
         </div>


        {/* Start of Media tools */}
        <div>
         <Button className="w-full"
         onClick={isOpenMedia ? closeMedia : openMedia}
         >
          <div className="flex flex-1 gap-3  justify-center items-center w-full">
            <p className="text-md">{isOpenMedia ? 'Close Media': 'Media Tools'}</p>
            <div className="">
            {isOpenMedia ? <ArrowDown className="" />: <ArrowBigRight />}
            </div>
          </div>
         </Button>
         {/* If Open */}
         {isOpenMedia ?
         <div>
         {MediaTools.map((tool:any, index:any)=>(
         <Link
          href = {tool.href}
          key={index}
          className={cn(`text-sm group flex p-3 w-full justify-start
          font-medium cursor-pointer hover:text-white hover:bg-white/10
          rounded-lg transition
          `, 
          pathname === tool.href ? "text-white bg-white/10": "text-zinc-400" 
          )}
          >
            <div className="flex items-center flex-1">
             <tool.icon className={cn("h-5 w-5 mr-3", tool.color)} />
             {tool.label}
            </div>
         </Link>
         ))}
         </div>:null
         }
        {/* //  End of Media tools */}
         </div>

        
         {/* Settings */}
        <Button className="w-full"
        onClick={isOpenSettings ? closeSettings: openSettings}
        >
          <div className="flex flex-1 gap-7 justify-center items-center">
          <p className="text-md">
          {isOpenSettings ? 'Viewing Settings': 'Settings'}
          </p>
            {isOpenSettings ? <ArrowDown className="" />: <ArrowBigRight />}
            </div>
          </Button>

         {/* <div className="py-2">
          <CreditPage />
         </div> */}

         <a href={GOOGLE_LOGOUT_URL}>
          <div className="flex flex-1 gap-3 pl-3 py-4">
          <LogOutIcon />
          <p>Logout</p>
          </div>
        </a>

        </div>
        
     </div>

     </div>
    </div>
  )
}

export default DashSidebar