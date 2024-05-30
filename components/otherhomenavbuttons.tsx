import Link from 'next/link'
import { Button } from './ui/button'

export const OtherHomeNavButtons = ()=>{
    return (
        <div className=''>

  <div className='grid grid-flow-row md:grid-cols-2 gap-3'>
    
<Button className='w-full'>
<Link href='/dashboard/dashboardpage'
className=''>
    Dashboard</Link>
</Button> 


<Button className='w-full'>
<Link href='/aboutpage'
className=''
>About us</Link>
</Button>

<Button className='w-full'>
<Link href='/dashboard/dashboardpage'
  className=''
>CRM</Link>
</Button>

<Button className='w-full'>
<Link href='/dashboard/genai/contentwriter'
  className=''
>GenAI</Link>
</Button>

<Button className='w-full'>
<Link href='/pdftoword'
  className=''
>PdftoWord</Link>
</Button>

<Button className='w-full'>
<Link href='/'
className=''
>Settings</Link>
</Button>
                    

</div>
</div>
    )
}