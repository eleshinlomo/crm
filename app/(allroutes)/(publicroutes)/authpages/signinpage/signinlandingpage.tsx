import {useState, useEffect} from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"
import { getGoogleAccessToken } from "@/components/auth"
import { googleAuthCodeUrl } from '@/components/auth' 
import { useSearchParams } from "next/navigation"
import { AuthTokenProp } from '@/components/auth'
import GoogleSignInButton from './googlesigninbtn'

const SigninLandingpage = () => {
  

  return (
    <div className="">
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' size='lg'
        className=" text-white bg-blue-500 hover:bg-blue-500 rounded-2xl w-full py-4 px-12" >Sign in</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-blue-500 text-white text-center">
        <DialogHeader>
          <DialogTitle className='text-center'>Sign in</DialogTitle>
          <DialogDescription className='text-center'>
            How would you like to sign in?
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col justify-center items-center">
          {/* Google Button */}
         <GoogleSignInButton />

         
          
          <Button className="border border-blue-500 rounded-2xl mb-2 mt-4   bg-white hover:bg-white text-black text-md" asChild>
          <Link href='/authpages/signinpage' >
            Sign in with Email
            </Link>
          </Button>
         
          <Button className="border border-blue-500 rounded-2xl mb-2 mt-4   bg-white hover:bg-white text-black text-md" asChild>
          <Link href='/authpages/signuppage' >
            Sign up with email
            </Link>
          </Button>
        </div>
       <DialogFooter>
       </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default SigninLandingpage