import Link from 'next/link'
import { Button } from './ui/button'

export const HomeNavItems = ()=>{
    return (
        <div className=''>

  <div>
    <ul className=''>
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
                      >Voice Search</Link>
                      </Button>

                      <Button className='w-full'>
                        <Link href='/textchat'
                      className=''
                      >Text Search</Link>
                      </Button>
                      </ul>

                      </div>
        </div>
    )
}