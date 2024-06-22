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

export interface AuthTokenProp {
  authCode: string | null | 'undefined'
}

export interface LoginCheckerProps {
  sessionid: string | null;
  accessToken: string | null;
}




// URLs
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET
const AUTH_USER_REDIRECT_URL = process.env.NEXT_PUBLIC_AUTH_USER_REDIRECT_URL


const clientId = `${CLIENT_ID}`;
const redirectUri = `${AUTH_USER_REDIRECT_URL}`;
const scope = 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.metadata.readonly';
const responseType = 'code';

// Get Google Code URL
export const googleAuthCodeUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

   

// Get Access Token
export const getGoogleAccessToken = async (authCode: string)=>{

  const google_params = {

    client_id: `${CLIENT_ID}`,
    client_secret: `${CLIENT_SECRET}`,
    redirect_uri: `${AUTH_USER_REDIRECT_URL}`,
    grant_type: 'authorization_code',
    code: authCode,
    state: 'pass-through value'
  
  }

  try{
  
  const response: any = await fetch(`https://oauth2.googleapis.com/token`, {
    method: 'POST',
    headers: {
      "Content-Type": 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(google_params).toString(),
  })
 
  if (!response.ok) {
    console.log("Error response", response);
    throw new Error(`Error: ${response.statusText}`);
  }

  const data = await response.json();
  return data;

  
}
catch (error) {
  console.error("Server error", error);
  return null;
}
}


// Get Google User Info
export const getGoogleUserInfo = async (accessToken: string) => {
  if(!accessToken) return
  try {
    const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log("Error fetching user info", errorData);
      throw new Error(`Error: ${response.statusText}`);
    }

    const userInfo = await response.json();
    return userInfo;
  } catch (error) {
    console.error("Error fetching user info", error);
    return null;
  }
};



    

// Register user with email
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
  console.log('Server error', error)
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


// Email user login checker
const emailUserChecker = async (sessionid: string | null)=>{
  if(sessionid && sessionid !==null){
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
}

}else{
  return 'User sessionid not found'
}

}

// Google user login checker
const googleUserChecker = (accessToken: string | null)=>{
  if(accessToken && accessToken !==null){
  const data = localStorage.getItem('username')
  return data
  }else{
    return 'Google access token not found'
  }
}

 // General Login Checker
 export const loginChecker =  async ({sessionid, accessToken}: LoginCheckerProps)=>{
  let response: {[key:string]: any} | null = {}
  if(sessionid){
   const emailUser = await emailUserChecker(sessionid)
   response['emailUser'] = emailUser
  }
  if (accessToken){
  const googleUser = googleUserChecker(accessToken)
  response['googleUser'] = googleUser
}
  
return response
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
    localStorage.removeItem('accessToken')
    window.location.href=`/`
    return data
   }else{
    console.log(response.error)
    return response
   }
    
    }







   
  

 
  


    

   



 

 




