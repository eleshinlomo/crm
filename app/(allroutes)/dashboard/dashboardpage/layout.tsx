

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Fixupe is a platform that provides Business Tools for a quick task completion',
}


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode,
  
}) {
  return (
    
    <div>
      
      <main className=' '>

        {children}
        </main>
    
    </div>
     
    
    
  )
}
