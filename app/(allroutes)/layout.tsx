"use client"
import {useState, useEffect} from 'react'
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



interface AllRoutesProps {
    sessionid: string,
    isLoggedIn: boolean
}



// URLs
const ALLAUTH_BASE_URL = process.env.NEXT_PUBLIC_ALLAUTH_BASE_URL

// Auth Functions
import { loginChecker } from '@/components/auth';



// Login Status
const checking ="Checking login status. Please wait..."

const AllRoutesLayout = ({
    children
}: {
    children: React.ReactNode;
})=>{

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
    const [credit, setCredit] = useState<null | any>(null)
    const [sessionid, setSessionid] = useState<null | any>(null)

    
    const path = usePathname()
    const router = useRouter()
     
   
    const creditHandler = ()=>{
        creditFunction()
    }

//  Login Checker Handler
    const handleLoginChecker = async ()=>{
        try{
        setIsChecking(true)
        // Get sessionid and check validity
        const session_id = localStorage.getItem('sessionid')
        if (!session_id || session_id === null || session_id === 'undefined') throw new Error('Sessionid not found')
        setSessionid(session_id)
        const response = await loginChecker(sessionid)
        if (response.ok){
        setCurrentUser(response)
        setIsChecking(false)
        setUsername(localStorage.getItem('username'))
        setIsLoggedIn(true)
        await creditHandler()
    }
     console.log(response.error)
    }
    catch(err){
        console.log(err)
    }finally{
        setIsChecking(false)
    }
    
}
   

 useEffect(()=>{
    handleLoginChecker()
    creditHandler()
 }, [])



    return(
         <div className=''>

            

             <div className='text-center font-extrabold'>
              <p>{error? error: null}</p>
             </div>

            { isLoggedIn ?
    

            <div className=''>
            {children}
            </div> :

        // Not logged In


        <div className='h-full pt-12 flex flex-col justify-center 
        items-center gap-3  border  font-extrabold'>
            
            {isChecking ?
            <div>
             <div className='relative text-center animate-spin'>
             <Image src='/logo.png' alt='logo' fill />
             </div>
             
            </div>:null
            }
            
            <div className='flex flex-col gap-5 justify-center items-center '>
            <div className='relative h-4 py-16 w-32'>
            <Image src='/logos/fixupe_logo.png' alt='logo' fill />
            </div>
            <p className='text-2xl'>Please Sign in</p>

            <div className='flex gap-5'>
        <Button className='flex gap-1' asChild>
         <Link href='/signinpage'>Login</Link>
         </Button> 

        <Button className='flex gap-1' asChild>
        <Link href='/'>Home</Link>
        </Button> 
        </div>

        <div className='px-4 font-extrabold text-center'>
         {isChecking?
         <div>
         <p className=' animate-pulse'>{checking}</p>
         </div>:null
         }
         {message ? message: null}
        </div>
        {/* End of is checking and message */}

        <div className='relative w-72 h-72 md:w-96 md:h-96 mb-4'>
         <Image src='/images/image_guy.png' alt='ai girl pics' fill />
         </div>

        </div>
        {/* End of Not logged In */}

            </div>

         }


         

        </div>
    )
}

AllRoutesLayout.PropTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    setIsLoggedIn: PropTypes.func.isRequired,
}

export default AllRoutesLayout



