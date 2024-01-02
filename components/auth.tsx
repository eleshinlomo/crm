// @ts-ignore

// @ts-ignore
import Cookies from 'js-cookie'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'




// URLs
export const ALLAUTH_BASE_URL = process.env.NEXT_PUBLIC_ALLAUTH_BASE_URL
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
 



// Get CSRF Token
export const getcsrfToken = async ()=>{

  try {
  const response = await fetch(`${ALLAUTH_BASE_URL}}/getcsrftoken/`, {
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
  const response: any = await fetch(`${ALLAUTH_BASE_URL}/getaccesstoken/`, {
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
    localStorage.removeItem('username')
    window.location.href=`${ALLAUTH_BASE_URL}/accounts/logout/`
    }
  


    // Login Checker
   export const loginChecker = async ()=>{
    const res = await fetch(`${BASE_URL}/loginchecker/`, {
     mode: 'cors',
     credentials: 'include',
     headers: {
      "Content-Type": "application/json",
     }
    })
        if (!res){
          throw new Error("userprofile not fetched")
        } 
        const user = await res.json()
        if(user){
        console.log(user)
        const {username} = user.message
        if(username){
          localStorage.setItem('username', username)
        }
        return user
        }else{
          console.log("No user found")
          return
        }
      
        
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



 

 




