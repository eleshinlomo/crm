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
        
        "Advance CRM for businesses",
        "Business Development Tools",
        "Follow up with clients",
        "Advance Business Tools",
        "Advance AI Models",
        "Web and Mobile CRM",
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
<Image src='/bg/background-6824.gif' alt='hero pics' fill />
</div>

<div className="px-3 pb-2">

<div className="  my-3">
<h1 className="py-4  font-arial font-extrabold text-2xl ">
  {"All Business Tools On One Platform!"}</h1>
</div>

<div>
<div>
<Typewriter customText={customText} />
</div>
<p className="flex-wrap text-start  md:pr-8 ">

In a world driven by technology, the demand for cutting-edge 
solutions has never been more critical. Fixupe is your gateway to a 
future where modern technology tools 
transcend boundaries, reshaping industries, 
and propelling businesses to unprecedented heights...</p>
</div>


<div className="grid grid-flow-row mt-5  md:grid-cols-2 gap-2 ">
<Button  
className="bg-blue-700 hover:bg-blue-700 text-white " 
  >
<Link href='/dashboard'>DASHBOARD</Link></Button>
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