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





const TextChatPage = () => {
    const [messages, setMessages] = useState<Array<{role: string; content: string, audio: null | any}>>([])
    const [textMessage, setTextMessage] = useState<null | any>(null)
    const [audioUrl, setAudioURL] = useState<null | any>(null)
    const [editText, setEditText] = useState<string | any>('')
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [isConvertingTextToAudio, setIsConvertingTextToAudio] = useState<boolean>(false)

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
         await fetch(API_URL, {
            mode: 'cors',
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({payload: values.payload})
            
         })
         .then((res)=>{
           if (!res) throw new Error("No response from server")
           return res.json()
         })
         .then((data)=>{
            console.log(data.message)

            if(data) {
            // Use Response for Text To Voice
            setTextMessage(data.message)
            setEditText(data.message)
            setEditText(data.message)
            // Continue with Chatbot
            const botMessage = {
                role: "bot",
                content: "",
                audio: null
            }

            
            botMessage.content = data.message
            newMessages.push(botMessage)
        }
             
            setMessages(newMessages)
        
            form.reset()
         })


        }catch (error: any) {
            console.log(error)
        } finally {
            return
        }
    }


    // Update TextMessage
    const updateTextMessage = (e: any)=>{
        e.preventDefault()
        setTextMessage(editText)
    }
    

// Handle Voice to Text
    const handleTextToVoice = async (e: any)=>{
        e.preventDefault()
        const messageToConvert = textMessage
        try{
        setIsConvertingTextToAudio(true)
        setAudioURL(null)
        if(!messageToConvert) return {"error": "No textMessage found"}
        console.log({"userMesssage": messageToConvert})
        const blob: any = await textToVoice(messageToConvert)
        if(blob){
       
            const chatbotBlob = new Blob([blob], {type: 'audio/wav'})
            const chatbotBlobURL = URL.createObjectURL(chatbotBlob)

            const botResponse = {
                role: 'bot',
                content: textMessage,
                audio: chatbotBlobURL
            }
            
            setMessages([...messages, botResponse])
            
            // const ChatbotAudio = new Audio(chatbotBlobURL)
            // ChatbotAudio.play()
    
      setIsConvertingTextToAudio(false)
    
        }else{
            console.log(blob.error)
            setIsConvertingTextToAudio(false)
        }
    }
    catch(err){
        console.log(err)
    }finally{
        setIsConvertingTextToAudio(false)
    }
    }

    

  return (
    <div className='flex flex-col justify-center'>
     
     
     <div className='className="text-center flex flex-col justify-cencenter  py-4"'>
     <p className="text-center font-extrabold text-xl py-4 px-8">USE CASES</p>
     <ul className='text-center text-sm grid grid-flow-row 
     md:grid-cols-3 font-semibold'>
        <li>Email writing</li>
        <li>Text Message writing</li>
        <li>Can convert chat to audio file</li>
        <li>Good for Social Media Voice-Over</li>
        <li>Video Content Voice-Over</li>
        <li>Slide Presentation Voice-Over</li>
        <li>Song Lyrics</li>
        <li>YouTube Channel Script</li>
        <li>Script for Roleplays</li>
     </ul>
     </div>

     <p className="text-center font-extrabold text-2xl text-blue-700 py-8 px-4">
        CREATOR&apos;S LAB</p>

        <Title setMessages={setMessages} />
        <Heading
        title='Create content faster than competition'
        description = 'Content production on steroid'
        icon={MessageSquare}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
         />

         <div className='px-4 lg:px-8'>
          <div>
           
           {/* Announcements */}
           <p className='text-center text-pink-500 font-extrabold'>New ultra-real human voices coming soon...</p>


           {/* Message Form */}
            <div>
            {isEditing ?

// Editing Mode
<div className='flex flex-col justify-center items-center'>
<Button className='my-4 rounded-2xl' onClick={()=>setIsEditing(false)}>Close Editing</Button>
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
 <Input className='border-0 outline-none 
 focus=visible:ring-transparent
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
            <Input className='border-0 outline-none 
            focus=visible:ring-transparent
            focus-visible:ring-0'
            disabled={isLoading}
            placeholder="Write a love message for my Dad"
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
                    
                    <div className={`grid grid-flow-row md:grid-cols-${message.audio? 4 : 3} gap-1`}>
                
                {/* Convert to audio button */}
                <Button onClick={(e)=>handleTextToVoice(e)} 
                className='mt-2 rounded-2xl'>
                    
                    Convert to Audio
                </Button>
                 

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

                {message.audio ?
                <Button
                className='mt-2 rounded-2xl '>
                    
                    Use Text & Audio
                </Button>:null
                } 
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

                {/* Free Plan warning */}
                <div className=''>
                <p className='text-red-700 text-sm py-1 mt-2'>
                    ...some text missing in FREE PLAN</p>
                    <Button className='rounded-2xl'>Buy Credits</Button>
                </div>
                </div>
                
                </div>
                 }
                 
                 
                </div>
            ))}
           </div>
          </div>

          

         </div>
    </div>
  )
}

export default TextChatPage