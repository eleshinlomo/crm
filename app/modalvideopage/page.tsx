import ModalVideo from '@/components/modal-video'
import VideoThumb from '../../public/bubble.png'
import React from 'react'

const ModalVideoPage = () => {
  return (
    <div className='pt-6'>
        {/* Hero image */}
        <ModalVideo
            thumb={VideoThumb}
            thumbWidth={400}
            thumbHeight={600}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />
    </div>
  )
}

export default ModalVideoPage