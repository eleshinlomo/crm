import { BotIcon, ComputerIcon, MailPlusIcon, PiIcon } from "lucide-react"
import Image from 'next/image'

export const Hero = ()=>{
    return (
        <div>

            

           <div className="text-center lin
           leading-8 py-8 mt-16 flex flex-col md:justify-end md:items-end">
           <p className="  text-xl font-bold
           md:text-4xl w-auto ">
            Struggling to create a<br /> website? Not with us!
            </p>

            <p className= 'py-4 md:mr-16  text-xl font-bold'
           >
            Create a website in 10 minutes.
            
            </p>

            <div className=" flex flex-col justify-center items-center  gap-3 md:mr-10">
                <div className="flex gap-2">
                <BotIcon />
                <p className="text-center ">Used by 140,000 small business owners</p>
                </div>

                <div className="flex  gap-2">
                <PiIcon />
                <p className="text-center">Used by 140,000 small business owners</p>
                </div>

                <div className="flex  gap-2">
                <ComputerIcon />
                <p className="text-center ">
                    Free support
                </p>
                </div>
            </div>
           </div>
              
             

        </div>
    )
}