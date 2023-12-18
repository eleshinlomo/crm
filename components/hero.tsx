"use client"
import { BotIcon, BriefcaseIcon, ComputerIcon, MailPlusIcon, PiIcon } from "lucide-react"
import Image from 'next/image'
import { Button } from "./ui/button"
import {useEffect, useState} from 'react'
import  Typewriter  from "@/components/typewriter"

const Hero = ()=>{

    const [customText, setCustomText] = useState<Array<string>>([])

  useEffect(()=>{
    setCustomText(
      [
        "Welcome to Fixupe",
        "Write 200 Articles in 30mins",
        "Top AI Tools",
        "Complete task faster",
        "Post on Wordpress in 2mins"
      ]
    )
  }, [])

    return (
        <div>



<div className=" h-auto w-full flex flex-1 flex-col   bg-white
             rounded-3xl ">



<div className="  h-96 md:flex  flex-1 w-full
   ">



<div className="px-4 pb-2 h-1/2 md:h-full w-full md:w-1/2">

<div className="">
<Typewriter customText={customText} />
</div>
<div className=" ">
<h1 className="py-4 font-arial font-extrabold ">ABOUT FIXUPE</h1>
</div>


<p className="flex flex-wrap text-start   md:pr-16 ">
Fixupe aims to 
 simplify and enhance daily tasks through the power of 
 artificial intelligence. SmartAssistant is not just a 
 voice-activated helper; it&apos;s a comprehensive tool designed 
 to streamline your workflow, 
provide insightful information, and make your life easier.
</p>

<div className='flex flex-col
      items-center gap-5 py-4'>
     <a href='/dashboard'>
      
        <Button>Get Started</Button>
        
       </a> 

      </div>

</div>
 
{/* Images */}
<div className="h-1/2 md:h-full w-full md:w-1/2">

<div className="relative  w-full h-96">
<Image src='/images/man-1835.gif' alt='woman' fill />
</div>
</div>
           


    </div>


           </div>

        </div>
    )
}

export default Hero