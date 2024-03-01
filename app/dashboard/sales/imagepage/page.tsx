"use client"
import {useState, useEffect} from 'react'
import * as z from 'zod'
import {Heading} from '@/components/heading'
import {  BotIcon, Download, MessageSquare, PhoneCallIcon} from 'lucide-react'
import {  useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {Form, FormLabel, FormControl, FormField, FormItem} from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import {useRouter} from 'next/navigation'
import {Empty} from '@/components/empty'
import {Loader} from '@/components/loader'
import { cn } from '@/lib/utils'
import { UserAvatar } from '@/components/user-avater'
import { BotAvatar } from '@/components/BotAvatar'
import { EmptyImage } from '@/components/emptyimage'
import Image from 'next/image'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardFooter } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'





const ImagePage = () => {
    
    
    const [images, setImages] = useState<Array<string | any>>([])
    const [error, setError] = useState<string | any>('')
    const [url, setUrl] = useState<null | any>(null)
    

    const router = useRouter()
    

    const FormSchema = z.object({

      payload: z.string().min(0, {
        message: " Password must be at least 6 characters.",
      }),
  
      resolution: z.string().min(1, {
        message: " Resolution field is required.",
      }),
      
    
    })


    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        payload: "",
        resolution: "1024x1024"
      },

  })

    const isLoading = form.formState.isSubmitting

    

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        console.log(data)
      
        try {

          
          console.log(data)
          const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
          const sessionid: any = localStorage.getItem('sessionid')
          const res: any = await fetch(`${BASE_URL}/imagegenerator/`, {
            mode: "cors",
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
              "sessionid": sessionid
            },
            body: JSON.stringify(data),
          });
          
          if (!res)throw new Error("Network problem")
            const image_url = await res.json();
        if (image_url.ok){
            setImages([...images, image_url.message.data])
        }else{
          setError(image_url.message.error)
          setImages([...images])
        }
      
          form.reset();
        } 
      catch (error: any) {
          console.log("Error:", error.error);
        } finally {
          router.refresh();
        }
      };
      

  const headerText: any = 
  <div>
   <p className='font-black'>
    <span className='text-blue-600 px-1'>HD</span> Large Image Bot
    
    </p>
  </div>
    
  return (
    <div className='text-black bg-white'>

        <div className='flex pt-5'>
        <Heading
        title={headerText}
        description = 'Generate copyright free HD images for your business.'
        icon={BotIcon}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
         />

        

         </div>

         <div className='px-4 lg:px-8 '>
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
                
               <FormItem className="col-span-12 lg:col-span-6">
               <FormControl className='m-0 p-0'>
              <Textarea className='border outline-none 
              focus=visible:ring-transparent h-16
              focus-visible:ring-0'
              disabled={isLoading}
              placeholder='Ultra real baby picture'
              {...field}
              required
               />
               </FormControl>
               </FormItem>
               )}
               />

               
          <FormField
          control={form.control}
          name="resolution"
          render={({ field }) => (
            <FormItem className="col-span-12 lg:col-span-6">
              <FormLabel>Resolution</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select resolution"/>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1024x1024">1024x1024</SelectItem>
                  <SelectItem value="1024x1792">1024x1792</SelectItem>
                  <SelectItem value="1792x1024">1792x1024</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
                

               
               <Button className='col-span-12 lg:col-span-2 w-full 
                rounded-2xl' disabled={isLoading}>
                Generate Image
               </Button>
               
               
             </form>
            </Form>
          </div>
         
         {/* Error */}
         <p className='text-red-500 py-4 px-2 font-extrabold'>{error? error: null}</p>

          {/* Chat Messages */}
          <div className='space-y-4 mt-4'>
            {isLoading && (
                <div className='p-20'>
                <Loader />
                </div>
            )}
            {images.length == 0 && !isLoading && (
                <div>
                    <EmptyImage label="No images generated" />
                </div>
            )}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            xl:grid-cols-4 gap-4 mt-6
            '>
              {images.slice().reverse().map((src, index)=>(
               <Card
               key={index}
               className='rounded-lg overflow-hidden'
               >
                 <a href={src} target='_blank'>
                <div className='relative aspect-square h-72 w-full  md:w-72 flex flex-row-reverse'>
                 <Image
                 src={src}
                 alt='Image'
                 fill
                  />
                </div>
                </a>

                <CardFooter>
                  
                  <Button 
                  onClick={()=>window.open(src)}
                  variant='secondary' className='w-full'>
                  
                   <Download className='h-4 w-4 mr-2' />
                  </Button>
                </CardFooter>
               </Card>
              ))}
            
            </div>
           
                
          
           
          </div>

         </div>
    </div>
  )
}

export default ImagePage