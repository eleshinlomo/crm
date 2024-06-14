
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import SigninLadingpage from './signinpage/signinlandingpage'

const UserNotLoggedPage = () =>{

return (

<div>
<div className='h-full pt-12 flex flex-col justify-center 
        items-center gap-3  border  font-extrabold'>
            
            
    <div className='relative h-12  w-16'>
    <Image src='/logos/logo.png' alt='logo' fill />
    </div>
    <p className='text-2xl'>Please Sign in</p>

    <div className='flex gap-5'>
    <div className='w-full'>
    <SigninLadingpage />
    </div>
        
    <Link href='/'>
    <Button variant='outline' size='lg' className='text-white bg-blue-500 rounded-2xl w-full'>
    Home
    </Button> 
    </Link>
    </div>


    <div className='relative w-72 h-72 md:w-96 md:h-96 mb-4'>
    <Image src='/images/image_guy.png' alt='ai girl pics' fill />
    </div>

    </div>
    </div>
        
        )
        }

export default UserNotLoggedPage