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
      render={({ status , startRecording, stopRecording, mediaBlobUrl }) => (
        <div className="mt-2">
          {status === 'recording'? <p className="text-center font-extrabold
           mt-2 text-red-500">
          {status.toUpperCase()}</p>:

          <p className="text-center font-extrabold mt-2 text-blue-500">
          {status.toUpperCase()}</p>
          }
            
            
          
            
<div className="text-center flex justify-between items-center">
<Button className="bg-black text-white rounded-2xl" 
onClick={startRecording}>Record</Button>


<RecordIcon
              classText={
                status === "recording"
                  ? "animate-pulse text-red-500"
                  : "text-sky-500"
              }
            />
            
<Button className="bg-black text-white rounded-2xl" 
onClick={stopRecording}>Stop</Button>

</div>

          
        </div>
      )}
    />
   </div>
  );
};

export default RecordMessage;