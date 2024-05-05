"use client"
import {useState, useEffect} from 'react'
import { BASE_URL } from '@/components/urls'
import { Button } from '@/components/ui/button'
import { SupportMessageHandler } from '@/components/supportmessagehandler' 
import { Textarea } from '@/components/ui/textarea'
import HomeNavBar from '@/components/homenavbar'
import Footer from '@/components/footer'
import { Input } from '@/components/ui/input'


const ContactPage = ()=>{

    const [emailBody, setEmailBody] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [emailSubject, setEmailSubject] = useState<string>('Message from Fixupe Customer')
    const [message, setMessage] = useState<string>('Please send a message to us and we aim to respond within few hours')
    const [isFeedback, setIsFeedback] = useState<boolean>(false)

const handleFeedback = async (e:any)=>{
    try{
    e.preventDefault()
    const payload = {
      email, 
      emailSubject,
      emailBody}
    const response = await SupportMessageHandler(e, payload)
    if(response.ok){
    setMessage(response.message)
    }else{
        console.log(response.error)
    }
    setEmailBody('')
    setEmail('')
}
catch(err){
    console.log(err)
    setMessage('Feedback not sent')
}finally{
    setEmailBody('')
}
  }
  
  const handleIsFeedback = ()=>{
    setIsFeedback(!isFeedback)
  }
  
    return (

    <div className=''>
      <div className=' flex flex-col justify-center 
      items-center text-center text-black'>
        <HomeNavBar />

        <p className='mt-16 font-extrabold px-4'>Send a message to support</p>
          
          <div className='relative bg-black h-72 w-72  mt-24 md:mt-8 mb-4 rounded-2xl '>
            <p className='font-mono text-center px-6 text-white py-3'>
                {message}</p>
        <form className='flex flex-col gap-2 px-6 absolute z-10  top-24 right-0 left-5 my-3' 
        onSubmit={handleFeedback}>
          <Input placeholder='Enter email' value={email} name='email' type='email'
          onChange={(e)=>setEmail(e.target.value)}
           />
          {/* Email Subject */}
          <Input  value={emailSubject} name='emailSubject' type='hidden'
           onChange={(e)=>setEmailSubject(e.target.value)}
          />

            {/* Email Body */}
          <Textarea
          className='border border-black px-1 text-start '
          value={emailBody}
          name='emailBody'
          placeholder='Enter your message here'
          onChange={(e)=>setEmailBody(e.target.value)}
           required />
           <Button type='submit' className=' ' variant='default'>
            Submit Message</Button>
        </form>
        </div>
      </div>

      <Footer />
      </div>
    )
  

}

  export default ContactPage