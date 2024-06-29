
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface UserNotLoggedPageProps {
  message: string | React.ReactNode
}

const UserNotLoggedPage = ({message}: UserNotLoggedPageProps) =>{

return (

<div>

<div className='w-full pt-12 flex flex-col justify-center items-center
    font-extrabold gap-4'>

  <p className='text-lg'>{message}</p>

    <div className='relative w-72 h-72 md:w-96 md:h-96 mb-4'>
    <Image src='/images/image_guy.png' alt='guy pics' fill />
    </div>

    </div>
    </div>
        
        )
        }

export default UserNotLoggedPage