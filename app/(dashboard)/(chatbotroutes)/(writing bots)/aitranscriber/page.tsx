"use client"
import {useState, useEffect} from 'react'
import Link from 'next/link'

const ImagePage = () => {
  const [fileInput, setFileInput] = useState<null | any>(null)
  const [transcribedMessage, setTranscribedMessage] = useState('')
  const [isLoading, setIsloading] = useState(false)

  const loading = "Transcribing..."
  const BASE_URL = process.env.NEXT_PUBLIC_FAST_API_BASE_URL;

    const handleTranscription = async (e: any)=>{
      e.preventDefault()
      setIsloading(true)
      const formData = new FormData()
      formData.append('audiofile', fileInput, 'audiofile.wav')
      try{
      const response = await fetch(`${BASE_URL}/transcriber`, {
        mode: 'cors',
        method: 'POST',
        body: formData

      })

      const data = await response.json()
      if(!data) throw new Error("No response from server")
      console.log(data)
      setTranscribedMessage(data)
      setIsloading(false)
      return data
      }
      catch(error){
      console.log(error)
      }
    }
    return (
      <div className=" text-center flex flex-col justify-center items-center
       text-black text-2xl gap-4 px-8 py-8">
          

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

          <button type='submit' 
          className='bg-blue-500 text-white p-2 rounded-2xl'>
          
          Transcribe</button>
          </form>

          <Link href='/voicerecorder'><button className='bg-blue-500 text-white p-2 rounded-2xl'>
            Record Wav Audio
          </button>
          </Link>
         
         {/* Loading */}
          <div>
            {isLoading? 
            <p>{loading}</p>:null
            }
          </div>

          <div className='py-8 px-4'>
            <p className='font-extrabold py-4'>Transcription</p>
            {transcribedMessage}
          </div>

      </div>
    )
  }
  
  export default ImagePage