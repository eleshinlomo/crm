"use client"

import {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Menu} from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { HomeMobileNavBar } from './homemobilenavbar'
import { LoginPage } from '@/components/loginpage'


// Auth Functions
import { userLogout } from './auth'
import { loginChecker } from './auth'




const HomeNavBar = ()=>{

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false) 
  const [username, setUsername] = useState<string | null>(null)

  // URLs
  const ALLAUTH_BASE_URL = process.env.NEXT_PUBLIC_ALLAUTH_BASE_URL
 
  // Login Checker Handler
  const handleLoginChecker = ()=>{
    const user: any = loginChecker()
    if(user !== null && user !== 'undefined' && user !== undefined ){
        console.log(user)
        const {username, userid} = user
        if(username !== undefined && username !== 'undefined' && username !== null){
        setUsername(username)
        setIsLoggedIn(true)
    }else{
        return null
    }
    }else{
        setIsLoggedIn(false)
    }
  }

  useEffect(()=>{
   handleLoginChecker()
  }, [])
 

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
  <div className='flex gap-2'>
  {username?
        <p className='mt-2 font-extrabold'>Hi {username}</p>:<p className='mt-2 font-extrabold'>Hi {'Guest'}</p>
        }
<Button size='icon'  className='mt-2 w-10 h-8 bg-white text-black '  asChild>
  <Menu  />
</Button>
</div>
</SheetTrigger>

<SheetContent side='right' className='
bg-black text-white '>
  <div>
  <HomeMobileNavBar />
  </div>
</SheetContent>
</Sheet>
</div>

</div>

       
      <div className='hidden md:flex gap-4 md: mt-3'>
      
         {username?
        <p className='mt-2 font-extrabold'>Hi {username},</p>:
        <p className='mt-2 font-extrabold'>Hi {'Guest'},</p>
        }
        <p className=' md:flex  md:text-md mt-2'>
          
        Complete task faster with AI </p>
        
          {isLoggedIn?
          <Button size='sm' onClick={userLogout}
          className='bg-blue-500'
          >
          Sign Out
        </Button>:

          <Button className='bg-blue-500 hover:bg-blue-500'>
            <Link href='/signinpage'>Sign In</Link>
          </Button>

          // <Button  className='bg-blue-500 hover:bg-blue-500'>
          //   <Link href={`${ALLAUTH_BASE_URL}/accounts/login/`}>
          //   Sign
          //   </Link>
          // </Button>

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