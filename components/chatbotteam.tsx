import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

export const ChatbotTeamPage = ()=>{

    const Chatbots = [

        {
            chatbotname: "Teema",
            role: 'General Questions',
            info: "Answers general questions on all topis",
            image: '/images/girl1.png',
            route: '/general',
            button: 'Chat'
        },

        {
            chatbotname: "Enoch",
            role: 'Code Writer',
            info: "Answers general questions on all topis",
            image: '/images/coder.png',
            route: '/code',
            button: 'Generate'
        },

        {
            chatbotname: "Eleshin",
            role: 'Image Generator',
            info: "Answers general questions on all topis",
            image: '/images/image_guy.png',
            route: '/image',
            button: 'Generate'
        },

        {
            chatbotname: "Emerald",
            role: 'AI Writer',
            info: "You intimate AI excapades",
            image: '/images/girl2.png',
            route: '/aiwriter',
            button: 'Chat'
        },
        
       
    ]
    return (
        <div>


<div className='py-4 text-center '>
    <p className='leading-8 py-2 text-2xl font-extrabold'>MEET OUR AI TEAM</p>
   
    
</div>

<div className='flex flex-col md:flex-row lg:flex-row
         py-2 px-5 gap-2 justify-center items-center bg-white'>
            
          {
            Chatbots.map((chatbot, index)=>

            <div key={index} className=''>
         <div className='h-72 w-72 md:w-72 lg:w-72 rounded-lg shadow-2xl  relative'>
            <Image src={chatbot.image} alt='member profile' fill  />  
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-l text-black'>Name: {chatbot.chatbotname}</p>
            <p className='text-l text-black'>Role: {chatbot.role}</p>
            {/* <p className='text-l text-black'>Project Info: {team.info}</p>  */}
            {/* <Button className=' text-lg w-full h-full'>
                <Link href={chatbot.route}>{chatbot.button}</Link>
            </Button> */}



            </div>

            
            </div>
            
    
            )
         } 

         
          

         </div>
        </div>
    )
}