
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const meta = { 
  name: "google-site-verification",
  content: "w5ae3CSgteS7FOKtCPGydV4sZsJMfkvXJZp4nZ2XGHA"
}

export const metadata: Metadata = {
  title: 'Fixupe',
  description: 'Create everything with AI',
}

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
     
    </html>
    
  )
}
