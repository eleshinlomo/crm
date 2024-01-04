"use client"
import { BotIcon, BriefcaseIcon, ComputerIcon, MailPlusIcon, PiIcon } from "lucide-react"
import Image from 'next/image'
import { CtaBlockPage } from "./ctablock"
import { Button } from "./ui/button"
import {useEffect, useState} from 'react'
import  Typewriter  from "@/components/typewriter"
import Link from 'next/link'
import WaitlistPage from "@/app/(dashboard)/waitlistpage/page"

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



<div className="h-auto   bg-black text-white
             ">




{/* Left Side */}
<div className="md:h-96 w-full md:flex justify-center items-center   ">

<div className="relative  w-full h-72 md:h-96  px-2 ">
<Image src='/images/ai_girl2.png' alt='hero pics' fill />
</div>

<div className="px-3 pb-2">

<div className="  my-3">
<h1 className="py-4 font-arial font-extrabold text-2xl ">
  {"Welcome to the Future of Innovation!"}</h1>
</div>

<div>
<div>
<Typewriter customText={customText} />
</div>
<p className="flex-wrap text-start  md:pr-8 ">

In a world driven by technology, the demand for cutting-edge 
solutions has never been more critical. Fixupe is your gateway to a 
future where Artificial Intelligence (AI) 
transcends boundaries, reshaping industries, 
and propelling businesses to unprecedented heights..</p>
</div>


<div className="grid grid-flow-row mt-5  md:grid-cols-2 gap-2 ">
<Button  
className="bg-blue-700 text-white " 
  >
<Link href='/dashboard'>GET STARTED</Link></Button>
<div className="">
<WaitlistPage />
</div>
</div> 
</div>
 
           


    </div>


           </div>

        </div>
    )
}

export default Hero