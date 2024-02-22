
'use client'
import Link from 'next/link'
import {useState, useEffect} from 'react'

const EmailPage = () => {

    const emailData = [
        {
            id:1,
            titleone: 'sender',
            titletwo: 'subject',
            subject: 'Hello friend',
            sender: 'Tope',

        },

        {
            id:2,
            titleone: 'sender',
            titletwo: 'subject',
            subject: 'Hi Buju',
            sender: 'Mark'
        },
    ]

    const handleEmail = ()=>{
        setEmails(emailData)
    }

    useEffect(()=>{
       handleEmail()
    }, [])

    const [emails, setEmails] = useState<Array<string | any>>([])

  return (
    <div className='bg-white text-black w-full py-8 px-2'>
        

        <div className=''>
        <div className='grid grid-flow-row md:grid-cols-3 text-white'>

        <div className='bg-black'>
        <p>Id</p>
        </div>

        <div className='bg-black'>
        <p>Sender</p>
        </div>

        <div className='bg-black'>
        <p>Subject</p>
        </div>
        
        </div>
        
        <div className='grid grid-flow-row md:grid-cols-3'>
            
        {emails?.map((email, index)=>

        <div key={index}>
            
            <Link href={`/emaildetailpage/${email.id}`} className='flex'>
            <div>
            <p>{email.id}</p>
            </div>
            <div>
                <p>
                {email.sender}
            </p>
            </div>
           
           <div>
           
            <p>
            {email.subject}
            </p>
            </div>
            </Link>
        </div>)
       }
       </div>
       </div>

    </div>
  )
}

export default EmailPage