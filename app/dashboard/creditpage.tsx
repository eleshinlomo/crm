"use client"
import { Button } from '@/components/ui/button'
import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { creditHandler } from '../../components/credithandler'
import Link from 'next/link'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL



const CreditPage = () => {

  const [data, setData] = useState<Array<string | any>>([])

  
  
  
    
const handleCredit = async ()=>{
      try{
    const response: any = await creditHandler()
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
  handleCredit()
}, [])

  

  
  return (
    <div className=''>

      <div className='text-center flex flex-col justify-center 
      items-center text-xs'>
        <div className='py-4'>
        {data.length > 0?  
        data.map((plan, index)=>
        <div key={index}>
        <div className='' >
          <p>Your credit is {plan.credits || plan.trial}</p></div>
        
        <div className=''>
              <div>
              <p className='font-extrabold '>PLAN: {plan.plan[0].toUpperCase() + plan.plan.slice(1)}</p>
              <Button className='p-4 bg-blue-800'>BETA</Button>
              </div>
            {plan.plan ==='free'?
            <Link href='/dashboard/purchase/purchasepage' className='py-2'>
            <Button variant='default' className='rounded-full mt-2'>
              UPGRADE TO PREMIUM</Button>
              </Link>
              :null
              
              }
            </div>

          </div>):
          <div className=''>
            <p>Fetching credit...</p>
          </div>
          }
        
        </div>

        </div>
    </div>
  )
}

export default CreditPage