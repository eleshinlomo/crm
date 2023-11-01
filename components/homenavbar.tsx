import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
// import {
//   Menubar,
//   MenubarContent,
//   MenubarItem,
//   MenubarMenu,
//   MenubarSeparator,
//   MenubarShortcut,
//   MenubarTrigger,
// } from "@/components/ui/menubar"


export const NavBar = ()=>{
    return(
       <div>
        
        <div className='  mx-3  md:flex lg:flex md:justify-between
          text-black'>

      
      <div className='relative w-24 h-12 mt-2 '>
        
        <Link href='/'>
        <Image src="/images/logo.png" alt="logo" fill />
        </Link>
        
      </div>

      {/* <div className='  '>

      <Menubar className=' ml- ml-48'>
  <MenubarMenu>
    <MenubarTrigger><Button variant='outline' asChild>
      <Link href='/'>Home</Link>
      </Button></MenubarTrigger>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger>Who is online</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        Men Online <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Women online</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger>Register</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        Register as a man <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Register as a woman</MenubarItem>
    </MenubarContent>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger>Chat with support</MenubarTrigger>
   
  </MenubarMenu>

</Menubar>

        
      </div> */}
      

      <div className='flex gap-2 md:pt-5 lg:pt-5'>
        <p className='text-white mt-3 md:text-sm '>Are you already a Member ?</p>
        <Button className=' bg-pink-800' asChild>
          <Link href='/dashboard'>
          Sign In
          </Link>
        </Button>
      </div>
     </div>

     </div>

    )
}