"use client"
import {useState, useEffect, ReactElement} from 'react'
import * as z from 'zod'
import {Heading} from '@/components/heading'
import {  MessageSquare, SmilePlusIcon } from 'lucide-react'
import {  useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'


interface EmailSenderProps {
    BASE_URL: string,

}

const BASE_URL: any = process.env.NEXT_PUBLIC_BASE_URL;

const emailBodyContent = <div>
     
        Hi Rachel,
        Please find attached invoice for the well completions 
        serices rendered at RIG AR504 between January 1st, 2024 to May 05, 2024.
     

     <p>Thank you for your business</p>

     <p>Regards,
        Malik
     </p>
    </div>

const InvoiceMailer = () => {
    
    const [message, setMessage] = useState<string | any>('')
    const [company, setCompany] = useState<string | null>(localStorage.getItem('company'))
    const [username, setUserName] = useState<string | null>(localStorage.getItem('username'))
    const [currentCount, setCurrentCount] = useState<number>(0)
    const [emailResponse, setEmailResponse] = useState<Array<any | null>>([])
    const [isSending, setIsSending] = useState<boolean>(false)
    
    const [senderEmail, setSenderEmail] = useState<string | any>(localStorage.getItem('email') || null)
    const [emailBody, setEmailBody] = useState<string>('Please find attached invoice')
    const [email, setEmail] = useState('')
    const [recieverEmail, setRecieverEmail] = useState<string>('client@client.com')
    const [emailSubject, setEmailSubject] = useState<string>('Invoice for new completion')

    
   
    
    
    const getBulkEmail = ()=>{
      let emailList: string[] = []
      const userEmail = 'seun.olatunji2@gmail.com'
      emailList.push(userEmail)
      emailList.forEach(email => {
      setEmail(userEmail)
    });
  }
    
   

    const FormSchema = z.object({

        email_body: z.string().min(0, {
          message: " Please enter email.",
        }),

        email_subject: z.string().min(0, {
            message: " Please enter email boy.",
          }),

          receiver_email: z.string().min(0, {
            message: " Please enter email boy.",
          }),
        
      })
    
        const form = useForm<z.infer<typeof FormSchema>>({
          resolver: zodResolver(FormSchema),
          defaultValues: {
            email_body: emailBody,
            email_subject: emailSubject,
            receiver_email: recieverEmail,
            
          },
    
      })
    
      const sendEmail = async (data: z.infer<typeof FormSchema>) => {
        // Access the form data from the useForm hook
        const { receiver_email, email_subject, email_body } = data;
        
        let payload = {
            receiver_email,
            email_subject,       
            email_body
        };
    
        try {
          setIsSending(true)
          const session_id: any = localStorage.getItem('sessionid')
            const response: any = await fetch(`${BASE_URL}/emailsender/`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json',
                   "sessionid": session_id
                },
                body: JSON.stringify(payload)
            });
    
            if (!response) throw new Error('No response from server');
            const data: any = await response.json();
            if (data.ok) {
                console.log(data);
                setIsSending(false)
                form.reset()
                setMessage(data.message);
                const newCount = await getCurrentCount()
                if(newCount){
                    setCurrentCount(newCount)
                    setMessage(data.message);
                }
                

                
                
                

            } else {
                console.log(data.error);
                setIsSending(false)
                setMessage(data.error);
            }
        } catch (err: any) {
            console.log(err);
            setMessage("No response! Unable to fetch from server. Check internet connection");
        } finally {
            setIsSending(false)
        }
    };

    
    // Get Current Count
    const getCurrentCount = async ()=>{
    try {
      const session_id: any = localStorage.getItem('sessionid')
      const response: any = await fetch(`${BASE_URL}/getcurrentcount/`, {
          method: 'GET',
          mode: 'cors',
          headers: {
          'Content-Type': 'application/json',
           "sessionid": session_id
        },
  
      });

      if (!response) throw new Error('No response from server');
      const data: any = await response.json();
      setMessage('')
      if (data.ok) {
          const count = data.data
          return count

      } else {
          console.log(data.error);
          setMessage(data.error);
      }
  } catch (err: any) {
      console.log(err);
      setMessage("No response! Unable to fetch from server. Check internet connection");
  } finally {
      
  }
};

