"use client"
import {useState, useEffect} from 'react'
import * as z from 'zod'
import {Heading} from '@/components/heading'
import {  Download, MessageSquare, PhoneCallIcon} from 'lucide-react'
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





const ImagePage = () => {
    
    
    const [images, setImages] = useState<Array<string | any>>([])
    const [url, setUrl] = useState<null | any>(null)
    

    const router = useRouter()
    

    const FormSchema = z.object({

      payload: z.string().min(0, {
        message: " Password must be at least 6 characters.",
      }),
  
      resolution: z.string().min(2, {
        message: " Email must be at least 2 characters.",
      }),
      
    
    })


    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        payload: "",
        resolution: '1024x1024'
      },

  })

    const isLoading = form.formState.isSubmitting

    

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        console.log(data)
      
        try {

          
           console.log(data)
          const BASE_URL = process.env.NEXT_PUBLIC_FAST_API_BASE_URL;
          const API_URL = `${BASE_URL}/generateimage`;
          const res = await fetch(API_URL, {
            mode: "cors",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          
          if (res.ok) {
            const image_url = await res.json();
            setImages([...images, image_url.data])
        }
      
          form.reset();
        } 
      catch (error) {
          console.error("Error:", error);
        } finally {
          router.refresh();
        }
      };
      


    
  return (
    <div className='text-black'>

        <div className='flex'>
        <Heading
        title='Image Generator'
        description = 'Our Stunning Image Generator can get you into the image business right away.'
        icon={MessageSquare}
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
              <Input className='border outline-none 
              focus=visible:ring-transparent
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
                  <SelectItem value="512x512">512x512</SelectItem>
                </SelectContent>
              </Select>
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
              {images.map((src, index)=>(
               <Card
               key={index}
               className='rounded-lg overflow-hidden'
               >
                 <a href={src} target='_blank'>
                <div className='relative aspect-square h-72 w-72 flex flex-row-reverse'>
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