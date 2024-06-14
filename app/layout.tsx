

import {GoogleTagManager} from '@next/third-parties/google'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ChatBotPage from './(allroutes)/(publicroutes)/chatbotpage'





const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
}


export const metadata: Metadata = {
  title: 'Home | Fixupe',
  description: 'Fixupe is a platform that provides AI Tools for task completion',
}


const RootLayout = ({children}: RootLayoutProps)=> {
 

  return (
    
    <html lang="en">
      
      <body className={inter.className}>
        
        {children}
        <ChatBotPage />
        <GoogleTagManager gtmId='G-TWYHZMCD1T' />
        
      </body>
     
    </html>
    
  )
}

export default RootLayout
