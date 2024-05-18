"use client"

import {useState, useEffect} from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { SpinnerOne } from '@/components/spinner'
import { addClient } from './clientfunctions'
import ClientForm from './clientform'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const registering = (<div className=' w-24 h-24'>
  <Image src={SpinnerOne} alt='spinner' fill/></div>)



export const AddClientPage = ()=>{

const [message, setMessage] = useState<string | any>('Add A New Client')
const [isRegistered, setIsRegistered] = useState<boolean>(false)
const [isAddingClient, setIsAddingClient] = useState<boolean>(false)
const [clientFetched, setClientFetched] = useState<boolean>(false)
const [formIsVisible, setFormIsVisible] = useState<boolean>(false)
const [usersource, setUsersource] = useState<string | any>('Fixupe')
const [reloadComponent, setReloadComponent] = useState<boolean>(false)
const [count, setCount] = useState<number>(0)

// Router
const router = useRouter()


const FormSchema = z.object({
  company: z.string().min(0, {
    message: "Company name must be at least 2 characters.",
  }),

  contact: z.string().min(0, {
    message: "Email must be at least 2 characters.",
  }),

    email: z.string().min(0, {
      message: "Email must be at least 2 characters.",
    }),

    mobile: z.string().min(0, {
      message: " Mobile must be at least 6 characters.",
    }),

    phone: z.string().min(0, {
      message: " Phone must be at least 2 characters.",
    }),

    followup: z.string().min(0, {
      message: " usersource must be at least 2 characters.",
    }),
    address: z.string().min(0, {
      message: "Email must be at least 2 characters.",
    }),

    servicefee: z.string().min(0, {
      message: "Email must be at least 2 characters.",
    }),
    contractdoc: z.string().min(0, {
      message: "Email must be at least 2 characters.",
    }),

    
  
  })

  

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        company: "",
        contact: "",
        mobile: "",
        phone: "",
        followup: "New client added",
        address: "",
        servicefee: "10",
        contractdoc: "",
      },

  })


  

  const onSubmit = async (payload: z.infer<typeof FormSchema>) => {
    
    try{
      setIsAddingClient(true)
      const response = await addClient(payload)
      if (response.ok === true){
        setMessage('')
        setIsRegistered(true)
        setIsAddingClient(false)
        console.log(response)
        setClientFetched(true)
        setMessage(response.data)
        
      }else{
        response.error
      }
        
    }

catch(error: any){
  console.log(error.error)
}finally{
  setIsAddingClient(false)
  
}
  }

  
useEffect(()=>{
}, [router, clientFetched])

const handleFormVisibility = () =>{
  setFormIsVisible(!formIsVisible)
}
 

  return (

    <div className='relative'>
     
     
     <div className='text-center flex flex-col justify-center 
     items-center'>
      
          {isAddingClient?
          <div>
            {'Adding client...'}
          </div>:null
          }  
    </div>
     
 
     {/* Form starts */}
    
  
  
    <div>
     <ClientForm />
    </div>
        
    {/* End of Visible Form */}
    
    </div>
  )
}
