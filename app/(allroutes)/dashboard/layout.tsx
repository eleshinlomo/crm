"use client"
import {useState, useEffect, ReactNode} from 'react'
import Sidebar from "@/components/dashsidebar";
import {DashNavbar} from "@/components/dashnavbar";
import { Button } from '@/components/ui/button';
import  Link  from 'next/link';
import PropTypes from 'prop-types'
import Image from 'next/image'
import Footer  from '@/components/footer';
// @ts-ignore
import { useSearchParams, useRouter , usePathname} from 'next/navigation';
import type { Metadata } from 'next'
import { creditFunction } from '@/components/creditfunction';





const creditHandler = ()=>{
    creditFunction()
}

interface DashboardLayoutProps {
    company: string,
    children: React.ReactNode
}
// URLs
const ALLAUTH_BASE_URL = process.env.NEXT_PUBLIC_ALLAUTH_BASE_URL

// Auth Functions
import { loginChecker } from '@/components/auth';



// Login Status
const checking ="Checking login status. Please wait..."

const DashboardLayout =({company, children}: DashboardLayoutProps)=>{

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false)
    const [isChecking, setIsChecking] = useState<boolean>(false)
    const [message, setMessage] = useState<String>("")
    const [currentUser, setCurrentUser] = useState(null)
    const [isSessionId, setIsSessionId] = useState(false)
    const [csrftoken, setCsrftoken] = useState<string | null>(null)
    const [error, setError] = useState<string | any>("")
    const [isAdmin, setIsAdmin] = useState<boolean>(false)
    const [username, setUsername] = useState<string | null>(null)
    const [anonymousUser, setAnonymousUser] = useState<string | null>(null)
    const [credit, setCredit] = useState<null | any>(null)
    const [sessionid, setSessionid] = useState<null | any>(null)

    
    const path = usePathname()
    const router = useRouter()
     
   
   
    useEffect(()=>{
        creditFunction()
    }, [])
   

    return(
         <div className='overflow-hidden'>

            

             <div className='text-center font-extrabold'>
              <p>{error? error: null}</p>
             </div>

            
        <div className="relative flex flex-1 gap-2 w-full overflow-hidden">

            <div className="hidden h-full md:flex w-44 md:flex-col flex-1
             md:fixed md:inset-y-0 z-[80] bg-gradient-to-r from-black
             via-gray-800 to-black overflow-y-auto">

                <Sidebar />
            </div>
            
           <main className=" w-full md:ml-44  ">
            <DashNavbar user={currentUser} />
            <div className='text-center flex flex-col flex-1 justify-center 
            items-center px-4 
             '> 
             {/* <div>
             {username ?
                <p className='font-extrabold'>
                    {`Hi, ${username}`}</p>:null
             }
             </div> */}

             
             </div>

             <div className=''>
            {children}
            </div>
           </main>

           
        </div>




        </div>
    )
}

DashboardLayout.PropTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    setIsLoggedIn: PropTypes.func.isRequired,
}

export default DashboardLayout



