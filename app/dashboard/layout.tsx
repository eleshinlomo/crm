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
import { useSearchParams, useRouter , usePathname} from 'next/navigation';
import type { Metadata } from 'next'
import { creditHandler } from '@/components/credithandler';






// URLs
const ALLAUTH_BASE_URL = process.env.NEXT_PUBLIC_ALLAUTH_BASE_URL

// Auth Functions
import { loginChecker } from '@/components/auth';



interface ToolsProps{
  Tools:[]
}

// Login Status
const checking ="Checking login status. Please wait..."

const DashboardLayout = ({


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
    const [username, setUsername] = useState<string | null>(null)
    const [anonymousUser, setAnonymousUser] = useState<string | null>(null)
    const [credit, setCredit] = useState<null | any>(null)

    // Hooks
    const path = usePathname()
    
    
   

    const router = useRouter()
     
   
   
    //  Login Checker Handler
    const handleLoginChecker = async ()=>{
        try{
        setIsChecking(true)
        // Get sessionid and check validity
        const sessionid: any = localStorage.getItem('sessionid')
        const user: any = await loginChecker(sessionid)
        if (!user) return
        if (user.message.ok){
            const {username} = user.message.data
            setIsChecking(false)
            setUsername(username)
            setCurrentUser(user)
            setIsLoggedIn(true)
            await creditHandler()
           
        }else{
            setMessage("Valid Username not found please re-login")
            setIsLoggedIn(false)
            setIsChecking(false)
            console.log(user.message.error)
        }

    }
    catch(err){
        console.log(err)
    }finally{
        setIsChecking(false)
    }
    
}
   



 useEffect(()=>{
    handleLoginChecker()
 }, [])

    return(
         <div className='relative'>

            

             <div className='text-center font-extrabold'>
              <p>{error? error: null}</p>
             </div>

            { isLoggedIn ?
        <div className="relative flex flex-1 gap-2 w-full overflow-hidden">

            <div className="hidden h-full md:flex w-72 md:flex-col flex-1
             md:fixed md:inset-y-0 z-[80] bg-gradient-to-r from-black
             via-gray-800 to-black overflow-y-auto">

                <Sidebar />
            </div>
            
           <main className=" w-full md:ml-72  ">
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

           
        </div>:

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
            <p className='text-2xl'>Please Sign in</p>

            <div className='flex gap-5'>
        <Button className='flex gap-1'>
         <Link href='/signinpage'>Login</Link>
         </Button> 

        <Button className='flex gap-1'>
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


         {/* Footer */}
         {path === '/voicechat'? null :
         <Footer />
         }

        </div>
    )
}

DashboardLayout.PropTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    setIsLoggedIn: PropTypes.func.isRequired,
}

export default DashboardLayout



