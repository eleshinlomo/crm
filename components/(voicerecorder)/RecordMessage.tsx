import { ReactMediaRecorder } from "react-media-recorder";
import RecordIcon from "./RecordIcon";
import { Button } from "../ui/button";

type Props = {
  handleStop: any;
};

export const RecordMessage = ({ handleStop }: Props) => {
  return (
     <div>
    <ReactMediaRecorder
      audio
      onStop={handleStop}
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div className="mt-2">
          <p className="mt-2 text-white font-light">{status}</p>
            
            
          
            
<div className="flex">
<Button className="bg-black text-white " 
onClick={startRecording}>Record</Button>
<RecordIcon
              classText={
                status == "recording"
                  ? "animate-pulse text-red-500"
                  : "text-sky-500"
              }
            />
            
<Button className="bg-black text-white" 
onClick={stopRecording}>Stop</Button>

</div>

          
        </div>
      )}
    />
   </div>
  );
};

export default RecordMessage;