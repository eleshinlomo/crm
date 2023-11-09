import {useState, useEffect} from 'react'
import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import MobileSidebar from "./mobile-sidebar"
import Link from 'next/link'
import { UserAvatar } from './user-avater'
import ProfileAvatar  from './profile-avatar'




export const Navbar = () => {


  
  return (
    <div className="flex items-center p-4">
        <MobileSidebar />

        <div className="flex w-full justify-end">

              
         <ProfileAvatar />
         
         
        </div>
    </div>
  )
}

