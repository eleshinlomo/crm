"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowBigDown, ArrowBigRight, ArrowRight, EyeIcon, OptionIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Tools } from '@/components/tools';
import WaitlistPage from '@/components/waitlistpage';
import { Button } from '@/components/ui/button';
import Link from 'next/link'

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
    <div>
      <div className="mb-10">
        <div>
          <WaitlistPage />
        </div>
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center">Do everything with AI</h2>
          <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
            Complete your task with AI - Ultra fast AI Solution
          </p>
        </div>

        {/* Start of Tools */}
        <div>
          
          <div className="px-4 md:px-32 ">
            {Tools.map((tool: any, index: any) => (
              <div key={index}>
                
                  {tool.category === 'Dashboard' ? null :

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
                      <div className={cn(`w-p-2 w-fit rounded-md`, tool.bgColor)}>
                        <tool.icon className={cn('w-8 h-8', tool.color)} />
                      </div>
                      <div className="font-semibold">{tool.label}</div>
                    </div>
                    <Link href={tool.href}>
                    <Button size='icon'>
                    <ArrowRight className="w-5 h-5" />
                    </Button>
                    </Link>
                    
                  </Card>
                )):null}
              </div>
            ))}
          </div>
             
        </div>
      </div>

      <div className="relative w-full h-56">
        <Image src="/images/dark-3061610_1920.jpg" alt="random image" fill />
      </div>
    </div>
  );
};

export default DashboardPage;
