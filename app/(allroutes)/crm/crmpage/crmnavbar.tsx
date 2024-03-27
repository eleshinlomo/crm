'use client'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import { userLogout } from '@/components/auth'
import {useState, useEffect} from 'react'
import { MenuIcon } from 'lucide-react'
import AdminNavButtons from './adminnavbuttons'

const CRMNavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className='relative'>


{/* Mobile */}
<Button size='icon' className='mx-2 lg:hidden' 
onClick={()=>isOpen ? setIsOpen(false): setIsOpen(true)}>
<MenuIcon />
</Button>
{isOpen?
          <div>

            <div className=' absolute lg:hidden bg-black text-white 
             flex flex-col
            py-2 z-50 mt-2 w-full'>
             <AdminNavButtons />
              </div>
            </div>:null
          }
      
{/* Desktop */}
    
    <div className='hidden lg:flex'>
    <AdminNavButtons />
     </div>
    </div>
  )
}

export default CRMNavBar