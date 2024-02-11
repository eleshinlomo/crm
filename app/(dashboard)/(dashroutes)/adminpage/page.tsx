"use client"
import {useState, useEffect} from 'react'
import { getAdminData } from '@/components/admindata'

const AdminPage = () => {

    const [users, setUsers] = useState<Array<string | null>>([])

    // Admin Data Handler
  useEffect(()=>{
    const handleAdminData = async ()=>{
       const response = await getAdminData()
       if (response.message.ok){
        console.log(response)
        setUsers(response.message.data)
       }else{
        console.log(response.message)
       }
    }
    handleAdminData()
  }, [])
  return (
    <div>

        <div className='w-full px-4'>
            
        <div className='flex font-extrabold gap-6'>
        <p>Id</p>
        <p>Username</p>
        <p>Email</p>
        <p>Is Staff</p>
        </div>

        <div>
            <p className='text-center font-extrabold'>No of Users: 
            {users.length > 0 ? users.length: null}</p>
        </div>
        {users?.map((user: any, index)=>
        
        <div key={index} className='flex gap-6'>

        {/* UserId */}
        <div className='border border-blue-500'>
         <p>{user.id}</p>
         </div>

         {/* Firstname */}
         <div className='border border-blue-500'>
         <p>{user.first_name}</p>
         </div>
         
         {/* Username */}
         <div>
         <p className='border border-blue-500'>{user.username[0].toUpperCase() + user.username.slice(1)}</p>
         </div>

          {/* Email */}
          <div>
         <p className='border border-blue-500'>{user.email}</p>
         </div>



         {/* Is Staff */}
         <div>
         <p>{user.is_superuser}</p>
         </div>




        </div>
        )}
    </div>
    </div>
  )
}

export default AdminPage