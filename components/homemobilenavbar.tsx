import { useState, useEffect } from 'react'
import  Link  from 'next/link'
import { Button } from "./ui/button"
import  Image  from 'next/image'
import { GOOGLE_LOGIN_URL } from './urls'
import { GOOGLE_LOGOUT_URL } from './urls'
import Waitlist from './waitlistpage'
import { LoginPage } from './loginpage'



// URLs
 // URLs
 const ALLAUTH_BASE_URL = process.env.NEXT_PUBLIC_ALLAUTH_BASE_URL


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
        
        { isLoggedIn ?
        <div>
        <Button className='' asChild>
          <Link href={`${ALLAUTH_BASE_URL}/accounts/logout/`}>Sign Out</Link>
        </Button>

        <Button className='' asChild>
          <Link href='/dashboard'>Dashboard</Link>
        </Button>

        <div>
          <Waitlist />
         </div>

        </div>
        :
        <div className=' flex flex-col flex-1 gap-3 mt-5'>
        <Button className='bg-blue-500 hover:bg-blue-500 w-full'><Link href='signuppage'>Sign up</Link></Button>

        <Button className='bg-blue-500 hover:bg-blue-500'>
            <Link href='/signinpage'>Sign In</Link>
        </Button>

        </div>
         }

         <div>
          <Waitlist />
         </div>
      </div>
    </div>
  )
}