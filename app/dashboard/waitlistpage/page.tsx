"use client"
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Waitlist from '@/components/waitlistpage'
import React from 'react'

const WaitlistPage = () => {
  return (
    <>
    <Sheet>
        <SheetTrigger asChild>
            <Button className='bg-green-500 w-xl py-6 rounded-2xl'>
                JOIN NEWSLIST
            </Button>
        </SheetTrigger>

        <SheetContent side='right' className='bg-black'>
         <div>
            <Waitlist />
         </div>
        </SheetContent>
    </Sheet>
    </>
  )
}

export default WaitlistPage