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
            <Button className='w-full md:w-1/2'>
                Join Wailist
            </Button>
        </SheetTrigger>

        <SheetContent className='bg-black'>
         <div>
            <Waitlist />
         </div>
        </SheetContent>
    </Sheet>
    </>
  )
}

export default WaitlistPage