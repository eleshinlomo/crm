"use client"
import { Button } from '@/components/ui/button'
import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL



const CreditPage = () => {

  const [credit, setCredit] = useState<null | any>(null)

  
  const getCredit = async ()=>{

    const sessionid = localStorage.getItem('sessionid')
  
    if(!sessionid) return
    try{
    console.log(sessionid)
    const response: any = await fetch(`${BASE_URL}/getcredit/`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'sessionid': sessionid,
  
      }
    })
    if(!response){
      throw new Error("No response from server")
    }else{
      const dataResponse = await response.json()
      if(dataResponse.message.ok){
        console.log(dataResponse.message.data)
        setCredit(dataResponse.message.data)
    
      }else{
      console.log(dataResponse.message.error)
      }
    }
  }
  catch(err: any){
    console.log(err)
  }
  }

  useEffect(()=>{
    getCredit()
  }, [])

  
  return (
    <div>
        <div className='py-4'>
        {credit >= 0?  
        <div className='font-extrabold'><p>Your credit is {credit}</p></div>:null
        }
        <div className=''>
              <p className='font-extrabold'>PLAN: {'FREE'}</p>
            <Button variant='default' className='bg-black hover:bg-black text-white rounded-full '>
              UPGRADE TO PREMIUM</Button>
            </div>
        
        </div>
    </div>
  )
}

export default CreditPage