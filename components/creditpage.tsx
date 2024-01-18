"use client"
import { Button } from '@/components/ui/button'
import React, { useState, useEffect } from 'react'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const CreditPage = () => {

  const [credit, setCredit] = useState<number>(0)

  const getCredit = async ()=>{
    const response = await fetch(`${BASE_URL}/getcredit/`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Content-Type": 'application/json'
      }
    })
    if(!response){
      throw new Error("Server error: No response recieved")
    }else{
      const data = await response.json()
      if(data.ok){
        console.log(data.message.data)
      }else{
      console.log(data.message.error)
      }
    }
  }



    useEffect(()=>{
      getCredit()
    }, [])


  return (
    <div>
        <div className='py-4'>
        {credit > 0 ?  
        <div><p>Your credit is {credit}</p></div>:
        <div className=''>
            <p className='text-xl text-blue font-semibold'>
              Your credit is {credit}</p>
              <p className='font-extrabold'>PLAN: FREE</p>
            <Button variant='default' className='bg-black hover:bg-black text-white rounded-full '>
              UPGRADE TO PREMIUM</Button>
            </div>
        } 
        </div>
    </div>
  )
}

export default CreditPage