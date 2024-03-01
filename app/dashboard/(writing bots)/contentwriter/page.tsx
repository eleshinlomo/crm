"use client"
import {useState, useEffect} from 'react'
import * as z from 'zod'
import {Heading} from '@/components/heading'
import {  MessageSquare, SmilePlusIcon } from 'lucide-react'
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
import Title from '@/components/(audiotospeech)/Title'
import { textToVoice } from '@/components/texttovoice'
import { SpinnerOne } from '@/components/spinner'
import Image from 'next/image'
import { creditHandler } from '@/components/credithandler'
import { Textarea } from '@/components/ui/textarea'





const TextChatPage = () => {
    const [messages, setMessages] = useState<Array<{role: string; content: string, audio: null | any}>>([])
    const [message, setMessage] = useState<string | any>('')
    const [textMessage, setTextMessage] = useState<null | any>(null)
    const [audioUrl, setAudioURL] = useState<null | any>(null)
    const [editText, setEditText] = useState<string | any>('')
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [isConvertingTextToAudio, setIsConvertingTextToAudio] = useState<boolean>(false)
    const [updated, setUpdated] = useState<boolean>(false)
    
   
    const router = useRouter()
    const form = useForm <z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            payload: ""
        }
    })

    const isLoading = form.formState.isSubmitting

    const loading = (<div className='relative h-16 w-16'>
<Image src={SpinnerOne} alt='loader' fill/></div>)


    const onSubmit = async (values: z.infer<typeof formSchema>)=>{
        console.log(values)
        const sessionid = localStorage.getItem('sessionid')
        console.log({"sessionid chatbot": sessionid})
        if(!sessionid) return
        try {
         
         const userMessage = {
            role: "user",
            content: values.payload,
            audio: null
         }

        
         const newMessages = [...messages, userMessage]
         setMessages(newMessages)
         const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
         const API_URL = `${BASE_URL}/general/`
         const res = await fetch(API_URL, {
            mode: 'cors',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "sessionid": sessionid
            },
            body: JSON.stringify({payload: values.payload})
            
         })
           
         
           if (!res) throw new Error("No response from server")
           const data = await  res.json()
         
            if(data.message.ok) {
            setMessage('')
            setTextMessage(data.message.data)
            setEditText(data.message.data)
            await creditHandler()
            
            // Continue with Chatbot
            const botMessage = {
                role: "bot",
                content: "",
                audio: null
            }

            
            botMessage.content = data.message.data
            newMessages.push(botMessage)
            setMessages(newMessages)
            form.reset()
        }else{
            console.log(data.message.error)
            setMessage(data.message.error)
            
            }
             
            
         }
        
        catch(error: any) {
            console.log(error)
        } finally {
            return
        }
    }


    // Update TextMessage
    const updateTextMessage = (e: any)=>{
        setUpdated(false)
        e.preventDefault()
        setTextMessage(editText)
        const botResponse = {
            role: 'bot',
            content: textMessage,
            audio: ''
        }
        setMessages([...messages, botResponse])
        setUpdated(true)
    }
    


  return (
    <div className='flex flex-col justify-center'>
     

     <p className="text-center font-extrabold text-2xl text-white py-8 px-4">
        CONTENT WRITER</p>
        
        <div className='bg-white text-black'>
    
        <Heading
        title='Create content faster than competition'
        description = 'Content production on steroid'
        icon={MessageSquare}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
         />

         <div className='px-4 lg:px-8'>
          <div>
           

           {/* Message Form */}
            <div>
            {isEditing ?

// Editing Mode
<div className='flex flex-col justify-center items-center'>
<div className='text-center'>
<Button className='my-4 rounded-2xl' onClick={()=>setIsEditing(false)}>
    Close Editing</Button>
    <p>{updated? 'Updated': null}</p>
</div>
<Form {...form}>
<form onSubmit={(e)=>updateTextMessage(e)}
className='
rounded-lg border w-full p-4 px-3 md:px-6 
focus-within:shadow-sm grid grid-cols-12 gap-2
'
>
   <FormField 
   name="textMessage"
   render={()=>(
   
  <FormItem className="col-span-12 lg:col-span-10">
  <FormControl className='M-0 P-0'>
 <Textarea className='border-0 outline-none  text-md
 focus=visible:ring-transparent h-44
 focus-visible:ring-0'
 disabled={isLoading}
 value={editText}
 onChange={(e)=>setEditText(e.target.value)}
  />
  </FormControl>
  </FormItem>
  )}
  />
  <Button className='col-span-12 lg:col-span-2 w-full rounded-2xl' disabled={isLoading}>
   Update Text
  </Button>
</form>
</Form>
</div>
            :
            <div>

           {/* Writing Mode */}

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
             <FormControl className='M-0 P-0'>
            <Input className='border border-black 
            focus=visible:ring-transparent
            focus-visible:ring-0 '
            disabled={isLoading}
            placeholder="Write an email to all employees about TGIF"
            {...field}
             />
             </FormControl>
             </FormItem>
             )}
             />
             <Button className='col-span-12 lg:col-span-2 w-full rounded-2xl' disabled={isLoading}>
              GO
             </Button>
           </form>
          </Form>
          </div>
              }
              </div>
          </div>
           
           {/* Error Message */}
          <div className='text-center py-2 px-8 text-red-500 font-extrabold'>
            {message}
          </div>

          {/* Chat Messages */}
          <div className='py-4 mt-4'>
            {isLoading && (
                <div className='p-8 rounded-lg w-full flex items-center
                justify-center bg-muted'>
                <Loader />
                </div>
            )}
            {messages.length == 0 && !isLoading && (
                <div>
                    <Empty label="No conversation started with Teema" />
                </div>
            )}
           <div className='flex  w-full
           flex-col-reverse items-start  gap-4 '>
            {messages.map((message: any, index)=>(
                <div
                 key={index}
                 className={cn('py-8 flex flex-col w-full flex-1 px-8 rounded-lg',
                 message.role == "user" ? "bg-blue border border-blue/10" :
                 "bg-muted"
                 )}
    
                 >

                 

                
                {/* Avatars and header buttons */}
                {message.role == 'user' ? <UserAvatar /> : 
                <div>
                    {isEditing ?
                    <p className='text-blue-500'>Editing mode...</p>:null
                    }
                  <div className='flex md:flex-row justify-center'>
                    
                    <div className={`w-full grid grid-flow-row md:grid-cols-${message.audio? 4 : 3} gap-1`}>
                
               
                 
                {/* Edit Buttons */}
                <Button  
                className='mt-2 rounded-2xl'
                onClick={()=>setIsEditing(true)}
                >
                    
                    Edit Text
                </Button>

                <Button
                className='mt-2 rounded-2xl '>
                    
                    Use Text In Creator
                </Button>

                </div>
                </div>
                
                </div>
                }

                {/* Is Converting Text To Voice Blob */}
                <div className=' flex flex-col justify-center items-center'>
                {isConvertingTextToAudio ?
                <div>
                {loading}
                </div>:null
                }
                </div>

             {/* Audio Blob */}
            
                <div className='flex justify-center items-center'>
                {/* Blob Player */}
                {message.audio?
                
                <div>
                <audio
                    src={message.audio}
                    className="appearance-none"
                    controls     
                  />
                  </div>:null
                }
                </div>
                
                
                {/* Bot and User Messages */}
                
                 {message.role === 'user' ? 
                

                //   User Prompt
                 <p className=' text-md font-semibold'>
                    {message.content}
                </p> :
                // Bot response
                <div className=' font-semibold  '>
                    <div>
                
                {/* Bot Message */}

                {
                <div>
                <p className='text-md py-4'>
                    {textMessage}
                </p>
                
          </div>
                
                }

                
                </div>
                
                </div>
                 }
                 
                 
                </div>
            ))}
           </div>
          </div>

          </div>

         </div>
    </div>
  )
}

export default TextChatPage