"use client"
import {useState, useEffect} from 'react'
import * as z from 'zod'
import {Heading} from '@/components/heading'
import {  MessageSquare, SmilePlusIcon } from 'lucide-react'
import {  useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'


interface EmailSenderProps {
    BASE_URL: string,

}

const BASE_URL: any = process.env.NEXT_PUBLIC_BASE_URL;

const EmailSender = () => {
    
    const [message, setMessage] = useState<string | any>('')
    const [company, setCompany] = useState<string | null>(localStorage.getItem('company'))
    const [username, setUserName] = useState<string | null>(localStorage.getItem('username'))
    const [currentCount, setCurrentCount] = useState<number>(0)
    const [emailResponse, setEmailResponse] = useState<Array<any | null>>([])
    const [isSending, setIsSending] = useState<boolean>(false)
    
    const [senderEmail, setSenderEmail] = useState<string | any>(localStorage.getItem('email') || null)
    const [emailBody, setEmailBody] = useState<string>('')
    const [email, setEmail] = useState('')
    const [recieverEmail, setRecieverEmail] = useState<string>(''|| email)
    const [emailSubject, setEmailSubject] = useState<string>('')
    
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
          message: " Please enter email boy.",
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
            email_body: "",
            email_subject: "",
            receiver_email: "",
            
          },
    
      })
    
      const sendEmail = async (data: z.infer<typeof FormSchema>) => {
        // Access the form data from the useForm hook
        const { receiver_email, email_subject, email_body } = data;
        
    
       
    
        const payload = {
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
                setMessage(data.message);
                getCurrentCount()
                form.reset()
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

          const counter = data.data
           setCurrentCount(counter)
          
          
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


useEffect(()=>{
  getCurrentCount()
}, [currentCount])

  return (

    <div className='bg-black text-white flex flex-col justify-center'>
     
     
     <p className="text-center font-extrabold text-2xl  py-8 px-4">
        EMAIL SENDER</p>
        
        <div className=''>
    
        <Heading
        title='Automated Email Tool'
        description = 'Our AI can automatically follow up with emails and manage your clients in the CRM'
        icon={MessageSquare}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
         />

         <div className='px-4 lg:px-8 md:flex  justify-between w-full'>

          {/* Text on left */}
          <div className='md:w-1/2'>
           {/* Announcements */}
           <div className='flex gap-2 text-sm md:text-md'>
            <p className='text-blue-500 font-extrabold '>
              <span className=''>MAX DAILY EMAIL:</span> 30</p>
            <div className='flex gap-1'>
              <p className='font-extrabold'>TOTAL NO. OF EMAIL SENT TODAY:
            </p>
            <p className='text-blue-500 font-extrabold text-md'>
            {currentCount}
            </p>
            
            </div>

            </div>

            <p className='py-1'>
              <span className='text-red-600 font-extrabold mr-2'>AI ALERT!</span> 
              You have 2 meetings today. Client xyz is for 2pm and ...</p>
              <p>Last follow up message: ...</p>
      
      {/*Email List */}
          <div>
          <p className='my-4 text-center md:text-start '> 
          <span className='bg-blue-800 text-white rounded-2xl py-2 px-4'>
            Client Email Lists</span></p>
          <div className='flex gap-2 mt-3 '>
            <Button size='sm' onClick={getBulkEmail}>
              Leads
            </Button>
            <Button size='sm'>
              Contacted
            </Button>
            <Button size='sm'>
              Signed
            </Button>
            <Button size='sm'>
              Existing
            </Button>
          </div>
          </div>

          </div>
  
          

           

           {/* Form */}
           <div className='md:w-1/2'>
          
            <div className='py-2'>
                     
                     <Form {...form}>
                       <form onSubmit={form.handleSubmit(sendEmail)}
                       className='
                        border  px-3 md:px-6 bg-gradient-to-tr from-black
                        via-slate-800 to-black text-white  
                       focus-within:shadow-sm 
                        flex flex-col gap-2 mt-2
                       '
                       >
        <div className='flex gap-2 justify-between font-extrabold py-2'>
        <p className=''>From:</p>
        <p className=' text-red-400 text-center hidden  md:flex'>
            {message}
          </p>
          <p>{company?.toUpperCase()}</p>
        </div>

        {/* Mobile display only */}
        <p className=' text-red-400 text-center md:hidden'>
         {message}
        </p>
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
                          {isSending? 'Sending mail...': 'SEND EMAIL'}
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

export default EmailSender