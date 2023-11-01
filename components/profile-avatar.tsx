"use client"
import {useState, useEffect} from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { string } from "zod"
import { Button } from "./ui/button"
import  Link  from "next/link"
import { SheetContent, Sheet, SheetTrigger } from "./ui/sheet"
import { authChecker } from './auth'
import { getUserProfile } from './auth'



const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL



export const ProfileAvatar = ()=>{
const [userProfile, setUserProfile] = useState< []>([])
const [isLoggedIn, setIsLoggedIn] = useState(false)
const [toggleBtn, setToggleBtn] = useState(false)

const handleClose = ()=>{
  setToggleBtn(false)
}

const handleOpen = ()=>{
  setToggleBtn(true)
}

const GOOGLE_LOGOUT_URL = process.env.NEXT_PUBLIC_SSO_LOGOUT_URL
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL


// Get User Profile
const handleUserProfile = async ()=>{
  
  const response: any = await getUserProfile()
  if (!response) throw new Error("getUserProfile function error")
  console.log(`${userProfile} is found`)
  setUserProfile(response.message)
  
}


 // Check Authentication 

const handleAuthCheck = async ()=>{
   const response = await authChecker()
   if (!response) throw new Error("authChecker error")
   setIsLoggedIn(true)
}

useEffect(()=>{
  handleUserProfile()
  handleAuthCheck()
}, [])
 
  

 
    
 
    return (

      <div>
      <Sheet>
        <SheetTrigger>
          <Button size='icon' asChild className='mt-2'>
        <Avatar className='h-12 w-12'>
              <AvatarImage src='/avatar-1968236_1280.png' />
              
               <AvatarFallback className='bg-white text-black'>
                  Profile
                </AvatarFallback>
            </Avatar>
            </Button>
        </SheetTrigger>
        <SheetContent side='top' className="p-0">
        
        
          {isLoggedIn ?
          <div className='  bg-black border-r-4 flex flex-col justify-center items-center'>
          {userProfile.map((user: any, index)=>
          <ul key={index} className='text-sm text-center text-white py-2 '>
          <li>Username: {user.username}</li>
          <li>{user.email}</li>
          <li>Firstname: {user.firstname}</li>
          <li>Lastname: {user.lastname}</li>
          </ul>
          )}
          <div className='flex gap-1'>
          <Button asChild>
            <Link href={`${GOOGLE_LOGOUT_URL}`}>Logout</Link>
          </Button>
          <Button asChild>
            <Link href=''>Edit Profile</Link>
          </Button>
          </div>
          </div>:
          
          <div>
           <p className=' bg-black flex justify-end text-white px-4 py-8'>I am unable to find out who you are. Guess you are a Guest.</p>
          </div>
          }
         
        </SheetContent>
        </Sheet>
    </div>

    )
}