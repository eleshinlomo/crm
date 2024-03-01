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
        
        "Optimized CRM",
        "HD Image Generator",
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


<div className="relative h-auto w-full md:flex 
justify-between items-center px-4 py-8">


{/* Left Side */}
<div className=" w-full md:w-1/2 z-[10]">
<h1 className="text-center md:text-start py-4  font-arial 
font-extrabold text-green-500 
text-md  md:text-xl">
Go Take A Walk And Let AI Take-Over
  </h1>

<Typewriter customText={customText} />

<p className="mb-5">

The AI keeps changing the traditional work environment. Modern work platform 
requires modern work tools. We provide modern business
tools for businesses to leverage on and ensure they are able to solve today&apos;s 
tasks faster and more efficiently.</p>
</div>

 
{/* Hero Video */}
{/* Middle */}
<div className="absolute h-72 w-full z-[-10]">

    <video 
    loop
    autoPlay
    muted
    src='/videos/legwork.mp4'
    className="w-full"
    />
  
</div>

{/* Right Side */}
{/* Text and Buttons */}

<div className="flex flex-col justify-center items-center md:justify-end 
md:items-end w-full md:w-1/2 ">

<div className="grid grid-flow-row md:grid-cols-2 gap-5 ">
<Button  
className="bg-blue-500 text-white  rounded-2xl py-6 w-full  my-2 md:my-0" 
  >
<Link href='/dashboard/dashboardpage'>DASHBOARD</Link>
</Button>
<div className="">
<WaitlistPage />
</div>
</div> 
</div>
{/* End of Buttons */}

 </div>
    </div>

       
  
    )
}

export default Hero