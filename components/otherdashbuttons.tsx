import {useState, useEffect} from 'react'
import { useRouter, usePathname } from 'next/navigation';
import TodoListPage from '@/app/(allroutes)/dashboard/todolistpage/page'
import { ArrowBigDown, ArrowBigRight } from 'lucide-react';
import React from 'react'
import { Button } from '@/components/ui/button';

export const OtherDashButtons = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
  
  
    const pathname= usePathname()
    const router = useRouter();
  return (
    <div className='flex flex-col gap-2'>

      {/* Text Reader button */}
      <div className='px-2 w-auto flex flex-col justify-center items-center'>
          <Button className='w-full flex flex-1 justify-between'
          onClick={()=>{
            setIsOpen(!isOpen); 
            router.push('/dashboard/textreaderpage')
            pathname   ? pathname : null
          }}
          >
             Text Reader
            {isOpen?<ArrowBigRight /> : <ArrowBigDown/>}
            </Button>
        </div>

        {/* Credit topup button */}
        <div className='px-2 w-auto flex flex-col justify-center items-center'>
          <Button className='w-full flex flex-1 justify-between'
          onClick={()=>{
            setIsOpen(!isOpen); 
            router.push('/dashboard/purchase/purchasepage')
            pathname   ? pathname : null
          }}
          >
             Top up credit
            {isOpen?<ArrowBigRight /> : <ArrowBigDown/>}
            </Button>
        </div>

        {/* Admin */}
        {/* <div className='px-2 w-auto flex flex-col justify-center items-center'>
          <Button className='w-full flex flex-1 justify-between'
          onClick={()=>{
            setIsOpen(!isOpen); 
            router.push('/crm/adminpage')
            pathname   ? pathname : null
          }}
          >
             Admin
            {isOpen?<ArrowBigRight /> : <ArrowBigDown/>}
            </Button>
        </div> */}

        {/* Todo button */}
        <div className='px-2 w-auto flex flex-col justify-center items-center'>
          <Button className='w-full flex flex-1 justify-between'
          onClick={()=>{
            setIsOpen(!isOpen); 
            router.push('/dashboard/todolistpage')
            pathname   ? pathname : null
          }}
          >
             To Do
            {isOpen?<ArrowBigRight /> : <ArrowBigDown/>}
            </Button>
        </div>

       

    </div>
  )
}

