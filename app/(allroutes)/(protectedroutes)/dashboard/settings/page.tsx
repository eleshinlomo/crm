import Image from 'next/image'

const ImagePage = () => {
    return (
      <div className=" text-center text-lg px-2">
          Settings COMING SOON...
          <div className='relative w-full h-72'>
          <Image src='/images/ai_web.png' alt='random pics' fill />
          </div>
      </div>
    )
  }
  
  export default ImagePage