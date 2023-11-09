"use client"

import {useState, useEffect} from 'react'
import Sidebar from "@/components/sidebar";
import {Navbar} from "@/components/dashnavbar";
import { Button } from '@/components/ui/button';
import  Link  from 'next/link';
import PropTypes from 'prop-types'
import { getcsrfToken } from '@/components/auth';
import { getAccessToken } from '@/components/auth';
import { getUserProfile } from '@/components/auth';
import Image from 'next/image'
import { Footer } from '@/components/footer';
import { dummyLogin } from '@/components/auth';
import { BASE_URL } from '@/components/auth';
import { GOOGLE_LOGIN_URL } from '@/components/urls';
// @ts-ignore
import Cookies from 'js-cookie'



const DJANGO_LOGIN_URL = process.env.NEXT_PUBLIC_SSO_DJANGO_LOGIN_URL



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
    const [accessToken, setAccessToken] = useState<string | null>(null)

   

    

  useEffect(()=>{

    const handleCsrfToken = async ()=>{

    try{
    
    const response = await getcsrfToken()
    if (response.csrf_token){
        console.log({"First CsrfToken":response.csrf_token})
        setCsrftoken(response.csrf_token)
        const newcsrf = response.headers.get('X-CSRFToken')
    if(newcsrf){
    setCsrftoken(newcsrf)
    console.log({"newCSRF": csrftoken})
    }

    }else{
        throw new Error("Unable to fetch csrf token") 
    }
    
  }
  catch(err){
  console.log(err)
}
    }

handleCsrfToken()
  }, [])  



    // Fetch SessinID from server
    useEffect(()=>{
        
        const loginChecker = async(csrftoken: any) =>{

            try {
            if (!csrftoken) return
            const response: any = await fetch(`${BASE_URL}/authchecker/`, {
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                }
            })
            if (!response) throw new Error("No response from server")
             const data = await response.json()
            if (data.success === true){
              const saveSessionid = localStorage.setItem('mysessionid', data.sessionid)
              console.log(data)
              setIsAuthenticated(true)
            }else{
                setMessage(data.message)
            }
        }catch(err: any){
            setMessage(err.message)
        }
        }
        
        loginChecker(csrftoken)
        },[csrftoken])

        

        // RETREIVE SESSIONID FROM LOCAL STORAGE
        useEffect(()=>{
        const getSessionIdFromLS = async ()=>{
            if (!isAuthenticated) return
            const sessionid = localStorage.getItem('mysessionid')
            console.log({"Session found": sessionid})
            setIsSessionId(true)
            
            if (sessionid){
            const response = await fetch(`${BASE_URL}/getuser/`, {
                mode: 'cors',
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${sessionid}`
                },
                credentials: 'include'
        })
          if(!response) throw new Error("Server not releasing user info")
          const data = await response.json()
          if(data){
            setIsLoggedIn(true)
            console.log(data)
          }else{
            setMessage(data.message)
          }
          
        }

        }
        getSessionIdFromLS()
      }, [isAuthenticated])


      

 const checkUser = "Checking authentication status..."




//   //   Get ACCESS TOKEN

//   useEffect(()=>{

//     const handleGetAccessToken = async ()=>{

//     try{
//     if (csrftoken){
//     const response = await getAccessToken(csrftoken)
//     if (response.access_token){
//     console.log(response)
//     setAccessToken(response.access_token)
//     }else{
//         throw new Error("No Access Token Found") 
//     }
//   }else{
//     throw new Error("No access_token found")
//   }
    
//   }
//   catch(err){
//   console.log(err)
// }
//     }

// handleGetAccessToken()
//   }, [csrftoken])  

 


//   //   GET USERPROFILE
//   useEffect(()=>{

//     const handleUserProfile = async ()=>{
    
//     try {
    
//     const response = await getUserProfile(accessToken, csrftoken)
//     if (!response) throw new Error("No response from server")
//     if(response.success)
//     setIsLoggedIn(true)
//     setIsChecking(false)
//     }

//     catch(err){
//         console.log(err)
//         setIsLoggedIn(false)
//     }finally{
//         setIsChecking(false)
//     }
// }


//     handleUserProfile()
//       }, [accessToken, csrftoken])




  

 
 

  
 

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


        <div className='h-full mt-12 flex flex-col justify-center items-center gap-3'>
            
            {isChecking ?
            <div>
             <div className='relative text-center animate-spin'>
             <Image src='/logo.png' alt='logo' fill />
             </div>
             {checkUser}
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



