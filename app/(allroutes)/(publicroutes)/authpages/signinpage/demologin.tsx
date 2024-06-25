"use client"

import {useState, useEffect} from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'
import { SpinnerOne } from '@/components/spinner'

// Auth Functions
import { emailLogin } from '@/components/auth' 



export const DemoLogin = ()=>{

const [message, setMessage] = useState<string | any>('Sign in with Email')
const [isRegistered, setIsRegistered] = useState<boolean>(false)
const [isSiginingIn, setIsSigningIn] = useState(false)
const [email, setEmail] = useState<string>('demo@fixupe.com')
const [password, setPassword] = useState<string>('demo1234')

const router = useRouter()

const signingIn = (<div className='relative w-24 h-24'>
  <Image src={SpinnerOne} alt='spinner' fill/></div>)


  const demoLogin = async (e: any) => {
    e.preventDefault()
    const payload = {
      email,
      password
    }
    try{
    setIsSigningIn(true)
    setMessage('')
    const response: any = await emailLogin(payload)
    if(response.ok){
      
      const {
        userid, 
        username, 
        firstname, 
        lastname, 
        sessionid,
        credits,
        company,
        email
      } = response.data
      
      // Save User Info
      localStorage.setItem('username', username)
      localStorage.setItem('email', email)
      localStorage.setItem('sessionid', sessionid)
      localStorage.setItem('credits', credits)
      localStorage.setItem('company', company)
      localStorage.setItem("userid", userid)
      setIsSigningIn(false)
      router.push('/dashboard/dashboardpage')
    
  }else{
    console.log(response.error)
    setMessage(response.error)
  }
}
  catch(err: any){
    console.log(err)
    setMessage("No response! Unable to fetch from server. Check internet connection")

  }finally{
    setIsSigningIn(false)
  }
    
  }

  return (

    <div className=''>
     
     
   
              <form onSubmit={demoLogin}>
                <input value={email} type='hidden' />
                <input value={password} type='hidden' />
                <Button size='lg' variant='outline' type='submit' 
                className='px-8 py-8 text-lg font-medium text-center text-white bg-blue-500 hover:bg-blue-500 hover:text-white rounded-2xl'>
                    {isSiginingIn? 'Entering...' : 'TRY FREE CRM'}
                    </Button>
              </form>
          
    
     
    
    </div>
  )
}
