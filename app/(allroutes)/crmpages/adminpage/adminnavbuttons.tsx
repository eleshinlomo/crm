'use client'
import {useState} from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { userLogout } from '@/components/auth'
import { AddUserPage } from './adduserpage'
import { Company } from '@/components/urls'

const AdminNavButtons = () => {
    const [isAddingUser, setIsAddingUser] = useState<boolean>(false)
  return (
    <div className='flex flex-col lg:flex lg:flex-row gap-2 px-2'>
    <Button className='rounded-2xl'><Link href='/'>Home</Link></Button>
    <Button className='rounded-2xl'><Link href={`/dashboard/dashboardpage`} >
      Dashboard</Link></Button>
    <Button className='rounded-2xl'><Link href='/crm/adminpage'>Contractors</Link></Button>
    <Button className='rounded-2xl'><Link href='/crm/crmpage'>Clients</Link></Button>
    <Button className='rounded-2xl'><Link href='/crm/adminpage/adminanalyticspage'>Analytics</Link></Button>
    <Button className='rounded-2xl'><Link href='/crm/adminpage/adminexpensespage'>Expenses</Link></Button>
    <Button onClick={userLogout} className='rounded-2xl'>Logout</Button>
    {/* Add Contractor */}
    {isAddingUser ?
     <div className=''>
    <Button onClick={(e)=>setIsAddingUser(false)} 
    className='rounded-2xl w-full bg-red-500 hover:bg-red-500'>Close</Button>
     <AddUserPage />
     </div>:
     <div>
      <Button onClick={(e)=>setIsAddingUser(true)}
       className='rounded-2xl w-full'>Add Contractor</Button>
      </div>  
     }
    </div>
  )
}

export default AdminNavButtons