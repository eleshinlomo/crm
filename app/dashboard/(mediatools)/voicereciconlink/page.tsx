import React from 'react'
import { Button } from '@/components/ui/button'
import RecordIcon from '@/components/(voicerecorder)/RecordIcon'

const VoiceRecIconLink = () => {

    const classText = 'Record'
    
  return (

    
    <div>
        <Button size='icon' >
          <RecordIcon classText={classText} />
        </Button>
    </div>
  )
}

export default VoiceRecIconLink