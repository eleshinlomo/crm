"use client"
import {useState, useEffect} from 'react'
import { LogOutIcon, Menu } from "lucide-react"
import { Button } from "./ui/button"
import DashMobileSidebar from "./dashmobilesidebar"
import Link from 'next/link'
import { UserAvatar } from './user-avater'
// import ProfileAvatar  from './profile-avatar'
import { GOOGLE_LOGOUT_URL } from './urls'
import SignOutPage from '@/app/(allroutes)/(publicroutes)/authpages/signoutpage'
// Auth Functions
import { userLogout } from './auth'
import HomeNavBar from './homenavbar'
// UserProfile
import { getUserProfile } from './userprofile'
import DatePage from './date'
import CreditPage from '@/app/(allroutes)/(protectedroutes)/creditpage'
import { motion } from 'framer-motion'


interface DashNavProps {
  isLoggedIn: boolean;
  updateAuth: ()=>void;
}

const handleLogout = async ()=>{
  await userLogout()
}

export const DashNavbar = ({isLoggedIn}: DashNavProps) => {

const [isOpen, setIsOpen] = useState<boolean>(false)
const [userUsername, setUserUsername] = useState<null | any>(null)
const [userData, setUserData] = useState<null | any>(null)
const [company, setCompany] = useState<null | any>(null)


// User Profile Handler for Google login
const getUsername = ()=>{
if(typeof window !== 'undefined' || typeof window !==null){
  const userName = localStorage.getItem('username')
  setUserUsername(userName)
}
}

useEffect(()=>{
  getUsername()
}, [userUsername])

// User Profile Handler for Email login

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
useEffect(()=>{
handleUserProfile()
},[])

// Toggle Handler
const handleToggle = ()=>{
  
   setIsOpen(!isOpen)
}

  
  return (
    <div className="flex flex-col px-2 bg-black text-white pb-2">
      {/* Mobile */}
      
      <div className='relative flex  justify-between '>
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
              <div className=''>
              <SignOutPage isLoggedIn={isLoggedIn} updateAuth={()=>handleLogout} />
              </div>
              </div>

            </div>:null
          }
      </div>
            
           
        </div>

     <DatePage />
       
    </div>
  )
}

