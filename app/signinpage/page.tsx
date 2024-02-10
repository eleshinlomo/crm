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


// URLs
const ALLAUTH_BASE_URL = process.env.NEXT_PUBLIC_ALLAUTH_BASE_URL

const SignInPage = ()=>{
  return (
   <div className="h-full md:flex flex-col  justify-around w-full
   items-center gap-3 pt-12 bg-black text-white">
         
          
              
              
              
              <div className="h-auto flex flex-col justify-center items-center 
              gap-2 py-8 w-full ">
              <div className="">
              <Link href='/' className="flex flex-1 w-full text-3xl">
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
        
         
         {/* Goggle Button */}
         {/* <Button  className='border border-blue-500
          bg-white text-black hover:bg-white'>
         <Link href={`${ALLAUTH_BASE_URL}/accounts/login/`} 
         className="flex flex-1 justify-between">
          <div className="relative w-8 h-6">
          <Image src='/logos/google_logo.png' alt='google logo' fill />
          </div>
         Sign in with Google
          </Link>
        </Button> */}

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

        <div className="md:flex w-full">
        
       
        {/* Email */}
        <div className="h-auto w-full md:w-1/2 flex justify-center 
        items-center ">
        <SignInForm />
        </div>

         {/* Image */}
         <div className="relative h-72 md:h-82 w-full md:w-1/2 md:mt-16 ">
        <Image src='/bg/lines_gif.gif' alt='' fill />
        </div>

        </div>
        
        
      </div>
  )
}

export default SignInPage
