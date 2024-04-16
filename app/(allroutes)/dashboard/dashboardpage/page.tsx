"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowBigDown, ArrowBigRight, ArrowRight, EyeIcon, OptionIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import DashboardTools from '@/components/tools';
import { Button } from '@/components/ui/button';
import Link from 'next/link'
import FeedbackPage from '@/app/feedbackpage/page';
import WaitlistPage from '../waitlistpage/page';

interface DashboardPageProps{
  company: string
}

const DashboardPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedToolIndex, setSelectedToolIndex] = useState<any | null>();
  const [showTool, setShowTool] = useState(false)
  const router = useRouter();

  

  const handleToolClick = (tool: any) => {
    setSelectedToolIndex(tool);
    
    
  };

  return (
    <div className='relative bg-white text-black'>
      <div className="">

        <div className='text-center flex flex-col justify-center items-center'>
          {/* <MessageFromDev /> */}
          <div>
          
          <FeedbackPage />
          </div>


        
        </div>

        <div className="mb-8 px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            Complete Task Faster</h2>
          <p className=" font-light text-sm md:text-lg text-center">
            Fixupe project is a work in progress.
          </p>
          <p className=" font-light text-sm md:text-lg text-center">
            If you like what you see, please join our waitlist <WaitlistPage />
          </p>
        </div>

        {/* Start of Tools */}
        
          <DashboardTools />
             
        
      </div>
    </div>
  );
};

export default DashboardPage;
