
import Footer from '@/components/footer'
import './globals.css'
import {useState, useEffect} from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Company } from '@/components/urls'
import DashboardTools from '@/components/tools'
import { CompanyProvider } from '@/components/contextprovider'
import ChatBotPage from './(allroutes)/chatbotpage'




const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode,
  companyValue: string
}
export const meta = { 
  name: "google-site-verification",
  content: "w5ae3CSgteS7FOKtCPGydV4sZsJMfkvXJZp4nZ2XGHA"
}

export const metadata: Metadata = {
  title: 'Home | Fixupe',
  description: 'Fixupe is a platform that provides AI Tools for task completion',
}

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

const RootLayout = ({children}: RootLayoutProps)=> {
 
  // Get company value
  const companyValue = 'default'
  console.log(companyValue)

  return (
    
    <html lang="en">
      
      <body className={inter.className}>
        
        {children}
        <ChatBotPage />
        
      </body>
     
    </html>
    
  )
}

export default RootLayout
