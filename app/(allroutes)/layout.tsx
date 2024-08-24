'use client'

import Footer from '@/components/footer'
import React, {useState, useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ChatbotPage from './(publicroutes)/chatbot/page'



interface AllRoutesProps {
    children: React.ReactNode
}

const AllRoutesLayout = ({children}: AllRoutesProps) => {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <div>
    {children}
    <ChatbotPage />
    <Footer />
    </div>
  )
}

export default AllRoutesLayout