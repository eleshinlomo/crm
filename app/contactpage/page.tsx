import { Contact } from '@/components/contact'
import HomeNavBar from '@/components/homenavbar'
import React from 'react'
import { Footer } from '@/components/footer'
import FeedbackPage from '../feedbackpage/page'

const ContactPage = () => {
  return (
    <div>
      <HomeNavBar />
        <Contact />
        
      <Footer />
    </div>
  )
}

export default ContactPage