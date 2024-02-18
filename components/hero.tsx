"use client"
import { BotIcon, BriefcaseIcon, ComputerIcon, MailPlusIcon, PiIcon } from "lucide-react"
import Image from 'next/image'
import { CtaBlockPage } from "./ctablock"
import { Button } from "./ui/button"
import {useEffect, useState} from 'react'
import  Typewriter  from "@/components/typewriter"
import Link from 'next/link'
import WaitlistPage from "@/app/dashboard/waitlistpage/page"

const Hero = ()=>{

    const [customText, setCustomText] = useState<Array<string>>([])
    const [userName, setUserName] = useState<string | any>('')


    useEffect(()=>{
    const getUserName = localStorage.getItem('username')
    if(getUserName){
      setUserName(getUserName)
    }
  }, [])

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



<div className="h-auto w-full bg-white text-black">




{/* Left Side */}
<div className="md:h-96 w-full md:flex justify-center items-center">
 
{/* Hero Image overlay */}
<div className="relative w-full">

<div className="">
<div className="relative  w-full h-72   px-2 ">
<Image src='/speech-bubble-5022_512.gif' alt='hero pics' fill />
</div>
</div>

{/* <div className="absolute  sm:top-32 sm:left-44 md:left-96 md:top-32   px-2 z-10">
<div className="relative w-24 h-16   px-2 ">
<Image src='/logos/fixupe_logo.png' alt='hero pics' fill />
</div>
</div>

{userName? 
<div className="absolute left-44  top-16 md:top-16 md:left-96 pl-5 
md:pl:0 mt-4 font-mono px-2">
<p className="font-extrabold">Hi, {userName.toUpperCase()}</p>
<p>Welcome to</p>
</div>:
<div className="absolute left-44  top-16 md:top-16 md:left-96 px-2
pl-5 md:pl:0 mt-4 font-mono">
<p className="font-extrabold">Hi, GUEST</p>
<p>Welcome to</p>
</div>
} */}
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

The AI keeps changing the traditional work environment. Modern work platform 
requires modern work tools. We provide modern business
tools for businesses to leverage on and ensure they are able to solve today&apos;s 
tasks faster and more efficiently.</p>
</div>


<div className="grid grid-flow-row mt-5  md:grid-cols-2 gap-2 ">
<Button  
className=" text-white py-6 rounded-2xl " 
  >
<Link href='/dashboard/dashboardpage'>DASHBOARD</Link></Button>
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