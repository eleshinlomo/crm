import { useState, useEffect } from 'react'
import  Link  from 'next/link'
import { Button } from "./ui/button"
import  Image  from 'next/image'
import { GOOGLE_LOGIN_URL } from './urls'
import { GOOGLE_LOGOUT_URL } from './urls'
import Waitlist from './waitlistpage'
import { OtherHomeNavButtons } from './otherhomenavbuttons'

//  Auth Functions
import { loginChecker } from './auth'
import WaitlistPage from '@/app/dashboard/waitlistpage/page'
import { userLogout } from './auth'
import DatePage from './date'




// URLs
 // URLs
 const ALLAUTH_BASE_URL = process.env.NEXT_PUBLIC_ALLAUTH_BASE_URL




export const HomeMobileNavBar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false)
  const [username, setUsername] = useState<string | null>(null)
    

  //  Login Checker Handler
  const handleLoginChecker = async ()=>{
    const sessionid: any = localStorage.getItem('sessionid')
    if (! sessionid) return
    const user: any = await loginChecker(sessionid)
    if (!user) return
    if (user.message.ok){
        const {username} = user.message.data
        setUsername(username)
        setIsLoggedIn(true)
    }else{
        setIsLoggedIn(false)
        console.log(user.message.error)
    }
}

  useEffect(()=>{
   handleLoginChecker()
  }, [])


  return (
    <div>
      <div className='flex flex-col flex-1 gap-4'>
        <div className='relative w-24 h-12'>
          <Image src='/logos/fixupe_logo.png' alt='logo' fill />
        </div>


        { isLoggedIn ?
        <div className='flex flex-col gap-3 mt-10'>
       <Button size='sm' onClick={userLogout}>
          Sign Out
        </Button>

        <OtherHomeNavButtons />

        <div>
          <Waitlist />
         </div>

        </div>
        :
        <div className=' flex flex-col flex-1 gap-3 mt-5'>
        <Button className=' w-full'>
          <Link href='signuppage'>Sign up</Link></Button>

        <Button className=''>
            <Link href='/signinpage'>Sign In</Link>
        </Button>

        <div>
          <Waitlist />
         </div>

        </div>
         }

         
      </div>
    </div>
  )
}