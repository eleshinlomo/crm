"use client"
import { BotIcon, BriefcaseIcon, ComputerIcon, MailPlusIcon, PiIcon } from "lucide-react"
import Image from 'next/image'
import { CtaBlockPage } from "./ctablock"
import { Button } from "./ui/button"
import {useEffect, useState} from 'react'
import  Typewriter  from "@/components/typewriter"
import Link from 'next/link'

const Hero = ()=>{

    const [customText, setCustomText] = useState<Array<string>>([])

  useEffect(()=>{
    setCustomText(
      [
        "Advance AI Models",
        "Innovative ML Approach",
        "Cutting Edge Technologies"
      ]
    )
  }, [])

    return (
        <div>



<div className="h-auto   
            bg-black text-white ">




{/* Left Side */}
<div className="md:h-96 w-full md:flex justify-center items-center   ">

<div className="relative  w-full h-72 md:h-96">
<Image src='/images/tree-1781554.svg' alt='hero pics' fill />
</div>

<div className="px-3 pb-2">

<div className="border-b border-white  my-3">
<h1 className="py-4 font-arial font-extrabold text-2xl ">{"Welcome to the Future of Innovation!"}</h1>
</div>

<div>
<div>
<Typewriter customText={customText} />
</div>
<p className="flex-wrap text-start  pr-8 ">

In a world driven by technology, the demand for cutting-edge 
solutions has never been more critical, Fixupe is your gateway to a 
future where Artificial Intelligence (AI) 
transcends boundaries, reshaping industries, 
and propelling businesses to unprecedented heights..</p>
</div>


<div className="flex flex-col md:flex-row pt-8 gap-3 ">
<Button variant='outline' size='sm'
className=" text-black animate-pulse " 
  ><Link href='/dashboard'>DEMO HERE RIGHT AWAY</Link></Button>
<Button variant='outline' size='sm' className="  text-black  ">
    SEE MORE
</Button>
</div> 
</div>
 
           


    </div>


           </div>

        </div>
    )
}

export default Hero