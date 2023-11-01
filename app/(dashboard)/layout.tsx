"use client"

import {useState, useEffect} from 'react'
import Sidebar from "@/components/sidebar";
import {Navbar} from "@/components/navbar";
import { Button } from '@/components/ui/button';
import  Link  from 'next/link';
import PropTypes from 'prop-types'
import { authChecker } from '@/components/auth';
import Image from 'next/image'
import { Footer } from '@/components/footer';




const DashboardLayout = ({
    
    children
}: {
    children: React.ReactNode;
})=>{

    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [isChecking, setIsChecking] = useState(false)
    const [user, setUser] = useState(null)


 const loading = "Checking Authentication..."

  // Check Authentication

//   useEffect(()=>{

//     const handleAuthChecker = async ()=>{

//     try{
    
//     const response: any = await authChecker()
//     if (! response)throw new Error("authChecker error") 
//     if(response.status === 200)
//     console.log(response)
//     setIsLoggedIn(true)
    
//   }
//   catch(err){
//     // console.log(err)
//     setIsLoggedIn(false)
//   }finally {
//     setIsChecking(false)
//   }
// }

// handleAuthChecker()

//   }, [])  


  

 
 

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
             {loading}
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



