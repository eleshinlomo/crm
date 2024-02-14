import {useState, useEffect} from 'react'
import { useRouter, usePathname } from 'next/navigation';
import TodoListPage from '@/app/(dashboard)/todolistpage/page'
import { ArrowBigDown, ArrowBigRight } from 'lucide-react';
import React from 'react'
import { Button } from '@/components/ui/button';

export const OtherDashButtons = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
  
  
    const pathname= usePathname()
    const router = useRouter();
  return (
    <div className='flex flex-col gap-2'>
        {/* Todo button */}
        <div className='px-2 w-auto flex flex-col justify-center items-center'>
          <Button className='w-full flex flex-1 justify-between'
          onClick={()=>{
            setIsOpen(!isOpen); 
            router.push('/todolistpage')
            pathname   ? pathname : null
          }}
          >
             To Do
            {isOpen?<ArrowBigRight /> : <ArrowBigDown/>}
            </Button>
        </div>

         {/* Employee's page button */}
         <div className='px-2'>
          <Button className='w-full flex justify-between'
          onClick={()=>{
            setIsOpen(!isOpen); 
            router.push('/employeepage')
            pathname    ? pathname : null
          }}
          >
             Employee&apos;s Page
            {isOpen?<ArrowBigRight /> : <ArrowBigDown/>}
            </Button>
        </div>

         {/* Admin button */}
         {/* <div className='px-2'>
          <Button className='w-full flex justify-between'
          onClick={()=>{
            setIsOpen(!isOpen); 
            router.push('/adminpage')
            pathname   ? pathname : null
          }}
          >
             Admin
            {isOpen?<ArrowBigRight /> : <ArrowBigDown/>}
            </Button>
        </div> */}

    </div>
  )
}

