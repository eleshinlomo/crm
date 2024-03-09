"use client"
import {useState, useEffect} from 'react'
import { LogOutIcon, Menu } from "lucide-react"
import { Button } from "./ui/button"
import DashMobileSidebar from "./dashmobilesidebar"
import Link from 'next/link'
import { UserAvatar } from './user-avater'
// import ProfileAvatar  from './profile-avatar'
import { GOOGLE_LOGOUT_URL } from './urls'

// Auth Functions

import { userLogout } from './auth'
import HomeNavBar from './homenavbar'

// UserProfile
import { getUserProfile } from './userprofile'
import DatePage from './date'
import CreditPage from '@/app/dashboard/creditpage'






export const DashNavbar = (user: any) => {
const [isOpen, setIsOpen] = useState<boolean>(false)
const [userUsername, setUserUsername] = useState<null | any>(null)
const [userData, setUserData] = useState<null | any>(null)
const [company, setCompany] = useState<null | any>(null)


// User Profile Hnalder
useEffect(()=>{
const handleUserProfile = ()=>{
    const userprofile = getUserProfile()
    if (userprofile !==null){
      setUserData(userprofile)
    const {username, company} = userprofile
    
    setUserUsername(username)
    setCompany(company)
    }else{
      return
    }
}
handleUserProfile()
},[])

// Toggle Handler
const handleToggle = ()=>{
  
   setIsOpen(!isOpen)
}

  
  return (
    <div className="flex flex-col px-2 bg-black text-white pb-2">
      {/* Mobile */}
      <div className='relative flex flex-1 justify-between w-full'>
        <DashMobileSidebar />

        <CreditPage />

        <div className=''>

          <Button size='icon' className='h-6 w-6 mt-5 mr-3' onClick={handleToggle}>
          <UserAvatar  />
          </Button>
           

           {/* User Profile */}
           {isOpen?
          <div>

            <div className='absolute right-6 bg-black text-white 
             flex flex-col
            p-4 z-50'>
              <p className='font-extrabold'>Hi {userUsername? userUsername[0].toUpperCase() + userUsername.slice(1): null}</p>
              <p>Company: {company?company:null}</p>
              <Button className=' my-1 px-12'>
              Change Password
              </Button>
              <Button className=' my-1 px-12'>
              Update Profile
              </Button>
            <Button className=' my-1 px-12' onClick={userLogout}>
              Sign Out
              </Button>
              </div>

            </div>:null
          }
      </div>
            
           
        </div>

     <DatePage />
       
    </div>
  )
}

