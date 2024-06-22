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
    const authCode: any = params?.get('code')
    if(!authCode) return
    const response = await getGoogleAccessToken(authCode)
    if(response && response.access_token){
    const gAccessToken = response.access_token
    localStorage.setItem('accessToken', gAccessToken)
    const userInfo = await getGoogleUserInfo(gAccessToken)
    const username = userInfo.given_name
    localStorage.setItem('username', username)
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
        const accessToken = localStorage.getItem('accessToken')
        setSessionid(session_id)
        if (!sessionid || !accessToken) return
        const response: any = await loginChecker({sessionid, accessToken})
        if (sessionid !== null || sessionid !== 'undefined'){
        
        if(response.ok && sessionid){
            setCurrentUser(response)
            setIsChecking(false)
            setUsername(localStorage.getItem('username'))
            setIsLoggedIn(true)
        }}

        if(accessToken){
        setIsLoggedIn(true)
        setIsChecking(false)
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
    creditHandler()
 }, [isLoggedIn])



    return(
         <div className=''>
            

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
            <DashNavbar updateAuth={handleLoginChecker} isLoggedIn={isLoggedIn} />
            {children}
            </div> :

        // Not logged In
           
            <UserNotLoggedPage />
            

         }


         

        </div>
    )
}


export default ProtectedRoutesLayout



