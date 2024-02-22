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
  
    if(!sessionid) return null
    
      // Veirify sessionid
     const response: any = await fetch(`${BASE_URL}/loginchecker/`, {
       method: 'GET',
       mode: 'cors',
       credentials: 'include',
       headers: {
        'Content-Type': 'application/json',
        'sessionid': sessionid
       }
     })

     if(!response){
      
    throw new Error("No response from server")
  }else{
    if (response.ok){
    const data: any = await response.json()
    return data
  }else{
    return response.message.error
  }
 
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
    if (data.message.ok){
    console.log(data)
    localStorage.removeItem('username')
    localStorage.removeItem('userid')
    localStorage.removeItem('sessionid')
    localStorage.removeItem('credits')
    localStorage.removeItem('company')
    localStorage.removeItem('email')
    window.location.href=`/`
    return data.message.data
   }else{
    console.log(data.message.error)
    return data.message.error
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



 

 




