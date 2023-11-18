import { useState, useEffect } from 'react'
import  Link  from 'next/link'
import { Button } from "./ui/button"
import  Image  from 'next/image'
import { BASE_URL } from './auth'
import { GOOGLE_LOGIN_URL } from './urls'
import { GOOGLE_LOGOUT_URL } from './urls'
import WaitlistPage from './waitlistpage'





export const HomeSidebar = () => {

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
      <div className='flex flex-col gap-6 py-8'>
        <div className='relative w-32 h-24'>
          <Image src='/images/logo.png' alt='logo' fill />
        </div>
        <Button className='bg-black/30 hover:bg-white hover:text-black' asChild>
          <Link href='/dashboard'>Dashboard</Link>
        </Button>
        { isLoggedIn ?
        <Button className='bg-black/30 py' asChild>
          <Link href={GOOGLE_LOGOUT_URL}>Sign Out</Link>
        </Button>:
        <Button className='bg-black/30 py' asChild>
        <Link href={GOOGLE_LOGIN_URL}>Sign In</Link>
      </Button>
         }

         <div>
          <WaitlistPage />
         </div>
      </div>
    </div>
  )
}