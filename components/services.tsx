import Link from "next/link"
import { Button } from "./ui/button"

export const Services = ()=>{
    return (
        <div>
            <div className="text-center grid grid-row-flow md:grid-cols-4 
            bg-black
             text-white font-mono rounded-2xl md:rounded-2xl
             gap-5
             py-8 px-6 place-items-center text-sm">


                    {/* ColOne */}
                    <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Voice Recorder 
                </p>
                <p className=" py-4 px-4 flex flex-wrap">
                 No need for note taking notes. Our Voice Recorder 
                 will record your meetings and transcribe so you 
                 can share with your team.
                 </p>
                 <Button>
                    <Link href='/voicerecorder'>Try Now</Link>
                 </Button>
                
                </div>

                {/* Col Two */}
                <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Transcribing
                </p>
                <p className=" py-4 px-4 flex flex-wrap">Our advance AI tool will transcribe your project at incredible 
                speed with high voice to text accuracy. Get started now</p>
                <Button>
                    <Link href='/aitranscriber'>Try Now</Link>
                 </Button>
                </div>
               
               {/* Col Three */}
                <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Writing
                </p>
                <p className=" py-4 px-4 flex flex-wrap">Leverage on powerful AI Tools to write faster
                and more efficiently. Fixupe got all the AI tools 
                you need to step up your game.
                </p>
                <Button>
                    <Link href='/aiwriter'>Try Now</Link>
                 </Button>
                
                </div>

                 

                 {/* Col3 */}
                <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Images
                </p>
                <p className=" py-4 px-4 flex flex-wrap">
                Stop using stock photos. Many businesses are doing the same. Dare to be different and leverage 
                on our Image AI Tools.</p>
                <Button>
                    <Link href='/'>Try Now</Link>
                 </Button>
                </div>

            

                
            </div>

            
        </div>
    )
}