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
import { Menu} from 'lucide-react'
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
import { HomeNavItems } from './homenavitems'
import DatePage from './date'




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
       <div className='py-4 bg-black text-white'>
        
        <div className='    
        md:flex flex-1 justify-between  px-2 shadow-2xl  '>


{/* Col 1 */}
{/* Mobile & Logo MD */}

<div className='flex'>
<div className='md:flex  w-full flex-1'>
        <Link href='/'>
          <div className='relative w-12 h-8 my-2'>
        <Image src="/logos/fixupe_logo.png" alt="logo" fill />
        </div>
        </Link>
      </div>

{/* Col2 */}
<div className='md:hidden'>
<Sheet>
<SheetTrigger>
  <div className=''>
 

<Button size='icon'  className='mt-2 w-10 h-8 bg-white hover:bg-white text-black '  asChild>
  <Menu  />
</Button>
</div>
</SheetTrigger>

<SheetContent side='right' className=''>
  <div>
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
        <p className='mt-2 font-extrabold '>Hi {username[0].toUpperCase() + username.slice(1)}</p>:
        <p className='mt-2 font-extrabold'>Hi {'Guest'}</p>
        }
</div>

<div className='mt-2'>
<DatePage />
</div>

<div className='mr-2 text-black'>
<Menubar className=" gap-3">
  <MenubarMenu>
    <MenubarTrigger><Link href='/'>Home</Link></MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger>Services</MenubarTrigger>
    <MenubarContent className='flex flex-col mr-4'>
      <MenubarItem>
        <HomeNavItems />
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger>Contact</MenubarTrigger>
    <MenubarContent className='flex flex-col mr-4'>
      Please mail: mgrsconcept@gmail.com
    </MenubarContent>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger>
      <div className="h-6 w-8">
      <UserAvatar />
      </div>
      </MenubarTrigger>
    <MenubarContent className='flex flex-col mr-4'>
    {isLoggedIn?
          <Button size='sm' onClick={userLogout}
          className='bg-gray-700 py-5'
          >
          Sign Out
        </Button>:
         

          <Button className='b hover:bgbg-gray-700gray-700 py-5'>
            <Link href='/signinpage'>Sign In</Link>
          </Button>
             }
    </MenubarContent>
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
        <p className='mt-2 font-thin'>Hi {username[0].toUpperCase() + username.slice(1)}</p>:<p className='mt-2 font-extrabold'>Hi {'Guest'}</p>
        }
        <DatePage />
        </div>

     </div>

    )
}

export default HomeNavBar