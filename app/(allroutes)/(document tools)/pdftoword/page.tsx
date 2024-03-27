"use client"
// Import necessary dependencies
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SpinnerOne } from '@/components/spinner';
import Image from 'next/image'

const PDFToWordPage = () => {
  const [fileInput, setFileInput] = useState<null | any>(null);
  const [wordFileBlob, setWordFileBlob] = useState<null | any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loading = (<div className='relative w-24 h-24'>
  <Image src={SpinnerOne} alt='spinner' fill/></div>);

  const BASE_URL = process.env.NEXT_PUBLIC_FAST_API_BASE_URL;

  const pdfToWordConverter = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    // Create a FormData object
    const formData = new FormData();
    formData.append('pdffile', fileInput);

    try {
      // Make a POST request to the FastAPI endpoint
      const response = await fetch(`${BASE_URL}/pdftoword`, {
        mode: 'cors',
        method: 'POST',
        body: formData,
      });

      // Parse the response as JSON
      const blob = await response.blob();
   
      if (blob){

      // Set the transcribed message and stop 
      console.log(blob)
      
      setWordFileBlob(blob);
      setIsLoading(false)
      }
    
      
    } catch (error) {
      console.error(error)
      setIsLoading(false);
    }finally{
      setIsLoading(false)
      setFileInput('')
    }
  };


  const handleDownload = () => {
    if(! wordFileBlob) return
    
      const newBlob = new Blob([wordFileBlob], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'})
      const blobURL = URL.createObjectURL(newBlob)

      // Create an invisible link and trigger a click to download
      const a = document.createElement('a');
      a.href = blobURL;
      a.download = 'output.docx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

       // Revoke the Blob URL to free up memory
    URL.revokeObjectURL(blobURL);
  };

  return (
    <div className="text-center flex flex-col justify-center 
    items-center text-black text-2xl gap-4 px-8 py-8">
      <p className='py-8 font-extrabold text-sm'>
        Upload Your PDF file and Convert to WORD document in 1 minute.
        </p>

      <form onSubmit={pdfToWordConverter} className='flex flex-col 
      justify-center items-center text-center'>
        <input
          name='pdffile'
          type='file'
          accept='application/pdf' // Set the accepted file type
          onChange={(e) => setFileInput(e.target.files?.[0] || null)}
          className='px-4 mb-4 ml-24 text-sm md:text-lg'
          required
        />

        <Button type='submit' className='text-white p-2 rounded-2xl'>
          Convert to WORD
        </Button>
      </form>

       {/* Loading */}
       <div>
        {isLoading ? <p>{loading}</p> : null}
      </div>

      <Button onClick={handleDownload}>Download Word File</Button>
      {/* <div>
        {wordFileBlob}
      </div> */}

      <div>
        <p className='py-4'>Want to Record Your Meetings?</p>
        <Link href='/voicerecorder'>
          <Button className='text-white p-2 rounded-2xl'>
            Record Wav Audio
          </Button>
        </Link>
      </div>

     

      <div className='py-8 px-4'>
        <p className='font-extrabold py-4'>Need to convert Audio to Text?</p>
        <Button><Link href='/aitranscriber'>See Transcriber</Link></Button>
      </div>
    </div>
  );
};

export default PDFToWordPage;
