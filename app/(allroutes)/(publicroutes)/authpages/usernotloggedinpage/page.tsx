
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import SigninLadingpage from '../signinpage/signinlandingpage'
import HomeNavBar from '@/components/homenavbar'

const UserNotLoggedPage = () =>{

return (

<div>
<HomeNavBar />
<div className='w-full pt-12 flex flex-col justify-center items-center
    font-extrabold gap-4'>

  <p className='text-lg'>Please sign in</p>

    <div className='relative w-72 h-72 md:w-96 md:h-96 mb-4'>
    <Image src='/images/image_guy.png' alt='ai girl pics' fill />
    </div>

    </div>
    </div>
        
        )
        }

export default UserNotLoggedPage