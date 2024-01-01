import { useState, useEffect } from 'react'
import  Link  from 'next/link'
import { Button } from "./ui/button"
import  Image  from 'next/image'
import { GOOGLE_LOGIN_URL } from './urls'
import { GOOGLE_LOGOUT_URL } from './urls'
import Waitlist from './waitlistpage'



// URLs
 // URLs
 const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL


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
      <div className='flex flex-col flex-1 gap-4'>
        <div className='relative w-24 h-12'>
          <Image src='/logos/fixupe_logo.png' alt='logo' fill />
        </div>
        <Button className='' asChild>
          <Link href='/dashboard'>Dashboard</Link>
        </Button>
        { isLoggedIn ?
        <Button className='' asChild>
          <Link href={`${BASE_URL}/accounts/logout/`}>Sign Out</Link>
        </Button>:
        <Button className='' asChild>
        <Link href={`${BASE_URL}/accounts/login/`}>Sign In</Link>
      </Button>
         }

         <div>
          <Waitlist />
         </div>
      </div>
    </div>
  )
}