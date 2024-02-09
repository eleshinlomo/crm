'use client'
import {useState, useEffect} from 'react'
import DatePage from './date'
import { Button } from '@/components/ui/button'

const EmployeePageSettings = () => {

    const [company, setCompany] = useState<null | any>(null)


    // Get Company name
    useEffect(()=>{
    const getCompanyName = ()=>{
        const companyName = localStorage.getItem('company')
        if(companyName !== null || companyName || undefined || companyName === 'undefined'){
            setCompany(companyName)
        }
    }
    getCompanyName()
    }, [])

  return (
    <div>
        
        <div className=' mt-5 px-2'>

            {/* Heading */}
            <div className='text-center flex flex-col gap-3'>
            <p className='text-xl'>Welcome to {company ? company: null} Employee&apos;s Page</p>
            <DatePage />

            <p className='py-4'>What Would you like to do today ?</p>
            </div>
          
            {/* Body */}

            <div className='px-6 flex justify-center items-center gap-3'>
                <Button>Onboarding</Button>
                <Button>Training</Button>
                <Button>Safety Training</Button>
                <Button>Knowledgebase</Button>
            </div>
           
        </div>

        

    </div>
  )
}

export default EmployeePageSettings