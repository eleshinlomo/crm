"use client"
import {useState, useEffect} from 'react'
import { LogOutIcon, Menu } from "lucide-react"
import { Button } from "./ui/button"
import MobileSidebar from "./dashmobilesidebar"
import Link from 'next/link'
import { UserAvatar } from './user-avater'
// import ProfileAvatar  from './profile-avatar'
import { GOOGLE_LOGOUT_URL } from './urls'

// Auth Functions

import { userLogout } from './auth'
import HomeNavBar from './homenavbar'





export const DashNavbar = (user: any) => {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)



  
  return (
    <div className="p-2 bg-black mb-4 ">
      {/* Mobile */}
        <MobileSidebar />
      
      {/* Desktop */}
        <div className="hidden md:flex flex-1 justify-end">
        <HomeNavBar />
       </div>
    </div>
  )
}

