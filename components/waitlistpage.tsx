import {useState, useEffect} from 'react'
import { BASE_URL } from './urls'
import { Button } from './ui/button'


const Waitlist = ()=>{

    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

const HandleEmailWaitlist = async (e:any)=>{
    
    try{
    e.preventDefault()
    const payload = {
      email
    }
     console.log(BASE_URL)
    const response: any = await fetch(`${BASE_URL}/waitlist/`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if(!response.ok) throw new Error("Problem with waitlist server")
    const data = await response.json()
    if (!data){
      setMessage('No response from server')
    }else{
      setMessage('Your email has been received')
    }
    setEmail('')
  }
  catch(err: any){
     setMessage(`"Error": ${err.message}`)
  }
  }
  
  
    return (

    <div>
      <div className='py-4 flex flex-col justify-center 
      items-center text-center text-black
       font-extrabold'>
  
  <p className='px-6  py-2 text-muted-foreground '>Please join waitlist to stay 
  informed when new tools are added.</p>
            <p className='text-blue-500 ml-6 '>{message}</p>
        <form className='px-6' onSubmit={HandleEmailWaitlist}>
          <input 
          className='border border-black px-1 text-center'
          value={email}
          name='email'
          placeholder='Enter your email'
          onChange={(e)=>setEmail(e.target.value)}
          type='email'
           required /><br/>
           <Button type='submit' className='mt-2 ' variant='default'>Submit</Button>
        </form>
      </div>
      </div>
    )
  

}

  export default Waitlist