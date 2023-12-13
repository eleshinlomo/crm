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



<div className="h-full w0-full flex flex-col justify-between   
            bg-black text-white rounded-3xl ">



<div className="h-auto md:h-96 w-full  grid grid-flow-row md:grid-cols-2 
   mx-0 ">



<div className="px-3 pb-2 h-auto">

<div className="">
<Typewriter customText={customText} />
</div>
<div className=" ">
<h1 className="py-4 font-arial font-extrabold ">ABOUT FIXUPE</h1>
</div>


<p className="flex flex-wrap text-start px-2  md:pr-16 ">
Fixupe aims to 
 simplify and enhance daily tasks through the power of 
 artificial intelligence. SmartAssistant is not just a 
 voice-activated helper; it&apos;s a comprehensive tool designed 
 to streamline your workflow, 
provide insightful information, and make your life easier.
</p>

<div className='flex flex-col justify-center 
      items-center gap-5 py-4'>
     <a href='/dashboard'>
      
        <Button>Get Started</Button>
        
       </a> 

      </div>

</div>
 
{/* Images */}
<div className="h-44 grid md:grid-rows-2 md:grid-cols-2 ">


<div className="relative  w-auto h-72 md:h-96">
<Image src='/images/girl1.png' alt='woman' fill />
</div>

<div className="relative  w-auto h-72 md:h-96">
<Image src='/images/coder.png' alt='woman' fill />
</div>
</div>
           


    </div>


           </div>

        </div>
    )
}

export default Hero