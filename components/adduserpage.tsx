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
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { SpinnerOne } from '@/components/spinner'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL



const registering = (<div className='relative w-24 h-24'>
  <Image src={SpinnerOne} alt='spinner' fill/></div>)

export const AddUserPage = ()=>{

const [message, setMessage] = useState<string | any>('Sign up with Email')
const [isRegistered, setIsRegistered] = useState<boolean>(false)
const [isRegistering, setIsRegistering] = useState<boolean>(false)
const [appname, setAppname] = useState<string | any>('Fixupe')

// Router
const router = useRouter()


const FormSchema = z.object({
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),

    email: z.string().min(2, {
      message: "Email must be at least 2 characters.",
    }),

    password: z.string().min(6, {
      message: " Password must be at least 6 characters.",
    }),

    username: z.string().min(2, {
      message: " Username must be at least 2 characters.",
    }),

    appname: z.string().min(2, {
      message: " Username must be at least 2 characters.",
    }),

    
  
  })

  

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        company: "",
        email: "",
        password: "",
        appname: appname,
        username: ""
      },

  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    
    try{
      setIsRegistering(true)
    const processPayload = await fetch(`${BASE_URL}/registeruser/`, {
        mode: 'cors',
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })

    const response: any = await processPayload.json()
    if(!response) {
     setMessage("Server error! No response from server")
     setIsRegistering(false)
    }else{
        if(response.message.ok === true){
        setMessage(response.message.data)
        setIsRegistered(true)
        setIsRegistering(false)
        console.log(response.message)
        window.location.reload()
     
      }else{
        setMessage(response.message.error)
        console.log(response.message.error)
        setIsRegistering(false)
      }
    }
}

catch(error: any){
  console.log(error.message)
  setMessage("No response! Unable to fetch from server. Check internet connection")
}finally{
  setIsRegistering(false)
}

  }

  return (

    <div className='overflow-hidden flex flex-col justify-center
      items-center w-full'>
     
     
     <div className='text-center  pt-4 flex flex-col justify-center 
     items-center '>
        <p className='font-extrabold text-xl px-4 '>{message}</p>
        
          {isRegistering?
          <div>
            {registering}
          </div>:null
          }
        
    </div>
     

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
      className=" flex flex-col justify-center items-center 
        text-black mt-4 w-full ">


         <div className='grid grid-flow-row md:grid-cols-2 gap-3 
         shadow-xl px-4 py-4 '>
        {/* Company */}
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="Company name" {...field} 
                className='text-black font-semibold' />
              </FormControl>
              
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field}
                className='text-black font-semibold'
                 />
              </FormControl>
              
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* App Name */}
        <input type='hidden' name='appname' value={appname} />

        {/* Username */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field}
                className='text-black font-semibold'
                 />
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
                className='text-black font-semibold'
                />
              </FormControl>
              
              <FormDescription className='text-white'>
                Case sensitive.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        </div>

        <Button type="submit" className='bg-gray-500
        my-3 hover:bg-gray-500'>Add User</Button>
      </form>
    </Form>
    
    </div>
  )
}
