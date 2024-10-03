'use client'
import {useState, useEffect} from 'react'
import Image from "next/image";
import { Container } from "./container";
import heroImg from "../public/images/crm_image.png";
import { Button } from "./ui/button";
import Link from "next/link";
import { AmazonLogo } from "./clientlogos";
import { VerizonLogo } from "./clientlogos";
import { MicrosoftLogo } from "./clientlogos";
import { NetflixLogo } from "./clientlogos";
import { SonyLogo } from "./clientlogos";
import Typewriter from './typewriter';
import Barchart from './barchart';


interface HeroProps {
  isLoggedIn: boolean
}

const Hero = ({isLoggedIn}: HeroProps) => {

  const [typewriterText, setTypewriterText] = useState<string[]>([])

  useEffect(()=>{
    setTypewriterText([
      'Explore...',
      'Discover...',
      'Generate...',
      'Scale...'
    ])
  },[])

  return (
    <>
        <div className='w-full md:flex justify-between px-4'>
        <div className="flex items-center w-full lg:w-1/2 md:pl-4">
          <div className="max-w-2xl mb-8">
            <h1 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight
             xl:text-6xl xl:leading-tight dark:text-white">
              <Typewriter textarray={typewriterText} />
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Explore world class apps with integrated AI Agents. 
            On a mission to make software solutions accessible, intuitive, 
            and transformative for businesses. Whether you run an enterprise or 
            a start-up, explore  
            diverse range of tools offering the best solutions for business scaling.
            </p>

            <div className="flex flex-col justify-center items-center w-full md:items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              
            
            {isLoggedIn?
               <Link href='/dashboard/dashboardpage' className='w-full'>
              <Button className=" px-8 py-8 text-lg font-medium text-center text-white bg-blue-500 hover:bg-blue-500 hover:text-white rounded-2xl">
              DASHBOARD</Button>
            </Link>:
             <Link href='/dashboard/dashboardpage' className='w-full'>
              <Button className=" px-8 py-8 text-lg font-medium text-center text-white bg-blue-500 hover:bg-blue-500 hover:text-white rounded-2xl">
                GET STARTED</Button>
              </Link>
            }
              <Link href='https://imgbot.myafros.com' className='w-full'>
              <Button className=" px-8 py-8 text-lg font-medium text-center text-white bg-blue-500 hover:bg-blue-500 hover:text-white rounded-2xl">
                TRY FREE IMAGE</Button>
                </Link>
            </div>
          </div>
        </div>
        <div className="  mb-8 ">
          {/* <div className="h-full w-full">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div> */}

          <Barchart />
          
        </div>
        </div>
      
    </>
  );
}

export default Hero

