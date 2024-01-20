"use client"
import { Button } from '@/components/ui/button'
import  { useState, useEffect } from 'react'
import Link from 'next/link'
import { TeamPage } from '@/components/team'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { BASE_URL } from '@/components/auth'
import { GOOGLE_LOGIN_URL } from '@/components/urls'
import { loginURL } from '@/components/urls'
import  HomeNavBar  from '@/components/homenavbar'
import { ServicesBottom } from '@/components/servicesbottom'
import  Hero  from '@/components/hero'
import  Typewriter  from '@/components/typewriter'
import { Col3Bottom } from '@/components/cols3bottom'
import { SocialCTA } from '@/components/socialcta'
import Ctawithrightpic from '@/components/ctawithrightpic'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'


// MTN Functions
import { MTNAPIs } from '@/components/mtn'
import { getMTNUserToken } from '@/components/mtn'

// Auth Functions
import { getAccessToken } from '@/components/auth'
import { loginChecker } from '@/components/auth'
import { ServicesTop } from '@/components/servicestop'
import { ServicesMiddle } from '@/components/servicesmiddle'




const HomePage = () => {
  const [customText, setCustomText] = useState<Array<string>>([])
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [showButtons, setShowButtons] = useState<boolean>(true)
  const [username, setUsername] = useState<string | null>(null)
  // const [accessToken, setAccessToken] = useState<string | null>(null)
  const [error, setError] = useState<string | any>("")

  const router = useRouter()
  const params: any = useSearchParams()
    const code = params.get("code")


    const MTNUserToken_handler = async ()=>{
      const response = await getMTNUserToken()
      console.log({"mtn token": response})
    }

    const mtnAPIsHandler = async ()=>{
      const response = await MTNAPIs()
      console.log({"mtnaccountholder": response})
    }
  

    const handleGetAccessToken = async (code: string)=>{
      if(code !== null){
      const response: any = await getAccessToken(code)
      if(response.ok){
        const {access_token} = response.message
        console.log(access_token)
      }else{
        console.log("No access_token found")
      }
    }else{
        console.log("Code needed for Google Auth is null")
      }
    }

    useEffect(()=>{
      handleGetAccessToken(code)
      MTNUserToken_handler()
      mtnAPIsHandler()
    }, [code])

    


    
  
  return (

    <div>
    
    <HomeNavBar  />

    <div className='    w-full  h-full overflow-hidden flex flex-col '>
     <div className=''>

     {/* Error Message */}
     <div className='text-center text-white font-extrabold'>
              <p>{error}</p>
             </div>
      
      <Hero />
      </div>
      
      <ServicesTop />
      <ServicesMiddle />
      <div className="relative h-72 w-full">
          <Image src='/bg/background-6824.gif' alt='biz dev image' fill />
        </div>
        <ServicesBottom />
       
       <div className="relative h-72 w-full">
          <Image src='/bg/background-6824.gif' alt='biz dev image' fill />
        </div>
        
       <TeamPage />
       <SocialCTA />
      <Col3Bottom />
      
      

    </div>
    <Footer />

    </div>
  )
}

export default HomePage