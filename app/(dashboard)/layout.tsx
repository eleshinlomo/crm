"use client"

import {useState, useEffect} from 'react'
import Sidebar from "@/components/sidebar";
import {Navbar} from "@/components/navbar";
import { Button } from '@/components/ui/button';
import  Link  from 'next/link';
import PropTypes from 'prop-types'
import { getcsrfToken } from '@/components/auth';
import { getAccessToken } from '@/components/auth';
import { getUserProfile } from '@/components/auth';
import Image from 'next/image'
import { Footer } from '@/components/footer';




const DashboardLayout = ({
    
    children
}: {
    children: React.ReactNode;
})=>{

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isChecking, setIsChecking] = useState(true)
    const [user, setUser] = useState(null)
    const [csrftoken, setCsrftoken] = useState<any>()
    const [accessToken, setAccessToken] = useState<any>()


 const checkUser = "Checking if User exist..."

//   Get CSRF TOKEN

  useEffect(()=>{

    const handleCsrfToken = async ()=>{

    try{
    
    const response: any = await getcsrfToken()
    if (! response)throw new Error("authChecker error") 
    setCsrftoken(response)
    
  }
  catch(err){
  console.log(err)
}
    }

handleCsrfToken()
  }, [])  


  //   Get ACCESS TOKEN

  useEffect(()=>{

    const handleGetAccessToken = async ()=>{

    try{
    
    const response: any = await getAccessToken()
    if (! response)throw new Error("No Access Token Found") 
    console.log(response)
    setAccessToken(response.message)
    
  }
  catch(err){
  console.log(err)
}
    }

handleGetAccessToken()
  }, [])  

 

  if (accessToken){
    console.log(accessToken)
  }


  //   GET USERPROFILE
  useEffect(()=>{

    const handleUserProfile = async ()=>{
    
    const response = await getUserProfile(csrftoken, accessToken)
    if (!response) throw new Error("No response from server")
    setIsLoggedIn(true)
    setIsChecking(false)
    }

    handleUserProfile()
      }, [csrftoken, accessToken])




  

 
 

  const DJANGO_LOGIN_URL = process.env.NEXT_PUBLIC_SSO_DJANGO_LOGIN_URL
 

    return(
         <div>
            { isLoggedIn ?
        <div className="h-full relative">
            <div className="hidden h-full md:flex   md:w-72 md:flex-col
             md:fixed md:inset-y-0 z-[80] bg-black">

                <Sidebar />
            </div>
            
           <main className="md:pl-72">
            <Navbar />
          
            {children}

            <Footer />
           </main>
        </div>:


        <div className='h-full mt-4 flex flex-col justify-center items-center gap-3'>
            
            {isChecking ?
            <div>
             <div className='text-center animate-spin'>
             <Image src='/logo.png' alt='logo' width='50' height='50' />
             </div>
             {checkUser}
            </div>:null
            }
            
            
            <p className='text leading-8'>You need to be logged in</p>
            <Link href='/'>
            <Button>Back to home</Button>
            </Link>

        <Button className='flex gap-1' asChild>
        <Link href={`${DJANGO_LOGIN_URL}`}>
        <Image src='/google_logo.png' alt='logo' width='20' height='20' />
        Login
        </Link>
        </Button> 

            </div>

         }
        </div>
    )
}

DashboardLayout.PropTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    setIsLoggedIn: PropTypes.func.isRequired,
}

export default DashboardLayout



