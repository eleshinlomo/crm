
// CLIENT CRUD

interface ClientPayloadProps {
  company: string,
  contact: string,
  mobile: string,
  phone: string,
  followup: string,
  address: string,
  servicefee: string,
  contractdoc: string,
  }


const BASE_URL: any = process.env.NEXT_PUBLIC_BASE_URL
const payload = {
  company: "",
  contact: "",
  mobile: "",
  phone: "",
  followup: "",
  address: "",
  servicefee: "",
  contractdoc: "",
}

// Get sessionId
const getSessionid = ()=>{
  if (typeof window !== 'undefined'){
  const sessionid: string | null = localStorage.getItem('sessionid')
  return sessionid
}else{
  throw new Error('Window is undefined')
}
}

// Fetch Client Data
export const getClients = async ()=>{
    const sessionid = getSessionid()
    try{
    if(!sessionid) return
    const response: any = await fetch(`${BASE_URL}/getclients/`, {
         mode: 'cors',
         method: 'GET',
         headers: {
            'Content-Type':'application/json',
            'sessionid': sessionid
        }
        
    })
    if(!response) return "Server error"

    const data = await response.json()
    if(data){
        return data
    }else{
        return response.error
    }
}
catch(err){
    console.log(err)
}
}


  // Client Delete
  export const deleteClient = async (clientid: string)=>{
  
    if(!clientid) return
    try{
    
    const response: any = await fetch(`${BASE_URL}/deleteclient/`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
  
      },
      body: JSON.stringify({clientid})
    })
    if(!response)throw new Error("No response from server")
    const dataResponse = await response.json()
    if(dataResponse){
        return dataResponse
    }else{
      console.log(dataResponse.error)
      return dataResponse.error
    }
  }
  catch(err: any){
    console.log(err)
  }
  }
  
  
  //   Client Modify
  export const modifyClient = async (clientId: string)=>{
  
    const sessionid = localStorage.getItem('sessionid')
    if (!sessionid || sessionid === 'undefined' || sessionid === null) return console.error('sessionid not found')
    if(!clientId) return
    try{
    
    const response: any = await fetch(`${BASE_URL}/modifyclient/`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
  
      },
      body: JSON.stringify(clientId)
    })
    if(!response)throw new Error("No response from server")
    const dataResponse = await response.json()
    if(dataResponse){
        return dataResponse
    }else{
      console.log(dataResponse.error)
      return dataResponse.error
    }
  }
  catch(err: any){
    console.log(err)
  }
  }
  

  // Add Client
  export const addClient = async (payload: ClientPayloadProps) => {
  try{
  const sessionid = getSessionid()
  if (!sessionid || sessionid === 'undefined' || sessionid === null) return
  const response = await fetch(`${BASE_URL}/registerclient/`, {
    mode: 'cors',
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "sessionid": sessionid
    },
    body: JSON.stringify(payload)
})
if (!response) return
const data: any = response.json()
if (data.ok){
  return data
}else {
  console.log(data.error)
  return data.error
}
  }
  catch(err){
    console.error(err)
  }
  }


