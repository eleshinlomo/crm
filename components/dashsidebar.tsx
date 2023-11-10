"use client";

import Link from "next/link";
import Image from 'next/image'
import { Montserrat} from "next/font/google";
import { cn } from "@/lib/utils";
import { Code, CodeIcon, EyeIcon, ImageIcon, LayoutDashboard, LogOutIcon, MenuIcon, MessageSquare, Music2Icon, Settings, VideoIcon } from "lucide-react";
import {usePathname} from 'next/navigation'
import { AvatarImage } from "./ui/avatar";
import { DIRTY } from "zod";
import { GOOGLE_LOGOUT_URL } from "./urls";
import CreditPage from "@/components/creditpage";



const montserrat = Montserrat({
    weight: "600",
    subsets:["latin"]
})

const routes = [
  {
  label: "Dashboard",
  icon: LayoutDashboard,
  href: "/dashboard",
  color: "text-grey-500"
  },
  {
    label: "General Conversation",
    icon: MessageSquare,
    href: "/general",
    color: "text-pink-500"
    },

    {
      label: "Code Generation",
      icon: CodeIcon,
      href: "/code",
      color: "text-grey-500"
      },

    {
      label: "Image Generation",
      icon: ImageIcon,
      href: "/image",
      color: "text-blue-500"
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
      label: "Video Generation",
      icon: VideoIcon,
      href: "/video",
      color: "text-blue-500"
      },
      {
        label: "Music Generation",
        icon: Music2Icon,
        href: "/music",
        color: "text-purple-500"
        },
       
       
          {
            label: "Settings",
            icon: Settings,
            href: "/settings",
            
            }
          

]


const Sidebar = () => {
  const pathname = usePathname()
  return (
    <div className="h-full space-y-4 py-4 flex flex-col 
    bg-black  text-white">
     
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

        <div className="space-y-1">
         {routes.map((route, index)=>(
         <Link
          href = {route.href}
          key={index}
          className={cn(`text-sm group flex p-3 w-full justify-start
          font-medium cursor-pointer hover:text-white hover:bg-white/10
          rounded-lg transition
          `, 
          pathname === route.href ? "text-white bg-white/10": "text-zinc-400" 
          )}
          >
            <div className="flex items-center flex-1">
             <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
             {route.label}
            </div>
         </Link>
         ))}

         {/* <div className="py-2">
          <CreditPage />
         </div> */}

         <a href={GOOGLE_LOGOUT_URL}>
          <div className="flex flex-1 gap-3 pl-3 py-2 mt-3">
          <LogOutIcon />
          <p>Logout</p>
          </div>
        </a>

        </div>
        
        
        
     </div>
    </div>
  )
}

export default Sidebar