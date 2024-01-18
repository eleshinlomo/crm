
export const BASE_URL = 'https://api.mtn.com/v1'

export const MTNAPIs = async ()=>{

    try{
    const response = await fetch(BASE_URL, {
        mode: 'cors',
        headers: {'CONTENT-TYPE': 'application/json'},
        credentials: 'include'
    })

    const data = await response.json()

    if (data){
        console.log(data)
    }
}

catch(error){
  console.log(error)
}
} 

const MTN_TOKEN_BASE_URL = 'https://api.mtn.com/v1/oauth/access_token'


export const getMTNUserToken = async ()=>{

    try{
    const response = await fetch(MTN_TOKEN_BASE_URL, {
        mode: 'cors',
        headers: {'CONTENT-TYPE': 'application/json'},
        credentials: 'include'
    })

    const data = await response.json()

    if (data){
        console.log(data)
    }
}

catch(error){
  console.log(error)
}
} 