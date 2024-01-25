"use client"
import {useState, useEffect} from 'react'
import * as z from 'zod'
import {Heading} from '@/components/heading'
import {  MessageSquare } from 'lucide-react'
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


    
    


    const handleTextToVoice = async (textMessage: string)=>{
    
        try{
        setIsConvertingTextToAudio(true)
        setAudioURL(null)
        if(!textMessage) return {"error": "No textMessage found"}
        console.log({"userMesssage": textMessage})
        const blob: any = await textToVoice(textMessage)
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
     
     
     <div className='className="text-center flex flex-col justify-center items-center font-extrabold py-4"'>
     <p className="text-center font-extrabold text-xl py-4 px-8">USE CASES</p>
     <ul className='text-center '>
        <li>Can convert chat to audio file</li>
        <li>Good for Social Media Voice-Over</li>
        <li>Video Content Voice-Over</li>
        <li>Slide Presentation Voice-Over</li>
     </ul>
     </div>

     <p className="text-center font-extrabold text-3xl text-blue-700 py-8">
        SCRIPT & BLOG WRITER</p>

        <Title setMessages={setMessages} />
        <Heading
        title='Script & Blog Writer'
        description = 'Content production on steroid'
        icon={MessageSquare}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
         />

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
               <FormControl className='M-0 P-0'>
              <Input className='border-0 outline-none 
              focus=visible:ring-transparent
              focus-visible:ring-0'
              disabled={isLoading}
              placeholder='Write a 500 word youtube script  about "Apple Fruit"'
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
                    <Empty label="No conversation started with Teema" />
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
                
                 {message.role === 'user' ? 
                
                 <p className='text-md font-semibold'>
                    {message.content}
                </p> :
                <div className='font-semibold'>
                    <p className='text-md py-4'>
                    {message.content}
                </p>

                {/* Bot Response */}
                <div className='flex'>
               
               {message.audio ?
               <div className='flex gap-2'>
                <Button className='mt-2'>
                Use in Content Creator
               </Button>
               <Button className='mt-2'>Edit
               </Button>
               </div>:
                <Button onClick={()=>handleTextToVoice(message.content)} className='mt-2'>
                    
                    Convert to Audio
                </Button>
               }
                

                {isConvertingTextToAudio ?
                <div>
                {loading}
                </div>:null
                }
                </div>

                {/* Blob Response */}
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