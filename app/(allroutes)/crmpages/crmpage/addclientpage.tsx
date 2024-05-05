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
import RefreshComponent  from '@/components/pagereferesher'


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL



const registering = (<div className=' w-24 h-24'>
  <Image src={SpinnerOne} alt='spinner' fill/></div>)


interface AddClientProps {
   count: number
}

export const AddClientPage = ()=>{

const [message, setMessage] = useState<string | any>('Add A New Client')
const [isRegistered, setIsRegistered] = useState<boolean>(false)
const [isAddingClient, setIsAddingClient] = useState<boolean>(false)
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


  

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    
    try{
      setIsAddingClient(true)
      const sessionid: any = localStorage.getItem('sessionid')
    const processPayload = await fetch(`${BASE_URL}/registerclient/`, {
        mode: 'cors',
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "sessionid": sessionid
        },
        body: JSON.stringify(data)
    })

    const response: any = await processPayload.json()
    if(!response) {
     setMessage("Server error! No response from server")
     setIsAddingClient(false)
    }else{
        if(response.ok === true){
        setMessage('')
        setIsRegistered(true)
        setIsAddingClient(false)
        console.log(response.data)
        setMessage(response.data)
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

    <div className=''>
     
     
     <div className='text-center flex flex-col justify-center 
     items-center'>
      
          {isAddingClient?
          <div>
            {'Adding client...'}
          </div>:null
          }  
    </div>
     
     
     {/* Form starts */}
    <div className=' bg-gradient-to-br
     from-blue-900 via-black to-gray-600 text-white   
      flex flex-col justify-center items-center'>
      
    <p className='text-center font-extrabold text-xl 
    px-4 py-4 text-white'>{message}</p>
      
  
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
      className=""
          autoComplete='off'
          >
         <div className='w-full grid grid-flow-row md:grid-cols-3 gap-3 
          px-4 py-1 font-extrabold '>


        {/* Company */}
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="Company name" {...field} 
                className='text-black font-semibold' autoComplete='none' required />
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
                <Input placeholder="Company's contact person" {...field}
                className='text-black font-semibold' autoComplete='none'
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} type='email'
                className='text-black font-semibold' autoComplete='none'
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
              <FormLabel>Mobile(Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Mobile number" {...field} type='text' 
                className='text-black font-semibold' autoComplete='none'
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
              <FormLabel>Phone(Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Phone number" {...field}
                className='text-black font-semibold' autoComplete='none'
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
                className='text-black font-semibold' autoComplete='none'
                 />
              </FormControl>
              
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Service Fee */}
        <FormField
          control={form.control}
          name="servicefee"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Fee</FormLabel>
              <FormControl>
                <Input placeholder="Service Fee" {...field}
                className='text-black font-semibold' autoComplete='none'
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
                className='text-black font-semibold' autoComplete='none'
                 />
              </FormControl>
              
              <FormDescription>
                
              </FormDescription>
              <FormMessage />
            </FormItem>

            
          )}
        />
         
         
        {/* Doc */}
        <FormField
          control={form.control}
          name="contractdoc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contract(Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Follow up" {...field} type='file'
                className='text-black font-semibold' autoComplete='none'
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
       
       <div className='flex justify-center items-center'>
       <Button type="submit" className='bg-blue-700 hover:bg-blue-700 mb-2
        py-2  rounded-2xl shadow-2xl '>ADD CLIENT</Button>
        </div>
        
        
      </form>
    </Form>
    </div>
    {/* End of Form */}
    
    </div>
  )
}
