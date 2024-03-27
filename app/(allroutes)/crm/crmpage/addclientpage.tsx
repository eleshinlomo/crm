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


interface OnUserAdded {
   onUserAdded: () => void
}

export const AddClientPage = ()=>{

const [message, setMessage] = useState<string | any>('Add A New Client')
const [isRegistered, setIsRegistered] = useState<boolean>(false)
const [isAddingClient, setIsAddingClient] = useState<boolean>(false)
const [usersource, setUsersource] = useState<string | any>('Fixupe')
const [reloadComponent, setReloadComponent] = useState<boolean>(false)

// Router
const router = useRouter()


const FormSchema = z.object({
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),

  contact: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),

    email: z.string().min(2, {
      message: "Email must be at least 2 characters.",
    }),

    mobile: z.string().min(0, {
      message: " Password must be at least 6 characters.",
    }),

    phone: z.string().min(0, {
      message: " Username must be at least 2 characters.",
    }),

    followup: z.string().min(0, {
      message: " usersource must be at least 2 characters.",
    }),
    address: z.string().min(0, {
      message: "Email must be at least 2 characters.",
    }),
    contractrate: z.string().min(0, {
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
        followup: "",
        address: "",
        contractrate: "",
        servicefee: "servicefee",
        contractdoc: "",
      },

  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    
    try{
      setIsAddingClient(true)
    const processPayload = await fetch(`${BASE_URL}/registerclient/`, {
        mode: 'cors',
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })

    const response: any = await processPayload.json()
    if(!response) {
     setMessage("Server error! No response from server")
     setIsAddingClient(false)
    }else{
        if(response.ok === true){
        setMessage(response.data)
        setIsRegistered(true)
        setIsAddingClient(false)
        console.log(response.data)
        window.location.reload()
     
      }else{
        setMessage(response.error)
        console.log(response.error)
        setIsAddingClient(false)
      }
    }
}

catch(error: any){
  console.log(error.error)
  setMessage("No response! Unable to fetch from server. Check internet connection")
}finally{
  setIsAddingClient(false)
}

  }

  return (

    <div className='relative w-full'>
     
     
     <div className='text-center flex flex-col justify-center 
     items-center'>
      
          {isAddingClient?
          <div>
            {'Adding client...'}
          </div>:null
          }  
    </div>
     
     
     {/* Form starts */}
    <div className='  md:fixed  z-40  md:left-52
     bg-gray-600 text-white   px-8 py-2 mt-3'>
      <div className='text-center'>
    <p className='font-extrabold text-xl px-4 '>{message}</p>
      
    </div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
      className=" flex flex-col 
          w-full ">
         <div className=' grid grid-flow-row md:grid-cols-3 gap-3 
         shadow-xl px-4 py-4 font-extrabold '>


        {/* Company */}
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="Company name" {...field} 
                className='text-black font-semibold' required />
              </FormControl>
              
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* contact */}
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact(Optional)</FormLabel>
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
        

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email(Optional)</FormLabel>
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

{/* Mobile */}
<FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile number(Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Mobile number" {...field} type='text' 
                className='text-black font-semibold'
                />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

        {/* phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number(Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Phone number" {...field}
                className='text-black font-semibold'
                 />
              </FormControl>
              
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* follow up */}
        <FormField
          control={form.control}
          name="followup"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Follow up(Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Follow up" {...field}
                className='text-black font-semibold'
                 />
              </FormControl>
              
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Address */}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address(Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Address" {...field}
                className='text-black font-semibold'
                 />
              </FormControl>
              
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Contract rate */}
        <FormField
          control={form.control}
          name="contractrate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contract(Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Agreed Rate" {...field}
                className='text-black font-semibold'
                 />
              </FormControl>
              
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* contact */}
        <FormField
          control={form.control}
          name="servicefee"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Fee(Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Service Fee" {...field}
                className='text-black font-semibold'
                 />
              </FormControl>
              
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* contract */}
        <FormField
          control={form.control}
          name="contractdoc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contract document(Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Contract Document" {...field}
                className='text-black font-semibold'
                 />
              </FormControl>
              
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        </div>

        {isAddingClient?
          <div className='text-center'>
            {'Adding client...'}
          </div>:null
          }

        <Button type="submit" className='bg-black/80 hover:bg-black/80
        py-2 hover:bg-gray-500 rounded-2xl'>ADD CLIENT</Button>
      </form>
    </Form>
    </div>
    {/* End of Form */}
    
    </div>
  )
}
