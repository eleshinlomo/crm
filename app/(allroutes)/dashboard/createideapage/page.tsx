import React from 'react'
import Image from 'next/image'
import { IdeaForm } from './ideaform'

const IdeaPage = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center'>
        <div className='relative w-72 h-72'>
        <Image src='/images/idea1.png' alt='idea image' fill />
        </div>

        <IdeaForm />


        </div>
    </div>
  )
}

export default IdeaPage