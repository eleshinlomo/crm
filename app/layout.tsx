
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'



const inter = Inter({ subsets: ['latin'] })

export const meta = { 
  name: "google-site-verification",
  content: "w5ae3CSgteS7FOKtCPGydV4sZsJMfkvXJZp4nZ2XGHA"
}

export const metadata: Metadata = {
  title: 'Home | Fixupe',
  description: 'Fixupe is a platform that provides AI Tools for task completion',
}

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
})=> {

 


  return (
    
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
     
    </html>
    
  )
}

export default RootLayout
