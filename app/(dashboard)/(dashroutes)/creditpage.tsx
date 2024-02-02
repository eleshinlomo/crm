"use client"
import { Button } from '@/components/ui/button'
import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { creditFunction } from '../../../components/credithandler'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL



const UserSubscriptionPage = () => {

  const [data, setData] = useState<Array<string | any>>([])

  
  
  
    
const creditHandler = async ()=>{
      try{
    const response: any = await creditFunction()
    if (response.message.ok){
      setData(response.message.data)
    }else{
      console.log(response.message.error)
    }
  }
catch(err){
  console.log(err)
}
}

useEffect(()=>{
  creditHandler()
}, [])

  

  
  return (
    <div className='text-black'>
        <div className='py-4'>
        {data.length > 0?  
        data.map((plan, index)=>
        <div key={index}>
        <div className='font-extrabold' >
          <p>Your credit is {plan.credits}</p></div>
        
        <div className=''>
              <p className='font-extrabold'>PLAN: {plan.plan[0].toUpperCase() + plan.plan.slice(1)}</p>
            {plan.plan ==='free'?<Button variant='default' className='bg-black hover:bg-black
              rounded-full '>
              UPGRADE TO PREMIUM</Button>:
              <Button variant='default' className='bg-black hover:bg-black
               rounded-full '>
               DO ANYTHING</Button>
              }
            </div>

          </div>):
          <div className='text-black'>
            <p>Fetching credit...</p>
          </div>
          }
        
        </div>
    </div>
  )
}

export default UserSubscriptionPage