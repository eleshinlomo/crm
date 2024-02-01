"use client"
import { Button } from '@/components/ui/button'
import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { creditFunction } from '../../../components/credithandler'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL



const UserSubscriptionPage = () => {

  const [data, setData] = useState<Array<string | any>>([])

  
  
   useEffect(()=>{
    const creditHandler = async ()=>{
    const response: any = await creditFunction()
    if (response.message.ok){
      setData(response.message.data)
    }else{
      console.log(response.message.error)
    }
  }
  creditHandler()
}, [])

  

  
  return (
    <div>
        <div className='py-4'>
        {data.length >= 0?  
        data.map((plan, index)=>
        <div key={index}>
        <div className='font-extrabold' >
          <p>Your credit is {plan.credits}</p></div>
        
        <div className=''>
              <p className='font-extrabold'>PLAN: {plan.plan[0].toUpperCase() + plan.plan.slice(1)}</p>
            {plan.plan ==='free'?<Button variant='default' className='bg-black hover:bg-black
             text-white rounded-full '>
              UPGRADE TO PREMIUM</Button>:
              <Button variant='default' className='bg-black hover:bg-black
              text-white rounded-full '>
               DO ANYTHING</Button>
              }
            </div>

          </div>):null}
        
        </div>
    </div>
  )
}

export default UserSubscriptionPage