
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: 'Voice Recorder | Fixupe',
  description: 'Fixupe is a platform that provides AI Tools for task completion',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <div>
      
      <div>{children}</div>
     
    </div>
    
  )
}
