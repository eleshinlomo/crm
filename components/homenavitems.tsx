import Link from 'next/link'
import { Button } from './ui/button'

export const HomeNavItems = ()=>{
    return (
        <div>

<Button className='w-32'>
                        <Link href='/dashboard'
                      className=''
                      >Dashboard</Link>
                      </Button>

                      <Button className='w-32'>
                        <Link href='/voicerecorder'
                      className=''
                      >Voice Recorder</Link>
                      </Button>

                      <Button className='w-32'>
                        <Link href='/crm'
                      className=''
                      >CRM</Link>
                      </Button>

                      <Button className='w-32'>
                        <Link href='/voicechat'
                      className=''
                      >Voice Search</Link>
                      </Button>
                      <Button className='w-32'>
                        <Link href='/textchat'
                      className='w-32'
                      >Text Search</Link>
                      </Button>
        </div>
    )
}