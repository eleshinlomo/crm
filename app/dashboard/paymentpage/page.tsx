'use client'
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import {Form, FormLabel, FormControl, FormField, FormItem} from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import * as z from 'zod'
import {  useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'


interface MessageProps {
  message: string;
}


const PaymentPage = () => {

  const [message, setMessage] = useState<string | null>(null); // Initialize message as null
 

  const FormSchema = z.object({

    price1: z.string().min(0),
    
  })


  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      price1: '5',
    },

})

  const isLoading = form.formState.isSubmitting

  

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
      console.log(data)

  }

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return (
    
    <div className="flex flex-col justify-center items-center
     bg-white text-black py-4 h-full w-full">

   { message ? 
  
  <div>
    {message}
    </div>
     : 
     <div>
     <div className="relative h-32 w-32">
     <Image
       src="/logos/fixupe_logo.png"
       alt="The cover of Stubborn Attachments" fill
     />
     </div>
     <div className="description flex flex-col gap-3 text-lg">
       <h3>You are upgrading your account to premium</h3>
       <p>$1 gets you 10,000 credits</p>
       <h5>$5.00</h5>
     </div>

     {/* Form */}
     <div>
            <Form {...form}>
             <form onSubmit={form.handleSubmit(onSubmit)}
             className='
             rounded-lg border w-full p-4 px-3 md:px-6 bg-blue-500
             focus-within:shadow-sm grid grid-flow-row md:grid-cols-2 gap-2
             '
             >
                
          <FormField
          control={form.control}
          name="price1"
          render={({ field }) => (
            <FormItem className="col-span-12 lg:col-span-12 my-4">
              <FormLabel>Select Credit Amount</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select credit amount"/>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="5">Price: $5</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
                

               
               <Button className='col-span-12 lg:col-span-2  w-full
                rounded-2xl' disabled={isLoading}>
                Check out
               </Button>
               
               
             </form>
            </Form>
          </div>

     </div>
}

</div>

  )     
};


export default PaymentPage;
