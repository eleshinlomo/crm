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
import { toast } from "@/components/ui/use-toast"
import { formSchema } from '@/app/(dashboard)/(dashroutes)/(conversation bots)/boyfriend/constants'
import { useRouter } from 'next/navigation'
import { SpinnerOne } from '@/components/spinner'

// Auth Functions
import { emailLogin } from '@/components/auth' 

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const IdeaForm = ()=>{

const [message, setMessage] = useState<string | any>('')
const [isRegistered, setIsRegistered] = useState<boolean>(false)
const [isCreating, setIsCreating] = useState(false)

const router = useRouter()

const signingIn = (<div className='relative w-24 h-24'>
  <Image src={SpinnerOne} alt='spinner' fill/></div>)

const FormSchema = z.object({

    idea: z.string().min(0, {
      message: " Idea name must be at least 1 characters.",
    }),

    
  
  })

  

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        idea: "",
        
      },

  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try{
    setIsCreating(true)
    const response: any = await fetch(`${BASE_URL}/idea/`, {
      method: 'GET',
      mode: 'cors',

    })
    if(response.message.ok){
      console.log(response)
      const {
        userid, 
        username, 
        firstname, 
        lastname, 
        sessionid,
        credits,
        company} = response.message.data
      
      // Save User Info
      const saveUsername = localStorage.setItem('username', username)
      const saveSessionId = localStorage.setItem('sessionid', sessionid)
      const saveCredits = localStorage.setItem('credits', credits)
      const saveCompany = localStorage.setItem('company', company)
      const saveUserId = localStorage.setItem("userid", userid)
      setIsCreating(false)
      router.push('/dashboard')
    
  }else{
    console.log(response.message.error)
    setMessage(response.message.error)
  }
}
  catch(err: any){
    console.log(err.message.error)
    setMessage(err.error)

  }finally{
    setIsCreating(false)
  }
    
  }

  return (

    <div className='overflow-hidden flex flex-col justify-center items-center'>
     
     {isCreating?
     <div>
      {signingIn}
      </div>:null
      
     }
     
     <div className='text-center font-extrabold  px-24'>
        {message}

        <p className='text-blue-800'>Keep your idea name short as this will be added to your Idea Validation url.</p>
    </div>
     

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
      className=" text-center flex flex-col justify-center items-center px-16">

        

        {/* Idea */}
        <FormField
          control={form.control}
          name="idea"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-extrabold'>IDEA NAME</FormLabel>
              <FormControl>
                <Input placeholder="Idea Name" {...field} type='text' className='text-black text-center' required />
              </FormControl>
              
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

       <div className="flex gap-2 py-8">
                
                <Button type='submit' className='bg-blue-700 hover:bg-blue-700'>
                    Create Idea Page
                    </Button>
              </div>
          
      </form>
    </Form>
    
    </div>
  )
}
