import Link from 'next/link'
import { Button } from './ui/button'

export const HomeNavItems = ()=>{
    return (
        <div className=''>

  <div className='grid grid-cols-2 gap-3'>
    
<Button className='w-full'>
<Link href='/dashboard'
className=''>
    Dashboard</Link>
</Button> 
                        
                        <Button className='w-full'>
                        <Link href='/aitranscriber'
                      className=''
                      >Transcriber</Link>
                      </Button>

                  
                      <Button className='w-full'>
                        <Link href='/voicerecorder'
                      className=''
                      >Voice Recorder</Link>
                      </Button>

                    
                      <Button className='w-full'>
                        <Link href='/voicechat'
                      className=''
                      >Voice Chat</Link>
                      </Button>

                      <Button className='w-full'>
                        <Link href='/textchat'
                      className=''
                      >Text Chat</Link>
                      </Button>

                      <Button className='w-full'>
                        <Link href='/'
                      className=''
                      >Settings</Link>
                      </Button>

                      {/* <Button className='w-full'>
                        <Link href='/pdftoword'
                      className=''
                      >PDFtoWord</Link>
                      </Button> */}
                      

                      </div>
        </div>
    )
}