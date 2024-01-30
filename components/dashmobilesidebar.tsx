"use client"

import {useState, useEffect} from 'react'
import { Menu} from "lucide-react"
import { Button } from "./ui/button"
import Sidebar from "./dashsidebar"
import { SheetContent, Sheet, SheetTrigger } from "./ui/sheet"
import { UserAvatar } from './user-avater'


// URLs
const GOOGLE_AUTH_URL = process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL
const SSO_LOGIN: any = process.env.NEXT_PUBLIC_SSO_DJANGO_LOGIN_URL
const SSO_LOGOUT: any = process.env.NEXT_PUBLIC_SSO_DJANGO_LOGOUT_URL



const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(()=>{
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className='flex justify-between'>
      <div>
      <Sheet >
        <SheetTrigger>
         <Button variant='ghost' size='icon' className="md:hidden text-white">
            <Menu />
        </Button>
        </SheetTrigger>
        <SheetContent side='left' className="h-full  bg-black  mb-8 ">
          
          <div className=' h-full w-full'>
          <Sidebar />
          </div>
        </SheetContent>
        </Sheet>
        </div>

        
    </div>
  )
}

export default MobileSidebar