
const BASE_URL: any = process.env.NEXT_PUBLIC_BASE_URL
export const getClients = async ()=>{
    const sessionid = localStorage.getItem('sessionid')
    try{
    if(!sessionid) return
    const response: any = await fetch(`${BASE_URL}/getclients/`, {
         mode: 'cors',
         method: 'GET',
         headers: {
            'Content-Type':'application/json',
            'sessionid': sessionid
        }
        
    })
    if(!response) return "Server error"

    const data = await response.json()
    if(data){
        
        return data
    }else{
        return response.error
    }
}
catch(err){
    console.log(err)
}
}