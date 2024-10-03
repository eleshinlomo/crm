"use client"
import {useState, useEffect, ReactNode} from 'react'
import Sidebar from "@/components/navbars/dashsidebar";
import {DashNavbar} from "@/components/navbars/dashnavbar";
import { Button } from '@/components/ui/button';
import  Link  from 'next/link';
import PropTypes from 'prop-types'
import Image from 'next/image'
import Footer  from '@/components/footer';
// @ts-ignore
import { useSearchParams, useRouter , usePathname} from 'next/navigation';
import type { Metadata } from 'next'
import { creditFunction } from '@/components/creditfunction';





const creditHandler = ()=>{
    creditFunction()
}

interface DashboardLayoutProps {
    children: React.ReactNode
}
// URLs
const ALLAUTH_BASE_URL = process.env.NEXT_PUBLIC_ALLAUTH_BASE_URL

// Auth Functions
import { loginChecker } from '@/components/auth';




const DashboardLayout =({children}: DashboardLayoutProps)=>{

    
    const [currentUser, setCurrentUser] = useState(null)
    const [error, setError] = useState<string | any>("")
    

    
    const path = usePathname()
    const router = useRouter()
     
   
   
    useEffect(()=>{
        creditFunction()
    }, [])
   

    return(
         <div className='overflow-hidden'>
  
        <div className="relative flex flex-1 gap-2 w-full overflow-hidden">

            <div className="hidden h-full md:flex w-44 md:flex-col flex-1
             md:fixed md:inset-y-0 z-[80] bg-gradient-to-r from-black
             via-gray-800 to-black overflow-y-auto">

                <Sidebar />
            </div>
            
           <div className=" w-full md:ml-44  ">
            <div className='text-center flex flex-col flex-1 justify-center 
            items-center px-4 
             '> 
             {/* <div>
             {username ?
                <p className='font-extrabold'>
                    {`Hi, ${username}`}</p>:null
             }
             </div> */}

             
             </div>

             <div className=''>
            {children}
            </div>
           </div>

           
        </div>




        </div>
    )
}


export default DashboardLayout



