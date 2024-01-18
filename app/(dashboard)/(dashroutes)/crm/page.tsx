'use client'
import { Input } from '@/components/ui/input'
import React from 'react'
import {useState, useEffect} from 'react'



const CRMPage = () => {

  const [clientName, setClientName] = useState<any | null>(null)
  const [clientContactPerson, setClientContactPerson] = useState<any | null>(null)
  const [clientContactEmail, setClientContactEmail] = useState<any | null>(null)
  const [clientContactPhone, setClientContactPhone] = useState<any | null>(null)
  const [clientAddress, setClientAddress] = useState<any | null>(null)
  const [clientServiceFee, setClientServiceFee] = useState<any | null>(null)
  const [clientContract, setClientContract] = useState<any | null>(null)
  const [clientFollowup, setClientFollowup] = useState<any | null>(null)
  const [selected, setSelected] = useState<any | null>(null)

  

  const crmData = [
    {
      clientName: useEffect(()=>setClientName("Fake"), []),
      clientContactPerson: useEffect(()=>setClientContactPerson("John"), []),
      clientContactEmail: useEffect(()=>setClientContactEmail("johnny@fake.com"), []),
      clientContactPhone: useEffect(()=>setClientContactPhone("234567890"), []),
      clientAddress: useEffect(()=>setClientAddress("Somewhere around the world"), []),
      clientServiceFee: useEffect(()=>setClientServiceFee("20%"), []),
      clientContract: useEffect(()=>setClientContract("Fake"), []),
      clientFollowup: useEffect(()=>setClientFollowup("Touched base last week"), [])
    }
  ]

  const handleOnChange = (value: any, e: any)=>setSelected(e.target.value)
 

  return (
    <div className='flex flex-col flex-1 justify-center items-center px-4'>
       
       <p className='text-2xl font-extrabold my-3'>CRM FOR {'FAKE COMPANY'}</p>

       {/* Heading */}
      <div className='text-center grid grid-flow-row md:grid-cols-4 overflow-scroll'>
        

        {/* Name Column */}
        <div className='border border-blue-800 p-2 '>
        <p className='font-extrabold text-sm text-center'>CLIENT NAME</p>
        <div className='flex flex-col gap-2 py-2'>
        <Input value={clientName}  />
        <button className='p-1 bg-black rounded-2xl text-white' 
        >Update</button>
        </div>
        </div>

        {/* Client Contact Column */}
        <div className='border border-blue-800 p-2 '>
        <p className='font-extrabold text-sm'>CLIENT CONTACT</p>
        <div className='flex flex-col gap-2 py-2'>
        <Input value={clientContactPerson}  />
        <button className='p-1 bg-black rounded-2xl text-white' 
        >Update</button>
        </div>
        </div>

         {/* Client Contact Email Column */}
         <div className='border border-blue-800 p-2 '>
        <p className='font-extrabold text-sm'>CLIENT CONTACT EMAIL</p>
        <div className='flex flex-col gap-2 py-2'>
        <Input value={clientContactEmail}  />
        <button className='p-1 bg-black rounded-2xl text-white' 
        >Update</button>
        </div>
        </div>

         {/* Client Phone Column */}
         <div className='border border-blue-800 p-2 '>
        <p className='font-extrabold text-sm'>CLIENT CONTACT PHONE</p>
        <div className='flex flex-col gap-2 py-2'>
        <Input value={clientContactPhone}  />
        <button className='p-1 bg-black rounded-2xl text-white' 
        >Update</button>
        </div>
        </div>

         {/* Client Address Column */}
         <div className='border border-blue-800 p-2 '>
        <p className='font-extrabold text-sm'>CLIENT ADDRESS</p>
        <div className='flex flex-col gap-2 py-2'>
        <Input value={clientAddress}  />
        <button className='p-1 bg-black rounded-2xl text-white' 
        >Update</button>
        </div>
        </div>

         {/* Client Service Fee Column */}
         <div className='border border-blue-800 p-2 '>
        <p className='font-extrabold text-sm'>SERVICE FEE</p>
        <div className='flex flex-col gap-2 py-2'>
        <Input value={clientServiceFee}  />
        <button className='p-1 bg-black rounded-2xl text-white' 
        >Update</button>
        </div>
        </div>

         {/* Client Contract Column */}
         <div className='border border-blue-800 p-2 '>
        <p className='font-extrabold text-sm'>CONTRACT</p>
        <div className='flex gap-2 py-2 mt-8'>
        <button className='text-sm p-1 px-2 h-12 w-1/2 bg-black rounded-2xl text-white'>View</button>
        <button className='p-1 w-1/2 bg-black rounded-2xl text-white' 
        >Update</button>
        </div>
        </div>

         {/* Follow up Column */}
         <div className='border border-blue-800 p-2 '>
        <p className='font-extrabold text-sm'>FOLLOW UP</p>
        <div className='flex flex-col gap-2 py-2'>
        <Input value={clientFollowup} className='overflow-scroll' />
        <button className='p-1 bg-black rounded-2xl text-white' 
        >Update</button>
        </div>
        </div>

      </div>

      {/* Data */}
      
        
      
        
    </div>
  )
}

export default CRMPage