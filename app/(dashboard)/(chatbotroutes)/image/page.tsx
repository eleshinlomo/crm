"use client"
import {useState, useEffect} from 'react'
import * as z from 'zod'
import {Heading} from '@/components/heading'
import {  Download, MessageSquare, PhoneCallIcon} from 'lucide-react'
import {  useForm } from 'react-hook-form'
import { resolutionOptions, amountOptions, formSchema } from './constants'
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
import Image from 'next/image'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select'
import { Card, CardFooter } from '@/components/ui/card'





const ImagePage = () => {
    
    
    const [images, setImages] = useState<string[]>([])
    

    const router = useRouter()
    const form = useForm <z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            payload: "",
            amount: "1",
            resolution: '512x512'
        }
    })

    const isLoading = form.formState.isSubmitting

    

    const onSubmit = async (value: z.infer<typeof formSchema>) => {
        console.log(value);
      
        try {

          setImages([])
        
          const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
          const API_URL = `${BASE_URL}/imagegenerator/`;
          const res = await fetch(API_URL, {
            mode: "cors",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
              payload: value.payload,
              amount:  value.amount,
              resolution: value.resolution

            }),
          });
      
          if (res.ok) {
            const responseData: any = await res.json();
            const urls = responseData.map((image: {url: string})=> image.url)
            console.log(urls)
            setImages(urls)
            const [firstImage] = responseData; // Assuming the data is an array, take the first image
            const { prompt, amount = 1, resolution = "512X512" } = firstImage || {};

            
          form.reset();
        } 
      }catch (error) {
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
              <Input className='border-0 outline-none 
              focus=visible:ring-transparent
              focus-visible:ring-0'
              disabled={isLoading}
              placeholder='Ultra real baby picture'
              {...field}
               />
               </FormControl>
               </FormItem>
               )}
               />


               <FormField
               control={form.control}
               name="amount"
               render={({ field })=> (
                <FormItem className='col-span-12 lg:col-span-2'>
                  
                   <Select
                   disabled={isLoading} 
                   onValueChange={field.onChange}
                   value={field.value}
                   defaultValue={field.value}
                   >
                   <FormControl>
                    <SelectTrigger>
                      <SelectValue defaultValue={field.value} />
                    </SelectTrigger>
                   </FormControl>
                   <SelectContent>
                    {amountOptions.map((options)=>
                      <SelectItem
                      key={options.value}
                      value={options.value}
                      >
                        {options.label}
                      </SelectItem>
                     
                    )}
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
              {images.map((src)=>(
               <Card
               key={src}
               className='rounded-lg overflow-hidden'
               >

                <div className='relative aspect-square'>
                 <Image
                 src={src}
                 alt='Image'
                 fill
                  />
                </div>

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