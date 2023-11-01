// @ts-ignore
import { useEffect } from "react"
// @ts-ignore
import Cookies from 'js-cookie'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL


export const getCookies = ()=>{
  const csrfToken = Cookies.get('csrftoken')
  return csrfToken
}



// Check User Authentication
export const authChecker = async ()=>{

  const response = await fetch(`${BASE_URL}/getgoogletokens/`, {
    mode: 'cors',
    method: 'GET',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'}
  })
  if (!response) throw new Error("No access_token found")
  return await response.json()

  //  const user = localStorage.getItem('user_token')
  // //  console.log(user)
    
   }


   export const getAccessToken = async (initialAccessToken: any) => {
    const csrftoken = getCookies();
    console.log(`This is csrftoken ${csrftoken}`);
    const response = await fetch(`${BASE_URL}/gettoken/`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            'Authorization': `Bearer ${initialAccessToken}`,
            'X-CSRFToken': csrftoken,
        },
    });

    if (!response) throw new Error("No accessToken received from the server");

    // Parse the response as JSON
    const tokenData = await response.json();

    // Access the access_token and refresh_token from the JSON response
    const access_token = tokenData.access_token;
    const refresh_token = tokenData.refresh_token;

    // Now you can use access_token and refresh_token as needed in your frontend code
    console.log(`Access Token: ${access_token}`);
    console.log(`Refresh Token: ${refresh_token}`);

    return tokenData;
};


   // Get User Profile
   export const getUserProfile = async ()=>{
  
      const res = await fetch(`${BASE_URL}/userprofile/`, {
       mode: 'cors',
       method: 'GET',
       credentials: 'include',
       headers: {"Content-Type": 'application/json'}
      })
      
          if (!res) throw new Error("Server error and userprofile not fetched")
          return await res.json()
      
    }
   
   

export const handleLogout = async ()=>{
   
    await fetch(`${BASE_URL}/accounts/logout/`, {
     mode: 'cors',
     method: 'POST',
     credentials: 'include',
     headers: {"Content-Type": 'application/json'}
    })
    .then((res)=>{
       if(!res) throw new Error("No response from server")
       return res.json()
    })
    .then((data)=>{
     console.log(data)
    })
 }



 

 




