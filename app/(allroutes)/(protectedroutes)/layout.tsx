"use client"
import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
// @ts-ignore
import { useSearchParams, usePathname} from 'next/navigation';
import type { Metadata } from 'next'
import { creditFunction } from '@/components/creditfunction';
// Auth Functions
import { loginChecker } from '@/components/auth';
import UserNotLoggedPage from '../(publicroutes)/authpages/usernotloggedinpage/page';
import { getGoogleAccessToken } from '@/components/auth';
import { getGoogleUserInfo } from '@/components/auth';
import { DashNavbar } from '@/components/dashnavbar';
import { useRouter } from 'next/navigation';






interface ProtectedRoutesProps {
    children: React.ReactNode
}





// URLs
const ALLAUTH_BASE_URL = process.env.NEXT_PUBLIC_ALLAUTH_BASE_URL





// Login Status
const checking ="Checking login status. Please wait..."

const ProtectedRoutesLayout = ({children}: ProtectedRoutesProps)=>{

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false)
    const [isChecking, setIsChecking] = useState<boolean>(false)
    const [message, setMessage] = useState<String>("")
    const [currentUser, setCurrentUser] = useState(null)
    const [csrftoken, setCsrftoken] = useState<string | null>(null)
    const [error, setError] = useState<string | any>("")
    const [isAdmin, setIsAdmin] = useState<boolean>(false)
    const [username, setUsername] = useState<string | null>(null)
    const [sessionid, setSessionid] = useState<null | any>(null)

    
    const path = usePathname()
    const router = useRouter()
    const params = useSearchParams()
    const authCode: any = params?.get('code')
     
   
    const creditHandler = ()=>{
        creditFunction()
    }


useEffect(()=>{
    if(!checking && !isLoggedIn){
        router.push('/userisnotloggedinpage')
    }
}, [])

//   Get google accessToken
  const handleGetAccessToken =async ()=>{
    if(!authCode) return
    const response = await getGoogleAccessToken(authCode)
    if(response && response.access_token){
    const gAccessToken = response.access_token
    localStorage.setItem('accessToken', gAccessToken)
    const userInfo = await getGoogleUserInfo(gAccessToken)
    const username = userInfo.given_name
    localStorage.setItem('username', username)
    console.log(userInfo)
    setIsLoggedIn(true)
    }
  }

  useEffect(()=>{
    handleGetAccessToken()
  }, [])


//  Login Checker Handler
    const handleLoginChecker = async ()=>{
        try{
        setIsChecking(true)
        // Get sessionid and check validity
        const session_id = localStorage.getItem('sessionid')
        if (!session_id) return
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
     setIsLoggedIn(false)
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
 }, [isLoggedIn])



    return(
         <div className=''>
            <DashNavbar updateAuth={handleLoginChecker} isLoggedIn={isLoggedIn} />

             <div className='text-center font-extrabold'>
              <p>{error? error: null}</p>
             </div>

             {isChecking ?
            <div>
             <div className='relative text-center animate-spin'>
             <Image src='/logo.png' alt='logo' fill />
             </div>
             
            </div>:null
            }

            { isLoggedIn ?
    
            <div className=''>
            {children}
            </div> :

        // Not logged In
           
            <UserNotLoggedPage />
            

         }


         

        </div>
    )
}


export default ProtectedRoutesLayout



