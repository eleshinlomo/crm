
import Image from 'next/image'
import { Button } from './ui/button'

export const NewNavBar = ()=>{
    return (
        <div>
            

            <div className='relative flex justify-between pt-5'>
                
                <div className='relative w-24 h-12 '>
                    <Image src='/logo.png' alt='logo' fill />
                </div>
                
                <div className='hidden md:flex md:pt-3'>
                <Button className='md:bg-blue-500 bg-black '>Get Started</Button>
                </div>
            </div>


        </div>
    )
}