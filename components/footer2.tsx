import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { GithubIcon } from 'lucide-react'




  
const footerItems: any = [
    
      {
        
        logo:  '/images/logo.png',
        myafrosurl: 'https://myafros.com',
        copyright: `
        ${'Copyright © '} ${new Date().getFullYear()}`,
        contact: 'Contact us',
        about: 'About us',
        projects: 'See more projects',
        privacy: '/privacy',
        terms: '/terms',
        info: 'Fixupe project is an initiative of My Afros',
        github: 'https://github.com/eleshinlomo/myafrosfrontendnew',
        others: 'Projects'
    },

]


export const Footer2 = ()=>{
    return (
        <div>

<div className='bottom-0 text-white md:text-left bg-gradient-to-r from-black
             via-gray-800 to-black px-6 py-8  w-full'>
  <p className='text-center text-2xl mb-2'>Quick Links</p>
  

{ footerItems ?
<div>
  {footerItems.map((footer: any, index: any)=>

   <div key={index} className=' flex flex-col md:flex-row md:text-start text-center  
    md:justify-between items-center'>

    {/* First Column */}
    <div className=''>
    
    
    <div className='flex'>

    <div className='relative h-24 w-24'>
      <Image src="/images/visa_png.png" alt="logo" fill />
      </div>
      <div className='relative h-24 w-24'>
      <Image src="/images/mastcard_logo.jpg" alt="logo" fill />
      </div>

      </div>
    </div>
    
    {/* Second Column */}
    <div className='text-blue-800 flex flex-col'>
      <p className='text-white'>Information</p>
    <p>{footer.contact}</p>
    <p>{footer.about}</p>
    </div>


    {/* Third Column */}
    <div className='text-blue-800 flex flex-col'>
    <p className='text-white'>Terms</p>
    <Link href={footer.privacy}>Privacy</Link>
    <Link href={footer.terms}>Terms</Link>
    </div>


    {/* Fourth Column */}
    <div className=''>
      <p>{footer.info}</p>
      <div className='flex flex-col md:text-start text-center'>
      <div className='flex justify-center md:justify-start items-center  gap-3  '>
        <p>Designed by</p>
        <a href={footer.myafrosurl}  className='text-blue-800'>My Afros</a>
        </div>
      <p>{footer.copyright}</p>
      
      </div>
      
    </div>

    </div>
  )}
  </div>:null
}

</div>
        </div>
    )
}