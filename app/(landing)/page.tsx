import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import { NewNavBar } from '@/components/newnavbar'

const page = () => {
  return (
    <div className='text-center'>
    
      <Button>
       <Link href='/dashboard'>Go to Dashboard</Link>
      </Button>

    </div>
  )
}

export default page