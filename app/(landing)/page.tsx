export const metadata = {
    title: 'Home - Simple',
    description: 'Page description',
  }
  
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import HomeNavBar from '@/components/homenavbar'
import Footer  from '@/components/footer'
import CookiePage from '@/components/cookiepage'
import ModalVideoPage from '../modalvideopage/page'
import ChatBotPage from '../(allroutes)/chatbotpage'


  
  export default function Home() {
    
    return (

      <div className='relative overflow-hidden flex flex-col justify-center'>
        <HomeNavBar />
        <Hero />
        <ModalVideoPage />
        <Features />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
        <Footer />
        <ChatBotPage />
        <CookiePage />
      </div>
    )
  }