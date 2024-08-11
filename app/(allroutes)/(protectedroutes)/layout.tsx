"use client"
import {useState, useEffect} from 'react'
import Image from 'next/image'
// @ts-ignore
import { useSearchParams, usePathname} from 'next/navigation';
import type { Metadata } from 'next'
import { creditFunction } from '@/components/creditfunction';
// Auth Functions
import { getGoogleAccessToken } from '@/components/auth';
import { getGoogleUserInfo } from '@/components/auth';
import { DashNavbar } from '@/components/dashnavbar';
import { useRouter } from 'next/navigation';
import HomeNavbar from '@/components/homenavbar';
import { LoginCheckerProps } from '@/components/auth';
import { loginChecker } from '@/components/auth';
import UserNotLoggedPage from '../authpages/usernotloggedinpage';






interface ProtectedRoutesProps {
    children: React.ReactNode
}

// URLs
const ALLAUTH_BASE_URL = process.env.NEXT_PUBLIC_ALLAUTH_BASE_URL

// Login Status
const checking ="Checking login status. Please wait..."

const ProtectedRoutesLayout = ({children}: ProtectedRoutesProps)=>{

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [isChecking, setIsChecking] = useState<boolean>(false)
    const [message, setMessage] = useState<string | React.ReactNode>("Checking status")
    const [error, setError] = useState<string | any>("")
    const [username, setUsername] = useState<string | null>(null)
    const [sessionid, setSessionid] = useState<null | any>(null)
    

    
    const path = usePathname()
    const router = useRouter()
    const params = useSearchParams()
    
     
   
    const creditHandler = ()=>{
        creditFunction()
    }


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
    const LoginCheckerHandler = async ()=>{
        try{
        setIsChecking(true)
        setMessage('Signing in...')
        const sessionid = localStorage.getItem('sessionid')
        const accessToken = localStorage.getItem('accessToken')
        if((sessionid && sessionid !==null) || (accessToken && accessToken !==null)){
        const payload: LoginCheckerProps = {sessionid, accessToken, error}
        if(!payload) return
        const response: any = await loginChecker()
        if(response.ok){
            setIsLoggedIn(true)
            setMessage('')
        }else{
            setMessage(response.error)
           }
        }else{
            setMessage('User not authenticated')
        }
       }
    catch(err){
        console.log(err)
    }finally{
        setIsChecking(false)
    } 
}
   

 useEffect(()=>{
    LoginCheckerHandler()
    creditHandler()
 }, [isLoggedIn])



    return(
         <div className=''>
            

             {isChecking ?
            <div>
             <div className='relative text-center animate-spin'>
             <Image src='/logo.png' alt='logo' fill />
             </div>
             
            </div>:null
            }

            { isLoggedIn ?
    
            <div className=''>
            <DashNavbar updateAuth={LoginCheckerHandler} isLoggedIn={isLoggedIn} />
            {children}
            </div>: 
            <div className='flex flex-col'>
            <HomeNavbar isLoggedIn={isLoggedIn} />
            <UserNotLoggedPage message={message} />
            </div>
         } 

        </div>
    )
}


export default ProtectedRoutesLayout



