"use client"
import {useState, useEffect} from 'react'
import { getClients } from '@/components/(data)/crmdata'
import {useRouter} from 'next/navigation'
import { Button } from '@/components/ui/button'
import { adminDeleteUser } from '@/components/crudfunctionsadmin'
import { adminModifyUser } from '@/components/crudfunctionsadmin'
import { AddClientPage } from './addclientpage'
import Link from 'next/link'
import CRMNavBar from './crmnavbar'


interface OnUserAdded{
  onUserAdded: () => void;
}



const AdminPage = () => {

    const [clients, setClients] = useState<Array<any | null>>([])
    const [isAddingUser, setIsAddingUser] = useState<boolean>(false)
    const [modify, setModify] = useState<boolean>(false)
    const [isModifying, setIsModifying] = useState<boolean>(false)
    const [isDeleting, setIsDeleting] = useState<boolean>(false)
    const [id, setId] = useState<string | any>('')
    const [message, setMessage] = useState<string | any>(null)
    const [username, setUsername] = useState<string | any>(null)
  

interface UserPayload {
  userid: string,
  username: string,
  company: string
}



    // Router
    const router: any = useRouter()

    // Get clients Handler
    const handleGetClients = async ()=>{
       const response = await getClients()
       if (response.ok){

        const userClients = await response.data
        if (userClients.length > 0){
        setClients(userClients)
        }else{
        console.log(userClients.message)
        setMessage(userClients.message)
        }
       }else{
        console.log(response.error)
       }
      }
    

  useEffect(()=>{
    handleGetClients()
  }, [])


  const handleActionChange = (e: any, userId: any) => {
    const { value } = e.target;
    setClients(prevClients =>
      prevClients.map(client => {
        if (client.id === userId) {
          return { 
            ...client, 
            action: value, 
            isModifying: value === 'modify'
          };
        }

        if (client.id === userId) {
          return { 
            ...client, 
            action: value, 
            isModifying: value === 'delete'
          };
        }
       
        return client
      })
    );
  };

  // Modify User Handler
  const handleModify = async (userId: any) => {
  setIsModifying(true)
  const user = clients.find((user) => user.id === userId); // Find the user object with the given userId
  if (!user) return; // Return if user not found
    const {id, username, company} = user 

    const payload: UserPayload = {
        userid:id,
        username,
        company
    }
    const response: any = await adminModifyUser(payload)
     setIsModifying(false)
     window.location.reload()
  };

  // Input Change Handler
  const handleInputChange = (value: any, field: any, userId: any) => {
    setClients((prevClients) =>
      prevClients.map((client) => {
        if (client.id === userId) {
          return {
            ...client,
            [field]: value,
          };
        }
        return client;
      })
    );
  };
  
  // Handle User Delete
  const handleDelete = async (userid: any) => {
    setIsDeleting(true)
    const response = await adminDeleteUser(userid)
    setIsDeleting(false)
    window.location.reload()
  };
 

  return (
    <div className=''>

   <p className="text-center bg-clip-text text-2xl py-4 font-extrabold">
     BUSINESS DEVELOPMENT PAGE</p>
   <div className="text-center bg-clip-text text-xl py-1 font-extrabold">
    {clients.length > 0 ? 
    <p>Total Clients:
    {clients.length}</p>
    :null
    }</div>
    
    {/* Top Buttons */}
    
    <div className='lg:flex  py-2 gap-2'>
    <CRMNavBar />
     </div>
    
    {/* Message */}

    <p className='text-center text-xl'>{message}</p>
     
    {/* Table */}
    <div className="overflow-x-auto table-container ">
      <table className="table-auto w-full border-collapse border">
        <thead>
          <tr className="text-white">
          <th className="px-4 py-2 bg-gray-800 border">Action</th>
            <th className="px-4 py-2 bg-gray-800 border">ID</th>
            <th className="px-4 py-2 bg-gray-800 border">Company</th>
            <th className="px-4 py-2 bg-gray-800 border">Contact</th>
            <th className="px-4 py-2 bg-gray-800 border">Email</th>
            <th className="px-4 py-2 bg-gray-800 border">Mobile</th>
            <th className="px-4 py-2 bg-gray-800 border">Phone</th>
            <th className="px-4 py-2 bg-gray-800 border">Follow up</th>
            <th className="px-4 py-2 bg-gray-800 border">Address</th>
            <th className="px-4 py-2 bg-gray-800 border">Contract Rate</th>
            <th className="px-4 py-2 bg-gray-800 border">Contract Doc</th>
          
          </tr>
        </thead>

        {/* Table Body */}
        
        {clients?.map((client: any, index) => (
          <tbody key={index}>
            {client ?
              <tr>
              <td>
            <select
                  className="px-2 border rounded bg-gray-800 text-white"
                  value={client.action}
                  onChange={(e) => handleActionChange(e, client.id)}
                >
                  <option value="">Select Action</option>
                  <option value="modify">Modify</option>
                  <option value="delete">Delete</option>
                  <option value="delete">Send Email</option>
                </select>

    {/* Modify Button */}
    {client.action === "modify" ?
    <Button
      className=" w-full py-2 px-2 bg-blue-500 hover:bg-blue-500 text-white rounded"
      onClick={() =>handleModify(client.id)}
    >
      {isModifying ? 'Saving...' : 'Save'}
    </Button>: null
  }


{/* // Delete Button */}
  { client.action === 'delete' ?
<Button
className=" w-full py-2 px-2 bg-red-500 hover:bg-red-500 text-white rounded"
onClick={() => handleDelete(client.id)}
>
{isDeleting ? 'Deleting...' : 'Confirm'}
</Button> : null

  }

</td>
              
            {/* UserId */}
            <td className="px-2 py-2 border">{client.id}</td>
            {/* Username */}
            <td className="px-2 py-2 border">
            {client.action ?
              <input value={client.company} 
              onChange={(e)=>handleInputChange(e.target.value, 'username', client.id)}
              className={client.action === 'modify' ? 'bg-blue-500' : 'bg-red-500'}
              />
              : <div>{client.company}</div>
              }
              </td>
              <td className="px-4 py-2 border">
              {/* Company */}
              {client.action ?
              <input value={client.contact} 
              onChange={(e)=>handleInputChange(e.target.value, 'company', client.id)}
              className={client.action === 'modify' ? 'bg-blue-500' : 'bg-red-500'}
              />
              : <div>{client.contact}</div>
              }
              </td>
              <td className="px-4 py-2 border">
              {client.action ?
              <input value={client.email} 
              className={client.action === 'modify' ? 'bg-blue-500' :
               'bg-red-500'}
              />
              : <div>{client.email}</div>
              }
              </td>

              {/* Mobile */}
              <td className="px-4 py-2 border">
              {client.action ?
              <input value={client.mobile} 
              className={client.action === 'modify' ? 'bg-blue-500' : 
              'bg-red-500'}
              />
              : <div>{client.mobile}</div>
              }
              </td>

              {/* Phone */}
              <td className="px-4 py-2 border">
              {client.action ?
              <input value={client.phone} 
              className={client.action === 'modify' ? 'bg-blue-500' : 
              'bg-red-500'}
              />
              : <div>{client.phone}</div>
              }
              </td>

              {/* Follow up */}
              <td className="px-4 py-2 border">
              {client.action ?
              <input value={client.followup} 
              className={client.action === 'modify' ? 'bg-blue-500' : 
              'bg-red-500'}
              />
              : <div>{client.followup}</div>
              }
              </td>

              {/* Address */}
              <td className="px-4 py-2 border">
              {client.action ?
              <input value={client.address} 
              className={client.action === 'modify' ? 'bg-blue-500' : 
              'bg-red-500'}
              />
              : <div>{client.address}</div>
              }
              </td>

              {/* Service fee */}
              <td className="px-4 py-2 border">
              {client.action ?
              <input value={client.servicefee} 
              className={client.action === 'modify' ? 'bg-blue-500' : 
              'bg-red-500'}
              />
              : <div>{client.servicefee}</div>
              }
              </td>

              {/* Service Doc */}
              <td className="px-4 py-2 border">
              {client.action ?
              <input value={client.servicedoc} 
              className={client.action === 'modify' ? 'bg-blue-500' : 
              'bg-red-500'}
              />
              : <div>{client.servicedoc}</div>
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