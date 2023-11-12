import Image from 'next/image'

export const Hero = ()=>{
    return (
        <div>

            <div className='flex flex-col justify-center items-center text-center py-8 px-4'>
            <div className='relative w-96 h-72'>
                <Image src='/images/girl10.png' alt='hero image' fill />
            </div>
            <p className='px-12 w-1/2 font-thin'>Welcome to Fixupe. My name is Jennifer and myself 
                and the rest of the team will be happy to assist you on this site. 
                The Fred the chatbot will handle everything you need 
                to know navigating this site. Even if we do not have what you want, 
                Fred will sure refer you to the right resource anywhere on the internet</p>
            </div>
        </div>
    )
}