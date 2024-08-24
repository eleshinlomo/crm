
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Writer',
  description: 'AI Writing page Page',
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
