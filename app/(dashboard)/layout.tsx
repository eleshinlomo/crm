"use client"

import {useState, useEffect} from 'react'
import Sidebar from "@/components/dashsidebar";
import {DashNavbar} from "@/components/dashnavbar";
import { Button } from '@/components/ui/button';
import  Link  from 'next/link';
import PropTypes from 'prop-types'
import { getcsrfToken } from '@/components/auth';
import Image from 'next/image'
import { Footer } from '@/components/footer';
// @ts-ignore
import Cookies from 'js-cookie'
import CreditPage from '@/components/creditpage';

// Hooks
import { useSearchParams, useRouter } from 'next/navigation';

// URLs
const ALLAUTH_BASE_URL = process.env.NEXT_PUBLIC_ALLAUTH_BASE_URL

// Auth Functions
import { userLogin } from '@/components/auth';
import { loginChecker } from '@/components/auth';


interface ToolsProps{
  Tools:[]
}

// Login Status
const loginStatus ="Checking login status. Please wait..."

const DashboardLayout = ({
    
    children
}: {
    children: React.ReactNode;
})=>{

    const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false)
    const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false)
    const [isChecking, setIsChecking] = useState<Boolean>(false)
    const [message, setMessage] = useState<String>("")
    const [user, setUser] = useState(null)
    const [isSessionId, setIsSessionId] = useState(false)
    const [csrftoken, setCsrftoken] = useState<string | null>(null)
    const [error, setError] = useState<string | any>("")
    const [username, setUsername] = useState<string | null>(null)
    const [isCheckingloginStatus, setIsCheckingLoginStatus] = useState<boolean>(false)
   

    const router = useRouter()

  

    const handleLoginChecker = async ()=>{
        setIsCheckingLoginStatus(true)
        const getUsername = localStorage.getItem('username')
        if(getUsername !== null){
        console.log(getUsername)
        setUsername(getUsername)
         setIsLoggedIn(true)
         setIsCheckingLoginStatus(false)
       }else{
        setIsLoggedIn(false)
        setIsCheckingLoginStatus(true)
        const userResponse = await loginChecker()
        if(userResponse){
        console.log(userResponse)
        const getUsernameAgain = localStorage.getItem('username')
        if(getUsernameAgain !== null){
        setUsername(getUsernameAgain)
        setIsLoggedIn(true)
        
        }else{  
            setIsCheckingLoginStatus(false)
            setMessage("Sorry, I am unable to log you in")
        }
        }}
}

 useEffect(()=>{
    handleLoginChecker()
 }, [])

    return(
         <div>
             <div className='text-center font-extrabold'>
              <p>{error}</p>
             </div>
            { isLoggedIn ?
        <div className="relative flex flex-1 gap-2 w-full overflow-hidden">

            <div className="hidden h-full md:flex w-72 md:flex-col flex-1
             md:fixed md:inset-y-0 z-[80] bg-black">

                <Sidebar />
            </div>
            
           <main className=" w-full md:ml-72 h-full ">
            <DashNavbar user={user} />
            <div className='flex flex-col flex-1 justify-center 
            items-center  
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
        <a href={`${ALLAUTH_BASE_URL}/accounts/login/`}>
        Login 
        </a>
        </Button> 

        <div className='px-4 text-blue-700 font-extrabold text-center'>
         {isCheckingloginStatus?
         <div>
         <p className=' animate-pulse'>{loginStatus}</p>
         </div>:null
         }
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



