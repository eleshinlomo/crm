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
  
  export default function Home() {
    return (
      <div className='w-full'>
        <HomeNavBar />
        <Hero />
        <Features />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
        <Footer />
      </div>
    )
  }