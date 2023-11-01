import Link from "next/link"
import { Button } from "./ui/button"

export const Cta2Block = ()=>{
    return (
        <div>
            <div className="text-center flex flex-col md:flex-row lg:flex:row gap-5
             bg-white py-8 px-2">

                <div>
                <p className="text-3xl text-black py-4"> 
                You decide what you are looking for
                </p>
                <p className="text-black py-4">Chat, date or make new friendships? Give yourself a chance, choose
                     who you like and get in touch! 
                    More than half of our members have an Appointment in the first week... 
                    Good luck!</p>
                <Button variant='link'   asChild>
                <Link href='' className="text text-pink-800 text-2xl py-4 ">
                Become a Free Member
                </Link>
                </Button>
                </div>

                <div>
                <p className="text-3xl text-black py-4 "> 
                Reach out to people like you
                </p>
                <p className="text-black py-4 text-center">
                Connect with people from your area. Do not think about it any longer and join the social phenomenon of the moment. Every day thousands of 
                people like you come together looking for different types of relationships.</p>
                <Button variant='link'   asChild>
                <Link href='' className="text text-pink-800 text-2xl py-4 ">
                Become a Free Member
                </Link>
                </Button>
                </div>

            </div>
        </div>
    )
}