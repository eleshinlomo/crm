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

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const GetAllTeamForm = ()=>{

const [message, setMessage] = useState<string | any>('')
const [subUsers, setSubUsers]= useState<null | any>(null)


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

  const getAllSubUsers = async () => {
    
    try{
    const processPayload = await fetch(`${BASE_URL}/allsubusers/`, {
        mode: 'cors',
        method: 'GET',
        headers: {"Content-Type": "application/json"},
        credentials: 'include',
    })

    const response: any = await processPayload.json()
    console.log(response)
    if(!response) {
     setMessage("Server error! No response from server")
    }else{
        if(response.message.ok){
        console.log(response.message)
        setSubUsers(response.message.data)
        // setMessage(response.message.message)
        }else{
          setMessage(response.message)
        }
}
    }
catch(error: any){
  console.log(error.message)
}

  }

  useEffect(()=>{

    getAllSubUsers()
  }, [])

  return (

    <div className='overflow-hidden flex flex-col justify-center items-center'>
     
     
     {message ?
     <div className='text-center font-extrabold py-8 px-24'>
        
        {message}
        </div>:null
     }

        <p className='font-extrabold text-2xl'>All Team Members</p>

        
        
        <div className=''>

        {subUsers ?
        <div>
        <p className='font-semibold'>
        You currently have {subUsers? subUsers.length: null} team members</p>
        {subUsers.map((teammember: any, index: any)=>
        <div key={index} className='flex flex-1 flex-wrap py-4 gap-3 px-2 border border-blue-500'>
          <p>Username: {teammember.username}</p>
          <p>Username: {teammember.email}</p>
          <p>Firstname: {teammember.firstname?teammember.firstname: "Not provided"}</p>
          <p>Added on: {teammember.createdAt}</p>
        </div>
        
        
        )}
        </div>:
        <div>
          <p>You have not added any team member</p>
        </div>
         
    
        }


</div>

    
    </div>
  )
}

export default GetAllTeamForm
