"use client"
import {useState, useEffect} from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { voiceToText } from '@/components/voicetotext'
import { SpinnerOne } from '@/components/spinner'
import Image from 'next/image'

const VoiceToTextPage = () => {
  const [fileInput, setFileInput] = useState<null | any>(null)
  const [transcribedMessage, setTranscribedMessage] = useState<null | any>(null)
  const [isLoading, setIsloading] = useState(false)
  const [message, setMessage] = useState<string | null>('')

  const loading = (<div className='relative h-16 w-16'>
    <Image src={SpinnerOne} alt='loader' fill/></div>)


    const handleTranscription = async (e: any)=>{
        const response: any = await voiceToText(e, fileInput)
        setIsloading(true)
        if (response.ok){
        setTranscribedMessage(response.data)
        setIsloading(false)
        }else{
          console.log(response.error)
          setMessage(response.error)
          setIsloading(false)
        }
    }
    return (
      <div className=" text-center flex flex-col justify-center items-center
       text-black text-2xl gap-4 px-4 py-8">
          
           <p className='py-4 font-extrabold font-sans text-2xl'>TRANSCRIBER</p>
          <p className='py-8 font-extrabold text-sm'>File uploads are currently limited to 
          25 MB and the following input file types are supported: 
          mp3, mp4, mpeg, mpga, m4a, wav, and webm.</p>
          
          
          <form onSubmit={handleTranscription} className='flex flex-col 
          justify-center items-center text-center'>
            
        <input 
          name='audiofile'
          type='file'
          accept='audio/*'
          onChange={(e)=>setFileInput(e.target.files?.[0] || null)}
          className='px-4 mb-4 ml-24 text-sm md:text-lg'
          required
          />

          <Button type='submit' 
          className=' text-white p-2 rounded-2xl'>
          
          Transcribe</Button>
          </form>
           
           <div>
            <p className='py-4'>Don&apos;t have an Audio file?</p>
          <Link href='/voicerecorder'>
            <Button className=' text-white p-2 rounded-2xl'>
            Use Voice Recorder
          </Button>
          </Link>
          </div>
         
         {/* Loading */}
          <div>
            {isLoading? 
            <p>{loading}</p>:null
            }
          </div>

          <div className='py-8 px-4 border  shadow-2xl overflow-scroll'>
            <p className='font-extrabold py-4'>Transcription</p>
            {message?message:null}
            {transcribedMessage? transcribedMessage: <p>No text available</p>}
          </div>

      </div>
    )
  }
  
  export default VoiceToTextPage