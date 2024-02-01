"use client"
import {useState, useEffect} from 'react'
import { BASE_URL } from '@/components/urls'
import { Button } from '@/components/ui/button'
import { FeedbackHandler } from '@/components/feedbackhandler'
import { Textarea } from '@/components/ui/textarea'


const FeedbackPage = ()=>{

    const [feedback, setFeedback] = useState<string>('')
    const [message, setMessage] = useState<string>('Please share your feedback about this project.')

const handleFeedback = async (e:any)=>{
    e.preventDefault()
    const response = await FeedbackHandler(e, feedback)
    if(response.ok){
    console.log(response)
    setMessage(response.message)
    }else{
        console.log(response.error)
    }
    setFeedback('')
  }
  
  
    return (

    <div>
      <div className='py-4 flex flex-col justify-center 
      items-center text-center text-black
       '>
  
 
            <p className='font-extrabold text-center px-6'>{message}</p>
        <form className='px-6' onSubmit={handleFeedback}>
          <Textarea
          className='border border-black px-1 text-start h-44 w-72'
          value={feedback}
          name='feedback'
          placeholder='Share your feedback'
          onChange={(e)=>setFeedback(e.target.value)}
           required /><br/>
           <Button type='submit' className='mt-2 ' variant='default'>
            Submit Feedback</Button>
        </form>
      </div>
      </div>
    )
  

}

  export default FeedbackPage