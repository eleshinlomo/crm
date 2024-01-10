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
import { LoginForm } from "./loginform"
import { XIcon } from "lucide-react"
import Image from 'next/image'


// URLs
const ALLAUTH_BASE_URL = process.env.NEXT_PUBLIC_ALLAUTH_BASE_URL
  
  export const LoginPage = ()=>{
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="default" className="bg-blue-800">Login</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="flex flex-col justify-center items-center">
        <AlertDialogCancel className="text-end bg-blue-500 text-white ">
            <XIcon />
        </AlertDialogCancel>
          <AlertDialogHeader>
            <div>
            
            <AlertDialogTitle className="text-blue-500">
                Login to Fixupe</AlertDialogTitle>
            </div>
          </AlertDialogHeader>
           
           {/* Goggle Button */}
           <Button  className='border border-blue-300
            bg-white text-black '>
           <Link href={`${ALLAUTH_BASE_URL}/accounts/login/`} 
           className="flex flex-1 justify-between">
            <div className="relative w-8 h-6">
            <Image src='/logos/google_logo.png' alt='google logo' fill />
            </div>
           Sign in with Google
            </Link>
          </Button>

          {/* Linkedin Button */}

          <Button  className='border border-blue-300
            bg-white text-black '>
           <Link href={`${ALLAUTH_BASE_URL}/accounts/login/`} 
           className="flex flex-1 justify-between">
            <div className="relative w-8 h-6">
            <Image src='/logos/linkedin_logo.png' alt='google logo' fill />
            </div>
           Sign in with Linkedin
            </Link>
          </Button>
        
          {/* Email */}
          <p  className='font-extrabold '>
           Sign in with Email
          </p>
          <LoginForm />
          
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  