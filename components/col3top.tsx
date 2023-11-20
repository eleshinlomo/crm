import Link from "next/link"
import { Button } from "./ui/button"

export const Col3Top = ()=>{
    return (
        <div>
            <div className="text-center grid grid-flow-row md:grid-cols-4 mx-5
            bg-white 
             text-black font-mono rounded-2xl md:rounded-full
             gap-5
             py-8 px-6 text-sm">
               
               {/* Col One */}
                <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Writing
                </p>
                <p className=" py-4 px-4">Leverage on powerful AI Tools to write faster
                and more efficiently. Fixupe got all the AI tools 
                you need to step up your game.
                </p>
                
                </div>

                 {/* Col Two */}
                <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Transcribing
                </p>
                <p className=" py-4 px-4">Our advance AI tools will transcribe your project at incredible 
                speed with high voice to text accuracy. Get started now</p>
                
                </div>

                 {/* Col3 */}
                <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Images
                </p>
                <p className=" py-4 px-4">
                Stop using stock photos. Many businesses are doing the same. Dare to be different and leverage 
                on our Image AI Tools.</p>
                
                </div>

                {/* Col4 */}
                <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Be Smart
                </p>
                <p className=" py-4 px-4">
                 Your competitors are already using AI to get ahead of the game. 
                 Do not be caught up in old fashion. Stay trendy and win more deals.
                 </p>
                
                </div>
            </div>

            <div className="">
                <Link href='/'>
                <Button className="my-6 ">Get Started</Button>
                </Link>
                </div>
        </div>
    )
}