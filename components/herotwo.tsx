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
        "Modern Technologies"
      ]
    )
  }, [])

    return (
        <div>



<div className=" flex flex-col justify-between bg-gradient-to-br  
            from-black via-gray-900 to-black text-white px-2 w-full">



<div className=" grid grid-rows-flow
 md:grid-cols-2 w-full  ">


{/* Left Side */}
<div className="bg-black ">
<div className="">
<Typewriter customText={customText} />
</div>
{/* <Image src='/program-3460032_1920.jpg' alt='woman' fill /> */}
<video src='/videos/legwork.mp4' autoPlay loop muted className=""></video>
</div>

{/* Right side */}
<div className="h-1/2 px-3 pb-2  my-3 ">
<h1 className="text-2xl md:text-3xl font-extrabold leading-tighter 
            tracking-tighter mb-4" data-aos="zoom-y-out">Run your business on
            <span className="bg-clip-text py-8 text-transparent
             bg-gradient-to-r from-blue-800 to-teal-800"> FIXUPE</span>
            </h1>
<p className=" w-full ">
Our mission is to make AI accessible, intuitive, 
and transformative for businesses. Whether you run an enterprise or 
a start-up, our platform offers a 
diverse range of AI tools and resources tailored to your needs.

From machine learning models to natural language processing algorithms, 
Fixupe provides a comprehensive suite of tools designed to streamline 
your workflow, enhance decision-making, and unlock new possibilities. 
With intuitive interfaces and powerful features,
 you can harness the full potential of AI without the complexity.</p>

<div className="flex flex-col md:flex-row pt-8 gap-3 ">
<Button variant='outline' size='sm'
className=" text-white bg-blue-500 rounded-2xl" 
  ><Link href='/signuppage'>START FREE TRIAL</Link></Button>
<Button variant='outline' size='sm'
className=" text-white bg-blue-500 rounded-2xl" 
  ><Link href='/dashboard/dashboardpage'>SIGN IN</Link></Button>
</div> 
</div>
 
           


    </div>


           </div>

        </div>
    )
}

export default Hero