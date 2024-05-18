"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { SignInForm } from "./signinform"
import { ArrowLeftSquareIcon, XIcon } from "lucide-react"
import Image from 'next/image'
import { googleLogin } from "@/components/auth"
import GOOGLESignInPage from "@/components/googlesigninpage"




// URLs
const ALLAUTH_BASE_URL = process.env.NEXT_PUBLIC_ALLAUTH_BASE_URL

const SignInPage = ()=>{
  return (
   <div className="h-full  md:flex flex-col  justify-around w-full
   items-center gap-3 pt-12 ">
         
          
              
              <div className=" flex flex-col  
              gap-2  w-full ">
                {/* Top Content */}
              <div className="flex flex-col justify-center items-center ">
              <Link href='/' className="text-center justify-center  flex flex-1 w-full text-3xl">
              <ArrowLeftSquareIcon className="mt-5  text-3xl" />
              <p className="  py-4">Fixupe</p>
              </Link>
              <div className="flex flex-1 gap-3">
              <p className="mt-1 ">Not Registered?</p>
                <Button size='sm'  className='bg-gray-500 hover:bg-gray-500
                shadow-2xl  '>
                    <Link href='/signuppage'>
                    Sign Up
                    </Link>
                    </Button>
                </div>
              </div>

          </div>
        
       
        {/* Linkedin Button */}

        {/* <Button  className='border border-blue-500
          bg-white text-black hover:bg-white '>
         <Link href={`${ALLAUTH_BASE_URL}/accounts/login/`} 
         className="flex flex-1 justify-between">
          <div className="relative w-8 h-6">
          <Image src='/logos/linkedin_logo.png' alt='google logo' fill />
          </div>
         Sign in with Linkedin
          </Link>
        </Button> */}
        
       
        {/* Email */}
        <div className="">
        <SignInForm />
        </div>


        </div>
      
  )
}

export default SignInPage
