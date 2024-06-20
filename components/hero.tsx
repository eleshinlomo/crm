"use client"
import { BotIcon, BriefcaseIcon, ComputerIcon, MailPlusIcon, PiIcon } from "lucide-react"
import Image from 'next/image'
import { CtaBlockPage } from "./ctablock"
import { Button } from "./ui/button"
import {useEffect, useState} from 'react'
import  Typewriter  from "@/components/typewriter"
import Link from 'next/link'
import { DemoLogin } from "./demologin"
import { loginChecker } from "./auth"
import {motion} from 'framer-motion'
import SigninLadingpage from "@/app/(allroutes)/(publicroutes)/authpages/signinpage/signinlandingpage"

const Hero = ()=>{

    const [customText, setCustomText] = useState<Array<string>>([])
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false) 
    const [username, setUsername] = useState<string | null>(null)
    const [sessionid, setSessionid] = useState<null | any>(null)
    const [isChecking, setIsChecking] = useState<boolean>(false)

  // URLs
  const ALLAUTH_BASE_URL = process.env.NEXT_PUBLIC_ALLAUTH_BASE_URL

  useEffect(()=>{
    setCustomText(
      [
        "Advance AI Models",
        "Innovative ML Approach",
        "Modern Technologies"
      ]
    )
  }, [])



  //  Login Checker Handler
const handleLoginChecker = async ()=>{
  try{
  setIsChecking(true)
  // Get sessionid and check validity
  const session_id = localStorage.getItem('sessionid')
  if (!session_id || session_id === null || session_id === 'undefined') throw new Error('Sessionid not found')
  setSessionid(session_id)
  const user = await loginChecker(sessionid)
  const {username} = user
  setUsername(username)
  setIsChecking(false)
  setUsername(localStorage.getItem('username'))
  setIsLoggedIn(true)

}
catch(err){
  console.log(err)
}finally{
  setIsChecking(false)
}

}

useEffect(()=>{
  handleLoginChecker()
}, [])

    return (
        <div>

<div className=" flex flex-col justify-between bg-gradient-to-br  
            from-black via-blue-900 to-black text-white px-2 w-full">



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
<div  className="h-1/3 pt-6 pb-6 md:pb-0 px-3   mt-3 ">
<h1 className="text-2xl md:text-3xl font-extrabold leading-tighter 
            tracking-tighter mb-4" data-aos="zoom-y-out">EXPLORE AI POWERED 
            <span className="bg-clip-text py-8 text-transparent
             bg-gradient-to-r from-blue-800 to-white"> CRM</span> 
            </h1>
<p className=" w-full ">
Explore our world class CRM solution with integrated AI Agents. 
Our mission is to make AI accessible, intuitive, 
and transformative for businesses. Whether you run an enterprise or 
a start-up, our platform offers a 
diverse range of AI tools embedded in the CRM offering the best client management experience.
</p>

<div className="flex flex-col md:flex-row pt-8 gap-3 ">
{/* <Button variant='outline' size='sm'
className=" text-white bg-blue-500 rounded-2xl" 
  ><Link href='/signuppage'>START FREE TRIAL</Link></Button> */}

  <DemoLogin />

{isLoggedIn ?

<Button variant='outline' size='lg'
className=" text-white bg-blue-500 rounded-2xl" 
  ><Link href='/dashboard/dashboardpage'>DASHBOARD</Link></Button>:
<SigninLadingpage />
}
</div> 
</div>
 
           


    </div>


           </div>

        </div>
    )
}

export default Hero