'use client'
import EmployeePageSettings from '@/components/employeeedit'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import React from 'react'
import { useState, useEffect } from 'react'

const EmployeePage = () => {

  const [showButtons, setShowButtons] = useState<boolean>(false)
  const [showOnboarding, setShowOnboarding] = useState<boolean>(false)
  const [showContent, setShowContent] = useState<boolean>(true)
  const [employeeName, setEmployeeName] = useState<string>('')
  

  const handleShowButtons = ()=>{
    setShowButtons(!showButtons)
  }

  const handleEmployeeName = (e: any)=>{
    e.preventDefault()
    if (employeeName !== null || employeeName === undefined || employeeName === 'undefined' ){
      localStorage.setItem('employeename', employeeName)
    }
  }

  const Idle = ()=>{
     return (
      <div className='flex flex-col justify-center items-center px-2'>
        <p>If you have been sent to this page, it means your company wants 
          you to improve on your skills. Make it count!</p>

        <p className='py-4 font-extrabold'>IMPORTANT!</p>
        <p>All your training activities will be captured and be 
          reported to the team in charge of the training. You are required to enter 
          your name in the form below before starting any training.</p>

          <form className='flex flex-col gap-2 py-4' onSubmit={handleEmployeeName}>
            
            <input 
            type='text' 
            placeholder='Enter full name' 
            name='employeeName'
            value={employeeName}
            onChange={(e)=>setEmployeeName(e.target.value)}
            className='text-black border border-black'
            required/>
            <Button type='submit'>Submit</Button>
          </form>
      </div>
     )
    
  }
  const handleOnboarding = ()=>{
    setShowOnboarding(true)
    setShowButtons(false)
    setShowContent(false)
  }

  return (
    <div>

      <div className='px-8'>
      <EmployeePageSettings />

      
      <div className='py-4'>
        <Button size='icon'
        onClick={handleShowButtons}>
        <MenuIcon />
        </Button>
      </div>
      

      {/* Show Buttons */}
      {showButtons ?
      <div className='py-4 flex flex-col gap-3 z-10'>
      <div>
        <Button
        onClick={handleOnboarding}
        >Onboarding</Button>
      </div>

      <div>
        <Button>General Training</Button>
      </div>

      <div>
        <Button>Safety Training</Button>
      </div>

      <div>
        <Button>Knowledgebase</Button>
      </div>
      </div>:null
     }

      {/* Content */}
      {!showContent ?
      <div>
      {/* Onboarding */}
      {showOnboarding ?
      <div className='flex justify-center items-center'>
       <p>No Onboarding task today</p>
      </div>:null 
      }
      </div>: <Idle />
     }
     {/* End of Show Content */}


      </div>

    </div> 
  )
}

export default EmployeePage