const getCountHandler = async ()=>{
    const count = await getCurrentCount()
    if (count){
    setCurrentCount(count)
    }
}

useEffect(()=>{
   getCountHandler()
}, [ ])

  return (

    <div className='bg-black text-white flex flex-col justify-center pb-8'>
     
     
     <p className="text-center font-extrabold text-2xl  py-8 px-4">
        INVOICE SENDER</p>
        
        <div className=''>
    
        <Heading
        title='Automated Invoice Tool'
        description = 'Client info has been automatically captured from the CRM'
        icon={MessageSquare}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
         />

         <div className='px-4 lg:px-8 md:flex  justify-between w-full'>

          {/* Text on left */}
          <div className='md:w-1/2'>
          <p>
            You are sending invoice to: ....
          </p>

          <p>
            For the service: ....
          </p>

          <p>
            Date: ....
          </p>

          <p>
            Amount of: ....
          </p>

          <p className='py-2 font-extrabold text-xl'>Preview your invoice document below</p>
          
          <div className='relative h-32 w-32'>
          <Image src='' alt='' fill />
          </div>
          </div>
  
          

           

           {/* Email Form */}
           <div className='md:w-1/2'>
           {/* <p className=' text-red-400 text-center   md:flex my-2'>
            {message}
          </p> */}
            <div className='py-2'>
                     
                     <Form {...form}>
                       <form onSubmit={form.handleSubmit(sendEmail)}
                       className='
                        border  px-3 md:px-6 bg-gradient-to-tr from-black
                        via-slate-800 to-black text-white  
                       focus-within:shadow-sm 
                        flex flex-col gap-2 
                       '
                       >
        <div className='flex gap-2 justify-between font-extrabold py-2'>
        <p className=''>From:</p>
         {/* Mobile display only */}
         <p className=' text-red-400 text-center'>
         {message}
        </p>
        <p className=' text-red-400 text-center hidden  md:flex'>
            {email}
          </p>
          <p>{company?.toUpperCase()}</p>
        </div>

       
        <Input placeholder='From' value={senderEmail} className='text-black font-extrabold' />
        

        {/* Email Subject */}
          <FormField
          control={form.control}
          name="email_subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-extrabold'>Subject:</FormLabel>
              <FormControl>
                <Input placeholder="Subject" {...field} type='text' 
                className='text-black border border-black font-extrabold 
                focus=visible:ring-transparent 
                focus-visible:ring-0' autoComplete='none' />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Receiever Email */}
        <FormField
          control={form.control}
          name="receiver_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-extrabold'>To:</FormLabel>
              <FormControl>
                <Input placeholder="Receiver Email" {...field} type='text' 
                className='text-black font-extrabold' autoComplete='none' />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />

         {/* Email Body */}
        <FormField 
        name="email_body"
        render={({ field })=>(
               
        <FormItem className="col-span-12 lg:col-span-10">
        <FormControl className='M-0 P-0'>
        <Textarea className='border border-black outline-none  
        text-md text-black
        focus=visible:ring-transparent h-44
        focus-visible:ring-0' 
                        //    disabled={isLoading}
                           {...field}
                           placeholder="Write your text here"
                         />
                         </FormControl>
                         </FormItem>
                         )}
                         />

                         
                         <Button type='submit' className='col-span-12 lg:col-span-2 
                         w-full rounded-2xl my-2'
                        //  disabled={isLoading}
                         >
                          {isSending? 'Sending invoice...': 'SEND INVOICE'}
                         </Button>
                         
                       </form>
                      </Form>
            </div>
            




          </div>
          </div>
            

             
                      
         </div>
    </div>
  )
}

export default InvoiceMailer