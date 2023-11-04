// @ts-ignore
import { useEffect } from "react"
// @ts-ignore
import Cookies from 'js-cookie'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL



// Get CSRF Token
export const getcsrfToken = async ()=>{

  try {
  const response = await fetch(`${BASE_URL}/getcsrftoken/`, {
    mode: 'cors',
    method: 'GET',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'}
  })
  if (!response) throw new Error("No csrf_token found")
  return await response.json()
    
   }

   catch(error) {
    console.log(error)
   }

  }
  


   // Get Access Token
export const getAccessToken = async ()=>{

  const response = await fetch(`${BASE_URL}/getaccesstoken/`, {
    mode: 'cors',
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  if (!response) throw new Error("No access_token found")
  return await response.json()
    
   }



   // Get User Profile

   
   export const getUserProfile = async (accessToken: string | null)=>{
      
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  // headers.append("X-CSRFToken", `${csrftoken}`);
  headers.append("Authorization", `Token ${accessToken}`);

      
      const res = await fetch(`${BASE_URL}/userprofile/`, {
       mode: 'cors',
       method: 'GET',
       credentials: 'include',
       headers: headers
      })
      
          if (!res){
            throw new Error("Server error and userprofile not fetched")
          } 
          return await res.json()
      
    }
   
   

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
//     })
//  }



 

 




