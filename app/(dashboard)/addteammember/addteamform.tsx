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
import { formSchema } from '@/app/(dashboard)/(conversation bots)/boyfriend/constants'
import { useRouter } from 'next/navigation'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const AddTeamForm = ()=>{

const [message, setMessage] = useState<string | any>('Add A Team Member')
const [subUser, setSubUser]= useState<null | any>(null)


const router = useRouter()

const FormSchema = z.object({
    email: z.string().min(2, {
      message: "Email is required.",
    }),

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
        email: "",
        password: "",
        username: ""
      },

  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    
    try{
    const processPayload = await fetch(`${BASE_URL}/addteammember/`, {
        mode: 'cors',
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        credentials: 'include',
        body: JSON.stringify(data)
    })

    const response: any = await processPayload.json()
    console.log(response)
    if(!response) {
     setMessage("Server error! No response from server")
    }else{
        if(response.message.ok){
        console.log(response.message)
        setSubUser(response.message.data)
        setMessage(response.message.message)
        }else{
          setMessage(response.message)
        }
}
    }
catch(error: any){
  console.log(error.message)
}

  }

  return (

    <div className='overflow-hidden flex flex-col justify-center items-center'>
     
     
     {message ?
     <div className='text-center font-extrabold py-8 px-24'>
        
        {message}
        
    </div>:null
}


    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
      className=" flex flex-col justify-center items-center px-16">

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

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
              <FormLabel>Temp Password</FormLabel>
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

        <Button type="submit" className="">Add Team Member</Button>
      </form>
    </Form>
    
    </div>
  )
}

export default AddTeamForm
