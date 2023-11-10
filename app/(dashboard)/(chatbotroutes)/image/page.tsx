"use client"
import {useState, useEffect} from 'react'
import * as z from 'zod'
import {Heading} from '@/components/heading'
import {  MessageSquare, PhoneCallIcon} from 'lucide-react'
import {  useForm } from 'react-hook-form'
import { formSchema } from './constants'
import {zodResolver} from '@hookform/resolvers/zod'
import {Form, FormControl, FormField, FormItem} from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import {useRouter} from 'next/navigation'
import {Empty} from '@/components/empty'
import {Loader} from '@/components/loader'
import { cn } from '@/lib/utils'
import { UserAvatar } from '@/components/user-avater'
import { BotAvatar } from '@/components/BotAvatar'
import { EmptyImage } from '@/components/emptyimage'
import {  Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'




const ImagePage = () => {
    const [messages, setMessages] = useState<Array<{role: any; content: any}>>([])
    

    const router = useRouter()
    const form = useForm <z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            payload: ""
        }
    })

    const isLoading = form.formState.isSubmitting

    

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
      
        try {
          const userMessage = {
            role: "user",
            content: values.payload,
          };
      
          const newMessages = [...messages, userMessage];
          setMessages(newMessages);
      
          const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
          const API_URL = `${BASE_URL}/fake/`;
          const res = await fetch(API_URL, {
            mode: "cors",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ payload: values.payload }),
          });
      
          if (res.ok) {
            const responseData = await res.json();
      
            if (responseData.message) {
              const botMessage = {
                role: "Bot",
                content: responseData.message, // Use the image URL directly
              };
              newMessages.push(botMessage);
              setMessages(newMessages);
            }
          }
      
          form.reset();
        } catch (error) {
          console.error("Error:", error);
        } finally {
          router.refresh();
        }
      };
      


    
  return (
    <div>

        <div className='flex'>
        <Heading
        title='Image Generator'
        description = 'Our Stunning Image Generator can get you into the image business right away.'
        icon={MessageSquare}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
         />

        

         </div>

         <div className='px-4 lg:px-8'>
          <div>
            <Form {...form}>
             <form onSubmit={form.handleSubmit(onSubmit)}
             className='
             rounded-lg border w-full p-4 px-3 md:px-6 
             focus-within:shadow-sm grid grid-cols-12 gap-2
             '
             >
                <FormField 
                name="payload"
                render={({ field })=>(
                
               <FormItem className="col-span-12 lg:col-span-10">
               <FormControl className='m-0 p-0'>
              <Input className='border-0 outline-none 
              focus=visible:ring-transparent text-black
              focus-visible:ring-0'
              disabled={isLoading}
              placeholder='Ultra real baby picture'
              {...field}
               />
               </FormControl>
               </FormItem>
               )}
               />
               <Button className='col-span-12 lg:col-span-2 w-full' disabled={isLoading}>
                Generate Image
               </Button>
               
               
             </form>
            </Form>
          </div>

          {/* Chat Messages */}
          <div className='space-y-4 mt-4'>
            {isLoading && (
                <div className='p-8 rounded-lg w-full flex items-center
                justify-center bg-muted'>
                <Loader />
                </div>
            )}
            {messages.length == 0 && !isLoading && (
                <div>
                    <EmptyImage label="No conversation started with Eleshin" />
                </div>
            )}
           <div className='flex flex-col-reverse gap-y-4'>
            {messages.map((message, index)=>(
                <div
                 key={index}
                 className={cn('p-8 w-full flex items-start gap-x-8 rounded-lg',
                 message.role == "user" ? "bg-blue border border-blue/10" :
                 "bg-muted"
                 )}
    
                 >
                    {message.role == 'user' ? <UserAvatar /> : <BotAvatar />}
                
                    <div className='flex flex-col justify-center items-center px-2'>
                    {message.content.ok?
                    (
                        <div>
                        <a href={message.content.ok} target="_blank" rel="noopener noreferrer">
                          <div className='relative w-24 h-24'>
                            <Image src={message.content.ok} alt='your result' fill />
                          </div>
                        </a>
                      </div>
                      ):
                    (<p>{message.content}</p>)
                    }
                    </div>
                </div>
            ))}
           </div>
          </div>

         </div>
    </div>
  )
}

export default ImagePage