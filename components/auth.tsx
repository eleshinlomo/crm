// @ts-ignore


interface EmailLoginProps {
  email: string,
  password: string
}

interface RegisterUserProps {
  
  username: string;
  email: string;
  password: string;
  usersource: string;
  company: string;
}

export interface GoogleAccessParamsProps {
  client_id: string;
  redirect_uri: string;
  response_type: string;
  scope: string;
  include_granted_scopes: string;
  state: string;
}





// URLs
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const GOOGLE_ACCESS_TOKEN_URL = process.env.NEXT_PUBLIC_GOOGLE_ACCESS_TOKEN_URL
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID


const google_params : GoogleAccessParamsProps = {

  client_id: `${CLIENT_ID}`,
  redirect_uri: 'https://crm.myafros.com',
  response_type: 'token',
  scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
  include_granted_scopes: 'true',
  state: 'pass-through value'

}

   // Get Access Token
export const getGoogleAccessToken = async ()=>{
  console.log({"Googles params": google_params})
  const response: any = await fetch(`${GOOGLE_ACCESS_TOKEN_URL}`, {
    mode: 'cors',
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": 'application/json',
    },
    body: JSON.stringify(google_params)
  })
  const data = await response.json()

  if(!data) console.log("Server error", response)
      console.log(data)
      return data
}
    


export const registerUserWithEmail = async (data: RegisterUserProps)=>{
  try{
    const processPayload = await fetch(`${BASE_URL}/registeruser/`, {
        mode: 'cors',
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
  
    const response: any = await processPayload.json()
    if(!response) {
      return {"error": "No response from server"}
     
    }else{
    return response
  }
    
  }
  catch(error: any){
  console.log(error.message.error)
  return null
  
  }
  
  }


export const emailLogin = async (data: EmailLoginProps)=>{
try{
  const processPayload = await fetch(`${BASE_URL}/loginuser/`, {
      mode: 'cors',
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
  })

  const response: any = await processPayload.json()
  if(!response) {
    return {"error": "No response from server"}
   
  }else{
  return response
}
  
}
catch(error: any){
console.log(error.message.error)
return null

}

}


 // Login Checker
 export const loginChecker =  async (sessionid: string)=>{
  const response: any = await fetch(`${BASE_URL}/loginchecker/`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'sessionid': sessionid
    },
      
  })

  if (!response) throw new Error('Server not responding')
  const data: any = await response.json()
  if (data.ok){
      return data
  }else{
  return response
  }
  
}

    

  // Logout
  export const userLogout = async ()=>{

    const response: any = await fetch(`${BASE_URL}/logoutapi/`, {
      mode: 'cors',
      method: 'POST',
      headers: {'Content-Type': 'application/json'}

    })
    if (! response) throw new Error('Server error')
    const data = await response.json()
    if (data.ok){
    console.log(data)
    localStorage.removeItem('username')
    localStorage.removeItem('userid')
    localStorage.removeItem('sessionid')
    localStorage.removeItem('credits')
    localStorage.removeItem('company')
    localStorage.removeItem('email')
    window.location.href=`/`
    return data
   }else{
    console.log(response.error)
    return response
   }
    
    }



// Google auth
export const googleLogin = async () => {``
  try {
    const response = await fetch(`${BASE_URL}/googlelogin/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
      credentials: 'include', // Include credentials for CORS request
    });

    if (!response.ok) {
      // Handle non-successful responses here
      console.error('Error:', response.status, response.statusText);
      return null;
    }

    const data: any = await response.json();
    console.log(data);
    return data; // Return the data if needed
  } catch (error: any) {
    console.error('Error:', error.message);
    return null;
  }
};



   
  

 
  


    

   
   

// export const handleLogout = async ()=>{
   
//     await fetch(`${BASE_URL}/accounts/logout/`, {
//      mode: 'cors',
//      method: 'POST',
//      credentials: 'include',
//      headers: {"Content-Type": 'application/json'}
//     })
//     .then((res)=>{
//        if(!res) throw new Error("No response from server")
//        return res.json()
//     })
//     .then((data)=>{
//      console.log(data)
//     }



 

 




