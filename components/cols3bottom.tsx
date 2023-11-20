import Link from "next/link"
import { Button } from "./ui/button"

export const Col3Bottom = ()=>{
    return (
        <div>
            <div className="text-center  grid grid-flow-row md:grid-cols-3 gap-5
             bg-white py-8 px-5">
               
               {/* Col One */}
                <div>
                <p className="text-2xl font-extrabold text-black py-4 "> 
                Rated top 10 AIs 
                </p>
                <p className="text-black py-4 px-4"> Experience unmatched AI Solutions that cut across 
                multiple use-cases</p>
                <Button className="bg-black"   asChild>
                <Link href='' className="text text-blue-600 text-2xl py-4 ">
                Get Started
                </Link>
                </Button>
                </div>

                 {/* Col Two */}
                 <div>
                <p className="text-2xl font-extrabold text-black py-4 "> 
                Increase Productivity 20x
                </p>
                <p className="text-black py-4 px-4">We are constantly adding new AI tools
                 that solve real life problems</p>
                <Button className="bg-black"   asChild>
                <Link href='' className="text text-blue-600 text-2xl py-4 ">
                Get Started
                </Link>
                </Button>
                </div>

                 {/* Col3 */}
                 <div>
                <p className="text-2xl font-extrabold text-black py-4 "> 
                Increase revenue by 150%
                </p>
                <p className="text-black py-4 px-4">We provide a state-of-the-art leverage for 
                businesses and start-ups to scale fast</p>
                <Button className="bg-black"   asChild>
                <Link href='' className="text text-blue-600 text-2xl py-4 ">
                Get Started
                </Link>
                </Button>
                </div>

            </div>
        </div>
    )
}