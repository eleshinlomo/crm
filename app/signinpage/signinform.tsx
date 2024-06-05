"use client"

import {useState, useEffect} from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'
import { SpinnerOne } from '@/components/spinner'


// Auth Functions
import { emailLogin } from '@/components/auth' 

interface SignupFormProps {
  saveUsername: string,
}

const PASSWORD_RESET_URL = process.env.NEXT_PUBLIC_PASS_RESET_URL

export const SignInForm = ()=>{

const [message, setMessage] = useState<string | any>('Sign in with Email')
const [isRegistered, setIsRegistered] = useState<boolean>(false)
const [isSiginingIn, setIsSigningIn] = useState(false)

const router = useRouter()

const signingIn = (<div className='relative w-24 h-24'>
  <Image src={SpinnerOne} alt='spinner' fill/></div>)

const FormSchema = z.object({

    password: z.string().min(6, {
      message: " Password must be at least 6 characters.",
    }),

    email: z.string().min(2, {
      message: " Email must be at least 2 characters.",
    }),
    
  
  })

  

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        password: "",
        email: ""
      },

  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try{
    setIsSigningIn(true)
    setMessage('')
    const response: any = await emailLogin(data)
    if(response.ok){
      
      const {
        userid, 
        username, 
        firstname, 
        lastname, 
        sessionid,
        company,
        email,
        is_superuser
      } = response.data
      
      // Save User Info
      localStorage.setItem('username', username)
      localStorage.setItem('email', email)
      localStorage.setItem('sessionid', sessionid)
      localStorage.setItem('company', company)
      localStorage.setItem("userid", userid)
      localStorage.setItem("superuser", is_superuser)
      setIsSigningIn(false)
      router.push('/dashboard/genai/textreaderpage')
    
  }else{
    console.log(response.error)
    setMessage(response.error)
  }
}
  catch(err: any){
    console.log(err)
    setMessage("No response! Unable to fetch from server. Check internet connection")

  }finally{
    setIsSigningIn(false)
  }
    
  }

  return (

    <div className='overflow-hidden flex flex-col justify-center items-center
      w-full'>
     
     {isSiginingIn?
     <div>
      Signing in...
      </div>:null
      
     }
     
     <div className='text-center font-extrabold  px-24 py-4'>
        {message}
    </div>


    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
      className=" flex flex-col justify-center items-center px-16
       bg-gray-900 text-white   w-full mt-2"
       autoComplete = "off"
       >

        
         <div className='shadow-xl px-4 py-4 '>
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} type='text' 
                className='text-black font-semibold' autoComplete = "none"  />
              </FormControl>
              
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

{/* Password */}
<FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} type='password' 
                className='text-black font-semibold' autoComplete = "none" />
              </FormControl>
              
              <FormDescription>
                Case sensitive.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        </div>

       <div className="flex gap-2 py-8">
                <a href='/passwordrecoverypage'>
                  <p className="mt-1 text-blue-200">Forgot Password?</p>
                  </a>
                <Button type='submit' className='bg-gray-500 hover:bg-gray-500'>
                    Sign In
                    </Button>
              </div>
          
      </form>
    </Form>
    
    </div>
  )
}
