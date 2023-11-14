

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Fixupe is a platform that provides AI Tools for task completion',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <div>
      
      <main className=' ">
'>
        {children}
        </main>
    
    </div>
     
    
    
  )
}
