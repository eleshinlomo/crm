"use client"

import {useState, useEffect} from 'react'
import Sidebar from "@/components/dashsidebar";
import {Navbar} from "@/components/dashnavbar";
import { Button } from '@/components/ui/button';
import  Link  from 'next/link';
import PropTypes from 'prop-types'
import { getcsrfToken } from '@/components/auth';
import { getTokens } from '@/components/auth';
import { getUserProfile } from '@/components/auth';
import Image from 'next/image'
import { Footer } from '@/components/footer';
import { dummyLogin } from '@/components/auth';
import { BASE_URL } from '@/components/auth';
import { GOOGLE_LOGIN_URL } from '@/components/urls';
// @ts-ignore
import Cookies from 'js-cookie'
import CreditPage from '@/components/creditpage';
import { useSearchParams } from 'next/navigation';


interface ToolsProps{
  Tools:[]
}
const DJANGO_LOGIN_URL = process.env.NEXT_PUBLIC_SSO_DJANGO_LOGIN_UR

const DashboardLayout = ({
    
    children
}: {
    children: React.ReactNode;
})=>{

    const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(true)
    const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false)
    const [isChecking, setIsChecking] = useState<Boolean>(false)
    const [message, setMessage] = useState<String>("")
    const [user, setUser] = useState(null)
    const [isSessionId, setIsSessionId] = useState(false)
    const [csrftoken, setCsrftoken] = useState<string | null>(null)
    const [accessToken, setAccessToken] = useState<string | null>(null)


    const params: any = useSearchParams()
    const code = params.get("code")
  
    useEffect(()=>{
      if(code){
      console.log({"Code found": code})
      }else{
        console.log("No code param found")
      }
      },[code])
 

 

    return(
         <div>

            { isLoggedIn ?
        <div className="relative flex flex-1 gap-2 w-full overflow-hidden">

            <div className="hidden h-full md:flex w-72 md:flex-col flex-1
             md:fixed md:inset-y-0 z-[80] bg-black">

                <Sidebar />
            </div>
            
           <main className=" w-full md:ml-72 h-full ">
            <Navbar />
            <div className='flex flex-col flex-1 justify-center 
            items-center bg-black text-white z-[80]
             '>
             <CreditPage />
             </div>

             <div className='py-8'>
            {children}
            </div>
           </main>
        </div>:


        <div className='h-full mt-12 flex flex-col justify-center 
        items-center gap-3'>
            
            {isChecking ?
            <div>
             <div className='relative text-center animate-spin'>
             <Image src='/logo.png' alt='logo' fill />
             </div>
             
            </div>:null
            }
            
            <div className='flex flex-col gap-5 justify-center items-center'>
            <p className='text leading-8'>You need to be logged in</p>
            <Link href='/'>
            <Button>Back to home</Button>
            </Link>

        <Button className='flex gap-1' asChild>
        <Link href={`${GOOGLE_LOGIN_URL}`}>
        <Image src='/google_logo.png' alt='logo' width='20' height='20' />
        Login with Google
        </Link>
        </Button> 

        <div>
         {message}
        </div>
        </div>

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



