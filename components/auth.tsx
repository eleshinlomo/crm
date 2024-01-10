// @ts-ignore

// @ts-ignore
import Cookies from 'js-cookie'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'


// URLs
export const ALLAUTH_BASE_URL = process.env.NEXT_PUBLIC_ALLAUTH_BASE_URL
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
 
//Hooks
import { setUsername } from './hooks'
import { setAnonymousUser } from './hooks'


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
    
   

// // Login
//    export const userLogin = ()=>{
//     const getAccessToken = localStorage.getItem('access_token')
//     if(getAccessToken !== null){
//     console.log({"user authorized": getAccessToken})
//     return getAccessToken
//   }else{
//     return "You need to be logged in"
//   }
//   }


// Email Login
export const emailLogin = async (data: any)=>{
try{
  const processPayload = await fetch(`${BASE_URL}/loginuser/`, {
      mode: 'cors',
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
  })

  const response: any = await processPayload.json()
  if(!response) {
   return "Server error! No response from server"
  }else{
  if(response){
  return response
  }else{
    return response
  }
}
  
}
catch(error: any){
console.log(error.error)
return error.error
}

}


 // Login Checker
 export const loginChecker =  ()=>{
  const getUserName = localStorage.getItem('username')
  const getUserId = localStorage.getItem('userid')
  
  if(getUserName && getUserId){

    const user = {
      "username": getUserName,
      "userid": getUserId
    }
    
    return user
  }else{
    const errorMessage = "No User found"
    console.log(errorMessage)
    return null
  }
    
}

export let verifiedUser = null


  // Logout
  export const userLogout = ()=>{
    localStorage.removeItem('username')
    localStorage.removeItem('userid')
    window.location.href=`/`
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



 

 




