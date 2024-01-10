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


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const LoginForm = ()=>{

const [message, setMessage] = useState<string | any>('')

const FormSchema = z.object({
    email: z.string().min(2, {
      message: "Email must be at least 2 characters.",
    }),
    
  
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    
    try{
    const processPayload = await fetch(`${BASE_URL}/registeruser/`, {
        mode: 'cors',
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })

    const response: any = await processPayload.json()
    if(!response) {
     setMessage("Server error! No response from server")
    }else{
        console.log(response)
    }
}

catch(error: any){
  console.log(error.message)
}

  }

  return (

    <div>
     
     <div className='text-center text-blue-900 font-extrabold'>
        {message}
    </div>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
      className="w-2/3 space-y-6 flex flex-col justify-center items-center">
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
                Case sensitive.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-blue-500">Submit</Button>
      </form>
    </Form>
    
    </div>
  )
}
