"use client"

import {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Menu} from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { HomeMobileNavBar } from './homemobilenavbar'


// Auth Functions
import { userLogin } from './auth'
import { userLogout } from './auth'




const HomeNavBar = ()=>{

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false) 

  // URLs
  const GOOGLE_AUTH_URL = process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL
  const SSO_LOGIN: any = process.env.NEXT_PUBLIC_SSO_DJANGO_LOGIN_URL
  const SSO_LOGOUT: any = process.env.NEXT_PUBLIC_SSO_LOGOUT_URL

   // Login 
   const handleLogin = async ()=>{
    const accessToken: any = userLogin()
    if(accessToken.ok){
      console.log({"access_code found": accessToken})
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }
  }
      useEffect(()=>{
        handleLogin()
      },[])

    return(
       <div>
        
        <div className='   text-white bg-black  
        md:flex flex-1 justify-between  px-2 shadow-2xl '>

      
{/* Mobile & Logo MD */}

<div className='flex'>
<div className='md:flex  w-full flex-1'>
        <Link href='/'>
          <div className='relative w-12 h-8 my-2'>
        <Image src="/logos/fixupe_logo.png" alt="logo" fill />
        </div>
        </Link>
      </div>

<div className='md:hidden'>
<Sheet>
<SheetTrigger>
<Button size='icon'  className='mt-2 w-10 h-8 bg-white text-black '  asChild>
  <Menu  />
</Button>
</SheetTrigger>

<SheetContent side='right' className='
bg-transparent text-white '>
  <div>
  <HomeMobileNavBar />
  </div>
</SheetContent>
</Sheet>
</div>

</div>


      <div className='hidden md:flex gap-4 md: mt-3'>
        <p className=' md:flex  md:text-md mt-3'>Complete task faster with AI </p>
        
          {isLoggedIn?
          <Button  className='bg-blue-500 hover:bg-blue-500'>
          <Link href={SSO_LOGOUT}>Sign out</Link>
          </Button>:

          <Button>
            <Link href={SSO_LOGIN}>
            Sign
            </Link>
          </Button>

          // <Button className='bg-blue-500 hover:bg-blue-500' asChild>
          // <a href={GOOGLE_AUTH_URL}>
          // Sign in
          // </a>
          // </Button>
        }
          
        
      </div>
     </div>

     </div>

    )
}

export default HomeNavBar