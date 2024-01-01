import { useState, useEffect } from 'react'
import  Link  from 'next/link'
import { Button } from "./ui/button"
import  Image  from 'next/image'
import { BASE_URL } from './auth'
import { GOOGLE_LOGIN_URL } from './urls'
import { GOOGLE_LOGOUT_URL } from './urls'
import Waitlist from './waitlistpage'



// URLs
const GOOGLE_AUTH_URL = process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL
const SSO_LOGIN: any = process.env.NEXT_PUBLIC_SSO_DJANGO_LOGIN_URL
const SSO_LOGOUT: any = process.env.NEXT_PUBLIC_SSO_DJANGO_LOGOUT_URL


export const HomeMobileNavBar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false)
    

  // useEffect(()=>{
  //   const loginChecker = async() =>{
  //       const response: any = await fetch(`${BASE_URL}/authchecker/`, {
  //           mode: 'cors',
  //           credentials: 'include',
  //           headers: {'Content-Type': 'application/json'}
  //       })
  //       if (!response) throw new Error("No response from server")
  //        const data = await response.json()
  //       if (data.success === true){
  //         console.log(data)
  //          setIsLoggedIn(true)
  //       }else{
  //           setIsLoggedIn(false)
  //       }
  //   }
  //   loginChecker()
  //   },[])


  return (
    <div>
      <div className='grid grid-flow-row mx-0 px-2 gap-3'>
        <div className='relative w-24 h-12'>
          <Image src='/logos/fixupe_logo.png' alt='logo' fill />
        </div>
        <Button className='' asChild>
          <Link href='/dashboard'>Dashboard</Link>
        </Button>
        { isLoggedIn ?
        <Button className='' asChild>
          <Link href={SSO_LOGOUT}>Sign Out</Link>
        </Button>:
        <Button className='' asChild>
        <Link href={SSO_LOGIN}>Sign In</Link>
      </Button>
         }

         <div>
          <Waitlist />
         </div>
      </div>
    </div>
  )
}