// @ts-ignore

// @ts-ignore
import Cookies from 'js-cookie'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'





export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL



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
export const getAccessToken = async (code: any)=>{
  console.log({"Code found! Now sending for verification": code})
  const response: any = await fetch(`${BASE_URL}/getaccesstoken/`, {
    mode: 'cors',
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": 'application/json',
      "Authorization": `Basic ${code}`
    }
  })
  const data = await response.json()

  if(!data) console.log("Endpoint call successful but No response code recieved from the server")
      console.log(data)
      return data
}
    
   

// Login
   export const userLogin = ()=>{
    const getAccessToken = localStorage.getItem('access_token')
    if(getAccessToken !== null){
    console.log({"user authorized": getAccessToken})
    return getAccessToken
  }else{
    return "You need to be logged in"
  }
  }

  // Logout
  export const userLogout = ()=>{
    localStorage.removeItem('access_token')
    const getAccessToken = localStorage.getItem('access_token')
    if(getAccessToken === null){
    console.log("You have successfully been logged out")
    window.location.href='/'
    }
  }



   // Get User Profile

   
   export const getUserProfile = async (accessToken: string | null, csrftoken: string | null)=>{
      

      const res = await fetch(`${BASE_URL}/userprofile/`, {
       mode: 'cors',
       method: 'GET',
       credentials: 'include',
       headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": `${csrftoken}`,
        "Authorization": `Bearer ${accessToken}`
       }
      })
      
          if (!res){
            throw new Error("Server error and userprofile not fetched")
          } 
          return await res.json()
      
    }

    // Get User Profile
   export const handleGoogleAuth = async (request: any)=>{
    const res = await fetch(`${BASE_URL}/handlegoogleauth/`, {
     mode: 'cors',
     credentials: 'include',
     headers: {
      "Content-Type": "application/json",
     }
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



 

 




