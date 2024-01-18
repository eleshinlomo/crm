
import Link from "next/link"
import { Button } from "./ui/button"
import { BotIcon, ComputerIcon, DatabaseIcon, FileImageIcon } from "lucide-react"

export const ServicesTop = ()=>{
    return (
        <div>
            <div className="text-center grid grid-row-flow md:grid-cols-4 
            bg-black
             text-white font-mono 
             gap-5
             py-8 px-6 place-items-center text-sm">


                    {/* ColOne */}
                    <div>
                <div className="flex flex-col justify-center items-center text-2xl">
                <p className=" font-extrabold py-4 "> 
                CUSTOMIZED CHATBOT
                </p>
                <BotIcon className="w-12 h-12 text-blue-700" />
                </div>
                <p className=" py-4 px-4 flex flex-wrap">
                 Build your own chatbot in 5mins.
                 Have your employees and customers 
                 explore your company&apos;s knowledgebase with ease.
                 </p>
                 <Button className="bg-blue-700">
                    <Link href='/audiochat'>Try Now</Link>
                 </Button>
                
                </div>

                {/* Col Two */}
                <div>
                <div className="flex flex-col justify-center items-center text-2xl">
                <p className="text-2xl font-extrabold py-4 "> 
                DATASET GENERATOR
                </p>
                <DatabaseIcon className="w-12 h-12 text-yellow-700" />
                </div>
                <p className=" py-4 px-4 flex flex-wrap">
                You can build efficient dataset 
                using our pltform or run campaigns on Fixupe to get 
                real data from people.</p>
                <Button className="bg-yellow-700">
                    <Link href='/aitranscriber'>Try Now</Link>
                 </Button>
                </div>
               
               {/* Col Three */}
                <div>
                <div className="flex flex-col justify-center items-center text-2xl">
                <p className="font-extrabold py-4 "> 
                CUSTOMIZED SLM
                </p>
                <ComputerIcon className="w-12 h-12 text-green-700" />
                </div>
                <p className=" py-4 px-4 flex flex-wrap">Small Language Models are
                 top notch, inexpensive, faster, and get the job done. 
                 Get your SLM ruuning on Fixupe. 
                </p>
                <Button className="bg-green-700">
                    <Link href='/aiwriter'>Try Now</Link>
                 </Button>
                
                </div>

                 {/* Col3 */}
                <div>
                <div className="flex flex-col justify-center items-center text-2xl">
                <p className="text-2xl font-extrabold py-4 "> 
                VIRTUAL ASSISTANT
                </p>
                <FileImageIcon className="w-12 h-12 text-red-700" />
                </div>
                <p className=" py-4 px-4 flex flex-wrap">
                Get a Virtual Assistant that runs your business 24/7 even 
                when you sleep or go on vacation.</p>
                <Button className="bg-red-700">
                    <Link href='/'>Try Now</Link>
                 </Button>
                </div>

            

                
            </div>

            
        </div>
    )
}