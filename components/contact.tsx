import FeedbackPage from '@/app/feedbackpage/page'
import Image from 'next/image'

export const Contact = () => {
  return (
    <div>

<div className='mt-12 text-center flex flex-col justify-center items-center 
px-6 text-black'>
                            <p className='font-extrabold py-8'>CONTACT PAGE</p>

                            
                            <p className='flex flex-wrap text-muted-foreground'>
                            Thanks for for wanting to reach out.</p>
                            <p className='flex flex-wrap'>Please send a mail to mgrsconcept@gmail.com</p>
                            
                            <p>or</p>
                            <FeedbackPage />
                            
                            <div className='relative w-72  h-72'>
                                <Image src='/boyfriend.gif' alt='a man&apos;s picture' fill />
                            </div>
                            </div>

                        </div>
    
  )
}

