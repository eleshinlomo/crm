"use client"

import {useState, useEffect} from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

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
import { toast } from "@/components/ui/use-toast"
import { formSchema } from '@/app/(dashboard)/(chatbotroutes)/(conversation bots)/boyfriend/constants'
import { useRouter } from 'next/navigation'

// Auth Functions
import { emailLogin } from '@/components/auth' 

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const SignInForm = ()=>{

const [message, setMessage] = useState<string | any>('Sign in with Email')
const [isRegistered, setIsRegistered] = useState<boolean>(false)
const [isSiginingIn, setIsSigningIn] = useState(false)

const router = useRouter()

const signingIn = "Signing in..."

const FormSchema = z.object({

    password: z.string().min(6, {
      message: " Password must be at least 6 characters.",
    }),

    username: z.string().min(2, {
      message: " Username must be at least 2 characters.",
    }),
    
  
  })

  

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        password: "",
        username: ""
      },

  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsSigningIn(true)
    const response: any = await emailLogin(data)
    if(response.message.ok){
      console.log(response)
      const {userid, username, firstname, lastname} = response.message.data
      console.log({"userid": userid, "username": username, "firstname": firstname, "lastname": lastname})
      // Save User Info
      const saveUsername = localStorage.setItem('username', username)
      const saveUserId = localStorage.setItem("userid", userid)
      setIsSigningIn(false)
      router.push('/dashboard')
    }else{
      console.log(response.message)
      setMessage(response.message)
      setIsSigningIn(false)
    }
    
  }

  return (

    <div className='overflow-hidden flex flex-col justify-center items-center'>
     
     {isSiginingIn?
     <div>
      {signingIn}
      </div>:null
      
     }
     
     <div className='text-center font-extrabold py-8 px-24'>
        {message}
    </div>


    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
      className=" flex flex-col justify-center items-center px-16">

        

        {/* Username */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
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
                <Input placeholder="Password" {...field} type='password' />
              </FormControl>
              
              <FormDescription>
                Case sensitive.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

       <div className="flex gap-2 py-8">
                <p className="mt-1 ">Forgot Password?</p>
                <Button type='submit'>
                    Sign In
                    </Button>
              </div>
          
      </form>
    </Form>
    
    </div>
  )
}
