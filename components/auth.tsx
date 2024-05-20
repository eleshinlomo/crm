// @ts-ignore

import Cookies from 'js-cookie'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import { Button } from './ui/button'

interface EmailLoginProps {
  email: string,
  password: string
}

const client_id = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
const GOOGLE_URL = process.env.NEXT_PUBLIC_GOOGLE_LOGIN_URL
const redirect_uri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI
const scope = process.env.NEXT_PUBLIC_GOOGLE_SCOPE
const response_type = process.env.NEXT_PUBLIC_GOOGLE_RESPONSE_TYPE
const state = process.env.NEXT_PUBLIC_GOOGLE_STATE
const access_type = process.env.NEXT_PUBLIC_GOOGLE_ACCESS_TYPE




// URLs
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL



   // Get Access Token
export const getAccessToken = async (code: any)=>{
  console.log({"Code found! Now sending for verification": code})
  const response: any = await fetch(`${BASE_URL}/getaccesstoken/`, {
    mode: 'cors',
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": 'application/json',
      "Authorization": `Bearer ${code}`
    }
  })
  const data = await response.json()

  if(!data) console.log("Endpoint call successful but No response code recieved from the server")
      console.log(data)
      return data
}
    


// Email Login
let data =  {
 email: '',
 password: ''
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



 

 




