'use client'
import {useState} from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { userLogout } from '@/components/auth'
import { Company } from '@/components/urls'


const AdminNavButtons = () => {
    const [isAddingUser, setIsAddingUser] = useState<boolean>(false)
  return (
    <div className='flex flex-col lg:flex lg:flex-row  gap-2 px-2'>

    <Button className='rounded-2xl'><Link href='/'>Home</Link></Button>
    <Button className='rounded-2xl'><Link href={`/dashboard/dashboardpage`} >
      Dashboard</Link></Button>
    <Button className='rounded-2xl'>
      <Link href=''>Analytics</Link></Button>
    <Button className='rounded-2xl'>
      <Link href=''>Expenses</Link></Button>
      <Button className='rounded-2xl'>
      <Link href='/dashboard/emailsender'>Email Sender</Link></Button>
    <Button onClick={userLogout} className='rounded-2xl'>Logout</Button>
   
     
     
  
    </div>
    
  )
}

export default AdminNavButtons