"use client"
import {useState, useEffect} from 'react'
import { getAllUsers } from '@/components/(data)/admindata'
import {useRouter} from 'next/navigation'
import { Button } from '@/components/ui/button'
import { adminDeleteUser } from '@/components/crudfunctionsadmin'
import { adminModifyUser } from '@/components/crudfunctionsadmin'
import { AddUserPage } from '../adduserpage'
import Link from 'next/link'
import AdminNavBar from '../adminnavbar'


interface OnUserAdded{
  onUserAdded: () => void;
}


const AdminPage = () => {

    const [users, setUsers] = useState<Array<any | null>>([])
    const [isAddingUser, setIsAddingUser] = useState<boolean>(false)
    const [modify, setModify] = useState<boolean>(false)
    const [isModifying, setIsModifying] = useState<boolean>(false)
    const [isDeleting, setIsDeleting] = useState<boolean>(false)
    const [id, setId] = useState<string | any>('')
    const [username, setUsername] = useState<string | any>(null)
    const [reloadComponent, setReloadComponent] = useState<boolean>(false)

interface UserPayload {
  userid: string,
  username: string,
  company: string
}



    // Router
    const router: any = useRouter()

    // Admin Data Handler
  
    const adminData = async ()=>{

       const response = await getAllUsers()
       if (response.message.ok){
        console.log(response)
        setUsers(response.message.data)

       }else{
        console.log(response.message)
       }
      }
    

  useEffect(()=>{
    adminData()
  }, [])


  const handleActionChange = (e: any, userId: any) => {
    const { value } = e.target;
    setUsers(prevUsers =>
      prevUsers.map(user => {
        if (user.id === userId) {
          return { 
            ...user, 
            action: value, 
            isModifying: value === 'modify'
          };
        }

        if (user.id === userId) {
          return { 
            ...user, 
            action: value, 
            isModifying: value === 'delete'
          };
        }
       
        return user
      })
    );
  };

  // Modify User Handler
  const handleModify = async (userId: any) => {
  setIsModifying(true)
  const user = users.find((user) => user.id === userId); // Find the user object with the given userId
  if (!user) return; // Return if user not found
    const {id, username, company} = user 

    const payload: UserPayload = {
        userid:id,
        username,
        company
    }
    const response: any = await adminModifyUser(payload)
     console.log(response)
     setIsModifying(false)
     window.location.reload()
  };

  // Input Change Handler
  const handleInputChange = (value: any, field: any, userId: any) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            [field]: value,
          };
        }
        return user;
      })
    );
  };
  
  // Handle User Delete
  const handleDelete = async (userid: any) => {
    setIsDeleting(true)
    const response = await adminDeleteUser(userid)
    console.log(response)
    setIsDeleting(false)
    window.location.reload()
  };
 

  return (
    <div className=''>

   <p className="text-center bg-clip-text text-2xl py-4 font-extrabold">
    ADMIN ANALYTICS PAGE</p>
    
    {/* Top Buttons */}
    
    <div className='lg:flex  py-2 gap-2'>
    <AdminNavBar />
    {/* Add User */}

    
     
     </div>
    
     
    {/* Table */}
    <div className="overflow-x-auto table-container ">
      <table className="table-auto w-full border-collapse border">
        <thead>
          <tr className="text-white">
          <th className="px-4 py-2 bg-gray-800 border">Action</th>
            <th className="px-4 py-2 bg-gray-800 border">ID</th>
            <th className="px-4 py-2 bg-gray-800 border">Username</th>
            <th className="px-4 py-2 bg-gray-800 border">Company</th>
            <th className="px-4 py-2 bg-gray-800 border">Email</th>
            <th className="px-4 py-2 bg-gray-800 border">Plan</th>
            <th className="px-4 py-2 bg-gray-800 border">Last Login</th>
            <th className="px-4 py-2 bg-gray-800 border">Date Joined</th>
            <th className="px-4 py-2 bg-gray-800 border">Super User</th>
            <th className="px-4 py-2 bg-gray-800 border">Appsource</th>
          
          </tr>
        </thead>

        {/* Table Body */}
        
        {users?.map((user: any, index) => (
          <tbody key={index}>
            {user ?
              <tr>
              <td>
            <select
                  className="px-2 border rounded bg-gray-800 text-white"
                  value={user.action}
                  onChange={(e) => handleActionChange(e, user.id)}
                >
                  <option value="">Select Action</option>
                  <option value="modify">Modify</option>
                  <option value="delete">Delete</option>
                </select>

    {/* Modify Button */}
    {user.action === "modify" ?
    <Button
      className=" w-full py-2 px-2 bg-blue-500 hover:bg-blue-500 text-white rounded"
      onClick={() =>handleModify(user.id)}
    >
      {isModifying ? 'Saving...' : 'Save'}
    </Button>: null
  }


{/* // Delete Button */}
  { user.action === 'delete' ?
<Button
className=" w-full py-2 px-2 bg-red-500 hover:bg-red-500 text-white rounded"
onClick={() => handleDelete(user.id)}
>
{isDeleting ? 'Deleting...' : 'Confirm'}
</Button> : null

  }

</td>
              
            {/* UserId */}
            <td className="px-2 py-2 border">{user.id}</td>
            {/* Username */}
            <td className="px-2 py-2 border">
            {user.action ?
              <input value={user.username} 
              onChange={(e)=>handleInputChange(e.target.value, 'username', user.id)}
              className={user.action === 'modify' ? 'bg-blue-500' : 'bg-red-500'}
              />
              : <div>{user.username}</div>
              }
              </td>
              <td className="px-4 py-2 border">
              {/* Company */}
              {user.action ?
              <input value={user.company} 
              onChange={(e)=>handleInputChange(e.target.value, 'company', user.id)}
              className={user.action === 'modify' ? 'bg-blue-500' : 'bg-red-500'}
              />
              : <div>{user.company}</div>
              }
              </td>
              <td className="px-4 py-2 border">
              {user.action ?
              <input value={user.email} 
              className={user.action === 'modify' ? 'bg-blue-500' :
               'bg-red-500'}
              />
              : <div>{user.email}</div>
              }
              </td>
              <td className="px-4 py-2 border">
              {/* Plan */}
              {user.action ?
              <input value={user.plan} 
              className={user.action === 'modify' ? 'bg-blue-500' : 
              'bg-red-500'}
              />
              : <div>{user.plan}</div>
              }
              </td>
              
              {/* Last Login */}
              <td className="px-4 py-2 border">
              {user.action ?
              <input value={user.last_login} 
              className={user.action === 'modify' ? 'bg-blue-500' : 
              'bg-red-500'}
              />
              : <div>{user.last_login}</div>
              }
              </td>
              
              {/* Date Joined */}
              <td className="px-4 py-2 border">
              {user.action ?
              <input value={user.date_joined} 
              className={user.action === 'modify' ? 'bg-blue-500' : 
              'bg-red-500'}
              />
              : <div>{user.date_joined}</div>
              }
              </td>

              {/* Super User */}
              <td className="px-4 py-2 border">
              {user.action ?
              <input value={user.is_superuser} 
              className={user.action === 'modify' ? 'bg-blue-500' : 
              'bg-red-500'}
              />
              : <div>{user.is_superuser}</div>
              }
              </td>

              {/* App Source */}
              <td className="px-4 py-2 border">
              {user.action ?
              <input value={user.usersource} 
              className={user.action === 'modify' ? 'bg-blue-500' : 
              'bg-red-500'}
              />
              : <div>{user.usersource}</div>
             }
              </td>
             </tr>: null}

        </tbody>
        ))}

      </table>

{/* Custom scrollbar */}
<style jsx>{`
  .table-container {
    position: relative;
    overflow-x: auto;
  }

  .table-scroll {
    position: sticky;
    top: 0;
    z-index: 999; /* Adjust z-index as needed */
    overflow-y: scroll;
    max-height: 100vh; /* Adjust max-height as needed */
  }

  .table-scroll::-webkit-scrollbar {
    width: 10px; /* Adjust width as needed */
  }

  .table-scroll::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  .table-scroll::-webkit-scrollbar-thumb {
    background: #728FCE;
    border-radius: 4px;
  }

  .table-scroll::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`}</style>

    </div>
    </div>
  );
}

export default AdminPage