

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Image Generator',
  description: 'Image Page',
}


export default function ImagePageLayout({
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
