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
import { SignUpForm } from "./signupform"
import { ArrowLeftSquareIcon, XIcon } from "lucide-react"
import Image from 'next/image'


// URLs
const ALLAUTH_BASE_URL = process.env.NEXT_PUBLIC_ALLAUTH_BASE_URL

const SignUpPage = ()=>{
  return (
   <div className="flex flex-col justify-center items-center
    gap-3 pt-12 bg-gray-700 text-white">
         
          <div className="text-center font-extrabold">
              <div className="">
              <Link href='/' className="flex flex-1 text-3xl">
              <ArrowLeftSquareIcon className="mt-5  text-3xl" />
              <p className="  py-4">Fixupe</p>
              </Link>
              </div>
              
              
              <div className="flex gap-2 py-8">
                <p className="mt-1 ">Already Registered?</p>
                <Button size='sm' className='bg-gray-900 hover:bg-gray-900'>
                  <Link href='/signinpage'>Sign In</Link>
                  </Button>
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
         Sign up with Google
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
         Sign up with Linkedin
          </Link>
        </Button> */}
      
        {/* Email */}
        <SignUpForm />

        <div className="relative h-72 w-72">
        <Image src='/images/girl10.png' alt='' fill />
        </div>
        
      </div>
  )
}

export default SignUpPage
