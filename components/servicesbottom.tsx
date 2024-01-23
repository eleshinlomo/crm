import Link from "next/link"
import { Button } from "./ui/button"

export const ServicesBottom = ()=>{
    return (
        <div className="flex flex-col justify-center items-center">

            <div className=" grid  grid-flow-row md:grid-cols-4
            bg-gray-900 text-white gap-5 font-mono
             py-8 px-4 md:px-44  text-lg mx-0">

              

                    {/* ColOne */}
                    <div className="text-center flex flex-col justify-center items-center">
                <p className="text-2xl font-extrabold py-4 text-blue-500 "> 
                Text Chat
                </p>
                <p className=" py-4 px-4 flex flex-wrap">
                 Convert chat with LLM to voice immediately. 
                 Ideal for creating voice-over foe video content 
                 or presentation slides.
                 </p>
                 <Button className="bg-blue-500">
                    <Link href='/textchat'>Try Now</Link>
                 </Button>
                
                </div>

                    {/* ColTwo */}
                <div className="text-center flex flex-col justify-center items-center">
                <p className="text-2xl font-extrabold py-4 text-red-500 "> 
                Voice Chat
                </p>
                <p className=" py-4  flex flex-wrap">
                 Our Visually Impaired friendly voice chat allows anyone to chat 
                 with LLM by just talking to their device saving a ton of time.
                 </p>
                 <Button className="bg-red-500">
                    <Link href='/voicechat'>Try Now</Link>
                 </Button>
                
                </div>

                {/* Col Three */}
                <div className="text-center flex flex-col justify-center items-center">
                <p className="text-2xl font-extrabold py-4 text-green-500 "> 
                Transcriber
                </p>
                <p className=" py-4 px-4 flex flex-wrap">Our advance transcriber will 
                save you a ton of time at meetings and conferences. Record, convert to 
                text, and share with your team.
                </p>
                <Button className="bg-green-500">
                    <Link href='/aitranscriber'>Try Now</Link>
                 </Button>
                </div>


                {/* Col Three */}
                <div className="text-center flex flex-col justify-center items-center">
                <p className="text-2xl font-extrabold py-4 "> 
                Voice Recorder
                </p>
                <p className=" py-4 px-4 flex flex-wrap">
                Capture your meetings, events on the go with crytal 
                clear Voice Recorder. You can Record and convert to 
                text in 1 minute.
                </p>
                <Button className="bg-gray-500">
                    <Link href='/voicerecorder'>Try Now</Link>
                 </Button>
                </div>
               
               {/* Col Four */}


                {/* <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Blog Writer
                </p>
                <p className=" py-4 px-4 flex flex-wrap">Leverage on powerful AI Tools to write faster
                and more efficiently. Fixupe has all the AI tools 
                you need to step up your game. 
                </p>
                <Button className="bg-green-700">
                    <Link href='/aiwriter'>Try Now</Link>
                 </Button>
                
                </div>

                 

                 {/* Col3 */}

                {/* <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Images
                </p>
                <p className=" py-4 px-4 flex flex-wrap">
                Stop using stock photos. Many businesses are doing the same. Dare to be different and leverage 
                on our Image AI Tools. See it yourself.</p>
                <Button className="bg-red-700">
                    <Link href='/'>Try Now</Link>
                 </Button>
                </div>  */}

            

                
            </div>

            
        </div>
    )
}