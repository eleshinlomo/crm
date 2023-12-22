import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Menu} from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { HomeSidebar } from './homesidebar'


const HomeNavBar = ()=>{
    return(
       <div>
        
        <div className='   text-white bg-black  
        md:flex flex-1 justify-around md:px-44 '>

      
<div className=' hidden md:flex  w-full flex-1'>
        <Link href='/'>
          <div className='relative w-16 h-16'>
        <Image src="/images/logo.png" alt="logo" fill />
        </div>
        </Link>
      </div>


<div className='md:hidden'>
<Sheet>
<SheetTrigger>
<Button size='icon'  className='mt-3 w-10 h-10 ml-2'  asChild>
  <Menu />
</Button>
</SheetTrigger>

<SheetContent side='left' className='bg-black flex flex-col'>
  <HomeSidebar />
</SheetContent>
</Sheet>
</div>

   
      

      <div className='hidden md:flex gap-4 md: mt-3'>
        <p className=' md:flex  md:text-md mt-3'>Complete task faster with AI </p>
        <Button value='outline' className='   py-4 text-sm justify-self-end px-2 ' asChild>
          <Link href='/'>
          Sign In
          </Link>
        </Button>
      </div>
     </div>

     </div>

    )
}

export default HomeNavBar