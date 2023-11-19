"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const CreditPage = () => {
    const [credit, setCredit] = useState<number>(0)
  return (
    <div>
        <div className='py-4'>
        {credit > 0 ?  
        <div><p>Your credit is {credit}</p></div>:
        <div className=''>
            <p className='text-xl text-blue font-semibold'>Your credit is {credit}</p>
              
            <Button variant='outline' className='bg-black text-white rounded-full '>
              Start Free Trial</Button>
            </div>
        } 
        </div>
    </div>
  )
}

export default CreditPage