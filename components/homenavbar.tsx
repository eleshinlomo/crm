"use client"

import {useState, useEffect} from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Link from 'next/link'
import { UserAvatar } from "./user-avater"
import Image from 'next/image'
import { Button } from './ui/button'
import { BotIcon, FileIcon, HomeIcon, Menu} from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { HomeMobileNavBar } from './homemobilenavbar'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



// Tools

import { Tools } from './tools'



// Auth Functions
import { userLogout } from './auth'
import { loginChecker } from './auth'
import { OtherHomeNavButtons } from './otherhomenavbuttons'
import DatePage from './date'
import {motion} from 'framer-motion'
import { SvgIcon } from '@mui/material'



const HomeNavBar = ()=>{

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false) 
  const [username, setUsername] = useState<string | null>(null)
  const [sessionid, setSessionid] = useState<null | any>(null)
  const [isChecking, setIsChecking] = useState<boolean>(false)

  // URLs
  const ALLAUTH_BASE_URL = process.env.NEXT_PUBLIC_ALLAUTH_BASE_URL
 
  
 
//  Login Checker Handler
const handleLoginChecker = async ()=>{
  try{
  setIsChecking(true)
  // Get sessionid and check validity
  const session_id = localStorage.getItem('sessionid')
  if (!session_id || session_id === null || session_id === 'undefined') throw new Error('Sessionid not found')
  setSessionid(session_id)
  const user = await loginChecker(sessionid)
  const {username} = user
  setUsername(username)
  setIsChecking(false)
  setUsername(localStorage.getItem('username'))
  setIsLoggedIn(true)

}
catch(err){
  console.log(err)
}finally{
  setIsChecking(false)
}

}


useEffect(()=>{
handleLoginChecker()
}, [sessionid])
 

    return(
       <div className='py-4  w-full'>
        
        <div className='    
        md:flex flex-1 justify-between  px-2 shadow-2xl  '>


{/* Col 1 */}
{/* Mobile & Logo MD */}

<div className='flex'>
<div className='md:flex  w-full flex-1'>
        <Link href='/'>
          <div className='relative w-16 h-12 my-2'>
        <HomeIcon className='h-8 w-8' />
        </div>
        </Link>
      </div>

{/* Col2 */}
<div className='md:hidden'>
<Sheet>
<SheetTrigger>
  <div className='md:hidden'>
 

{/* <Button size='icon'  className=' mt-2 w-10 h-8 bg-white hover:bg-white text-black '  asChild>
  <Menu  />
</Button> */}
</div>
</SheetTrigger>

<SheetContent side= 'top' className=' bg-black'>
  <div className=''>
  <HomeMobileNavBar />
  </div>
</SheetContent>
</Sheet>
</div>

</div>



{/* Col3 */}
<div className="hidden md:flex  mt-2 gap-3">

<div className='text-white'>
{username?
        <p className='mt-2 font-extrabold '>
          Hi {username[0].toUpperCase() + username.slice(1)}</p>:
        <p className='mt-2 font-extrabold'>Hi {'Guest'}</p>
        }
</div>

<div className='mt-2'>
<DatePage />
</div>

<div className='mr-2  '>
<Menubar className=" ">
  <MenubarMenu>
    <MenubarTrigger><Link href='/'>Home</Link></MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger>Services</MenubarTrigger>
    <MenubarContent className='flex flex-col mr-4 bg-white'>
      <MenubarItem>
        <OtherHomeNavButtons />
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>

    <MenubarMenu>
    <MenubarTrigger><Link href='/contactpage'>Contact</Link></MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger><Link href='https://blog.myafros.com'>Blog</Link></MenubarTrigger>
  </MenubarMenu>
 
  <MenubarMenu>
  <MenubarTrigger>
    {isLoggedIn?
          
          <Button size='sm' onClick={userLogout}
          className='bg-white hover:bg-white text-black py-5'
          >
          Sign Out
        </Button>:
         
            <Link href='/authpages/signinpage'>Sign In</Link>
          
             }
    </MenubarTrigger>
  </MenubarMenu>

  
</Menubar>
              
        
    </div>
     
    <div className='md:hidden mt-2 h-7 w-7'>
          <UserAvatar />
          <ul className='z-10'>
            <li><Button className='right-6 my-1 px-12'>Sign Out</Button></li>
          </ul>
      </div>

    </div>
     </div>

     <div className='text-center text-white md:hidden mt-2'>
     {username?
        <p className=' font-thin'>{username[0].toUpperCase() + username.slice(1)}</p>:<p className='mt-2 font-extrabold'>Hi {'Guest'}</p>
        }

        {/* Date */}
        <div>
        <DatePage />
        </div>
        </div>

     </div>

    )
}

export default HomeNavBar