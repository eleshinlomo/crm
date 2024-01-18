import Link from "next/link"
import { Button } from "./ui/button"

export const ServicesBottom = ()=>{
    return (
        <div>
            <div className="text-center grid grid-row-flow md:grid-cols-4 
            bg-black
             text-white font-mono 
             gap-5
             py-8 px-6 place-items-center text-sm">


                    {/* ColOne */}
                    <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Voice Chat
                </p>
                <p className=" py-4 px-4 flex flex-wrap">
                 Save the day and browse through the internet, emails or 
                 your entire documents by just talking to your device.
                 </p>
                 <Button className="bg-blue-700">
                    <Link href='/audiochat'>Try Now</Link>
                 </Button>
                
                </div>

                {/* Col Two */}
                <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Transcriber
                </p>
                <p className=" py-4 px-4 flex flex-wrap">Our advance transcriber will 
                save you a ton of time at meetings and conferences. Record, convert to 
                text, and share with your team in 1 minute.
                </p>
                <Button className="bg-yellow-800">
                    <Link href='/aitranscriber'>Try Now</Link>
                 </Button>
                </div>
               
               {/* Col Three */}
                <div>
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
                <div>
                <p className="text-2xl font-extrabold py-4 "> 
                Images
                </p>
                <p className=" py-4 px-4 flex flex-wrap">
                Stop using stock photos. Many businesses are doing the same. Dare to be different and leverage 
                on our Image AI Tools. See it yourself.</p>
                <Button className="bg-red-700">
                    <Link href='/'>Try Now</Link>
                 </Button>
                </div>

            

                
            </div>

            
        </div>
    )
}