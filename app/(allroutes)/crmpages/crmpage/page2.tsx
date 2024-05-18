"use client"
import {useState, useEffect} from 'react'
import {useRouter} from 'next/navigation'
import { Button } from '@/components/ui/button'
import { deleteClient } from '@/components/crudfunctionsadmin'
import { modifyClient } from '@/components/crudfunctionsadmin'
import Link from 'next/link'
import CRMNavBar from './crmnavbar'
import { EmailPopup } from '@/components/emailerpop'
import { getClients } from './clientfunctions'


interface OnUserAdded{
  onUserAdded: () => void;
}



const ClientPage = () => {

    const [clients, setClients] = useState<Array<any | null>>([])
    const [isAddingUser, setIsAddingUser] = useState<boolean>(false)
    const [modify, setModify] = useState<boolean>(false)
    const [isModifying, setIsModifying] = useState<boolean>(false)
    const [isDeleting, setIsDeleting] = useState<boolean>(false)
    const [message, setMessage] = useState<string | any>(null)
    const [username, setUsername] = useState<string | any>(null)
    const [clientFetched, setClientFetched] = useState<boolean>(false)
  

interface ClientPayloadProps {
  clientid: string,
  company: string,
  contact: string,
  email: string,
  mobile: string,
  phone: string,
  followup: string,
  address: string,
  servicefee: string,
  contractdoc: string
}



    // Router
    const router: any = useRouter()

    // Get clients Handler
    const handleGetClients = async ()=>{
       const response = await getClients()
       if (response.ok){

        const listOfClients = await response.data
        setClients(listOfClients)
        setClientFetched(true)
        
       }else{
        console.log(response.error)
        setMessage(response.error)
       }
      }
    

  useEffect(()=>{
    handleGetClients()
  }, [])


  const handleActionChange = (e: any, clientId: any) => {
    const { value } = e.target;
    setClients(prevClients =>
      prevClients.map(client => {

        // Is modifying
        if (client.id === clientId) {
          return { 
            ...client, 
            action: value, 
            isModifying: value === 'modify'
          };
        }
         
        // Is deleting
        if (client.id === clientId) {
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

  // Modify Client Handler
  const handleModify = async (clientId: any) => {
  setIsModifying(true)
  const client = clients.find((client) => client.id === clientId); 
  if (!client) return; // Return if client not found
    const {
      id,
      company,
      contact,
      email,
      mobile,
      phone,
      followup,
      address,
      servicefee,
      contractdoc

    } = client
    const tempdoc = 'Undefined'
    const payload: ClientPayloadProps = {
        clientid:id,
        company,
        contact,
        email,
        mobile,
        phone,
        followup,
        address,
        servicefee,
        contractdoc: tempdoc
    }
    const response: any = await modifyClient(payload)
    console.log(response)
     setIsModifying(false)
     window.location.reload()
     
  };

  // Input Change Handler
  const handleInputChange = (value: any, field: any, clientId: any) => {
    setClients((prevClients) =>
      prevClients.map((client) => {
        if (client.id === clientId) {
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
    const response = await deleteClient(userid)
    setIsDeleting(false)
    window.location.reload()
  };
 

  return (
    <div className=''>

   

    <div>
   <div className="text-center bg-clip-text text-xl py-1 font-extrabold">
    <CRMNavBar />
    {clients && clients.length > 0 ? 
    <p>Total Clients:
    {clients.length}</p>
    :null
    }</div>
    
   
    
    {/* Message */}

    <p className='text-center text-xl'>{message}</p>
     
    
    
      
    <div className="overflow-x-auto table-container ">

    {/* Table */}
    {clients && clients.length > 0 ?
    <div>

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
            <th className="px-4 py-2 bg-gray-800 border">Service Fee</th>
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
                  <option value="email">Email</option>
                </select>

    {/* Modify Button */}
    {client.action === "modify" ?
    <Button size='sm'
      className=" w-full px-2 bg-blue-500 hover:bg-blue-500 text-white
       rounded-2xl"
      onClick={() =>handleModify(client.id)}
    >
      {isModifying ? 'Saving...' : 'Save'}
    </Button>: null
  }


{/* // Delete Button */}
  { client.action === 'delete' ?
<Button size='sm'
className=" w-full  px-2 bg-red-500 hover:bg-red-500 text-white rounded-2xl"
onClick={() => handleDelete(client.id)}
>
{isDeleting ? 'Deleting...' : 'Confirm'}
</Button> : null

  }

  {/* // Email Button */}
  { client.action === 'email' ?

<EmailPopup  /> 
: null
  }

</td>
              
            {/* UserId */}
            <td className="px-2 py-2 border">{client.id}</td>

              {/* Company */}
              <td className="px-4 py-2 border">
              {client.action ?
              <input value={client.company} 
              onChange={(e)=>handleInputChange(e.target.value, 'company', client.id)}
              className={client.action === 'modify' ? 'bg-blue-500' : 
              client.action === 'delete' ? 'bg-red-500 text-white' : 'bg-black text-white'}
              />
              : <div>{client.company}</div>
              }
              </td>

              {/* Contact */}
              <td className="px-4 py-2 border">
              {client.action ?
              <input value={client.contact} 
              onChange={(e)=>handleInputChange(e.target.value, 'contact', client.id)}
              className={client.action === 'modify' ? 'bg-blue-500' : 
              client.action === 'delete' ? 'bg-red-500 text-white' : 'bg-black text-white'}
              />
              : <div>{client.contact}</div>
              }
              </td>
             
              {/* Email */}
              <td className="px-4 py-2 border">
              {client.action ?
              <input value={client.email} 
              onChange={(e)=>handleInputChange(e.target.value, 'email', client.id)}
              className={client.action === 'modify' ? 'bg-blue-500' : 
              client.action === 'delete' ? 'bg-red-500 text-white' : 'bg-black text-white'}
              />
              : <div>{client.email}</div>
              }
              </td>

              
              {/* Mobile */}
              <td className="px-4 py-2 border">
              {client.action ?
              <input value={client.mobile} 
              onChange={(e)=>handleInputChange(e.target.value, 'mobile', client.id)}
              className={client.action === 'modify' ? 'bg-blue-500' : 
              client.action === 'delete' ? 'bg-red-500 text-white' : 'bg-black text-white'}
              />
              : <div>{client.mobile}</div>
              }
              </td>

               
              {/* Phone */}
              <td className="px-4 py-2 border">
              {client.action ?
              <input value={client.phone} 
              onChange={(e)=>handleInputChange(e.target.value, 'phone', client.id)}
              className={client.action === 'modify' ? 'bg-blue-500' : 
              client.action === 'delete' ? 'bg-red-500 text-white' : 'bg-black text-white'}
              />
              : <div>{client.phone}</div>
              }
              </td>

              
              {/* Followup */}
              <td className="px-4 py-2 border">
              {client.action ?
              <input value={client.followup} 
              onChange={(e)=>handleInputChange(e.target.value, 'followup', client.id)}
              className={client.action === 'modify' ? 'bg-blue-500' : 
              client.action === 'delete' ? 'bg-red-500 text-white' : 'bg-black text-white'}
              />
              : <div>{client.followup}</div>
              }
              </td>

              
              {/* Address */}
              <td className="px-4 py-2 border">
              {client.action ?
              <input value={client.address} 
              onChange={(e)=>handleInputChange(e.target.value, 'address', client.id)}
              className={client.action === 'modify' ? 'bg-blue-500' : 
              client.action === 'delete' ? 'bg-red-500 text-white' : 'bg-black text-white'}
              />
              : <div>{client.address}</div>
              }
              </td>

              

              {/* Contract Rate */}
              <td className="px-4 py-2 border">
              {client.action ?
              <input value={client.servicefee} 
              onChange={(e)=>handleInputChange(e.target.value, 'servicefee', client.id)}
              className={client.action === 'modify' ? 'bg-blue-500' : 
              client.action === 'delete' ? 'bg-red-500 text-white' : 'bg-black text-white'}
              />
              : <div>{client.servicefee}</div>
              }
              </td>

              {/* Service Doc */}
              <td className="px-4 py-2 border">
              {client.action ?
              <input value={client.servicedoc} 
              className={client.action === 'modify' ? 'bg-blue-500' : 
              client.action === 'delete' ? 'bg-red-500 text-white' : 'bg-black text-white'} type='file'
              />
              : <div>{client.servicedoc}</div>
              }
              </td>
              
             </tr>: null}

        </tbody>
        ))}

      </table>

      </div>: 
      <div className='text-center font-extrabold text-lg'>
        <p>You have not added any Client</p>
        
      </div>
        }
      

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
    </div>
  );
}

export default ClientPage