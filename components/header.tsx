import Image from 'next/image'
import { Button } from './ui/button'
// import { PartnerSelectOption } from './partnerselectbox'
export const Header = ()=>{
    return (
        <div>

            <div className='flex flex-col w-full   md:justify-center lg:justify-center
            md:mt-8  lg:mt-8 
            items-center text-2xl 
            
             lg:flex lg:flex-row'>

            <div className='w-full'>
                <Image src='/images/man-and-woman-removebg-preview.png' 
                alt='couple' width={600} height={400} />
            </div>

            <div className='bg-white w-full     text-black 
            flex flex-col h-72 md:mr-5 lg:mr-5
            justify-center items-center gap-3
            text-muted-foreground  '>
                
                    <p className='text text-popover-foreground'>Appointment</p>
                    
                    <p>Find people in your Area</p>
                    <div className='flex flex-col md:flex-row lg:flex-row  
                    justify-center items-center  p-2 gap-3'>
                        <div>
                            <p>I am a</p>
                            </div>

                        {/* <div>
                        <PartnerSelectOption />
                        </div> */}
                        
                    </div>
                    <div>
                    <Button className='bg-pink bg-pink-600'>VIEW PROFILES</Button>
                    </div>
                </div>
                     
                <div>
                        
                    </div>
            </div>

            </div>
        
    )
}