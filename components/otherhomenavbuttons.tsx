import Link from 'next/link'
import { Button } from './ui/button'

export const OtherHomeNavButtons = ()=>{
    return (
        <div className=''>

  <div className='grid grid-cols-2 gap-3'>
    
<Button className='w-full'>
<Link href='/dashboard/dashboardpage'
className=''>
    Dashboard</Link>
</Button> 
                        
                      <Button className='w-full'>
                      <Link href='/dashboard/genai/aitranscriber'
                      className=''
                      >Transcriber</Link>
                      </Button>

                  
                      <Button className='w-full'>
                        <Link href='/dashboard/genai/voicerecorder'
                      className=''
                      >Voice Recorder</Link>
                      </Button>

                    
                      <Button className='w-full'>
                        <Link href='/dashboard/genai/voicechat'
                      className=''
                      >Voice Chat</Link>
                      </Button>

                      <Button className='w-full'>
                        <Link href='/dashboard/genai/contentwriter'
                      className=''
                      >Content Writer</Link>
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