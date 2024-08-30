'use client'
import {useState, useEffect} from 'react'
import Image from "next/image";
import { Container } from "./container";
import heroImg from "../public/images/crm_image.png";
import { Button } from "./ui/button";
import Link from "next/link";
import { AmazonLogo } from "./companies";
import { VerizonLogo } from "./companies";
import { MicrosoftLogo } from "./companies";
import { NetflixLogo } from "./companies";
import { SonyLogo } from "./companies";
import Typewriter from './typewriter';


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
      <Container className="flex flex-wrap">
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
            a start-up, our apps offer a 
            diverse range of AI tools offering the best client management experience.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              
            
            {isLoggedIn?
               <Link href='/dashboard/dashboardpage'>
              <Button className=" px-8 py-8 text-lg font-medium text-center text-white bg-blue-500 hover:bg-blue-500 hover:text-white rounded-2xl">
              DASHBOARD</Button>
            </Link>:
             <Link href='/dashboard/dashboardpage'>
              <Button className=" px-8 py-8 text-lg font-medium text-center text-white bg-blue-500 hover:bg-blue-500 hover:text-white rounded-2xl">
                GET STARTED</Button>
              </Link>
            }
              <Link href='https://imgbot.myafros.com'>
              <Button className=" px-8 py-8 text-lg font-medium text-center text-white bg-blue-500 hover:bg-blue-500 hover:text-white rounded-2xl">
                TRY FREE IMAGE</Button>
                </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-indigo-600">many</span>{" "}
            customers worldwide
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <AmazonLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <VerizonLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <MicrosoftLogo />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <NetflixLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <SonyLogo />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Hero

