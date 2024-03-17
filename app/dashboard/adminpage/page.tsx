"use client"
import {useState, useEffect} from 'react'
import { getAdminData } from '@/components/admindata'
import {useRouter} from 'next/navigation'
import { Button } from '@/components/ui/button'
import { adminDeleteUser } from '@/components/deletefunctions'
import { AddUserPage } from '@/components/adduserpage'


const AdminPage = () => {

    const [users, setUsers] = useState<Array<any | null>>([])
    const [isAddingUser, setIsAddingUser] = useState<boolean>(false)
    const [modify, setModify] = useState<boolean>(false)
    const [id, setId] = useState<string | any>('')
    const [username, setUsername] = useState<string | any>('')

    // Router
    const router: any = useRouter()

    // Admin Data Handler
  
    const adminData = async ()=>{

       const response = await getAdminData()
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
      prevUsers.map(user =>
        user.id === userId ? { ...user, action: value } : user
      )
    );
  };

  const handleModify = (id: any) => {
    // Implement modify logic here
    
  };

  const handleDelete = async (userid: any) => {
    // Implement delete logic here
    const response = await adminDeleteUser(userid)
    console.log(response)
    window.location.reload()
  };
 

  return (
    <div>

   <p className="text-center bg-clip-text text-2xl py-4 font-extrabold">ADMIN PAGE</p>
   <div className="text-center bg-clip-text text-xl py-1 font-extrabold">
    {users.length > 0 ? 
    <p>Total Users:
    {users.length}</p>
    :null
    }</div>

    {/* Add User */}
    <div className='flex flex-col justify-center items-center py-2'>
    {isAddingUser ? 
     
     <div>
    <Button onClick={(e)=>setIsAddingUser(false)}>Close</Button>
     <AddUserPage />
     </div>:
     <div>
      <Button onClick={(e)=>setIsAddingUser(true)}>Add User</Button>
      </div>
     }
     </div>
    
     

    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border">
        <thead>
          <tr className="text-white">
          <th className="px-4 py-2 bg-gray-800 border">Action</th>
            <th className="px-4 py-2 bg-gray-800 border">ID</th>
            <th className="px-4 py-2 bg-gray-800 border">Username</th>
            <th className="px-4 py-2 bg-gray-800 border">Company</th>
            <th className="px-4 py-2 bg-gray-800 border">Email</th>
            <th className="px-4 py-2 bg-gray-800 border">Plan</th>
          
          </tr>
        </thead>
        
        {users?.map((user: any, index) => (

          
          <tbody key={index}>

            {/* Modify State */}
            {modify ?
            <tr>
              
              <td>
            <select
                  className="p-2 border rounded bg-gray-800 text-white"
                  value={user.action}
                  onChange={(e) => handleActionChange(e, user.id)}
                >
                  <option value="">Select Action</option>
                  <option value="modify">Modify</option>
                  <option value="delete">Delete</option>
                </select>

                {user.action === "modify" && (
    <Button
      className=" w-full py-2 bg-blue-500 hover:bg-blue-500 text-white rounded"
      onClick={() =>handleModify(user.id)}
    >
      Save
    </Button>
  )}
  {user.action === "delete" && (
    <Button
      className=" w-full py-2 bg-red-500 hover:bg-red-500 text-white rounded"
      onClick={() => handleDelete(user.id)}
    >
      Confirm
    </Button>
  )}
              </td>
              
              
              <td className="px-4 py-2 border">{user.id}</td>
            <td className="px-4 py-2 border">
              <input value={user.username} onChange={(e)=>e.target.value}/>
              </td>
              <td className="px-4 py-2 border">
              <input value={user.company} onChange={(e)=>e.target.value}/>
              </td>
              <td className="px-4 py-2 border">
              <input value={user.email} onChange={(e)=>e.target.value}/>
              </td>
              <td className="px-4 py-2 border">
              <input value={user.plan} onChange={(e)=>e.target.value}/>
              </td>
  
            </tr>:

            // Default state
            <tr>
              
            <td>
          <select
                className="p-2 border rounded bg-gray-800 text-white w-32"
                value={user.action}
                onChange={(e) => {
                  setModify(true)
                  handleActionChange(e, user.id)}}
              >
                <option value="">Select Action</option>
                <option value="modify">Modify</option>
                <option value="delete">Delete</option>
              </select>

              {user.action === "modify" && (
  <Button
    className=" w-32 py-2 bg-blue-500 hover:bg-blue-500 text-white rounded"
    onClick={() => handleModify(user.id)}
  >
    Update
  </Button>
)}
{user.action === "delete" && (
  <Button
    className=" w-32 py-2 bg-red-500 hover:bg-red-500 text-white rounded"
    onClick={() => handleDelete(user.id)}
  >
    Confirm
  </Button>
)}
            </td>
            
            
            <td className="px-4 py-2 border">{user.id}</td>
            <td className="px-4 py-2 border">{user.username}</td>
            <td className="px-4 py-2 border">{user.company}</td>
            <td className="px-4 py-2 border">{user.email}</td>
            <td className="px-4 py-2 border">{user.plan}</td>

          </tr>
            }
            
          </tbody>
        
        ))}
        {/* End of Mapping */}
        
      </table>

      {/* Custom scrollbar */}
      <style jsx>{`
        ::-webkit-scrollbar {
          width: 4px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #728FCE;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
    </div>
  );
}

export default AdminPage