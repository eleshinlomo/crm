
// CLIENT CRUD

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
  // Client Delete
  export const deleteClient = async (clientid: string)=>{
  
    const sessionid = localStorage.getItem('sessionid')
  
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
  export const modifyClient = async (payload: ClientPayloadProps)=>{
  
    const sessionid = localStorage.getItem('sessionid')
     const {clientid} = payload
    if(!clientid) return
    try{
    
    const response: any = await fetch(`${BASE_URL}/modifyclient/`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
  
      },
      body: JSON.stringify(payload)
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


const BASE_URL: any = process.env.NEXT_PUBLIC_BASE_URL
export const fetchClientsData = async ()=>{
    const sessionid = localStorage.getItem('sessionid')
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