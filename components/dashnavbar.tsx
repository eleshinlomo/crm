import {useState, useEffect} from 'react'
import { LogOutIcon, Menu } from "lucide-react"
import { Button } from "./ui/button"
import MobileSidebar from "./dashmobilesidebar"
import Link from 'next/link'
import { UserAvatar } from './user-avater'
// import ProfileAvatar  from './profile-avatar'
import { GOOGLE_LOGOUT_URL } from './urls'




export const Navbar = () => {


  
  return (
    <div className="flex items-center p-4">
        <MobileSidebar />

        <div className="flex w-full justify-end pr-2">
        
        <a href={GOOGLE_LOGOUT_URL}>
        <LogOutIcon />
        </a>

         {/* <ProfileAvatar /> */}
         
         
        </div>
    </div>
  )
}

