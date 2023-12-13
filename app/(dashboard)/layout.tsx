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


  
  useEffect(()=>{

    const handleCsrfToken = async ()=>{

    try{
    
    const response = await getcsrfToken()
    if (response.csrf_token){
        console.log({"First CsrfToken":response})
        setCsrftoken(response.csrf_token)

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

  


// useEffect(()=>{
//   const getCookies = async ()=> {
//   const cookie = await Cookies.get('sessionfolio')
//   if(!cookie) throw new Error('Cookie not found')
//     console.log({"sessionfolio": cookie})
//   }
//   getCookies()
// },[])
    

        

        

      //   // RETREIVE SESSIONID FROM LOCAL STORAGE
      //   useEffect(()=>{
      //   const getSessionIdFromLS = async ()=>{
      //       if (!isAuthenticated) return
      //       const sessionid = localStorage.getItem('mysessionid')
      //       console.log({"Session found": sessionid})
      //       setIsSessionId(true)
            
      //       if (sessionid){
      //       const response = await fetch(`${BASE_URL}/getuser/`, {
      //           mode: 'cors',
      //           method: 'GET',
      //           headers: {
      //               "Content-Type": 'application/json',
      //               "Authorization": 'Bearer ' + String(sessionid)
      //           },
      //           credentials: 'include'
      //   })
      //     if(!response) throw new Error("Server not releasing user info")
      //     const data = await response.json()
      //     if(data){
      //       setIsLoggedIn(true)
      //       console.log(data)
      //     }else{
      //       setMessage(data.message)
      //     }
          
      //   }

      //   }
      //   getSessionIdFromLS()
      // }, [isAuthenticated])


      

 const checkUser = "Checking authentication status..."




//   //   Get ACCESS TOKEN

  useEffect(()=>{

    const handleGetAccessToken = async ()=>{

    try{
    const response = await getTokens()
    if (response.tokens){
    console.log(response)
    // const accesstoken = response.access_token
    // localStorage.setItem('accessToken', accesstoken)
    setIsAuthenticated(true)
    }else{
        throw new Error("No Access Token Found") 
    }
  }
  catch(err){
  console.log(err)
}
    }

handleGetAccessToken()
  }, [])  



  // // Login Checker
  // useEffect(()=>{
        
  //   const loginChecker = async(isAuthenticated: any) =>{

  //       try {
  //       if (!isAuthenticated) return
  //       setIsChecking(true)
  //       const accessToken =  localStorage.getItem('accessToken')
  //       if (accessToken){
  //         setIsLoggedIn(true)
  //         setIsChecking(false)
  //         console.log({accessTokenFoundYeah: accessToken})
  //       }else{
  //         setIsLoggedIn(false)
  //       }
      
  //   }catch(err: any){
  //       setMessage(err.message)
  //   }finally{
  //     setIsChecking(false)
  //   }
  //   }
    
  //   loginChecker(isAuthenticated)
  //   },[isAuthenticated])


//   // GET SESSION ID
//   useEffect(()=>{
//    const getSessionId = async ()=> {
//     const response = await fetch(`${BASE_URL}/sessionidretriever/`, {
//          method: 'GET',
//          mode: 'cors',
//          headers: {
//           'Content-Type': 'application/json'
//          }
//     })
//     if (!response) throw new Error("Sessionid not found from server")
//     const data = await response.json()
//      if (data){
//       console.log(data)
//      }
//    }
//   getSessionId()
// }, [])

 


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
        <div className="h-full relative  ">
            <div className="hidden h-full md:flex w-72 md:flex-col flex-1
             md:fixed md:inset-y-0 z-[80] bg-black">

                <Sidebar />
            </div>
            
           <main className="md:pl-72">
            <Navbar />
            <div className='flex flex-col justify-center items-center'>
             <CreditPage />
             </div>
            {children}
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



