import React from 'react'
import Image from 'next/image'

const MessageFromDev = () => {

  return (
    <div>
        

        <div className='px-4 w-full'>
        <div className='md:flex  justify-center'>


            <div className='text-start flex flex-col gap-4 font-sans w-full md:w-1/2'>
         <p className='font-extrabold text-center'>MESSAGE FROM THE DEVELOPER: WE NEED YOUR FEEDBACK</p>
        <p>
            I will indeed like to thank the communtiy for the
             overwhelming support on the Fixupe platform. After working 
             in the corporate world for years, I figured out some 
             repetitive tasks like converting files pdf to word, making slides for presentation,
             writing business content, etc often reduce productivity as these task take a good 
             chunk of time from our word day, I then decided to build 
             a platform that will use modern technologies to solve common business 
             tasks so we all can stay productive</p>

             <p>
                Considering the fact that I am a Solo Developer working 
                on this project some of these features may not be coming as fast as you would expect.
                I am working hard to ensure that all the tools 
                available on Fixupe are tested and atleast do 
                what they are meant to do. Lots of exciting tools coming on Fixupe but then, I need your help...
             </p>
             <p>Oluwaseun Olatunji</p>
             </div>

             </div>

             <p className='font-extrabold text-center py-4'>SHARE YOUR FEEDBACK ABOUT THE FIXUPE PLATFORM</p>
             </div>
    </div>
  )
}

export default MessageFromDev