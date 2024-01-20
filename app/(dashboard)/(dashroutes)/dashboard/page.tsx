"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowBigDown, ArrowBigRight, ArrowRight, EyeIcon, OptionIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Tools } from '@/components/tools';
import { Button } from '@/components/ui/button';
import Link from 'next/link'
import Waitlist from '@/components/waitlistpage';
import { Footer } from '@/components/footer';
import CreditPage from '@/components/creditpage';

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
    <div className='relative'>
      <div className="">

        <div className='text-center flex flex-col justify-center items-center'>
          <Waitlist />
        
        </div>

        <div className="mb-8 px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
            Complete Task Faster</h2>
          <p className=" font-light text-sm md:text-lg text-center">
            Complete your task Faster - Fixupe Ultra fast Solution
          </p>
        </div>

        {/* Start of Tools */}
        <div>
          
          <div className="px-4 md:px-32 ">
            {Tools.map((tool: any, index: any) => (
              <div key={index}>
                
                {/* Dashboard, CRM and Settings are directly forwarded to href */}
                  {tool.category === 'Dashboard' || 
                  tool.category === 'Home'? null:

                  <div className='flex flex-1 justify-between'>
                    <p className="text-center text-md px-4 py-4 
                    font-extrabold">
                  {tool.category}</p>
                  <Button size='icon'
                  onClick={() => handleToolClick(tool)}
                  >
                    <EyeIcon />
                  </Button>

                  
                  </div>
                }
                
                {selectedToolIndex === tool ?
                selectedToolIndex.tools.map((tool: any, index: any) => (
                  
                  <Card
                    key={index}
                    className='p-4 border-black/5 flex items-center
                     justify-between hover:shadow-md transition 
                     cursor-pointer '
                  >
                    
                    <div className="flex items-center gap-x-4">
                      <div className={cn(`w-p-2 w-fit rounded-md`, 
                      tool.bgColor)}>
                        <tool.icon className={cn('w-8 h-8', tool.color)} />
                      </div>
                      <div className="font-semibold">{tool.label}</div>
                    </div>
                    <Link href={tool.href}>
                    <Button size='icon'>
                    <ArrowRight className="" />
                    </Button>
                    </Link>
                    
                  </Card>
                )):null}
              </div>
            ))}
          </div>
             
        </div>
      </div>

    
    </div>
  );
};

export default DashboardPage;
